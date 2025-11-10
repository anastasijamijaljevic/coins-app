import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Coins } from './pages/Coins/Coins';
import { CoinDetails } from './components/CoinDetails/CoinDetails';
import About from './pages/About/About';
import Footer from "./components/Footer/Footer";
import ProfileCard from "./components/ProfileCard/ProfileCard";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="coins/:coinId" element={<CoinDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </>
  )
}

export default App
