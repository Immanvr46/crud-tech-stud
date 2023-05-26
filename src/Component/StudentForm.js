import React, { useState } from 'react';

const StudentForm = ({ student, onSave, onCancel }) => {
  const [name, setName] = useState(student ? student.name : '');
  const [grade, setGrade] = useState(student ? student.grade : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && grade) {
      const newStudent = {
        id: student ? student.id : Date.now(),
        name,
        grade
      };

      onSave(newStudent);
      setName('');
      setGrade('');
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
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <button type="submit">{student ? 'Update' : 'Add'}</button>
      {student && <button onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default StudentForm;
