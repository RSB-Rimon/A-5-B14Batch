import type { CardType } from "../type/CardType";

interface YourStackProps {
    selectedTechnology :CardType[]
}
const YourStack = ({selectedTechnology}:YourStackProps) => {
    console.log(selectedTechnology," 'selectedTechnology")
    return (
        <div>
           <h2>YourStack</h2>
           {
            selectedTechnology.map((technology)=>{
             return <div key={technology.id}>
                    <img src={technology.icon} alt={technology.name} />
                    <h3>{technology.name}</h3>
                    <p>{technology.category}</p>

                </div>
            })
           }
                
             
        </div>
    );
};

export default YourStack;