import { RecipeCard } from "../types";
import Card from "./Card";

export default function CardsGrid({array}:{array: RecipeCard[] }){
return(
    <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {array?.map((recipe)=><Card 
                                key={recipe.id} 
                                {...recipe}
                                />)}
    </div>
)
}