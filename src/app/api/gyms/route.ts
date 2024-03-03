import { Gym } from '@/types/Gym'

export async function GET() {
    try {
        const data: Gym[] = [
            {
                id: '1',
                name: 'Noborock (Shibuya)',
                location: 'Tokyo'
            },
            {
                id: '2',
                name: 'B-Pump (Akihabara)',
                location: 'Tokyo'
            },
            {
                id: '3',
                name: 'Climb Tokyo (Shinjuku)',
                location: 'Tokyo'
            },
            {
                id: '4',
                name: 'Climb Tokyo (Shinagawa)',
                location: 'Tokyo'
            }
        ]
        return Response.json(data)
    } catch (error) {
        return Response.error()
    }
}
