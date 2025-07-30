// Welcome message and lesson setup
console.log('🧮 Welcome to Lesson 3: Basic Operations!');
console.log('Learn math operations, string manipulation, and comparisons!');
console.log('📚 KEY CONCEPTS TO MASTER:');
console.log('1. Math operators: +, -, *, /, %, **');
console.log('2. String methods: length, toUpperCase, toLowerCase, charAt');
console.log('3. Comparison operators: >, <, >=, <=, ==, ===');
console.log('4. Building a calculator application');
console.log('🎓 Lesson 3 JavaScript loaded successfully!');
console.log('💡 Try all the interactive features and build your calculator!');

// Math operation demonstrations
function demonstrateAddition() {
    const num1 = 15;
    const num2 = 27;
    const result = num1 + num2;
    
    document.getElementById('addition-demo').textContent = `${num1} + ${num2} = ${result}`;
    console.log(`➕ Addition: ${num1} + ${num2} = ${result}`);
}

function demonstrateSubtraction() {
    const num1 = 50;
    const num2 = 23;
    const result = num1 - num2;
    
    document.getElementById('subtraction-demo').textContent = `${num1} - ${num2} = ${result}`;
    console.log(`➖ Subtraction: ${num1} - ${num2} = ${result}`);
}

function demonstrateMultiplication() {
    const num1 = 8;
    const num2 = 9;
    const result = num1 * num2;
    
    document.getElementById('multiplication-demo').textContent = `${num1} × ${num2} = ${result}`;
    console.log(`✖️ Multiplication: ${num1} × ${num2} = ${result}`);
}

function demonstrateDivision() {
    const num1 = 84;
    const num2 = 12;
    const result = num1 / num2;
    
    document.getElementById('division-demo').textContent = `${num1} ÷ ${num2} = ${result}`;
    console.log(`➗ Division: ${num1} ÷ ${num2} = ${result}`);
}

function demonstrateModulus() {
    const num1 = 23;
    const num2 = 7;
    const result = num1 % num2;
    
    document.getElementById('modulus-demo').textContent = `${num1} % ${num2} = ${result} (remainder)`;
    console.log(`📐 Modulus: ${num1} % ${num2} = ${result} (remainder after division)`);
}

function demonstrateExponent() {
    const num1 = 3;
    const num2 = 4;
    const result = num1 ** num2;
    
    document.getElementById('exponent-demo').textContent = `${num1} ** ${num2} = ${result}`;
    console.log(`🔢 Exponentiation: ${num1} ** ${num2} = ${result}`);
}

// Interactive math calculator
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateAllOperations);
    }
    
    const compareBtn = document.getElementById('compare-btn');
    if (compareBtn) {
        compareBtn.addEventListener('click', performComparison);
    }
});

function calculateAllOperations() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    
    const results = {
        addition: num1 + num2,
        subtraction: num1 - num2,
        multiplication: num1 * num2,
        division: num2 !== 0 ? num1 / num2 : 'Cannot divide by zero',
        modulus: num2 !== 0 ? num1 % num2 : 'Cannot divide by zero',
        exponentiation: num1 ** num2
    };
    
    const resultsContainer = document.getElementById('math-results');
    resultsContainer.innerHTML = `
        <div class="result-item">
            <h5>Addition (+)</h5>
            <div class="result-value">${num1} + ${num2} = ${results.addition}</div>
        </div>
        <div class="result-item">
            <h5>Subtraction (-)</h5>
            <div class="result-value">${num1} - ${num2} = ${results.subtraction}</div>
        </div>
        <div class="result-item">
            <h5>Multiplication (×)</h5>
            <div class="result-value">${num1} × ${num2} = ${results.multiplication}</div>
        </div>
        <div class="result-item">
            <h5>Division (÷)</h5>
            <div class="result-value">${num1} ÷ ${num2} = ${results.division}</div>
        </div>
        <div class="result-item">
            <h5>Modulus (%)</h5>
            <div class="result-value">${num1} % ${num2} = ${results.modulus}</div>
        </div>
        <div class="result-item">
            <h5>Exponentiation (**)</h5>
            <div class="result-value">${num1} ** ${num2} = ${results.exponentiation}</div>
        </div>
    `;
    
    resultsContainer.classList.remove('hidden');
    
    console.log('🧮 Math Operations Results:');
    console.log(`Addition: ${num1} + ${num2} = ${results.addition}`);
    console.log(`Subtraction: ${num1} - ${num2} = ${results.subtraction}`);
    console.log(`Multiplication: ${num1} × ${num2} = ${results.multiplication}`);
    console.log(`Division: ${num1} ÷ ${num2} = ${results.division}`);
    console.log(`Modulus: ${num1} % ${num2} = ${results.modulus}`);
    console.log(`Exponentiation: ${num1} ** ${num2} = ${results.exponentiation}`);
}

