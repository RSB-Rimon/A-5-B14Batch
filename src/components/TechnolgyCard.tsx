import type { CardType } from "../type/CardType";


interface TechnolgyCardProps {
  technologys: CardType[];
  handleAddToStack:(techology:CardType)=> void
}


const TechnolgyCard = ({ technologys, handleAddToStack  }:TechnolgyCardProps) => {
  console.log(technologys, "technologys from technology card");
  return (
    <div className="grid grid-cols-3 gap-3">
      {technologys.map((technology:CardType) => {
        return (
          <div className="card bg-base-100 w-full max-w-[305px] rounded-2xl border border-slate-200 shadow-sm">
  <div className="card-body p-5">

    {/* Icon + Popular Badge */}
    <div className="flex items-start justify-between">
      <img
        src={technology.icon}
        alt={technology.name}
        className="w-10 h-10 object-contain"
      />

      <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
        {technology.badge}
      </span>
    </div>

    {/* Title */}
    <h2 className="mt-4 text-xl font-bold text-slate-900">
      {technology.name}
    </h2>

    {/* Description */}
    <p className="mt-1 min-h-[72px] text-sm leading-5 text-slate-500">
      {technology.description}
    </p>

    {/* Divider */}
    <div className="my-2 border-t border-slate-100"></div>

    {/* Category / Difficulty / Rating */}
    <div className="flex items-center justify-between gap-2">

      <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
        {technology.category}
      </span>

      <span className="text-xs text-slate-500">
        {technology.difficulty}
      </span>

      <span className="flex items-center gap-1 text-sm font-medium text-slate-700">
        <span className="text-amber-400">★</span>
        {technology.rating}
      </span>

    </div>

    {/* Button */}
    <button onClick={()=> handleAddToStack(technology)} className="mt-3 w-full rounded-lg bg-slate-950 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
      Add to Stack
    </button>

  </div>
</div>
        );
      })}
    </div>
  );
};

export default TechnolgyCard;
