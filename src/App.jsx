import { useState } from 'react';
import './index.css';
import Box from './ui/Box';
import Button from './ui/Button';
import { getRandomColor } from './utilities/helpers';

function App() {
  let [randomColors, setRandomColors] = useState(createColors());
  function createColors() {
    let colors = [];
    for (let i = 0; i < 36 * 3; i++) {
      const color = getRandomColor();
      colors.push(color);
    }
    return colors;
  }
  function handleUpdateColors() {
    const colors = createColors();
    setRandomColors(colors);
  }

  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center h-full p-4 flex-wrap">
        <div className="flex items-center gap-4 mb-6 translate-all flex-wrap w-2/3">
          {randomColors.map((color, index) => (
            <Box color={color} key={index} />
          ))}
        </div>
        <Button onClick={handleUpdateColors}>随机颜色</Button>
      </div>
    </div>
  );
}

export default App;
