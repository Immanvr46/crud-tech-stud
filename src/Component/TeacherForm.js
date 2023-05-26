import React, { useState } from 'react';

const TeacherForm = ({ teacher, onSave, onCancel }) => {
  const [name, setName] = useState(teacher ? teacher.name : '');
  const [subject, setSubject] = useState(teacher ? teacher.subject : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && subject) {
      const newTeacher = {
        id: teacher ? teacher.id : Date.now(),
        name,
        subject
      };

      onSave(newTeacher);
      setName('');
      setSubject('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <button type="submit">{teacher ? 'Update' : 'Add'}</button>
      {teacher && <button onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default TeacherForm;

// import React, { useState } from 'react';

// const TeacherForm = ({ teacher, onSave, onCancel }) => {
//   const [name, setName] = useState(teacher ? teacher.name : '');
//   const [subject, setSubject] = useState(teacher ? teacher.subject : '');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (name && subject) {
//       const newTeacher = {
//         id: teacher ? teacher.id : Date.now(),
//         name,
//         subject
//       };

//       onSave(newTeacher);
//       setName('');
//       setSubject('');
//     }
//   };
  
  
  