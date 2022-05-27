import { useState } from 'react';

const CONTACT_FORM_INIT_STATE = {
  name: '',
  email: '',
};

const ContactForm = ({ getContact }) => {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
  const { name, email } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    getContact(values);
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
  const [contacts, setContacts] = useState([]);

  const getContact = (contact) => {
    // console.log(values);
    // console.log('Calling getData Function');
    // console.log('Printing from App Component');
    // console.log(values.name);
    // console.log(values.email);

    setContacts([].concat(contacts, contact));
  };

  return (
    <div>
      <h1>Basic Contact Diary</h1>
      <ContactForm getContact={getContact} />
    </div>
  );
};

export default App;
