import HistoryBox from '../features/Box/HistoryBox';
import MixBox from '../features/Box/MixBox';
import RainbowBox from '../features/Box/RainbowBox';
import Droppable from './Droppable';
import Header from './Header';
import MainContent from './MainContent';
import SideBar from './SideBar';
import Title from './Title';

function AppLayout() {
  return (
    //   grid grid-cols-[auto_1fr_auto]
    <div className="h-screen flex">
      <SideBar>
        <Header>Rainbow</Header>
      </SideBar>

      <MainContent>
        <Droppable data={{ type: 'box' }}>
          <MixBox />
        </Droppable>
        <RainbowBox />
        <Title>历史记录</Title>
        <HistoryBox color={'#000'} />
      </MainContent>
    </div>
  );
}

export default AppLayout;
