import { useState, useEffect } from "react";
import SignInCard from "./auth/SignInCard";
import SignUpCard from "./auth/SignUpCard";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) setShow(false);
    else setShow(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-white/5 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500/10 rounded-full blur-[2px] relative">
              <div className="absolute inset-0 bg-blue-400/60 rounded-full blur-sm"></div>
            </div>
            <h1 className="text-white text-xl font-semibold tracking-wide">
              Doom
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Scroll
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8 text-slate-400">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Home</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">About</li>
            </ul>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSignIn(true)}
                className="px-5 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => setShowSignUp(true)}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      {showSignIn && (
        <SignInCard
          onClose={() => setShowSignIn(false)}
          onSwitch={() => {
            setShowSignIn(false);
            setShowSignUp(true);
          }}
        />
      )}

      {showSignUp && (
        <SignUpCard
          onClose={() => setShowSignUp(false)}
          onSwitch={() => {
            setShowSignUp(false);
            setShowSignIn(true);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
