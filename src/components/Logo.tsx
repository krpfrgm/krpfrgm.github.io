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

        {/* Spine symbol - simplified design matching the original */}
        <g fill="white">
          {/* Central spinal column */}
          <rect x="48.5" y="15" width="3" height="70" rx="1.5" />

          {/* Vertebrae processes - alternating left and right */}
          {/* Right side processes */}
          <path d="M51.5 18 L62 16 Q64 16 64 18 Q64 20 62 20 L51.5 22 Z" />
          <path d="M51.5 30 L62 28 Q64 28 64 30 Q64 32 62 32 L51.5 34 Z" />
          <path d="M51.5 42 L62 40 Q64 40 64 42 Q64 44 62 44 L51.5 46 Z" />
          <path d="M51.5 54 L62 52 Q64 52 64 54 Q64 56 62 56 L51.5 58 Z" />
          <path d="M51.5 66 L62 64 Q64 64 64 66 Q64 68 62 68 L51.5 70 Z" />
          <path d="M51.5 78 L62 76 Q64 76 64 78 Q64 80 62 80 L51.5 82 Z" />

          {/* Left side processes */}
          <path d="M48.5 24 L38 22 Q36 22 36 24 Q36 26 38 26 L48.5 28 Z" />
          <path d="M48.5 36 L38 34 Q36 34 36 36 Q36 38 38 38 L48.5 40 Z" />
          <path d="M48.5 48 L38 46 Q36 46 36 48 Q36 50 38 50 L48.5 52 Z" />
          <path d="M48.5 60 L38 58 Q36 58 36 60 Q36 62 38 62 L48.5 64 Z" />
          <path d="M48.5 72 L38 70 Q36 70 36 72 Q36 74 38 74 L48.5 76 Z" />
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
