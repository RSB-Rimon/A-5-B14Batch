import Logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div>
      {/* <footer className="container mx-auto mt-12">
        <div className="py-3">
          <img src={Logo} alt="Devstack" />
          <p className="text-[14px] my-2 text-[#64748b]">
            Curated tools, technologies, and resources for developers building <br />
            modern software.
          </p>
          <ul className="flex gap-5 font-bold py-2">
            <li>GitHub</li>
            <li>Twiter</li>
            <li>Linkedin</li>
          </ul>
        </div>
          
       
      </footer> */}
      <footer className="footer container mx-auto sm:footer-horizontal  text-black p-10">
        <div className="py-3">
          <img src={Logo} alt="Devstack" />
          <p className="text-[14px] my-2 text-[#64748b]">
            Curated tools, technologies, and resources for developers building{" "}
            <br />
            modern software.
          </p>
          <ul className="flex gap-5 font-bold py-2">
            <li>GitHub</li>
            <li>Twiter</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <nav>
          <h6 className="footer-title">PRODUCT</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Technologys</a>
          <a className="link link-hover">Projects</a>
      
        </nav>
        <nav>
          <h6 className="footer-title">COMPANY</h6>
          <a className="link link-hover">About </a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
       
        </nav>
        <nav>
          <h6 className="footer-title">LEGAL</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of Service</a> 
         
        </nav>
        
      </footer>
      <div className="divider container mx-auto  "></div>
      <div className="flex justify-between container mx-auto ">
        <h1 className="text-[#64748b]">© 2026 Dev Stack. All rights reserved.</h1>
        <ul className="flex gap-5 text-[#64748b] ">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
