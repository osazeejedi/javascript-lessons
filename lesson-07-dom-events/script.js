/**
 * DOM Manipulation and Event Handling - Lesson 7 JavaScript
 * 
 * This file contains implementations for all exercises in the DOM lesson.
 * Some functions are complete (for demonstration), while others have
 * TODO sections for students to complete.
 */

// ============================================================================
// GLOBAL VARIABLES AND STATE
// ============================================================================

// Navigation state
let currentExercise = 'exercise1';

// Exercise 2: Counter state
let counterValue = 0;
let totalClicks = 0;

// Exercise 3: Todo list state
let todos = [];
let todoIdCounter = 0;

// Exercise 4: Form validation state
let formValidation = {
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
    age: false
};

// Exercise 5: Gallery state
let currentImageIndex = 0;
let slideshowInterval = null;
const images = [
    {
        src: 'https://via.placeholder.com/400x300/e74c3c/ffffff?text=Image+1',
        title: 'Beautiful Landscape',
        description: 'A stunning view of nature\'s beauty'
    },
    {
        src: 'https://via.placeholder.com/400x300/3498db/ffffff?text=Image+2',
        title: 'Ocean Waves',
        description: 'Peaceful waves crashing on the shore'
    },
    {
        src: 'https://via.placeholder.com/400x300/27ae60/ffffff?text=Image+3',
        title: 'Mountain Peak',
        description: 'Majestic mountain reaching for the sky'
    },
    {
        src: 'https://via.placeholder.com/400x300/f39c12/ffffff?text=Image+4',
        title: 'Golden Sunset',
        description: 'A breathtaking sunset over the horizon'
    },
    {
        src: 'https://via.placeholder.com/400x300/9b59b6/ffffff?text=Image+5',
        title: 'Purple Flowers',
        description: 'Vibrant purple flowers in full bloom'
    },
    {
        src: 'https://via.placeholder.com/400x300/34495e/ffffff?text=Image+6',
        title: 'City Skyline',
        description: 'Modern city skyline at twilight'
    }
];

// Exercise 6: Calculator state
let currentInput = '0';
let previousInput = '';
let operator = null;
let waitingForOperand = false;
let calculationHistory = [];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Wait for DOM to be fully loaded before initializing
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 DOM Manipulation & Event Handling Lesson Started!');
    initializeAllExercises();
});

/**
 * Show a specific exercise and hide others
 * @param {string} exerciseId - The ID of the exercise to show
 */
function showExercise(exerciseId) {
    // Hide all exercises
    const exercises = document.querySelectorAll('.exercise');
    exercises.forEach(exercise => {
        exercise.classList.remove('active');
    });

    // Remove active class from all nav buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected exercise
    const targetExercise = document.getElementById(exerciseId);
    if (targetExercise) {
        targetExercise.classList.add('active');
        currentExercise = exerciseId;
    }

    // Add active class to corresponding nav button
    const activeNavBtn = document.querySelector(`[data-exercise="${exerciseId}"]`);
    if (activeNavBtn) {
        activeNavBtn.classList.add('active');
    }

    console.log(`📍 Switched to ${exerciseId}`);
}

/**
 * Add a CSS class with animation
 * @param {Element} element - The element to animate
 * @param {string} className - The CSS class to add
 * @param {number} duration - Duration in milliseconds
 */
function addAnimationClass(element, className, duration = 500) {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
    }, duration);
}

// ============================================================================
// NAVIGATION SETUP
// ============================================================================

/**
 * Initialize navigation between exercises
 */
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const exerciseId = this.getAttribute('data-exercise');
            showExercise(exerciseId);
        });
    });

    console.log('✅ Navigation setup complete');
}

// ============================================================================
// EXERCISE 1: ELEMENT SELECTION AND MODIFICATION
// ============================================================================

/**
 * Initialize Exercise 1: Element Selection and Modification
 */
function initializeExercise1() {
    console.log('🎯 Initializing Exercise 1: Element Selection');

    // Get references to buttons
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeColorBtn = document.getElementById('change-color-btn');
    const changeImageBtn = document.getElementById('change-image-btn');
    const highlightItemsBtn = document.getElementById('highlight-items-btn');
    const resetDemoBtn = document.getElementById('reset-demo-btn');

    // Add event listeners
    changeTextBtn.addEventListener('click', changeText);
    changeColorBtn.addEventListener('click', changeBoxColor);
    changeImageBtn.addEventListener('click', changeImage);
    highlightItemsBtn.addEventListener('click', highlightListItems);
    resetDemoBtn.addEventListener('click', resetDemo);

    console.log('✅ Exercise 1 initialized');
}

