export default function getStudentIdsSum(arr) {
  return arr.reduce((sum, { id }) => sum + id, 0);
}
