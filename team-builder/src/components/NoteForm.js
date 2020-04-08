import React, { useState } from "react";

const NoteForm = props => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: ""
  });

  const changeHandler = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    props.addNote({
      ...formState,
        id: Date.now(),
    });
          setFormState({
            name: "",
            email: "",
            role: ""
          });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={changeHandler}
        placeholder="Teammmate's Name"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        placeholder="Teammate's email"
        value={formState.email}
        onChange={changeHandler}
      />
      <label htmlFor="role">Role: </label>
      <input
      type="text"
      name="role"
      placeholder="Teammate's role"
      value={formState.role}
      onChange={changeHandler}
      />
      <button type="submit">Create Note!</button>
    </form>
  );
};

export default NoteForm;