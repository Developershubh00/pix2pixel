// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import logo from "../assets/logo.png";

// interface NavbarProps {
//   openQuoteForm: () => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ openQuoteForm }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     if (!isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'bg-[#080e1c]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto px-4 py-3 md:py-4 nav-mobile">
//         <div className="flex items-center justify-between">
//           <a href="#" className="flex items-center z-50 space-x-2 md:space-x-3">
//             {/* Logo placeholder - you can replace this with your actual logo */}
//             <div className="w-8 h-8 md:w-10 md:h-10 p-1 bg-white rounded-lg flex items-center justify-center">
              
//             <img
//             src={logo}
//             alt="logo"
//            className=" object-cover"
//                 />
//               </div> 
          
//             <span className="text-white text-xl md:text-2xl font-bold nav-logo-mobile">
//               <span className="gradient-text">PIX2PIXEL</span>
//             </span>
//           </a>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-6">
//             <a href="#home" className="text-sm text-white hover:text-[#03e9f4] transition-colors">Home</a>
//             <a href="#about" className="text-sm text-white hover:text-[#03e9f4] transition-colors">About</a>
//             <a href="#services" className="text-sm text-white hover:text-[#03e9f4] transition-colors">Services</a>
//             <a href="#process" className="text-sm text-white hover:text-[#03e9f4] transition-colors">Portfolio</a>
//             <a href="#team" className="text-sm text-white hover:text-[#03e9f4] transition-colors">Blog</a>
//             <a href="#contact" className="text-sm text-white hover:text-[#03e9f4] transition-colors">Contact</a>
//             <button 
//               onClick={openQuoteForm}
//               className="blue-gradient-btn text-white px-4 py-2 text-sm font-medium"
//             >
//               Get a Quote
//             </button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button 
//             className="lg:hidden text-white z-50 p-2 touch-target"
//             onClick={toggleMenu}
//           >
//             {isOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div 
//         className={`lg:hidden fixed inset-0 bg-[#080e1c]/98 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out nav-menu-mobile ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         } ${isOpen ? 'open' : ''}`}
//       >
//         <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
//           <a href="#home" className="nav-link-mobile" onClick={closeMenu}>Home</a>
//           <a href="#about" className="nav-link-mobile" onClick={closeMenu}>About</a>
//           <a href="#services" className="nav-link-mobile" onClick={closeMenu}>Services</a>
//           <a href="#process" className="nav-link-mobile" onClick={closeMenu}>Process</a>
//           <a href="#testimonials" className="nav-link-mobile" onClick={closeMenu}>Testimonials</a>
//           <a href="#contact" className="nav-link-mobile" onClick={closeMenu}>Contact</a>
//           <button 
//             onClick={() => {
//               openQuoteForm();
//               closeMenu();
//             }}
//             className="blue-gradient-btn text-white px-8 py-3 text-lg font-medium mt-4 mobile-button touch-target"
//           >
//             Get a Quote
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import emailjs from "emailjs-com";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", requirements: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const openQuoteForm = () => setIsQuoteOpen(true);
  const closeQuoteForm = () => setIsQuoteOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(() => {
        setStatus("✅ Sent! We'll get back to you soon.");
        setFormData({ name: "", email: "", requirements: "" });
      })
      .catch(() => setStatus("❌ Failed. Try again later."));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080e1c]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 nav-mobile">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center z-50 space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 p-1 bg-white rounded-lg flex items-center justify-center">
              <img src={logo} alt="logo" className="object-cover" />
            </div>
            <span className="text-white text-xl md:text-2xl font-bold nav-logo-mobile">
              <span className="gradient-text">PIX2PIXEL</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#home" className="text-sm text-white hover:text-[#03e9f4] transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-white hover:text-[#03e9f4] transition-colors">
              About
            </a>
            <a href="#services" className="text-sm text-white hover:text-[#03e9f4] transition-colors">
              Services
            </a>
            <a href="#process" className="text-sm text-white hover:text-[#03e9f4] transition-colors">
              Portfolio
            </a>
            <a href="#team" className="text-sm text-white hover:text-[#03e9f4] transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-sm text-white hover:text-[#03e9f4] transition-colors">
              Contact
            </a>
            <button
              onClick={openQuoteForm}
              className="blue-gradient-btn text-white px-4 py-2 text-sm font-medium"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white z-50 p-2 touch-target" onClick={toggleMenu}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#080e1c]/98 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out nav-menu-mobile ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${isOpen ? "open" : ""}`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          <a href="#home" className="nav-link-mobile" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" className="nav-link-mobile" onClick={closeMenu}>
            About
          </a>
          <a href="#services" className="nav-link-mobile" onClick={closeMenu}>
            Services
          </a>
          <a href="#process" className="nav-link-mobile" onClick={closeMenu}>
            Process
          </a>
          {/* <a href="#testimonials" className="nav-link-mobile" onClick={closeMenu}>
            Testimonials
          </a> */}
          <a href="#contact" className="nav-link-mobile" onClick={closeMenu}>
            Contact
          </a>
          <button
            onClick={() => {
              openQuoteForm();
              closeMenu();
            }}
            className="blue-gradient-btn text-white px-8 py-3 text-lg font-medium mt-4 mobile-button touch-target"
          >
            Get a Quote
          </button>
        </div>
      </div>

      {/* Quote Form Popup */}
      {isQuoteOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
          <div className="bg-[#111827] p-6 md:p-8 rounded-lg shadow-lg w-[90%] md:w-[500px] border border-[#03e9f4]/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Tell Us Your Requirements</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#1f2937] text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#1f2937] text-white"
                required
              />
              <textarea
                name="requirements"
                placeholder="Tell us about your requirements..."
                value={formData.requirements}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#1f2937] text-white"
                rows={5}
                required
              />
              <button
                type="submit"
                className="blue-gradient-btn w-full py-3 text-lg font-semibold text-white"
              >
                Send Requirements
              </button>
              {status && <p className="text-gray-300 text-sm mt-2">{status}</p>}
            </form>
            <button onClick={closeQuoteForm} className="mt-4 text-gray-400 hover:text-white text-sm">
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
