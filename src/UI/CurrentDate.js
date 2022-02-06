import "./CurrentDate.css";

const CurrentDate = () => {
  const day = ["일", "월", "화", "수", "목", "금", "토"];

  const curYear = new Date().getFullYear();
  const curMonth = new Date().getMonth() + 1;
  const curDate = new Date().getDate();
  const curDay = day[new Date().getDay()];

  const date = curYear + " 년 " + curMonth + " 월 " + curDate + " 일 " + curDay;

  return (
    <div className="current-date">
      <header>
        <p>{date}</p>
      </header>
    </div>
  );
};

export default CurrentDate;
