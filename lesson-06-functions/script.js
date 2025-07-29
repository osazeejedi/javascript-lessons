// Lesson 6: Functions - Interactive JavaScript
console.log("🛠️ Welcome to Lesson 6: Functions!");
console.log("In this lesson, you'll learn to create reusable code blocks that make programming powerful and organized.");

// Global variables for function management
let userCreatedFunction = null;
let functionLibrary = [];
let selectedFunction = null;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎯 Lesson 6 loaded! Let's explore functions together.");
    
    // Show initial examples in console
    demonstrateBasicFunctions();
    updateToolkitStats();
});

// Basic function demonstrations for console learning
function demonstrateBasicFunctions() {
    console.log("\n=== 🛠️ Basic Function Examples ===");
    
    // Simple function
    console.log("\n📝 Simple Function:");
    function sayHello() {
        console.log("Hello from a function!");
        return "Greeting complete";
    }
    
    const result = sayHello();
    console.log("Function returned:", result);
    
    // Function with parameters
    console.log("\n🔧 Function with Parameters:");
    function greetPerson(name, age) {
        const message = `Hello ${name}! You are ${age} years old.`;
        console.log(message);
        return message;
    }
    
    greetPerson("Alice", 25);
    greetPerson("Bob", 30);
    
    // Arrow function
    console.log("\n➡️ Arrow Function:");
    const multiply = (a, b) => {
        console.log(`Multiplying ${a} × ${b}`);
        return a * b;
    };
    
    const product = multiply(5, 3);
    console.log("Result:", product);
    
    // Higher-order function
    console.log("\n🔄 Higher-Order Function:");
    function processNumbers(numbers, operation) {
        console.log("Processing numbers:", numbers);
        return numbers.map(operation);
    }
    
    const numbers = [1, 2, 3, 4, 5];
    const doubled = processNumbers(numbers, x => x * 2);
    console.log("Doubled:", doubled);
}

// Function Builder Demo
function createFunction() {
    const name = document.getElementById('func-name').value || 'myFunction';
    const message = document.getElementById('func-message').value || 'Hello World!';
    const returnValue = document.getElementById('func-return').value || 'Success!';
    const output = document.getElementById('function-output');
    
    console.log(`\n🔨 Creating function: ${name}()`);
    
    // Create the function dynamically
    const functionCode = `
function ${name}() {
    console.log("${message}");
    return "${returnValue}";
}`;
    
    try {
        // Store the function
        userCreatedFunction = new Function(`
            console.log("${message}");
            return "${returnValue}";
        `);
        
        output.innerHTML = `
            <strong>Function Created Successfully!</strong><br><br>
            <strong>Function Code:</strong><br>
            <code>${functionCode}</code><br><br>
            <strong>Function Name:</strong> ${name}<br>
            <strong>Message:</strong> "${message}"<br>
            <strong>Return Value:</strong> "${returnValue}"<br><br>
            <em>Click "Call Function" to execute it!</em>
        `;
        output.classList.remove('hidden');
        output.classList.add('fade-in');
        
        console.log("✅ Function created successfully!");
        console.log("Function code:", functionCode);
        
    } catch (error) {
        output.innerHTML = `<strong>Error creating function:</strong><br>${error.message}`;
        output.classList.remove('hidden');
        console.error("❌ Error creating function:", error);
    }
}

function callCreatedFunction() {
    const output = document.getElementById('function-output');
    
    if (!userCreatedFunction) {
        output.innerHTML = `<strong>No function created yet!</strong><br>Please create a function first.`;
        output.classList.remove('hidden');
        return;
    }
    
    console.log("\n🚀 Calling user-created function:");
    
    try {
        const result = userCreatedFunction();
        
        output.innerHTML += `<br><br><strong>Function Executed!</strong><br>
            <strong>Console Output:</strong> Check the browser console<br>
            <strong>Return Value:</strong> "${result}"<br>
            <em>Function call completed successfully!</em>`;
        
        console.log("✅ Function executed successfully!");
        console.log("Return value:", result);
        
    } catch (error) {
        output.innerHTML += `<br><br><strong>Error calling function:</strong><br>${error.message}`;
        console.error("❌ Error calling function:", error);
    }
}

