import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const location = useLocation();
  const currentItem = location.pathname.split('/').pop().replace(/%20/g, ' ');
  return (
    <div className="content">
      <div className="row" style={{ paddingTop: "15px" }}>
        <div className="col-9 d-none d-md-block">
          <h2 style={{ fontSize: "16px" }}>
            <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <i className="fas fa-bars fa-lg" style={{ color: "red", paddingRight: "15px" }}></i>
                <li className="breadcrumb-item">
                  <a href={`/Home#/Kanbas/Courses/${course._id}/Home`}>Course {course.name}</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {currentItem}
                </li>
              </ol>
            </nav>
          </h2>
        </div>
        <div className="col-3 d-none d-md-block">
          <button className="btn btn-secondary float-end">
            <i className="fas fa-glasses" style={{ color: "black" }}> Student View</i>
          </button>
        </div>
      </div>
      <hr />

      <CourseNavigation />
      <div>
        <div
          className="position-absolute bottom-0 end-0"
          style={{
            left: "320px",
            top: "90px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;