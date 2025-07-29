# Lesson 3: Basic Operations

## 🎯 Learning Objectives

By the end of this lesson, you will master:

- **Mathematical Operations**: Addition, subtraction, multiplication, division, modulus, and exponentiation
- **String Manipulation**: Length, case conversion, character extraction, and concatenation
- **Comparison Operations**: Greater than, less than, equality, and strict equality
- **Order of Operations**: Understanding how JavaScript evaluates mathematical expressions
- **Real-World Applications**: Building a functional calculator application

## 📚 What You'll Learn

### Mathematical Operations
- `+` Addition: Combining numbers
- `-` Subtraction: Finding the difference
- `*` Multiplication: Repeated addition
- `/` Division: Splitting into equal parts
- `%` Modulus: Finding remainders
- `**` Exponentiation: Raising to a power

### String Operations
- `.length` property: Count characters
- `.toUpperCase()`: Convert to uppercase
- `.toLowerCase()`: Convert to lowercase
- `.charAt()`: Get character at specific position
- String concatenation with `+`

### Comparison Operations
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal
- `<=` Less than or equal
- `==` Loose equality (converts types)
- `===` Strict equality (exact match)
- `!=` Not equal
- `!==` Strictly not equal

## 🚀 Getting Started

1. **Open the lesson**: Navigate to `lesson-03-operations/index.html`
2. **Open Developer Tools**: Press F12 or right-click → Inspect
3. **Check the Console**: See the welcome messages and learning examples
4. **Try Interactive Features**: Click buttons and test the calculator

## 🎮 Interactive Features

### Math Operation Demos
- Click "Try It" buttons to see each operation in action
- Watch the console for detailed explanations
- See real-world examples with shopping cart calculations

### Math Playground
- Enter two numbers in the calculator inputs
- Click "Calculate All" to see all operations at once
- Experiment with different number combinations

### String Manipulation Lab
- Type text in the input field
- Try different string methods: Length, Uppercase, Lowercase
- Extract first and last characters
- See results instantly

### Comparison Tester
- Enter two values to compare
- Choose different comparison operators
- Understand the difference between `==` and `===`
- Test with numbers, strings, and mixed types

### Calculator Project
- **Full-featured calculator** with professional design
- All basic operations: +, -, ×, ÷
- Clear (AC) and Delete (DEL) functions
- Decimal number support
- Error handling for division by zero
- Beautiful dark theme interface

## 💡 Key Concepts

### Order of Operations (PEMDAS)
JavaScript follows mathematical order of operations:
1. **Parentheses** `()`
2. **Exponents** `**`
3. **Multiplication** `*` and **Division** `/` (left to right)
4. **Addition** `+` and **Subtraction** `-` (left to right)

Example: `2 + 3 * 4 = 14` (not 20!)
- First: `3 * 4 = 12`
- Then: `2 + 12 = 14`

### String vs Number Operations
```javascript
// Numbers
5 + 3 = 8

// Strings
"5" + "3" = "53"

// Mixed (JavaScript converts number to string)
5 + "3" = "53"
"5" + 3 = "53"
```

### Equality Comparisons
```javascript
// Loose equality (==) - converts types
5 == "5"    // true (converts string to number)
0 == false  // true (converts boolean to number)

// Strict equality (===) - no conversion
5 === "5"    // false (different types)
0 === false  // false (different types)
```

## 🎯 Practice Challenges

### Challenge 1: Order of Operations
What is the result of `2 + 3 * 4`?
- Try it in the console
- Use parentheses to change the order: `(2 + 3) * 4`

### Challenge 2: String Combination
Create a variable with your full name by combining first and last name variables:
```javascript
let firstName = "Your";
let lastName = "Name";
let fullName = firstName + " " + lastName;
```

### Challenge 3: Age Verification
Use comparison operators to check if someone can vote:
```javascript
let age = 20;
let canVote = age >= 18;
console.log("Can vote:", canVote);
```

### Challenge 4: Calculator Enhancement
Try these calculations with the calculator:
- `15.5 + 24.3`
- `100 / 7` (see the decimal result)
- `17 % 5` (find the remainder)
- `2 ** 8` (2 to the power of 8)

## 🔧 Troubleshooting

### Common Issues

**Calculator not working?**
- Make sure JavaScript is enabled
- Check the browser console for errors
- Refresh the page and try again

**Unexpected results?**
- Remember order of operations
- Check for typos in numbers
- Understand the difference between `==` and `===`

**String operations not working?**
- Make sure you're entering text in the input field
- Check that you're clicking the correct buttons
- Look at the console for detailed output

## 🎓 Real-World Applications

### Shopping Cart Calculator
```javascript
let itemPrice = 29.99;
let quantity = 3;
let subtotal = itemPrice * quantity;
let taxRate = 0.08;
let tax = subtotal * taxRate;
let total = subtotal + tax;
```

### Form Validation
```javascript
let password = "myPassword123";
let confirmPassword = "myPassword123";
let passwordsMatch = password === confirmPassword;
let isLongEnough = password.length >= 8;
let isValid = passwordsMatch && isLongEnough;
```

### User Age Verification
```javascript
let userAge = 25;
let minimumAge = 18;
let canAccess = userAge >= minimumAge;
```

## 📖 Code Examples

### Math Operations
```javascript
// Basic arithmetic
let a = 10;
let b = 3;

console.log(a + b);  // 13 (addition)
console.log(a - b);  // 7 (subtraction)
console.log(a * b);  // 30 (multiplication)
console.log(a / b);  // 3.333... (division)
console.log(a % b);  // 1 (remainder)
console.log(a ** b); // 1000 (10 to the power of 3)
```

### String Methods
```javascript
let message = "Hello World";

console.log(message.length);        // 11
console.log(message.toUpperCase()); // "HELLO WORLD"
console.log(message.toLowerCase()); // "hello world"
console.log(message.charAt(0));     // "H"
console.log(message.charAt(6));     // "W"
```

### Comparisons
```javascript
let x = 10;
let y = "10";

console.log(x > 5);     // true
console.log(x < 20);    // true
console.log(x == y);    // true (loose equality)
console.log(x === y);   // false (strict equality)
console.log(x != y);    // false
console.log(x !== y);   // true
```

## 🌟 Next Steps

After mastering this lesson, you'll be ready for **Lesson 4: Making Decisions (Conditionals)**, where you'll learn:
- If/else statements
- Multiple conditions
- Switch statements
- Building decision trees
- Creating interactive programs that respond to user input

## 💻 Technical Notes

### File Structure
```
lesson-03-operations/
├── index.html      # Main lesson page
├── style.css       # Styling and layout
├── script.js       # Interactive functionality
└── README.md       # This guide
```

### Browser Compatibility
- Works in all modern browsers
- Requires JavaScript enabled
- Best viewed with developer tools open

### Performance Tips
- The calculator handles large numbers efficiently
- String operations are optimized for common use cases
- All interactive features provide immediate feedback

---

**Remember**: Math is the foundation of programming! Master these operations and you'll be ready to build amazing applications. 🧮✨
