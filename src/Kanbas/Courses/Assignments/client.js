import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000";
const COURSES_URL = `${API_BASE}/api/courses`;
const ASSSIGNMENTS_URL = `${API_BASE}/api/assignments`;
export const updateAssignment = async (assignment) => {
  const response = await axios.put(
    `${ASSSIGNMENTS_URL}/${assignment._id}`,
    assignment
  );
  return response.data;
};
export const deleteAssignments = async (assignmentId) => {
  const response = await axios.delete(`${ASSSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};
export const createAssignments = async (courseId, assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};
export const findAllAssignmentsForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};