const start_time_js = performance.now();
function factorialJS(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (!Number.isInteger(n)) {
        return "Factorial is only defined for integers.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
        if (result > Number.MAX_SAFE_INTEGER) {
            console.warn(`Warning: Factorial of ${n} exceeds Number.MAX_SAFE_INTEGER. Result may be inaccurate.`);
        }
    }
    return result;
}
test_numbers=[60];
num_tests=test_numbers.length;
for (let i = 0; i < num_tests; i++) {
    const num = test_numbers[i];
    const result = factorialJS(num); // Assuming factorialJS is defined

    if (typeof result === 'number') { // Check if it's a valid number result
        console.log(`Factorial of ${num}: ${result}`);
    } else {
        console.log(`Factorial of ${num}: ${result}`); // Prints error message
    }
}
// Record end time
const end_time_js = performance.now();
// Calculate elapsed time
const elapsed_time_ms_js = end_time_js - start_time_js;
// Print the result
console.log(`\n---Execution Time: ${elapsed_time_ms_js.toFixed(2)} ms ---`);