// Personal Greeting Generator
function generateGreeting() {
    const name = document.getElementById('user-name').value || 'Friend';
    const age = parseInt(document.getElementById('user-age').value) || 25;
    const style = document.getElementById('greeting-style').value;
    const result = document.getElementById('greeting-result');
    
    console.log(`\n👋 Generating ${style} greeting for ${name}, age ${age}`);
    
    // Different greeting functions based on style
    const greetingFunctions = {
        formal: (name, age) => `Good day, ${name}. It is a pleasure to meet someone of ${age} years.`,
        casual: (name, age) => `Hey ${name}! ${age} years old, nice! 😊`,
        funny: (name, age) => `Greetings, ${name} the ${age}-year-old legend! 🎉`,
        professional: (name, age) => `Hello ${name}, welcome to our platform. Age: ${age}.`
    };
    
    const greeting = greetingFunctions[style](name, age);
    
    result.innerHTML = `
        <strong>Generated Greeting:</strong><br>
        "${greeting}"<br><br>
        <strong>Function Used:</strong><br>
        <code>const greeting = greetingFunctions.${style}("${name}", ${age});</code><br><br>
        <strong>Parameters:</strong><br>
        • name: "${name}"<br>
        • age: ${age}<br>
        • style: "${style}"
    `;
    result.classList.remove('hidden');
    result.classList.add('fade-in');
    
    console.log("Generated greeting:", greeting);
    console.log("Function parameters:", { name, age, style });
}

// Math Function Laboratory
function performMathOperation() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const operation = document.getElementById('math-operation').value;
    const result = document.getElementById('math-result');
    
    console.log(`\n🧮 Performing ${operation} operation: ${num1}, ${num2}`);
    
    // Math operation functions
    const mathFunctions = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => b !== 0 ? a / b : 'Cannot divide by zero',
        power: (a, b) => Math.pow(a, b),
        max: (a, b) => Math.max(a, b),
        min: (a, b) => Math.min(a, b)
    };
    
    const operationResult = mathFunctions[operation](num1, num2);
    const operationSymbols = {
        add: '+', subtract: '-', multiply: '×', divide: '÷',
        power: '^', max: 'max', min: 'min'
    };
    
    result.innerHTML = `
        <strong>Math Operation Result:</strong><br>
        ${num1} ${operationSymbols[operation]} ${num2} = ${operationResult}<br><br>
        <strong>Function Used:</strong><br>
        <code>const result = mathFunctions.${operation}(${num1}, ${num2});</code><br><br>
        <strong>Return Value:</strong> ${operationResult}<br>
        <strong>Data Type:</strong> ${typeof operationResult}
    `;
    result.classList.remove('hidden');
    result.classList.add('fade-in');
    
    console.log(`Result: ${num1} ${operationSymbols[operation]} ${num2} = ${operationResult}`);
    console.log("Function return type:", typeof operationResult);
}

// Function Style Converter
function showFunctionStyles() {
    const example = document.getElementById('function-example').value;
    const result = document.getElementById('function-styles');
    
    console.log(`\n🔄 Showing different styles for: ${example}`);
    
    const examples = {
        square: {
            traditional: `function square(x) {
    return x * x;
}`,
            arrow: `const square = (x) => {
    return x * x;
}`,
            shortArrow: `const square = x => x * x;`,
            description: "Square a number"
        },
        greet: {
            traditional: `function greet(name) {
    return "Hello, " + name + "!";
}`,
            arrow: `const greet = (name) => {
    return "Hello, " + name + "!";
}`,
            shortArrow: `const greet = name => "Hello, " + name + "!";`,
            description: "Greet someone by name"
        },
        isEven: {
            traditional: `function isEven(number) {
    return number % 2 === 0;
}`,
            arrow: `const isEven = (number) => {
    return number % 2 === 0;
}`,
            shortArrow: `const isEven = number => number % 2 === 0;`,
            description: "Check if a number is even"
        },
        getLength: {
            traditional: `function getLength(text) {
    return text.length;
}`,
            arrow: `const getLength = (text) => {
    return text.length;
}`,
            shortArrow: `const getLength = text => text.length;`,
            description: "Get the length of a string"
        }
    };
    
    const selectedExample = examples[example];
    
    result.innerHTML = `
        <strong>${selectedExample.description}</strong><br><br>
        
        <strong>1. Traditional Function Declaration:</strong><br>
        <code>${selectedExample.traditional}</code><br><br>
        
        <strong>2. Arrow Function (Full Syntax):</strong><br>
        <code>${selectedExample.arrow}</code><br><br>
        
        <strong>3. Arrow Function (Short Syntax):</strong><br>
        <code>${selectedExample.shortArrow}</code><br><br>
        
        <em>All three styles do exactly the same thing!</em>
    `;
    result.classList.remove('hidden');
    result.classList.add('fade-in');
    
    console.log("Function styles displayed for:", example);
}

