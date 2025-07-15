# wasm-codes
1. emcc hello.c -s EXIT_RUNTIME=1 -o hello.js
2. gcc hello.c -o hello    
3. emcc matrix_multiply.cpp -O3 -s WASM=1 -s EXPORTED_FUNCTIONS="['_multiplyMatrices']" -s MODULARIZE=1 -s EXPORT_ES6=1 -s EXIT_RUNTIME=1 -s FORCE_FILESYSTEM=1 -o matrix_multiply.js
