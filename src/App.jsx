import { useState } from 'react';
import ContactForm from './components/ContactForm';
import Table from './components/Table';

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
      <Table contacts={contacts} />
    </div>
  );
};

export default App;
