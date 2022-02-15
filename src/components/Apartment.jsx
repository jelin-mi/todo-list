import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Apartment() {
  const params = useParams();
  const [apartment, setApartment] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getApartment = async () => {
      try {
        const { data } = await axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${params.id}`);
        setApartment(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getApartment();
  }, [params.id]);

  console.log('render');

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <>
      <h2>Title</h2>
      <p>{apartment.title}</p>
      <p>price: {apartment.pricePerDay}</p>
    </>
  );
}
