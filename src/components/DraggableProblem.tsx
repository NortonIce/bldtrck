'use client'
import { Draggable } from '@hello-pangea/dnd'
import { Problem } from 'types/Problem'

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
                        <div className="flex flex-col md:flex-row items-center shadow-sm mb-4 bg-white">
                            <div className="md:w-1/2">
                                <img
                                    // src={
                                    //     'https://sun9-65.userapi.com/impf/c858432/v858432209/8ef59/vS4FR9ZGycI.jpg?size=2048x1536&quality=96&sign=e55f1dc254e12fcebfb16b8b7455e6e3&type=album'
                                    // }
                                    src={
                                        'https://sun9-69.userapi.com/impg/vuFwvmCOr9HiEzdA0T0Ox15vBhiichKhBd99Og/pvwHnkQKEiY.jpg?size=2560x1920&quality=95&sign=c26d7c0577e8f60804218acd38d30d0f&type=album'
                                    }
                                    alt={'Placeholder'}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-4 md:w-1/2">
                                <h2 className="text-2xl font-bold mb-4">{problem.description}</h2>
                                <p>
                                    {problem.gym} - {problem.type}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}
