import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Coins } from './pages/Coins/Coins';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/coins' element={<Coins />} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
