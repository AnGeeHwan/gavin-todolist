import { useState } from 'react';
import './App.css';
import TodoListCover from './components/TodoListCover';
import CurrentDate from './UI/CurrentDate';

const App = () => {

  const [addList, setAddList] = useState(false);

  const DummyList = [
    { id: 'e1', content: '일어나기', date: new Date('2022-02-03') },
    { id: 'e2', content: '일어나기1', date: new Date('2022-02-04') },
  ];



  return (
    <div>
      <CurrentDate />
      <TodoListCover items={DummyList} />      
    </div>
  );
}

export default App;
