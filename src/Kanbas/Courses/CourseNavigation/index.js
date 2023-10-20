import { Link, useParams, useLocation } from "react-router-dom";
import db from "../../../Kanbas/Database";
import "./styles.css";

function CourseNavigation() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find((course) => course._id === courseId);

  const navItems = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings",
  ];

  function toKebabCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase().replace(/ /g, "%20");
}


  return (
    <div>
      <div
        style={{ marginBottom: "20px", maxWidth: "150px", overflow: "hidden", marginLeft: "15px"}}
      >
        <small
          style={{
            display: "inline-block",
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {course.startDate} to {course.endDate}
        </small>
      </div>
      <nav>
        <ul className="list-group" style={{ width: 186 }}>
          {navItems.map((name, index) => {
            const kebabName = toKebabCase(name);
            return (
              <li
                key={index}
                className={pathname.includes(kebabName) ? "selected" : ""}
              >
                <Link to={`/Kanbas/Courses/${courseId}/${kebabName}`}>
                  {name}
                  {[
                    "Discussions",
                    "Announcements",
                    "Pages",
                    "Files",
                    "Rubrics",
                    "Outcomes",
                    "Collaborations",
                    "Syllabus",
                  ].includes(name) && (
                    <i
                      className="fas fa-eye-slash float-end"
                      style={{ color: "black" }}
                    ></i>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default CourseNavigation;