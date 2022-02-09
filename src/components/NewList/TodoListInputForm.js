import { useState } from 'react'
import './TodoListInputForm.css'

const TodoListInputForm = (props) => {
    const curDate = new Date().toISOString().substring(0, 10);

    const [enteredContent, setEnteredContent] = useState('');
    const [enteredDate, setEnteredDate] = useState(curDate);

    const contentChangeHandler = (e) => {
        setEnteredContent(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); // 창 새로고침 방지

        // 두가지 모두 입력안했을 경우 reset
        if (enteredDate.length >= 1 && enteredContent.length >= 1) {
            const submitData = {
                id: Math.random().toString(),
                date: new Date(enteredDate),
                content: enteredContent,
            }

            props.onAddList(submitData);
        }
        setEnteredContent('');
        setEnteredDate('');
    }



    return (
        <div className="todolist-input" >
            <form
                onSubmit={submitHandler}>
                <div className='todolist-input__date'>
                    <p>date</p>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler} />
                </div>
                <div className='todolist-input__content'>
                    <p>content</p>
                    <input
                        type="text"
                        value={enteredContent}
                        onChange={contentChangeHandler} />
                </div>
                <button type="submit">등록</button>
            </form>
        </div>
    );
}

export default TodoListInputForm;