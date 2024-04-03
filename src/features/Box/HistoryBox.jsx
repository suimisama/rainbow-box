import { useBox } from '../../context/BoxContext';
import Box from './Box';

function HistoryBox() {
  const { history, dispatch } = useBox();
  return (
    <div className="flex flex-col h-[440px] overflow-auto">
      {history?.map((color, index) => (
        <div
          className="flex items-center justify-between my-2 hover:shadow-md cursor-pointer transition-all duration-300"
          key={index}
          onClick={() =>
            dispatch({ type: 'updateCurrentColor', payload: color })
          }
        >
          <Box type="display" color={color} />
          <span style={{ color }}>{color}</span>
        </div>
      ))}
    </div>
  );
}

export default HistoryBox;