/**
 * Change the demo text content
 */
function changeText() {
    const textElement = document.getElementById('demo-text');
    const messages = [
        'Text changed successfully! 🎉',
        'DOM manipulation is powerful! 💪',
        'JavaScript makes pages interactive! ⚡',
        'You\'re learning fast! 🚀',
        'Keep practicing! 📚'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    textElement.textContent = randomMessage;
    
    // Add animation
    addAnimationClass(textElement, 'bounce');
    
    console.log('📝 Text changed to:', randomMessage);
}

/**
 * Change the demo box color
 */
function changeBoxColor() {
    const demoBox = document.getElementById('demo-box');
    const colors = [
        '#e74c3c', '#3498db', '#27ae60', '#f39c12', 
        '#9b59b6', '#34495e', '#e67e22', '#1abc9c'
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    demoBox.style.backgroundColor = randomColor;
    demoBox.textContent = `Color changed to ${randomColor}!`;
    
    // Add animation
    addAnimationClass(demoBox, 'pulse');
    
    console.log('🎨 Box color changed to:', randomColor);
}

/**
 * Change the demo image
 */
function changeImage() {
    const imageElement = document.getElementById('demo-image');
    const imageUrls = [
        'https://via.placeholder.com/150x100/e74c3c/ffffff?text=Red',
        'https://via.placeholder.com/150x100/3498db/ffffff?text=Blue',
        'https://via.placeholder.com/150x100/27ae60/ffffff?text=Green',
        'https://via.placeholder.com/150x100/f39c12/ffffff?text=Orange',
        'https://via.placeholder.com/150x100/9b59b6/ffffff?text=Purple'
    ];
    
    const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    imageElement.src = randomImage;
    
    // Add animation
    addAnimationClass(imageElement, 'fade-in');
    
    console.log('🖼️ Image changed to:', randomImage);
}

/**
 * Highlight all list items
 */
function highlightListItems() {
    const listItems = document.querySelectorAll('.list-item');
    const colors = ['#ffeb3b', '#4caf50', '#2196f3', '#ff9800', '#e91e63'];
    
    listItems.forEach((item, index) => {
        const color = colors[index % colors.length];
        item.style.backgroundColor = color;
        item.style.color = '#000';
        item.style.fontWeight = 'bold';
        
        // Add animation with delay
        setTimeout(() => {
            addAnimationClass(item, 'bounce');
        }, index * 100);
    });
    
    console.log('✨ List items highlighted');
}

/**
 * Reset all demo elements to their original state
 */
function resetDemo() {
    // Reset text
    const textElement = document.getElementById('demo-text');
    textElement.textContent = 'This text will change!';
    
    // Reset box
    const demoBox = document.getElementById('demo-box');
    demoBox.style.backgroundColor = '#3498db';
    demoBox.textContent = 'This box will change colors!';
    
    // Reset image
    const imageElement = document.getElementById('demo-image');
    imageElement.src = 'https://via.placeholder.com/150x100/3498db/ffffff?text=Original';
    
    // Reset list items
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
        item.style.backgroundColor = '';
        item.style.color = '';
        item.style.fontWeight = '';
    });
    
    console.log('🔄 Demo reset to original state');
}

// ============================================================================
// EXERCISE 2: INTERACTIVE COUNTER
// ============================================================================

/**
 * Initialize Exercise 2: Interactive Counter
 */
function initializeExercise2() {
    console.log('🎯 Initializing Exercise 2: Interactive Counter');

    // TODO: Students should implement this
    // Get references to counter elements and buttons
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-counter-btn');

    // Add event listeners
    incrementBtn.addEventListener('click', incrementCounter);
    decrementBtn.addEventListener('click', decrementCounter);
    resetBtn.addEventListener('click', resetCounter);

    // Initialize display
    updateCounterDisplay();

    console.log('✅ Exercise 2 initialized');
}

/**
 * Increment the counter value
 */
