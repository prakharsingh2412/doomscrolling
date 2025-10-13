import { useState, useEffect } from 'react';

export default function ResponsiveDevicesShowcase() {
    const [scrollPositions, setScrollPositions] = useState({
        desktop: 0,
        laptop: 0,
        tablet: 0,
        mobile: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setScrollPositions(prev => ({
                desktop: (prev.desktop + 0.5) % 100,
                laptop: (prev.laptop + 0.6) % 100,
                tablet: (prev.tablet + 0.7) % 100,
                mobile: (prev.mobile + 0.8) % 100
            }));
        }, 16);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white px-6 lg:px-12 py-16 gap-12">
            {/* Left Side - Device Displays */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="relative w-full max-w-2xl h-[500px]">
                    {/* Desktop Monitor - Back Left */}
                    <div className="absolute top-8 left-8 z-10">
                        <div className="w-72 h-44 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-[3px] border-gray-700 shadow-2xl overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30"
                                 style={{
                                     transform: `translateY(-${scrollPositions.desktop}%)`,
                                     transition: 'transform 0.016s linear'
                                 }}
                            />
                        </div>
                        <div className="w-12 h-12 bg-gray-800 mx-auto border-2 border-gray-700" />
                        <div className="w-28 h-1.5 bg-gray-800 mx-auto rounded-full" />
                    </div>

                    {/* Tablet - Center */}
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-30">
                        <div className="w-44 h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-[3px] border-gray-700 shadow-2xl overflow-hidden p-2">
                            <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 overflow-hidden">
                                <div className="w-full h-full"
                                     style={{
                                         transform: `translateY(-${scrollPositions.tablet}%)`,
                                         transition: 'transform 0.016s linear',
                                         background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))'
                                     }}
                                />
                            </div>
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-2 border-gray-600" />
                        </div>
                    </div>

                    {/* Laptop - Bottom Left */}
                    <div className="absolute bottom-16 left-4 z-20">
                        <div className="w-64 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-xl border-[3px] border-gray-700 border-b-0 shadow-2xl overflow-hidden p-2">
                            <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 overflow-hidden">
                                <div className="w-full h-full"
                                     style={{
                                         transform: `translateY(-${scrollPositions.laptop}%)`,
                                         transition: 'transform 0.016s linear',
                                         background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))'
                                     }}
                                />
                            </div>
                        </div>
                        <div className="w-80 h-2 bg-gray-800 rounded-b-xl border-2 border-t-0 border-gray-700 -ml-6"/>
                    </div>

                    {/* Mobile - Right */}
                    <div className="absolute top-48 right-30 z-40">
                        <div className="w-28 h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border-[3px] border-gray-700 shadow-2xl overflow-hidden p-1.5">
                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 overflow-hidden">
                                <div className="w-full h-full"
                                     style={{
                                         transform: `translateY(-${scrollPositions.mobile}%)`,
                                         transition: 'transform 0.016s linear',
                                         background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))'
                                     }}
                                />
                            </div>
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-gray-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8 max-w-xl">
                <div className="space-y-4">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Responsive Across All Devices
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Experience seamless design that adapts perfectly to any screen size. From desktop monitors to mobile phones, your content looks stunning everywhere.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">Desktop Ready</h3>
                            <p className="text-gray-400">Optimized for large screens with expansive layouts</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">Mobile First</h3>
                            <p className="text-gray-400">Touch-friendly interface for on-the-go users</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">Lightning Fast</h3>
                            <p className="text-gray-400">Optimized performance on every device</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}