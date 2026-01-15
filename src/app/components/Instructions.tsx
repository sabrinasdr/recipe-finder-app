type InstructionsProps={
    instructionsArray:string []
}
export default function Instructions({instructionsArray}:InstructionsProps){
    
    return(
        <div className="mt-3">
            <h2 className="mb-3  text-dark-sage uppercase">Instructions</h2>
            <ul>
                {instructionsArray.map((intruction,index)=><li className="mb-3" key={index}>
                <span className="border rounded-full px-2 py-1  bg-sage text-butter">{index+1}</span>    {intruction}</li>)}
            </ul>
        </div>
    )
}