function incrementCounter() {
    // TODO: Students should implement this
    counterValue++;
    totalClicks++;
    updateCounterDisplay();
    
    // Add visual feedback
    const counterDisplay = document.querySelector('.counter-display');
    addAnimationClass(counterDisplay, 'bounce');
    
    console.log('⬆️ Counter incremented to:', counterValue);
}

/**
 * Decrement the counter value
 */
function decrementCounter() {
    // TODO: Students should implement this
    counterValue--;
    totalClicks++;
    updateCounterDisplay();
    
    // Add visual feedback
    const counterDisplay = document.querySelector('.counter-display');
    addAnimationClass(counterDisplay, 'bounce');
    
    console.log('⬇️ Counter decremented to:', counterValue);
}

/**
 * Reset the counter to zero
 */
function resetCounter() {
    // TODO: Students should implement this
    counterValue = 0;
    totalClicks = 0;
    updateCounterDisplay();
    
    // Add visual feedback
    const counterDisplay = document.querySelector('.counter-display');
    addAnimationClass(counterDisplay, 'pulse');
    
    console.log('🔄 Counter reset');
}

/**
 * Update the counter display elements
 */
function updateCounterDisplay() {
    // TODO: Students should implement this
    const counterValueElement = document.getElementById('counter-value');
    const counterInfoElement = document.getElementById('counter-info');
    const clickCountElement = document.getElementById('click-count');

    if (counterValueElement) {
        counterValueElement.textContent = counterValue;
        
        // Change color based on value
        if (counterValue > 0) {
            counterValueElement.style.color = '#27ae60';
        } else if (counterValue < 0) {
            counterValueElement.style.color = '#e74c3c';
        } else {
            counterValueElement.style.color = '#3498db';
        }
    }

    if (counterInfoElement) {
        counterInfoElement.textContent = counterValue;
    }

    if (clickCountElement) {
        clickCountElement.textContent = totalClicks;
    }
}

// ============================================================================
// EXERCISE 3: DYNAMIC TODO LIST
// ============================================================================

/**
 * Initialize Exercise 3: Dynamic Todo List
 */
function initializeExercise3() {
    console.log('🎯 Initializing Exercise 3: Dynamic Todo List');

    // Get references to todo elements
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todoInput = document.getElementById('todo-input');
    const clearCompletedBtn = document.getElementById('clear-completed-btn');
    const clearAllBtn = document.getElementById('clear-all-btn');

    // Add event listeners
    addTodoBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    clearCompletedBtn.addEventListener('click', clearCompletedTodos);
    clearAllBtn.addEventListener('click', clearAllTodos);

    // Initialize display
    updateTodoDisplay();
    updateTodoStats();

    console.log('✅ Exercise 3 initialized');
}

/**
 * Add a new todo item
 */
function addTodo() {
    // TODO: Students should implement this
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a todo item!');
        return;
    }

    // Create new todo object
    const newTodo = {
        id: ++todoIdCounter,
        text: todoText,
        completed: false,
        createdAt: new Date()
    };

    // Add to todos array
    todos.push(newTodo);

    // Clear input
    todoInput.value = '';

    // Update display
    updateTodoDisplay();
    updateTodoStats();

    console.log('✅ Todo added:', newTodo);
}

/**
 * Toggle todo completion status
 * @param {number} todoId - The ID of the todo to toggle
 */
function toggleTodo(todoId) {
    // TODO: Students should implement this
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        todo.completed = !todo.completed;
        updateTodoDisplay();
        updateTodoStats();
        console.log('🔄 Todo toggled:', todo);
    }
}

/**
 * Delete a todo item
 * @param {number} todoId - The ID of the todo to delete
 */
function deleteTodo(todoId) {
    // TODO: Students should implement this
    const todoIndex = todos.findIndex(t => t.id === todoId);
    if (todoIndex !== -1) {
        const deletedTodo = todos.splice(todoIndex, 1)[0];
        updateTodoDisplay();
        updateTodoStats();
        console.log('🗑️ Todo deleted:', deletedTodo);
    }
}

/**
 * Clear all completed todos
 */
function clearCompletedTodos() {
    // TODO: Students should implement this
    const completedCount = todos.filter(t => t.completed).length;
    todos = todos.filter(t => !t.completed);
    updateTodoDisplay();
    updateTodoStats();
    console.log(`🧹 Cleared ${completedCount} completed todos`);
}

/**
 * Clear all todos
 */
