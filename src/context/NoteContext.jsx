/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { db } from "../appwrite/databases";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await db.notes.list();
    setNotes(response.documents);
    setLoading(false);
  };

  const contextData = { notes, setNotes, selectedNote, setSelectedNote };

  return (
    <NoteContext.Provider value={contextData}>
      {loading ? <p className="loading-text">Cargando...</p> : children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
