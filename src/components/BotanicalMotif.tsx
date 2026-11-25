export function BotanicalDivider({className = ''}: {className?: string}) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-[#C6A36A]/45" />
      <svg
        width="26"
        height="26"
        viewBox="0 0 28 28"
        fill="none"
        className="text-[#C6A36A] shrink-0"
      >
        <path
          d="M14 3C14 9 9.5 14 3 14C9.5 14 14 19 14 25C14 19 18.5 14 25 14C18.5 14 14 9 14 3Z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="14" r="2.2" fill="currentColor" fillOpacity="0.35" />
      </svg>
      <span className="h-px w-12 bg-[#C6A36A]/45" />
    </div>
  );
}

export function BotanicalSprig({className = ''}: {className?: string}) {
  return (
    <svg
      width="84"
      height="42"
      viewBox="0 0 84 42"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none text-[#C6A36A]/55 ${className}`}
    >
      <path
        d="M4 34C20 31 39 22 76 8"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M24 27C21 19 25 12 31 10C32 17 29 24 24 27Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M46 19C44 11 49 5 56 4C56 11 52 17 46 19Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M36 24C43 26 49 31 50 37C42 36 37 31 36 24Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.08"
      />
    </svg>
  );
}
