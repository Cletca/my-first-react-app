import './App.css'

import { useState } from 'react';

import NavBar from "./components/navBar.tsx";
import Main from "./components/main.tsx";
import Footer from "./components/footer.tsx";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <>
            <header>
                <NavBar toggleMenu={toggleMenu} />
            </header>
            <main className="main">
                <Main isMenuOpen={isMenuOpen} />
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </>
    );
}