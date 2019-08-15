import React, { useState } from 'react';
import Team from './Team';


const TeamForm = props => {
    const [ teamList, setTeamList ] = useState([])

    return(
        <div>
            <h2>Join our team!</h2>
            <form></form>
        </div>
    )
}




/* const NoteForm = props => {
  console.log(props);
  const [note, setNote] = useState({ title: "", body: "" });

  const changeHandler = event => {
    // const newObj = {...note}
    // newObj[event.target.name] = event.target.value;
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    const newNote = {
      ...note,
      id: Date.now()
    };
    props.addNewNote(newNote);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Note Title</label>
      <input
        type="text"
        name="title"
        placeholder="Note Title"
        value={note.title}
        onChange={changeHandler}
      />

      <label htmlFor="body">Note Body</label>
      <textarea
        name="body"
        placeholder="Type Your Note Here"
        value={note.body}
        onChange={changeHandler}
      />

      <button type="submit">Add Note</button>
    </form>
  );
}; */

export default TeamForm