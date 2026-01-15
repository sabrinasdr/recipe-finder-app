'use client'
import { Dispatch, SetStateAction } from "react"

type SidebarProps = {
    categories: {
        cuisines: string[],
        mealTypes: string[]
    },
    onFilterChange: (category: 'mealTypes' | 'cuisines', value: string) => void,
    filters: { mealTypes: string[], cuisines: string[] },
    setFilters: Dispatch<SetStateAction<{ mealTypes: string[], cuisines: string[] }>>
}

export default function Sidebar({ categories, onFilterChange, filters, setFilters }: SidebarProps) {
    const { cuisines, mealTypes } = categories
    function resetFilters() {
        setFilters((prev) => ({ mealTypes: [], cuisines: [] }))
    }

    return (
        <div className="font-light 2xl:font-medium">
            <div className="flex mb-4 justify-between">
                <h2 className="text-gray-600">Filters</h2>
                <button className="ms-auto cursor-pointer text-gray-600 hover:text-sage" onClick={resetFilters}>Reset</button>
            </div>
            <h2 className="uppercase  text-sage">Meal types</h2>

            <form>
                <ul className="text-gray-700 ">
                    {mealTypes?.map((mealType, index) => (
                        <li key={index}>
                            <input className="accent-rust"
                                id={mealType}
                                type="checkbox"
                                onChange={() => onFilterChange('mealTypes', mealType)}
                                checked={filters.mealTypes.includes(mealType)}
                            />
                            <label className="ms-2" htmlFor={mealType}>{mealType}</label>
                        </li>))}

                </ul>
                <h2 className="text-sage uppercase mt-4">Cuisines</h2>
                <ul className="">
                    {cuisines?.map((cuisine, index) => (<li key={index}>
                        <input id={cuisine}
                            className="accent-rust"
                            type="checkbox"
                            onChange={() => onFilterChange('cuisines', cuisine)}
                            checked={filters.cuisines.includes(cuisine)}
                        />
                        <label className="ms-2 text-gray-700" htmlFor={cuisine}>{cuisine}</label>
                        </li>))
                    }
                </ul>
            </form>
        </div>
    )
}