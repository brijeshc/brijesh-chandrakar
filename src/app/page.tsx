"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for reveals
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    document
      .querySelectorAll(".reveal, .stagger")
      .forEach((el) => io.observe(el));

    // Hero parallax
    const heroContent = document.getElementById("heroContent");
    const contentDiv = document.getElementById("content");

    function onScroll() {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const p = Math.min(1, y / (vh * 0.85));

      if (heroContent) {
        heroContent.style.opacity = String(Math.max(0, 1 - p * 1.5));
        heroContent.style.transform = `translateY(${y * 0.1}px)`;
      }

      // Color shift: warm dusk → deeper night as user scrolls
      // At top: warm dusk (#1a1538), at bottom: deeper night (#0c0a1e)
      if (contentDiv) {
        const r1 = 26,
          g1 = 21,
          b1 = 56; // warm dusk
        const r2 = 12,
          g2 = 10,
          b2 = 30; // deeper night
        const r = Math.round(r1 + (r2 - r1) * p);
        const g = Math.round(g1 + (g2 - g1) * p);
        const b = Math.round(b1 + (b2 - b1) * p);
        contentDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Shared SVG defs */}
      <svg
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <symbol id="hcor" viewBox="0 0 82 82">
            <line
              x1="0"
              y1="2"
              x2="82"
              y2="2"
              stroke="#2a2448"
              strokeWidth="1.6"
            />
            <line
              x1="2"
              y1="0"
              x2="2"
              y2="82"
              stroke="#2a2448"
              strokeWidth="1.6"
            />
            <line
              x1="0"
              y1="7"
              x2="82"
              y2="7"
              stroke="#2a2448"
              strokeWidth=".8"
            />
            <line
              x1="7"
              y1="0"
              x2="7"
              y2="82"
              stroke="#2a2448"
              strokeWidth=".8"
            />
            <line
              x1="0"
              y1="12"
              x2="82"
              y2="12"
              stroke="#2a2448"
              strokeWidth=".45"
              opacity=".7"
            />
            <line
              x1="12"
              y1="0"
              x2="12"
              y2="82"
              stroke="#2a2448"
              strokeWidth=".45"
              opacity=".7"
            />
            <line
              x1="0"
              y1="16"
              x2="82"
              y2="16"
              stroke="#2a2448"
              strokeWidth=".3"
              opacity=".45"
            />
            <line
              x1="16"
              y1="0"
              x2="16"
              y2="82"
              stroke="#2a2448"
              strokeWidth=".3"
              opacity=".45"
            />

            <path d="M21,4.5 L23,2 L25,4.5 L23,7 Z" fill="#3a3468" />
            <path d="M31,4.5 L33,2 L35,4.5 L33,7 Z" fill="#3a3468" />
            <path d="M41,4.5 L43,2 L45,4.5 L43,7 Z" fill="#3a3468" />
            <path d="M51,4.5 L53,2 L55,4.5 L53,7 Z" fill="#3a3468" />
            <path d="M61,4.5 L63,2 L65,4.5 L63,7 Z" fill="#3a3468" />
            <path d="M71,4.5 L73,2 L75,4.5 L73,7 Z" fill="#3a3468" />

            <path d="M4.5,21 L7,23 L4.5,25 L2,23 Z" fill="#3a3468" />
            <path d="M4.5,31 L7,33 L4.5,35 L2,33 Z" fill="#3a3468" />
            <path d="M4.5,41 L7,43 L4.5,45 L2,43 Z" fill="#3a3468" />
            <path d="M4.5,51 L7,53 L4.5,55 L2,53 Z" fill="#3a3468" />
            <path d="M4.5,61 L7,63 L4.5,65 L2,63 Z" fill="#3a3468" />
            <path d="M4.5,71 L7,73 L4.5,75 L2,73 Z" fill="#3a3468" />

            <path d="M24,12 L26,7.5 L28,12 Z" fill="#342e5c" opacity=".8" />
            <path d="M36,12 L38,7.5 L40,12 Z" fill="#342e5c" opacity=".8" />
            <path d="M48,12 L50,7.5 L52,12 Z" fill="#342e5c" opacity=".8" />
            <path d="M60,12 L62,7.5 L64,12 Z" fill="#342e5c" opacity=".8" />
            <path d="M72,12 L74,7.5 L76,12 Z" fill="#342e5c" opacity=".8" />

            <path d="M12,24 L7.5,26 L12,28 Z" fill="#342e5c" opacity=".8" />
            <path d="M12,36 L7.5,38 L12,40 Z" fill="#342e5c" opacity=".8" />
            <path d="M12,48 L7.5,50 L12,52 Z" fill="#342e5c" opacity=".8" />
            <path d="M12,60 L7.5,62 L12,64 Z" fill="#342e5c" opacity=".8" />
            <path d="M12,72 L7.5,74 L12,76 Z" fill="#342e5c" opacity=".8" />

            <circle
              cx="20"
              cy="20"
              r="14"
              fill="none"
              stroke="#2a2448"
              strokeWidth=".9"
            />
            <circle
              cx="20"
              cy="20"
              r="10"
              fill="none"
              stroke="#2a2448"
              strokeWidth=".5"
            />

            <path d="M20,6 Q23.5,13 20,20 Q16.5,13 20,6 Z" fill="#2a2448" />
            <path d="M34,20 Q27,23.5 20,20 Q27,16.5 34,20 Z" fill="#2a2448" />
            <path
              d="M20,34 Q16.5,27 20,20 Q23.5,27 20,34 Z"
              fill="#2a2448"
              opacity=".65"
            />
            <path
              d="M6,20 Q13,16.5 20,20 Q13,23.5 6,20 Z"
              fill="#2a2448"
              opacity=".65"
            />

            <path d="M30,10 Q24,15 20,20 Q20,14 30,10 Z" fill="#383260" />
            <path d="M30,30 Q25,24 20,20 Q26,20 30,30 Z" fill="#383260" />
            <path d="M10,30 Q15,24 20,20 Q14,24 10,30 Z" fill="#383260" />
            <path d="M10,10 Q15,15 20,20 Q14,14 10,10 Z" fill="#383260" />

            <circle cx="20" cy="20" r="3.8" fill="#3a3468" />
            <circle cx="20" cy="20" r="2" fill="#484278" />

            <path
              d="M20,35 Q30,42 34,54"
              stroke="#2a2448"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="34"
              cy="54"
              r="3.2"
              fill="none"
              stroke="#2a2448"
              strokeWidth=".75"
            />
            <path
              d="M29,50 C24,55 25,62 30,64"
              stroke="#2a2448"
              strokeWidth=".6"
              fill="none"
            />
            <circle
              cx="30"
              cy="64"
              r="1.6"
              fill="none"
              stroke="#2a2448"
              strokeWidth=".6"
            />

            <path
              d="M35,20 Q42,30 54,34"
              stroke="#2a2448"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="54"
              cy="34"
              r="3.2"
              fill="none"
              stroke="#2a2448"
              strokeWidth=".75"
            />
            <path
              d="M50,29 C55,24 62,25 64,30"
              stroke="#2a2448"
              strokeWidth=".6"
              fill="none"
            />
            <circle
              cx="64"
              cy="30"
              r="1.6"
              fill="none"
              stroke="#2a2448"
              strokeWidth=".6"
            />

            <line
              x1="16"
              y1="2"
              x2="2"
              y2="16"
              stroke="#2a2448"
              strokeWidth=".35"
              opacity=".4"
            />
          </symbol>

          <symbol id="ldiv" viewBox="0 0 32 32">
            <path d="M16,3 Q20,10.5 16,16 Q12,10.5 16,3 Z" fill="#2a2448" />
            <path d="M29,16 Q21.5,20 16,16 Q21.5,12 29,16 Z" fill="#2a2448" />
            <path
              d="M16,29 Q12,21.5 16,16 Q20,21.5 16,29 Z"
              fill="#2a2448"
              opacity=".7"
            />
            <path
              d="M3,16 Q10.5,12 16,16 Q10.5,20 3,16 Z"
              fill="#2a2448"
              opacity=".7"
            />
            <path d="M24,8 Q22,14.5 16,16 Q17,9.5 24,8 Z" fill="#342e5c" />
            <path d="M24,24 Q17.5,22 16,16 Q22,17 24,24 Z" fill="#342e5c" />
            <path d="M8,24 Q10,17.5 16,16 Q14,22 8,24 Z" fill="#342e5c" />
            <path d="M8,8 Q14,10 16,16 Q10,14 8,8 Z" fill="#342e5c" />
            <circle cx="16" cy="16" r="3" fill="#3a3468" />
            <circle cx="16" cy="16" r="1.5" fill="#484278" />
          </symbol>
        </defs>
      </svg>

      {/* Nav */}
      <nav>
        <a className="nav-name" href="#hero">
          Brijesh Chandrakar
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a
              href="https://brijesh-engineering-notes.brijeshchandrakar.workers.dev"
              target="_blank"
              rel="noopener"
            >
              Notes ↗
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <svg
          className="hero-scene"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1248" />
              <stop offset="18%" stopColor="#241855" />
              <stop offset="34%" stopColor="#342058" />
              <stop offset="48%" stopColor="#4a2850" />
              <stop offset="60%" stopColor="#6a3048" />
              <stop offset="70%" stopColor="#8a4038" />
              <stop offset="78%" stopColor="#b85828" />
              <stop offset="85%" stopColor="#d87830" />
              <stop offset="91%" stopColor="#e89038" />
              <stop offset="96%" stopColor="#d87828" />
              <stop offset="100%" stopColor="#b06020" />
            </linearGradient>

            <radialGradient id="gBloom" cx="50%" cy="66%" r="65%">
              <stop offset="0%" stopColor="#ffcc60" stopOpacity="0.9" />
              <stop offset="8%" stopColor="#f0a030" stopOpacity="0.75" />
              <stop offset="22%" stopColor="#d87820" stopOpacity="0.50" />
              <stop offset="42%" stopColor="#a05010" stopOpacity="0.22" />
              <stop offset="65%" stopColor="#502808" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#1a0c08" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="gSunCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f8b860" />
              <stop offset="72%" stopColor="#e88830" />
              <stop offset="100%" stopColor="#c87020" />
            </radialGradient>

            <radialGradient id="gSunHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e88830" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#b06018" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#803808" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="gHorizon" cx="50%" cy="100%" r="60%">
              <stop offset="0%" stopColor="#c06020" stopOpacity="0.40" />
              <stop offset="55%" stopColor="#6a3010" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#1a0c08" stopOpacity="0" />
            </radialGradient>

            <g id="pl">
              <path
                fill="inherit"
                stroke="#1e1a3a"
                strokeWidth="0.45"
                d="M0,0 C-7,-5 -15,0 -14,9 C-13,17 -8,24 -4,30 L0,37 L4,30 C8,24 13,17 14,9 C15,0 7,-5 0,0 Z"
              />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="37"
                stroke="#1e1a3a"
                strokeWidth="0.75"
                fill="none"
              />
              <line
                x1="0"
                y1="6"
                x2="-10"
                y2="14"
                stroke="#1e1a3a"
                strokeWidth="0.4"
                fill="none"
                opacity=".52"
              />
              <line
                x1="0"
                y1="6"
                x2="10"
                y2="14"
                stroke="#1e1a3a"
                strokeWidth="0.4"
                fill="none"
                opacity=".52"
              />
              <line
                x1="0"
                y1="14"
                x2="-12"
                y2="21"
                stroke="#1e1a3a"
                strokeWidth="0.38"
                fill="none"
                opacity=".42"
              />
              <line
                x1="0"
                y1="14"
                x2="12"
                y2="21"
                stroke="#1e1a3a"
                strokeWidth="0.38"
                fill="none"
                opacity=".42"
              />
              <line
                x1="0"
                y1="22"
                x2="-10"
                y2="28"
                stroke="#1e1a3a"
                strokeWidth="0.32"
                fill="none"
                opacity=".32"
              />
              <line
                x1="0"
                y1="22"
                x2="10"
                y2="28"
                stroke="#1e1a3a"
                strokeWidth="0.32"
                fill="none"
                opacity=".32"
              />
            </g>
          </defs>

          <rect width="1440" height="900" fill="url(#gSky)" />
          <ellipse cx="720" cy="900" rx="750" ry="400" fill="url(#gHorizon)" />

          <g fill="#c8b8e8">
            <circle cx="112" cy="68" r="1.2" opacity=".9">
              <animate
                attributeName="opacity"
                values=".25;1;.25"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="240" cy="44" r="0.9" opacity=".8">
              <animate
                attributeName="opacity"
                values=".3;.95;.3"
                dur="4.1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="382" cy="88" r="1.0" opacity=".75">
              <animate
                attributeName="opacity"
                values=".2;1;.2"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="495" cy="36" r="1.1" opacity=".7">
              <animate
                attributeName="opacity"
                values=".25;.9;.25"
                dur="3.6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="655" cy="60" r="0.9" opacity=".85">
              <animate
                attributeName="opacity"
                values=".3;1;.3"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="778" cy="42" r="1.0" opacity=".8">
              <animate
                attributeName="opacity"
                values=".2;.95;.2"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="912" cy="78" r="0.8" opacity=".72">
              <animate
                attributeName="opacity"
                values=".25;.9;.25"
                dur="3.0s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1048" cy="50" r="1.1" opacity=".78">
              <animate
                attributeName="opacity"
                values=".3;1;.3"
                dur="3.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1195" cy="66" r="0.9" opacity=".75">
              <animate
                attributeName="opacity"
                values=".2;.95;.2"
                dur="2.9s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1358" cy="46" r="1.0" opacity=".68">
              <animate
                attributeName="opacity"
                values=".25;.9;.25"
                dur="4.2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="168" cy="135" r="0.8" opacity=".55">
              <animate
                attributeName="opacity"
                values=".2;.85;.2"
                dur="3.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1048" cy="122" r="0.7" opacity=".5">
              <animate
                attributeName="opacity"
                values=".25;.8;.25"
                dur="2.7s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="558" cy="108" r="0.7" opacity=".45">
              <animate
                attributeName="opacity"
                values=".2;.75;.2"
                dur="4.0s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="880" cy="105" r="0.6" opacity=".42">
              <animate
                attributeName="opacity"
                values=".15;.7;.15"
                dur="3.1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="330" cy="155" r="0.6" opacity=".38">
              <animate
                attributeName="opacity"
                values=".2;.65;.2"
                dur="3.7s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1120" cy="148" r="0.6" opacity=".35">
              <animate
                attributeName="opacity"
                values=".15;.6;.15"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="210" cy="28" r="0.7" opacity=".6">
              <animate
                attributeName="opacity"
                values=".2;.85;.2"
                dur="3.3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="620" cy="22" r="0.8" opacity=".55">
              <animate
                attributeName="opacity"
                values=".25;.8;.25"
                dur="4.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1280" cy="32" r="0.7" opacity=".5">
              <animate
                attributeName="opacity"
                values=".2;.75;.2"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="430" cy="115" r="0.5" opacity=".4">
              <animate
                attributeName="opacity"
                values=".15;.7;.15"
                dur="3.9s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="68" cy="95" r="0.6" opacity=".45">
              <animate
                attributeName="opacity"
                values=".2;.75;.2"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="310" cy="55" r="0.8" opacity=".6">
              <animate
                attributeName="opacity"
                values=".25;.85;.25"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="750" cy="35" r="0.7" opacity=".55">
              <animate
                attributeName="opacity"
                values=".2;.8;.2"
                dur="4.1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="850" cy="65" r="0.9" opacity=".65">
              <animate
                attributeName="opacity"
                values=".25;.9;.25"
                dur="3.0s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="980" cy="42" r="0.6" opacity=".5">
              <animate
                attributeName="opacity"
                values=".15;.75;.15"
                dur="3.6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1150" cy="88" r="0.8" opacity=".58">
              <animate
                attributeName="opacity"
                values=".2;.85;.2"
                dur="2.7s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1420" cy="72" r="0.7" opacity=".48">
              <animate
                attributeName="opacity"
                values=".2;.8;.2"
                dur="4.3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1380" cy="110" r="0.5" opacity=".4">
              <animate
                attributeName="opacity"
                values=".15;.7;.15"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="45" cy="125" r="0.5" opacity=".35">
              <animate
                attributeName="opacity"
                values=".15;.65;.15"
                dur="4.0s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="190" cy="105" r="0.6" opacity=".42">
              <animate
                attributeName="opacity"
                values=".2;.75;.2"
                dur="3.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="720" cy="18" r="0.8" opacity=".52">
              <animate
                attributeName="opacity"
                values=".2;.8;.2"
                dur="2.9s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="820" cy="28" r="0.6" opacity=".45">
              <animate
                attributeName="opacity"
                values=".15;.7;.15"
                dur="3.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1080" cy="68" r="0.7" opacity=".55">
              <animate
                attributeName="opacity"
                values=".2;.85;.2"
                dur="3.1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1250" cy="48" r="0.6" opacity=".48">
              <animate
                attributeName="opacity"
                values=".15;.75;.15"
                dur="4.2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1320" cy="95" r="0.5" opacity=".38">
              <animate
                attributeName="opacity"
                values=".15;.65;.15"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="280" cy="82" r="0.5" opacity=".42">
              <animate
                attributeName="opacity"
                values=".2;.7;.2"
                dur="3.7s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="460" cy="48" r="0.7" opacity=".5">
              <animate
                attributeName="opacity"
                values=".2;.8;.2"
                dur="3.3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="580" cy="72" r="0.6" opacity=".45">
              <animate
                attributeName="opacity"
                values=".15;.72;.15"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="690" cy="52" r="0.8" opacity=".55">
              <animate
                attributeName="opacity"
                values=".25;.85;.25"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Elegant Clouds */}
          <g opacity=".22">
            <path
              d="M85,155 C85,142 105,138 118,145 C130,135 155,140 160,155 C165,168 145,175 125,172 C105,178 80,170 85,155 Z"
              fill="#3a3068"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 22,0; 0,0"
                dur="18s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M1180,148 C1180,132 1210,128 1228,136 C1245,124 1280,130 1288,148 C1295,165 1268,174 1240,170 C1212,178 1175,168 1180,148 Z"
              fill="#3a3068"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -18,0; 0,0"
                dur="22s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M520,128 C520,118 540,114 552,120 C564,112 585,116 590,128 C595,140 578,146 560,144 C542,150 516,142 520,128 Z"
              fill="#3a3068"
              opacity=".7"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 14,0; 0,0"
                dur="15s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M920,168 C920,158 938,154 950,160 C962,152 982,156 988,168 C992,178 976,184 960,182 C944,188 916,180 920,168 Z"
              fill="#3a3068"
              opacity=".55"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -12,0; 0,0"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M280,185 C280,175 298,171 310,177 C322,169 342,173 348,185 C352,195 336,201 320,199 C304,205 276,197 280,185 Z"
              fill="#3a3068"
              opacity=".4"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 16,0; 0,0"
                dur="17s"
                repeatCount="indefinite"
              />
            </path>
            {/* Additional clouds higher up */}
            <path
              d="M40,85 C40,72 62,68 76,75 C90,65 118,70 124,85 C130,98 108,105 86,102 C64,108 34,100 40,85 Z"
              fill="#3a3068"
              opacity=".55"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 18,0; 0,0"
                dur="24s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M680,105 C680,95 700,91 712,97 C724,89 745,93 750,105 C755,115 738,121 720,119 C702,125 676,117 680,105 Z"
              fill="#3a3068"
              opacity=".45"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -10,0; 0,0"
                dur="19s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M1320,125 C1320,115 1340,111 1352,117 C1364,109 1385,113 1390,125 C1395,135 1378,141 1360,139 C1342,145 1316,137 1320,125 Z"
              fill="#3a3068"
              opacity=".5"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 14,0; 0,0"
                dur="21s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M380,65 C380,55 398,51 410,57 C422,49 442,53 448,65 C452,75 436,81 418,79 C400,85 376,77 380,65 Z"
              fill="#3a3068"
              opacity=".35"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -16,0; 0,0"
                dur="26s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M1050,85 C1050,74 1072,70 1086,77 C1100,67 1128,72 1134,85 C1140,98 1118,105 1096,102 C1074,108 1044,100 1050,85 Z"
              fill="#3a3068"
              opacity=".4"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 12,0; 0,0"
                dur="23s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          {/* Flying Birds - Flock 1 */}
          <g
            fill="none"
            stroke="#1e1840"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-80,180"
                to="1540,120"
                dur="22s"
                repeatCount="indefinite"
              />
              <path d="M0,0 Q6,-10 12,0">
                <animate
                  attributeName="d"
                  values="M0,0 Q6,-10 12,0;M0,0 Q6,2 12,0;M0,0 Q6,-10 12,0"
                  dur="0.55s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M18,8 Q24,-2 30,8">
                <animate
                  attributeName="d"
                  values="M18,8 Q24,-2 30,8;M18,8 Q24,10 30,8;M18,8 Q24,-2 30,8"
                  dur="0.55s"
                  repeatCount="indefinite"
                  begin="0.08s"
                />
              </path>
              <path d="M-14,10 Q-8,0 -2,10">
                <animate
                  attributeName="d"
                  values="M-14,10 Q-8,0 -2,10;M-14,10 Q-8,12 -2,10;M-14,10 Q-8,0 -2,10"
                  dur="0.55s"
                  repeatCount="indefinite"
                  begin="0.15s"
                />
              </path>
              <path d="M32,18 Q38,8 44,18">
                <animate
                  attributeName="d"
                  values="M32,18 Q38,8 44,18;M32,18 Q38,20 44,18;M32,18 Q38,8 44,18"
                  dur="0.55s"
                  repeatCount="indefinite"
                  begin="0.05s"
                />
              </path>
              <path d="M8,20 Q14,10 20,20">
                <animate
                  attributeName="d"
                  values="M8,20 Q14,10 20,20;M8,20 Q14,22 20,20;M8,20 Q14,10 20,20"
                  dur="0.55s"
                  repeatCount="indefinite"
                  begin="0.22s"
                />
              </path>
              <path d="M-24,22 Q-18,12 -12,22">
                <animate
                  attributeName="d"
                  values="M-24,22 Q-18,12 -12,22;M-24,22 Q-18,24 -12,22;M-24,22 Q-18,12 -12,22"
                  dur="0.55s"
                  repeatCount="indefinite"
                  begin="0.12s"
                />
              </path>
              <path d="M42,28 Q48,18 54,28">
                <animate
                  attributeName="d"
                  values="M42,28 Q48,18 54,28;M42,28 Q48,30 54,28;M42,28 Q48,18 54,28"
                  dur="0.55s"
                  repeatCount="indefinite"
                  begin="0.18s"
                />
              </path>
            </g>
          </g>

          {/* Flying Birds - Flock 2 (smaller, lower, slower) */}
          <g
            fill="none"
            stroke="#1e1840"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".65"
          >
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-60,320"
                to="1520,260"
                dur="28s"
                repeatCount="indefinite"
              />
              <path d="M0,0 Q5,-8 10,0">
                <animate
                  attributeName="d"
                  values="M0,0 Q5,-8 10,0;M0,0 Q5,2 10,0;M0,0 Q5,-8 10,0"
                  dur="0.65s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M14,6 Q19,-2 24,6">
                <animate
                  attributeName="d"
                  values="M14,6 Q19,-2 24,6;M14,6 Q19,8 24,6;M14,6 Q19,-2 24,6"
                  dur="0.65s"
                  repeatCount="indefinite"
                  begin="0.1s"
                />
              </path>
              <path d="M-10,8 Q-5,0 0,8">
                <animate
                  attributeName="d"
                  values="M-10,8 Q-5,0 0,8;M-10,8 Q-5,10 0,8;M-10,8 Q-5,0 0,8"
                  dur="0.65s"
                  repeatCount="indefinite"
                  begin="0.2s"
                />
              </path>
              <path d="M26,14 Q31,6 36,14">
                <animate
                  attributeName="d"
                  values="M26,14 Q31,6 36,14;M26,14 Q31,16 36,14;M26,14 Q31,6 36,14"
                  dur="0.65s"
                  repeatCount="indefinite"
                  begin="0.05s"
                />
              </path>
              <path d="M6,16 Q11,8 16,16">
                <animate
                  attributeName="d"
                  values="M6,16 Q11,8 16,16;M6,16 Q11,18 16,16;M6,16 Q11,8 16,16"
                  dur="0.65s"
                  repeatCount="indefinite"
                  begin="0.15s"
                />
              </path>
            </g>
          </g>

          {/* Flying Birds - Flock 3 (distant, tiny) */}
          <g
            fill="none"
            stroke="#1e1840"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".4"
          >
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-40,260"
                to="1500,200"
                dur="32s"
                repeatCount="indefinite"
              />
              <path d="M0,0 Q4,-6 8,0">
                <animate
                  attributeName="d"
                  values="M0,0 Q4,-6 8,0;M0,0 Q4,2 8,0;M0,0 Q4,-6 8,0"
                  dur="0.75s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M12,5 Q16,-1 20,5">
                <animate
                  attributeName="d"
                  values="M12,5 Q16,-1 20,5;M12,5 Q16,7 20,5;M12,5 Q16,-1 20,5"
                  dur="0.75s"
                  repeatCount="indefinite"
                  begin="0.12s"
                />
              </path>
              <path d="M-8,6 Q-4,0 0,6">
                <animate
                  attributeName="d"
                  values="M-8,6 Q-4,0 0,6;M-8,6 Q-4,8 0,6;M-8,6 Q-4,0 0,6"
                  dur="0.75s"
                  repeatCount="indefinite"
                  begin="0.25s"
                />
              </path>
              <path d="M22,10 Q26,4 30,10">
                <animate
                  attributeName="d"
                  values="M22,10 Q26,4 30,10;M22,10 Q26,12 30,10;M22,10 Q26,4 30,10"
                  dur="0.75s"
                  repeatCount="indefinite"
                  begin="0.08s"
                />
              </path>
            </g>
          </g>

          {/* Summer sunset — warm horizon glow behind the hill */}
          <ellipse
            cx="720"
            cy="880"
            rx="900"
            ry="280"
            fill="url(#gHorizon)"
            opacity="0.7"
          />

          {/* Single prominent hill */}
          <path
            d="M0,760 C180,710 320,745 480,695 C620,650 720,665 820,630 C920,595 1020,620 1140,660 C1280,705 1380,685 1440,715 L1440,900 L0,900 Z"
            fill="#1e1840"
          />

          {/* Artistic tree silhouettes — few, high quality */}
          <g fill="#16122e">
            {/* Large spreading banyan on the left */}
            <path d="M220,720 L228,720 L226,660 C240,640 270,630 300,635 C330,640 350,660 340,680 C330,695 300,700 270,695 C250,692 235,680 228,660 L226,720 Z" />
            <path d="M226,660 C210,640 180,630 150,640 C120,650 110,670 130,685 C145,695 170,690 190,680 C205,672 215,665 226,660 Z" />
            <path d="M226,660 C235,620 250,590 280,580 C310,570 330,590 320,615 C312,635 285,645 260,640 C245,637 235,650 226,660 Z" />
            {/* Aerial roots */}
            <path
              d="M180,685 Q175,700 178,720"
              stroke="#16122e"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M260,690 Q265,705 262,720"
              stroke="#16122e"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M300,675 Q305,695 302,720"
              stroke="#16122e"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M140,675 Q135,695 138,720"
              stroke="#16122e"
              strokeWidth="1.5"
              fill="none"
            />

            {/* Tall slender pine left of center */}
            <path d="M480,695 L486,695 L484,620 Q488,590 492,570 Q496,590 494,620 L492,695 L498,695 L495,620 Q498,595 502,580 Q505,595 502,620 L500,695 Z" />
            <path d="M484,620 Q470,600 460,580 Q475,595 484,610 Q493,595 508,580 Q498,600 484,620 Z" />
            <path d="M492,570 Q480,550 475,530 Q485,545 492,560 Q499,545 512,530 Q505,550 492,570 Z" />

            {/* Medium round tree right of center */}
            <path d="M1080,665 L1086,665 L1084,630 C1100,610 1130,605 1150,615 C1170,625 1175,645 1160,660 C1145,672 1120,670 1100,660 C1090,655 1085,640 1084,630 L1080,665 Z" />
            <path d="M1084,630 C1070,610 1045,605 1030,620 C1015,635 1020,655 1035,665 C1050,672 1070,665 1080,650 C1085,642 1084,635 1084,630 Z" />
            <path d="M1084,630 C1090,595 1105,570 1125,565 C1145,560 1155,580 1145,600 C1137,615 1115,620 1100,615 C1090,612 1086,620 1084,630 Z" />

            {/* Small tree far right */}
            <path d="M1300,685 L1304,685 L1303,660 C1310,645 1325,640 1335,645 C1345,650 1348,662 1340,670 C1332,678 1318,675 1310,668 C1306,665 1304,660 1303,660 L1300,685 Z" />
            <path d="M1303,660 C1295,645 1280,640 1270,650 C1260,660 1265,672 1275,678 C1285,682 1295,675 1300,665 C1302,662 1303,660 1303,660 Z" />
          </g>

          {/* Warm rim light on tree edges — summer sunset glow */}
          <g
            fill="none"
            stroke="#c06020"
            strokeWidth="0.6"
            opacity="0.25"
            strokeLinecap="round"
          >
            <path d="M340,680 C350,660 330,640 300,635" />
            <path d="M320,615 C330,590 310,570 280,580" />
            <path d="M130,685 C110,670 120,650 150,640" />
            <path d="M1160,660 C1175,645 1170,625 1150,615" />
            <path d="M1145,600 C1155,580 1145,560 1125,565" />
          </g>

          <g id="peepalTree" transform="translate(720,920)" fill="#16122e">
            <path d="M-18,0 C-20,-44 -16,-90 -10,-132 C-6,-158 -2,-175 0,-185 C2,-175 6,-158 10,-132 C16,-90 20,-44 18,0 Z" />
            <line
              x1="-5"
              y1="-55"
              x2="-8"
              y2="-168"
              stroke="#1a1635"
              strokeWidth="1.5"
              opacity=".32"
            />
            <line
              x1="5"
              y1="-55"
              x2="8"
              y2="-168"
              stroke="#1a1635"
              strokeWidth="1.5"
              opacity=".32"
            />
            <path d="M-18,0 C-28,-22 -40,-17 -50,-30 C-38,-16 -20,-12 -18,0 Z" />
            <path d="M18,0 C28,-22 40,-17 50,-30 C38,-16 20,-12 18,0 Z" />
            <path d="M-12,0 C-18,-14 -30,-11 -36,-21 C-26,-10 -14,-7 -12,0 Z" />
            <path d="M12,0 C18,-14 30,-11 36,-21 C26,-10 14,-7 12,0 Z" />

            <path
              d="M-5,-125 C-28,-138 -60,-145 -85,-158"
              stroke="#16122e"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M5,-125 C28,-138 60,-145 85,-158"
              stroke="#16122e"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M-72,-152 C-112,-165 -155,-162 -200,-178"
              stroke="#16122e"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M-168,-172 C-192,-162 -215,-158 -232,-170"
              stroke="#16122e"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M-125,-165 C-140,-152 -158,-148 -172,-158"
              stroke="#16122e"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M-88,-158 C-100,-144 -115,-140 -128,-150"
              stroke="#16122e"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M-55,-148 C-65,-134 -78,-130 -90,-140"
              stroke="#16122e"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M72,-152 C112,-165 155,-162 200,-178"
              stroke="#16122e"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M168,-172 C192,-162 215,-158 232,-170"
              stroke="#16122e"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M125,-165 C140,-152 158,-148 172,-158"
              stroke="#16122e"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M88,-158 C100,-144 115,-140 128,-150"
              stroke="#16122e"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M55,-148 C65,-134 78,-130 90,-140"
              stroke="#16122e"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M0,-185 C-16,-202 -22,-228 -18,-252"
              stroke="#16122e"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M0,-185 C16,-202 22,-228 18,-252"
              stroke="#16122e"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M-14,-225 C-26,-240 -30,-258 -26,-275"
              stroke="#16122e"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M14,-225 C26,-240 30,-258 26,-275"
              stroke="#16122e"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M0,-252 C-10,-265 -12,-280 -10,-295"
              stroke="#16122e"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M0,-252 C10,-265 12,-280 10,-295"
              stroke="#16122e"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M-65,-150 C-67,-112 -63,-70 -65,-45"
              stroke="#16122e"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M-98,-162 C-100,-122 -96,-78 -98,-45"
              stroke="#16122e"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M-130,-168 C-132,-128 -128,-82 -130,-45"
              stroke="#16122e"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M-162,-174 C-164,-134 -160,-88 -162,-45"
              stroke="#16122e"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M-192,-178 C-194,-140 -190,-95 -192,-45"
              stroke="#16122e"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="-65" cy="-43" rx="5" ry="3" />
            <ellipse cx="-98" cy="-43" rx="4.5" ry="2.8" />
            <ellipse cx="-130" cy="-43" rx="4" ry="2.5" />
            <ellipse cx="-162" cy="-43" rx="3.5" ry="2.2" />
            <ellipse cx="-192" cy="-43" rx="3" ry="2" />

            <path
              d="M65,-150 C67,-112 63,-70 65,-45"
              stroke="#16122e"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M98,-162 C100,-122 96,-78 98,-45"
              stroke="#16122e"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M130,-168 C132,-128 128,-82 130,-45"
              stroke="#16122e"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M162,-174 C164,-134 160,-88 162,-45"
              stroke="#16122e"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M192,-178 C194,-140 190,-95 192,-45"
              stroke="#16122e"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="65" cy="-43" rx="5" ry="3" />
            <ellipse cx="98" cy="-43" rx="4.5" ry="2.8" />
            <ellipse cx="130" cy="-43" rx="4" ry="2.5" />
            <ellipse cx="162" cy="-43" rx="3.5" ry="2.2" />
            <ellipse cx="192" cy="-43" rx="3" ry="2" />

            {/* Leaves */}
            <use
              href="#pl"
              transform="translate(-212,-175) rotate(-14)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-222,-184) rotate(-24)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-205,-190) rotate(-8)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-228,-180) rotate(-32)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-200,-196) rotate(-2)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-218,-194) rotate(-20)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-232,-188) rotate(-38)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-196,-200) rotate(4)"
              fill="#1a1635"
            />

            <use
              href="#pl"
              transform="translate(-162,-168) rotate(-18)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-172,-176) rotate(-28)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-152,-178) rotate(-10)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-178,-172) rotate(-36)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-148,-184) rotate(-4)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-168,-185) rotate(-24)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-185,-178) rotate(-42)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-142,-190) rotate(3)"
              fill="#1a1635"
            />

            <use
              href="#pl"
              transform="translate(-105,-152) rotate(-20)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-115,-160) rotate(-30)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-98,-162) rotate(-12)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-122,-156) rotate(-38)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-92,-168) rotate(-5)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-128,-164) rotate(-25)"
              fill="#1a1635"
            />

            <use
              href="#pl"
              transform="translate(-68,-142) rotate(-15)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-78,-150) rotate(-25)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-62,-154) rotate(-8)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-84,-147) rotate(-32)"
              fill="#1a1635"
            />

            <use
              href="#pl"
              transform="translate(212,-175) rotate(14)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(222,-184) rotate(24)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(205,-190) rotate(8)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(228,-180) rotate(32)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(200,-196) rotate(2)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(218,-194) rotate(20)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(232,-188) rotate(38)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(196,-200) rotate(-4)"
              fill="#1a1635"
            />

            <use
              href="#pl"
              transform="translate(162,-168) rotate(18)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(172,-176) rotate(28)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(152,-178) rotate(10)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(178,-172) rotate(36)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(148,-184) rotate(4)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(168,-185) rotate(24)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(185,-178) rotate(42)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(142,-190) rotate(-3)"
              fill="#1a1635"
            />

            <use
              href="#pl"
              transform="translate(105,-152) rotate(20)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(115,-160) rotate(30)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(98,-162) rotate(12)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(122,-156) rotate(38)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(92,-168) rotate(5)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(128,-164) rotate(25)"
              fill="#1a1635"
            />

            <use
              href="#pl"
              transform="translate(68,-142) rotate(15)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(78,-150) rotate(25)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(62,-154) rotate(8)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(84,-147) rotate(32)"
              fill="#1a1635"
            />

            <use
              href="#pl"
              transform="translate(-20,-258) rotate(-9)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-8,-266) rotate(-4)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(4,-270) rotate(2)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(16,-262) rotate(8)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-28,-252) rotate(-16)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(26,-252) rotate(15)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(0,-278) rotate(0)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-36,-244) rotate(-22)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(34,-244) rotate(20)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-14,-285) rotate(-6)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(12,-283) rotate(5)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(-42,-238) rotate(-28)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(40,-238) rotate(26)"
              fill="#1a1635"
            />
            <use
              href="#pl"
              transform="translate(0,-294) rotate(1)"
              fill="#1a1635"
            />
          </g>

          <path
            d="M0,870 Q140,848 280,860 Q420,840 560,852 Q700,838 840,848 Q980,838 1120,850 Q1260,840 1380,855 Q1420,860 1440,865 L1440,900 L0,900 Z"
            fill="#0e0c20"
          />
        </svg>

        <div className="hero-content" id="heroContent">
          <p className="h-eye">
            Full Stack Developer &nbsp;·&nbsp; IIT Kanpur &nbsp;·&nbsp;
            Chhattisgarh
          </p>
          <h1 className="h-name">Brijesh Chandrakar</h1>
          <p className="h-san">योगः कर्मसु कौशलम्</p>
          <p className="h-gls">
            Excellence in action is yoga &nbsp;—&nbsp; Bhagavad Gita, II.50
          </p>
        </div>

        <div className="scroll-cue">
          <svg width="1" height="52" viewBox="0 0 1 52">
            <line
              x1=".5"
              y1="0"
              x2=".5"
              y2="52"
              stroke="#4e4840"
              strokeWidth="1"
            />
          </svg>
          <span>Descend</span>
        </div>
      </section>

      {/* Content */}
      <div id="content">
        {/* About */}
        <section id="about">
          <div className="wrap">
            <svg
              className="bg-motif"
              style={{
                right: "-55px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
              width="260"
              height="260"
              viewBox="0 0 100 100"
            >
              <polygon
                points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
                fill="none"
                stroke="#c49040"
                strokeWidth=".7"
              />
              <polygon
                points="50,20 57,40 80,40 62,53 69,76 50,63 31,76 38,53 20,40 43,40"
                fill="none"
                stroke="#c49040"
                strokeWidth=".4"
              />
              <circle
                cx="50"
                cy="50"
                r="7"
                fill="none"
                stroke="#c49040"
                strokeWidth=".4"
              />
            </svg>

            <svg
              className="cor tl"
              width="82"
              height="82"
              viewBox="0 0 82 82"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.32 }}
            >
              <use href="#hcor" />
            </svg>
            <svg
              className="cor tr"
              width="82"
              height="82"
              viewBox="0 0 82 82"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.32 }}
            >
              <use href="#hcor" />
            </svg>

            <div className="reveal">
              <p className="lbl">About</p>
              <h2>
                Born of iron-red hills,
                <br />
                shaped by the Gita
              </h2>
            </div>
            <div className="stagger">
              <p>
                I grew up in the small town of{" "}
                <span className="hl">Dalli Rajhara</span> in Chhattisgarh —
                known for its iron ore mines, its mango groves, and the quiet
                tempo of life beneath old temple bells. It is the kind of place
                where evening aarti drifts across still air, and where roots
                grow deep into the red earth.
              </p>
              <p>
                I now call <span className="hl">Durg</span> home. I build
                software — clean, honest systems — and I completed a
                B.Tech–M.Tech dual degree from the{" "}
                <span className="hl">
                  Biological Sciences and Bioengineering department at IIT
                  Kanpur
                </span>
                , where I also published research on metal-binding motifs in
                proteins.
              </p>
              <p>
                Beyond code, I am drawn to the deeper questions —{" "}
                <span className="hl">
                  Hindu philosophy, classical literature, history, culture
                </span>
                . To me, family, nature, health, and cultural continuity are the
                foundational pillars of a life well-lived. Technology, in this
                view, is never the destination — only a disciplined means toward
                dharma.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="div-wrap reveal">
          <div className="div-line"></div>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <use href="#ldiv" />
          </svg>
          <div className="div-line"></div>
        </div>

        {/* Work */}
        <section id="work">
          <div className="wrap">
            <svg
              className="bg-motif"
              style={{ left: "-75px", top: "35%" }}
              width="200"
              height="280"
              viewBox="0 0 65 170"
            >
              <rect x="28" y="80" width="9" height="90" fill="#c49040" />
              <ellipse cx="32" cy="65" rx="30" ry="46" fill="#c49040" />
              <ellipse cx="10" cy="78" rx="18" ry="30" fill="#c49040" />
              <ellipse cx="54" cy="76" rx="16" ry="28" fill="#c49040" />
            </svg>

            <svg
              className="cor tl"
              width="82"
              height="82"
              viewBox="0 0 82 82"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.32 }}
            >
              <use href="#hcor" />
            </svg>
            <svg
              className="cor tr"
              width="82"
              height="82"
              viewBox="0 0 82 82"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.32 }}
            >
              <use href="#hcor" />
            </svg>

            <div className="reveal">
              <p className="lbl">Work</p>
              <h2>
                Craft in the full-stack,
                <br />
                curiosity in the lab
              </h2>
            </div>
            <div className="stagger">
              <p>
                I build software at <span className="hl">Hardskills</span> —
                products at the intersection of learning and human capability,
                built on React and Django. I care about systems that are
                purposeful and leave the user more capable than before they
                arrived.
              </p>
              <p>
                My academic journey began in biology — the precise world of
                protein structures and biochemical logic — before finding its
                second form in engineering. The paper I published at IIT Kanpur
                on <span className="hl">metal-binding motifs in proteins</span>{" "}
                taught me something the Gita had already said: that attention,
                sustained and undivided, is itself a form of yoga.
              </p>
              <p>
                I am also keenly aware of the psychological and societal weight
                technology carries. A tool that does not serve the full human —
                mind, body, culture — is a tool not yet complete.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: "2.8rem" }}>
              <p className="lbl" style={{ marginBottom: "1.2rem" }}>
                Tools of the craft
              </p>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Django</span>
                <span className="tag">React Native</span>
                <span className="tag">Python</span>
                <span className="tag">JavaScript</span>
                <span className="tag">TypeScript</span>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="div-wrap reveal">
          <div className="div-line"></div>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <use href="#ldiv" />
          </svg>
          <div className="div-line"></div>
        </div>

        {/* Project */}
        <section id="project">
          <div className="wrap">
            <svg
              className="cor tl"
              width="82"
              height="82"
              viewBox="0 0 82 82"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.32 }}
            >
              <use href="#hcor" />
            </svg>
            <svg
              className="cor tr"
              width="82"
              height="82"
              viewBox="0 0 82 82"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.32 }}
            >
              <use href="#hcor" />
            </svg>

            <div className="reveal">
              <p className="lbl">Made</p>
              <h2>Engineering Notes</h2>
            </div>
            <div className="reveal">
              <div className="p-card">
                <svg
                  className="cor tl"
                  style={{
                    width: "44px",
                    height: "44px",
                    top: 0,
                    left: 0,
                    opacity: 0.22,
                  }}
                  viewBox="0 0 82 82"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#hcor" />
                </svg>
                <svg
                  className="cor br"
                  style={{
                    width: "44px",
                    height: "44px",
                    bottom: 0,
                    right: 0,
                    opacity: 0.22,
                  }}
                  viewBox="0 0 82 82"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#hcor" />
                </svg>
                <p className="p-name">
                  A Structured Knowledge Base
                  <br />
                  for Software Engineering
                </p>
                <p className="p-desc">
                  Notes distilled from practice — patterns, principles, and
                  mental models gathered across years of building software.
                  Written as one would carve into stone: with the intention that
                  it endure and be of use to those who come after.
                </p>
                <a
                  className="p-link"
                  href="https://brijesh-engineering-notes.brijeshchandrakar.workers.dev"
                  target="_blank"
                  rel="noopener"
                >
                  Visit the notes &nbsp;→
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="div-wrap reveal">
          <div className="div-line"></div>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <use href="#ldiv" />
          </svg>
          <div className="div-line"></div>
        </div>

        {/* Beyond Code */}
        <section id="beyond">
          <div className="wrap">
            <svg
              className="bg-motif"
              style={{ right: "-45px", bottom: "14%" }}
              width="210"
              height="210"
              viewBox="0 0 100 100"
            >
              <path
                d="M0,100 L25,38 L45,58 L68,16 L88,50 L100,100 Z"
                fill="#c49040"
              />
            </svg>

            <svg
              className="cor tl"
              width="82"
              height="82"
              viewBox="0 0 82 82"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.32 }}
            >
              <use href="#hcor" />
            </svg>
            <svg
              className="cor tr"
              width="82"
              height="82"
              viewBox="0 0 82 82"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.32 }}
            >
              <use href="#hcor" />
            </svg>

            <div className="reveal">
              <p className="lbl">Beyond Code</p>
              <h2>
                The life
                <br />
                between the lines
              </h2>
            </div>
            <div className="stagger">
              <p>
                I am an avid trekker with over{" "}
                <span className="hl">ten expeditions in the Himalayas</span>.
                There is a particular quality to the silence above the treeline
                — the same quality I find in deep study, in a well-played chess
                game, or in the rhythm of a long run. It is the silence of full
                presence.
              </p>
              <p>
                I read widely — history, economics, the Upanishads, the
                Mahabharata, classical literature. I believe the{" "}
                <span className="hl">Hindu philosophical tradition</span> offers
                frameworks of extraordinary depth for understanding
                consciousness, society, and the nature of right action in the
                world.
              </p>
              <p>
                I also play football, cook, and write — always searching for the
                place where{" "}
                <span className="hl">precision and joy coincide</span>.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <div className="f-icon">
          <svg width="56" height="52" viewBox="0 0 56 52" fill="#2a2448">
            <path d="M28,0 C22,0 18,6 18,14 C18,21 22,27 26,32 L28,36 L30,32 C34,27 38,21 38,14 C38,6 34,0 28,0 Z" />
            <path
              d="M12,4 C8,4 5,8 5,14 C5,19 7,24 10,28 L12,31 L14,28 C17,24 19,19 19,14 C19,8 16,4 12,4 Z"
              opacity=".5"
              transform="rotate(-18 12 18)"
            />
            <path
              d="M44,4 C40,4 37,8 37,14 C37,19 39,24 42,28 L44,31 L46,28 C49,24 51,19 51,14 C51,8 48,4 44,4 Z"
              opacity=".5"
              transform="rotate(18 44 18)"
            />
          </svg>
        </div>
        <p className="f-name">Brijesh Chandrakar</p>
        <p className="f-san">योगः कर्मसु कौशलम्</p>
        <p className="f-place">Durg, Chhattisgarh &nbsp;—&nbsp; India</p>
      </footer>
    </>
  );
}
