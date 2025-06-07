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

        {/* Spine symbol - flowing vertebrae design */}
        <g fill="white">
          {/* Stylized vertebrae with smooth flowing design */}
          <path
            d="M50 15
                   C 45 17, 40 19, 42 22
                   C 44 25, 46 24, 50 24
                   C 54 24, 56 25, 58 22
                   C 60 19, 55 17, 50 15 Z"
          />

          <path
            d="M50 22
                   C 44 24, 38 26, 40 30
                   C 42 34, 45 33, 50 33
                   C 55 33, 58 34, 60 30
                   C 62 26, 56 24, 50 22 Z"
          />

          <path
            d="M50 31
                   C 43 33, 36 35, 38 40
                   C 40 45, 44 44, 50 44
                   C 56 44, 60 45, 62 40
                   C 64 35, 57 33, 50 31 Z"
          />

          <path
            d="M50 42
                   C 42 44, 34 46, 36 52
                   C 38 58, 43 57, 50 57
                   C 57 57, 62 58, 64 52
                   C 66 46, 58 44, 50 42 Z"
          />

          <path
            d="M50 55
                   C 43 57, 36 59, 38 64
                   C 40 69, 44 68, 50 68
                   C 56 68, 60 69, 62 64
                   C 64 59, 57 57, 50 55 Z"
          />

          <path
            d="M50 66
                   C 44 68, 38 70, 40 74
                   C 42 78, 45 77, 50 77
                   C 55 77, 58 78, 60 74
                   C 62 70, 56 68, 50 66 Z"
          />

          <path
            d="M50 75
                   C 45 77, 40 79, 42 82
                   C 44 85, 46 84, 50 84
                   C 54 84, 56 85, 58 82
                   C 60 79, 55 77, 50 75 Z"
          />

          {/* Central spinal column */}
          <path d="M49.5 15 Q50 50 49.5 84 Q50 84 50.5 84 Q50 50 50.5 15 Z" />
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
