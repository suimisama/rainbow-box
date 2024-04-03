import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import AppLayout from './ui/AppLayout';
import { AlertProvider } from './context/AlertContext';
import { DndContext, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { useBox } from './context/BoxContext';
import { blendHexColors } from './utilities/helpers';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: '/',
  },
]);

function App() {
  const { currentColor, dispatch } = useBox();
  //拖拽传感器，在移动像素5px范围内，不触发拖拽事件
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5, // 按住不动移动5px 时 才进行拖拽, 这样就可以触发点击事件
      },
    })
  );
  function handleDragEnd(event) {
    const { active, over } = event;
    dispatch({
      type: 'updateCurrentColor',
      payload: blendHexColors(currentColor, active.id),
    });
    return { active, over };
    // if (over && active.data.current.supports.includes(over.data.current.type)) {
    //   console.log(active);
    // }
  }
  return (
    <AlertProvider>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <RouterProvider router={router}></RouterProvider>;
      </DndContext>
    </AlertProvider>
  );
}

export default App;
