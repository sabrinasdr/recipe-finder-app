
import { supabase } from "../supabase-client"
import { RecipeCard } from "../types"
import ResultsGrid from "../components/ResultsGrid"
import { Metadata } from "next"

type searchParamsProps = {
    searchParams: Promise<{ query: string }>
}

export async function generateMetadata({ searchParams }: searchParamsProps): Promise<Metadata> {
    const { query } = await searchParams
    return {
        title: `Search results for "${query}" • Recipe finder`
    }
}

export default async function Page({ searchParams }: searchParamsProps) {
    const { query } = await searchParams
    let cards: RecipeCard[] = []
    try {
        const { data, error } = await supabase
            .from('dishes')
            .select("id,name,image,vegan,glutenFree,vegetarian,dairyFree,cuisines,mealTypes")
            .ilike("name", `%${query}%`)
        if (error) {
            throw new Error(error?.message)
        }
        if (data) {
            cards = data.map((recipe, index) => ({
                id: recipe.id,
                title: recipe.name,
                image: recipe.image,
                isGlutenFree: recipe.glutenFree,
                isDairyFree: recipe.dairyFree,
                isVegan: recipe.vegan,
                isVegetarian: recipe.vegetarian,
                cuisines: recipe.cuisines,
                mealTypes: recipe.mealTypes

            }))
        }
    }
    catch (err) {
        console.error(err)
    }
    let mealTypes = cards.map((card) => (card.mealTypes)).flat(1)
    let cuisines = cards.map((card) => (card.cuisines)).flat(1)
    let categories = {
        mealTypes: [... new Set(mealTypes)],
        cuisines: [... new Set(cuisines)]
    }
    return (
        <div className="flex p-6 min-h-screen">
            {cards && <ResultsGrid cards={cards} categories={categories} />}
        </div>
    )
}