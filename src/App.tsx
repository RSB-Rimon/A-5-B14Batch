import { Suspense } from "react";
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Technology from "./components/Technology";
import type { CardType } from "./type/CardType";


const technologiseFetch = async ():Promise<CardType[]> =>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
 const technologisePromise = technologiseFetch()

  return (
    <>
    
<Navbar />
<Banner />
<Suspense fallback={<li>Loadding......</li>}>
<Technology  technologisePromise={technologisePromise}/>

</Suspense>


{/* <Footer/> */}


   

   

    </>
  )
}

export default App
