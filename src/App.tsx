import { Suspense, useState } from "react";
import Banner from "./components/Banner";

import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import type { CardType } from "./type/CardType";
import YourStack from "./components/YourStack";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Text from "./components/Text";

const technologiseFetch = async (): Promise<CardType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // const technologisePromise = technologiseFetch();

  const [technologisePromise] = useState(()=> technologiseFetch())
  const [selectedTechnology, setSelectedTechnology] = useState<CardType[]>([]);


  const handleAddToStack = (technology: CardType) => {
    // console.log(technology, "technology object passing");
    const allreadySelected = selectedTechnology.some((item) => item.id === technology.id);
    if (allreadySelected) {
      toast.error("Allready added to your stack!");
      return;
    }

    setSelectedTechnology([...selectedTechnology, technology]);
    toast.success(`${technology.name} added successfully`);
  };

  const handleRemoveStack = (id: string) => {
    setSelectedTechnology(selectedTechnology.filter((technology) => technology.id !== id));
    toast.success("Technology removed successfully!");
  };

  const handleRemoveAll = () => {
    setSelectedTechnology([]);
    toast.success("All technologies removed successfully");
  };
 
  return (
    <>
    <ToastContainer />
      <Navbar />
      <Banner />
      <Text />
      <div className="container mx-auto flex gap-6">
        <div className="flex-1">
          <Suspense fallback={<li>Loadding......</li>}>
            <Technology
              technologisePromise={technologisePromise}
              handleAddToStack={handleAddToStack}
              selectedTechnology={selectedTechnology}
            />
          </Suspense>
        </div>
        <YourStack selectedTechnology={selectedTechnology} handleRemoveStack={handleRemoveStack} handleRemoveAll={handleRemoveAll} />
      </div>

     <div className="py-">
       <Footer />
     </div>
    </>
  );
}

export default App;