// String manipulation functions
function showStringLength() {
    const text = document.getElementById('string-input').value;
    const length = text.length;
    
    document.getElementById('string-results').innerHTML = `
        <strong>Length:</strong> "${text}" has ${length} characters
    `;
    document.getElementById('string-results').classList.remove('hidden');
    
    console.log(`📏 String length: "${text}" has ${length} characters`);
}

function showUpperCase() {
    const text = document.getElementById('string-input').value;
    const upperText = text.toUpperCase();
    
    document.getElementById('string-results').innerHTML = `
        <strong>Uppercase:</strong> "${text}" becomes "${upperText}"
    `;
    document.getElementById('string-results').classList.remove('hidden');
    
    console.log(`🔤 Uppercase: "${text}" → "${upperText}"`);
}

function showLowerCase() {
    const text = document.getElementById('string-input').value;
    const lowerText = text.toLowerCase();
    
    document.getElementById('string-results').innerHTML = `
        <strong>Lowercase:</strong> "${text}" becomes "${lowerText}"
    `;
    document.getElementById('string-results').classList.remove('hidden');
    
    console.log(`🔡 Lowercase: "${text}" → "${lowerText}"`);
}

function showFirstChar() {
    const text = document.getElementById('string-input').value;
    const firstChar = text.charAt(0) || 'No characters';
    
    document.getElementById('string-results').innerHTML = `
        <strong>First Character:</strong> "${text}" starts with "${firstChar}"
    `;
    document.getElementById('string-results').classList.remove('hidden');
    
    console.log(`🎯 First character: "${text}" starts with "${firstChar}"`);
}

function showLastChar() {
    const text = document.getElementById('string-input').value;
    const lastChar = text.charAt(text.length - 1) || 'No characters';
    
    document.getElementById('string-results').innerHTML = `
        <strong>Last Character:</strong> "${text}" ends with "${lastChar}"
    `;
    document.getElementById('string-results').classList.remove('hidden');
    
    console.log(`🎯 Last character: "${text}" ends with "${lastChar}"`);
}

