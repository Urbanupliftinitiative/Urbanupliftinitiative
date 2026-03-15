import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const PREGNANT_IMG = "https://images.unsplash.com/photo-1725393197924-e1dff51c29f1?auto=format&fit=crop&q=80&w=1200";
const LAYER2_IMG = "https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&q=80&w=1200";
const LAYER3_IMG = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200";

const HalideTopo = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const layersRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;

      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 15;
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';

    const timeout = setTimeout(() => {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <style>{`
        .halide-hero {
          --bg: #d8c4d8;
          --silver: #ffffff;
          --accent: #8a708a;
          background-color: var(--bg);
          color: var(--silver);
          font-family: 'Sora', sans-serif;
          overflow: hidden;
          height: 100vh;
          width: 100%;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .halide-grain {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: 0.12;
        }
        .halide-viewport {
          perspective: 2000px;
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .halide-canvas {
          position: relative;
          width: 800px; height: 500px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .halide-layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(224, 224, 224, 0.08);
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
          border-radius: 8px;
        }
        .halide-layer-1 {
          background-image: url('${PREGNANT_IMG}');
          filter: grayscale(0.4) contrast(1.05) brightness(0.75);
        }
        .halide-layer-2 {
          background-image: url('${LAYER2_IMG}');
          filter: grayscale(0.5) contrast(1.05) brightness(0.8);
          opacity: 0.45;
          mix-blend-mode: multiply;
        }
        .halide-layer-3 {
          background-image: url('${LAYER3_IMG}');
          filter: grayscale(0.6) contrast(1.2) brightness(0.85);
          opacity: 0.3;
          mix-blend-mode: overlay;
        }
        .halide-contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(255,255,255,0.04) 41px, transparent 42px);
          transform: translateZ(120px);
          pointer-events: none;
        }
        .halide-grid {
          position: absolute;
          inset: 0;
          padding: 2.5rem 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }
        @media (min-width: 768px) {
          .halide-grid { padding: 3rem 4rem; }
        }
        .halide-title {
          grid-column: 1 / -1;
          align-self: center;
          font-size: clamp(2.5rem, 8vw, 8rem);
          line-height: 0.88;
          letter-spacing: -0.04em;
          font-weight: 800;
          mix-blend-mode: difference;
        }
        .halide-cta {
          pointer-events: auto;
          background: var(--silver);
          color: var(--bg);
          padding: 1rem 2rem;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          border-radius: 100px;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
          display: inline-block;
        }
        .halide-cta:hover {
          background: var(--accent);
          color: white;
          transform: translateY(-3px);
        }
        .halide-scroll {
          position: absolute;
          bottom: 2rem; left: 50%;
          width: 1px; height: 50px;
          background: linear-gradient(to bottom, var(--silver), transparent);
          animation: halide-flow 2s infinite ease-in-out;
        }
        @keyframes halide-flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }
      `}</style>

      <div className="halide-hero" data-testid="halide-hero">
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="halide-grain" style={{ filter: 'url(#grain)' }} />

        <div className="halide-grid">
          <div style={{ fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.85rem' }}>ONEPERMIT</div>
          <div style={{ textAlign: 'right', fontFamily: 'monospace', color: 'var(--accent)', fontSize: '0.65rem', lineHeight: 1.8 }}>
            <div>CARE PLATFORM</div>
            <div>UNIFIED MONITORING</div>
          </div>

          <h1 className="halide-title">
            IVF &amp;<br />SURROGACY<br />CARE
          </h1>

          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', opacity: 0.5, lineHeight: 1.8 }}>
              <p style={{ margin: 0 }}>[ UNIFIED CARE PLATFORM ]</p>
              <p style={{ margin: 0 }}>PATIENTS / SURROGATES / CLINICS / AGENCIES</p>
            </div>
            <button className="halide-cta" onClick={() => navigate('/talk-to-sales')}>
              REQUEST A DEMO
            </button>
          </div>
        </div>

        <div className="halide-viewport">
          <div className="halide-canvas" ref={canvasRef}>
            <div className="halide-layer halide-layer-1" ref={(el) => (layersRef.current[0] = el)} />
            <div className="halide-layer halide-layer-2" ref={(el) => (layersRef.current[1] = el)} />
            <div className="halide-layer halide-layer-3" ref={(el) => (layersRef.current[2] = el)} />
            <div className="halide-contours" />
          </div>
        </div>

        <div className="halide-scroll" />
      </div>
    </>
  );
};

export default HalideTopo;
