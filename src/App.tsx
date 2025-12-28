import './App.css'

import { useState } from 'react';

import NavBar from "./components/navBar.tsx";
import Main from "./components/main.tsx";
import Footer from "./components/footer.tsx";

// Providers
import { NavigationProvider } from "./navigationContext.tsx";
import { ArtistProvider } from "./artistProvider.tsx";
import { PlayerProvider } from "./playerContext.tsx";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <NavigationProvider>
            <ArtistProvider>
                <PlayerProvider>
                    <header>
                        <NavBar toggleMenu={toggleMenu} />
                    </header>
                    <main className="main">
                        <Main isMenuOpen={isMenuOpen} />
                    </main>
                    <footer className="footer">
                        <Footer />
                    </footer>
                </PlayerProvider>
            </ArtistProvider>
        </NavigationProvider>
    );
}