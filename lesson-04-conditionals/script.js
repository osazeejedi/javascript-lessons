// Welcome message and lesson setup
console.log('🤔 Welcome to Lesson 4: Making Decisions (Conditionals)!');
console.log('Learn how to make your programs smart with decision-making!');
console.log('📚 KEY CONCEPTS TO MASTER:');
console.log('1. If statements: Execute code based on conditions');
console.log('2. If-else statements: Choose between two options');
console.log('3. Multiple conditions: else if for many options');
console.log('4. Logical operators: && (AND), || (OR), ! (NOT)');
console.log('5. Switch statements: Clean way to handle multiple values');
console.log('🎓 Lesson 4 JavaScript loaded successfully!');
console.log('💡 Try all the interactive features and play the adventure game!');

// Age verification demo
function checkVotingAge() {
    const age = parseInt(document.getElementById('age-input').value);
    const resultDiv = document.getElementById('voting-result');
    
    let message = '';
    let isEligible = false;
    
    if (age >= 18) {
        message = `🗳️ Great! At ${age} years old, you are eligible to vote!`;
        isEligible = true;
    } else {
        const yearsLeft = 18 - age;
        message = `⏳ You need to wait ${yearsLeft} more year${yearsLeft > 1 ? 's' : ''} to vote. Current age: ${age}`;
    }
    
    resultDiv.innerHTML = message;
    resultDiv.classList.remove('hidden');
    
    console.log(`🗳️ Voting eligibility check: Age ${age} - ${isEligible ? 'Eligible' : 'Not eligible'}`);
}

// Password strength checker
function checkPasswordStrength() {
    const password = document.getElementById('password-input').value;
    const resultDiv = document.getElementById('password-result');
    
    let message = '';
    let strength = '';
    let color = '';
    
    if (password.length === 0) {
        message = '❌ Please enter a password';
        color = '#dc2626';
    } else if (password.length < 6) {
        message = '🔴 Weak: Password too short (minimum 6 characters)';
        strength = 'weak';
        color = '#dc2626';
    } else if (password.length < 10) {
        message = '🟡 Medium: Good length, but could be stronger';
        strength = 'medium';
        color = '#f59e0b';
    } else {
        message = '🟢 Strong: Excellent password length!';
        strength = 'strong';
        color = '#059669';
    }
    
    resultDiv.innerHTML = `<span style="color: ${color}">${message}</span>`;
    resultDiv.classList.remove('hidden');
    
    console.log(`🔐 Password strength: "${password}" - ${strength || 'empty'}`);
}

// Grade calculator
function calculateGrade() {
    const score = parseInt(document.getElementById('score-input').value);
    const resultDiv = document.getElementById('grade-result');
    
    let grade = '';
    let message = '';
    let emoji = '';
    
    if (score < 0 || score > 100) {
        message = '❌ Please enter a score between 0 and 100';
    } else if (score >= 90) {
        grade = 'A';
        emoji = '🌟';
        message = `${emoji} Excellent! You got an ${grade} with ${score}%`;
    } else if (score >= 80) {
        grade = 'B';
        emoji = '👍';
        message = `${emoji} Good job! You got a ${grade} with ${score}%`;
    } else if (score >= 70) {
        grade = 'C';
        emoji = '👌';
        message = `${emoji} Not bad! You got a ${grade} with ${score}%`;
    } else if (score >= 60) {
        grade = 'D';
        emoji = '😐';
        message = `${emoji} You passed with a ${grade}, but there's room for improvement. Score: ${score}%`;
    } else {
        grade = 'F';
        emoji = '😞';
        message = `${emoji} You got an ${grade}. Don't give up - study harder next time! Score: ${score}%`;
    }
    
    resultDiv.innerHTML = message;
    resultDiv.classList.remove('hidden');
    
    console.log(`📊 Grade calculation: ${score}% = ${grade} grade`);
}

