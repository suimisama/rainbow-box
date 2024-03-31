import { QRCode } from 'antd';

function CurrentBox({ size, color, onClick }) {
  const style = {
    width: size + 'px',
    height: size + 'px',
    backgroundColor: color,
  };
  return (
    <div className="flex flex-col">
      <QRCode value={color} color={color} />
      {/* <div
        style={style}
        className="inline-block transition-all duration-200 cursor-pointer current-box shadow-md"
        onClick={onClick}
      >
        <span style={style}></span>
      </div> */}
      <span className="font-semibold mt-3" style={{ color }}>
        {color}
      </span>
    </div>
  );
}

export default CurrentBox;
