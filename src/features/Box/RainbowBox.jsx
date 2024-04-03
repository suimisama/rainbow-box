import { DEFAULT_BLOCK_NUMS, DEFAULT_BLOCK_SIZE } from '../../config';

import { SvgIcons } from '../../ui/SvgIcons';
import { useBox } from '../../context/BoxContext';
import Box from './Box';
import Draggable from '../../ui/Draggable';

function RainbowBox() {
  const { nums, randomColors, size, dispatch } = useBox();
  const gap = size * 0.5;
  const style = {
    gap: `${gap}px`,
  };

  return (
    <div className="flex flex-col justify-center items-center flex-wrap my-4">
      <div
        className="flex justify-start items-center mb-6 translate-all flex-wrap w-2/3 w-[1440px]"
        style={style}
      >
        {randomColors.slice(0, nums).map((color, index) => (
          <Draggable id={color} data={{ type: 'box' }} key={index}>
            <Box
              size={size}
              color={color}
              key={index}
              onClick={() =>
                dispatch({ type: 'updateCurrentColor', payload: color })
              }
            />
          </Draggable>
        ))}
      </div>

      <div className="flex flex-row items-center gap-4 tracking-wider">
        {/* <Button type="primary" size="middle" className="font-semibold">
          <div className="flex flex-row items-center gap-2">
            <SvgIcons>
              <path
                fill="currentColor"
                d="M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68l-3.75-3.75l1.83-1.83a.996.996 0 0 1 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"
              ></path>
            </SvgIcons>
            定制
          </div>
        </Button>
        <Button
          className="font-semibold"
          onClick={() => {
            const newNums = Math.floor(Math.random() * DEFAULT_BLOCK_NUMS) + 36;
            dispatch({ type: 'updateNums', payload: newNums });
          }}
        >
          随机个数
        </Button>
        <Button
          className="font-semibold"
          onClick={() => dispatch({ type: 'updateColors' })}
        >
          随机颜色
        </Button>
        <Button
          className="font-semibold"
          onClick={() => {
            const newSize = Math.floor(Math.random() * DEFAULT_BLOCK_SIZE) + 24;
            dispatch({ type: 'updateSize', payload: newSize });
          }}
        >
          随机大小
        </Button>
        <Button
          className="font-semibold"
          size="middle"
          onClick={() => {
            const newNums = Math.floor(Math.random() * DEFAULT_BLOCK_NUMS) + 36;
            const newSize = Math.floor(Math.random() * DEFAULT_BLOCK_SIZE) + 24;
            dispatch({
              type: 'updateAll',
              payload: { nums: newNums, size: newSize },
            });
          }}
        >
          全随机
        </Button> */}
      </div>
    </div>
  );
}

export default RainbowBox;
