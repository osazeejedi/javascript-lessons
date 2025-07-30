// Lesson 5: Loops - Interactive JavaScript
console.log("🔄 Welcome to Lesson 5: Loops!");
console.log("In this lesson, you'll master the power of repetition in programming.");

// Global variables for games and animations
let secretNumber = Math.floor(Math.random() * 20) + 1;
let guessCount = 0;
let activeAnimations = [];
let elementsDrawn = 0;
let canvas, ctx;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎯 Lesson 5 loaded! Let's explore loops together.");
    
    // Initialize canvas
    canvas = document.getElementById('drawing-canvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        setupCanvas();
    }
    
    // Show initial examples in console
    demonstrateBasicLoops();
});

// Basic loop demonstrations for console learning
function demonstrateBasicLoops() {
    console.log("\n=== 🔄 Basic Loop Examples ===");
    
    // For loop example
    console.log("\n📊 For Loop Example:");
    console.log("Counting from 1 to 5:");
    for (let i = 1; i <= 5; i++) {
        console.log(`Count: ${i}`);
    }
    
    // While loop example
    console.log("\n⏰ While Loop Example:");
    console.log("Countdown from 5:");
    let countdown = 5;
    while (countdown > 0) {
        console.log(`T-minus ${countdown}...`);
        countdown--;
    }
    console.log("🚀 Blast off!");
    
    // Array iteration example
    console.log("\n📋 Array Iteration Example:");
    const fruits = ['🍎', '🍌', '🍊', '🍇', '🥝'];
    console.log("Fruits in our basket:");
    for (let i = 0; i < fruits.length; i++) {
        console.log(`${i + 1}. ${fruits[i]}`);
    }
}

// Countdown Timer Demo
function startCountdown() {
    const startNum = parseInt(document.getElementById('countdown-start').value) || 10;
    const display = document.getElementById('countdown-display');
    const result = document.getElementById('countdown-result');
    
    console.log(`\n🕐 Starting countdown from ${startNum}:`);
    
    let current = startNum;
    display.textContent = current;
    display.classList.add('pulse');
    
    const timer = setInterval(() => {
        current--;
        display.textContent = current;
        console.log(`Countdown: ${current}`);
        
        if (current <= 0) {
            clearInterval(timer);
            display.textContent = "🎉 DONE!";
            display.classList.remove('pulse');
            
            result.innerHTML = `
                <strong>Countdown Complete!</strong><br>
                <em>This used a for loop with setInterval to create the animation effect.</em><br>
                <code>for (let i = ${startNum}; i >= 0; i--) { ... }</code>
            `;
            result.classList.remove('hidden');
            result.classList.add('fade-in');
            
            console.log("🎉 Countdown finished!");
        }
    }, 500);
}

// Number Guessing Game
function makeGuess() {
    const guessInput = document.getElementById('guess-input');
    const feedback = document.getElementById('guess-feedback');
    const stats = document.getElementById('guess-stats');
    
    const guess = parseInt(guessInput.value);
    
    if (!guess || guess < 1 || guess > 20) {
        feedback.textContent = "Please enter a number between 1 and 20!";
        feedback.style.background = "#fef2f2";
        feedback.style.color = "#dc2626";
        return;
    }
    
    guessCount++;
    console.log(`Guess #${guessCount}: ${guess} (Secret: ${secretNumber})`);
    
    if (guess === secretNumber) {
        feedback.textContent = `🎉 Correct! You found ${secretNumber} in ${guessCount} guesses!`;
        feedback.style.background = "#ecfdf5";
        feedback.style.color = "#059669";
        
        stats.innerHTML = `
            <strong>Game Complete!</strong><br>
            Secret number: ${secretNumber}<br>
            Total guesses: ${guessCount}<br>
            <em>This game used a while loop concept - keep guessing until correct!</em>
        `;
        stats.classList.remove('hidden');
        
        console.log(`🎉 Game won in ${guessCount} guesses!`);
        
    } else if (guess < secretNumber) {
        feedback.textContent = `📈 Too low! Try a higher number. (Guess #${guessCount})`;
        feedback.style.background = "#fef3c7";
        feedback.style.color = "#d97706";
        
    } else {
        feedback.textContent = `📉 Too high! Try a lower number. (Guess #${guessCount})`;
        feedback.style.background = "#fef3c7";
        feedback.style.color = "#d97706";
    }
    
    guessInput.value = '';
    guessInput.focus();
}

