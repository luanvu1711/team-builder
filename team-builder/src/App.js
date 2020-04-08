import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
function App() {
  const [notesState, setNotesState] = useState([]);
 const addNoteHandler = newNote => {
   setNotesState([...notesState, newNote]);
 };

 return (
   <div className="App">
     <h1>My Team</h1>
     <NoteForm addNote={addNoteHandler} />
     <Notes notes={notesState} />
   </div>
 );
}

export default App;
