'use client'
import {
    DragDropContext,
    Droppable,
    Draggable,
    DroppableProvided,
    DraggableProvided
} from '@hello-pangea/dnd'
import DraggableIngredient from './DraggableIngredient'

interface IngredientsListProps {
    name: string
}

export default function IngredientsList({ name }: IngredientsListProps) {
    const ingredients = [
        'apple',
        'banana',
        'carrot',
        'dill',
        'eggplant',
        'fennel',
        'grape',
        'honey'
    ]

    return (
        <div>
            <Droppable droppableId={name}>
                {(provided: DroppableProvided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {ingredients.map((ingredient, index) => (
                            <DraggableIngredient
                                ingredient={ingredient}
                                index={index}
                                key={ingredient}
                                draggableId={name + '-' + ingredient}
                            />
                        ))}
                        {/* {provided.placeholder} */}
                    </div>
                )}
            </Droppable>
        </div>
    )
}
