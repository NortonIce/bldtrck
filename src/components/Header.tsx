import Link from 'next/link'

export default function Header() {
    return (
        <header className="sticky top-0 bg-white shadow-md z-50">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    <Link href="/">Home</Link>
                    <Link href="/gyms">Gyms</Link>
                </div>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded transition duration-300">
                    Login
                </button>
            </nav>
        </header>
    )
}
