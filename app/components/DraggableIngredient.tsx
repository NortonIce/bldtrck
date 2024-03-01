'use client'
import { Draggable } from '@hello-pangea/dnd'
import { Problem } from '../types/Problem'

interface DraggableIngredientProps {
    draggableId: string
    ingredient: Problem
    index: number
}

export default function DraggableIngredient({
    ingredient,
    draggableId,
    index
}: DraggableIngredientProps) {
    return (
        <Draggable draggableId={draggableId} key={draggableId} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <div>
                        <div className="flex flex-col items-center bg-orange-200 m-4 p-4 rounded-lg shadow-lg">
                            {ingredient.uid}
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}
