import { Link } from "react-router-dom";

const SPINE_TONES = [
  "bg-amber-900/90 border-amber-800/60",
  "bg-red-950/90 border-red-900/60",
  "bg-emerald-950/90 border-emerald-900/60",
  "bg-blue-950/90 border-blue-900/60",
  "bg-violet-950/90 border-violet-900/60",
  "bg-orange-950/90 border-orange-900/60",
  "bg-teal-950/90 border-teal-900/60",
  "bg-rose-950/90 border-rose-900/60",
];

function spineTone(title) {
  let hash = 0;

  for (let index = 0; index < title.length; index += 1) {
    hash = title.charCodeAt(index) + ((hash << 5) - hash);
  }

  return SPINE_TONES[Math.abs(hash) % SPINE_TONES.length];
}

function BookSpine({ volume, showLabel = false, readOnly = false, size = "sm" }) {
  const isLarge = size === "lg";
  const sizeClass = isLarge ? "min-h-[5.5rem] w-9" : "min-h-[2.75rem] w-5";

  const className = `library-spine relative flex h-full shrink-0 items-center justify-center overflow-visible rounded-sm border ${sizeClass} ${spineTone(volume.title)} ${readOnly ? "" : "cursor-pointer transition-colors duration-200 hover:brightness-125"}`;

  const spineText = showLabel ? (
    <span
      className={`library-spine-label pointer-events-none select-none font-medium leading-none text-white/80 ${isLarge ? "library-spine-label-lg text-[11px]" : "text-[9px]"}`}
    >
      {volume.title.slice(0, isLarge ? 28 : 18)}
    </span>
  ) : null;

  if (readOnly) {
    return (
      <span
        aria-hidden={!showLabel ? true : undefined}
        title={volume.title}
        className={className}
      >
        {spineText}
      </span>
    );
  }

  return (
    <Link
      to={`/volumes/${volume.id}`}
      title={volume.title}
      aria-label={volume.title}
      className={className}
    >
      {spineText}
    </Link>
  );
}

export default BookSpine;
