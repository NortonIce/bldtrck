'use client'
import { useEffect, useState } from 'react'
import ProblemsList from 'components/ProblemsList'
import { DragDropContext, OnDragEndResponder } from '@hello-pangea/dnd'
import { Problem } from 'types/Problem'
import { Completion } from 'types/Completion'
import CompletionsList from 'components/CompletionsList'
import CompletionModal from 'components/CompletionModal'
import { User } from 'types/User'

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

    const completeProblem = (completion: Completion) => {
        setCompletions([...completions, completion])
    }

    return (
        <main className="">
            <div className="flex w-full items-center flex-col">
                <CompletionModal
                    user={user}
                    problem={completedProblem}
                    onClose={() => setCompletedProblem(null)}
                    onSave={completeProblem}
                />
                <div className="flex h-3/4 w-full md:w-1/2 items-center">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className="flex-grow m-5 bg-white rounded-lg">
                            <div className="py-2 px-4 text-lg font-bold">Tracked problems</div>
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
