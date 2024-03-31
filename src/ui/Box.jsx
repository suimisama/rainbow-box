function Box({ size = 36, color = '#000' }) {
  const style = {
    width: size + 'px',
    height: size + 'px',
    backgroundColor: color,
  };

  return (
    <span
      className={`inline-block rounded-sm transition-all duration-200 cursor-pointer hover:scale-150`}
      style={style}
    ></span>
  );
}

export default Box;
