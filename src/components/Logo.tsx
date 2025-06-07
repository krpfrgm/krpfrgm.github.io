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

        {/* Spine symbol - flowing organic design */}
        <path
          fill="white"
          d="
          M 50 15
          C 48 15 46 16 44 18
          C 42 20 42 22 44 24
          C 46 26 48 26 50 26
          C 52 26 54 26 56 24
          C 58 22 58 20 56 18
          C 54 16 52 15 50 15
          Z
          M 50 24
          C 50 24 48 26 44 28
          C 40 30 38 32 38 34
          C 38 36 40 38 44 40
          C 48 42 50 42 50 42
          C 50 42 52 42 56 40
          C 60 38 62 36 62 34
          C 62 32 60 30 56 28
          C 52 26 50 24 50 24
          Z
          M 50 40
          C 50 40 48 42 42 44
          C 36 46 32 48 32 51
          C 32 54 36 56 42 58
          C 48 60 50 60 50 60
          C 50 60 52 60 58 58
          C 64 56 68 54 68 51
          C 68 48 64 46 58 44
          C 52 42 50 40 50 40
          Z
          M 50 58
          C 50 58 48 60 44 62
          C 40 64 38 66 38 68
          C 38 70 40 72 44 74
          C 48 76 50 76 50 76
          C 50 76 52 76 56 74
          C 60 72 62 70 62 68
          C 62 66 60 64 56 62
          C 52 60 50 58 50 58
          Z
          M 50 74
          C 48 74 46 75 44 77
          C 42 79 42 81 44 83
          C 46 85 48 85 50 85
          C 52 85 54 85 56 83
          C 58 81 58 79 56 77
          C 54 75 52 74 50 74
          Z
        "
        />
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
