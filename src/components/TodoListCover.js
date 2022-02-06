import TodoList from "./TodoList";
import "./TodoListCover.css";
import AddButton from "../UI/AddButton";

const TodoListCover = (props) => {
  const DummyItem = props.items.map((it) => (
    <TodoList key={it.id} content={it.content} date={it.date} />
  ));

  return (
    <div className="todolist_cover">
      {DummyItem}
      <AddButton />
    </div>
  );
};

export default TodoListCover;
