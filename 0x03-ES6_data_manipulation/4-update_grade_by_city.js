export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter(({ location }) => location === city)
    .map((x) => {
      const gradeobj = newGrades.filter((grade) => grade.studentId === x.id);
      const { grade = 'N/A' } = gradeobj.length > 0 ? gradeobj[0] : {};
      return { ...x, grade };
    });
}
