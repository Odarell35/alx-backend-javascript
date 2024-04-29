const fs = require('fs');

function countStudents(path) {
    try {
        // Read the database file synchronously
        const data = fs.readFileSync(path, 'utf8');
        
        // Split data by lines
        const lines = data.trim().split('\n');

        // Initialize counters for each field
        const counters = {};

        // Iterate over each line (student)
        lines.forEach(line => {
            // Split the line by comma
            const fields = line.split(',');

            // Ignore empty lines
            if (fields.length > 1) {
                // Increment the counter for each field
                fields.forEach((field, index) => {
                    if (index in counters) {
                        counters[index]++;
                    } else {
                        counters[index] = 1;
                    }
                });
            }
        });

        // Log the total number of students
        console.log(`Number of students: ${lines.length}`);

        // Log the number of students in each field
        for (const [field, count] of Object.entries(counters)) {
            console.log(`Number of students in FIELD ${field}: ${count}. List: ${getFirstNames(path, parseInt(field))}`);
        }
    } catch (err) {
        // Throw an error if the database is not available
        throw new Error('Cannot load the database');
    }
}

// Helper function to get the list of first names in a specific field
function getFirstNames(path, fieldIndex) {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const firstNames = [];

    lines.forEach(line => {
        const fields = line.split(',');
        if (fields.length > 1) {
            firstNames.push(fields[fieldIndex]);
        }
    });

    return firstNames.join(', ');
}