// Scope Demonstration
function demonstrateScope() {
    const result = document.getElementById('scope-result');
    
    console.log("\n🔍 Demonstrating Variable Scope:");
    
    let output = '';
    
    // Global scope
    let globalVar = "I'm global!";
    output += `Global variable: "${globalVar}"\n`;
    console.log("Global variable:", globalVar);
    
    // Function scope
    function testScope() {
        let localVar = "I'm local!";
        let functionOutput = `Inside function - Global: "${globalVar}", Local: "${localVar}"`;
        output += functionOutput + '\n';
        console.log(functionOutput);
        
        // Nested function scope
        function nestedFunction() {
            let nestedVar = "I'm nested!";
            let nestedOutput = `Nested function - Global: "${globalVar}", Local: "${localVar}", Nested: "${nestedVar}"`;
            output += nestedOutput + '\n';
            console.log(nestedOutput);
            return nestedVar;
        }
        
        nestedFunction();
        
        // Try to access nested variable (will cause error)
        try {
            console.log("Trying to access nestedVar from function scope:", nestedVar);
        } catch (error) {
            output += `❌ Error: Cannot access nestedVar from function scope\n`;
            console.log("❌ Error accessing nestedVar:", error.message);
        }
        
        return localVar;
    }
    
    testScope();
    
    // Try to access local variable from global scope
    try {
        console.log("Trying to access localVar from global scope:", localVar);
    } catch (error) {
        output += `❌ Error: Cannot access localVar from global scope\n`;
        console.log("❌ Error accessing localVar:", error.message);
    }
    
    result.innerHTML = `
        <strong>Scope Demonstration Results:</strong><br><br>
        <pre>${output}</pre>
        <strong>Key Points:</strong><br>
        • Global variables are accessible everywhere<br>
        • Local variables are only accessible within their function<br>
        • Nested functions can access parent scope variables<br>
        • Variables "shadow" outer variables with the same name
    `;
    result.classList.remove('hidden');
    result.classList.add('fade-in');
    
    console.log("✅ Scope demonstration complete!");
}

function clearScopeDemo() {
    document.getElementById('scope-result').classList.add('hidden');
    console.log("🧹 Scope demo cleared");
}

// Toolkit Functions
function addTextTool(toolType) {
    console.log(`\n📝 Adding text tool: ${toolType}`);
    
    const tools = {
        capitalize: {
            name: 'capitalizeText',
            code: `function capitalizeText(text) {
    if (!text || typeof text !== 'string') {
        return 'Invalid input: Please provide a string';
    }
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}`,
            func: (text) => {
                if (!text || typeof text !== 'string') return 'Invalid input: Please provide a string';
                return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
            },
            description: 'Capitalizes the first letter of text'
        },
        reverse: {
            name: 'reverseText',
            code: `function reverseText(text) {
    if (!text || typeof text !== 'string') {
        return 'Invalid input: Please provide a string';
    }
    return text.split('').reverse().join('');
}`,
            func: (text) => {
                if (!text || typeof text !== 'string') return 'Invalid input: Please provide a string';
                return text.split('').reverse().join('');
            },
            description: 'Reverses the order of characters in text'
        },
        wordCount: {
            name: 'countWords',
            code: `function countWords(text) {
    if (!text || typeof text !== 'string') {
        return 'Invalid input: Please provide a string';
    }
    return text.trim().split(/\\s+/).filter(word => word.length > 0).length;
}`,
            func: (text) => {
                if (!text || typeof text !== 'string') return 'Invalid input: Please provide a string';
                return text.trim().split(/\s+/).filter(word => word.length > 0).length;
            },
            description: 'Counts the number of words in text'
        },
        removeSpaces: {
            name: 'removeSpaces',
            code: `function removeSpaces(text) {
    if (!text || typeof text !== 'string') {
        return 'Invalid input: Please provide a string';
    }
    return text.replace(/\\s+/g, '');
}`,
            func: (text) => {
                if (!text || typeof text !== 'string') return 'Invalid input: Please provide a string';
                return text.replace(/\s+/g, '');
            },
            description: 'Removes all spaces from text'
        }
    };
    
    addToToolkit(tools[toolType]);
}

