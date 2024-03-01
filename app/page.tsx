'use client'
import { useEffect, useState } from 'react'
import ProblemsList from './components/ProblemsList'
import {
    DragDropContext,
    Droppable,
    Draggable,
    DroppableProvided,
    DraggableProvided
} from '@hello-pangea/dnd'
import { Problem } from './types/Problem'
import { Completion } from './types/Completion'

export default function Home() {
    const [problems, setIngredients] = useState<Problem[]>([])

    const [completions, setCompletions] = useState<Completion[]>([])

    useEffect(() => {
        fetch('/api/problems')
            .then((res) => res.json())
            .then((data) => {
                setIngredients(data?.slice(0, 11) || [])
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
                        <div className="flex-grow p-5 w-1/2">
                            <ProblemsList name="left" problems={problems} />
                        </div>
                        <div className="flex-grow p-5 w-1/2">
                            <ProblemsList name="right" problems={problems} />
                        </div>
                    </DragDropContext>
                </div>
            </div>
        </main>
    )
}
