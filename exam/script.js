const courseTable = document.getElementById('course-table');
const courseBody = document.getElementById('course-body');
const addCourseBtn = document.getElementById('add-course-btn');

// Add a course to the table
function addCourse(name) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;
    courseBody.appendChild(row);
}

// Add sample courses
addCourse('BCA');
addCourse('MCA');

// Add a course when the "Add Course" button is clicked
addCourseBtn.addEventListener('click', () => {
    const name = prompt('Enter the course name:');
    if (name) {
        addCourse(name);
    }
});

// Delete a course when the "Delete" button is clicked
courseTable.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.closest('tr').remove();
    }
});