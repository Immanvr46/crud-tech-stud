import React, { useState } from 'react';
import StudentForm from './StudentForm';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (studentId) => {
    setStudents(students.filter((student) => student.id !== studentId));
  };

  const editStudent = (student) => {
    setEditMode(true);
    setCurrentStudent(student);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setEditMode(false);
    setCurrentStudent(null);
  };

  const cancelEdit = () => {
    setEditMode(false);
    setCurrentStudent(null);
  };

  return (
    <div>
      {editMode ? (
        <StudentForm
          student={currentStudent}
          onSave={updateStudent}
          onCancel={cancelEdit}
        />
      ) : (
        <StudentForm onSave={addStudent} />
      )}

      <h3>Student List</h3>
      <div className="list-group">
        {students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          students.map((student) => (
            <div className="list-group-item" key={student.id}>
              <span>{student.name}</span> ({student.grade})
              <button
                className="btn btn-sm btn-danger float-right ml-2"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-sm btn-primary float-right"
                onClick={() => editStudent(student)}
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

export default StudentList;




// import React, { useState } from 'react';
// import StudentForm from './StudentForm';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [currentStudent, setCurrentStudent] = useState(null);

//   const addStudent = (student) => {
//     setStudents([...students, student]);
//   };

//   const deleteStudent = (studentId) => {
//     setStudents(students.filter((student) => student.id !== studentId));
//   };

//   const editStudent = (student) => {
//     setEditMode(true);
//     setCurrentStudent(student);
//   };

//   const updateStudent = (updatedStudent) => {
//     setStudents(
//       students.map((student) =>
//         student.id === updatedStudent.id ? updatedStudent : student
//       )
//     );
//     setEditMode(false);
//     setCurrentStudent(null);
//   };

  
//   return (
//     <div>
//       {editMode ? (
//         <StudentForm
//           student={currentStudent}
//           onSave={updateStudent}
//           onCancel={() => setEditMode(false)}
//         />
//       ) : (
//         <StudentForm onSave={addStudent} />
//       )}

//       <h3>Student List</h3>
//       <div className="list-group">
//         {students.length === 0 ? (
//           <p>No students found.</p>
//         ) : (
//           students.map((student) => (
//             <div className="list-group-item" key={student.id}>
//               <span>{student.name}</span> ({student.grade})
//               <button
//                 className="btn btn-sm btn-danger float-right ml-2"
//                 onClick={() => deleteStudent(student.id)}
//               >
//                 Delete
//               </button>
//               <button
//                 className="btn btn-sm btn-primary float-right"
//                 onClick={() => editStudent(student)}
//               >
//                 Edit
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentList;

