import { useState } from 'react';

const CONTACT_FORM_INIT_STATE = {
  name: '',
  email: '',
};

const ContactForm = () => {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });

  const { name, email } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  return (
    <form>
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
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <input type="submit" value={'Create New Contact'} />
    </form>
  );
};

const App = () => {
  return (
    <div>
      <h1>Basic Contact Diary</h1>
      <ContactForm />
    </div>
  );
};

export default App;
