interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ className = "", size = "md", showText = true }: LogoProps) => {
  const dimensions = {
    sm: { width: 32, height: 32, fontSize: 10 },
    md: { width: 48, height: 48, fontSize: 14 },
    lg: { width: 64, height: 64, fontSize: 18 },
  };

  const { width, height, fontSize } = dimensions[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Diamond/Rhombus background with rounded corners */}
        <path
          d="M50 8 C52 8 54 10 58 14 L82 38 C86 42 88 44 88 46 L88 54 C88 56 86 58 82 62 L58 86 C54 90 52 92 50 92 C48 92 46 90 42 86 L18 62 C14 58 12 56 12 54 L12 46 C12 44 14 42 18 38 L42 14 C46 10 48 8 50 8 Z"
          fill="currentColor"
          className="text-black"
        />

        {/* Spine symbol - more anatomically accurate */}
        <g fill="white">
          {/* Vertebrae - more realistic shapes with lateral processes */}
          <g>
            {/* Top vertebrae */}
            <path d="M45 18 L55 18 L57 20 L55 22 L53 21 L50 22 L47 21 L45 22 L43 20 Z" />
            <path d="M44 26 L56 26 L58 28 L56 30 L54 29 L50 30 L46 29 L44 30 L42 28 Z" />
            <path d="M43 34 L57 34 L59 36 L57 38 L55 37 L50 38 L45 37 L43 38 L41 36 Z" />
            <path d="M42 42 L58 42 L60 44 L58 46 L56 45 L50 46 L44 45 L42 46 L40 44 Z" />

            {/* Middle vertebrae - larger */}
            <path d="M42 50 L58 50 L60 52 L58 54 L56 53 L50 54 L44 53 L42 54 L40 52 Z" />
            <path d="M43 58 L57 58 L59 60 L57 62 L55 61 L50 62 L45 61 L43 62 L41 60 Z" />
            <path d="M44 66 L56 66 L58 68 L56 70 L54 69 L50 70 L46 69 L44 70 L42 68 Z" />
            <path d="M45 74 L55 74 L57 76 L55 78 L53 77 L50 78 L47 77 L45 78 L43 76 Z" />
            <path d="M46 82 L54 82 L56 84 L54 86 L52 85 L50 86 L48 85 L46 86 L44 84 Z" />
          </g>

          {/* Central spinal cord */}
          <rect x="49.5" y="18" width="1" height="68" rx="0.5" />
        </g>
      </svg>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className="font-bold text-black leading-tight font-aaargh"
            style={{ fontSize: `${fontSize}px` }}
          >
            ТВОЯ ОПОРА
          </span>
          {size !== "sm" && (
            <span
              className="text-gray-600 text-xs leading-tight font-aaargh"
              style={{ fontSize: `${fontSize * 0.6}px` }}
            >
              РЕАБІЛІТАЦІЙНО-МАСАЖНИЙ ЦЕНТР
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
