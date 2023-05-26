import React from 'react';
import StudentList from './StudentList';
import TeacherList from './TeacherList';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  return (
    <div className="container">
      <h1 className="text-center">Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Students</h2>
          <StudentList />
        </div>
        <div className="col-md-6">
          <h2>Teachers</h2>
          <TeacherList />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;





// import React from 'react';
// import StudentList from './StudentList';
// import TeacherList from './TeacherList';

// const AdminDashboard = () => {
//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <h2>Students</h2>
//       <StudentList />
//       <h2>Teachers</h2>
//       <TeacherList />
//     </div>
//   );
// };

// export default AdminDashboard;
