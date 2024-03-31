import { createContext, useContext, useReducer } from 'react';
import { DEFAULT_BLOCK_NUMS, DEFAULT_BLOCK_SIZE } from '../config';
import { createColors, getRandomColor } from '../utilities/helpers';

const BoxContext = createContext();
const initialState = {
  nums: DEFAULT_BLOCK_NUMS,
  randomColors: createColors(),
  size: DEFAULT_BLOCK_SIZE,
  currentColor: '#000',
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
        ...state,
        size: action.payload.size,
        nums: action.payload.nums,
        randomColors: createColors(action.payload.nums),
      };
    case 'updateCurrentColor':
      return {
        ...state,
        currentColor: action.payload,
      };
    default:
      return state;
  }
};
function BoxProvider({ children }) {
  const [{ nums, randomColors, size, currentColor }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <BoxContext.Provider
      value={{ nums, randomColors, size, currentColor, dispatch }}
    >
      {children}
    </BoxContext.Provider>
  );
}

function useBox() {
  const context = useContext(BoxContext);
  if (context === undefined)
    throw new Error('BoxContext不能在BoxProvider之外的地方使用!');
  return context;
}

export { BoxProvider, useBox };
