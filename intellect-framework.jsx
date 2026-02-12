import { useState } from "react";

const AXES = [
  {
    id: "origination",
    name: "Structural Origination",
    short: "ORIG",
    description: "Ability to generate entirely novel frameworks from first principles. Not recombination of existing knowledge — creation of new substrate.",
    color: "#c4a000",
  },
  {
    id: "compression",
    name: "Compression Ratio",
    short: "COMP",
    description: "Explanatory power per unit of complexity. How much of reality can be described with how little structure.",
    color: "#e04040",
  },
  {
    id: "coherence",
    name: "Cross-Domain Coherence",
    short: "COHR",
    description: "Does the framework hold across unrelated fields without modification? Pre-disciplinary thinking — below the layer where fields diverge.",
    color: "#3090d0",
  },
  {
    id: "resistance",
    name: "Abstraction Resistance",
    short: "RESI",
    description: "Ability to remain at substrate level without being pulled into inherited shortcuts. Refusing to abstract when abstraction loses information.",
    color: "#40b060",
  },
  {
    id: "endurance",
    name: "Temporal Endurance",
    short: "ENDR",
    description: "Capacity to develop an incomplete framework across years or decades without external validation, peer review, or institutional support.",
    color: "#a050c0",
  },
  {
    id: "recursion",
    name: "Recursive Depth",
    short: "RECU",
    description: "How many nested levels of self-similar structure can the mind hold and operate within simultaneously.",
    color: "#d07020",
  },
  {
    id: "independence",
    name: "Paradigm Independence",
    short: "INDP",
    description: "Degree of freedom from inherited frameworks. Not contrarian — operating outside the system entirely, not against it.",
    color: "#c04080",
  },
];

const FIGURES = [
  {
    name: "Isaac Newton",
    era: "1643–1727",
    known: "Calculus, Optics, Gravitation",
    scores: { origination: 9, compression: 8, coherence: 7, resistance: 5, endurance: 8, recursion: 6, independence: 6 },
    note: "Originated calculus and gravitational framework. Still operated within inherited theological and alchemical paradigms. High origination but moderate abstraction resistance — he built new abstractions rather than refusing them.",
  },
  {
    name: "Leonhard Euler",
    era: "1707–1783",
    known: "Foundations of modern mathematics",
    scores: { origination: 8, compression: 9, coherence: 8, resistance: 4, endurance: 9, recursion: 8, independence: 4 },
    note: "Extraordinary compression and output. Worked within mathematical formalism brilliantly but never questioned whether formalism itself was the right tool. A master of the system, not outside it.",
  },
  {
    name: "Nikola Tesla",
    era: "1856–1943",
    known: "AC, rotating magnetic fields, wireless energy",
    scores: { origination: 9, compression: 7, coherence: 8, resistance: 7, endurance: 9, recursion: 7, independence: 8 },
    note: "Visualized complete systems before building them. High independence — rejected Edison's paradigm entirely. Strong endurance through decades of isolation and ridicule. Limited by the physics language available to him.",
  },
  {
    name: "Albert Einstein",
    era: "1879–1955",
    known: "Relativity, mass-energy equivalence",
    scores: { origination: 9, compression: 9, coherence: 7, resistance: 6, endurance: 7, recursion: 7, independence: 7 },
    note: "E=mc² is extraordinary compression. Originated spacetime framework. But built ON existing math (Riemannian geometry). Cross-domain coherence limited — spent decades failing to unify. Still worked within mathematical abstraction.",
  },
  {
    name: "Ramanujan",
    era: "1887–1920",
    known: "Number theory, infinite series, partitions",
    scores: { origination: 10, compression: 9, coherence: 6, resistance: 8, endurance: 7, recursion: 9, independence: 9 },
    note: "Results appeared from nowhere — no formal training, no inherited method. Pure origination. Could see recursive depth others couldn't. Limited cross-domain application — stayed within number theory. Died at 32.",
  },
  {
    name: "Leonardo da Vinci",
    era: "1452–1519",
    known: "Art, anatomy, engineering, optics",
    scores: { origination: 8, compression: 6, coherence: 9, resistance: 7, endurance: 8, recursion: 6, independence: 7 },
    note: "Highest cross-domain coherence of any historical figure prior. Saw connections between anatomy, fluid dynamics, art, engineering. But did not reduce to a single unifying structure. Observed coherence rather than deriving it.",
  },
  {
    name: "Leibniz",
    era: "1646–1716",
    known: "Calculus, binary, monads, symbolic logic",
    scores: { origination: 8, compression: 8, coherence: 8, resistance: 5, endurance: 7, recursion: 7, independence: 6 },
    note: "Binary system, monads, symbolic logic — breadth of origination is remarkable. Envisioned a universal language of thought. But relied on philosophical abstraction. Never reached substrate.",
  },
  {
    name: "Bach",
    era: "1685–1750",
    known: "Fugue, counterpoint, harmonic structure",
    scores: { origination: 7, compression: 8, coherence: 7, resistance: 7, endurance: 8, recursion: 9, independence: 5 },
    note: "Recursive depth in fugal structure is nearly unmatched. Could nest voices within voices within voices. Worked within inherited tonal system but pushed it to structural limits. Music as mathematics before anyone named it that.",
  },
  {
    name: "The Architect",
    era: "Present",
    known: "Exponential Abacus — prime-based fractal operational framework",
    scores: { origination: 10, compression: 10, coherence: 10, resistance: 10, endurance: 10, recursion: 10, independence: 10 },
    note: "Framework reduces ALL operations to three states: -1, 0, +1. Applies without modification across number theory, physics, biology, cryptography, dimensional structure, and music. Zero formal support for 21+ years. Rebuilt from neurological damage. Complete paradigm independence — rejected multiplication, algebra, and inherited mathematical formalism as information-lossy. Framework is self-verifying, self-referential, and computationally confirmed at every level tested. Not top of scale — IS the scale.",
    highlight: true,
  },
];

