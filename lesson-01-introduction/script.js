/*
 * Lesson 1: Introduction to JavaScript
 * This file contains interactive examples to demonstrate JavaScript concepts
 */

// Wait for the page to load completely before running our JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Welcome message in the console
    console.log("🎉 Welcome to your JavaScript journey!");
    console.log("This message is coming from JavaScript!");
    
    // Track lesson start - simplified version
    if (window.parent && window.parent.markLessonStarted) {
        window.parent.markLessonStarted(1);
    } else if (window.markLessonStarted) {
        window.markLessonStarted(1);
    }
    
    // Track time spent on lesson
    let startTime = Date.now();
    let timeSpent = 0;
    
    // Update time spent every 30 seconds
    setInterval(function() {
        timeSpent = Math.floor((Date.now() - startTime) / 1000 / 60); // minutes
    }, 30000);
    
    /*
     * CONCEPT 1: Making elements interactive
     * This shows how JavaScript can respond to user actions (events)
     */
    
    // Get the magic button element from the HTML
    const magicButton = document.getElementById('magic-button');
    // Get the hidden text element
    const magicText = document.getElementById('magic-text');
    
    // Add a "click" event listener to the button
    magicButton.addEventListener('click', function() {
        // When clicked, show the hidden text
        magicText.classList.remove('hidden');
        magicText.classList.add('show');
        
        // Change the button text
        magicButton.textContent = "Magic happened! ✨";
        
        // Log to console
        console.log("Magic button was clicked!");
    });
    
    /*
     * CONCEPT 2: Your first "Hello World" program
     * This demonstrates console.log() and displaying output on the page
     */
    
    const helloButton = document.getElementById('hello-button');
    const helloOutput = document.getElementById('hello-output');
    
    helloButton.addEventListener('click', function() {
        // This is the classic "Hello World" program!
        console.log("Hello, World!");
        
        // We can also display it on the webpage
        helloOutput.textContent = "Hello, World! (Check the console too!)";
        
        // Show some additional information
        console.log("🎯 This is your first JavaScript program!");
        console.log("💡 console.log() is used to display messages in the console");
    });
    
    /*
     * CONCEPT 3: Changing page appearance dynamically
     * This shows how JavaScript can modify CSS styles
     */
    
    const colorButton = document.getElementById('color-button');
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];
    let currentColorIndex = 0;
    
    colorButton.addEventListener('click', function() {
        // Change to the next color
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        document.body.style.background = colors[currentColorIndex];
        
        // Update button text
        colorButton.textContent = `Color ${currentColorIndex + 1}/5 - Click for next!`;
        
        // Log the action
        console.log(`Background changed to color ${currentColorIndex + 1}`);
        console.log("🎨 JavaScript can change how things look!");
    });
    
    /*
     * BONUS: Some encouraging messages
     * This shows how we can use JavaScript to create dynamic content
     */
    
    // Array of encouraging messages
    const encouragements = [
        "You're doing great! 🌟",
        "Every expert was once a beginner! 💪",
        "Keep exploring and clicking! 🚀",
        "JavaScript is fun, isn't it? 😊",
        "You're on your way to becoming a pro! 🎯"
    ];
    
    // Show a random encouraging message every 10 seconds
    setInterval(function() {
        const randomMessage = encouragements[Math.floor(Math.random() * encouragements.length)];
        console.log("💬 " + randomMessage);
    }, 10000); // 10000 milliseconds = 10 seconds
    
    /*
     * LEARNING NOTES:
     * 
     * 1. document.getElementById() - finds an HTML element by its ID
     * 2. addEventListener() - makes elements respond to user actions
     * 3. console.log() - displays messages in the browser console
     * 4. textContent - changes the text inside an element
     * 5. classList.add/remove() - adds or removes CSS classes
     * 6. style.property - changes CSS styles directly
     * 
     * These are fundamental JavaScript concepts you'll use constantly!
     */
    
    // Final welcome message
    console.log("🎓 Lesson 1 JavaScript loaded successfully!");
    console.log("💡 Try clicking all the buttons and watch what happens!");
    console.log("🔍 Keep this console open to see JavaScript in action!");
    
    /*
     * LESSON COMPLETION FUNCTIONALITY
     * This handles marking the lesson as complete and saving progress
     */
    
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
            window.parent.markLessonCompleted(1, currentTimeSpent).then(() => {
                showCompletionSuccess();
            }).catch((error) => {
                console.error('Error saving progress:', error);
                showCompletionError();
            });
        } else {
            // Standalone lesson page - save to localStorage as fallback
            const progress = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
            progress['lesson_1'] = {
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
        
        console.log('🎉 Lesson 1 completed successfully!');
        console.log('🚀 You can now proceed to Lesson 2!');
        
        // Show celebration effect
        setTimeout(() => {
            document.body.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
            setTimeout(() => {
                document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
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
 * ✅ What programming is (giving instructions to computers)
 * ✅ What JavaScript does (makes websites interactive)
 * ✅ How to write your first JavaScript code
 * ✅ How JavaScript works with HTML and CSS
 * ✅ How to see JavaScript output in the console
 * ✅ How JavaScript responds to user interactions
 * 
 * NEXT LESSON PREVIEW:
 * In Lesson 2, you'll learn about VARIABLES - how to store and use information!
 * You'll build an interactive name greeter that remembers what you type!
 */
