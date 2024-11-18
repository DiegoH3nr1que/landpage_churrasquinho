import Header from './components/Header';
import './globals.css'
import Cardapio from "./components/Cardapio";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#8B5A2B]">
      <Header/>
      <div className="my-5 w-[90%] max-w-5xl mx-auto bg-[#99714B] p-6 rounded-xl shadow-lg">
        <Cardapio/>
      </div>
    </div>
  );
}