function clearAllTodos() {
    // TODO: Students should implement this
    if (todos.length === 0) {
        alert('No todos to clear!');
        return;
    }

    if (confirm('Are you sure you want to clear all todos?')) {
        const clearedCount = todos.length;
        todos = [];
        todoIdCounter = 0;
        updateTodoDisplay();
        updateTodoStats();
        console.log(`🧹 Cleared all ${clearedCount} todos`);
    }
}

/**
 * Update the todo list display
 */
function updateTodoDisplay() {
    // TODO: Students should implement this
    const todoList = document.getElementById('todo-list');
    
    if (todos.length === 0) {
        todoList.innerHTML = '<li class="empty-state">No todos yet. Add one above!</li>';
        return;
    }

    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} 
                   onchange="toggleTodo(${todo.id})">
            <span class="todo-text">${todo.text}</span>
            <button class="todo-delete" onclick="deleteTodo(${todo.id})">Delete</button>
        `;

        todoList.appendChild(li);
    });
}

/**
 * Update todo statistics
 */
function updateTodoStats() {
    // TODO: Students should implement this
    const totalTodos = todos.length;
    const completedTodos = todos.filter(t => t.completed).length;
    const remainingTodos = totalTodos - completedTodos;

    document.getElementById('total-todos').textContent = totalTodos;
    document.getElementById('completed-todos').textContent = completedTodos;
    document.getElementById('remaining-todos').textContent = remainingTodos;
}

// ============================================================================
// EXERCISE 4: FORM VALIDATION
// ============================================================================

/**
 * Initialize Exercise 4: Form Validation
 */
function initializeExercise4() {
    console.log('🎯 Initializing Exercise 4: Form Validation');

    // Get form elements
    const form = document.getElementById('registration-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const ageInput = document.getElementById('age');

    // Add real-time validation
    usernameInput.addEventListener('input', () => validateField('username'));
    emailInput.addEventListener('input', () => validateField('email'));
    passwordInput.addEventListener('input', () => validateField('password'));
    confirmPasswordInput.addEventListener('input', () => validateField('confirmPassword'));
    ageInput.addEventListener('input', () => validateField('age'));

    // Handle form submission
    form.addEventListener('submit', handleFormSubmit);

    console.log('✅ Exercise 4 initialized');
}

/**
 * Validate a specific form field
 * @param {string} fieldName - The name of the field to validate
 */
function validateField(fieldName) {
    // TODO: Students should implement this
    const field = document.getElementById(fieldName === 'confirmPassword' ? 'confirm-password' : fieldName);
    const value = field.value;
    let isValid = false;
    let errorMessage = '';
    let successMessage = '';

    switch (fieldName) {
        case 'username':
            if (value.length < 3) {
                errorMessage = 'Username must be at least 3 characters';
            } else if (value.length > 20) {
                errorMessage = 'Username must be less than 20 characters';
            } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
                errorMessage = 'Username can only contain letters, numbers, and underscores';
            } else {
                isValid = true;
                successMessage = 'Username looks good!';
            }
            break;

        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = 'Please enter a valid email address';
            } else {
                isValid = true;
                successMessage = 'Email format is correct!';
            }
            break;

        case 'password':
            if (value.length < 8) {
                errorMessage = 'Password must be at least 8 characters';
            } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
                errorMessage = 'Password must contain uppercase, lowercase, and number';
            } else {
                isValid = true;
                successMessage = 'Strong password!';
            }
            updatePasswordStrength(value);
            break;

        case 'confirmPassword':
            const password = document.getElementById('password').value;
            if (value !== password) {
                errorMessage = 'Passwords do not match';
            } else if (value.length > 0) {
                isValid = true;
                successMessage = 'Passwords match!';
            }
            break;

        case 'age':
            const ageValue = parseInt(value);
            if (isNaN(ageValue) || ageValue < 13) {
                errorMessage = 'Age must be at least 13';
            } else if (ageValue > 120) {
                errorMessage = 'Please enter a valid age';
            } else {
                isValid = true;
                successMessage = 'Age is valid!';
            }
            break;
    }

    // Update field validation state
    formValidation[fieldName] = isValid;
    updateFieldDisplay(fieldName, isValid, errorMessage, successMessage);
    updateSubmitButton();
}

/**
 * Update field display with validation feedback
 * @param {string} fieldName - The field name
 * @param {boolean} isValid - Whether the field is valid
 * @param {string} errorMessage - Error message to display
 * @param {string} successMessage - Success message to display
 */
function updateFieldDisplay(fieldName, isValid, errorMessage, successMessage) {
    const fieldId = fieldName === 'confirmPassword' ? 'confirm-password' : fieldName;
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    const successElement = document.getElementById(`${fieldId}-success`);

    // Update field styling
    field.classList.remove('valid', 'invalid');
    field.classList.add(isValid ? 'valid' : 'invalid');

    // Update error message
    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.classList.toggle('show', !isValid && errorMessage);
    }

    // Update success message
    if (successElement) {
        successElement.textContent = successMessage;
        successElement.classList.toggle('show', isValid && successMessage);
    }
}

/**
 * Update password strength indicator
 * @param {string} password - The password to analyze
 */
function updatePasswordStrength(password) {
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');

    let strength = 0;
    let strengthLabel = 'Enter password';

    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;

    strengthBar.className = 'strength-bar';
    
    if (strength <= 2) {
        strengthBar.classList.add('weak');
        strengthLabel = 'Weak password';
    } else if (strength <= 3) {
        strengthBar.classList.add('medium');
        strengthLabel = 'Medium password';
    } else {
        strengthBar.classList.add('strong');
        strengthLabel = 'Strong password';
    }

    strengthText.textContent = strengthLabel;
}

/**
 * Update submit button state based on form validation
 */
function updateSubmitButton() {
    const submitBtn = document.getElementById('submit-btn');
    const allValid = Object.values(formValidation).every(valid => valid);
    
    submitBtn.disabled = !allValid;
    submitBtn.textContent = allValid ? 'Register' : 'Please complete all fields';
}

/**
 * Handle form submission
 * @param {Event} e - The submit event
 */
function handleFormSubmit(e) {
    e.preventDefault();
    
    const allValid = Object.values(formValidation).every(valid => valid);
    const resultDiv = document.getElementById('form-result');
    
    if (allValid) {
        resultDiv.className = 'form-result success';
        resultDiv.textContent = '🎉 Registration successful! Welcome aboard!';
        
        // Reset form after success
        setTimeout(() => {
            document.getElementById('registration-form').reset();
            Object.keys(formValidation).forEach(key => {
                formValidation[key] = false;
            });
            updateSubmitButton();
            resultDiv.textContent = '';
            resultDiv.className = 'form-result';
        }, 3000);
    } else {
        resultDiv.className = 'form-result error';
        resultDiv.textContent = '❌ Please fix the errors above before submitting.';
    }
}

// ============================================================================
// EXERCISE 5: IMAGE GALLERY
// ============================================================================

/**
 * Initialize Exercise 5: Image Gallery
 */
function initializeExercise5() {
    console.log('🎯 Initializing Exercise 5: Image Gallery');

    // Get gallery elements
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const playBtn = document.getElementById('play-slideshow-btn');
    const stopBtn = document.getElementById('stop-slideshow-btn');
    const randomBtn = document.getElementById('random-image-btn');

    // Add event listeners
    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);
    playBtn.addEventListener('click', startSlideshow);
    stopBtn.addEventListener('click', stopSlideshow);
    randomBtn.addEventListener('click', showRandomImage);

    // Initialize gallery
    generateThumbnails();
    updateGalleryDisplay();

    console.log('✅ Exercise 5 initialized');
}

/**
 * Generate thumbnail images
 */
function generateThumbnails() {
    // TODO: Students should implement this
    const thumbnailContainer = document.getElementById('gallery-thumbnails');
    thumbnailContainer.innerHTML = '';

    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.src;
        thumbnail.alt = image.title;
        thumbnail.className = `thumbnail ${index === currentImageIndex ? 'active' : ''}`;
        thumbnail.addEventListener('click', () => showImage(index));
        thumbnailContainer.appendChild(thumbnail);
    });
}

/**
 * Show a specific image by index
 * @param {number} index - The index of the image to show
 */
function showImage(index) {
    // TODO: Students should implement this
    if (index >= 0 && index < images.length) {
        currentImageIndex = index;
        updateGalleryDisplay();
        updateThumbnails();
        console.log('🖼️ Showing image:', index + 1);
    }
}

/**
 * Show the previous image
 */
function showPreviousImage() {
    // TODO: Students should implement this
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
    showImage(newIndex);
}

/**
 * Show the next image
 */
function showNextImage() {
    // TODO: Students should implement this
    const newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
    showImage(newIndex);
}

/**
 * Show a random image
 */
function showRandomImage() {
    // TODO: Students should implement this
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === currentImageIndex && images.length > 1);
    
    showImage(randomIndex);
}

/**
 * Start the slideshow
 */
function startSlideshow() {
    // TODO: Students should implement this
    if (slideshowInterval) return;

    slideshowInterval = setInterval(() => {
        showNextImage();
    }, 2000);

    document.getElementById('play-slideshow-btn').disabled = true;
    document.getElementById('stop-slideshow-btn').disabled = false;
    
    console.log('▶️ Slideshow started');
}

/**
 * Stop the slideshow
 */
function stopSlideshow() {
    // TODO: Students should implement this
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }

    document.getElementById('play-slideshow-btn').disabled = false;
    document.getElementById('stop-slideshow-btn').disabled = true;
    
    console.log('⏹️ Slideshow stopped');
}

/**
 * Update the main gallery display
 */
function updateGalleryDisplay() {
    // TODO: Students should implement this
    const currentImage = images[currentImageIndex];
    
    document.getElementById('gallery-image').src = currentImage.src;
    document.getElementById('image-title').textContent = currentImage.title;
    document.getElementById('image-description').textContent = currentImage.description;
    document.getElementById('image-counter').textContent = `${currentImageIndex + 1} / ${images.length}`;

    // Update navigation buttons
    document.getElementById('prev-btn').disabled = false;
    document.getElementById('next-btn').disabled = false;
}

/**
 * Update thumbnail active states
 */
function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.toggle('active', index === currentImageIndex);
    });
}

// ============================================================================
// EXERCISE 6: MINI CALCULATOR
// ============================================================================

/**
 * Initialize Exercise 6: Mini Calculator
 */
function initializeExercise6() {
    console.log('🎯 Initializing Exercise 6: Mini Calculator');

    // Get calculator elements
    const numberButtons = document.querySelectorAll('.calc-btn-number');
    const operatorButtons = document.querySelectorAll('.calc-btn-operator');
    const equalsButton = document.getElementById('calc-equals');
    const clearButton = document.getElementById('calc-clear');
    const deleteButton = document.getElementById('calc-delete');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    // Add event listeners
    numberButtons.forEach(button => {
        button.addEventListener('click', () => inputNumber(button.dataset.number));
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', () => inputOperator(button.dataset.operator));
    });

    equalsButton.addEventListener('click', calculate);
    clearButton.addEventListener('click', clearCalculator);
    deleteButton.addEventListener('click', deleteLastInput);
    clearHistoryBtn.addEventListener('click', clearHistory);

    // Initialize calculator display
    updateCalculatorDisplay();

    console.log('✅ Exercise 6 initialized');
}

/**
 * Input a number into the calculator
 * @param {string} number - The number to input
 */
function inputNumber(number) {
    // TODO: Students should implement this
    if (waitingForOperand) {
        currentInput = number;
        waitingForOperand = false;
    } else {
        currentInput = currentInput === '0' ? number : currentInput + number;
    }
    
    updateCalculatorDisplay();
    console.log('🔢 Number input:', number);
}

/**
 * Input an operator into the calculator
 * @param {string} nextOperator - The operator to input
 */
function inputOperator(nextOperator) {
    // TODO: Students should implement this
    const inputValue = parseFloat(currentInput);

    if (previousInput === '') {
        previousInput = inputValue;
    } else if (operator) {
        const currentValue = previousInput || 0;
        const newValue = performCalculation(currentValue, inputValue, operator);

        currentInput = String(newValue);
        previousInput = newValue;
    }

    waitingForOperand = true;
    operator = nextOperator;
    updateCalculatorDisplay();
    console.log('➕ Operator input:', nextOperator);
}

/**
 * Perform the calculation
 */
function calculate() {
    // TODO: Students should implement this
    const inputValue = parseFloat(currentInput);

    if (previousInput !== '' && operator && !waitingForOperand) {
        const currentValue = previousInput || 0;
        const newValue = performCalculation(currentValue, inputValue, operator);
        
        // Add to history
        const calculation = `${currentValue} ${operator} ${inputValue} = ${newValue}`;
        calculationHistory.unshift(calculation);
        if (calculationHistory.length > 10) {
            calculationHistory.pop();
        }
        
        currentInput = String(newValue);
        previousInput = '';
        operator = null;
        waitingForOperand = true;
        
        updateCalculatorDisplay();
        updateCalculatorHistory();
        console.log('🧮 Calculation:', calculation);
    }
}

/**
 * Perform the actual mathematical operation
 * @param {number} firstValue - The first operand
 * @param {number} secondValue - The second operand
 * @param {string} operator - The operator
 * @returns {number} The result
 */
function performCalculation(firstValue, secondValue, operator) {
    switch (operator) {
        case '+':
            return firstValue + secondValue;
        case '-':
            return firstValue - secondValue;
        case '×':
            return firstValue * secondValue;
        case '÷':
            return secondValue !== 0 ? firstValue / secondValue : 0;
        default:
            return secondValue;
    }
}

/**
 * Clear the calculator
 */
function clearCalculator() {
    // TODO: Students should implement this
    currentInput = '0';
    previousInput = '';
    operator = null;
    waitingForOperand = false;
    updateCalculatorDisplay();
    console.log('🧹 Calculator cleared');
}

/**
 * Delete the last input character
 */
function deleteLastInput() {
    // TODO: Students should implement this
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateCalculatorDisplay();
    console.log('⌫ Last character deleted');
}

/**
 * Clear calculation history
 */
function clearHistory() {
    calculationHistory = [];
    updateCalculatorHistory();
    console.log('🧹 History cleared');
}

/**
 * Update the calculator display
 */
function updateCalculatorDisplay() {
    // TODO: Students should implement this
    document.getElementById('calc-current').textContent = currentInput;
    
    if (operator && previousInput !== '') {
        document.getElementById('calc-previous').textContent = `${previousInput} ${operator}`;
    } else {
        document.getElementById('calc-previous').textContent = '';
    }
}

/**
 * Update the calculator history display
 */
function updateCalculatorHistory() {
    const historyList = document.getElementById('calc-history');
    historyList.innerHTML = '';
    
    if (calculationHistory.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No calculations yet';
        li.style.fontStyle = 'italic';
        li.style.color = '#999';
        historyList.appendChild(li);
        return;
    }
    
    calculationHistory.forEach(calculation => {
        const li = document.createElement('li');
        li.textContent = calculation;
        historyList.appendChild(li);
    });
}

// ============================================================================
// MAIN INITIALIZATION
// ============================================================================

/**
 * Initialize all exercises
 */
function initializeAllExercises() {
    console.log('🚀 Initializing all exercises...');
    
    // Setup navigation first
    setupNavigation();
    
    // Initialize all exercises
    initializeExercise1();
    initializeExercise2();
    initializeExercise3();
    initializeExercise4();
    initializeExercise5();
    initializeExercise6();
    
    console.log('✅ All exercises initialized successfully!');
    console.log('💡 Open browser console to see detailed logs');
    console.log('🎯 Start with Exercise 1 and work your way through each one');
}

// ============================================================================
// ADDITIONAL UTILITY FUNCTIONS FOR STUDENTS
// ============================================================================

/**
 * Helper function to generate random colors
 * @returns {string} A random hex color
 */
function getRandomColor() {
    const colors = [
        '#e74c3c', '#3498db', '#27ae60', '#f39c12', 
        '#9b59b6', '#34495e', '#e67e22', '#1abc9c',
        '#2ecc71', '#f1c40f', '#e91e63', '#9c27b0'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Helper function to format dates
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

/**
 * Helper function to validate email format
 * @param {string} email - The email to validate
 * @returns {boolean} Whether the email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Helper function to generate unique IDs
 * @returns {string} A unique ID
 */
function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// ============================================================================
// CONSOLE WELCOME MESSAGE
// ============================================================================

console.log(`
🎯 Welcome to DOM Manipulation & Event Handling!

This lesson covers:
✅ Element selection and modification
✅ Event handling and user interactions  
✅ Dynamic content creation
✅ Form validation and feedback
✅ Interactive components and animations

💡 Tips for success:
• Open browser Developer Tools (F12) to see console logs
• Experiment with the code examples
• Try the practice challenges
• Don't be afraid to break things and fix them!

🚀 Ready to make your web pages interactive? Let's go!
`);
