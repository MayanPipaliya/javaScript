const array = [1, 2, 2, 3, 2, 4, 5];
const target = 2;

let countOccurrences = (array, target) => {
    let count = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] === target) {
            count++;
        }
    }
    return count;
}

const result = countOccurrences(array, target);
console.log(result);