function newGuessingGame() {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    guessCount = 0;
    
    document.getElementById('guess-feedback').textContent = "I'm thinking of a new number between 1 and 20...";
    document.getElementById('guess-feedback').style.background = "#f3f4f6";
    document.getElementById('guess-feedback').style.color = "#374151";
    document.getElementById('guess-stats').classList.add('hidden');
    document.getElementById('guess-input').value = '';
    
    console.log(`🎲 New game started! Secret number: ${secretNumber}`);
}

// Number Filter Demo
function filterNumbers() {
    const start = parseInt(document.getElementById('range-start').value) || 1;
    const end = parseInt(document.getElementById('range-end').value) || 20;
    const filterType = document.getElementById('filter-type').value;
    const result = document.getElementById('filter-result');
    
    console.log(`\n🔍 Filtering numbers from ${start} to ${end} for: ${filterType}`);
    
    const filtered = [];
    
    for (let i = start; i <= end; i++) {
        let include = false;
        
        switch (filterType) {
            case 'even':
                if (i % 2 === 0) include = true;
                break;
            case 'odd':
                if (i % 2 !== 0) include = true;
                break;
            case 'divisible3':
                if (i % 3 === 0) include = true;
                break;
            case 'prime':
                if (isPrime(i)) include = true;
                break;
        }
        
        if (include) {
            filtered.push(i);
            console.log(`✅ ${i} matches criteria`);
        } else {
            console.log(`❌ ${i} skipped (continue statement)`);
        }
    }
    
    const filterNames = {
        'even': 'Even Numbers',
        'odd': 'Odd Numbers',
        'divisible3': 'Numbers Divisible by 3',
        'prime': 'Prime Numbers'
    };
    
    result.innerHTML = `
        <strong>${filterNames[filterType]} from ${start} to ${end}:</strong><br>
        ${filtered.join(', ')}<br><br>
        <em>Found ${filtered.length} numbers using loop control (continue statement)</em>
    `;
    result.classList.remove('hidden');
    result.classList.add('fade-in');
    
    console.log(`🎯 Found ${filtered.length} ${filterType} numbers: [${filtered.join(', ')}]`);
}

// Helper function to check if number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Pattern Generator
function generatePattern() {
    const patternType = document.getElementById('pattern-type').value;
    const size = parseInt(document.getElementById('pattern-size').value) || 5;
    const display = document.getElementById('pattern-display');
    
    console.log(`\n🎨 Generating ${patternType} pattern with size ${size}:`);
    
    let pattern = '';
    
    switch (patternType) {
        case 'square':
            pattern = generateSquarePattern(size);
            break;
        case 'triangle':
            pattern = generateTrianglePattern(size);
            break;
        case 'diamond':
            pattern = generateDiamondPattern(size);
            break;
        case 'multiplication':
            pattern = generateMultiplicationTable(size);
            break;
    }
    
    display.textContent = pattern;
    display.classList.add('fade-in');
    
    console.log("Pattern generated using nested loops!");
}

function generateSquarePattern(size) {
    let pattern = '';
    console.log("Creating square pattern with nested loops:");
    
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            pattern += '⭐ ';
        }
        pattern += '\n';
        console.log(`Row ${row + 1} complete`);
    }
    
    return pattern;
}

function generateTrianglePattern(size) {
    let pattern = '';
    console.log("Creating triangle pattern with nested loops:");
    
    for (let row = 1; row <= size; row++) {
        for (let col = 1; col <= row; col++) {
            pattern += '🔺 ';
        }
        pattern += '\n';
        console.log(`Row ${row}: ${row} triangles`);
    }
    
    return pattern;
}

