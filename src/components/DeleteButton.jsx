/* eslint-disable react/prop-types */
import { useContext } from "react";
import { db } from "../appwrite/databases";
import trash from "../icons/trash.svg";
import { NoteContext } from "../context/NoteContext";

const DeleteButton = ({ noteId }) => {
  const { setNotes } = useContext(NoteContext);

  const handleDelete = async () => {
    db.notes.delete(noteId);
    setNotes((prevState) => prevState.filter((note) => note.$id !== noteId));
  };

  return (
    <button onClick={handleDelete}>
      <img className="trash-icon" src={trash} />
    </button>
  );
};

export default DeleteButton;
