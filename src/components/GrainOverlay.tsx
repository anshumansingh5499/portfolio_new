export default function GrainOverlay(): JSX.Element {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9998] opacity-[0.04]"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1602475063211-3d98d60e3b1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhaW4lMjB0ZXh0dXJlfGVufDB8fDB8fHww')",
        mixBlendMode: "overlay",
      }}
    />
  );
}
