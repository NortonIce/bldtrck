'use client'
import { Droppable, DroppableProvided } from '@hello-pangea/dnd'
import DraggableProblem from './DraggableProblem'
import { Problem } from 'types/Problem'

interface ProblemsListProps {
    name: string
    problems: Problem[]
}

export default function ProblemsList({ name, problems }: ProblemsListProps) {
    return (
        <div className="h-full w-full bg-white shadow-lg rounded-lg p-6">
            <Droppable droppableId={name}>
                {(provided: DroppableProvided) => (
                    <div
                        ref={provided.innerRef}
                        className="flex flex-col h-full items-center overflow-y-auto "
                        {...provided.droppableProps}>
                        <div className="w-full ">
                            {problems?.map((problem, index) => (
                                <DraggableProblem
                                    problem={problem}
                                    index={index}
                                    key={index}
                                    draggableId={name + '-' + problem.id}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </Droppable>
        </div>
    )
}
