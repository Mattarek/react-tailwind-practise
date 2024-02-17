import './App.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Cards } from './components/Cards/Cards';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Cards />
            <Footer />
        </>
    );
}

export default App;
