function Box({ color = '#000' }) {
  const style = {
    backgroundColor: color,
  };
  return (
    <span
      className="inline-block w-9 h-9 rounded-sm transition-all duration-200 cursor-pointer hover:scale-150"
      style={style}
    ></span>
  );
}

export default Box;
