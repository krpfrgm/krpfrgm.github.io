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

        {/* Spine symbol - exact flowing design matching the original */}
        <path
          fill="white"
          d="
          M 50 12
          Q 45 14 42 16
          Q 40 18 42 20
          Q 44 22 48 21
          Q 50 20 50 20
          Q 50 20 52 21
          Q 56 22 58 20
          Q 60 18 58 16
          Q 55 14 50 12

          Q 50 20 50 24
          Q 48 26 44 28
          Q 38 30 38 33
          Q 38 36 44 37
          Q 48 38 50 38

          Q 50 38 50 42
          Q 52 44 56 46
          Q 62 48 62 51
          Q 62 54 56 55
          Q 52 56 50 56

          Q 50 56 50 60
          Q 48 62 44 64
          Q 36 66 36 69
          Q 36 72 44 73
          Q 48 74 50 74

          Q 50 74 50 78
          Q 52 80 56 82
          Q 64 84 64 87
          Q 64 90 56 91
          Q 52 92 50 92
          Q 48 92 44 91
          Q 36 90 36 87
          Q 36 84 44 82
          Q 48 80 50 78

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