function generateDiamondPattern(size) {
    let pattern = '';
    console.log("Creating diamond pattern with nested loops:");
    
    // Upper half
    for (let row = 1; row <= size; row++) {
        // Spaces
        for (let space = 1; space <= size - row; space++) {
            pattern += '  ';
        }
        // Stars
        for (let star = 1; star <= row; star++) {
            pattern += '💎 ';
        }
        pattern += '\n';
    }
    
    // Lower half
    for (let row = size - 1; row >= 1; row--) {
        // Spaces
        for (let space = 1; space <= size - row; space++) {
            pattern += '  ';
        }
        // Stars
        for (let star = 1; star <= row; star++) {
            pattern += '💎 ';
        }
        pattern += '\n';
    }
    
    return pattern;
}

function generateMultiplicationTable(size) {
    let pattern = '';
    console.log("Creating multiplication table with nested loops:");
    
    // Header
    pattern += '   ';
    for (let col = 1; col <= size; col++) {
        pattern += `${col.toString().padStart(4)} `;
    }
    pattern += '\n';
    pattern += '   ' + '─'.repeat(size * 5) + '\n';
    
    // Table rows
    for (let row = 1; row <= size; row++) {
        pattern += `${row.toString().padStart(2)} │`;
        for (let col = 1; col <= size; col++) {
            const product = row * col;
            pattern += `${product.toString().padStart(4)} `;
        }
        pattern += '\n';
        console.log(`Row ${row} of multiplication table complete`);
    }
    
    return pattern;
}

// Canvas Drawing Functions
function setupCanvas() {
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Touch events for mobile
    canvas.addEventListener('touchstart', handleTouch);
    canvas.addEventListener('touchmove', handleTouch);
    canvas.addEventListener('touchend', stopDrawing);
    
    clearCanvas();
    updateStats();
}

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = getMousePos(e);
}

function draw(e) {
    if (!isDrawing) return;
    
    const [currentX, currentY] = getMousePos(e);
    const color = document.getElementById('draw-color').value;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    
    [lastX, lastY] = [currentX, currentY];
    elementsDrawn++;
    updateStats();
}

function stopDrawing() {
    isDrawing = false;
}

function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return [
        e.clientX - rect.left,
        e.clientY - rect.top
    ];
}

function handleTouch(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent(e.type === 'touchstart' ? 'mousedown' : 
                                     e.type === 'touchmove' ? 'mousemove' : 'mouseup', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

// Pattern Drawing Functions
function drawCirclePattern() {
    const color = document.getElementById('draw-color').value;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    
    console.log("🔵 Drawing circle pattern using for loops:");
    
    // Nested loops to create circle grid
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 12; col++) {
            const x = 50 + col * 50;
            const y = 50 + row * 40;
            const radius = 15;
            
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.stroke();
            
            elementsDrawn++;
        }
        console.log(`Circle row ${row + 1} complete`);
    }
    
    updateStats();
    console.log("Circle pattern complete!");
}

function drawSquarePattern() {
    const color = document.getElementById('draw-color').value;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    
    console.log("🟦 Drawing square pattern using nested loops:");
    
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 12; col++) {
            const x = 25 + col * 50;
            const y = 25 + row * 40;
            const size = 30;
            
            ctx.strokeRect(x, y, size, size);
            elementsDrawn++;
        }
        console.log(`Square row ${row + 1} complete`);
    }
    
    updateStats();
    console.log("Square pattern complete!");
}

function drawSpiralPattern() {
    const color = document.getElementById('draw-color').value;
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    
    console.log("🌀 Drawing spiral using mathematical loops:");
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    ctx.beginPath();
    
    // Use loop to create spiral
    for (let angle = 0; angle < 720; angle += 2) {
        const radius = angle / 10;
        const x = centerX + radius * Math.cos(angle * Math.PI / 180);
        const y = centerY + radius * Math.sin(angle * Math.PI / 180);
        
        if (angle === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        
        if (angle % 90 === 0) {
            console.log(`Spiral progress: ${Math.round(angle / 720 * 100)}%`);
        }
    }
    
    ctx.stroke();
    elementsDrawn += 360;
    updateStats();
    console.log("Spiral complete!");
}

function drawStarField() {
    const color = document.getElementById('draw-color').value;
    ctx.fillStyle = color;
    
    console.log("⭐ Drawing star field using random loops:");
    
    // Use loop to place random stars
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3 + 1;
        
        // Draw star
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
        
        elementsDrawn++;
        
        if (i % 20 === 0) {
            console.log(`Stars placed: ${i + 1}/100`);
        }
    }
    
    updateStats();
    console.log("Star field complete!");
}

