export default function updateUniqueItems(inputMap) {
    if (!(inputMap instanceof Map)) {
        throw new Error('Cannot process');
    }

    const updatedMap = new Map();
    
    for (const [i, q] of inputMap) {
        updatedMap.set(i, q === 1 ? 100 : q);
    }

    return updatedMap;
}
