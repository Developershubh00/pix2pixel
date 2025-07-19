import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a101f] py-10 border-t border-[#1f2937]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              <span className="gradient-text">PIX2PIXEL</span>
            </a>
            <p className="text-gray-400 mt-2">
              Strategize, Secure, Succeed
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            <a href="#home" className="text-gray-300 hover:text-[#03e9f4] transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-[#03e9f4] transition-colors">About</a>
            <a href="#services" className="text-gray-300 hover:text-[#03e9f4] transition-colors">Services</a>
            <a href="#process" className="text-gray-300 hover:text-[#03e9f4] transition-colors">Process</a>
            <a href="#team" className="text-gray-300 hover:text-[#03e9f4] transition-colors">Team</a>
            <a href="#contact" className="text-gray-300 hover:text-[#03e9f4] transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-[#1f2937] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Pix2Pixel. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#03e9f4] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#03e9f4] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;