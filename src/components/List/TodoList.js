import { useState } from "react";
import './TodoList.css'

const TodoList = (props) => {
    const curYear = props.date.getFullYear();
    const curMonth = props.date.getMonth() + 1;
    const curDate = props.date.getDate();
    const date = curYear + " 년 " + curMonth + " 월 " + curDate + " 일 ";

    return (
        <div className="todolist" onClick={() => props.onDelList(props.id)}>
            <h2>{props.content}</h2>
            <h2>{date}</h2>
        </div>
    );
}

export default TodoList;