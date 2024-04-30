const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n');

            const nonEmptyLines = lines.filter(line => line.trim() !== '');

            const counts = {};
            nonEmptyLines.forEach(line => {
                const fields = line.split(',');
                const firstName = fields[0].trim();
                const field = fields[fields.length - 1].trim();
                
                if (field in counts) {
                    counts[field]++;
                } else {
                    counts[field] = 1;
                }
            });

            Object.keys(counts).forEach(field => {
                console.log(`Number of students in ${field}: ${counts[field]}. List: ${nonEmptyLines.filter(line => line.endsWith(field)).map(line => line.split(',')[0].trim()).join(', ')}`);
            });

            const totalStudents = nonEmptyLines.length;
            console.log(`Number of students: ${totalStudents}`);

            resolve();
        });
    });
}

module.exports = countStudents;
