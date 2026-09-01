export default function StatusDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-2)] opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-2)]" />
    </span>
  );
}
