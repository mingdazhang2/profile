
import React, { useState, useEffect, useMemo } from 'react';
import useSearchDebounce from './useSearchDebounce.js'

export default function Filter(props) {

  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const [search2, setSearch2] = useSearchDebounce();
  const handleChange =(e) => {
    setSearch2(e.target.value)
    
  }
  const filteredUsers2 =  props.users.filter((user) => {
        console.log('Filter2 function is running ...');
        return user.name.toLowerCase().includes(search2.toLowerCase());
      })
  
  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

   const filteredUsers = useMemo(
     () =>
     props.users.filter((user) => {
         console.log('Filter function is running ...');
         return user.name.toLowerCase().includes(search.toLowerCase());
       }),
     [props.users, search]
   );
    return (
      <div>
        <input type="text" value={text} onChange={handleText} />
        <button type="button" onClick={handleSearch}>
          Search
        </button>

        <List list={filteredUsers} />

        <input onChange={handleChange}/>
        <List list={filteredUsers2} />

      </div>
    );
    
}
const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};