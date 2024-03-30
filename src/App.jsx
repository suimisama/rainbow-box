import { useEffect, useState } from 'react';
import './index.css';
import Box from './ui/Box';
import Button from './ui/Button';
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function App() {
  let [randomColors, setRandomColors] = useState([]);
  function updateColors() {
    let colors = [];
    for (let i = 0; i < 25; i++) {
      const color = getRandomColor();
      colors.push(color);
    }
    setRandomColors(colors);
  }
  useEffect(function () {
    updateColors();
  }, []);
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center h-full p-4 flex-wrap">
        <div className="flex justify-center items-center gap-4 mb-6">
          {randomColors.map((color, index) => (
            <Box color={color} key={index} />
          ))}
        </div>
        <Button onClick={updateColors}>随机颜色</Button>
      </div>
    </div>
  );
}

export default App;