function addNumberTool(toolType) {
    console.log(`\n🔢 Adding number tool: ${toolType}`);
    
    const tools = {
        random: {
            name: 'randomNumber',
            code: `function randomNumber(min = 1, max = 100) {
    const minNum = Math.min(min, max);
    const maxNum = Math.max(min, max);
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}`,
            func: (input) => {
                const [min = 1, max = 100] = input.split(',').map(n => parseInt(n.trim()) || 0);
                const minNum = Math.min(min, max);
                const maxNum = Math.max(min, max);
                return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
            },
            description: 'Generates a random number between min and max (input: "min,max")'
        },
        factorial: {
            name: 'factorial',
            code: `function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return 'Invalid input: Please provide a non-negative integer';
    }
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}`,
            func: (input) => {
                const n = parseInt(input);
                if (n < 0 || !Number.isInteger(n)) return 'Invalid input: Please provide a non-negative integer';
                if (n === 0 || n === 1) return 1;
                let result = 1;
                for (let i = 2; i <= n; i++) {
                    result *= i;
                }
                return result;
            },
            description: 'Calculates the factorial of a number'
        },
        isPrime: {
            name: 'isPrime',
            code: `function isPrime(n) {
    const num = parseInt(n);
    if (num < 2 || !Number.isInteger(num)) {
        return 'Invalid input: Please provide an integer >= 2';
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}`,
            func: (input) => {
                const num = parseInt(input);
                if (num < 2 || !Number.isInteger(num)) return 'Invalid input: Please provide an integer >= 2';
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) return false;
                }
                return true;
            },
            description: 'Checks if a number is prime'
        },
        fibonacci: {
            name: 'fibonacci',
            code: `function fibonacci(n) {
    const num = parseInt(n);
    if (num < 0 || !Number.isInteger(num)) {
        return 'Invalid input: Please provide a non-negative integer';
    }
    if (num === 0) return 0;
    if (num === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}`,
            func: (input) => {
                const num = parseInt(input);
                if (num < 0 || !Number.isInteger(num)) return 'Invalid input: Please provide a non-negative integer';
                if (num === 0) return 0;
                if (num === 1) return 1;
                let a = 0, b = 1;
                for (let i = 2; i <= num; i++) {
                    [a, b] = [b, a + b];
                }
                return b;
            },
            description: 'Calculates the nth Fibonacci number'
        }
    };
    
    addToToolkit(tools[toolType]);
}

function addArrayTool(toolType) {
    console.log(`\n📋 Adding array tool: ${toolType}`);
    
    const tools = {
        shuffle: {
            name: 'shuffleArray',
            code: `function shuffleArray(arr) {
    const array = arr.split(',').map(item => item.trim());
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}`,
            func: (input) => {
                const array = input.split(',').map(item => item.trim());
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            },
            description: 'Shuffles array elements randomly (input: "item1,item2,item3")'
        },
        unique: {
            name: 'removeDuplicates',
            code: `function removeDuplicates(arr) {
    const array = arr.split(',').map(item => item.trim());
    return [...new Set(array)];
}`,
            func: (input) => {
                const array = input.split(',').map(item => item.trim());
                return [...new Set(array)];
            },
            description: 'Removes duplicate items from array'
        },
        average: {
            name: 'calculateAverage',
            code: `function calculateAverage(arr) {
    const numbers = arr.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    if (numbers.length === 0) return 'No valid numbers found';
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}`,
            func: (input) => {
                const numbers = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
                if (numbers.length === 0) return 'No valid numbers found';
                return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
            },
            description: 'Calculates the average of numbers (input: "1,2,3,4")'
        },
        sort: {
            name: 'smartSort',
            code: `function smartSort(arr) {
    const array = arr.split(',').map(item => item.trim());
    // Try to sort as numbers if all items are numeric
    const allNumbers = array.every(item => !isNaN(parseFloat(item)));
    if (allNumbers) {
        return array.map(n => parseFloat(n)).sort((a, b) => a - b);
    }
    return array.sort();
}`,
            func: (input) => {
                const array = input.split(',').map(item => item.trim());
                const allNumbers = array.every(item => !isNaN(parseFloat(item)));
                if (allNumbers) {
                    return array.map(n => parseFloat(n)).sort((a, b) => a - b);
                }
                return array.sort();
            },
            description: 'Sorts array intelligently (numbers or text)'
        }
    };
    
    addToToolkit(tools[toolType]);
}

