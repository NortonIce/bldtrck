'use client'
import {
    DragDropContext,
    Droppable,
    Draggable,
    DroppableProvided,
    DraggableProvided
} from '@hello-pangea/dnd'
import DraggableProblem from './DraggableProblem'
import { Problem } from '../types/Problem'

interface DraggableIngredientProps {
    droppebleId: string
    draggableId: string
    problems: Problem[]
    index: number
}

export default function DraggableIngredientList({
    droppebleId,
    draggableId,
    problems,
    index
}: DraggableIngredientProps) {
    return (
        <Draggable draggableId={draggableId} key={draggableId} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <div className="bg-slate-50 min-h-64 shadow-md m-4">
                        <h1>Meal name</h1>
                        <Droppable droppableId={droppebleId}>
                            {(provided: DroppableProvided) => (
                                <div
                                    ref={provided.innerRef}
                                    className="flex flex-col h-full"
                                    {...provided.droppableProps}>
                                    {problems.map((ingredient, index) => (
                                        <DraggableProblem
                                            problem={ingredient}
                                            index={index}
                                            key={ingredient.id}
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
