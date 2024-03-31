import Box from './Box';
import RainbowBox from './RainbowBox';

function AppLayout() {
  return (
    //   grid grid-cols-[auto_1fr_auto]
    <div className="h-screen">
      <RainbowBox />
    </div>
  );
}

export default AppLayout;
