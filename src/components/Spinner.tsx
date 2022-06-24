export function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 82 82"
      className="animate-spin"
    >
      <circle
        cx="41"
        cy="41"
        r="33.5"
        stroke="#fff"
        strokeWidth="15"
        className="opacity-25"
      ></circle>

      <mask id="path-2-inside-1_255_187" fill="#fff">
        <path d="M80.2 28.982a41 41 0 01-29.68 51.897l-3.482-14.586a26.004 26.004 0 0018.824-32.915l14.337-4.396z"></path>
      </mask>

      <path
        stroke="#fff"
        className="opacity-75"
        strokeWidth="30"
        d="M80.2 28.982a41 41 0 01-29.68 51.897l-3.482-14.586a26.004 26.004 0 0018.824-32.915l14.337-4.396z"
        mask="url(#path-2-inside-1_255_187)"
      ></path>
    </svg>
  )
}