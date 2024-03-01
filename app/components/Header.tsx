interface HeaderProps {
    theme: string
    toggleTheme: () => void
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
    return (
        <header className="bg-white dark:bg-gray-800 shadow py-4 px-6 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Website Name</h1>
            <button
                onClick={toggleTheme}
                className="text-gray-800 dark:text-white font-semibold py-2 px-4 rounded border border-gray-300 hover:border-gray-400 focus:outline-none focus:border-blue-500 transition-all">
                {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
        </header>
    )
}
