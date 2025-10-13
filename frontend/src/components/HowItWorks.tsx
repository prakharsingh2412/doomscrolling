import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    title: "Stage 1: Discovery",
    description: "Explore the world of endless scrolling and uncover hidden gems of the internet.",
  },
  {
    title: "Stage 2: Immersion",
    description: "Dive deep into engaging content as the feed pulls you in one post at a time.",
  },
  {
    title: "Stage 3: Realization",
    description: "You begin to notice time slipping away while you keep scrolling for more.",
  },
  {
    title: "Stage 4: Reflection",
    description: "You pause, wondering where the last few hours went.",
  },
  {
    title: "Stage 5: Awakening",
    description: "Finally, you break free — until the next scroll begins.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = gsap.utils.toArray<HTMLElement>(".how-card");

    gsap.set(cards, { opacity: 0, y: 100 });
    gsap.set(cards[0], { opacity: 1, y: 0 });

    const cardHeight = window.innerHeight * 0.6; // 60vh
    const spacing = 20; // 20px gap between cards
    const totalScroll = (cardHeight + spacing) * (cards.length - 1);

    // Slightly reduce totalScroll to remove extra bottom
    const adjustedScroll = totalScroll - spacing;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${adjustedScroll}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    cards.forEach((card, i) => {
      if (i !== 0) {
        tl.to(cards[i - 1], { opacity: 0, y: -100, duration: 0.5 }, i);
        tl.to(card, { opacity: 1, y: 0, duration: 0.5 }, i);
      }
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works-section"
      className="relative w-full bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white"
    // remove h-[500vh]!
    >
      {/* Centered heading */}
      <h1 className="text-5xl md:text-6xl font-bold text-center pt-8 mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        How It Actually Works
      </h1>

      {/* Card container */}
      <div className="sticky top-0 h-screen flex items-start justify-center overflow-hidden">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="how-card absolute w-[90%] md:w-[60%] h-[60vh] bg-slate-900/80 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center px-6 transition-all mb-[20px]"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{stage.title}</h2>
            <p className="text-lg md:text-xl text-gray-300">{stage.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
