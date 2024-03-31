import { BoxProvider } from '../context/BoxContext';
import DisplayBox from '../features/Box/DisplayBox';
import RainbowBox from '../features/Box/RainbowBox';

function AppLayout() {
  return (
    //   grid grid-cols-[auto_1fr_auto]
    <div className="h-screen">
      <BoxProvider>
        <DisplayBox />
        <RainbowBox />
      </BoxProvider>
    </div>
  );
}

export default AppLayout;
