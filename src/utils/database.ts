import { supabase } from "@/app/supabase-client";
import { RecipeCard } from "@/app/types";


export async function getVeganRecipes() {
  try {
    let cards
    const { data, error } = await supabase
      .from('dishes')
      .select("id,name,glutenFree,vegan,vegetarian,dairyFree,image,cuisines,mealTypes")
      .eq("vegan", true)
      .limit(20)
    if (error) {
      throw new Error(error?.message)
    }
    if (data) {
      cards = data.map((recipe) => ({
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
    return cards
  }
  catch (err) {
    console.error(err)
  }
}

export async function getVegetarianRecipes() {
  try {
    let cards
    const { data, error } = await supabase
      .from('dishes')
      .select("id,name,glutenFree,vegan,vegetarian,dairyFree,image,cuisines,mealTypes")
      .eq("vegetarian", true)
      .limit(20)
    if (error) {
      throw new Error(error?.message)
    }
    if (data) {
      cards = data.map((recipe) => ({
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
    return cards
  }
  catch (err) {
    console.error(err)
  }
}

export async function getDairyFreeRecipes() {
  try {
    let cards
    const { data, error } = await supabase
      .from('dishes')
      .select("id,name,glutenFree,vegan,vegetarian,dairyFree,image,cuisines,mealTypes")
      .eq("dairyFree", true)
      .limit(20)
    if (error) {
      throw new Error(error?.message)
    }

    if (data) {
      cards = data.map((recipe) => ({
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
    return cards

  }
  catch (err) {
    console.error(err)
  }
}

export async function getGlutenFreeRecipes() {
  try {
    let cards
    const { data, error } = await supabase
      .from('dishes')
      .select("id,name,glutenFree,vegan,vegetarian,dairyFree,image,cuisines,mealTypes")
      .eq("glutenFree", true)
      .limit(20)
    if (error) {
      throw new Error(error?.message)
    }
    if (data) {
      cards = data.map((recipe) => ({
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
    return cards

  }
  catch (err) {
    console.error(err)
  }
}

export async function getTopRecipes() {
  try {
    let cards
    const { data, error } = await supabase
      .from('dishes')
      .select("id,name,glutenFree,vegan,vegetarian,dairyFree,image,score,cuisines,mealTypes")
      .order("score", { ascending: false, nullsFirst: false })
      .limit(20)
    if (error) {
      throw new Error(error?.message)
    }
    if (data) {
      cards = data.map((recipe) => ({
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
    return cards

  }
  catch (err) {
    console.error(err)
  }
}





export async function searchRecipes(query: string) {
  let cards: RecipeCard[] = []
  const { data, error } = await supabase

    .from('dishes')
    .select("id,name,image,vegan,glutenFree,vegetarian,dairyFree,cuisines,mealTypes")
    .ilike("name", `%${query}%`)
  if (error) {
    throw new Error(error?.message)
  }
  if (data) {
    cards = data.map((recipe) => ({
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
  return cards
}

export async function getRecipeIngredients(id: number) {
  const { data, error } = await supabase
    .from('recipes_description')
    .select('ingredient_sections')
    .eq("id", id)
  if (error) {
    throw new Error(error?.message)
  }

  const res = data[0].ingredient_sections
  console.log(res)
  const fixed = res
  .replace(/None/g, "null")
  .replace(/'/g, '"')
  const finalResult = JSON.parse(fixed)
  return finalResult
 

}
export async function getRecipeInstructions(id: number) {
  const { data, error } = await supabase
    .from('recipes_description')
    .select('instructions')
    .eq("id", id)
  if (error) {
    throw new Error(error?.message)
  }
  
   const res = data[0].instructions
   const fixed = res.replace(/'/g, '"');
   const array = JSON.parse(fixed)
   const finalResult =array.map((object:{display_text:string}) => object.display_text)
  return finalResult
}





export async function getRecipeById(id: number) {
  try {
    const { data, error } = await supabase
      .from("dishes")
      .select("id,name,glutenFree,vegan,vegetarian,dairyFree,image,cuisines,mealTypes")
      .eq("id", id)
    if (error) {
      throw new Error(error?.message)
    }
    return data?.[0]
  }
  catch (err) {
    console.error(err)
  }
}



