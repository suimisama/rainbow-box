export function SvgIcons({ children, size, color }) {
  const styles = {
    display: 'inline-block',
    verticalAlign: 'middle',
    fill: color || 'currentColor',
    width: size || '1em',
    height: size || '1em',
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      style={styles}
    >
      {children}
    </svg>
  );
}
