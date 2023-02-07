import React, { useEffect, useState } from 'react'
import { hotelsCollection } from '../lib/controller'
import { onSnapshot, DocumentData, QuerySnapshot} from 'firebase/firestore'
import { NewHotelType } from '../types/hotel';
import Information from './Information';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {

  const [hotels, setHotels] = useState<NewHotelType[]>([]);

  useEffect( () => onSnapshot(hotelsCollection, (snapshot) => {
    setHotels(
      snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      })
    );
  }), []
  );

  console.log(hotels, "hotels");
  return (
    <div className='card'>
      <h2 className="title">All Hotels</h2>
      {hotels && hotels.length ? (
        <div>
            {hotels?.map((hotel) => (
              <Information key={hotel.id} hotel={hotel} />
            ))}
        </div>
      ) : (
        <h2 className='no-hotels'>There are no hotels. Please add one</h2>
      )}
    </div>
  );
}

export default HomePage
