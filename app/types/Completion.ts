// Represents a successful completion of a problem (boulder)
// exists seperately from the problem to allow for multiple completions of the same problem by different users
export type Completion = {
    id: string
    climberId: string
    problemId: string
    completionDate: string
}
