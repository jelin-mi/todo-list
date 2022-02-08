import { useState } from 'react';

function Input({ onAdd }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });
  // const [description, setDescription] = useState('');

  const handleForm = e => {
    // console.log(e.target.name);
    setForm(prev => {
      // console.log('prev', prev);
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleClick = () => {
    onAdd(form);
    setForm({
      name: '',
      description: '',
    });
  };

  console.log('render Input', form);
  return (
    <>
      <input
        name="name"
        className="rounded-md border border-gray-500 p-2"
        type="text"
        value={form.name}
        onChange={handleForm}
      />
      <input
        name="description"
        className="rounded-md border border-gray-500 p-2"
        type="text"
        value={form.description}
        onChange={handleForm}
      />
      <button onClick={handleClick}>add</button>
    </>
  );
}

export default Input;
