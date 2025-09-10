import './App.css'

import NavBar from "../components/navBar.tsx";
import Main from "../components/main.tsx";
import Footer from "../components/footer.tsx";

export default function App() {
  return (
      <>
          <header>
              <NavBar />
          </header>
          <main className="main">
              <Main />
          </main>
          <footer className="footer">
              <Footer />
          </footer>
      </>
  )
}