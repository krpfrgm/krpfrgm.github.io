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

        {/* Spine symbol - flowing design exactly matching the original */}
        <path
          fill="white"
          d="
          M 50 12
          L 44 16 Q 42 17 42 19 Q 42 21 44 22 L 50 26
          L 56 22 Q 58 21 58 23 Q 58 25 56 26 L 50 30
          L 42 26 Q 40 27 40 29 Q 40 31 42 32 L 50 36
          L 58 32 Q 60 31 60 33 Q 60 35 58 36 L 50 40
          L 40 36 Q 38 37 38 39 Q 38 41 40 42 L 50 46
          L 60 42 Q 62 41 62 43 Q 62 45 60 46 L 50 50
          L 38 46 Q 36 47 36 49 Q 36 51 38 52 L 50 56
          L 62 52 Q 64 51 64 53 Q 64 55 62 56 L 50 60
          L 36 56 Q 34 57 34 59 Q 34 61 36 62 L 50 66
          L 64 62 Q 66 61 66 63 Q 66 65 64 66 L 50 70
          L 34 66 Q 32 67 32 69 Q 32 71 34 72 L 50 76
          L 66 72 Q 68 71 68 73 Q 68 75 66 76 L 50 80
          L 32 76 Q 30 77 30 79 Q 30 81 32 82 L 50 86
          L 68 82 Q 70 81 70 83 Q 70 85 68 86 L 50 90
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