// Movie theater access checker
function checkMovieAccess() {
    const age = parseInt(document.getElementById('viewer-age').value);
    const hasParent = document.getElementById('has-parent').checked;
    const resultDiv = document.getElementById('movie-result');
    
    let gRating = age >= 0; // Everyone can watch G-rated movies
    let pgRating = age >= 8 || (age >= 5 && hasParent);
    let pg13Rating = age >= 13 || (age >= 10 && hasParent);
    let rRating = age >= 17 || (age >= 14 && hasParent);
    
    let message = `<strong>Movie Access for ${age}-year-old${hasParent ? ' with parent/guardian' : ''}:</strong><br>`;
    message += `🟢 G-rated movies: ${gRating ? 'Allowed' : 'Not allowed'}<br>`;
    message += `${pgRating ? '🟢' : '🔴'} PG-rated movies: ${pgRating ? 'Allowed' : 'Not allowed'}<br>`;
    message += `${pg13Rating ? '🟢' : '🔴'} PG-13 movies: ${pg13Rating ? 'Allowed' : 'Not allowed'}<br>`;
    message += `${rRating ? '🟢' : '🔴'} R-rated movies: ${rRating ? 'Allowed' : 'Not allowed'}`;
    
    resultDiv.innerHTML = message;
    resultDiv.classList.remove('hidden');
    
    console.log(`🎬 Movie access check: Age ${age}, With parent: ${hasParent}`);
    console.log(`G: ${gRating}, PG: ${pgRating}, PG-13: ${pg13Rating}, R: ${rRating}`);
}

// Day planner using switch statement
function planDay() {
    const day = document.getElementById('day-select').value;
    const resultDiv = document.getElementById('day-result');
    
    let activity = '';
    let emoji = '';
    
    switch (day) {
        case 'monday':
            activity = 'Start the week strong with goal setting';
            emoji = '💪';
            break;
        case 'tuesday':
            activity = 'Focus on important tasks and projects';
            emoji = '🎯';
            break;
        case 'wednesday':
            activity = 'Midweek check-in and team meetings';
            emoji = '🤝';
            break;
        case 'thursday':
            activity = 'Prepare for the weekend and wrap up tasks';
            emoji = '📋';
            break;
        case 'friday':
            activity = 'Finish strong and plan for next week';
            emoji = '🏁';
            break;
        case 'saturday':
            activity = 'Relax, have fun, and enjoy hobbies';
            emoji = '🎉';
            break;
        case 'sunday':
            activity = 'Rest, reflect, and prepare for the new week';
            emoji = '🧘';
            break;
        default:
            activity = 'Invalid day selected';
            emoji = '❓';
    }
    
    resultDiv.innerHTML = `${emoji} <strong>${day.charAt(0).toUpperCase() + day.slice(1)}:</strong> ${activity}`;
    resultDiv.classList.remove('hidden');
    
    console.log(`📅 Day planner: ${day} - ${activity}`);
}

// Practice challenge functions
function checkTrafficLight() {
    const color = document.getElementById('light-color').value;
    const resultDiv = document.getElementById('traffic-result');
    
    let action = '';
    
    if (color === 'red') {
        action = 'STOP! Wait for green light';
    } else if (color === 'yellow') {
        action = 'CAUTION! Prepare to stop';
    } else if (color === 'green') {
        action = 'GO! Proceed safely';
    }
    
    resultDiv.textContent = action;
    console.log(`🚦 Traffic light: ${color} - ${action}`);
}

function suggestClothing() {
    const temp = parseInt(document.getElementById('temperature').value);
    const resultDiv = document.getElementById('weather-result');
    
    let suggestion = '';
    
    if (temp < 32) {
        suggestion = '🧥 Heavy coat, gloves, and warm boots';
    } else if (temp < 50) {
        suggestion = '🧥 Jacket or sweater recommended';
    } else if (temp < 70) {
        suggestion = '👕 Light jacket or long sleeves';
    } else if (temp < 85) {
        suggestion = '👕 T-shirt and comfortable clothes';
    } else {
        suggestion = '🩳 Light, breathable clothing and stay hydrated';
    }
    
    resultDiv.textContent = suggestion;
    console.log(`🌡️ Temperature: ${temp}°F - ${suggestion}`);
}

function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('login-password').value;
    const resultDiv = document.getElementById('login-result');
    
    // Simple demo credentials
    const validUsername = 'admin';
    const validPassword = 'password123';
    
    let message = '';
    
    if (username === validUsername && password === validPassword) {
        message = '✅ Login successful! Welcome back!';
    } else if (username !== validUsername && password !== validPassword) {
        message = '❌ Both username and password are incorrect';
    } else if (username !== validUsername) {
        message = '❌ Username is incorrect';
    } else {
        message = '❌ Password is incorrect';
    }
    
    resultDiv.textContent = message;
    console.log(`🔐 Login attempt: ${username} - ${message}`);
}

// Adventure Game Implementation
class AdventureGame {
    constructor() {
        this.playerHealth = 100;
        this.playerScore = 0;
        this.currentScene = 'start';
        this.gameState = {
            hasKey: false,
            hasWeapon: false,
            visitedLibrary: false,
            dragonDefeated: false
        };
        
        console.log('🎮 Adventure game initialized!');
        this.updateDisplay();
    }
    
