import { RiDeleteBack2Fill } from "react-icons/ri";
import type { CardType } from "../type/CardType";

interface YourStackProps {
    selectedTechnology :CardType[];
    handleRemoveStack :(id:string)=> void
    handleRemoveAll:()=> void
    
}
const YourStack = ({selectedTechnology, handleRemoveStack, handleRemoveAll}:YourStackProps) => {
    console.log(selectedTechnology," 'selectedTechnology")
    return (
          <div className="w-[280px] rounded-2xl border border-slate-200 p-5">
      
      <h2 className="text-xl font-bold text-slate-900">
        Your Stack
      </h2>

      <p className="mt-1 text-sm text-slate-400">
  
        {selectedTechnology.length} Technology Selected
      </p>

      {selectedTechnology.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-slate-300 py-8 text-center">
          <p className="text-sm text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {selectedTechnology.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
            >
              <div className="flex items-center gap-2">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8 object-contain"
                />

                <div>
                  <h3 className="text-sm font-semibold">
                    {technology.name}
                  </h3>

                  <p className="text-[10px] text-slate-400">
                    {technology.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleRemoveStack(technology.id)}
                className="text-xl text-slate-400 hover:text-red-500"
              >
                <RiDeleteBack2Fill />
              </button>
            </div>
          ))}

          <button
            onClick={handleRemoveAll}
            className="mt-8 w-full rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;