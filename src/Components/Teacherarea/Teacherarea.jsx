import { useState } from 'react';
import { nanoid } from 'nanoid';

// Dummy data for initial assignments
const initialAssignments = [
  {
    id: nanoid(),
    title: 'Assignment 1',
    details: 'Write a 500-word essay on a given topic.',
    dueDate: '2024-08-01',
    status: 'pending', // or 'submitted', 'graded', etc.
  },
  {
    id: nanoid(),
    title: 'Assignment 2',
    details: 'Complete exercises 1 to 5 in the textbook.',
    dueDate: '2024-08-10',
    status: 'submitted',
  },
];

const TeacherArea = () => {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [newAssignment, setNewAssignment] = useState({ title: '', details: '', dueDate: '' });

  // Handle form submission to add new assignment
  const handleAddAssignment = (e) => {
    e.preventDefault();
    if (!newAssignment.title || !newAssignment.details || !newAssignment.dueDate) return;

    const newAssignmentWithId = { ...newAssignment, id: nanoid(), status: 'pending' };
    setAssignments([...assignments, newAssignmentWithId]);
    setNewAssignment({ title: '', details: '', dueDate: '' });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment({ ...newAssignment, [name]: value });
  };

  // Delete assignment by ID
  const handleDeleteAssignment = (id) => {
    const updatedAssignments = assignments.filter((assignment) => assignment.id !== id);
    setAssignments(updatedAssignments);
  };

  // Update assignment status by ID
  const handleUpdateStatus = (id, newStatus) => {
    const updatedAssignments = assignments.map((assignment) =>
      assignment.id === id ? { ...assignment, status: newStatus } : assignment
    );
    setAssignments(updatedAssignments);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Teacher Dashboard</h1>

      {/* Form to add new assignment */}
      <form onSubmit={handleAddAssignment} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Assignment Title"
            value={newAssignment.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <textarea
            name="details"
            placeholder="Assignment Details"
            value={newAssignment.details}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <input
            type="date"
            name="dueDate"
            value={newAssignment.dueDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none">
            Add Assignment
          </button>
        </div>
      </form>

      {/* List of assignments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="border border-gray-300 p-4 rounded-md">
            <h2 className="text-xl font-bold">{assignment.title}</h2>
            <p className="text-gray-600 mb-2">{assignment.details}</p>
            <p className="mb-2">
              <span className="font-semibold">Due Date:</span> {assignment.dueDate}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Status:</span> {assignment.status}
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => handleUpdateStatus(assignment.id, 'submitted')}
                className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none"
              >
                Submit
              </button>
              <button
                onClick={() => handleDeleteAssignment(assignment.id)}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherArea;
