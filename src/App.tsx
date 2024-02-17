import './App.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Cards } from './components/Cards/Cards';
import { Analytics } from './components/Analytics/Analytics';
import { Newsletter } from './components/Newsletter/Newsletter';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Analytics />
            <Cards />
            <Newsletter />
            <Footer />
        </>
    );
}

export default App;
