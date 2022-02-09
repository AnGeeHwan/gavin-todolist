import { useState } from 'react';
import './App.css';
import TodoListCover from './components/List/TodoListCover';
import CurrentDate from './components/UI/CurrentDate';

const DummyList = [
  { id: 'e1', content: '일어나기', date: new Date('2022-02-03') },
  { id: 'e2', content: '일어나기1', date: new Date('2022-02-04') },
];

const App = () => {

  const [addList, setAddList] = useState(DummyList);

  const addListHandler = (listData) => {
    setAddList((prevList) => {
      return [listData, ...prevList];
    });
  }

  const delListHandler = (delListData) => {
    setAddList((prevList) => {
      return prevList.filter((it) => it.id !== delListData);
    });
  }


  return (
    <div className='App'>
      <CurrentDate />
      <TodoListCover items={addList} onAddList={addListHandler} onDelList={delListHandler} />
    </div>
  );
}

export default App;
