import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListApartments() {
  const [listOfApartment, setApartments] = useState([]);

  useEffect(() => {
    axios
      .get('https://ironbnb-m3.herokuapp.com/apartments')
      .then(response => {
        console.log('apartments', response.data);
        setApartments(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Link to="/apartments/create">create new</Link>
      <h1>Apartments</h1>
      <ul>
        {listOfApartment.map(apartment => {
          return (
            <li key={apartment._id}>
              <Link to={`/apartments/${apartment._id}`}>{apartment.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