// Comparison operations
function performComparison() {
    const value1 = document.getElementById('compare1').value;
    const value2 = document.getElementById('compare2').value;
    const operator = document.getElementById('operator').value;
    
    // Convert to numbers if both values are numeric
    const num1 = isNaN(value1) ? value1 : parseFloat(value1);
    const num2 = isNaN(value2) ? value2 : parseFloat(value2);
    
    let result;
    let explanation = '';
    
    switch(operator) {
        case '>':
            result = num1 > num2;
            explanation = `${num1} is ${result ? '' : 'not '}greater than ${num2}`;
            break;
        case '<':
            result = num1 < num2;
            explanation = `${num1} is ${result ? '' : 'not '}less than ${num2}`;
            break;
        case '>=':
            result = num1 >= num2;
            explanation = `${num1} is ${result ? '' : 'not '}greater than or equal to ${num2}`;
            break;
        case '<=':
            result = num1 <= num2;
            explanation = `${num1} is ${result ? '' : 'not '}less than or equal to ${num2}`;
            break;
        case '==':
            result = num1 == num2;
            explanation = `${num1} is ${result ? '' : 'not '}equal to ${num2} (loose equality)`;
            break;
        case '===':
            result = value1 === value2;
            explanation = `"${value1}" is ${result ? '' : 'not '}strictly equal to "${value2}" (type and value)`;
            break;
        case '!=':
            result = num1 != num2;
            explanation = `${num1} is ${result ? '' : 'not '}not equal to ${num2}`;
            break;
        case '!==':
            result = value1 !== value2;
            explanation = `"${value1}" is ${result ? '' : 'not '}strictly not equal to "${value2}"`;
            break;
    }
    
    document.getElementById('comparison-result').innerHTML = `
        <strong>Result:</strong> ${value1} ${operator} ${value2} = <span style="color: ${result ? '#059669' : '#dc2626'}; font-weight: bold;">${result}</span><br>
        <em>${explanation}</em>
    `;
    document.getElementById('comparison-result').classList.remove('hidden');
    
    console.log(`🔍 Comparison: ${value1} ${operator} ${value2} = ${result}`);
    console.log(`📝 Explanation: ${explanation}`);
}

// Order of operations challenge
function showOrderOfOperations() {
    const expression = '2 + 3 * 4';
    const result = 2 + 3 * 4;
    
    document.getElementById('order-result').innerHTML = `
        <strong>Answer:</strong> ${expression} = ${result}<br>
        <em>Multiplication happens first: 3 × 4 = 12, then 2 + 12 = 14</em>
    `;
    document.getElementById('order-result').classList.remove('hidden');
    
    console.log('🧮 Order of Operations Challenge:');
    console.log(`Expression: ${expression}`);
    console.log(`Step 1: 3 × 4 = 12 (multiplication first)`);
    console.log(`Step 2: 2 + 12 = 14 (then addition)`);
    console.log(`Final result: ${result}`);
}

// Calculator Class
class Calculator {
    constructor() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetScreen = false;
        
        console.log('🧮 Calculator initialized! Ready for calculations.');
    }
    
    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetScreen = false;
        this.updateDisplay();
        
        console.log('🧹 Calculator cleared');
    }
    
    delete() {
        if (this.currentOperand.length === 1) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.slice(0, -1);
        }
        this.updateDisplay();
        
        console.log('⌫ Deleted last digit');
    }
    
    appendNumber(number) {
        if (this.shouldResetScreen) {
            this.currentOperand = '';
            this.shouldResetScreen = false;
        }
        
        if (number === '.' && this.currentOperand.includes('.')) return;
        
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            this.currentOperand += number;
        }
        
        this.updateDisplay();
        console.log(`🔢 Added: ${number}, Current: ${this.currentOperand}`);
    }
    
    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        
        if (this.previousOperand !== '') {
            this.compute();
        }
        
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        this.updateDisplay();
        
        console.log(`🔧 Operation selected: ${operation}`);
    }
    
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('Cannot divide by zero!');
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }
        
        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetScreen = true;
        this.updateDisplay();
        
        console.log(`🎯 Calculation: ${prev} ${this.operation || '='} ${current} = ${computation}`);
    }
    
    updateDisplay() {
        const currentElement = document.getElementById('calc-current');
        const previousElement = document.getElementById('calc-previous');
        
        if (currentElement) {
            currentElement.textContent = this.currentOperand;
        }
        
        if (previousElement) {
            if (this.operation != null) {
                previousElement.textContent = `${this.previousOperand} ${this.operation}`;
            } else {
                previousElement.textContent = '';
            }
        }
    }
    
    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }
        
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }
}

// Initialize calculator
const calculator = new Calculator();

// Additional learning examples
console.log('');
console.log('🎓 BONUS LEARNING EXAMPLES:');
console.log('');

