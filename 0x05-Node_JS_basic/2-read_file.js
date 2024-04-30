const fs = require('fs');

function countStudents(path) {
    try {
	if (!fs.existsSync(path)){
		throw new Error('Cannot load the database');	}
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.trim().split('\n');
        const counters = {};
        lines.forEach(line => {
            const fields = line.split(',');
            if (fields.length > 1) {
                fields.forEach((field, index) => {
                    if (index in counters) {
                        counters[index]++;
                    } else {
                        counters[index] = 1;
                    }
                });
            }
        });
        console.log(`Number of students: ${lines.length}`);
        for (const [field, count] of Object.entries(counters)) {
            console.log(`Number of students in FIELD ${field}: ${count}. List: ${getFirstNames(path, parseInt(field))}`);
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}
module.exports = countStudents;
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
module.exports = getFirstNames;
