import Ingredients from "@/app/components/Ingredients"
import Instructions from "@/app/components/Instructions"
import { getRecipeById, getRecipeIngredients, getRecipeInstructions } from "@/utils/database"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

type paramsProps = {
    params: Promise<{ id: number }>
}

export async function generateMetadata({ params }: paramsProps): Promise<Metadata> {
    const { id } = await params
    const recipe = await getRecipeById(id)
    return {
        title: `${recipe?.name || "Recipe not found"} • Recipe finder`
    }
}
export default async function Page({ params }: paramsProps) {
    const { id } = await params
    const recipe = await getRecipeById(id)
    if (!recipe) {
        notFound()
    }
    const { glutenFree, vegan, vegetarian, dairyFree } = recipe
    return (
        <div className="pt-6 2xl:px-40 2xl:text-xl">
            <div className="pe-6 grid grid-cols-3  items-start  gap-1">
                <h1 className="text-xl col-span-3 md:col-2 text-center uppercase font-medium text-amber-950">{recipe.name}</h1>
                <div className=" gap-1 row-1 col-3 flex flex-wrap me-0 ms-auto *:text-white *:text-[0.9rem] *:rounded-sm *:px-1 2xl:*:px-2 2xl:*:text-lg ">
                    {glutenFree && <p className="bg-yellow-700">gluten free</p>}
                    {vegan && <p className="bg-light-sage">vegan</p>}
                    {vegetarian && <p className="bg-green-900 ">vegetarian</p>}
                    {dairyFree && <p className="bg-blue-800 text-nowrap">Dairy free</p>}

                </div>
            </div>
            <hr className="my-5  w-1/2 mx-auto text-gray-600/30" />
            <div className="p-6 flex flex-col md:flex-row-reverse  justify-center  items-start bg-butter">
                <Image className="aspect-video object-cover mx-auto md:size-1/2 size-auto mb-4 rounded-xs" src={recipe.image} alt={recipe.name} width={500} height={300} loading="lazy" />
                <div className="flex-1">
                    <Ingredients ingredientsArray={await getRecipeIngredients(id)} />
                    <Instructions instructionsArray={await getRecipeInstructions(id)} />
                </div>
            </div>
        </div>
    )
}