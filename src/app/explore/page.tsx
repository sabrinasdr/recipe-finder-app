import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import { getDairyFreeRecipes, getGlutenFreeRecipes, getTopRecipes, getVeganRecipes, getVegetarianRecipes } from "@/utils/database"
import CardsGrid from "../components/CardsGrid";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Explore recipes • Recipe finder',   
}

export default async function Page() {
  const [popularRecipes,
    veganRecipes,
    vegetarianRecipes,
    glutenFreeRecipes,
    dairyfreeRecipes] = await Promise.all(
      [getTopRecipes(), getVeganRecipes(), getVegetarianRecipes(), getGlutenFreeRecipes(), getDairyFreeRecipes()]
    )

  if (!popularRecipes || !veganRecipes || !glutenFreeRecipes || !vegetarianRecipes || !dairyfreeRecipes) {
    notFound()
  }
  return (
    <div>
      <TabGroup className="flex flex-col w-full">
        <p className="mx-auto mt-4 text-dark-sage text-2xl  italic font-light ">Need some inspiration ? </p>
        <h1 className="mx-auto text-gray-600 uppercase font-light">Explore by categories</h1>
        <hr className="mt-8  w-1/2 mx-auto text-black/20" />
        <TabList className="flex mx-auto my-4 flex-wrap justify-center *:data-selected:font-medium *:data-selected:border-b-2">
          <Tab className=" px-2 py-1  me-2 mb-2 text-rust  cursor-pointer hover:text-dark-sage transition  data-selected:text-dark-sage data-selected:border-b outline-0">Popular</Tab>
          <Tab className=" px-2 py-1  me-2 mb-2 text-rust  cursor-pointer hover:text-dark-sage transition  data-selected:text-dark-sage data-selected:border-b outline-0">Vegan</Tab>
          <Tab className=" px-2 py-1  me-2 mb-2 text-rust  cursor-pointer hover:text-dark-sage transition  data-selected:text-dark-sage data-selected:border-b outline-0">Vegetarian</Tab>
          <Tab className=" px-2 py-1  me-2 mb-2 text-rust  cursor-pointer hover:text-dark-sage transition  data-selected:text-dark-sage data-selected:border-b outline-0">Dairy free</Tab>
          <Tab className=" px-2 py-1  me-2 mb-2 text-rust  cursor-pointer hover:text-dark-sage transition  data-selected:text-dark-sage data-selected:border-b outline-0">Gluten free</Tab>
        </TabList>
        <TabPanels className="p-6">
          <TabPanel><CardsGrid array={popularRecipes} /></TabPanel>
          <TabPanel><CardsGrid array={veganRecipes} /></TabPanel>
          <TabPanel><CardsGrid array={vegetarianRecipes} /></TabPanel>
          <TabPanel><CardsGrid array={dairyfreeRecipes} /></TabPanel>
          <TabPanel><CardsGrid array={glutenFreeRecipes} /></TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}