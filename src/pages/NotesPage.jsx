import { useContext } from "react";
import NoteCard from "../components/NoteCard";
import { NoteContext } from "../context/NoteContext";
import ControlPanel from "../components/ControlPanel";

const NotesPage = () => {
  const { notes } = useContext(NoteContext);

  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} />
      ))}
      <ControlPanel />
    </div>
  );
};

export default NotesPage;
