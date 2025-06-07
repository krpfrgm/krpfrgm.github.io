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

        {/* Spine symbol - organic flowing design matching the original */}
        <path
          fill="white"
          d="
          M 50 15
          C 45 15, 42 18, 44 20
          C 46 22, 48 22, 50 22
          C 52 22, 54 22, 56 20
          C 58 18, 55 15, 50 15

          C 50 22, 50 25, 50 28
          C 45 28, 38 30, 40 33
          C 42 36, 48 36, 50 36

          C 50 36, 50 39, 50 42
          C 55 42, 62 44, 60 47
          C 58 50, 52 50, 50 50

          C 50 50, 50 53, 50 56
          C 45 56, 36 58, 38 61
          C 40 64, 48 64, 50 64

          C 50 64, 50 67, 50 70
          C 55 70, 64 72, 62 75
          C 60 78, 52 78, 50 78

          C 50 78, 50 81, 50 84
          C 45 84, 42 86, 44 87
          C 46 88, 48 88, 50 88
          C 52 88, 54 88, 56 87
          C 58 86, 55 84, 50 84

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
