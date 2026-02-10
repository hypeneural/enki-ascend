interface EnkiIconProps {
  className?: string;
  color?: string;
  size?: number;
}

const EnkiIcon = ({ className = "", color = "currentColor", size = 40 }: EnkiIconProps) => (
  <svg
    width={size}
    height={size * 1.2}
    viewBox="0 0 40 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="8" width="3" height="32" fill={color} />
    <rect x="11" y="4" width="3" height="40" fill={color} />
    <rect x="20" y="0" width="3" height="48" fill={color} />
    <rect x="29" y="6" width="3" height="36" fill={color} />
    <rect x="38" y="12" width="3" height="28" fill={color} />
  </svg>
);

export default EnkiIcon;
