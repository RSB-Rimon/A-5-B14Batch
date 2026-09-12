import { Suspense, useState } from "react";
import Banner from "./components/Banner";

import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import type { CardType } from "./type/CardType";
import YourStack from "./components/YourStack";
import { toast } from "react-toastify";

const technologiseFetch = async (): Promise<CardType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologisePromise = technologiseFetch();
  const [selectedTechnology, setSelectedTechnology] = useState<CardType[]>([]);


  const handleAddToStack = (technology: CardType) => {
    // console.log(technology, "technology object passing");
    const allreadySelected = selectedTechnology.some((item)=> item.id === technology.id);
    if(allreadySelected){
      toast("This technology is allready in your stack")
    }
    setSelectedTechnology([...selectedTechnology, technology]);
  };

  const handleRemoveStack =(id: string)=>{
    setSelectedTechnology(
      selectedTechnology.filter((technology)=> technology.id == id)
    );

  };

  const handleRemoveAll =()=>{
    setSelectedTechnology([])
  }

  return (
    <>
      <Navbar />
      <Banner />
      <div className="container mx-auto flex gap-6">
        <div className="flex-1">
          <Suspense fallback={<li>Loadding......</li>}>
            <Technology
              technologisePromise={technologisePromise}
              handleAddToStack={handleAddToStack}
            />
          </Suspense>
        </div>
        <YourStack selectedTechnology={selectedTechnology} handleRemoveStack={handleRemoveStack} handleRemoveAll={handleRemoveAll} />
      </div>

      {/* <Footer/> */}
    </>
  );
}

export default App;
