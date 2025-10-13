const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-semibold">
                        Doom
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            Scroll
                        </span>
                    </h2>
                    <p className="text-slate-400 mt-3 leading-relaxed">
                        Measuring how far humanity has fallen into the endless scroll.
                        Stay mindful. Scroll wisely.
                    </p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <p className="text-slate-400 mb-4">
                        Stay connected and join the mindful scrolling movement.
                    </p>

                    <div className="flex items-center gap-4">
                        {/* Twitter / X */}
                        <a
                            href="#"
                            className="p-3 bg-white/5 hover:bg-blue-600/30 rounded-full transition-all duration-300 hover:scale-110"
                            aria-label="Twitter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-blue-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 19c11 0 14-9 14-14v-.64A9.935 9.935 0 0024 2a9.725 9.725 0 01-2.828.775A4.932 4.932 0 0023.337.37a9.862 9.862 0 01-3.125 1.195A4.92 4.92 0 0016.616 0c-2.726 0-4.937 2.203-4.937 4.92 0 .39.044.77.127 1.133C7.69 5.89 4.066 3.9 1.64.875a4.91 4.91 0 00-.666 2.475c0 1.706.87 3.214 2.188 4.097A4.904 4.904 0 01.96 7.05v.06c0 2.38 1.693 4.36 3.946 4.808a4.936 4.936 0 01-2.224.084 4.923 4.923 0 004.6 3.417A9.874 9.874 0 010 17.542 13.933 13.933 0 007.548 19"
                                />
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a
                            href="#"
                            className="p-3 bg-white/5 hover:bg-purple-600/30 rounded-full transition-all duration-300 hover:scale-110"
                            aria-label="GitHub"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 text-purple-400"
                            >
                                <path d="M12 .297a12 12 0 00-3.793 23.415c.6.113.793-.258.793-.577v-2.24c-3.338.724-4.043-1.608-4.043-1.608-.546-1.385-1.333-1.754-1.333-1.754-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.833 2.809 1.304 3.495.997.108-.775.42-1.304.764-1.604-2.665-.3-5.467-1.334-5.467-5.932 0-1.31.467-2.381 1.236-3.221-.125-.303-.536-1.523.118-3.176 0 0 1.008-.323 3.3 1.23a11.49 11.49 0 016 0c2.292-1.553 3.298-1.23 3.298-1.23.655 1.653.244 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.628-5.479 5.922.43.37.816 1.102.816 2.222v3.293c0 .323.192.694.801.576A12 12 0 0012 .297z" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="#"
                            className="p-3 bg-white/5 hover:bg-blue-500/30 rounded-full transition-all duration-300 hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 text-blue-400"
                            >
                                <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3a1.74 1.74 0 110-3.48 1.74 1.74 0 010 3.48zm13.5 11.3h-3v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.95v5.7h-3v-10h2.88v1.37h.04a3.16 3.16 0 012.84-1.56c3.04 0 3.6 2 3.6 4.6v5.6z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-slate-400">
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">Blog</li>
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">Terms of Use</li>
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">Support</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                    <p className="text-slate-400 mb-4">
                        Get mindful tech updates and new research about digital habits.
                    </p>
                    <div className="flex items-center bg-white/5 rounded-lg overflow-hidden border border-white/10">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent px-4 py-2 w-full text-white outline-none"
                        />
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-10 py-6 text-center text-slate-500 text-sm">
                © {new Date().getFullYear()} DoomScroll. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
