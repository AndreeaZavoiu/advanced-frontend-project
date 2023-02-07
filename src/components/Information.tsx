import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteHotel } from '../lib/controller';
import { NotesState } from './notes/notesReducer';
import { NewHotelType } from '../types/hotel'
import Edit from './Edit';
import NewNoteInput from './NewNoteInput';
import { addNote } from './notes/actions';

interface IProps {
    hotel: NewHotelType;
    detailsPage?: boolean
}

function Information({hotel, detailsPage} : IProps) {
    console.log(hotel);
    const [editDescription, setEditDescription] = useState(false);
    const navigate = useNavigate();

    const notes = useSelector<NotesState, NotesState["notes"]>( (state) => state.notes );
    const dispatch = useDispatch();
    const onAddNote = (note: string) => {
        dispatch(addNote(note));
    }


  return (
    <div className='hotel-preview'>
        <div className="image-container">
            <img className="location-image" src={hotel.location} alt="Hotel" />
            <div className="highlights">
                <div className="highlights-text">
                    <h2>{hotel.title}</h2>
                    <p className="region">{hotel.region}</p>
                </div>
                <div className="highlights-price">
                    <h2 className="per-night">£{hotel.perNight}</h2>
                    <p>per night</p>
                </div>
            </div>
        </div>

   

       {/* Description */}
       <div className="description">
            <span className="reviews">
                <strong className="review-number">{hotel.stars} stars</strong> (based on {hotel.review} reviews)
            </span>
            <hr/>
            <span className="feature">Main Feature: {hotel?.feature}</span>
            {detailsPage ? (
            <>
                <p className="description-text">
                {hotel.description}{" "}
                <strong
                    className="edit-text"
                    onClick={() => setEditDescription(!editDescription)}
                >
                    Edit Description
                </strong>
                {editDescription ? (
                    <Edit
                    editDescription={editDescription}
                    setEditDescription={setEditDescription}
                    id={hotel.id}
                    />
                ) : null}
                </p>
                <button onClick={() => deleteHotel(hotel.id, navigate)}>
                Delete Hotel
                </button>
            </>
            ) : (
            <Link to={`/hotels/${hotel.id}`}>
                <div>
                    <button className="moreinfo-btn">View More Information</button>
                </div>
            </Link>
            )}

            <hr/>
            <div>
                <NewNoteInput addNote={onAddNote}/>
                <div className='new-notes'>
                    {notes.map( (note, idx) => {
                        console.log(note)
                        return <p key={idx}> {note} </p> 
                    })}
                </div>
                    
                    
                
            </div>
        </div>

    </div>   

  )
}

export default Information
