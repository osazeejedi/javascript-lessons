/*
 * Lesson 2: Variables and Data Types
 * This file demonstrates how to create, use, and manipulate variables
 */

// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Welcome message and demonstration variables
    console.log("📦 Welcome to Lesson 2: Variables and Data Types!");
    console.log("Let's learn how to store information in JavaScript!");
    
    /*
     * DEMONSTRATION VARIABLES
     * These show the three main data types in JavaScript
     */
    
    // String variable (text)
    let userName = "Alice";
    console.log("📝 String variable:", userName);
    
    // Number variable
    let userAge = 28;
    console.log("🔢 Number variable:", userAge);
    
    // Boolean variable (true/false)
    let isStudent = true;
    console.log("✅ Boolean variable:", isStudent);
    
    /*
     * INTERACTIVE FEATURE 1: Create Variable Demo
     */
    const nameInput = document.getElementById('name-input');
    const createVariableBtn = document.getElementById('create-variable-btn');
    const variableOutput = document.getElementById('variable-output');
    
    createVariableBtn.addEventListener('click', function() {
        const inputValue = nameInput.value;
        
        if (inputValue.trim() === '') {
            variableOutput.textContent = "Please enter a name first!";
            variableOutput.style.background = "#f8d7da";
            variableOutput.style.color = "#721c24";
        } else {
            // Create a variable with the user's input
            let userInputName = inputValue;
            
            variableOutput.textContent = `✅ Created variable: let userInputName = "${userInputName}"`;
            variableOutput.style.background = "#d4edda";
            variableOutput.style.color = "#155724";
            
            console.log("🎯 User created variable:", userInputName);
            console.log("💡 This is how you store text in a variable!");
        }
        
        variableOutput.classList.remove('hidden');
        variableOutput.classList.add('show');
    });
    
    /*
     * DATA TYPE DEMONSTRATIONS
     * These functions show different data types in action
     */
    
    // Global functions for data type demonstrations
    window.demonstrateNumber = function() {
        let score = 100;
        let lives = 3;
        let totalPoints = score * lives;
        
        document.getElementById('number-demo').textContent = 
            `score = ${score}, lives = ${lives}, total = ${totalPoints}`;
        
        console.log("🔢 Number demo:", { score, lives, totalPoints });
    };
    
    window.demonstrateString = function() {
        let firstName = "John";
        let lastName = "Doe";
        let fullName = firstName + " " + lastName;
        
        document.getElementById('string-demo').textContent = 
            `"${firstName}" + " " + "${lastName}" = "${fullName}"`;
        
        console.log("📝 String demo:", { firstName, lastName, fullName });
    };
    
    window.demonstrateBoolean = function() {
        let isLoggedIn = true;
        let hasPermission = false;
        let canAccess = isLoggedIn && hasPermission;
        
        document.getElementById('boolean-demo').textContent = 
            `isLoggedIn: ${isLoggedIn}, hasPermission: ${hasPermission}, canAccess: ${canAccess}`;
        
        console.log("✅ Boolean demo:", { isLoggedIn, hasPermission, canAccess });
    };
    
    /*
     * INTERACTIVE FEATURE 2: Build Greeting
     */
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const userAgeInput = document.getElementById('user-age');
    const buildGreetingBtn = document.getElementById('build-greeting-btn');
    const greetingOutput = document.getElementById('greeting-output');
    
    buildGreetingBtn.addEventListener('click', function() {
        // Get values from inputs and store in variables
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let age = userAgeInput.value;
        
        // Validate inputs
        if (!firstName || !lastName || !age) {
            greetingOutput.textContent = "Please fill in all fields!";
            greetingOutput.style.background = "#f8d7da";
            greetingOutput.style.color = "#721c24";
        } else {
            // Combine variables to create a greeting
            let fullName = firstName + " " + lastName;
            let greeting = "Hello, " + fullName + "! You are " + age + " years old.";
            
            greetingOutput.textContent = greeting;
            greetingOutput.style.background = "#d4edda";
            greetingOutput.style.color = "#155724";
            
            console.log("🎯 Variables used:", { firstName, lastName, age, fullName });
            console.log("💬 Generated greeting:", greeting);
        }
        
        greetingOutput.classList.remove('hidden');
        greetingOutput.classList.add('show');
    });
    
    /*
     * INTERACTIVE FEATURE 3: Score Counter (Variable Changes)
     */
    let currentScore = 0; // This variable will change!
    const scoreDisplay = document.getElementById('current-score');
    const addPointsBtn = document.getElementById('add-points-btn');
    const resetScoreBtn = document.getElementById('reset-score-btn');
    
    // Update score display
    function updateScoreDisplay() {
        scoreDisplay.textContent = currentScore;
        console.log("📊 Score updated to:", currentScore);
    }
    
    addPointsBtn.addEventListener('click', function() {
        // Change the variable's value
        currentScore = currentScore + 10; // or currentScore += 10;
        updateScoreDisplay();
        
        console.log("➕ Added 10 points! New score:", currentScore);
    });
    
    resetScoreBtn.addEventListener('click', function() {
        // Reset the variable to 0
        currentScore = 0;
        updateScoreDisplay();
        
        console.log("🔄 Score reset to 0");
    });
    
    /*
     * INTERACTIVE FEATURE 4: Personal Info Card Project
     */
    const projectNameInput = document.getElementById('project-name');
    const projectAgeInput = document.getElementById('project-age');
    const projectHobbyInput = document.getElementById('project-hobby');
    const projectColorInput = document.getElementById('project-color');
    const createCardBtn = document.getElementById('create-card-btn');
    const infoCard = document.getElementById('info-card');
    const cardContent = document.getElementById('card-content');
    
    createCardBtn.addEventListener('click', function() {
        // Store all input values in variables
        let name = projectNameInput.value;
        let age = projectAgeInput.value;
        let hobby = projectHobbyInput.value;
        let favoriteColor = projectColorInput.value;
        
        // Validate all inputs
        if (!name || !age || !hobby || !favoriteColor) {
            alert("Please fill in all fields to create your card!");
            return;
        }
        
        // Create additional variables with calculations
        let birthYear = new Date().getFullYear() - parseInt(age);
        let isAdult = parseInt(age) >= 18;
        let ageGroup = parseInt(age) < 13 ? "child" : 
                      parseInt(age) < 20 ? "teenager" : 
                      parseInt(age) < 60 ? "adult" : "senior";
        
        // Build the card content using variables
        let cardHTML = `
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>🎂 Age:</strong> ${age} years old (born in ${birthYear})</p>
            <p><strong>🎯 Hobby:</strong> ${hobby}</p>
            <p><strong>🎨 Favorite Color:</strong> ${favoriteColor}</p>
            <p><strong>📊 Age Group:</strong> ${ageGroup}</p>
            <p><strong>🔞 Adult Status:</strong> ${isAdult ? "Yes" : "No"}</p>
        `;
        
        cardContent.innerHTML = cardHTML;
        infoCard.classList.remove('hidden');
        infoCard.classList.add('show');
        
        // Log all variables to console
        console.log("🎉 Personal Info Card Created!");
        console.log("Variables used:", {
            name,
            age,
            hobby,
            favoriteColor,
            birthYear,
            isAdult,
            ageGroup
        });
    });
    
    /*
     * BONUS: Variable Type Checking
     * This shows how to check what type of data a variable contains
     */
    
    setTimeout(function() {
        console.log("🔍 BONUS: Variable Type Checking");
        
        let exampleString = "Hello";
        let exampleNumber = 42;
        let exampleBoolean = true;
        
        console.log(`"${exampleString}" is type:`, typeof exampleString);
        console.log(`${exampleNumber} is type:`, typeof exampleNumber);
        console.log(`${exampleBoolean} is type:`, typeof exampleBoolean);
        
        console.log("💡 Use 'typeof' to check variable types!");
    }, 5000);
    
    /*
     * LEARNING NOTES FOR CONSOLE
     */
    console.log("📚 KEY CONCEPTS LEARNED:");
    console.log("1. Variables store information using 'let variableName = value'");
    console.log("2. Strings (text) go in quotes: 'Hello' or \"Hello\"");
    console.log("3. Numbers don't need quotes: 42, 3.14, -10");
    console.log("4. Booleans are true or false (no quotes)");
    console.log("5. Variables can change: score = score + 10");
    console.log("6. Combine strings with +: firstName + \" \" + lastName");
    
    console.log("🎓 Lesson 2 JavaScript loaded successfully!");
    console.log("💡 Try all the interactive features and watch the variables in action!");
    
    /*
     * LESSON COMPLETION FUNCTIONALITY
     * This handles marking the lesson as complete and saving progress
     */
    
    // Track lesson start
    if (window.parent && window.parent.markLessonStarted) {
        window.parent.markLessonStarted(2);
    } else if (window.markLessonStarted) {
        window.markLessonStarted(2);
    }
    
    // Track time spent on lesson
    let startTime = Date.now();
    let timeSpent = 0;
    
    // Update time spent every 30 seconds
    setInterval(function() {
        timeSpent = Math.floor((Date.now() - startTime) / 1000 / 60); // minutes
    }, 30000);
    
    const completeButton = document.getElementById('complete-lesson-btn');
    const completionMessage = document.getElementById('completion-message');
    
    completeButton.addEventListener('click', function() {
        // Calculate time spent (in minutes)
        const currentTimeSpent = Math.max(Math.floor((Date.now() - startTime) / 1000 / 60), 5); // minimum 5 minutes
        
        // Disable button to prevent multiple clicks
        completeButton.disabled = true;
        completeButton.textContent = 'Saving Progress...';
        
        // Try to mark lesson as completed
        if (window.parent && window.parent.markLessonCompleted) {
            // Called from within dashboard iframe
            window.parent.markLessonCompleted(2, currentTimeSpent).then(() => {
                showCompletionSuccess();
            }).catch((error) => {
                console.error('Error saving progress:', error);
                showCompletionError();
            });
        } else {
            // Standalone lesson page - save to localStorage as fallback
            const progress = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
            progress['lesson_2'] = {
                completed: true,
                timeSpent: currentTimeSpent,
                completedAt: new Date().toISOString()
            };
            localStorage.setItem('lessonProgress', JSON.stringify(progress));
            showCompletionSuccess();
        }
    });
    
    function showCompletionSuccess() {
        completeButton.textContent = '✅ Completed!';
        completeButton.style.background = '#22c55e';
        completionMessage.classList.remove('hidden');
        completionMessage.classList.add('show');
        
        console.log('🎉 Lesson 2 completed successfully!');
        console.log('🚀 You can now proceed to Lesson 3!');
        
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

/*
 * WHAT YOU'VE LEARNED:
 * 
 * ✅ What variables are (labeled storage boxes)
 * ✅ How to create variables with 'let'
 * ✅ Three main data types: strings, numbers, booleans
 * ✅ How to use variables in your code
 * ✅ How to change variable values
 * ✅ How to combine variables to create new information
 * ✅ Real-world applications of variables
 * 
 * NEXT LESSON PREVIEW:
 * In Lesson 3, you'll learn about BASIC OPERATIONS:
 * - Math operations (+, -, *, /)
 * - String manipulation
 * - Comparison operators (>, <, ==)
 * - Building a calculator app!
 */