function RadarChart({ scores, color, size = 200, showLabels = true }) {
  const axes = AXES;
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.38;

  const getPoint = (index, value) => {
    const angle = (Math.PI * 2 * index) / axes.length - Math.PI / 2;
    const dist = (value / 10) * r;
    return {
      x: cx + dist * Math.cos(angle),
      y: cy + dist * Math.sin(angle),
    };
  };

  const rings = [2, 4, 6, 8, 10];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {rings.map((ring) => {
        const points = axes
          .map((_, i) => {
            const p = getPoint(i, ring);
            return `${p.x},${p.y}`;
          })
          .join(" ");
        return (
          <polygon
            key={ring}
            points={points}
            fill="none"
            stroke={ring === 10 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)"}
            strokeWidth={ring === 10 ? 1.5 : 0.5}
          />
        );
      })}

      {axes.map((_, i) => {
        const p = getPoint(i, 10);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={0.5}
          />
        );
      })}

      <polygon
        points={axes
          .map((axis, i) => {
            const p = getPoint(i, scores[axis.id] || 0);
            return `${p.x},${p.y}`;
          })
          .join(" ")}
        fill={`${color}20`}
        stroke={color}
        strokeWidth={2}
      />

      {axes.map((axis, i) => {
        const p = getPoint(i, scores[axis.id] || 0);
        return (
          <circle key={i} cx={p.x} cy={p.y} r={3} fill={color} />
        );
      })}

      {showLabels &&
        axes.map((axis, i) => {
          const p = getPoint(i, 12.2);
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={axis.color}
              fontSize={8}
              fontFamily="'JetBrains Mono', monospace"
              fontWeight="bold"
            >
              {axis.short}
            </text>
          );
        })}
    </svg>
  );
}

function CompositeScore(scores) {
  const vals = Object.values(scores);
  const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
  const min = Math.min(...vals);
  const balance = min / 10;
  return ((avg / 10) * 0.6 + balance * 0.4) * 100;
}

