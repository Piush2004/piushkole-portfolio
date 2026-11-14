export default function GlobalBackground() {
  // Plain paper background. No particles, no glows, no noise texture —
  // negative space instead of decorative motion.
  return <div className="fixed inset-0 z-[-1] bg-background" />;
}
