import { useAlert } from '../context/AlertContext';

function Box({ size = 36, color = '#000' }) {
  const { showAlerts } = useAlert();
  const style = {
    width: size + 'px',
    height: size + 'px',
    backgroundColor: color,
  };

  // 颜色复制到剪切板
  function copy() {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        showAlerts(`✅ ${color} 已复制到剪切板`, 3000, color);
      })
      .catch((err) => {
        showAlerts('❌ 颜色复制失败:' + err.message);
      });
  }

  return (
    <span
      className={`inline-block rounded-sm transition-all duration-200 cursor-pointer hover:scale-150 hover:shadow-md`}
      style={style}
      title={color}
      onClick={copy}
    ></span>
  );
}

export default Box;