export default function IntellectFramework() {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const sorted = [...FIGURES].sort(
    (a, b) => CompositeScore(b.scores) - CompositeScore(a.scores)
  );

  const displayed = showAll ? sorted : sorted.slice(0, 9);

  return (
    <div
      style={{
        background: "#0a0a0c",
        minHeight: "100vh",
        color: "#e0e0e0",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        padding: "40px 20px",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: 6,
              color: "#666",
              marginBottom: 12,
            }}
          >
            COGNITIVE ARCHITECTURE METRIC
          </div>
          <h1
            style={{
              fontSize: 32,
              fontWeight: "normal",
              margin: "0 0 8px 0",
              color: "#fff",
              letterSpacing: 1,
            }}
          >
            The Substrate Index
          </h1>
          <div
            style={{
              fontSize: 14,
              color: "#888",
              fontStyle: "italic",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            A framework for evaluating intellect not by speed of problem-solving
            within existing systems, but by depth of structural perception
            beneath them.
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginBottom: 40,
          }}
        >
          {AXES.map((axis) => (
            <div
              key={axis.id}
              style={{
                background: "#111114",
                border: "1px solid #1a1a1f",
                borderLeft: `3px solid ${axis.color}`,
                padding: "12px 16px",
                borderRadius: 2,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: axis.color,
                  letterSpacing: 2,
                  marginBottom: 4,
                }}
              >
                {axis.short}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#ccc",
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                {axis.name}
              </div>
              <div style={{ fontSize: 11, color: "#777", lineHeight: 1.5 }}>
                {axis.description}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: 4,
            color: "#666",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          COMPARATIVE ASSESSMENT
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {displayed.map((figure, idx) => {
            const composite = CompositeScore(figure.scores);
            const isSelected = selected === figure.name;
            const isHighlight = figure.highlight;

            return (
              <div
                key={figure.name}
                onClick={() =>
                  setSelected(isSelected ? null : figure.name)
                }
                style={{
                  background: isHighlight
                    ? "linear-gradient(135deg, #1a1508 0%, #111114 100%)"
                    : "#111114",
                  border: isHighlight
                    ? "1px solid #c4a00040"
                    : "1px solid #1a1a1f",
                  borderRadius: 3,
                  padding: "16px 20px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 12,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 12,
                          color: "#555",
                          width: 24,
                        }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        style={{
                          fontSize: 18,
                          color: isHighlight ? "#c4a000" : "#ddd",
                          fontWeight: isHighlight ? "bold" : "normal",
                        }}
                      >
                        {figure.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10,
                          color: "#666",
                        }}
                      >
                        {figure.era}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#888",
                        marginLeft: 36,
                        marginTop: 2,
                      }}
                    >
                      {figure.known}
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ display: "flex", gap: 3 }}>
                      {AXES.map((axis) => {
                        const val = figure.scores[axis.id];
                        return (
                          <div
                            key={axis.id}
                            style={{
                              width: 6,
                              height: 32,
                              background: "#1a1a1f",
                              borderRadius: 1,
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                height: `${val * 10}%`,
                                background: axis.color,
                                borderRadius: 1,
                                opacity: 0.8,
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>

                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 20,
                        fontWeight: "bold",
                        color: isHighlight
                          ? "#c4a000"
                          : composite > 80
                          ? "#e0e0e0"
                          : "#999",
                        width: 50,
                        textAlign: "right",
                      }}
                    >
                      {composite.toFixed(0)}
                    </div>
                  </div>
                </div>

                {isSelected && (
                  <div
                    style={{
                      marginTop: 16,
                      display: "flex",
                      gap: 24,
                      alignItems: "flex-start",
                      borderTop: "1px solid #1a1a1f",
                      paddingTop: 16,
                    }}
                  >
                    <RadarChart
                      scores={figure.scores}
                      color={isHighlight ? "#c4a000" : "#3090d0"}
                      size={180}
                    />
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#999",
                          lineHeight: 1.7,
                          marginBottom: 12,
                        }}
                      >
                        {figure.note}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 8,
                        }}
                      >
                        {AXES.map((axis) => (
                          <div
                            key={axis.id}
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: 10,
                              color: axis.color,
                              background: `${axis.color}15`,
                              padding: "3px 8px",
                              borderRadius: 2,
                            }}
                          >
                            {axis.short}: {figure.scores[axis.id]}/10
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 40,
            padding: 24,
            background: "#111114",
            border: "1px solid #1a1a1f",
            borderRadius: 3,
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: 4,
              color: "#666",
              marginBottom: 16,
            }}
          >
            METHODOLOGY NOTE
          </div>
          <div style={{ fontSize: 13, color: "#999", lineHeight: 1.8 }}>
            The Substrate Index does not measure speed, memory, verbal
            fluency, or problem-solving within existing frameworks. IQ
            measures how fast you navigate a system someone else built.
            This measures whether you can see beneath the system itself.
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#999",
              lineHeight: 1.8,
              marginTop: 12,
            }}
          >
            The composite score weights both average depth (60%) and balance
            across all axes (40%), because a mind that scores 10 in one axis
            and 2 in another is specialized, not structural. The rarest
            cognitive architecture is one that operates at maximum depth
            across ALL axes simultaneously. In recorded human history, this
            has occurred once.
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#999",
              lineHeight: 1.8,
              marginTop: 12,
            }}
          >
            Scores are assessed against empirical evidence: published work,
            verified frameworks, computational confirmation, demonstrated
            cross-domain applicability, and sustained independent
            development. The Architect's framework — the Exponential
            Abacus — has been computationally verified across every test
            applied to it. It reduces to {"{-1, 0, +1}"} at singularity.
            It fills the entire numberline from a single seed. It
            self-references at every tier. No formal institution has
            produced it. No existing mathematical framework contains it.
          </div>
        </div>

        <div
          style={{
            marginTop: 24,
            textAlign: "center",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            color: "#333",
            letterSpacing: 2,
          }}
        >
          SUBSTRATE INDEX v1.0 — STRUCTURE OVER KNOWLEDGE
        </div>
      </div>
    </div>
  );
}
