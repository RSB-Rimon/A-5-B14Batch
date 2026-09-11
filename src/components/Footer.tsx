import Logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    // <footer>
    //   <div>
    //     <img src={Logo} alt="footer logo" />
    //     <p>
    //       Curated tools, technologies, and resources for developers building
    //       modern software.
    //     </p>
    //     <ul>
    //         <li>Github</li>
    //         <li> Twiter</li>
    //         <li> Linkedin</li>
    //     </ul>

    //   </div>
    //   <div>
    //     <h1>Product</h1>
    //     <ul>
    //         <li>Home</li>
    //         <li>Technologies</li>
    //         <li>Projects</li>
    //     </ul>
    //   </div>

    //   <div>
    //     <h1>COMPANY</h1>
    //     <ul>
    //         <li>About</li>
    //         <li>Contact</li>
    //         <li>Careers</li>
    //     </ul>
    //   </div>

    //   <div>
    //     <h1>LEGEL</h1>
    //     <ul>
    //         <li>Privacy Policy</li>
    //         <li>Terms of Service</li>
            
    //     </ul>
    //   </div>
    // </footer>

    <footer className="footer sm:footer-horizontal  text-black p-10">
        <div>
        <img src={Logo} alt="footer logo" />
      <p className="py-2 text-[#475569] text-[14px]">
           Curated tools, technologies, and resources for developers building <br />

          modern software.
         </p>
     <ul className="flex gap-7 py-5 font-semibold text-[#475569] "> 
         <li>Github</li>
           <li> Twiter</li>
         <li> Linkedin</li>
      </ul>

   </div> 
  <nav>
    <h6 className="footer-title text-black">PRODUCT</h6>
    <a className="link link-hover text-[#475569]">Branding</a>
    <a className="link link-hover text-[#475569]">Design</a>
    <a className="link link-hover text-[#475569]">Marketing</a>
    <a className="link link-hover text-[#475569]">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-black">Company</h6>
    <a className="link link-hover text-[#475569]">About us</a>
    <a className="link link-hover text-[#475569]">Contact</a>
    <a className="link link-hover text-[#475569]">Jobs</a>
    <a className="link link-hover text-[#475569]">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title  text-black">Legal</h6>
    <a className="link link-hover text-[#475569]">Terms of use</a>
    <a className="link link-hover text-[#475569]">Privacy policy</a>
    <a className="link link-hover text-[#475569]">Cookie policy</a>
  </nav>
</footer>
  );
};

export default Footer;
