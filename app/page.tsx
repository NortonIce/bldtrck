'use client'
import IngredientsList from './components/IngredientsList'
import {
    DragDropContext,
    Droppable,
    Draggable,
    DroppableProvided,
    DraggableProvided
} from '@hello-pangea/dnd'

async function getData() {
    const res = await fetch('www.themealdb.com/api/json/v1/1/list.php?i=list')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default function Home() {
    const onDragEnd = () => {}

    return (
        <main className="">
            <div className="h-screen flex flex-col">
                <div>Your meal here</div>
                {/* Large region on the top */}
                <div className="flex-grow bg-blue-500">Large Region</div>

                {/* Smaller regions on the lower half */}
                <div className="flex h-2/3">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className="flex-grow bg-red-500">
                            <IngredientsList name="left" />
                        </div>
                        <div className="flex-grow bg-green-500">
                            <IngredientsList name="right" />
                        </div>
                    </DragDropContext>
                </div>
            </div>
        </main>
    )
}
