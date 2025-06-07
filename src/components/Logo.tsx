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

        {/* Spine symbol - simple and accurate design */}
        <g fill="white">
          {/* Central spine column */}
          <rect x="49" y="15" width="2" height="70" />

          {/* Vertebrae extensions - alternating left and right */}
          {/* Top - small extensions */}
          <ellipse cx="46" cy="18" rx="6" ry="2" />
          <ellipse cx="54" cy="22" rx="7" ry="2.5" />

          {/* Upper middle - medium extensions */}
          <ellipse cx="43" cy="28" rx="8" ry="3" />
          <ellipse cx="57" cy="34" rx="9" ry="3.5" />

          {/* Middle - large extensions */}
          <ellipse cx="40" cy="42" rx="10" ry="4" />
          <ellipse cx="60" cy="50" rx="11" ry="4.5" />

          {/* Lower middle - medium extensions */}
          <ellipse cx="43" cy="58" rx="8" ry="3.5" />
          <ellipse cx="57" cy="66" rx="9" ry="3" />

          {/* Bottom - small extensions */}
          <ellipse cx="46" cy="74" rx="7" ry="2.5" />
          <ellipse cx="54" cy="80" rx="6" ry="2" />
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
