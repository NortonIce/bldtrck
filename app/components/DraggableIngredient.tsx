'use client'
import { Draggable } from '@hello-pangea/dnd'

interface DraggableIngredientProps {
    draggableId: string
    ingredient: string
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
                    <div className="h-10 w-1/2 bg-orange-400 shadow-md m-4">{ingredient}</div>
                </div>
            )}
        </Draggable>
    )
}
