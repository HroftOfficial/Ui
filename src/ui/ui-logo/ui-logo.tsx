export function UiLogo({ className }: { className?: string }) {
  return (
    <svg
    className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 72 72"
    >
      <defs>
        <path
          id="openmojiAntennaBars0"
          d="M12 51h5v9h-5zm10.75-10h5v19h-5zM33.5 31h5v28.999h-5zm10.75-10h5v38.999h-5zM55 12h5v48h-5z"
        />
      </defs>
      <use
        href="#openmojiAntennaBars0"
        fill="#d0cfce"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <use
        href="#openmojiAntennaBars0"
        fill="none"
        stroke="#000"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
    </svg>
  );
}