// Math examples
console.log('📊 Math Operations in Action:');
let price = 29.99;
let quantity = 3;
let total = price * quantity;
let tax = total * 0.08;
let finalTotal = total + tax;
console.log(`Shopping cart: $${price} × ${quantity} = $${total.toFixed(2)}`);
console.log(`Tax (8%): $${tax.toFixed(2)}`);
console.log(`Final total: $${finalTotal.toFixed(2)}`);

// String examples
console.log('');
console.log('📝 String Operations in Action:');
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
let greeting = 'Hello, ' + fullName + '!';
console.log(`Full name: ${fullName}`);
console.log(`Greeting: ${greeting}`);
console.log(`Name length: ${fullName.length} characters`);
console.log(`Uppercase: ${fullName.toUpperCase()}`);

// Comparison examples
console.log('');
console.log('🔍 Comparison Operations in Action:');
let age = 25;
let votingAge = 18;
let canVote = age >= votingAge;
console.log(`Age: ${age}, Voting age: ${votingAge}`);
console.log(`Can vote: ${canVote}`);

let password = 'secret123';
let confirmPassword = 'secret123';
let passwordsMatch = password === confirmPassword;
console.log(`Passwords match: ${passwordsMatch}`);

console.log('');
console.log('🎉 Ready to explore! Try all the interactive features above!');

/*
 * LESSON COMPLETION FUNCTIONALITY
 * This handles marking the lesson as complete and saving progress
 */

// Track lesson start
if (window.parent && window.parent.markLessonStarted) {
    window.parent.markLessonStarted(3);
} else if (window.markLessonStarted) {
    window.markLessonStarted(3);
}

// Track time spent on lesson
let startTime = Date.now();
let timeSpent = 0;

// Update time spent every 30 seconds
setInterval(function() {
    timeSpent = Math.floor((Date.now() - startTime) / 1000 / 60); // minutes
}, 30000);

// Wait for DOM to be ready before adding completion functionality
document.addEventListener('DOMContentLoaded', function() {
    const completeButton = document.getElementById('complete-lesson-btn');
    const completionMessage = document.getElementById('completion-message');
    
    if (completeButton) {
        completeButton.addEventListener('click', function() {
            // Calculate time spent (in minutes)
            const currentTimeSpent = Math.max(Math.floor((Date.now() - startTime) / 1000 / 60), 5); // minimum 5 minutes
            
            // Disable button to prevent multiple clicks
            completeButton.disabled = true;
            completeButton.textContent = 'Saving Progress...';
            
            // Try to mark lesson as completed
            if (window.parent && window.parent.markLessonCompleted) {
                // Called from within dashboard iframe
                window.parent.markLessonCompleted(3, currentTimeSpent).then(() => {
                    showCompletionSuccess();
                }).catch((error) => {
                    console.error('Error saving progress:', error);
                    showCompletionError();
                });
            } else {
                // Standalone lesson page - save to localStorage as fallback
                const progress = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
                progress['lesson_3'] = {
                    completed: true,
                    timeSpent: currentTimeSpent,
                    completedAt: new Date().toISOString()
                };
                localStorage.setItem('lessonProgress', JSON.stringify(progress));
                showCompletionSuccess();
            }
        });
    }
    
    function showCompletionSuccess() {
        completeButton.textContent = '✅ Completed!';
        completeButton.style.background = '#22c55e';
        completionMessage.classList.remove('hidden');
        completionMessage.classList.add('show');
        
        console.log('🎉 Lesson 3 completed successfully!');
        console.log('🚀 You can now proceed to Lesson 4!');
        
        // Show celebration effect
        setTimeout(() => {
            document.body.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
            setTimeout(() => {
                document.body.style.background = '';
            }, 2000);
        }, 500);
    }
    
    function showCompletionError() {
        completeButton.disabled = false;
        completeButton.textContent = 'Try Again';
        completeButton.style.background = '#ef4444';
        
        setTimeout(() => {
            completeButton.textContent = 'Mark Lesson as Complete';
            completeButton.style.background = '';
        }, 3000);
    }
});
