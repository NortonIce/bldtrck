import { Button, Modal } from 'react-bootstrap'
import { Completion } from '../types/Completion'
import { Problem } from '../types/Problem'
import { User } from '../types/User'

interface CompletionModalProps {
    user: User | null
    problem: Problem | null
    onClose: () => void
    onSave: (completion: Completion) => void
}

export default function CompletionModal({ user, problem, onClose, onSave }: CompletionModalProps) {
    const completeProblem = () => {
        if (!problem || !user) return
        const completion: Completion = {
            id: `${problem.id}-${user.id}`,
            problemId: problem.id,
            climberId: user.id,
            completionDate: new Date().toISOString()
        }
        onSave(completion)
        onClose()
    }

    return (
        <Modal show={!!problem && !!user} onHide={onClose}>
            <Modal.Header>Confirm completion</Modal.Header>
            <Modal.Body>
                <p>
                    Are you sure you want to mark {problem?.gym} - {problem?.type} as completed for{' '}
                    {user?.name}?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={completeProblem}>Complete</Button>
                <Button onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
