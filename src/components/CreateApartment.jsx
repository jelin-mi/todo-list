import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateApartment() {
  const [form, setForm] = useState({
    image: '',
    title: '',
    pricePerDay: '',
  });

  const navigate = useNavigate();

  const handleForm = e => {
    setForm(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit', form);

    axios
      .post('https://ironbnb-m3.herokuapp.com/apartments', form)
      .then(() => {
        navigate('/');
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">image</label>
        <input className="border p-2" type="text" name="image" id="image" value={form.image} onChange={handleForm} />
        <label htmlFor="title">title</label>
        <input className="border p-2" type="text" name="title" id="title" value={form.title} onChange={handleForm} />
        <label htmlFor="pricePerDay">price</label>
        <input
          className="border p-2"
          type="text"
          name="pricePerDay"
          id="price"
          value={form.pricePerDay}
          onChange={handleForm}
        />
        <button type="submit">enviar</button>
      </form>
    </>
  );
}

export default CreateApartment;
