import { Link } from "react-router-dom";
import db from "../Database";
import "./styles.css";

function Dashboard() {
  const courses = db.courses;

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div style={{ fontSize: "40px" }}>Dashboard</div>
            <hr />
            <div style={{ paddingLeft: "2%" }}>
              <h3>Published Courses ({courses.length})</h3>
              <hr />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="d-flex flex-row flex-wrap">
              {courses.map((course) => (
                <div key={course._id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="card">
                    <img src="../images/card.png" alt="Course Thumbnail" />
                    <div className="card-body">
                      <h6 className="card-link text-truncate">
                        <Link to={`/Kanbas/Courses/${course._id}`}>
                          {course.name}
                        </Link>
                      </h6>
                      <span>{course.number}</span>
                      <p className="text-truncate">
                        <small>{`${course.startDate} to ${course.endDate}`}</small>
                      </p>
                      <i className="fas fa-file-signature"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;