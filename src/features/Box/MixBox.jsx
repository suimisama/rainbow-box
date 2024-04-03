import { useBox } from '../../context/BoxContext';
import { copy } from '../../utilities/helpers';
import Box from './Box';

function MixBox() {
  const { currentColor, dispatch } = useBox();
  const styles = {
    backgroundColor: currentColor ? currentColor : '#000000',
  };

  return (
    <div>
      <Box type="display" size={96} color={currentColor} />
      <div style={{ color: currentColor }}>{currentColor}</div>
    </div>
  );
}

export default MixBox;
