// import { Link } from "react-router-dom";
// import { Facebook, Twitter, Instagram, ShoppingBag } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0A192F] text-gray-300 border-t border-[#2563EB]">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Brand & Tagline */}
//           <div>
//             <Link to="/" className="text-2xl font-bold text-[#7DD3FC] flex items-center space-x-2">
//               <ShoppingBag size={24} />
//               <span>Nexir</span>
//             </Link>
//             <p className="mt-2 text-sm text-gray-400">Your one-stop shop for the latest trends.</p>
//           </div>

//           {/* Quick Links */}
//           <div className="flex flex-col space-y-2">
//             <h3 className="text-lg font-semibold text-[#7DD3FC]">Quick Links</h3>
//             <Link to="/#" className="hover:text-[#2563EB] transition duration-300">Home</Link>
//             <Link to="/#" className="hover:text-[#2563EB] transition duration-300">Shop</Link>
//             <Link to="/#" className="hover:text-[#2563EB] transition duration-300">About Us</Link>
//             <Link to="/#" className="hover:text-[#2563EB] transition duration-300">Contact</Link>
//           </div>

//           {/* Social Media */}
//           <div className="flex flex-col space-y-2">
//             <h3 className="text-lg font-semibold text-[#7DD3FC]">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition duration-300">
//                 <Facebook size={20} />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition duration-300">
//                 <Twitter size={20} />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition duration-300">
//                 <Instagram size={20} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="border-t border-[#2563EB] mt-6 pt-4 text-center text-sm text-gray-400">
//           © {new Date().getFullYear()} Nexir. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

//===> Old Theme ===
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-emerald-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand & Tagline */}
          <div>
            <Link to="/" className="text-2xl font-bold text-emerald-400 flex items-center space-x-2">
              <ShoppingBag size={24} />
              <span>Nexir</span>
            </Link>
            <p className="mt-2 text-sm text-gray-400">Your one-stop shop for the latest trends.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-emerald-400">Quick Links</h3>
            <Link to="/#" className="hover:text-emerald-400 transition duration-300">Home</Link>
            <Link to="/#" className="hover:text-emerald-400 transition duration-300">Shop</Link>
            <Link to="/#" className="hover:text-emerald-400 transition duration-300">About Us</Link>
            <Link to="/#" className="hover:text-emerald-400 transition duration-300">Contact</Link>
          </div>

          {/* Social Media */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-emerald-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="/#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="/#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="/#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-emerald-800 mt-6 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Nexir. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
