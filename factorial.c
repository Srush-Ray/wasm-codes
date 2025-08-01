#include <stdio.h>
#include <time.h> 

long long factorialC(int n) {
    if (n < 0) {
        printf("Error: Factorial is not defined for negative numbers.\n");
        return -1;
    }
    if (n == 0 || n == 1) {
        return 1;
    }
    long long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

int main() {
    int num;
    long long result;
    int test_numbers[] = {60}; 
    int num_tests = sizeof(test_numbers) / sizeof(test_numbers[0]);
    // Record start time
    clock_t start_time = clock();
    for (int i = 0; i < num_tests; i++) {
        num = test_numbers[i];
        result = factorialC(num);
        if (result != -1) { // Check if no error occurred
            printf("Factorial of %d: %lld\n", num, result);
        }
    }
    // Record end time
    clock_t end_time = clock();
    // Calculate elapsed time
    double elapsed_time_ms = (double)(end_time - start_time) * 1000.0 / CLOCKS_PER_SEC;
    printf("\n--- Test Cases Execution Time: %.2f ms ---\n", elapsed_time_ms);
    return 0;
}
