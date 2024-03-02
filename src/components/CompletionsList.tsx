'use client'
import { Droppable, DroppableProvided } from '@hello-pangea/dnd'
import { Completion } from 'types/Completion'
import DraggableCompletion from './DraggableCompletion'

interface CompletionsListProps {
    name: string
    completions: Completion[]
}

export default function CompletionsList({ name, completions }: CompletionsListProps) {
    return (
        <div className="h-full w-full bg-white shadow-lg rounded-lg p-6">
            <Droppable droppableId={name}>
                {(provided: DroppableProvided) => (
                    <div
                        ref={provided.innerRef}
                        className="flex flex-col h-full items-center overflow-y-auto "
                        {...provided.droppableProps}>
                        <div className="w-full ">
                            {completions?.map((completion, index) => (
                                <DraggableCompletion
                                    completion={completion}
                                    index={index}
                                    key={index}
                                    draggableId={name + '-' + completion.id}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </Droppable>
        </div>
    )
}
