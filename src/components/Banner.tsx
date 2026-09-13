import heroImage from "..//assets/banner-stack.png"
const Banner = () => {
  return (
    <div>
      <section  className="  mt-12 flex justify-between items-center container mx-auto py-3 ">
        <div>
          <h1 className="text-6xl font-bold">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-[#fa502d] via-[#fa502d] to-[#ab2ab5] bg-clip-text text-transparent"> Development Stack</span>
          </h1>
          <p className="text-lg text-[#475569] py-5">
            Explore frontend, backend, database, and tooling options, <br /> compare
            them side by side, and put together the stack that fits your <br /> next
            project.
          </p>
        <div className="flex gap-5">
              <button className="btn border-none  bg-gradient-to-r from-[#f8711d] via-[#ed4a93] to-[#ed4a93] text-white">Explore Technologies</button>
              
        <button className="btn btn-wide">Learn More </button>
        </div>

        </div>
        <img src={heroImage} alt="" />
      </section>
    </div>
  );
};

export default Banner;
