export default class HolbertonCourse {
	constructor(name, length, students) {
		if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students))
			{
            throw new Error('Invalid input types.');
			}
		
		this._name = name;
		this._length = length;
		this._students = students;
		
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		if (typeof newName !== 'string') {
			throw new Error ('Name must be a string');
		}
		this._name = newName;
	}
	get length() {
		return this._length;
	}

	set length(newLength) {
        if (typeof newLength !== 'number') {
            throw new Error('Length must be a number');
        }
        this._length = newLength;
    }
	get students() {
		return this._students;
	}

	set students(newStudents) {
        if (!Array.isArray(newStudents)) {
            throw new Error('Invalid type');
        }
        this._students = newStudents;
    }
}