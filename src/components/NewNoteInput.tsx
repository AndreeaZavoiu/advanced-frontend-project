import React, { ChangeEvent } from 'react'

interface NewNoteInputProps {
    addNote(note:string): void;
}

function NewNoteInput({addNote} : NewNoteInputProps) {
    const [note, setNote] = React.useState("")

    const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value);
    }

    const onAddNoteClick = () => {
        addNote(note)
        setNote("")
    }

    return (
        <div className='notes'>
            <input onChange={updateNote} type="text" name="note" placeholder="Write a note"/>
            <button className="add-notes" onClick={onAddNoteClick}>Add note</button>
        </div>
    )
}

export default NewNoteInput