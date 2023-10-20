import db from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div className="col-11">
      <div className="row">
        <div className="col" style={{ marginBottom: "-30px" }}></div>
        <div className="col-auto" style={{ marginBottom: "-30px" }}>
          <button className="btn btn-secondary">
            <i className="fas fa-file-import" style={{ paddingRight: "4px" }}></i>
            Import
          </button>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-file-export" style={{ paddingRight: "4px" }}></i>
            Export
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
          </button>
        </div>
      </div>

      <div style={{ paddingTop: "30px" }}>
        <hr />
      </div>
      
      <div className="col"></div>
      <div className="row">
        <div className="col">
          <strong>Student Names</strong>
          <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
            <select className="form-select">
              <option>Search Students</option>
            </select>
          </div>
          <button className="btn btn-secondary">
            <i className="fas fa-filter"></i> Apply Filters
          </button>
        </div>

        <div className="col">
          <strong>Assignment Names</strong>
          <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
            <select className="form-select">
              <option>Search Assignments</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="table-responsive" style={{ paddingTop: "10px" }}>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Student Name</th>
                {assignments.map((assignment) => (
                  <th scope="col" style={{ textAlign: "center" }}>
                    {assignment.title}
                    <br />
                    Out of 100
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment) => {
                const user = db.users.find((user) => user._id === enrollment.user);
                return (
                  <tr>
                    <td>{user.firstName} {user.lastName}</td>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find(
                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                      return (<td>{grade?.grade || ""}</td>);
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grades;