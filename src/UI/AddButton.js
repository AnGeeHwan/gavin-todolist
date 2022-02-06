import "./AddButton.css";

const AddButton = () => {
  return (
    <div className="add-button">
      <button
        onClick={() => {
          console.log("click");
        }}
      >
        {" "}
        add List{" "}
      </button>
    </div>
  );
};

export default AddButton;