// Animation Functions
function startRainAnimation() {
    console.log("🌧️ Starting rain animation with while loop:");
    
    const raindrops = [];
    
    // Create initial raindrops
    for (let i = 0; i < 50; i++) {
        raindrops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 3 + 2,
            length: Math.random() * 20 + 10
        });
    }
    
    const animationId = setInterval(() => {
        // Clear and redraw
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 2;
        
        // Update and draw each raindrop
        for (let drop of raindrops) {
            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x, drop.y + drop.length);
            ctx.stroke();
            
            // Move raindrop down
            drop.y += drop.speed;
            
            // Reset if off screen
            if (drop.y > canvas.height) {
                drop.y = -drop.length;
                drop.x = Math.random() * canvas.width;
            }
        }
        
        elementsDrawn += raindrops.length;
        updateStats();
    }, 50);
    
    activeAnimations.push(animationId);
    updateStats();
    console.log("Rain animation started!");
}

function startFireworks() {
    console.log("🎆 Starting fireworks animation:");
    
    const particles = [];
    
    const animationId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Create new firework
        if (Math.random() < 0.1) {
            const centerX = Math.random() * canvas.width;
            const centerY = Math.random() * (canvas.height / 2) + 50;
            
            // Create explosion particles
            for (let i = 0; i < 20; i++) {
                particles.push({
                    x: centerX,
                    y: centerY,
                    vx: (Math.random() - 0.5) * 10,
                    vy: (Math.random() - 0.5) * 10,
                    life: 60,
                    color: `hsl(${Math.random() * 360}, 100%, 50%)`
                });
            }
        }
        
        // Update and draw particles
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, 2 * Math.PI);
            ctx.fill();
            
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1; // gravity
            p.life--;
            
            if (p.life <= 0) {
                particles.splice(i, 1);
            }
        }
        
        elementsDrawn += particles.length;
        updateStats();
    }, 50);
    
    activeAnimations.push(animationId);
    updateStats();
    console.log("Fireworks animation started!");
}

function startWaveAnimation() {
    console.log("🌊 Starting wave animation:");
    
    let time = 0;
    
    const animationId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 3;
        
        // Draw multiple waves
        for (let wave = 0; wave < 3; wave++) {
            ctx.beginPath();
            
            for (let x = 0; x < canvas.width; x += 5) {
                const y = canvas.height / 2 + 
                         Math.sin((x + time + wave * 100) * 0.02) * (30 + wave * 10);
                
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            
            ctx.stroke();
        }
        
        time += 5;
        elementsDrawn += 3;
        updateStats();
    }, 50);
    
    activeAnimations.push(animationId);
    updateStats();
    console.log("Wave animation started!");
}

function stopAllAnimations() {
    console.log("⏹️ Stopping all animations:");
    
    activeAnimations.forEach(id => {
        clearInterval(id);
        console.log(`Animation ${id} stopped`);
    });
    
    activeAnimations = [];
    updateStats();
    console.log("All animations stopped!");
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    elementsDrawn = 0;
    updateStats();
    console.log("🧹 Canvas cleared!");
}

function saveCanvas() {
    const link = document.createElement('a');
    link.download = 'my-loop-art.png';
    link.href = canvas.toDataURL();
    link.click();
    console.log("💾 Canvas saved as image!");
}

function updateStats() {
    document.getElementById('active-loops').textContent = activeAnimations.length;
    document.getElementById('elements-count').textContent = elementsDrawn;
}

