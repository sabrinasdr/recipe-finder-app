'use client'
import { RecipeCard } from "../types"
import { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import { containsAny } from "@/utils"
import CardsGrid from "./CardsGrid"

type ResultsGridProps = {
    cards: RecipeCard[],
    categories: {
        cuisines: string[],
        mealTypes: string[]
    }
}

export default function ResultsGrid({ cards, categories }: ResultsGridProps) {
    const [results, setResults] = useState(cards)
    const [isOpen, setIsOpen] = useState(false)
    const [filters, setFilters] = useState<{ mealTypes: string[], cuisines: string[] }>({
        mealTypes: [],
        cuisines: []
    })

    useEffect(() => {
        function applyFilter() {
        let finalCards = cards
        const { mealTypes, cuisines } = filters
        if (mealTypes.length > 0) {
            finalCards = finalCards.filter((recipe) => (containsAny(mealTypes, recipe.mealTypes)))
        }
        if (cuisines.length > 0) {
            finalCards = finalCards.filter((recipe) => (containsAny(cuisines, recipe.cuisines)))
        }
        setResults(finalCards)      
    }
    console.log("effect")
        applyFilter()
        
    }, [filters,cards])

    function handleCheckboxChange(category: 'mealTypes' | 'cuisines', value: string) {
        setFilters(prev => {
            const updated = prev[category].includes(value)
                ? prev[category].filter(v => (v !== value))
                : [...prev[category], value]
            const newFilters = { ...prev, [category]: updated }
            return newFilters
        })
    }

    return (
        <div className="flex w-full  flex-col md:flex-row">
            <button className="bg-sage shadow-sm shadow-black/50 cursor-pointer self-end mb-4 md:hidden rounded-sm px-3 py-2 text-white hover:bg-dark-sage" onClick={() => setIsOpen(!isOpen)}>Filters</button>
            {isOpen ?
                <div className="z-2 fixed inset-0 overflow-scroll bg-amber-100 md:hidden p-6 ">
                    <div className="w-full max-w-sm ">
                        <Sidebar categories={categories} onFilterChange={handleCheckboxChange} filters={filters} setFilters={setFilters} />
                    </div>
                    <button
                        className="mt-6  bg-sage shadow-sm shadow-black/50 cursor-pointer self-end mb-4 md:hidden rounded-sm px-3 py-2 text-white hover:bg-dark-sage"
                        onClick={() => setIsOpen(!isOpen)}>apply filters</button>
                </div> : null}
            <div className="hidden md:block min-w-1/6 me-6">
                <Sidebar categories={categories} onFilterChange={handleCheckboxChange} filters={filters} setFilters={setFilters} />
            </div>
            {results.length == 0 && <h1 className="mx-auto text-xl">Sorry no results match the filters </h1>}
            <div className="">
                <CardsGrid array={results} />
            </div>
        </div>
    )
}