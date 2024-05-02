const fs = require('fs');

function countStudents(path) {
    try {
        // Read data from file synchronously
        const data = fs.readFileSync(path, { encoding: 'utf-8' });
        const lines = data.trim().split('\n');

        // Initialize counters and student lists
        const fields = new Map();
        const students = new Map();

        // Parse each line and count students by field
        for (const line of lines) {
            if (line.trim() === '') continue; // Skip empty lines
            const [firstname, field] = line.split(',');
            fields.set(field, (fields.get(field) || 0) + 1);
            students.set(field, (students.get(field) || []).concat(firstname));
        }

        // Display results
        console.log(`Number of students: ${lines.length}`);
        for (const [field, count] of fields.entries()) {
            console.log(`Number of students in ${field}: ${count}. List: ${students.get(field).join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
