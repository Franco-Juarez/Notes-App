/* eslint-disable react/prop-types */
import { useEffect, useState, useRef, useContext } from "react";
import { bodyParser, setNewOffset, setZindex } from "../utils/utils";
import { db } from "../appwrite/databases";
import DeleteButton from "./DeleteButton";
import { NoteContext } from "../context/NoteContext";

const NoteCard = ({ note }) => {
  const [position, setPosition] = useState(JSON.parse(note.position));
  const [saving, setSaving] = useState(false);
  const keyUpTimer = useRef(null);
  const { setSelectedNote } = useContext(NoteContext);

  const colors = JSON.parse(note.colors);
  const body = bodyParser(note.body);
  const textAreaRef = useRef(null);
  const cardRef = useRef(null);
  let mouseStartPos = { x: 0, y: 0 };
  useEffect(() => {
    setZindex(cardRef.current);
  }, []);

  const mouseDown = (e) => {
    if (e.target.className === "card-header") {
      mouseStartPos.x = e.clientX;
      mouseStartPos.y = e.clientY;

      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);

      setZindex(cardRef.current);
      setSelectedNote(note);
    }
  };

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);

    const newPosition = setNewOffset(cardRef.current);
    saveData("position", newPosition);
  };

  const saveData = async (key, value) => {
    const payload = { [key]: JSON.stringify(value) };
    try {
      await db.notes.update(note.$id, payload);
    } catch (error) {
      console.log(error);
    }
    setSaving(false);
  };

  const handleKeyUp = async () => {
    setSaving(true);

    if (keyUpTimer.current) {
      clearTimeout(keyUpTimer.current);
    }

    keyUpTimer.current = setTimeout(() => {
      saveData("body", textAreaRef.current.value);
    }, 2000);
  };

  const mouseMove = (e) => {
    const mouseMoveDir = {
      x: mouseStartPos.x - e.clientX,
      y: mouseStartPos.y - e.clientY,
    };
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    const newPosition = setNewOffset(cardRef.current, mouseMoveDir);

    setPosition(newPosition);
  };

  return (
    <div
      ref={cardRef}
      className="card"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        onMouseDown={mouseDown}
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
      >
        <DeleteButton noteId={note.$id} />
        {saving && (
          <div className="card-saving">
            <p style={{ color: colors.colorText }}>Guardando...</p>
          </div>
        )}
      </div>
      <div className="card-body">
        <textarea
          onKeyUp={handleKeyUp}
          onFocus={() => {
            setZindex(cardRef.current);
            setSelectedNote(note);
          }}
          ref={textAreaRef}
          style={{ color: colors.colorText }}
          defaultValue={body}
        ></textarea>
      </div>
    </div>
  );
};

export default NoteCard;