function addValidationTool(toolType) {
    console.log(`\n✅ Adding validation tool: ${toolType}`);
    
    const tools = {
        email: {
            name: 'validateEmail',
            code: `function validateEmail(email) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
}`,
            func: (input) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(input);
            },
            description: 'Validates email address format'
        },
        password: {
            name: 'checkPasswordStrength',
            code: `function checkPasswordStrength(password) {
    if (password.length < 8) return 'Weak: Too short';
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const score = [hasUpper, hasLower, hasNumber, hasSymbol].filter(Boolean).length;
    if (score === 4) return 'Strong';
    if (score >= 2) return 'Medium';
    return 'Weak';
}`,
            func: (input) => {
                if (input.length < 8) return 'Weak: Too short';
                const hasUpper = /[A-Z]/.test(input);
                const hasLower = /[a-z]/.test(input);
                const hasNumber = /\d/.test(input);
                const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(input);
                
                const score = [hasUpper, hasLower, hasNumber, hasSymbol].filter(Boolean).length;
                if (score === 4) return 'Strong';
                if (score >= 2) return 'Medium';
                return 'Weak';
            },
            description: 'Checks password strength'
        },
        phone: {
            name: 'validatePhone',
            code: `function validatePhone(phone) {
    const phoneRegex = /^[\\+]?[1-9]?[0-9]{7,15}$/;
    const cleaned = phone.replace(/[\\s\\-\\(\\)]/g, '');
    return phoneRegex.test(cleaned);
}`,
            func: (input) => {
                const phoneRegex = /^[\+]?[1-9]?[0-9]{7,15}$/;
                const cleaned = input.replace(/[\s\-\(\)]/g, '');
                return phoneRegex.test(cleaned);
            },
            description: 'Validates phone number format'
        },
        url: {
            name: 'validateURL',
            code: `function validateURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}`,
            func: (input) => {
                try {
                    new URL(input);
                    return true;
                } catch {
                    return false;
                }
            },
            description: 'Validates URL format'
        }
    };
    
    addToToolkit(tools[toolType]);
}

function addToToolkit(tool) {
    // Check if function already exists
    const exists = functionLibrary.find(f => f.name === tool.name);
    if (exists) {
        console.log(`⚠️ Function ${tool.name} already exists in toolkit`);
        return;
    }
    
    functionLibrary.push(tool);
    updateFunctionLibrary();
    updateToolkitStats();
    
    console.log(`✅ Added ${tool.name} to toolkit`);
}

function updateFunctionLibrary() {
    const library = document.getElementById('function-library');
    
    if (functionLibrary.length === 0) {
        library.innerHTML = '<p class="empty-state">Your toolkit is empty. Add some functions to get started!</p>';
        return;
    }
    
    let libraryCode = '// Your Personal Function Toolkit\n\n';
    
    functionLibrary.forEach((func, index) => {
        libraryCode += `// ${index + 1}. ${func.description}\n`;
        libraryCode += func.code + '\n\n';
    });
    
    library.innerHTML = `<pre>${libraryCode}</pre>`;
}

function updateToolkitStats() {
    document.getElementById('function-count').textContent = functionLibrary.length;
    
    const totalLines = functionLibrary.reduce((total, func) => {
        return total + func.code.split('\n').length;
    }, 0);
    
    document.getElementById('code-lines').textContent = totalLines;
}

