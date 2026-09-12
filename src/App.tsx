import { Suspense, useState } from "react";
import Banner from "./components/Banner";

import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import type { CardType } from "./type/CardType";
import YourStack from "./components/YourStack";

const technologiseFetch = async (): Promise<CardType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologisePromise = technologiseFetch();
  const [selectedTechnology, setSelectedTechnology] = useState<CardType[]>([]);
  const handleAddToStack = (technology: CardType) => {
    console.log(technology, "technology object passing");
    setSelectedTechnology([...selectedTechnology, technology]);
  };

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
        <YourStack selectedTechnology={selectedTechnology} />
      </div>

      {/* <Footer/> */}
    </>
  );
}

export default App;
