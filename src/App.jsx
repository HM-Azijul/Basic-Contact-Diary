import { useState } from 'react';

const CONTACT_FORM_INIT_STATE = {
  name: '',
  email: '',
};

const ContactForm = ({ getData }) => {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
  const { name, email } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    getData(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <br />
      <input type="submit" value={'Create New Contact'} />
    </form>
  );
};

const App = () => {
  const getData = (values) => {
    // console.log(values);
    // console.log('Calling getData Function');

    console.log(values.name);
    console.log(values.email);
  };

  return (
    <div>
      <h1>Basic Contact Diary</h1>
      <ContactForm getData={getData} />
    </div>
  );
};

export default App;
