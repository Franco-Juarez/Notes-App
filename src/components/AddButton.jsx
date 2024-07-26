import { useContext, useRef } from "react";
import { db } from "../appwrite/databases";
import colors from "../assets/colors.json";
import { NoteContext } from "../context/NoteContext";
import plusImage from "../icons/plus.svg";

const AddButton = () => {
  const { setNotes } = useContext(NoteContext);
  const startingPos = useRef(10);

  const addNote = async () => {
    const payload = {
      position: JSON.stringify({
        x: startingPos.current,
        y: startingPos.current,
      }),
      colors: JSON.stringify(colors[0]),
    };

    startingPos.current += 10;

    const response = await db.notes.create(payload);
    setNotes((prevState) => [response, ...prevState]);
  };

  return (
    <div className="add-btn" onClick={addNote}>
      <img src={plusImage} />
    </div>
  );
};

export default AddButton;
