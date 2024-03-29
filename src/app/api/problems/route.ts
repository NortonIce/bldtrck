import { Problem } from 'types/Problem'

export async function GET() {
    try {
        // should replace it with proper database
        const data: Problem[] = [
            {
                'id': '1',
                'vLevel': 1,
                'type': 'Type A',
                'image': 'image1.jpg',
                'description': 'Description of Problem 1',
                'gym': 'Gym 1'
            },
            {
                'id': '2',
                'vLevel': 2,
                'type': 'Type B',
                'image': 'image2.jpg',
                'description': 'Description of Problem 2',
                'gym': 'Gym 2'
            },
            {
                'id': '3',
                'vLevel': 3,
                'type': 'Type C',
                'image': 'image3.jpg',
                'description': 'Description of Problem 3',
                'gym': 'Gym 3'
            },
            {
                'id': '4',
                'vLevel': 4,
                'type': 'Type D',
                'image': 'image4.jpg',
                'description': 'Description of Problem 4',
                'gym': 'Gym 4'
            },
            {
                'id': '5',
                'vLevel': 5,
                'type': 'Type E',
                'image': 'image5.jpg',
                'description': 'Description of Problem 5',
                'gym': 'Gym 5'
            },
            {
                'id': '6',
                'vLevel': 6,
                'type': 'Type F',
                'image': 'image6.jpg',
                'description': 'Description of Problem 6',
                'gym': 'Gym 6'
            },
            {
                'id': '7',
                'vLevel': 7,
                'type': 'Type G',
                'image': 'image7.jpg',
                'description': 'Description of Problem 7',
                'gym': 'Gym 7'
            },
            {
                'id': '8',
                'vLevel': 8,
                'type': 'Type H',
                'image': 'image8.jpg',
                'description': 'Description of Problem 8',
                'gym': 'Gym 8'
            },
            {
                'id': '9',
                'vLevel': 9,
                'type': 'Type I',
                'image': 'image9.jpg',
                'description': 'Description of Problem 9',
                'gym': 'Gym 9'
            },
            {
                'id': '10',
                'vLevel': 10,
                'type': 'Type J',
                'image': 'image10.jpg',
                'description': 'Description of Problem 10',
                'gym': 'Gym 10'
            },
            {
                'id': '11',
                'vLevel': 11,
                'type': 'Type K',
                'image': 'image11.jpg',
                'description': 'Description of Problem 11',
                'gym': 'Gym 11'
            },
            {
                'id': '12',
                'vLevel': 12,
                'type': 'Type L',
                'image': 'image12.jpg',
                'description': 'Description of Problem 12',
                'gym': 'Gym 12'
            },
            {
                'id': '13',
                'vLevel': 13,
                'type': 'Type M',
                'image': 'image13.jpg',
                'description': 'Description of Problem 13',
                'gym': 'Gym 13'
            },
            {
                'id': '14',
                'vLevel': 14,
                'type': 'Type N',
                'image': 'image14.jpg',
                'description': 'Description of Problem 14',
                'gym': 'Gym 14'
            },
            {
                'id': '15',
                'vLevel': 15,
                'type': 'Type O',
                'image': 'image15.jpg',
                'description': 'Description of Problem 15',
                'gym': 'Gym 15'
            }
        ]
        return Response.json(data)
    } catch (error) {
        return Response.error()
    }
}
