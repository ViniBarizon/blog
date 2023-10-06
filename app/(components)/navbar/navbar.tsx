import Link from "next/link";

export default function Navbar () {
    return (
        <>
            <nav className="border shadow p-2">
                <div className="container text-secondary-text mx-auto flex justify-between items-center">
                    <div className="text-white font-bold">
                        <Link href="/">root#icon</Link>
                    </div>

                    <div className="flex-1 mx-4">
                        <input type="search" className="w-50% p-2 rounded-lg border border-gray-300 focus:outline-none" placeholder="Buscar assuntos" />
                    </div>

                    <ul className="flex space-x-4">
                        <Link href="/home">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/sign-up">Sign Up</Link>
                        <Link href="/sign-in">Sign In</Link>
                        <Link href="/contact">Contact</Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}