    updateDisplay() {
        document.getElementById('health').textContent = `❤️ Health: ${this.playerHealth}`;
        document.getElementById('score').textContent = `⭐ Score: ${this.playerScore}`;
    }
    
    showStory(text, emoji = '🏰') {
        const storyElement = document.getElementById('story-text');
        const emojiElement = document.querySelector('.castle-emoji');
        
        storyElement.textContent = text;
        emojiElement.textContent = emoji;
        
        // Add typewriter effect
        storyElement.style.animation = 'none';
        setTimeout(() => {
            storyElement.style.animation = 'typewriter 1s ease-in';
        }, 10);
    }
    
    showChoices(choices) {
        const choicesElement = document.getElementById('choices');
        choicesElement.innerHTML = '';
        
        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            button.onclick = () => this.makeChoice(choice.action);
            
            // Add staggered animation
            button.style.animationDelay = `${index * 0.1}s`;
            
            choicesElement.appendChild(button);
        });
    }
    
    changeHealth(amount) {
        this.playerHealth = Math.max(0, Math.min(100, this.playerHealth + amount));
        this.updateDisplay();
        
        if (this.playerHealth <= 0) {
            this.gameOver();
        }
    }
    
    changeScore(amount) {
        this.playerScore += amount;
        this.updateDisplay();
    }
    
    makeChoice(action) {
        console.log(`🎮 Player chose: ${action}`);
        
        switch (this.currentScene) {
            case 'start':
                this.handleStartChoice(action);
                break;
            case 'inside':
                this.handleInsideChoice(action);
                break;
            case 'library':
                this.handleLibraryChoice(action);
                break;
            case 'dungeon':
                this.handleDungeonChoice(action);
                break;
            case 'treasure':
                this.handleTreasureChoice(action);
                break;
            default:
                this.restart();
        }
    }
    
    handleStartChoice(action) {
        if (action === 'enter') {
            this.currentScene = 'inside';
            this.showStory(
                "You push open the heavy wooden door. It creaks loudly as you step into a dimly lit hall. Torches flicker on the walls, casting dancing shadows. You see three passages ahead.",
                '🕯️'
            );
            this.showChoices([
                { text: '📚 Go to the library (left passage)', action: 'library' },
                { text: '⚔️ Explore the dungeon (right passage)', action: 'dungeon' },
                { text: '💎 Head to the treasure room (center passage)', action: 'treasure' }
            ]);
        } else if (action === 'around') {
            const randomEvent = Math.random();
            if (randomEvent > 0.6) {
                this.changeScore(15);
                this.showStory(
                    "As you walk around the castle, you discover a hidden garden with magical herbs! You feel refreshed and gain wisdom.",
                    '🌿'
                );
                this.changeHealth(10);
            } else if (randomEvent > 0.3) {
                this.showStory(
                    "You find an old well behind the castle. The water looks crystal clear and safe to drink.",
                    '🏺'
                );
                this.changeHealth(5);
            } else {
                this.changeHealth(-15);
                this.showStory(
                    "You step into a hidden trap! Thorny vines grab at your legs, causing some damage before you break free.",
                    '🌹'
                );
            }
            
            this.showChoices([
                { text: '🚪 Now enter the castle', action: 'enter' },
                { text: '🏃 Leave this dangerous place', action: 'leave' }
            ]);
        } else if (action === 'leave') {
            this.showStory(
                "You decide that discretion is the better part of valor and walk away. Sometimes the wisest choice is knowing when not to take a risk.",
                '🚶'
            );
            this.changeScore(5);
            this.showChoices([
                { text: '🔄 Restart your adventure', action: 'restart' }
            ]);
        }
    }
    
    handleInsideChoice(action) {
        if (action === 'library') {
            this.currentScene = 'library';
            this.gameState.visitedLibrary = true;
            this.showStory(
                "You enter a vast library filled with ancient books. Dust motes dance in shafts of light. On a pedestal, you see a glowing book and a mysterious key.",
                '📖'
            );
            this.showChoices([
                { text: '📜 Read the glowing book', action: 'read' },
                { text: '🗝️ Take the mysterious key', action: 'key' },
                { text: '🔙 Return to the main hall', action: 'back' }
            ]);
        } else if (action === 'dungeon') {
            this.currentScene = 'dungeon';
            if (this.gameState.hasWeapon) {
                this.showStory(
                    "You descend into the dark dungeon, your weapon ready. You hear growling in the distance...",
                    '⚔️'
                );
            } else {
                this.showStory(
                    "You descend into a dark, damp dungeon. The air is thick and you hear strange noises echoing from the depths. You feel vulnerable without a weapon.",
                    '🕳️'
                );
            }
            this.showChoices([
                { text: '🐉 Face the dragon', action: 'dragon' },
                { text: '🔍 Search for weapons', action: 'search' },
                { text: '🔙 Return to safety', action: 'back' }
            ]);
        } else if (action === 'treasure') {
            this.currentScene = 'treasure';
            if (this.gameState.hasKey) {
                this.showStory(
                    "You use the key to unlock the treasure room! Gold and jewels sparkle in the torchlight. You've found the legendary treasure!",
                    '💰'
                );
                this.changeScore(50);
                this.victory();
            } else {
                this.showStory(
                    "You find the treasure room, but it's locked with a magical seal. You need a special key to enter.",
                    '🔒'
                );
                this.showChoices([
                    { text: '🔙 Go back and find a key', action: 'back' }
                ]);
            }
        }
    }
    
    handleLibraryChoice(action) {
        if (action === 'read') {
            this.changeScore(20);
            this.showStory(
                "The book contains ancient wisdom about the castle! You learn that a dragon guards the dungeon, but it can be defeated with courage and the right strategy.",
                '✨'
            );
            this.gameState.hasWeapon = true;
            this.showChoices([
                { text: '🗝️ Take the key too', action: 'key' },
                { text: '🔙 Return to the main hall', action: 'back' }
            ]);
        } else if (action === 'key') {
            this.gameState.hasKey = true;
            this.changeScore(10);
            this.showStory(
                "You take the mysterious key. It feels warm in your hand and glows with magical energy. This must open something important!",
                '🗝️'
            );
            this.showChoices([
                { text: '📜 Read the book too', action: 'read' },
                { text: '🔙 Return to the main hall', action: 'back' }
            ]);
        } else if (action === 'back') {
            this.currentScene = 'inside';
            this.showStory(
                "You return to the main hall. The three passages await your choice.",
                '🕯️'
            );
            this.showChoices([
                { text: '📚 Go to the library', action: 'library' },
                { text: '⚔️ Explore the dungeon', action: 'dungeon' },
                { text: '💎 Head to the treasure room', action: 'treasure' }
            ]);
        }
    }
    
    handleDungeonChoice(action) {
        if (action === 'dragon') {
            if (this.gameState.hasWeapon && this.playerHealth > 50) {
                this.gameState.dragonDefeated = true;
                this.changeScore(30);
                this.showStory(
                    "Using the wisdom from the ancient book, you cleverly defeat the dragon! It retreats deeper into the dungeon, leaving behind a magical gem.",
                    '🐉'
                );
                this.showChoices([
                    { text: '💎 Take the magical gem', action: 'gem' },
                    { text: '🔙 Return to the main hall', action: 'back' }
                ]);
            } else if (!this.gameState.hasWeapon) {
                this.changeHealth(-30);
                this.showStory(
                    "Without proper preparation, the dragon easily overpowers you! You barely escape with your life. You need knowledge and strategy to defeat such a beast.",
                    '🔥'
                );
                this.showChoices([
                    { text: '🔙 Retreat and regroup', action: 'back' }
                ]);
            } else {
                this.changeHealth(-20);
                this.showStory(
                    "You're too weak to face the dragon effectively! Though you have knowledge, you need more health to succeed.",
                    '😵'
                );
                this.showChoices([
                    { text: '🔙 Retreat and recover', action: 'back' }
                ]);
            }
        } else if (action === 'search') {
            const findWeapon = Math.random() > 0.5;
            if (findWeapon) {
                this.gameState.hasWeapon = true;
                this.changeScore(15);
                this.showStory(
                    "You find an ancient sword hidden in the shadows! It glows with magical power and feels perfectly balanced in your hand.",
                    '⚔️'
                );
            } else {
                this.changeHealth(-10);
                this.showStory(
                    "You search through the dungeon but only find rusty chains and old bones. A rat bites your ankle in the process!",
                    '🐀'
                );
            }
            this.showChoices([
                { text: '🐉 Now face the dragon', action: 'dragon' },
                { text: '🔙 Return to the main hall', action: 'back' }
            ]);
        } else if (action === 'back') {
            this.currentScene = 'inside';
            this.showStory(
                "You return to the main hall, wiser from your experience.",
                '🕯️'
            );
            this.showChoices([
                { text: '📚 Go to the library', action: 'library' },
                { text: '⚔️ Explore the dungeon', action: 'dungeon' },
                { text: '💎 Head to the treasure room', action: 'treasure' }
            ]);
        } else if (action === 'gem') {
            this.changeScore(25);
            this.showStory(
                "The magical gem fills you with power and knowledge! You feel ready to complete your quest.",
                '💎'
            );
            this.showChoices([
                { text: '🔙 Return to complete your adventure', action: 'back' }
            ]);
        }
    }
    
    victory() {
        this.showStory(
            `🎉 Congratulations! You've successfully completed your adventure! Final Score: ${this.playerScore} points. You've proven yourself a true hero!`,
            '👑'
        );
        this.showChoices([
            { text: '🔄 Play again', action: 'restart' }
        ]);
    }
    
    gameOver() {
        this.showStory(
            "💀 Your health has reached zero! The adventure ends here, but every hero learns from their mistakes. Try again with a different strategy!",
            '💀'
        );
        this.showChoices([
            { text: '🔄 Try again', action: 'restart' }
        ]);
    }
    
    restart() {
        this.playerHealth = 100;
        this.playerScore = 0;
        this.currentScene = 'start';
        this.gameState = {
            hasKey: false,
            hasWeapon: false,
            visitedLibrary: false,
            dragonDefeated: false
        };
        
        this.updateDisplay();
        this.showStory(
            "Welcome, brave adventurer! You stand before a mysterious castle. Dark clouds gather overhead, and you hear strange sounds from within. What do you choose to do?",
            '🏰'
        );
        this.showChoices([
            { text: '🚪 Enter the castle', action: 'enter' },
            { text: '🌲 Walk around the castle', action: 'around' },
            { text: '🏃 Leave immediately', action: 'leave' }
        ]);
        
        console.log('🔄 Adventure game restarted!');
    }
}

