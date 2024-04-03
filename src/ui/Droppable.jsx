import { useDroppable } from '@dnd-kit/core';

function Droppable({ id, data = null, children }) {
  const { setNodeRef } = useDroppable({
    id,
    data,
  });

  return <div ref={setNodeRef}>{children}</div>;
}

export default Droppable;
