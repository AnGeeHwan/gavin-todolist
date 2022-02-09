import { useState } from "react";

import TodoList from "./TodoList";
import AddButton from "./../UI/AddButton";
import TodoListInputForm from "../NewList/TodoListInputForm";

import "./TodoListCover.css";

const TodoListCover = (props) => {
  const DummyItem = props.items.map((it) => (
    <TodoList key={it.id} content={it.content} date={it.date} id={it.id} onDelList={props.onDelList} />
  ));

  const [addList, setAddList] = useState(false);

  return (
    <div className="todolist_cover">
      {addList && <TodoListInputForm onAddList={props.onAddList} />}
      {DummyItem}
      <AddButton setAddList={{ addList, setAddList }} />
    </div>
  );
};

export default TodoListCover;
