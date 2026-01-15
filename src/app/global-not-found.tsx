import './globals.css'
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
    return (
        <html lang="en">
            <body className="h-screen">
                <div className="h-full p-20 bg-butter flex flex-col justify-center ">
                    <h1 className='text-xl font-semibold text-sage '>Not found</h1>
                    <h2 className='text-3xl black font-bold '>We can't find the page</h2>
                    <p className='text-gray-600'>Sorry, the page you are looking for doesn't exist or has been removed</p>
                    <Link className=" text-center md:self-start mt-6 bg-rust font-light text-white rounded-sm px-5 py-1" href={'/'}>Back to Home</Link>
                </div>
            </body>
        </html>
    )
}