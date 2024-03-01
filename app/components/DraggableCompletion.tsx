'use client'
import { Draggable } from '@hello-pangea/dnd'
import { Completion } from '../types/Completion'
interface DraggableCompletionProps {
    draggableId: string
    completion: Completion
    index: number
}

export default function DraggableCompletion({
    completion,
    draggableId,
    index
}: DraggableCompletionProps) {
    return (
        <Draggable draggableId={draggableId} key={draggableId} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <div>
                        <div className="flex flex-col items-center bg-orange-200 m-4 p-4 rounded-lg shadow-sm">
                            {completion.id}
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}
