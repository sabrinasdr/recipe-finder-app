
type IngredientsProps={
    ingredientsArray:Array<{
        name:string,
        ingredients:{
            name:string,
            extra_commment:string,
            metricUnit:{
                quantity?:string |null,
                display?:string |null
            },
            primary_unit:{
                quantity?:string |null,
                display?:string |null
            }
        }[]
    }>
}

export default  function Ingredients({ingredientsArray}:IngredientsProps){
    return(
        <div>
            <h2 className="mb-2 text-dark-sage uppercase">Ingredients</h2>
            <ul>
                {ingredientsArray?.map((ingredient,index)=>
                <li className="mb-3 text-rust"  key={index}>
                {ingredient?.name}
                    <ul>
                            <li className="text-black">{ingredient.ingredients.map((i,index)=>(<p key={index}> – {`${i.primary_unit.quantity??""} ${i.primary_unit.display?? ""} ${i.name}`}</p>))}</li>
                    </ul>
                </li>)}
            </ul>
        </div>
    )
    }