export function GeometricFooter() {
  return (
    <footer
      className="relative mt-16 overflow-hidden bg-base-100 py-12"
      role="contentinfo"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden w-[15.3rem] md:block"
        viewBox="0 0 278 249"
      >
        <g transform="translate(0 10)">
          <g transform="translate(139 114.5) rotate(-101) translate(-139 -114.5) translate(36 -7)">
            <circle
              className="footer-gold-sphere"
              cx="84"
              cy="126"
              fill="#ffbf00"
              r="71.4"
            />
            <circle
              className="footer-gold-sphere footer-float-up"
              cx="150.5"
              cy="78.5"
              fill="#ffdc00"
              fillOpacity="0.8"
              r="47.175"
            />
            <circle
              className="footer-gold-sphere"
              cx="62"
              cy="210"
              fill="#f18a00"
              fillOpacity="0.8"
              r="28.05"
            />
            <circle
              className="footer-gold-sphere footer-float-diagonal"
              cx="83.5"
              cy="11.5"
              fill="#ffbf00"
              r="9.775"
            />
          </g>
        </g>
      </svg>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 text-center">
        <a
          className="block"
          href="https://caes.ucdavis.edu/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="UC Davis College of Agricultural and Environmental Sciences"
            className="w-64 sm:w-80"
            src="/caes.svg"
          />
        </a>
        <p className="text-sm text-base-content">© 2026–2027 Regents of the University of California
        </p>
      </div>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-1 bottom-2 hidden w-[13.6rem] md:block"
        viewBox="0 0 225 179"
      >
        <g transform="translate(-1566 -30)">
          <g transform="translate(1566 30)">
            <ellipse
              className="footer-blue-sphere"
              cx="122.074468"
              cy="78.1303191"
              fill="#002855"
              rx="66.12367022"
              ry="66.410771235"
            />
            <circle
              className="footer-blue-sphere footer-float-left"
              cx="64.6276596"
              cy="138.308511"
              fill="#008eaa"
              fillOpacity="0.8"
              r="34.58776599"
            />
            <circle
              className="footer-blue-sphere"
              cx="191.489362"
              cy="44.2819149"
              fill="#0047ba"
              fillOpacity="0.8"
              r="28.484042555"
            />
            <circle
              className="footer-blue-sphere footer-float-diagonal-reverse"
              cx="16.7553191"
              cy="34.7074468"
              fill="#002855"
              r="14.242021235"
            />
          </g>
        </g>
      </svg>
    </footer>
  );
}