function testSelectedFunction() {
    const input = document.getElementById('test-input').value;
    const output = document.getElementById('test-output');
    
    if (functionLibrary.length === 0) {
        output.innerHTML = '<p>No functions in your toolkit yet! Add some functions first.</p>';
        return;
    }
    
    if (!input.trim()) {
        output.innerHTML = '<p>Please enter some test input!</p>';
        return;
    }
    
    console.log(`\n🧪 Testing functions with input: "${input}"`);
    
    let results = '<strong>Test Results:</strong><br><br>';
    
    functionLibrary.forEach(func => {
        try {
            const result = func.func(input);
            results += `<strong>${func.name}:</strong> ${result}<br>`;
            console.log(`${func.name}("${input}") = ${result}`);
        } catch (error) {
            results += `<strong>${func.name}:</strong> Error - ${error.message}<br>`;
            console.error(`${func.name} error:`, error);
        }
    });
    
    output.innerHTML = results;
}

function clearToolkit() {
    functionLibrary = [];
    updateFunctionLibrary();
    updateToolkitStats();
    document.getElementById('test-output').innerHTML = '<p>Toolkit cleared! Add some functions to get started.</p>';
    console.log("🧹 Toolkit cleared");
}

function exportToolkit() {
    if (functionLibrary.length === 0) {
        alert('No functions to export! Add some functions first.');
        return;
    }
    
    let code = '// Exported Function Toolkit\n// Generated by JavaScript Mastery Course\n\n';
    
    functionLibrary.forEach(func => {
        code += `// ${func.description}\n`;
        code += func.code + '\n\n';
    });
    
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-function-toolkit.js';
    a.click();
    URL.revokeObjectURL(url);
    
    console.log("💾 Toolkit exported successfully!");
}

function importToolkit() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.js,.txt';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    alert('Import functionality would parse the file and add functions to toolkit');
                    console.log("📥 File content:", e.target.result);
                } catch (error) {
                    alert('Error importing file: ' + error.message);
                    console.error("❌ Import error:", error);
                }
            };
            reader.readAsText(file);
        }
    };
    input.click();
}

// Practice Challenge Functions
function convertTemperature() {
    const temp = parseFloat(document.getElementById('temp-input').value);
    const from = document.getElementById('temp-from').value;
    const to = document.getElementById('temp-to').value;
    const result = document.getElementById('temp-result');
    
    if (isNaN(temp)) {
        result.textContent = 'Please enter a valid temperature!';
        return;
    }
    
    console.log(`\n🌡️ Converting ${temp}°${from.toUpperCase()} to ${to.toUpperCase()}`);
    
    // Temperature conversion functions
    const conversions = {
        celsiusToFahrenheit: (c) => (c * 9/5) + 32,
        celsiusToKelvin: (c) => c + 273.15,
        fahrenheitToCelsius: (f) => (f - 32) * 5/9,
        fahrenheitToKelvin: (f) => ((f - 32) * 5/9) + 273.15,
        kelvinToCelsius: (k) => k - 273.15,
        kelvinToFahrenheit: (k) => ((k - 273.15) * 9/5) + 32
    };
    
    let convertedTemp;
    const conversionKey = `${from}To${to.charAt(0).toUpperCase() + to.slice(1)}`;
    
    if (from === to) {
        convertedTemp = temp;
    } else if (conversions[conversionKey]) {
        convertedTemp = conversions[conversionKey](temp);
    } else {
        result.textContent = 'Conversion not supported!';
        return;
    }
    
    result.textContent = `${temp}° ${from.toUpperCase()} = ${convertedTemp.toFixed(2)}° ${to.toUpperCase()}`;
    console.log(`Result: ${convertedTemp.toFixed(2)}° ${to.toUpperCase()}`);
}

