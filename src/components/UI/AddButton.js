import "./AddButton.css";

const AddButton = (props) => {

  let btnText = props.setAddList.addList === true ? "접어두기" : "등록 폼 열기";

  return (
    <div className="add-button">
      <button
        onClick={() => (
          props.setAddList.setAddList(!props.setAddList.addList)
        )}
      >
        {btnText}
      </button>
    </div>
  );
};

export default AddButton;
