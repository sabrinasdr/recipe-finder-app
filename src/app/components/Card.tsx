import Image from "next/image"
import { RecipeCard } from "../types"
import Link from "next/link"
import { Archivo } from "next/font/google"

const archivo = Archivo({ weight: ["100", "200", "300", "400"], subsets: ['latin'] })

export default function Card(card: RecipeCard) {
    const { id, title, image } = card
    return (
        <Link title={title} href={`recipes/${id}`} className="border border-rust font-semibold  p-4 flex flex-col  items-center transition-all delay-100 hover:bg-rust/40 hover:*:text-sage ">
            <Image loading="lazy" className="aspect-square object-cover" quality={50} src={image} alt={title} width={556} height={370} placeholder="blur" blurDataURL={image} />
            <h2 className={`capitalize line-clamp-3 text-center text-sm text-rust ${archivo.className} `}>{title}</h2>
        </Link>
    )
}