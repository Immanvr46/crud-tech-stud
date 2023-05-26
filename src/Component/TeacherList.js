import React, { useState } from 'react';
import TeacherForm from './TeacherForm';


const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currentTeacher, setCurrentTeacher] = useState(null);
  
    const addTeacher = (teacher) => {
      setTeachers([...teachers, teacher]);
    };
  
    const deleteTeacher = (teacherId) => {
      setTeachers(teachers.filter((teacher) => teacher.id !== teacherId));
    };
  
    const editTeacher = (teacher) => {
      setEditMode(true);
      setCurrentTeacher(teacher);
    };
  
    const updateTeacher = (updatedTeacher) => {
      setTeachers(
        teachers.map((teacher) =>
          teacher.id === updatedTeacher.id ? updatedTeacher : teacher
        )
      );
      setEditMode(false);
      setCurrentTeacher(null);
    };
  
    
    return (
        <div>
          {editMode ? (
            <TeacherForm
              teacher={currentTeacher}
              onSave={updateTeacher}
              onCancel={() => setEditMode(false)}
            />
          ) : (
            <TeacherForm onSave={addTeacher} />
          )}
    
          <h3>Teacher List</h3>
          <div className="list-group">
            {teachers.length === 0 ? (
              <p>No teachers found.</p>
            ) : (
              teachers.map((teacher) => (
                <div className="list-group-item" key={teacher.id}>
                  <span>{teacher.name}</span> ({teacher.subject})
                  <button
                    className="btn btn-sm btn-danger float-right ml-2"
                    onClick={() => deleteTeacher(teacher.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-sm btn-primary float-right"
                    onClick={() => editTeacher(teacher)}
                  >
                    Edit
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      );
    };
    
    export default TeacherList;
