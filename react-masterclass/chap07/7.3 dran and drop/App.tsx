import React from "react";
// Droppable, Draggable 의 자식은 함수여야한다
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"

function App() {
    const onDragEnd = () => {};
    return ( 
        <DragDropContext onDragEnd={onDragEnd}>
            <div> 
                <Droppable droppableId="one">
                  {(magic) => (
                    <ul ref={magic.innerRef} {...magic.droppableProps}>
                        <Draggable draggableId="first" index={0}>
                            {(magic) =>
                                <li ref={magic.innerRef} {...magic.draggableProps}>
                                    <span {...magic.dragHandleProps}>🔥</span>
                                    One
                                </li>} 
                        </Draggable>
                        <Draggable draggableId="secone" index={1}>
                            {(magic) =>
                                <li ref={magic.innerRef} {...magic.draggableProps}>
                                    <span {...magic.dragHandleProps}>🔥</span>
                                    Two
                                </li>} 
                        </Draggable>
                    </ul>
                  )}
                </Droppable>
            </div>
        </DragDropContext>
    )
}

export default App;