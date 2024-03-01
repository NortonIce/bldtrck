'use client'
import { useEffect, useState } from 'react'
import IngredientsList from './components/IngredientsList'
import {
    DragDropContext,
    Droppable,
    Draggable,
    DroppableProvided,
    DraggableProvided
} from '@hello-pangea/dnd'
import { Ingredient } from './types/Ingredient'

export default function Home() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])

    useEffect(() => {
        fetch('/api/ingredients')
            .then((res) => res.json())
            .then((data) => {
                setIngredients(data?.meals?.slice(0, 11) || [])
            })
    }, [])

    const onDragEnd = () => {}

    return (
        <main className="bg-white">
            <div className="h-screen flex flex-col">
                <div>Your meal here</div>
                <div className="flex-grow">Large Region</div>
                <div className="flex h-2/3">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className="flex-grow w-1/2">
                            <IngredientsList name="left" ingredients={ingredients} />
                        </div>
                        <div className="flex-grow w-1/2">
                            <IngredientsList name="right" ingredients={ingredients} />
                        </div>
                    </DragDropContext>
                </div>
            </div>
        </main>
    )
}
