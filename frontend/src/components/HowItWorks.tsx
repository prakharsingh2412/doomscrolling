import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    title: "Stage 1: Discovery",
    description:
      "It starts innocently enough — you unlock your phone without even thinking, maybe just to check one notification. You open your favorite app, and the feed instantly greets you with a stream of new posts, fresh updates, and trending stories. A meme makes you laugh, a video surprises you, a thread intrigues you. The content feels endless, and the more you scroll, the more it learns what keeps you hooked. Every image, every short clip, every headline feels designed to make you pause — just for a moment longer. You’re not looking for anything specific, yet somehow everything feels interesting, perfectly timed, and oddly personal.",
  },
  {
    title: "Stage 2: Immersion",
    description:
      "Minutes blur into moments. The world around you starts to fade as the glow of your screen takes over your attention. You’re no longer just watching — you’re absorbed. The algorithm knows exactly what to show you next: humor, outrage, curiosity, comfort. Your emotions shift with each swipe. You scroll through opinions that spark debates in your mind, videos that fill you with nostalgia, and content that makes you feel seen. Your thumb moves automatically, a rhythm you don’t control anymore. Somewhere between entertainment and obsession, you stop realizing how much time is passing. The digital universe feels alive, feeding you exactly what you didn’t know you needed.",
  },
  {
    title: "Stage 3: Realization",
    description:
      "You glance at the clock and freeze. What you thought was ten minutes has become an hour. Notifications have piled up, your surroundings are quiet, and your coffee has gone cold. You scroll one more time — maybe there’s something new, something exciting — but the posts start to repeat. You begin to recognize the same jokes, the same trends, even the same faces. Your brain feels overstimulated, yet you crave just one more hit of novelty. A small voice whispers that you should stop. But the feed keeps flowing — infinite, hypnotic, and just unpredictable enough to keep you there a little longer.",
  },
  {
    title: "Stage 4: Reflection",
    description:
      "You pause, finally letting your thumb rest. The silence of the real world feels almost too quiet compared to the constant buzz of stimulation you’ve been swimming in. You start to wonder — what did you actually gain from the last few hours? The posts blur together in your memory, leaving behind fragments of emotion without context. A faint sense of emptiness sets in, like waking from a vivid dream you can’t quite remember. You scroll back, searching for something meaningful, but all you find is repetition. The bright light of the screen reflects in your tired eyes, and for the first time, you see how deep the rabbit hole really goes.",
  },
  {
    title: "Stage 5: Awakening",
    description:
      "You finally close the app. The glow disappears, replaced by the soft light of reality. The quiet feels strange but peaceful. You look around — the world is still here, unchanged, waiting for you. For the first time in hours, you notice the sound of your surroundings, the stillness of the air, the simple act of breathing. You promise yourself it won’t happen again, that you’ll be more mindful next time. But deep down, you know how easily the cycle restarts. The next scroll is always waiting — patient, enticing, and one tap away. You smile faintly, acknowledging the truth: escaping is possible, but staying away is the real challenge.",
  },
];


export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const cards = gsap.utils.toArray<HTMLElement>(".how-card");
    gsap.set(cards, { opacity: 0, y: 50 });
    gsap.set(cards[0], { opacity: 1, y: 0 });

    const cardHeight = window.innerHeight * 0.71; // one card height
    const spacing = 10;

    // Scroll distance to transition between all cards
    const totalScroll = (cardHeight + spacing) * (cards.length - 1);
    const adjustedScroll = totalScroll * 1; // reduce if you want shorter section

    // Sticky container height = one card (only one visible at a time)
    sticky.style.height = `${cardHeight}px`;

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
        tl.to(cards[i - 1], { opacity: 0, y: -50, duration: 0.5 }, i);
        tl.to(cards[i], { opacity: 1, y: 0, duration: 0.5 }, i);
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
      className="relative w-full bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white py-8 md:py-12"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-center mt-6 mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ">
        How It Actually Works
      </h1>

      <div
        ref={stickyRef}
        className="sticky top-0 flex items-start justify-center overflow-hidden pt-8"
      >
        {stages.map((stage, index) => (
          <div
            key={index}
            className="
              how-card absolute w-[90%] md:w-[60%] h-[60vh]
              bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/80
              border border-blue-500/30 shadow-[0_0_40px_rgba(56,189,248,0.2)]
              rounded-2xl backdrop-blur-md
              flex flex-col items-center justify-center text-center px-6 transition-all
              hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] hover:scale-[1.02] hover:border-purple-400/60
            "
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              {stage.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
