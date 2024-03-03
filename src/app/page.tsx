'use client'
import { useEffect, useMemo, useState } from 'react'
import ProblemsList from 'components/ProblemsList'
import { DragDropContext, OnDragEndResponder } from '@hello-pangea/dnd'
import { Problem } from 'types/Problem'
import { Completion } from 'types/Completion'
import CompletionsList from 'components/CompletionsList'
import CompletionModal from 'components/CompletionModal'
import { User } from 'types/User'
import ReactSelectWrapper from '@/components/ReactSelectWrapper'
import ReactSelect from 'react-select'

export default function Home() {
    const [problems, setIngredients] = useState<Problem[]>([])

    const [completedProblem, setCompletedProblem] = useState<Problem | null>(null)

    const [filter, setFilter] = useState<any[]>([])

    const capitalizeFirstLetter = (str: string) => {
        if (!str) return str
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const constructFilterOptions = (problems: Problem[]) => {
        const vLevelOptions = problems?.map((problem) => ({
            value: problem.vLevel,
            label: `V-${problem.vLevel}`,
            group: 'V-Level'
        }))
        const gymOptions = problems?.map((problem) => ({
            value: problem.gym,
            label: capitalizeFirstLetter(problem.gym),
            group: 'Gym'
        }))
        return [
            { label: 'V-Level', options: vLevelOptions },
            { label: 'Gym', options: gymOptions }
        ]
    }

    const options = useMemo(() => {
        return constructFilterOptions(problems)
    }, [problems])

    const filterProblems = (problems: Problem[], filter: any[]) => {
        const result = problems.filter((problem) => {
            if (filter.length === 0) return true
            return filter.some((f) => {
                if (f.group === 'V-Level') {
                    return f.value === problem.vLevel
                }
                if (f.group === 'Gym') {
                    return f.value?.toLowerCase() === problem.gym?.toLowerCase()
                }
                return true
            })
        })
        console.log(result, filter, problems)
        return result
    }

    const filteredProblems = useMemo(() => {
        return filterProblems(problems, filter)
    }, [problems, filter])

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

    const onFilterChange = (value: any) => {
        console.log(value)
        setFilter(value)
    }

    return (
        <main>
            <div className="flex w-full items-center flex-col">
                <div className="flex h-3/4 w-full md:w-1/2 items-center">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className="flex-grow m-2 md:m-5 bg-white rounded-lg">
                            <div className="py-2 px-4 text-lg font-bold">Tracked problems</div>
                            <div>
                                <ReactSelect
                                    value={filter}
                                    options={options}
                                    onChange={onFilterChange}
                                    isMulti
                                    instanceId={'filter'}
                                />
                            </div>
                            <ProblemsList name="right" problems={filteredProblems} />
                        </div>
                    </DragDropContext>
                </div>
            </div>
        </main>
    )
}
