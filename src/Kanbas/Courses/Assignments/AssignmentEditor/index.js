import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} from "../assignmentsReducer";
import * as client from "../client.js";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const isNewAssignment = assignmentId === "new";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = async () => {
    client.createAssignments(courseId, assignment).then((assignment) => {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    });
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleUpdate = async () => {
    client.updateAssignment(assignment).then(() => {
      dispatch(updateAssignment(assignment));
    });
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div style={{ maxWidth: "690px" }}>
      <h2>Assignment Name</h2>
      <input
        id="assignment-name"
        value={assignment.title}
        className="form-control mb-2"
        style={{ maxWidth: "690px" }}
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, title: e.target.value }))
        }
      />
      <textarea
        value={assignment.description}
        className="form-control mb-2 mt-3"
        rows="3"
        style={{ maxWidth: "690px" }}
      ></textarea>
      <div
        className="row text-center"
        style={{ maxWidth: "800px", paddingTop: "20px" }}
      >
        <div
          className="col"
          style={{ marginRight: "-95px", paddingRight: 0, paddingLeft: "30px" }}
        >
          <label className="form-label">Points</label>
        </div>
        <div className="col" style={{ marginLeft: "-40px", paddingLeft: 0 }}>
          <div style={{ width: "400px" }}>
            <input
              type="number"
              max="100"
              className="form-control"
              id="points"
              value="100"
            />
          </div>
        </div>
      </div>
      <div className="row" style={{ maxWidth: "700px", paddingTop: "20px" }}>
        <div className="col" style={{ marginRight: 0, paddingRight: 0 }}>
          <label
            className="form-label"
            style={{ paddingLeft: 200, marginRight: 0 }}
          >
            Assign
          </label>
        </div>
        <div
          className="border col"
          style={{ marginLeft: "-100px", paddingLeft: 0 }}
        >
          <div style={{ paddingTop: "10px", paddingLeft: "10px" }}>
            <strong>Due</strong>
          </div>
          <div style={{ paddingLeft: "20px" }}>
            <input
              class="form-control"
              type="date"
              style={{ width: "350px" }}
            />
          </div>
          <div className="row" style={{ paddingBottom: "20px" }}>
            <div class="col">
              <div style={{ paddingTop: "10px", paddingLeft: "22px" }}>
                <strong>Available from</strong>
              </div>
              <div style={{ paddingLeft: "20px" }}>
                <input
                  class="form-control"
                  type="date"
                  style={{ width: "140px" }}
                />
              </div>
            </div>
            <div class="col">
              <div style={{ paddingTop: "10px", paddingLeft: "22px" }}>
                <strong>Until</strong>
              </div>
              <div style={{ paddingLeft: "20px" }}>
                <input
                  class="form-control"
                  type="date"
                  style={{ width: "140px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ maxWidth: "740px" }} />

      <button
        onClick={isNewAssignment ? handleSave : handleUpdate}
        className="btn btn-danger float-end"
      >
        Save
      </button>

      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-secondary float-end me-1"
      >
        Cancel
      </Link>
    </div>
  );
}

export default AssignmentEditor;