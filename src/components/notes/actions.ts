
export type Action = {type: "ADD_REVIEW", payload: string}


export const addNote = (note: string): Action => ({
    type: "ADD_REVIEW",
    payload: note
})