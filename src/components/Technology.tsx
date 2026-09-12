import { use } from "react";
import type { CardType } from "../type/CardType";
import TechnolgyCard from "./TechnolgyCard";

interface TechnologyProps {
    technologisePromise : Promise<CardType[]>
    handleAddToStack : (technology: CardType)=> void
    selectedTechnology : CardType[]
}

const Technology = ({technologisePromise , handleAddToStack , selectedTechnology}:TechnologyProps) => {
    const technologys = use(technologisePromise)
    console.log(technologys)
    return (
        <div>
            <TechnolgyCard technologys={technologys} handleAddToStack ={handleAddToStack} selectedTechnology={selectedTechnology}/>
        </div>
    );
};

export default Technology;