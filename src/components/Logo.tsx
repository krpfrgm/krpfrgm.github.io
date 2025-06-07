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
        {/* Diamond/Rhombus background */}
        <path
          d="M50 5 L85 50 L50 95 L15 50 Z"
          fill="currentColor"
          className="text-black"
        />

        {/* Spine/Vertebrae symbol */}
        <g fill="white">
          {/* Vertebrae segments */}
          <ellipse cx="50" cy="20" rx="8" ry="3" />
          <ellipse cx="50" cy="28" rx="9" ry="3.5" />
          <ellipse cx="50" cy="37" rx="10" ry="4" />
          <ellipse cx="50" cy="46" rx="11" ry="4.5" />
          <ellipse cx="50" cy="55" rx="11" ry="4.5" />
          <ellipse cx="50" cy="64" rx="10" ry="4" />
          <ellipse cx="50" cy="72" rx="9" ry="3.5" />
          <ellipse cx="50" cy="80" rx="8" ry="3" />

          {/* Connecting spine line */}
          <rect x="49" y="20" width="2" height="60" />
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
