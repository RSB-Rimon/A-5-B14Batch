import { use } from "react";
import type { CardType } from "../type/CardType";
import TechnolgyCard from "./TechnolgyCard";

interface TechnologyProps {
    technologisePromise : Promise<CardType[]>
}

const Technology = ({technologisePromise}:TechnologyProps) => {
    const technologys = use(technologisePromise)
    console.log(technologys)
    return (
        <div>
            <TechnolgyCard technologys={technologys} />
        </div>
    );
};

export default Technology;