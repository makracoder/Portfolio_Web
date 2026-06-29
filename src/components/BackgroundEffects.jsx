export default function BackgroundEffects() {
  return (
    <div className="bg-layer" aria-hidden="true">
      {/* Aurora glow */}
      <div
        className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(ellipse, rgba(124, 255, 77, 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[60%] -right-[20%] w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 255, 77, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 255, 77, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 255, 77, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)",
        }}
      />

      {/* Dot matrix */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(124, 255, 77, 0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 50%, black 10%, transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 50% at 50% 50%, black 10%, transparent 60%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, var(--bg-primary) 75%)",
        }}
      />
    </div>
  );
}
