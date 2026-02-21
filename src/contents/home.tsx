import "./home.css";
import { useEffect, useRef, useState } from "react";

const BASE = import.meta.env.BASE_URL;

export function Home() {
  const infectionRef = useRef<HTMLElement | null>(null);
  const [infectionAnimated, setInfectionAnimated] = useState(false);

  const scrollToContent = () => {
    document.getElementById("crab-intro")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!infectionRef.current || infectionAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInfectionAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(infectionRef.current);
    return () => observer.disconnect();
  }, [infectionAnimated]);

  return (
    <>
      {/* Hero */}
      <section className="hero bg-hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-logo-wrap">
              <img
                src={`${BASE}images/home/CRAB-QQ.svg`}
                alt="CRAB-QQ"
                className="hero-logo"
              />
              <div className="hero-meta">
                <img
                  src={`${BASE}images/home/Star.svg`}
                  alt=""
                  className="hero-star"
                  aria-hidden
                />
                <p className="hero-subtitle">
                  <span className="highlight-cap">C</span>RAB{" "}
                  <span className="highlight-cap">R</span>apid{" "}
                  <span className="highlight-cap">A</span>ssay &{" "}
                  <span className="highlight-cap">B</span>iofilm-stripping via{" "}
                  <span className="highlight-cap">Q</span>uorum{" "}
                  <span className="highlight-cap">Q</span>uenching
                </p>
              </div>
              <div
                className="hero-scroll hero-scroll--inline"
                onClick={scrollToContent}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && scrollToContent()
                }
              >
                <span className="hero-scroll-text">Scroll for more !</span>
                <img
                  src={`${BASE}images/home/箭头.svg`}
                  alt=""
                  aria-hidden
                  className="hero-scroll-arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRAB intro + crab illustration */}
      <section id="crab-intro" className="crab-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="crab-heading">CRAB</h2>
              <p className="crab-text">
                Carbapenem-resistant Acinetobacter baumannii (CRAB) is a typical
                clinically multidrug-resistant Gram-negative bacterium
                characterized by strong environmental adaptability, high
                transmission efficiency, and complex drug resistance mechanisms.
              </p>
            </div>
            <div className="col-lg-5 text-center">
              <img
                src={`${BASE}images/home/crab.svg`}
                alt=""
                className="crab-illustration"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats sentence + bar chart */}
      <section className="stats-section">
        <div className="container">
          <p className="stats-intro">
            Severe CRAB infections in the ICU can result in: a 37.6% incidence
            of clonal transmission in the ICU, an ultra-high mortality rate of
            50%, and approximately 40,000 deaths worldwide annually.
          </p>
          <div className="chart">
            <img
              src={`${BASE}images/home/fig1.svg`}
              alt="Severe CRAB infections in ICU chart"
              className="chart-image"
            />
          </div>
        </div>
      </section>

      {/* Infection site figure */}
      <section
        ref={infectionRef}
        className={`infection-section ${infectionAnimated ? "infection-section--animated" : ""}`}
      >
        <div className="container">
          <p className="infection-intro">
            However, clinical treatment options for CRAB are extremely limited,
            with only a few agents such as polymyxins and tigecycline available.
            Their severe side effects and emerging drug resistance further
            restrict clinical application.
          </p>

          <h2 className="infection-title">Infection site</h2>

          <div className="infection-figure">
            <img
              src={`${BASE}images/home/饼状图.svg`}
              alt="Infection distribution pie chart"
              className="infection-pie"
            />

            <div className="infection-item infection-item--urinary">
              <img src={`${BASE}images/home/CAUTI.svg`} alt="" aria-hidden />
              <p>Urinary Tract (CAUTI)</p>
            </div>

            <div className="infection-item infection-item--meningitis">
              <img src={`${BASE}images/home/meningitis.svg`} alt="" aria-hidden />
              <p>Meningitis</p>
            </div>

            <div className="infection-item infection-item--vap">
              <img src={`${BASE}images/home/VAP.svg`} alt="" aria-hidden />
              <p>VAP</p>
            </div>

            <div className="infection-item infection-item--crbsi">
              <img src={`${BASE}images/home/CRBSI.svg`} alt="" aria-hidden />
              <p>Bloodstream Infection (CRBSI)</p>
            </div>

            <div className="infection-item infection-item--wound">
              <img src={`${BASE}images/home/wound.svg`} alt="" aria-hidden />
              <p>Wound</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="whatwedo-section">
        <div className="container">
          <h2 className="whatwedo-title">WHAT WE DO</h2>
          <p className="whatwedo-intro">
            Targeting AbOmpA, a species-specific and highly conserved outer
            membrane protein, and OXA-23, the dominant carbapenemase in CRAB,
            our team aims to develop a precision diagnosis and treatment system
            for CRAB.
          </p>

          <div className="whatwedo-diagram">
            <div className="whatwedo-bubble whatwedo-bubble--left">
              visual
              <br />
              detection
            </div>
            <div className="whatwedo-bubble whatwedo-bubble--center">
              targeted
              <br />
              delivery
            </div>
            <div className="whatwedo-bubble whatwedo-bubble--right">
              anti-
              <br />
              virulence
              <br />
              therapy
            </div>

            <p className="whatwedo-summary">
              By integrating visual detection, targeted delivery, and
              anti-virulence therapy, we seek to address the clinical challenges
              of CRAB infection and provide a novel strategy for the prevention
              and control of multidrug-resistant bacterial infections.
            </p>
          </div>
        </div>
      </section>

      {/* Pathway focus */}
      <section className="pathway-focus-section">
        <div className="container">
          <h2 className="pathway-focus-title">
            How do we determine when the CRAB biofilm is discruped ?
          </h2>
          <p className="pathway-focus-subtitle">
            How about assessing it solely with the naked eye?
          </p>

          <p className="pathway-focus-label">Pathway 1: wound</p>

          <div className="pathway-focus-figure">
            <img
              src={`${BASE}images/home/crab.svg`}
              alt=""
              aria-hidden
              className="pathway-focus-item pathway-focus-item--crab-healthy"
            />
            <img
              src={`${BASE}images/home/crab in pieces.svg`}
              alt=""
              aria-hidden
              className="pathway-focus-item pathway-focus-item--crab-broken"
            />

            <div className="pathway-focus-ruler">
              <span className="pathway-focus-ruler-label">AHL density</span>
              <img
                src={`${BASE}images/home/渐变刻度尺.svg`}
                alt="AHL density"
                className="pathway-focus-ruler-scale"
              />
              <img
                src={`${BASE}images/home/刻度尺上的游标.svg`}
                alt=""
                aria-hidden
                className="pathway-focus-ruler-cursor"
              />
            </div>

            <img
              src={`${BASE}images/home/高浓度AHL.svg`}
              alt=""
              aria-hidden
              className="pathway-focus-item pathway-focus-item--ahl-high"
            />
            <img
              src={`${BASE}images/home/低浓度AHL.svg`}
              alt=""
              aria-hidden
              className="pathway-focus-item pathway-focus-item--ahl-low"
            />
            <img
              src={`${BASE}images/home/工程菌.svg`}
              alt=""
              aria-hidden
              className="pathway-focus-item pathway-focus-item--bacteria-top"
            />
            <img
              src={`${BASE}images/home/分泌蓝色颗粒的工程菌.svg`}
              alt=""
              aria-hidden
              className="pathway-focus-item pathway-focus-item--bacteria-blue"
            />
            <img
              src={`${BASE}images/home/wound.svg`}
              alt=""
              aria-hidden
              className="pathway-focus-item pathway-focus-item--wound"
            />
          </div>

          <p className="pathway-focus-label pathway-focus-label--second">
            Pathway 2: VAP / bloodstream
          </p>

          <div className="pathway-focus-figure pathway-focus-figure--second">
            <img
              src={`${BASE}images/home/水流.svg`}
              alt=""
              aria-hidden
              className="pathway-focus-item pathway-focus-item--flow"
            />
            <img
              src={`${BASE}images/home/crab.svg`}
              alt=""
              aria-hidden
              className="pathway-focus-item pathway-focus-item--crab-healthy-2"
            />
            <img
              src={`${BASE}images/home/crab in pieces.svg`}
              alt=""
              aria-hidden
              className="pathway-focus-item pathway-focus-item--crab-broken-2"
            />

            <div className="pathway-focus-ruler pathway-focus-ruler--second">
              <span className="pathway-focus-ruler-label">AHL density</span>
              <img
                src={`${BASE}images/home/渐变刻度尺.svg`}
                alt="AHL density"
                className="pathway-focus-ruler-scale"
              />
              <img
                src={`${BASE}images/home/刻度尺上的游标.svg`}
                alt=""
                aria-hidden
                className="pathway-focus-ruler-cursor"
              />
            </div>

            <img
              src={`${BASE}images/home/高浓度AHL里的标.svg`}
              alt=""
              aria-hidden
              className="pathway-focus-item pathway-focus-item--ahl-high-mark"
            />
            <img
              src={`${BASE}images/home/低浓度AHL中的标.svg`}
              alt=""
              aria-hidden
              className="pathway-focus-item pathway-focus-item--ahl-low-2"
            />
          </div>
        </div>
      </section>

      {/* Why we are special */}
      <section className="special-section-v2">
        <div className="container">
          <h2 className="special-v2-title">WHY WE ARE SPECIAL:</h2>

          <div className="special-v2-block">
            <div className="special-v2-head special-v2-head--left">
              <img
                src={`${BASE}images/home/Integration of Diagnosis and Treatment.svg`}
                alt=""
                aria-hidden
                className="special-v2-icon"
              />
              <h3>Integration of Diagnosis and Treatment</h3>
            </div>
            <p className="special-v2-text special-v2-text--left">
              Our project team has independently developed a CRAB detection kit,
              which is used to identify the status of CRAB in patients and
              locate the approximate infection sites. Based on the positive
              results of the kit and the infected sites, our team will implement
              subsequent targeted treatments.
            </p>
          </div>

          <div className="special-v2-block">
            <div className="special-v2-head special-v2-head--right">
              <h3>Systemic Treatment</h3>
              <img
                src={`${BASE}images/home/Systemic Treatment.svg`}
                alt=""
                aria-hidden
                className="special-v2-icon"
              />
            </div>
            <p className="special-v2-text special-v2-text--right">
              For the three common infection sites of CRAB-lungs, bloodstream
              and wounds-our team has proposed differentiated administration
              strategies, diagnostic methods and biosafety measures. The
              therapeutic approaches of this project cover up to 95% of invasive
              CRAB infections.
            </p>
          </div>

          <div className="special-v2-block">
            <div className="special-v2-head special-v2-head--left">
              <img
                src={`${BASE}images/home/Biological Memory.svg`}
                alt=""
                aria-hidden
                className="special-v2-icon"
              />
              <h3>Biological Memory</h3>
            </div>
            <p className="special-v2-text special-v2-text--left">
              The engineered bacteria designed in this project will form
              irreversible biological memory once exposed to specific signals
              secreted by the pathogenic bacterium CRAB. This provides a basis
              for downstream visual detection and self-elimination mechanisms,
              ensuring the safety and stability of the product.
            </p>
          </div>

          <div className="special-v2-block">
            <div className="special-v2-head special-v2-head--right">
              <h3>Visualized Treatment Course</h3>
              <img
                src={`${BASE}images/home/Visualized Treatment Course.svg`}
                alt=""
                aria-hidden
                className="special-v2-icon"
              />
            </div>
            <p className="special-v2-text special-v2-text--right">
              To monitor patients&apos; therapeutic responses after treatment, our
              project has introduced easy-to-operate and rapid visual detection
              designs for all infection sites. The visualized therapeutic
              outcomes will assist medical teams in formulating subsequent
              treatment procedures.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
