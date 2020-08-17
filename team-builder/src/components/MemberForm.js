import React, { useState } from 'react';

const MemberForm = (props) => {
  const [member, setMember] = useState({ name: props.name, email: "", role: "" });

  const handleChanges = (event) => {
    const newStateObj = { ...member, [event.target.name]: event.target.value };
    setMember(newStateObj);
  };


  const submitForm = (event) => {
    event.preventDefault(); // prevent default <form> submit behavior
    props.addNewMember(member); // pull addNewNotes from props, pass NoteForm state and add to App state with array spread
    setMember({ name: "", email: "", role: "" }); // reset form after adding to app state.
  };

  // console.log("member", member);
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Enter name"
        name="name"
        value={member.name}
        onChange={handleChanges}
      />

      <label htmlFor="email">Email</label>
      <textarea
        id="email"
        placeholder="Add your email here"
        name="email"
        onChange={handleChanges}
        value={member.email}
      />

      <label htmlFor="role">Role</label>
      <textarea
        id="role"
        placeholder="Add your role here"
        name="role"
        onChange={handleChanges}
        value={member.role}
      />


      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;