// Initialize the adventure game
let adventureGame;

// Game control functions
function makeChoice(choice) {
    if (adventureGame) {
        adventureGame.makeChoice(choice);
    }
}

function restartGame() {
    if (adventureGame) {
        adventureGame.restart();
    }
}

function showGameCode() {
    const codeDisplay = document.getElementById('game-code');
    codeDisplay.classList.toggle('hidden');
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', function() {
    adventureGame = new AdventureGame();
    
    console.log('');
    console.log('🎓 BONUS LEARNING EXAMPLES:');
    console.log('');
    
    // Conditional examples
    console.log('🤔 Conditionals in Action:');
    
    // Simple if statement
    let temperature = 75;
    if (temperature > 70) {
        console.log(`🌞 It's warm today at ${temperature}°F - perfect for outdoor activities!`);
    }
    
    // If-else statement
    let isRaining = false;
    if (isRaining) {
        console.log('☔ Take an umbrella!');
    } else {
        console.log('☀️ No umbrella needed today!');
    }
    
    // Multiple conditions
    let score = 85;
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    console.log(`📊 Score: ${score} = Grade: ${grade}`);
    
    // Logical operators
    let age = 20;
    let hasLicense = true;
    let canDrive = age >= 16 && hasLicense;
    console.log(`🚗 Can drive: ${canDrive} (Age: ${age}, Has license: ${hasLicense})`);
    
    let isWeekend = true;
    let isHoliday = false;
    let noWork = isWeekend || isHoliday;
    console.log(`🏖️ No work today: ${noWork} (Weekend: ${isWeekend}, Holiday: ${isHoliday})`);
    
    // Switch statement
    let dayOfWeek = 'friday';
    let activity;
    switch (dayOfWeek) {
        case 'monday':
            activity = 'Start strong!';
            break;
        case 'friday':
            activity = 'TGIF!';
            break;
        case 'saturday':
        case 'sunday':
            activity = 'Relax and enjoy!';
            break;
        default:
            activity = 'Keep working hard!';
    }
    console.log(`📅 ${dayOfWeek}: ${activity}`);
    
    console.log('');
    console.log('🎮 Adventure game ready! Make your choices and see conditionals in action!');
    
    /*
     * LESSON COMPLETION FUNCTIONALITY
     * This handles marking the lesson as complete and saving progress
     */
    
    // Track lesson start
    if (window.parent && window.parent.markLessonStarted) {
        window.parent.markLessonStarted(4);
    } else if (window.markLessonStarted) {
        window.markLessonStarted(4);
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
                window.parent.markLessonCompleted(4, currentTimeSpent).then(() => {
                    showCompletionSuccess();
                }).catch((error) => {
                    console.error('Error saving progress:', error);
                    showCompletionError();
                });
            } else {
                // Standalone lesson page - save to localStorage as fallback
                const progress = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
                progress['lesson_4'] = {
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
        
        console.log('🎉 Lesson 4 completed successfully!');
        console.log('🚀 You can now proceed to Lesson 5!');
        
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
