'use client'
import { useEffect, useState } from 'react'
import ProblemsList from './components/ProblemsList'
import {
    DragDropContext,
    Droppable,
    Draggable,
    DroppableProvided,
    DraggableProvided,
    OnDragEndResponder
} from '@hello-pangea/dnd'
import { Problem } from './types/Problem'
import { Completion } from './types/Completion'
import CompletionsList from './components/CompletionsList'
import CompletionModal from './components/CompletionModal'
import { User } from './types/User'

export default function Home() {
    const [problems, setIngredients] = useState<Problem[]>([])

    const [completions, setCompletions] = useState<Completion[]>([])

    // Should be replaced with a real user
    const [user, setUser] = useState<User | null>({ id: '1', name: 'John Doe' })

    const [completedProblem, setCompletedProblem] = useState<Problem | null>(null)

    useEffect(() => {
        fetch('/api/problems')
            .then((res) => res.json())
            .then((data) => {
                setIngredients(data || [])
            })
    }, [])

    const onDragEnd: OnDragEndResponder = (value) => {
        console.log(value)
        if (value?.destination?.droppableId !== 'left') return
        setCompletedProblem(problems[value.source.index])
    }

    const completeProblem = (completion: Completion) => {}

    return (
        <main className="bg-white">
            <div className="h-screen flex flex-col">
                <div className="flex-grow">
                    <CompletionModal
                        user={user}
                        problem={completedProblem}
                        onClose={() => setCompletedProblem(null)}
                        onSave={completeProblem}
                    />
                </div>
                <div className="flex h-3/4">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className="flex-grow p-5 w-1/2">
                            <input
                                type="text"
                                placeholder="Filter"
                                className="w-full p-2 shadow-sm focus:shadow-outline border rounded-lg px-4"
                            />
                            <CompletionsList name="left" completions={completions} />
                        </div>
                        <div className="flex-grow p-5 w-1/2">
                            <input
                                type="text"
                                placeholder="Filter"
                                className="w-full p-2 shadow-sm focus:shadow-outline border rounded-lg px-4"
                            />
                            <ProblemsList name="right" problems={problems} />
                        </div>
                    </DragDropContext>
                </div>
            </div>
        </main>
    )
}
