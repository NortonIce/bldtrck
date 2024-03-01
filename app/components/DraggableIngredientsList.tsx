'use client'
import {
    DragDropContext,
    Droppable,
    Draggable,
    DroppableProvided,
    DraggableProvided
} from '@hello-pangea/dnd'
import DraggableIngredient from './DraggableIngredient'
import { Ingredient } from '../types/Ingredient'

interface DraggableIngredientProps {
    droppebleId: string
    draggableId: string
    ingredients: Ingredient[]
    index: number
}

export default function DraggableIngredientList({
    droppebleId,
    draggableId,
    ingredients,
    index
}: DraggableIngredientProps) {
    return (
        <Draggable draggableId={draggableId} key={draggableId} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <div className="h-10 w-1/2 bg-slate-50 shadow-md m-4">
                        <Droppable droppableId={droppebleId}>
                            {(provided: DroppableProvided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {ingredients.map((ingredient, index) => (
                                        <DraggableIngredient
                                            ingredient={ingredient}
                                            index={index}
                                            key={ingredient.idIngredient}
                                            draggableId={droppebleId + '-' + ingredient}
                                        />
                                    ))}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </div>
            )}
        </Draggable>
    )
}
