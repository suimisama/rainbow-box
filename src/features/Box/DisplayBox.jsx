import { useAlert } from '../../context/AlertContext';
import { useBox } from '../../context/BoxContext';
import { copy } from '../../utilities/helpers';
import CurrentBox from './CurrentBox';
import ShowColor from './ShowColor';

function DisplayBox({ size = 144 }) {
  const { currentColor } = useBox();

  const { showAlerts } = useAlert();
  function handleClick() {
    copy(currentColor)
      .then(() => {
        showAlerts(`✅ ${currentColor} 已复制到剪切板`, 3000, currentColor);
      })
      .catch((err) => {
        showAlerts('❌ 颜色复制失败:' + err.message);
      });
  }
  return (
    <div className="w-full m-32 flex items-center justify-center">
      <div className="w-[81%] flex gap-8">
        <CurrentBox color={currentColor} size={size} onClick={handleClick} />
        <ShowColor color={currentColor} />
      </div>
    </div>
  );
}

export default DisplayBox;