// Practice Challenge Functions
function runFizzBuzz() {
    const result = document.getElementById('fizzbuzz-result');
    
    console.log("\n🎯 Running FizzBuzz Challenge:");
    
    let output = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            output += 'FizzBuzz ';
            console.log(`${i}: FizzBuzz`);
        } else if (i % 3 === 0) {
            output += 'Fizz ';
            console.log(`${i}: Fizz`);
        } else if (i % 5 === 0) {
            output += 'Buzz ';
            console.log(`${i}: Buzz`);
        } else {
            output += i + ' ';
        }
        
        if (i % 20 === 0) {
            output += '\n';
        }
    }
    
    result.textContent = output;
    console.log("FizzBuzz complete!");
}

function calculateSum() {
    const start = parseInt(document.getElementById('sum-start').value) || 1;
    const end = parseInt(document.getElementById('sum-end').value) || 100;
    const result = document.getElementById('sum-result');
    
    console.log(`\n➕ Calculating sum from ${start} to ${end}:`);
    
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
        if (i <= start + 5 || i >= end - 5) {
            console.log(`Adding ${i}, sum now: ${sum}`);
        } else if (i === start + 6) {
            console.log("... (continuing calculation) ...");
        }
    }
    
    result.textContent = `Sum of ${start} to ${end} = ${sum}`;
    console.log(`✅ Final sum: ${sum}`);
}

function calculateFactorial() {
    const num = parseInt(document.getElementById('factorial-input').value) || 5;
    const result = document.getElementById('factorial-result');
    
    console.log(`\n🔢 Calculating ${num}! (factorial):`);
    
    let factorial = 1;
    let calculation = '';
    
    for (let i = 1; i <= num; i++) {
        factorial *= i;
        calculation += i + (i < num ? ' × ' : '');
        console.log(`${i}! step: ${factorial}`);
    }
    
    result.innerHTML = `${num}! = ${calculation} = ${factorial}`;
    console.log(`✅ ${num}! = ${factorial}`);
}

function findPrimes() {
    const limit = parseInt(document.getElementById('prime-limit').value) || 50;
    const result = document.getElementById('prime-result');
    
    console.log(`\n🔍 Finding prime numbers up to ${limit}:`);
    
    const primes = [];
    
    for (let num = 2; num <= limit; num++) {
        let isPrimeNum = true;
        
        // Check if number is prime
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrimeNum = false;
                break; // Use break to exit early
            }
        }
        
        if (isPrimeNum) {
            primes.push(num);
            console.log(`✅ ${num} is prime`);
        }
    }
    
    result.innerHTML = `Primes up to ${limit}:<br>${primes.join(', ')}<br><br>Found ${primes.length} prime numbers`;
    console.log(`🎯 Found ${primes.length} primes: [${primes.join(', ')}]`);
}

// Allow Enter key for inputs
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const target = e.target;
        
        if (target.id === 'guess-input') {
            makeGuess();
        } else if (target.id === 'countdown-start') {
            startCountdown();
        } else if (target.id === 'sum-start' || target.id === 'sum-end') {
            calculateSum();
        } else if (target.id === 'factorial-input') {
            calculateFactorial();
        } else if (target.id === 'prime-limit') {
            findPrimes();
        }
    }
});

console.log("🎓 Lesson 5 JavaScript loaded! Try the interactive demos above.");
console.log("💡 Tip: Open the browser console to see detailed loop execution logs!");

/*
 * LESSON COMPLETION FUNCTIONALITY
 * This handles marking the lesson as complete and saving progress
 */

// Track lesson start
if (window.parent && window.parent.markLessonStarted) {
    window.parent.markLessonStarted(5);
} else if (window.markLessonStarted) {
    window.markLessonStarted(5);
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
                window.parent.markLessonCompleted(5, currentTimeSpent).then(() => {
                    showCompletionSuccess();
                }).catch((error) => {
                    console.error('Error saving progress:', error);
                    showCompletionError();
                });
            } else {
                // Standalone lesson page - save to localStorage as fallback
                const progress = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
                progress['lesson_5'] = {
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
        
        console.log('🎉 Lesson 5 completed successfully!');
        console.log('🚀 You can now proceed to Lesson 6!');
        
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
