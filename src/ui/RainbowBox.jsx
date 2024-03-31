import { useState, useReducer } from 'react';
import { getRandomColor } from '../utilities/helpers';
import Button from './Button';
import Box from './Box';

function createColors(colorNums = 108) {
  let colors = [];
  for (let i = 0; i < colorNums; i++) {
    const color = getRandomColor();
    colors.push(color);
  }
  return colors;
}
const initialState = {
  nums: 108,
  randomColors: createColors(),
  size: 36,
};
const reducer = function (state, action) {
  switch (action.type) {
    case 'updateNums':
      return {
        ...state,
        nums: action.payload,
        randomColors: createColors(action.payload),
      };
    case 'updateColors':
      return { ...state, randomColors: createColors(state.nums) };
    case 'updateSize':
      return { ...state, size: action.payload };
    case 'updateAll':
      return {
        nums: action.payload.nums,
        randomColors: createColors(action.payload.nums),
        size: action.payload.size,
      };
    default:
      return state;
  }
};
function RainbowBox() {
  const [{ nums, randomColors, size }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const gap = size * 0.5;
  const style = {
    gap: `${gap}px`,
  };

  return (
    <div className="flex flex-col justify-center items-center h-full p-4 flex-wrap">
      <div
        className="flex justify-start items-center mb-6 translate-all flex-wrap w-2/3"
        style={style}
      >
        {randomColors.slice(0, nums).map((color, index) => (
          <Box size={size} color={color} key={index} />
        ))}
      </div>
      <div className="flex flex-row items-center gap-4">
        <Button
          onClick={() => {
            const newNums = Math.floor(Math.random() * 108) + 36;
            dispatch({ type: 'updateNums', payload: newNums });
          }}
        >
          随机个数
        </Button>
        <Button onClick={() => dispatch({ type: 'updateColors' })}>
          随机颜色
        </Button>
        <Button
          onClick={() => {
            const newSize = Math.floor(Math.random() * 36) + 24;
            dispatch({ type: 'updateSize', payload: newSize });
          }}
        >
          随机大小
        </Button>
        <Button
          onClick={() => {
            const newNums = Math.floor(Math.random() * 108) + 36;
            const newSize = Math.floor(Math.random() * 36) + 24;
            dispatch({
              type: 'updateAll',
              payload: { nums: newNums, size: newSize },
            });
          }}
        >
          全随机
        </Button>
      </div>
    </div>
  );
}

export default RainbowBox;
