function analyzeArray(arr) {
    if (arr.length === 0) {
        return { midElements: [], smallest: null, largest: null }; // Handle empty array
    }

    const midElements = [];
    const n = arr.length;

    // Finding mid elements
    if (n % 2 === 1) {
        midElements.push(arr[Math.floor(n / 2)]); // For odd length
    } else {
        midElements.push(arr[n / 2 - 1], arr[n / 2]); // For even length
    }

    // Finding smallest and largest elements
    const smallest = Math.min(...arr);
    const largest = Math.max(...arr);

    return { midElements, smallest, largest };
}

// Example usage
const array = [3, 1, 4, 1, 5, 9, 2];
const { midElements, smallest, largest } = analyzeArray(array);
console.log("Mid Elements:", midElements);
console.log("Smallest Element:", smallest);
console.log("Largest Element:", largest);

function productAndSort(arr) {
    if (arr.length === 0) {
        return { product: 0, sortedArray: [] }; // Handle empty array
    }

    // Calculate the product
    const product = arr.reduce((acc, num) => acc * num, 1);

    // Sort the array
    const sortedArray = arr.slice().sort((a, b) => a - b);

    return { product, sortedArray };
}

// Example usage
const numericArray = [3, 1, 4, 1, 5, 9];
const { product, sortedArray } = productAndSort(numericArray);
console.log("Product of Array:", product);
console.log("Sorted Array:", sortedArray);