function generatePassword() {
    const length = parseInt(document.getElementById('password-length').value) || 12;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;
    const result = document.getElementById('password-result');
    
    console.log(`\n🔒 Generating password: length=${length}, numbers=${includeNumbers}, symbols=${includeSymbols}`);
    
    // Password generation function
    function createPassword(len, useNumbers, useSymbols) {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (useNumbers) chars += '0123456789';
        if (useSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        let password = '';
        for (let i = 0; i < len; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }
    
    const password = createPassword(length, includeNumbers, includeSymbols);
    
    result.innerHTML = `
        <strong>Generated Password:</strong><br>
        <code style="font-size: 1.1em; background: #f3f4f6; padding: 5px; border-radius: 3px;">${password}</code><br>
        <small>Length: ${password.length} characters</small>
    `;
    
    console.log("Generated password:", password);
}

function calculateGrade() {
    const score = parseFloat(document.getElementById('grade-score').value);
    const result = document.getElementById('grade-result');
    
    if (isNaN(score) || score < 0 || score > 100) {
        result.textContent = 'Please enter a valid score (0-100)!';
        return;
    }
    
    console.log(`\n📊 Calculating grade for score: ${score}`);
    
    // Grade calculation function
    function getLetterGrade(score) {
        if (score >= 97) return { letter: 'A+', gpa: 4.0 };
        if (score >= 93) return { letter: 'A', gpa: 4.0 };
        if (score >= 90) return { letter: 'A-', gpa: 3.7 };
        if (score >= 87) return { letter: 'B+', gpa: 3.3 };
        if (score >= 83) return { letter: 'B', gpa: 3.0 };
        if (score >= 80) return { letter: 'B-', gpa: 2.7 };
        if (score >= 77) return { letter: 'C+', gpa: 2.3 };
        if (score >= 73) return { letter: 'C', gpa: 2.0 };
        if (score >= 70) return { letter: 'C-', gpa: 1.7 };
        if (score >= 67) return { letter: 'D+', gpa: 1.3 };
        if (score >= 65) return { letter: 'D', gpa: 1.0 };
        return { letter: 'F', gpa: 0.0 };
    }
    
    const grade = getLetterGrade(score);
    
    result.innerHTML = `
        <strong>Grade:</strong> ${grade.letter}<br>
        <strong>GPA:</strong> ${grade.gpa}<br>
        <strong>Score:</strong> ${score}%
    `;
    
    console.log(`Grade: ${grade.letter}, GPA: ${grade.gpa}`);
}

function analyzeText() {
    const text = document.getElementById('analyze-text').value;
    const result = document.getElementById('text-result');
    
    if (!text.trim()) {
        result.textContent = 'Please enter some text to analyze!';
        return;
    }
    
    console.log(`\n📝 Analyzing text: "${text.substring(0, 50)}..."`);
    
    // Text analysis functions
    const analysis = {
        characterCount: (text) => text.length,
        wordCount: (text) => text.trim().split(/\s+/).filter(word => word.length > 0).length,
        sentenceCount: (text) => text.split(/[.!?]+/).filter(s => s.trim().length > 0).length,
        paragraphCount: (text) => text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length,
        averageWordLength: (text) => {
            const words = text.trim().split(/\s+/).filter(word => word.length > 0);
            return words.length > 0 ? (words.join('').length / words.length).toFixed(1) : 0;
        },
        readingTime: (text) => {
            const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
            return Math.ceil(words / 200); // Average reading speed: 200 words per minute
        }
    };
    
    const stats = {
        characters: analysis.characterCount(text),
        words: analysis.wordCount(text),
        sentences: analysis.sentenceCount(text),
        paragraphs: analysis.paragraphCount(text),
        avgWordLength: analysis.averageWordLength(text),
        readingTime: analysis.readingTime(text)
    };
    
    result.innerHTML = `
        <strong>Text Analysis Results:</strong><br>
        • Characters: ${stats.characters}<br>
        • Words: ${stats.words}<br>
        • Sentences: ${stats.sentences}<br>
        • Paragraphs: ${stats.paragraphs}<br>
        • Average word length: ${stats.avgWordLength} characters<br>
        • Estimated reading time: ${stats.readingTime} minute(s)
    `;
    
    console.log("Text analysis:", stats);
}

// Allow Enter key for inputs
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const target = e.target;
        
        if (target.id === 'func-name' || target.id === 'func-message' || target.id === 'func-return') {
            createFunction();
        } else if (target.id === 'user-name' || target.id === 'user-age') {
            generateGreeting();
        } else if (target.id === 'num1' || target.id === 'num2') {
            performMathOperation();
        } else if (target.id === 'test-input') {
            testSelectedFunction();
        } else if (target.id === 'temp-input') {
            convertTemperature();
        } else if (target.id === 'password-length') {
            generatePassword();
        } else if (target.id === 'grade-score') {
            calculateGrade();
        }
    }
});

console.log("🎓 Lesson 6 JavaScript loaded! Try building your function toolkit.");
console.log("💡 Tip: Open the browser console to see detailed function execution logs!");
