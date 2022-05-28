import { useState } from 'react';

const Table = ({ contacts }) => {
  const [filter, setFilter] = useState('All'); // it's a local state //useState('All') - default value 'All', None, Home, Office
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const [searchForm, setSearchForm] = useState('');
  const searchCB = (contact) =>
    contact.name.includes(searchForm) || contact.email.includes(searchForm); //searchCB means search call back

  let filterContacts = [];
  if (filter === 'All') {
    // filterContacts = contacts;
    filterContacts = searchForm ? contacts.filter(searchCB) : contacts;
  }
  //else if (filter === 'None') { filterContacts = contacts.filter((contact) => contact.group === ''); }
  else {
    filterContacts = contacts.filter(
      (contact) => contact.group === filter && searchCB(contact)
    );
  }

  return (
    <>
      <div>
        <br />
        Filters:
        <select value={filter} onChange={handleChange}>
          <option value="All">All</option>
          <option value="">None</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
        <input
          type="search"
          placeholder="search"
          value={searchForm}
          onChange={(e) => setSearchForm(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {filterContacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
