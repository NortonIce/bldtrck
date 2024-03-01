'use client'
import {
    DragDropContext,
    Droppable,
    Draggable,
    DroppableProvided,
    DraggableProvided
} from '@hello-pangea/dnd'
import DraggableIngredient from './DraggableIngredient'
import DraggableIngredientList from './DraggableIngredientsList'
import { Ingredient } from '../types/Ingredient'
import { useEffect, useState } from 'react'

interface IngredientsListProps {
    name: string
    ingredients: Ingredient[]
}

export default function IngredientsList({ name, ingredients }: IngredientsListProps) {
    return (
        <div className="h-full w-full bg-white shadow-lg rounded-lg p-6">
            <Droppable droppableId={name}>
                {(provided: DroppableProvided) => (
                    <div
                        ref={provided.innerRef}
                        className="flex flex-col h-full  items-center overflow-y-auto "
                        {...provided.droppableProps}>
                        <div className="w-full ">
                            {ingredients?.map((ingredient, index) => (
                                <DraggableIngredient
                                    ingredient={ingredient}
                                    index={index}
                                    key={index}
                                    draggableId={name + '-' + ingredient.idIngredient}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </Droppable>
        </div>
    )
}
