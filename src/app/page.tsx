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
            <circle cx="112" cy="68" r="0.9" opacity=".68"><animate attributeName="opacity" values=".58;.68;.58" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="240" cy="44" r="0.8" opacity=".62"><animate attributeName="opacity" values=".53;.62;.53" dur="4.1s" repeatCount="indefinite"/></circle>
            <circle cx="382" cy="88" r="0.8" opacity=".65"><animate attributeName="opacity" values=".56;.65;.56" dur="2.8s" repeatCount="indefinite"/></circle>
            <circle cx="495" cy="36" r="0.8" opacity=".60"><animate attributeName="opacity" values=".51;.60;.51" dur="3.6s" repeatCount="indefinite"/></circle>
            <circle cx="655" cy="60" r="0.7" opacity=".67"><animate attributeName="opacity" values=".58;.67;.58" dur="2.5s" repeatCount="indefinite"/></circle>
            <circle cx="778" cy="42" r="0.8" opacity=".65"><animate attributeName="opacity" values=".56;.65;.56" dur="4.5s" repeatCount="indefinite"/></circle>
            <circle cx="912" cy="78" r="0.7" opacity=".60"><animate attributeName="opacity" values=".51;.60;.51" dur="3.0s" repeatCount="indefinite"/></circle>
            <circle cx="1048" cy="50" r="0.8" opacity=".65"><animate attributeName="opacity" values=".56;.65;.56" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="1195" cy="66" r="0.7" opacity=".62"><animate attributeName="opacity" values=".53;.62;.53" dur="2.9s" repeatCount="indefinite"/></circle>
            <circle cx="1358" cy="46" r="0.8" opacity=".60"><animate attributeName="opacity" values=".51;.60;.51" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="168" cy="135" r="0.6" opacity=".48"><animate attributeName="opacity" values=".40;.48;.40" dur="3.4s" repeatCount="indefinite"/></circle>
            <circle cx="1048" cy="122" r="0.5" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="2.7s" repeatCount="indefinite"/></circle>
            <circle cx="558" cy="108" r="0.5" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="4.0s" repeatCount="indefinite"/></circle>
            <circle cx="880" cy="105" r="0.5" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="3.1s" repeatCount="indefinite"/></circle>
            <circle cx="330" cy="155" r="0.4" opacity=".34"><animate attributeName="opacity" values=".28;.34;.28" dur="3.7s" repeatCount="indefinite"/></circle>
            <circle cx="1120" cy="148" r="0.4" opacity=".32"><animate attributeName="opacity" values=".26;.32;.26" dur="2.6s" repeatCount="indefinite"/></circle>
            <circle cx="210" cy="28" r="0.6" opacity=".56"><animate attributeName="opacity" values=".47;.56;.47" dur="3.3s" repeatCount="indefinite"/></circle>
            <circle cx="620" cy="22" r="0.6" opacity=".53"><animate attributeName="opacity" values=".45;.53;.45" dur="4.4s" repeatCount="indefinite"/></circle>
            <circle cx="1280" cy="32" r="0.6" opacity=".48"><animate attributeName="opacity" values=".40;.48;.40" dur="2.4s" repeatCount="indefinite"/></circle>
            <circle cx="430" cy="115" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="3.9s" repeatCount="indefinite"/></circle>
            <circle cx="68" cy="95" r="0.5" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="3.5s" repeatCount="indefinite"/></circle>
            <circle cx="310" cy="55" r="0.7" opacity=".56"><animate attributeName="opacity" values=".47;.56;.47" dur="2.8s" repeatCount="indefinite"/></circle>
            <circle cx="750" cy="35" r="0.6" opacity=".50"><animate attributeName="opacity" values=".42;.50;.42" dur="4.1s" repeatCount="indefinite"/></circle>
            <circle cx="850" cy="65" r="0.7" opacity=".60"><animate attributeName="opacity" values=".51;.60;.51" dur="3.0s" repeatCount="indefinite"/></circle>
            <circle cx="980" cy="42" r="0.5" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="3.6s" repeatCount="indefinite"/></circle>
            <circle cx="1150" cy="88" r="0.6" opacity=".54"><animate attributeName="opacity" values=".46;.54;.46" dur="2.7s" repeatCount="indefinite"/></circle>
            <circle cx="1420" cy="72" r="0.5" opacity=".44"><animate attributeName="opacity" values=".37;.44;.37" dur="4.3s" repeatCount="indefinite"/></circle>
            <circle cx="1380" cy="110" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="45" cy="125" r="0.4" opacity=".32"><animate attributeName="opacity" values=".26;.32;.26" dur="4.0s" repeatCount="indefinite"/></circle>
            <circle cx="190" cy="105" r="0.4" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="720" cy="18" r="0.6" opacity=".50"><animate attributeName="opacity" values=".42;.50;.42" dur="2.9s" repeatCount="indefinite"/></circle>
            <circle cx="820" cy="28" r="0.5" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="3.4s" repeatCount="indefinite"/></circle>
            <circle cx="1080" cy="68" r="0.6" opacity=".50"><animate attributeName="opacity" values=".42;.50;.42" dur="3.1s" repeatCount="indefinite"/></circle>
            <circle cx="1250" cy="48" r="0.5" opacity=".44"><animate attributeName="opacity" values=".37;.44;.37" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="1320" cy="95" r="0.4" opacity=".34"><animate attributeName="opacity" values=".28;.34;.28" dur="2.6s" repeatCount="indefinite"/></circle>
            <circle cx="280" cy="82" r="0.4" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="3.7s" repeatCount="indefinite"/></circle>
            <circle cx="460" cy="48" r="0.6" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="3.3s" repeatCount="indefinite"/></circle>
            <circle cx="580" cy="72" r="0.5" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="4.5s" repeatCount="indefinite"/></circle>
            <circle cx="690" cy="52" r="0.6" opacity=".52"><animate attributeName="opacity" values=".44;.52;.44" dur="2.5s" repeatCount="indefinite"/></circle>
            <circle cx="135" cy="52" r="0.5" opacity=".44"><animate attributeName="opacity" values=".37;.44;.37" dur="3.9s" repeatCount="indefinite"/></circle>
            <circle cx="360" cy="35" r="0.5" opacity=".48"><animate attributeName="opacity" values=".40;.48;.40" dur="2.8s" repeatCount="indefinite"/></circle>
            <circle cx="520" cy="60" r="0.5" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="840" cy="20" r="0.6" opacity=".54"><animate attributeName="opacity" values=".46;.54;.46" dur="3.5s" repeatCount="indefinite"/></circle>
            <circle cx="1000" cy="58" r="0.5" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="4.8s" repeatCount="indefinite"/></circle>
            <circle cx="1100" cy="32" r="0.5" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="3.1s" repeatCount="indefinite"/></circle>
            <circle cx="400" cy="76" r="0.4" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="3.4s" repeatCount="indefinite"/></circle>
            <circle cx="540" cy="42" r="0.5" opacity=".48"><animate attributeName="opacity" values=".40;.48;.40" dur="2.7s" repeatCount="indefinite"/></circle>
            <circle cx="900" cy="48" r="0.5" opacity=".44"><animate attributeName="opacity" values=".37;.44;.37" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="22" cy="48" r="0.5" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="3.3s" repeatCount="indefinite"/></circle>
            <circle cx="160" cy="62" r="0.4" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="2.9s" repeatCount="indefinite"/></circle>
            <circle cx="470" cy="28" r="0.5" opacity=".50"><animate attributeName="opacity" values=".42;.50;.42" dur="4.4s" repeatCount="indefinite"/></circle>
            <circle cx="600" cy="48" r="0.4" opacity=".44"><animate attributeName="opacity" values=".37;.44;.37" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="1060" cy="28" r="0.5" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="4.0s" repeatCount="indefinite"/></circle>
            <circle cx="1180" cy="48" r="0.5" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="2.6s" repeatCount="indefinite"/></circle>
            <circle cx="1330" cy="72" r="0.4" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="4.9s" repeatCount="indefinite"/></circle>
            <circle cx="730" cy="80" r="0.4" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="3.6s" repeatCount="indefinite"/></circle>
            <circle cx="1440" cy="28" r="0.5" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="4.6s" repeatCount="indefinite"/></circle>
          </g>

          {/* Additional stars — post-sunset sky */}
          <g fill="#d8c8f0">
            <circle cx="55" cy="38" r="0.8" opacity=".62"><animate attributeName="opacity" values=".52;.62;.52" dur="3.1s" repeatCount="indefinite"/></circle>
            <circle cx="175" cy="22" r="0.9" opacity=".68"><animate attributeName="opacity" values=".58;.68;.58" dur="2.6s" repeatCount="indefinite"/></circle>
            <circle cx="305" cy="55" r="0.7" opacity=".56"><animate attributeName="opacity" values=".47;.56;.47" dur="4.3s" repeatCount="indefinite"/></circle>
            <circle cx="440" cy="30" r="0.8" opacity=".64"><animate attributeName="opacity" values=".54;.64;.54" dur="3.5s" repeatCount="indefinite"/></circle>
            <circle cx="580" cy="48" r="0.7" opacity=".58"><animate attributeName="opacity" values=".49;.58;.49" dur="2.9s" repeatCount="indefinite"/></circle>
            <circle cx="710" cy="15" r="0.9" opacity=".66"><animate attributeName="opacity" values=".56;.66;.56" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="860" cy="42" r="0.6" opacity=".52"><animate attributeName="opacity" values=".44;.52;.44" dur="4.0s" repeatCount="indefinite"/></circle>
            <circle cx="990" cy="25" r="0.8" opacity=".62"><animate attributeName="opacity" values=".52;.62;.52" dur="3.3s" repeatCount="indefinite"/></circle>
            <circle cx="1130" cy="52" r="0.7" opacity=".56"><animate attributeName="opacity" values=".47;.56;.47" dur="2.7s" repeatCount="indefinite"/></circle>
            <circle cx="1270" cy="35" r="0.8" opacity=".62"><animate attributeName="opacity" values=".52;.62;.52" dur="3.6s" repeatCount="indefinite"/></circle>
            <circle cx="1390" cy="58" r="0.7" opacity=".54"><animate attributeName="opacity" values=".46;.54;.46" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="90" cy="110" r="0.5" opacity=".44"><animate attributeName="opacity" values=".37;.44;.37" dur="3.9s" repeatCount="indefinite"/></circle>
            <circle cx="250" cy="95" r="0.5" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="4.5s" repeatCount="indefinite"/></circle>
            <circle cx="410" cy="78" r="0.6" opacity=".44"><animate attributeName="opacity" values=".37;.44;.37" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="560" cy="88" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="4.8s" repeatCount="indefinite"/></circle>
            <circle cx="700" cy="72" r="0.5" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="3.4s" repeatCount="indefinite"/></circle>
            <circle cx="840" cy="82" r="0.5" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="4.1s" repeatCount="indefinite"/></circle>
            <circle cx="960" cy="95" r="0.4" opacity=".34"><animate attributeName="opacity" values=".28;.34;.28" dur="3.7s" repeatCount="indefinite"/></circle>
            <circle cx="1100" cy="78" r="0.5" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="2.8s" repeatCount="indefinite"/></circle>
            <circle cx="1240" cy="90" r="0.5" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="4.4s" repeatCount="indefinite"/></circle>
            <circle cx="1360" cy="75" r="0.6" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="3.0s" repeatCount="indefinite"/></circle>
            <circle cx="150" cy="145" r="0.4" opacity=".30"><animate attributeName="opacity" values=".25;.30;.25" dur="4.6s" repeatCount="indefinite"/></circle>
            <circle cx="480" cy="135" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="780" cy="120" r="0.4" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="4.9s" repeatCount="indefinite"/></circle>
            <circle cx="1060" cy="130" r="0.4" opacity=".30"><animate attributeName="opacity" values=".25;.30;.25" dur="3.5s" repeatCount="indefinite"/></circle>
            <circle cx="1320" cy="115" r="0.4" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="4.7s" repeatCount="indefinite"/></circle>
            <circle cx="32" cy="72" r="0.5" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="2.9s" repeatCount="indefinite"/></circle>
            <circle cx="340" cy="18" r="0.6" opacity=".56"><animate attributeName="opacity" values=".47;.56;.47" dur="3.6s" repeatCount="indefinite"/></circle>
            <circle cx="640" cy="30" r="0.5" opacity=".50"><animate attributeName="opacity" values=".42;.50;.42" dur="4.3s" repeatCount="indefinite"/></circle>
            <circle cx="920" cy="18" r="0.6" opacity=".54"><animate attributeName="opacity" values=".46;.54;.46" dur="3.0s" repeatCount="indefinite"/></circle>
            <circle cx="1160" cy="38" r="0.5" opacity=".48"><animate attributeName="opacity" values=".40;.48;.40" dur="4.5s" repeatCount="indefinite"/></circle>
            <circle cx="1460" cy="42" r="0.5" opacity=".44"><animate attributeName="opacity" values=".37;.44;.37" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="175" cy="72" r="0.4" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="4.0s" repeatCount="indefinite"/></circle>
            <circle cx="500" cy="98" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="800" cy="105" r="0.4" opacity=".34"><animate attributeName="opacity" values=".28;.34;.28" dur="2.7s" repeatCount="indefinite"/></circle>
            <circle cx="1200" cy="110" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="4.1s" repeatCount="indefinite"/></circle>
          </g>

          {/* Dense dark-sky stars — visible field stars */}
          <g fill="#f0eaff">
            <circle cx="35" cy="185" r="0.6" opacity=".52"><animate attributeName="opacity" values=".44;.52;.44" dur="3.1s" repeatCount="indefinite"/></circle>
            <circle cx="88" cy="212" r="0.5" opacity=".44"><animate attributeName="opacity" values=".37;.44;.37" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="142" cy="175" r="0.7" opacity=".58"><animate attributeName="opacity" values=".49;.58;.49" dur="2.8s" repeatCount="indefinite"/></circle>
            <circle cx="198" cy="230" r="0.5" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="3.9s" repeatCount="indefinite"/></circle>
            <circle cx="255" cy="165" r="0.6" opacity=".54"><animate attributeName="opacity" values=".46;.54;.46" dur="4.5s" repeatCount="indefinite"/></circle>
            <circle cx="318" cy="200" r="0.4" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="3.3s" repeatCount="indefinite"/></circle>
            <circle cx="370" cy="240" r="0.6" opacity=".50"><animate attributeName="opacity" values=".42;.50;.42" dur="2.6s" repeatCount="indefinite"/></circle>
            <circle cx="425" cy="170" r="0.7" opacity=".60"><animate attributeName="opacity" values=".51;.60;.51" dur="3.7s" repeatCount="indefinite"/></circle>
            <circle cx="478" cy="215" r="0.5" opacity=".48"><animate attributeName="opacity" values=".40;.48;.40" dur="4.8s" repeatCount="indefinite"/></circle>
            <circle cx="535" cy="195" r="0.6" opacity=".56"><animate attributeName="opacity" values=".47;.56;.47" dur="3.0s" repeatCount="indefinite"/></circle>
            <circle cx="590" cy="245" r="0.4" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="4.1s" repeatCount="indefinite"/></circle>
            <circle cx="645" cy="180" r="0.6" opacity=".52"><animate attributeName="opacity" values=".44;.52;.44" dur="2.9s" repeatCount="indefinite"/></circle>
            <circle cx="702" cy="210" r="0.7" opacity=".58"><animate attributeName="opacity" values=".49;.58;.49" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="758" cy="190" r="0.5" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="4.4s" repeatCount="indefinite"/></circle>
            <circle cx="812" cy="225" r="0.6" opacity=".54"><animate attributeName="opacity" values=".46;.54;.46" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="868" cy="175" r="0.4" opacity=".44"><animate attributeName="opacity" values=".37;.44;.37" dur="4.7s" repeatCount="indefinite"/></circle>
            <circle cx="922" cy="240" r="0.6" opacity=".50"><animate attributeName="opacity" values=".42;.50;.42" dur="2.7s" repeatCount="indefinite"/></circle>
            <circle cx="975" cy="188" r="0.7" opacity=".56"><animate attributeName="opacity" values=".47;.56;.47" dur="3.5s" repeatCount="indefinite"/></circle>
            <circle cx="1032" cy="218" r="0.5" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="4.0s" repeatCount="indefinite"/></circle>
            <circle cx="1088" cy="175" r="0.6" opacity=".58"><animate attributeName="opacity" values=".49;.58;.49" dur="3.1s" repeatCount="indefinite"/></circle>
            <circle cx="1145" cy="235" r="0.4" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="4.6s" repeatCount="indefinite"/></circle>
            <circle cx="1198" cy="192" r="0.6" opacity=".52"><animate attributeName="opacity" values=".44;.52;.44" dur="2.8s" repeatCount="indefinite"/></circle>
            <circle cx="1252" cy="220" r="0.7" opacity=".60"><animate attributeName="opacity" values=".51;.60;.51" dur="3.6s" repeatCount="indefinite"/></circle>
            <circle cx="1308" cy="180" r="0.5" opacity=".48"><animate attributeName="opacity" values=".40;.48;.40" dur="4.3s" repeatCount="indefinite"/></circle>
            <circle cx="1362" cy="245" r="0.6" opacity=".54"><animate attributeName="opacity" values=".46;.54;.46" dur="3.0s" repeatCount="indefinite"/></circle>
            <circle cx="1418" cy="195" r="0.4" opacity=".44"><animate attributeName="opacity" values=".37;.44;.37" dur="4.9s" repeatCount="indefinite"/></circle>
            <circle cx="62" cy="270" r="0.5" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="3.4s" repeatCount="indefinite"/></circle>
            <circle cx="120" cy="295" r="0.5" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="185" cy="310" r="0.6" opacity=".50"><animate attributeName="opacity" values=".42;.50;.42" dur="2.9s" repeatCount="indefinite"/></circle>
            <circle cx="248" cy="285" r="0.4" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="4.6s" repeatCount="indefinite"/></circle>
            <circle cx="310" cy="320" r="0.5" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="375" cy="275" r="0.6" opacity=".54"><animate attributeName="opacity" values=".46;.54;.46" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="440" cy="305" r="0.4" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="4.5s" repeatCount="indefinite"/></circle>
            <circle cx="502" cy="268" r="0.6" opacity=".50"><animate attributeName="opacity" values=".42;.50;.42" dur="2.7s" repeatCount="indefinite"/></circle>
            <circle cx="565" cy="318" r="0.4" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="4.0s" repeatCount="indefinite"/></circle>
            <circle cx="628" cy="280" r="0.5" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="3.5s" repeatCount="indefinite"/></circle>
            <circle cx="690" cy="312" r="0.6" opacity=".54"><animate attributeName="opacity" values=".46;.54;.46" dur="3.0s" repeatCount="indefinite"/></circle>
            <circle cx="752" cy="272" r="0.4" opacity=".44"><animate attributeName="opacity" values=".37;.44;.37" dur="4.8s" repeatCount="indefinite"/></circle>
            <circle cx="815" cy="300" r="0.6" opacity=".52"><animate attributeName="opacity" values=".44;.52;.44" dur="2.8s" repeatCount="indefinite"/></circle>
            <circle cx="878" cy="285" r="0.4" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="4.3s" repeatCount="indefinite"/></circle>
            <circle cx="940" cy="315" r="0.5" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="3.6s" repeatCount="indefinite"/></circle>
            <circle cx="1002" cy="270" r="0.6" opacity=".54"><animate attributeName="opacity" values=".46;.54;.46" dur="2.9s" repeatCount="indefinite"/></circle>
            <circle cx="1065" cy="308" r="0.4" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="4.1s" repeatCount="indefinite"/></circle>
            <circle cx="1128" cy="278" r="0.6" opacity=".50"><animate attributeName="opacity" values=".42;.50;.42" dur="3.4s" repeatCount="indefinite"/></circle>
            <circle cx="1190" cy="318" r="0.4" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="4.7s" repeatCount="indefinite"/></circle>
            <circle cx="1252" cy="288" r="0.5" opacity=".46"><animate attributeName="opacity" values=".39;.46;.39" dur="3.1s" repeatCount="indefinite"/></circle>
            <circle cx="1315" cy="305" r="0.6" opacity=".52"><animate attributeName="opacity" values=".44;.52;.44" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="1378" cy="275" r="0.4" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="4.4s" repeatCount="indefinite"/></circle>
            <circle cx="1428" cy="320" r="0.6" opacity=".48"><animate attributeName="opacity" values=".40;.48;.40" dur="2.6s" repeatCount="indefinite"/></circle>
            <circle cx="22" cy="350" r="0.5" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="4.8s" repeatCount="indefinite"/></circle>
            <circle cx="95" cy="368" r="0.4" opacity=".34"><animate attributeName="opacity" values=".29;.34;.29" dur="3.9s" repeatCount="indefinite"/></circle>
            <circle cx="165" cy="355" r="0.5" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="238" cy="372" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="4.5s" repeatCount="indefinite"/></circle>
            <circle cx="312" cy="358" r="0.4" opacity=".34"><animate attributeName="opacity" values=".29;.34;.29" dur="3.7s" repeatCount="indefinite"/></circle>
            <circle cx="388" cy="375" r="0.5" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="4.0s" repeatCount="indefinite"/></circle>
            <circle cx="462" cy="352" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="3.3s" repeatCount="indefinite"/></circle>
            <circle cx="538" cy="370" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="4.6s" repeatCount="indefinite"/></circle>
            <circle cx="615" cy="355" r="0.5" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="2.8s" repeatCount="indefinite"/></circle>
            <circle cx="690" cy="372" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="768" cy="358" r="0.4" opacity=".34"><animate attributeName="opacity" values=".29;.34;.29" dur="3.6s" repeatCount="indefinite"/></circle>
            <circle cx="845" cy="378" r="0.5" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="4.9s" repeatCount="indefinite"/></circle>
            <circle cx="922" cy="355" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="3.1s" repeatCount="indefinite"/></circle>
            <circle cx="998" cy="372" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="4.4s" repeatCount="indefinite"/></circle>
            <circle cx="1075" cy="358" r="0.5" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="3.0s" repeatCount="indefinite"/></circle>
            <circle cx="1152" cy="375" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="4.7s" repeatCount="indefinite"/></circle>
            <circle cx="1228" cy="355" r="0.4" opacity=".34"><animate attributeName="opacity" values=".29;.34;.29" dur="3.5s" repeatCount="indefinite"/></circle>
            <circle cx="1305" cy="370" r="0.5" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="2.7s" repeatCount="indefinite"/></circle>
            <circle cx="1382" cy="358" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="4.3s" repeatCount="indefinite"/></circle>
            <circle cx="1460" cy="335" r="0.4" opacity=".34"><animate attributeName="opacity" values=".29;.34;.29" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="145" cy="255" r="0.4" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="4.1s" repeatCount="indefinite"/></circle>
            <circle cx="285" cy="340" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="3.4s" repeatCount="indefinite"/></circle>
            <circle cx="550" cy="290" r="0.4" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="4.8s" repeatCount="indefinite"/></circle>
            <circle cx="720" cy="340" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="860" cy="258" r="0.4" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="4.6s" repeatCount="indefinite"/></circle>
            <circle cx="1080" cy="340" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="3.7s" repeatCount="indefinite"/></circle>
            <circle cx="1440" cy="268" r="0.4" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="2.9s" repeatCount="indefinite"/></circle>
          </g>

          {/* Sparse ambient field — depth behind the constellations */}
          <g fill="#c8d4f0">
            <circle cx="72" cy="42" r="0.5" opacity=".45"><animate attributeName="opacity" values=".38;.45;.38" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="148" cy="28" r="0.6" opacity=".50"><animate attributeName="opacity" values=".42;.50;.42" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="258" cy="48" r="0.5" opacity=".42"><animate attributeName="opacity" values=".36;.42;.36" dur="2.9s" repeatCount="indefinite"/></circle>
            <circle cx="348" cy="72" r="0.6" opacity=".45"><animate attributeName="opacity" values=".38;.45;.38" dur="4.6s" repeatCount="indefinite"/></circle>
            <circle cx="468" cy="38" r="0.5" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="3.1s" repeatCount="indefinite"/></circle>
            <circle cx="562" cy="82" r="0.5" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="4.8s" repeatCount="indefinite"/></circle>
            <circle cx="625" cy="48" r="0.5" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="3.4s" repeatCount="indefinite"/></circle>
            <circle cx="698" cy="68" r="0.6" opacity=".40"><animate attributeName="opacity" values=".34;.40;.34" dur="2.7s" repeatCount="indefinite"/></circle>
            <circle cx="848" cy="72" r="0.5" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="3.9s" repeatCount="indefinite"/></circle>
            <circle cx="918" cy="52" r="0.5" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="4.1s" repeatCount="indefinite"/></circle>
            <circle cx="1038" cy="78" r="0.5" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="1168" cy="75" r="0.5" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="3.6s" repeatCount="indefinite"/></circle>
            <circle cx="1268" cy="68" r="0.5" opacity=".38"><animate attributeName="opacity" values=".32;.38;.32" dur="2.8s" repeatCount="indefinite"/></circle>
            <circle cx="1438" cy="40" r="0.5" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="4.3s" repeatCount="indefinite"/></circle>
            <circle cx="52" cy="145" r="0.5" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="4.0s" repeatCount="indefinite"/></circle>
            <circle cx="340" cy="155" r="0.5" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="4.9s" repeatCount="indefinite"/></circle>
            <circle cx="480" cy="178" r="0.5" opacity=".30"><animate attributeName="opacity" values=".25;.30;.25" dur="3.7s" repeatCount="indefinite"/></circle>
            <circle cx="602" cy="148" r="0.5" opacity=".34"><animate attributeName="opacity" values=".29;.34;.29" dur="4.4s" repeatCount="indefinite"/></circle>
            <circle cx="848" cy="168" r="0.5" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="4.6s" repeatCount="indefinite"/></circle>
            <circle cx="1172" cy="158" r="0.5" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="1338" cy="145" r="0.5" opacity=".34"><animate attributeName="opacity" values=".29;.34;.29" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="28" cy="218" r="0.5" opacity=".28"><animate attributeName="opacity" values=".23;.28;.23" dur="4.1s" repeatCount="indefinite"/></circle>
            <circle cx="508" cy="245" r="0.5" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="4.8s" repeatCount="indefinite"/></circle>
            <circle cx="1268" cy="248" r="0.5" opacity=".28"><animate attributeName="opacity" values=".23;.28;.23" dur="4.5s" repeatCount="indefinite"/></circle>
            <circle cx="1428" cy="225" r="0.5" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="3.9s" repeatCount="indefinite"/></circle>
            <circle cx="370" cy="295" r="0.5" opacity=".24"><animate attributeName="opacity" values=".20;.24;.20" dur="3.5s" repeatCount="indefinite"/></circle>
            <circle cx="618" cy="310" r="0.5" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="4.7s" repeatCount="indefinite"/></circle>
            <circle cx="1355" cy="305" r="0.5" opacity=".24"><animate attributeName="opacity" values=".20;.24;.20" dur="3.1s" repeatCount="indefinite"/></circle>
          </g>

          {/* Dense micro-star field — fills gaps for realistic sky density */}
          <g fill="#ddd5f0">
            <circle cx="38" cy="18" r="0.4" opacity=".35"><animate attributeName="opacity" values=".30;.35;.30" dur="4.1s" repeatCount="indefinite"/></circle>
            <circle cx="96" cy="38" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="3.7s" repeatCount="indefinite"/></circle>
            <circle cx="158" cy="14" r="0.4" opacity=".34"><animate attributeName="opacity" values=".29;.34;.29" dur="4.8s" repeatCount="indefinite"/></circle>
            <circle cx="218" cy="52" r="0.3" opacity=".30"><animate attributeName="opacity" values=".25;.30;.25" dur="2.9s" repeatCount="indefinite"/></circle>
            <circle cx="275" cy="24" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="3.5s" repeatCount="indefinite"/></circle>
            <circle cx="332" cy="66" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="4.4s" repeatCount="indefinite"/></circle>
            <circle cx="390" cy="18" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="448" cy="58" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="4.9s" repeatCount="indefinite"/></circle>
            <circle cx="505" cy="22" r="0.4" opacity=".34"><animate attributeName="opacity" values=".29;.34;.29" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="562" cy="44" r="0.3" opacity=".30"><animate attributeName="opacity" values=".25;.30;.25" dur="2.6s" repeatCount="indefinite"/></circle>
            <circle cx="618" cy="14" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="675" cy="60" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="3.1s" repeatCount="indefinite"/></circle>
            <circle cx="732" cy="26" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="4.6s" repeatCount="indefinite"/></circle>
            <circle cx="788" cy="54" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="3.4s" repeatCount="indefinite"/></circle>
            <circle cx="845" cy="18" r="0.4" opacity=".34"><animate attributeName="opacity" values=".29;.34;.29" dur="4.0s" repeatCount="indefinite"/></circle>
            <circle cx="902" cy="62" r="0.3" opacity=".30"><animate attributeName="opacity" values=".25;.30;.25" dur="2.8s" repeatCount="indefinite"/></circle>
            <circle cx="958" cy="22" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="4.7s" repeatCount="indefinite"/></circle>
            <circle cx="1015" cy="44" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="3.3s" repeatCount="indefinite"/></circle>
            <circle cx="1072" cy="16" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="4.5s" repeatCount="indefinite"/></circle>
            <circle cx="1128" cy="58" r="0.3" opacity=".30"><animate attributeName="opacity" values=".25;.30;.25" dur="3.0s" repeatCount="indefinite"/></circle>
            <circle cx="1185" cy="22" r="0.4" opacity=".34"><animate attributeName="opacity" values=".29;.34;.29" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="1242" cy="52" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="1298" cy="18" r="0.4" opacity=".36"><animate attributeName="opacity" values=".30;.36;.30" dur="2.7s" repeatCount="indefinite"/></circle>
            <circle cx="1355" cy="60" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="4.9s" repeatCount="indefinite"/></circle>
            <circle cx="1412" cy="26" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="3.6s" repeatCount="indefinite"/></circle>
            <circle cx="58" cy="88" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="4.3s" repeatCount="indefinite"/></circle>
            <circle cx="118" cy="72" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="3.1s" repeatCount="indefinite"/></circle>
            <circle cx="178" cy="92" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="4.7s" repeatCount="indefinite"/></circle>
            <circle cx="238" cy="76" r="0.4" opacity=".30"><animate attributeName="opacity" values=".25;.30;.25" dur="2.9s" repeatCount="indefinite"/></circle>
            <circle cx="298" cy="90" r="0.3" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="4.4s" repeatCount="indefinite"/></circle>
            <circle cx="358" cy="78" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="418" cy="94" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="3.3s" repeatCount="indefinite"/></circle>
            <circle cx="478" cy="80" r="0.4" opacity=".30"><animate attributeName="opacity" values=".25;.30;.25" dur="4.6s" repeatCount="indefinite"/></circle>
            <circle cx="538" cy="92" r="0.3" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="2.8s" repeatCount="indefinite"/></circle>
            <circle cx="598" cy="76" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="4.1s" repeatCount="indefinite"/></circle>
            <circle cx="658" cy="94" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="3.5s" repeatCount="indefinite"/></circle>
            <circle cx="718" cy="80" r="0.4" opacity=".30"><animate attributeName="opacity" values=".25;.30;.25" dur="4.8s" repeatCount="indefinite"/></circle>
            <circle cx="778" cy="94" r="0.3" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="838" cy="76" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="4.0s" repeatCount="indefinite"/></circle>
            <circle cx="898" cy="92" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="2.7s" repeatCount="indefinite"/></circle>
            <circle cx="958" cy="78" r="0.4" opacity=".30"><animate attributeName="opacity" values=".25;.30;.25" dur="4.5s" repeatCount="indefinite"/></circle>
            <circle cx="1018" cy="92" r="0.3" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="3.9s" repeatCount="indefinite"/></circle>
            <circle cx="1078" cy="78" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="3.4s" repeatCount="indefinite"/></circle>
            <circle cx="1138" cy="92" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="4.7s" repeatCount="indefinite"/></circle>
            <circle cx="1198" cy="76" r="0.4" opacity=".30"><animate attributeName="opacity" values=".25;.30;.25" dur="3.0s" repeatCount="indefinite"/></circle>
            <circle cx="1258" cy="92" r="0.3" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="4.3s" repeatCount="indefinite"/></circle>
            <circle cx="1318" cy="78" r="0.4" opacity=".32"><animate attributeName="opacity" values=".27;.32;.27" dur="2.6s" repeatCount="indefinite"/></circle>
            <circle cx="1378" cy="90" r="0.3" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="4.8s" repeatCount="indefinite"/></circle>
            <circle cx="1438" cy="78" r="0.4" opacity=".30"><animate attributeName="opacity" values=".25;.30;.25" dur="3.7s" repeatCount="indefinite"/></circle>
            <circle cx="28" cy="118" r="0.3" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="4.1s" repeatCount="indefinite"/></circle>
            <circle cx="88" cy="132" r="0.4" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="3.4s" repeatCount="indefinite"/></circle>
            <circle cx="148" cy="116" r="0.3" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="4.9s" repeatCount="indefinite"/></circle>
            <circle cx="208" cy="130" r="0.4" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="2.8s" repeatCount="indefinite"/></circle>
            <circle cx="268" cy="118" r="0.3" opacity=".24"><animate attributeName="opacity" values=".20;.24;.20" dur="4.5s" repeatCount="indefinite"/></circle>
            <circle cx="328" cy="132" r="0.4" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="3.6s" repeatCount="indefinite"/></circle>
            <circle cx="388" cy="116" r="0.3" opacity=".24"><animate attributeName="opacity" values=".20;.24;.20" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="448" cy="130" r="0.4" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="3.1s" repeatCount="indefinite"/></circle>
            <circle cx="508" cy="118" r="0.3" opacity=".24"><animate attributeName="opacity" values=".20;.24;.20" dur="4.7s" repeatCount="indefinite"/></circle>
            <circle cx="568" cy="130" r="0.4" opacity=".28"><animate attributeName="opacity" values=".24;.28;.24" dur="3.3s" repeatCount="indefinite"/></circle>
            <circle cx="628" cy="118" r="0.3" opacity=".24"><animate attributeName="opacity" values=".20;.24;.20" dur="4.0s" repeatCount="indefinite"/></circle>
            <circle cx="688" cy="132" r="0.4" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="2.9s" repeatCount="indefinite"/></circle>
            <circle cx="748" cy="116" r="0.3" opacity=".24"><animate attributeName="opacity" values=".20;.24;.20" dur="4.6s" repeatCount="indefinite"/></circle>
            <circle cx="808" cy="130" r="0.4" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="3.8s" repeatCount="indefinite"/></circle>
            <circle cx="868" cy="116" r="0.3" opacity=".24"><animate attributeName="opacity" values=".20;.24;.20" dur="4.4s" repeatCount="indefinite"/></circle>
            <circle cx="928" cy="132" r="0.4" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="988" cy="118" r="0.3" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="4.9s" repeatCount="indefinite"/></circle>
            <circle cx="1048" cy="132" r="0.4" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="2.7s" repeatCount="indefinite"/></circle>
            <circle cx="1108" cy="116" r="0.3" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="4.3s" repeatCount="indefinite"/></circle>
            <circle cx="1168" cy="132" r="0.4" opacity=".26"><animate attributeName="opacity" values=".22;.26;.22" dur="3.7s" repeatCount="indefinite"/></circle>
            <circle cx="1228" cy="116" r="0.3" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="4.1s" repeatCount="indefinite"/></circle>
            <circle cx="1288" cy="132" r="0.4" opacity=".24"><animate attributeName="opacity" values=".20;.24;.20" dur="3.5s" repeatCount="indefinite"/></circle>
            <circle cx="1348" cy="116" r="0.3" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="4.8s" repeatCount="indefinite"/></circle>
            <circle cx="1408" cy="130" r="0.4" opacity=".24"><animate attributeName="opacity" values=".20;.24;.20" dur="3.0s" repeatCount="indefinite"/></circle>
            <circle cx="68" cy="160" r="0.3" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="4.6s" repeatCount="indefinite"/></circle>
            <circle cx="128" cy="175" r="0.4" opacity=".24"><animate attributeName="opacity" values=".20;.24;.20" dur="3.4s" repeatCount="indefinite"/></circle>
            <circle cx="188" cy="158" r="0.3" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="248" cy="172" r="0.4" opacity=".24"><animate attributeName="opacity" values=".20;.24;.20" dur="2.8s" repeatCount="indefinite"/></circle>
            <circle cx="308" cy="160" r="0.3" opacity=".20"><animate attributeName="opacity" values=".17;.20;.17" dur="4.7s" repeatCount="indefinite"/></circle>
            <circle cx="368" cy="175" r="0.4" opacity=".24"><animate attributeName="opacity" values=".20;.24;.20" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="428" cy="160" r="0.3" opacity=".20"><animate attributeName="opacity" values=".17;.20;.17" dur="4.5s" repeatCount="indefinite"/></circle>
            <circle cx="488" cy="174" r="0.4" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="3.9s" repeatCount="indefinite"/></circle>
            <circle cx="548" cy="158" r="0.3" opacity=".20"><animate attributeName="opacity" values=".17;.20;.17" dur="2.6s" repeatCount="indefinite"/></circle>
            <circle cx="608" cy="172" r="0.4" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="4.3s" repeatCount="indefinite"/></circle>
            <circle cx="668" cy="160" r="0.3" opacity=".20"><animate attributeName="opacity" values=".17;.20;.17" dur="3.7s" repeatCount="indefinite"/></circle>
            <circle cx="728" cy="175" r="0.4" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="4.8s" repeatCount="indefinite"/></circle>
            <circle cx="788" cy="160" r="0.3" opacity=".20"><animate attributeName="opacity" values=".17;.20;.17" dur="3.0s" repeatCount="indefinite"/></circle>
            <circle cx="848" cy="172" r="0.4" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="4.5s" repeatCount="indefinite"/></circle>
            <circle cx="908" cy="160" r="0.3" opacity=".20"><animate attributeName="opacity" values=".17;.20;.17" dur="3.5s" repeatCount="indefinite"/></circle>
            <circle cx="968" cy="175" r="0.4" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="2.9s" repeatCount="indefinite"/></circle>
            <circle cx="1028" cy="160" r="0.3" opacity=".20"><animate attributeName="opacity" values=".17;.20;.17" dur="4.1s" repeatCount="indefinite"/></circle>
            <circle cx="1088" cy="175" r="0.4" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="3.6s" repeatCount="indefinite"/></circle>
            <circle cx="1148" cy="160" r="0.3" opacity=".18"><animate attributeName="opacity" values=".15;.18;.15" dur="4.9s" repeatCount="indefinite"/></circle>
            <circle cx="1208" cy="175" r="0.4" opacity=".22"><animate attributeName="opacity" values=".18;.22;.18" dur="3.2s" repeatCount="indefinite"/></circle>
            <circle cx="1268" cy="160" r="0.3" opacity=".18"><animate attributeName="opacity" values=".15;.18;.15" dur="4.4s" repeatCount="indefinite"/></circle>
            <circle cx="1328" cy="175" r="0.4" opacity=".20"><animate attributeName="opacity" values=".17;.20;.17" dur="2.7s" repeatCount="indefinite"/></circle>
            <circle cx="1388" cy="160" r="0.3" opacity=".18"><animate attributeName="opacity" values=".15;.18;.15" dur="4.7s" repeatCount="indefinite"/></circle>
            <circle cx="1448" cy="174" r="0.4" opacity=".20"><animate attributeName="opacity" values=".17;.20;.17" dur="3.3s" repeatCount="indefinite"/></circle>
          </g>

          {/* Constellation stars */}
          <g>
            {/* ── ORION ─────────────────────────────── */}
            {/* Meissa — λ Ori, head */}
            <circle cx="992" cy="88" r="0.9" fill="#e8eeff" opacity="0.65">
              <animate attributeName="opacity" values=".40;.75;.40" dur="3.4s" repeatCount="indefinite"/>
            </circle>
            {/* Betelgeuse — α Ori, warm orange supergiant */}
            <circle cx="1035" cy="162" r="3.5" fill="#ffb060" opacity="0.04">
              <animate attributeName="opacity" values=".02;.07;.02" dur="4.1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="1035" cy="162" r="1.5" fill="#ffb868" opacity="0.90">
              <animate attributeName="opacity" values=".65;.95;.65" dur="4.1s" repeatCount="indefinite"/>
            </circle>
            {/* Bellatrix — γ Ori, left shoulder */}
            <circle cx="898" cy="150" r="1.2" fill="#d8ecff" opacity="0.78">
              <animate attributeName="opacity" values=".52;.88;.52" dur="3.8s" repeatCount="indefinite"/>
            </circle>
            {/* Belt — Mintaka δ */}
            <circle cx="935" cy="210" r="1.1" fill="#d8e8ff" opacity="0.74">
              <animate attributeName="opacity" values=".48;.84;.48" dur="2.9s" repeatCount="indefinite"/>
            </circle>
            {/* Belt — Alnilam ε */}
            <circle cx="975" cy="220" r="1.2" fill="#d8e8ff" opacity="0.80">
              <animate attributeName="opacity" values=".55;.90;.55" dur="3.6s" repeatCount="indefinite"/>
            </circle>
            {/* Belt — Alnitak ζ */}
            <circle cx="1015" cy="230" r="1.1" fill="#d8e8ff" opacity="0.76">
              <animate attributeName="opacity" values=".50;.86;.50" dur="4.0s" repeatCount="indefinite"/>
            </circle>
            {/* Saiph — κ Ori, right foot */}
            <circle cx="1075" cy="292" r="1.1" fill="#d0e0f8" opacity="0.70">
              <animate attributeName="opacity" values=".44;.80;.44" dur="4.5s" repeatCount="indefinite"/>
            </circle>
            {/* Rigel — β Ori, brilliant blue-white */}
            <circle cx="1168" cy="280" r="3.5" fill="#c0d8ff" opacity="0.04">
              <animate attributeName="opacity" values=".02;.07;.02" dur="3.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="1168" cy="280" r="1.5" fill="#c8e0ff" opacity="0.92">
              <animate attributeName="opacity" values=".68;.98;.68" dur="3.2s" repeatCount="indefinite"/>
            </circle>

            {/* ── URSA MAJOR / SAPTARISHI ───────────── */}
            {/* Dubhe — α UMa, slightly warm */}
            <circle cx="148" cy="105" r="1.3" fill="#ffe8c8" opacity="0.80">
              <animate attributeName="opacity" values=".55;.88;.55" dur="3.6s" repeatCount="indefinite"/>
            </circle>
            {/* Merak — β UMa */}
            <circle cx="210" cy="128" r="1.2" fill="#eef0ff" opacity="0.76">
              <animate attributeName="opacity" values=".50;.84;.50" dur="4.2s" repeatCount="indefinite"/>
            </circle>
            {/* Phecda — γ UMa */}
            <circle cx="290" cy="158" r="1.1" fill="#eef0ff" opacity="0.74">
              <animate attributeName="opacity" values=".48;.82;.48" dur="2.7s" repeatCount="indefinite"/>
            </circle>
            {/* Megrez — δ UMa, faintest of the seven */}
            <circle cx="300" cy="118" r="0.9" fill="#eef0ff" opacity="0.62">
              <animate attributeName="opacity" values=".36;.72;.36" dur="3.9s" repeatCount="indefinite"/>
            </circle>
            {/* Alioth — ε UMa, brightest */}
            <circle cx="380" cy="98" r="1.3" fill="#f2f2ff" opacity="0.82">
              <animate attributeName="opacity" values=".58;.90;.58" dur="3.1s" repeatCount="indefinite"/>
            </circle>
            {/* Mizar — ζ UMa */}
            <circle cx="444" cy="80" r="1.2" fill="#f2f2ff" opacity="0.78">
              <animate attributeName="opacity" values=".52;.86;.52" dur="4.4s" repeatCount="indefinite"/>
            </circle>
            {/* Alkaid — η UMa */}
            <circle cx="530" cy="62" r="1.2" fill="#e8ecff" opacity="0.78">
              <animate attributeName="opacity" values=".52;.86;.52" dur="3.7s" repeatCount="indefinite"/>
            </circle>

            {/* ── CASSIOPEIA ────────────────────────── */}
            {/* Caph — β Cas */}
            <circle cx="1192" cy="58" r="1.0" fill="#f0e8ff" opacity="0.72">
              <animate attributeName="opacity" values=".45;.80;.45" dur="4.0s" repeatCount="indefinite"/>
            </circle>
            {/* Schedar — α Cas, slightly orange */}
            <circle cx="1250" cy="30" r="1.3" fill="#ffd8b0" opacity="0.82">
              <animate attributeName="opacity" values=".58;.90;.58" dur="3.4s" repeatCount="indefinite"/>
            </circle>
            {/* Gamma Cas — γ Cas, brightest, variable */}
            <circle cx="1308" cy="58" r="1.4" fill="#f8f2ff" opacity="0.85">
              <animate attributeName="opacity" values=".60;.92;.60" dur="2.8s" repeatCount="indefinite"/>
            </circle>
            {/* Ruchbah — δ Cas */}
            <circle cx="1362" cy="32" r="1.0" fill="#f0e8ff" opacity="0.70">
              <animate attributeName="opacity" values=".44;.78;.44" dur="4.3s" repeatCount="indefinite"/>
            </circle>
            {/* Segin — ε Cas */}
            <circle cx="1416" cy="56" r="1.0" fill="#f0e8ff" opacity="0.66">
              <animate attributeName="opacity" values=".40;.75;.40" dur="3.8s" repeatCount="indefinite"/>
            </circle>

            {/* ── SCORPIUS — head & upper body ─────── */}
            {/* Pi Sco */}
            <circle cx="112" cy="185" r="0.8" fill="#e8e0f8" opacity="0.62">
              <animate attributeName="opacity" values=".36;.72;.36" dur="3.3s" repeatCount="indefinite"/>
            </circle>
            {/* Graffias — β Sco */}
            <circle cx="144" cy="162" r="1.0" fill="#e8e0f8" opacity="0.70">
              <animate attributeName="opacity" values=".44;.80;.44" dur="3.6s" repeatCount="indefinite"/>
            </circle>
            {/* Dschubba — δ Sco */}
            <circle cx="200" cy="158" r="0.9" fill="#e8e0f8" opacity="0.66">
              <animate attributeName="opacity" values=".40;.76;.40" dur="4.1s" repeatCount="indefinite"/>
            </circle>
            {/* Sigma Sco */}
            <circle cx="232" cy="202" r="0.9" fill="#e8e0f8" opacity="0.64">
              <animate attributeName="opacity" values=".38;.74;.38" dur="4.8s" repeatCount="indefinite"/>
            </circle>
            {/* Antares — α Sco, brilliant red-orange supergiant */}
            <circle cx="208" cy="252" r="4" fill="#ff8848" opacity="0.04">
              <animate attributeName="opacity" values=".02;.07;.02" dur="5.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="208" cy="252" r="1.5" fill="#ff9868" opacity="0.88">
              <animate attributeName="opacity" values=".64;.96;.64" dur="5.2s" repeatCount="indefinite"/>
            </circle>
            {/* Tau Sco */}
            <circle cx="258" cy="218" r="0.8" fill="#e8e0f8" opacity="0.60">
              <animate attributeName="opacity" values=".34;.70;.34" dur="3.9s" repeatCount="indefinite"/>
            </circle>

            {/* ── PLEIADES — Seven Sisters cluster ─── */}
            <circle cx="742" cy="122" r="1.0" fill="#d8eaff" opacity="0.78">
              <animate attributeName="opacity" values=".52;.86;.52" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="756" cy="108" r="0.8" fill="#d8eaff" opacity="0.70">
              <animate attributeName="opacity" values=".44;.78;.44" dur="4.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="728" cy="112" r="0.8" fill="#d8eaff" opacity="0.68">
              <animate attributeName="opacity" values=".42;.76;.42" dur="3.0s" repeatCount="indefinite"/>
            </circle>
            <circle cx="732" cy="128" r="0.7" fill="#d8eaff" opacity="0.64">
              <animate attributeName="opacity" values=".38;.72;.38" dur="4.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="750" cy="138" r="0.7" fill="#d8eaff" opacity="0.60">
              <animate attributeName="opacity" values=".34;.68;.34" dur="3.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="738" cy="118" r="0.6" fill="#d8eaff" opacity="0.55">
              <animate attributeName="opacity" values=".28;.62;.28" dur="2.9s" repeatCount="indefinite"/>
            </circle>
            <circle cx="758" cy="125" r="0.6" fill="#d8eaff" opacity="0.55">
              <animate attributeName="opacity" values=".28;.62;.28" dur="4.3s" repeatCount="indefinite"/>
            </circle>

            {/* ── ALDEBARAN — α Tau, eye of the Bull ─ */}
            <circle cx="820" cy="180" r="3" fill="#ffc060" opacity="0.04">
              <animate attributeName="opacity" values=".02;.07;.02" dur="4.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="820" cy="180" r="1.4" fill="#ffc870" opacity="0.82">
              <animate attributeName="opacity" values=".58;.90;.58" dur="4.8s" repeatCount="indefinite"/>
            </circle>

            {/* ── SIRIUS — α CMa, brightest star ────── */}
            <circle cx="1088" cy="355" r="4" fill="#b8d0ff" opacity="0.05">
              <animate attributeName="opacity" values=".03;.08;.03" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="1088" cy="355" r="1.8" fill="#d8eaff" opacity="0.95">
              <animate attributeName="opacity" values=".72;1;.72" dur="3.5s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Planets — Venus and Jupiter just after sunset */}
          <g>
            {/* Venus — bright, low in the western sky */}
            <circle cx="260" cy="180" r="4" fill="#e8d8a8" opacity=".07">
              <animate
                attributeName="opacity"
                values=".04;.12;.04"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="260" cy="180" r="2.2" fill="#e8d8a8" opacity=".92">
              <animate
                attributeName="opacity"
                values=".70;1;.70"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Jupiter — subtler, higher */}
            <circle cx="1100" cy="140" r="3" fill="#d0c0a0" opacity=".05">
              <animate
                attributeName="opacity"
                values=".03;.08;.03"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1100" cy="140" r="1.8" fill="#d0c0a0" opacity=".80">
              <animate
                attributeName="opacity"
                values=".58;.90;.58"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Saturn — faint, upper sky */}
            <circle cx="680" cy="95" r="1.6" fill="#c8b890" opacity=".65">
              <animate
                attributeName="opacity"
                values=".42;.76;.42"
                dur="7s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Bird symbols — side-view crow & swan */}
          <defs>
            {/* Side-view crow: body + beak + tail + animated wing */}
            <g id="crow">
              <path
                fill="#1a1538"
                d="M0,2 C2,0 6,-1 10,0 C13,1 14,3 13,5 C12,6 9,6 7,7 C5,9 3,10 0,9 C-3,8 -5,5 -4,3 C-3,1 -1,2 0,2 Z"
              />
              <path
                fill="#1a1538"
                d="M1,3 C-3,-6 -9,-11 -14,-8 C-10,-4 -5,1 1,3 Z"
              >
                <animate
                  attributeName="d"
                  values="M1,3 C-3,-6 -9,-11 -14,-8 C-10,-4 -5,1 1,3 Z;M1,3 C-3,5 -9,8 -14,5 C-10,3 -5,2 1,3 Z;M1,3 C-3,-6 -9,-11 -14,-8 C-10,-4 -5,1 1,3 Z"
                  dur="0.7s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
            {/* Side-view swan: white with warm sunset tint */}
            <g id="swan">
              <path
                fill="#ffffff"
                d="M0,4 C3,2 8,1 14,2 C18,3 20,5 18,7 C16,8 12,8 9,9 C6,10 3,10 0,9 C-3,8 -5,6 -4,4 C-3,3 -1,3 0,4 Z"
              />
              <path
                fill="#fff5e8"
                d="M14,2 C16,0 18,-4 17,-8 C16,-10 14,-8 13,-5 C12,-2 13,0 14,2 Z"
              />
              <path
                fill="#fff8f0"
                d="M2,4 C-2,-4 -8,-10 -15,-7 C-11,-3 -6,2 2,4 Z"
              >
                <animate
                  attributeName="d"
                  values="M2,4 C-2,-4 -8,-10 -15,-7 C-11,-3 -6,2 2,4 Z;M2,4 C-2,7 -8,10 -15,7 C-11,4 -6,3 2,4 Z;M2,4 C-2,-4 -8,-10 -15,-7 C-11,-3 -6,2 2,4 Z"
                  dur="0.9s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </defs>

          {/* Crows - Flock 1 (upper sky) */}
          <g
            fill="none"
            stroke="#1e1840"
            strokeWidth="1.8"
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
              {/* Bird 1 */}
              <g>
                <path d="M0,0 L-8,-10 L0,0 L8,-10">
                  <animate
                    attributeName="d"
                    values="M0,0 L-8,-10 L0,0 L8,-10;M0,0 L-8,-4 L0,0 L8,-4;M0,0 L-8,-10 L0,0 L8,-10"
                    dur="0.4s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              {/* Bird 2 */}
              <g transform="translate(24, 12)">
                <path d="M0,0 L-7,-9 L0,0 L7,-9">
                  <animate
                    attributeName="d"
                    values="M0,0 L-7,-9 L0,0 L7,-9;M0,0 L-7,-3 L0,0 L7,-3;M0,0 L-7,-9 L0,0 L7,-9"
                    dur="0.4s"
                    repeatCount="indefinite"
                    begin="0.08s"
                  />
                </path>
              </g>
              {/* Bird 3 */}
              <g transform="translate(-18, 16)">
                <path d="M0,0 L-7,-9 L0,0 L7,-9">
                  <animate
                    attributeName="d"
                    values="M0,0 L-7,-9 L0,0 L7,-9;M0,0 L-7,-3 L0,0 L7,-3;M0,0 L-7,-9 L0,0 L7,-9"
                    dur="0.4s"
                    repeatCount="indefinite"
                    begin="0.15s"
                  />
                </path>
              </g>
              {/* Bird 4 */}
              <g transform="translate(42, 26)">
                <path d="M0,0 L-6,-8 L0,0 L6,-8">
                  <animate
                    attributeName="d"
                    values="M0,0 L-6,-8 L0,0 L6,-8;M0,0 L-6,-2 L0,0 L6,-2;M0,0 L-6,-8 L0,0 L6,-8"
                    dur="0.4s"
                    repeatCount="indefinite"
                    begin="0.05s"
                  />
                </path>
              </g>
              {/* Bird 5 */}
              <g transform="translate(12, 30)">
                <path d="M0,0 L-6,-8 L0,0 L6,-8">
                  <animate
                    attributeName="d"
                    values="M0,0 L-6,-8 L0,0 L6,-8;M0,0 L-6,-2 L0,0 L6,-2;M0,0 L-6,-8 L0,0 L6,-8"
                    dur="0.4s"
                    repeatCount="indefinite"
                    begin="0.2s"
                  />
                </path>
              </g>
              {/* Bird 6 */}
              <g transform="translate(-32, 32)">
                <path d="M0,0 L-6,-8 L0,0 L6,-8">
                  <animate
                    attributeName="d"
                    values="M0,0 L-6,-8 L0,0 L6,-8;M0,0 L-6,-2 L0,0 L6,-2;M0,0 L-6,-8 L0,0 L6,-8"
                    dur="0.4s"
                    repeatCount="indefinite"
                    begin="0.12s"
                  />
                </path>
              </g>
              {/* Bird 7 */}
              <g transform="translate(58, 40)">
                <path d="M0,0 L-5,-7 L0,0 L5,-7">
                  <animate
                    attributeName="d"
                    values="M0,0 L-5,-7 L0,0 L5,-7;M0,0 L-5,-2 L0,0 L5,-2;M0,0 L-5,-7 L0,0 L5,-7"
                    dur="0.4s"
                    repeatCount="indefinite"
                    begin="0.18s"
                  />
                </path>
              </g>
            </g>
          </g>

          {/* Flying Birds - Flock 2 (mid-sky) */}
          <g
            fill="none"
            stroke="#1e1840"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".75"
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
              {/* Bird 1 */}
              <g>
                <path d="M0,0 L-6,-8 L0,0 L6,-8">
                  <animate
                    attributeName="d"
                    values="M0,0 L-6,-8 L0,0 L6,-8;M0,0 L-6,-2 L0,0 L6,-2;M0,0 L-6,-8 L0,0 L6,-8"
                    dur="0.45s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              {/* Bird 2 */}
              <g transform="translate(20, 10)">
                <path d="M0,0 L-5,-7 L0,0 L5,-7">
                  <animate
                    attributeName="d"
                    values="M0,0 L-5,-7 L0,0 L5,-7;M0,0 L-5,-2 L0,0 L5,-2;M0,0 L-5,-7 L0,0 L5,-7"
                    dur="0.45s"
                    repeatCount="indefinite"
                    begin="0.1s"
                  />
                </path>
              </g>
              {/* Bird 3 */}
              <g transform="translate(-14, 12)">
                <path d="M0,0 L-5,-7 L0,0 L5,-7">
                  <animate
                    attributeName="d"
                    values="M0,0 L-5,-7 L0,0 L5,-7;M0,0 L-5,-2 L0,0 L5,-2;M0,0 L-5,-7 L0,0 L5,-7"
                    dur="0.45s"
                    repeatCount="indefinite"
                    begin="0.2s"
                  />
                </path>
              </g>
              {/* Bird 4 */}
              <g transform="translate(36, 20)">
                <path d="M0,0 L-5,-6 L0,0 L5,-6">
                  <animate
                    attributeName="d"
                    values="M0,0 L-5,-6 L0,0 L5,-6;M0,0 L-5,-1 L0,0 L5,-1;M0,0 L-5,-6 L0,0 L5,-6"
                    dur="0.45s"
                    repeatCount="indefinite"
                    begin="0.05s"
                  />
                </path>
              </g>
              {/* Bird 5 */}
              <g transform="translate(8, 24)">
                <path d="M0,0 L-5,-6 L0,0 L5,-6">
                  <animate
                    attributeName="d"
                    values="M0,0 L-5,-6 L0,0 L5,-6;M0,0 L-5,-1 L0,0 L5,-1;M0,0 L-5,-6 L0,0 L5,-6"
                    dur="0.45s"
                    repeatCount="indefinite"
                    begin="0.15s"
                  />
                </path>
              </g>
            </g>
          </g>

          {/* Flying Birds - Flock 3 (distant, upper sky) */}
          <g
            fill="none"
            stroke="#1e1840"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".5"
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
              {/* Bird 1 */}
              <g>
                <path d="M0,0 L-4,-6 L0,0 L4,-6">
                  <animate
                    attributeName="d"
                    values="M0,0 L-4,-6 L0,0 L4,-6;M0,0 L-4,-1 L0,0 L4,-1;M0,0 L-4,-6 L0,0 L4,-6"
                    dur="0.5s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              {/* Bird 2 */}
              <g transform="translate(16, 8)">
                <path d="M0,0 L-4,-5 L0,0 L4,-5">
                  <animate
                    attributeName="d"
                    values="M0,0 L-4,-5 L0,0 L4,-5;M0,0 L-4,-1 L0,0 L4,-1;M0,0 L-4,-5 L0,0 L4,-5"
                    dur="0.5s"
                    repeatCount="indefinite"
                    begin="0.12s"
                  />
                </path>
              </g>
              {/* Bird 3 */}
              <g transform="translate(-10, 10)">
                <path d="M0,0 L-4,-5 L0,0 L4,-5">
                  <animate
                    attributeName="d"
                    values="M0,0 L-4,-5 L0,0 L4,-5;M0,0 L-4,-1 L0,0 L4,-1;M0,0 L-4,-5 L0,0 L4,-5"
                    dur="0.5s"
                    repeatCount="indefinite"
                    begin="0.25s"
                  />
                </path>
              </g>
              {/* Bird 4 */}
              <g transform="translate(28, 16)">
                <path d="M0,0 L-3,-5 L0,0 L3,-5">
                  <animate
                    attributeName="d"
                    values="M0,0 L-3,-5 L0,0 L3,-5;M0,0 L-3,-1 L0,0 L3,-1;M0,0 L-3,-5 L0,0 L3,-5"
                    dur="0.5s"
                    repeatCount="indefinite"
                    begin="0.08s"
                  />
                </path>
              </g>
            </g>
          </g>

          {/* White Swans - Flock 4 (lower sky, golden sunset glow) */}
          <g
            fill="none"
            stroke="#c8b898"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".6"
          >
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-100,480"
                to="1560,420"
                dur="26s"
                repeatCount="indefinite"
              />
              {/* Bird 1 */}
              <g>
                <path d="M0,0 L-7,-9 L0,0 L7,-9">
                  <animate
                    attributeName="d"
                    values="M0,0 L-7,-9 L0,0 L7,-9;M0,0 L-7,-3 L0,0 L7,-3;M0,0 L-7,-9 L0,0 L7,-9"
                    dur="0.42s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              {/* Bird 2 */}
              <g transform="translate(22, 12)">
                <path d="M0,0 L-6,-8 L0,0 L6,-8">
                  <animate
                    attributeName="d"
                    values="M0,0 L-6,-8 L0,0 L6,-8;M0,0 L-6,-2 L0,0 L6,-2;M0,0 L-6,-8 L0,0 L6,-8"
                    dur="0.42s"
                    repeatCount="indefinite"
                    begin="0.1s"
                  />
                </path>
              </g>
              {/* Bird 3 */}
              <g transform="translate(-16, 14)">
                <path d="M0,0 L-6,-8 L0,0 L6,-8">
                  <animate
                    attributeName="d"
                    values="M0,0 L-6,-8 L0,0 L6,-8;M0,0 L-6,-2 L0,0 L6,-2;M0,0 L-6,-8 L0,0 L6,-8"
                    dur="0.42s"
                    repeatCount="indefinite"
                    begin="0.18s"
                  />
                </path>
              </g>
              {/* Bird 4 */}
              <g transform="translate(40, 22)">
                <path d="M0,0 L-5,-7 L0,0 L5,-7">
                  <animate
                    attributeName="d"
                    values="M0,0 L-5,-7 L0,0 L5,-7;M0,0 L-5,-2 L0,0 L5,-2;M0,0 L-5,-7 L0,0 L5,-7"
                    dur="0.42s"
                    repeatCount="indefinite"
                    begin="0.05s"
                  />
                </path>
              </g>
            </g>
          </g>

          {/* Flying Birds - Flock 5 (lower sky, smaller) */}
          <g
            fill="none"
            stroke="#1e1840"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".45"
          >
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-80,550"
                to="1540,500"
                dur="30s"
                repeatCount="indefinite"
              />
              {/* Bird 1 */}
              <g>
                <path d="M0,0 L-5,-7 L0,0 L5,-7">
                  <animate
                    attributeName="d"
                    values="M0,0 L-5,-7 L0,0 L5,-7;M0,0 L-5,-2 L0,0 L5,-2;M0,0 L-5,-7 L0,0 L5,-7"
                    dur="0.48s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              {/* Bird 2 */}
              <g transform="translate(18, 10)">
                <path d="M0,0 L-5,-6 L0,0 L5,-6">
                  <animate
                    attributeName="d"
                    values="M0,0 L-5,-6 L0,0 L5,-6;M0,0 L-5,-1 L0,0 L5,-1;M0,0 L-5,-6 L0,0 L5,-6"
                    dur="0.48s"
                    repeatCount="indefinite"
                    begin="0.12s"
                  />
                </path>
              </g>
              {/* Bird 3 */}
              <g transform="translate(-12, 12)">
                <path d="M0,0 L-4,-6 L0,0 L4,-6">
                  <animate
                    attributeName="d"
                    values="M0,0 L-4,-6 L0,0 L4,-6;M0,0 L-4,-1 L0,0 L4,-1;M0,0 L-4,-6 L0,0 L4,-6"
                    dur="0.48s"
                    repeatCount="indefinite"
                    begin="0.2s"
                  />
                </path>
              </g>
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

          {/* Single prominent hill — peak shifted right for balance with tree */}
          <path
            d="M0,775 C150,740 300,755 460,720 C580,695 680,685 800,665 C890,650 960,632 1060,645 C1180,660 1300,690 1440,718 L1440,900 L0,900 Z"
            fill="#1e1840"
          />

          {/* Single elegant tree — imported SVG (sacred Banyan, prominent) */}
          <image
            href="/tree-clean.svg"
            x="440"
            y="340"
            width="580"
            height="520"
            opacity="0.92"
            preserveAspectRatio="xMidYMax meet"
          />

          <path
            d="M0,870 Q140,848 280,860 Q420,840 560,852 Q700,838 840,848 Q980,838 1120,850 Q1260,840 1380,855 Q1420,860 1440,865 L1440,900 L0,900 Z"
            fill="#0e0c20"
          />
        </svg>

        <div className="hero-content" id="heroContent">
          <p className="h-san">योगः कर्मसु कौशलम्</p>
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
