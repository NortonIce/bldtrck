export async function GET() {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list', {
            next: { revalidate: 300 } // In seconds (5 minutes)
        })
        const data = await res.json()
        return Response.json(data)
    } catch (error) {
        return Response.error()
    }
}
