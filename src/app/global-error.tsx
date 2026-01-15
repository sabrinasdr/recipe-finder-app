'use client'
import './globals.css'
import Link from 'next/link'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body className="h-screen">
                <div className="h-full flex flex-col bg-butter justify-center p-10 lg:p-20">
                    <h2 className='text-3xl  font-bold mb-4'>Something went wrong</h2>
                    <p className="text-xl mb-6 text-gray-600">Please either refresh the page or return home to try again. </p>
                    <div className='flex flex-col gap-4 sm:flex-row '>
                        <button
                            className="bg-rust hover:bg-rust/70 cursor-pointer rounded-sm px-4 py-2  text-white  text-center"
                            onClick={() => reset()}>Try again</button>
                        <Link href='/' className='bg-white text-gray-600 cursor-pointer rounded-sm px-4 py-2   text-center'>Home</Link>
                    </div>
                </div>
            </body>
        </html>
    )
}