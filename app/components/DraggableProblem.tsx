'use client'
import { Draggable } from '@hello-pangea/dnd'
import { Problem } from '../types/Problem'

interface DraggableProblemsProps {
    draggableId: string
    problem: Problem
    index: number
}

export default function DraggableProblem({ problem, draggableId, index }: DraggableProblemsProps) {
    return (
        <Draggable draggableId={draggableId} key={draggableId} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <div>
                        <div className="flex flex-col items-center bg-orange-200 m-4 p-4 rounded-lg shadow-sm">
                            {problem.gym} - {problem.type}
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}
