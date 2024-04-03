import { useAlert } from '../../context/AlertContext';
import { copy } from '../../utilities/helpers';
import { memo } from 'react';

const Box = memo(function ({
  type = 'normal',
  size = 36,
  color = '#000',
  onClick = () => {},
}) {
  const { showAlerts } = useAlert();
  const styles = {
    width: size + 'px',
    height: size + 'px',
    backgroundColor: type === 'normal' || 'display' ? color : 'transparent',
    border: type === 'add' ? '3px dashed #000' : 'none',
  };

  // 颜色复制到剪切板
  function handleClick(e) {
    e.preventDefault();
    // 处理传入的自定义函数
    onClick();
    // 复制颜色代码
    if (type === 'normal' || type === 'display') {
      copy(color)
        .then(() => {
          showAlerts(`✅ ${color} 已复制到剪切板`, 3000, color);
        })
        .catch((err) => {
          showAlerts('❌ 颜色复制失败:' + err.message);
        });
    }
    if (type === 'add') {
    }
  }

  return (
    <span
      className={`inline-block rounded-sm transition-all duration-200 cursor-pointer ${
        type === 'normal' ? 'hover:scale-150 hover:shadow-md' : ''
      }`}
      style={styles}
      title={color}
      onClick={handleClick}
    ></span>
  );
});

export default Box;
