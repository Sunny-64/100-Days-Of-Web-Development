import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  const [textareaExpanded, setTextareaExpanded] = useState(false); 
  function expand(){
    setTextareaExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
      {textareaExpanded && <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          onClick={expand}
          row = {textareaExpanded ? 5 : 1} 
          style = {textareaExpanded ? {height : "100px"} : null}
        />
        <Zoom in={textareaExpanded ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
