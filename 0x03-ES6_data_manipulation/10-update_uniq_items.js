export default function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [i, q] of inputMap) {
    inputMap.set(i, q === 1 ? 100 : q);
  }

  return inputMap;
}
