import React from 'react';
import './List.css';

const List = ({ itemList, updateItemList }) => {
  //   console.log(itemList);
  const deleteItem = (key) => {
    const newList = itemList.filter((item) => item.key !== key);
    updateItemList(newList);
  };
  return (
    <div>
      {itemList.map((itemObj) => {
        return (
          <div className='item' key={itemObj.key}>
            <p>{itemObj.item}</p>
            <button onClick={() => deleteItem(itemObj.key)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
