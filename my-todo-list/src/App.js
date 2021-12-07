import './App.css';
import { useState } from 'react';

import List from './List';

function App() {
  const [currentItem, setCurrentItem] = useState('');

  const onChangeHandler = (e) => {
    // console.log(e.target.value);
    setCurrentItem(e.target.value);
  };

  const [itemList, setItemList] = useState([]);

  const addItemToList = () => {
    setItemList([...itemList, { key: Date.now(), item: currentItem }]);
    setCurrentItem('');
    // console.log(itemList);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>To-Do List Using React Hooks</h1>
        <div className='wrapper'>
          <div className='input-wrapper'>
            <input type='text' value={currentItem} onChange={onChangeHandler} />
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={setItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
