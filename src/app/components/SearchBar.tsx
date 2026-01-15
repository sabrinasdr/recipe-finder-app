import { SearchIcon } from "@/assets/svg"

export default function SearchBar(){
    return(
    <form  action="/search" className="bg-white max-w-3xl rounded-full relative  me-0 ">
        <label  className="sr-only" htmlFor="search-input">Search for a recipe</label>
        <SearchIcon className="absolute top-0 bottom-0 left-2 my-auto text-sm md:text-xl text-light-sage"/>
        <input autoFocus required name="query" className="w-full text-xs md:text-md ps-8 md:ps-10 py-2 rounded-full bg-butter outline-light-sage outline-2 placeholder-gray-600" id="search-input" type="text"placeholder="eg. Pasta Carbonara"/>  
    </form>
    )
}
