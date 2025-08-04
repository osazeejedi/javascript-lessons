/**
 * Personal Finance Tracker - Starter Template JavaScript
 * 
 * This file contains the foundation for your finance tracker application.
 * Follow the TODO comments to implement each feature step by step.
 * 
 * The code is organized into sections that correspond to the concepts
 * you've learned in previous lessons:
 * - Variables and Data Storage
 * - Functions for Calculations
 * - Conditionals for Validation
 * - Loops for Data Processing
 * - DOM Manipulation for User Interface
 */

// ============================================================================
// GLOBAL VARIABLES AND DATA STRUCTURES
// ============================================================================

/**
 * TODO (Lesson 2 - Variables): 
 * Create variables to store your application data
 * Think about what data types you need: arrays, objects, numbers, strings
 */

// Main data storage - this will hold all your transactions
let transactions = [];

// Budget data - this will store budget information for each month
let budgets = {};

// Categories for income and expenses
const categories = {
    income: [
        'salary',
        'freelance',
        'business',
        'investments',
        'gifts',
        'other-income'
    ],
    expense: [
        'food',
        'transport',
        'housing',
        'utilities',
        'entertainment',
        'healthcare',
        'shopping',
        'education',
        'other-expense'
    ]
};

// Category display names (for better user experience)
const categoryNames = {
    'salary': 'Salary',
    'freelance': 'Freelance Work',
    'business': 'Business Income',
    'investments': 'Investments',
    'gifts': 'Gifts Received',
    'other-income': 'Other Income',
    'food': 'Food & Dining',
    'transport': 'Transportation',
    'housing': 'Housing & Rent',
    'utilities': 'Utilities',
    'entertainment': 'Entertainment',
    'healthcare': 'Healthcare',
    'shopping': 'Shopping',
    'education': 'Education',
    'other-expense': 'Other Expenses'
};

// Current filter settings
let currentFilters = {
    type: '',
    category: '',
    month: ''
};

// Chart instances (for Chart.js)
let charts = {};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * TODO (Lesson 6 - Functions):
 * Create utility functions that you'll use throughout your application
 * These should be small, reusable functions that do one thing well
 */

/**
 * Generate a unique ID for transactions
 * @returns {string} Unique identifier
 */
function generateId() {
    // TODO: Create a function that generates unique IDs
    // Hint: You can use Date.now() combined with Math.random()
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

/**
 * Format currency for display
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount) {
    // TODO: Create a function that formats numbers as currency
    // Example: 1234.56 should become "$1,234.56"
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

/**
 * Format date for display
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date string
 */
function formatDate(dateString) {
    // TODO: Create a function that formats dates nicely
    // Example: "2024-01-15" should become "January 15, 2024"
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Get current month in YYYY-MM format
 * @returns {string} Current month
 */
function getCurrentMonth() {
    // TODO: Create a function that returns the current month
    // Format should be "2024-01" for January 2024
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}`;
}

/**
 * Show a message to the user
 * @param {string} message - The message to display
 * @param {string} type - Message type: 'success', 'error', 'warning'
 */
function showMessage(message, type = 'success') {
    // TODO: Create a function that shows messages to users
    // This should create a message element and add it to the message container
    const container = document.getElementById('message-container');
    const messageEl = document.createElement('div');
    messageEl.className = `message ${type}`;
    messageEl.textContent = message;
    
    container.appendChild(messageEl);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.parentNode.removeChild(messageEl);
        }
    }, 3000);
}

// ============================================================================
// DATA MANAGEMENT FUNCTIONS
// ============================================================================

/**
 * TODO (Lesson 6 - Functions + Lesson 2 - Variables):
 * Create functions to manage your data (CRUD operations)
 * These functions should handle creating, reading, updating, and deleting data
 */

/**
 * Save data to localStorage
 */
function saveData() {
    // TODO: Implement data persistence using localStorage
    // Save both transactions and budgets
    // Hint: Use JSON.stringify() to convert objects to strings
    // Use localStorage.setItem() to save data
    // Don't forget to handle errors with try/catch
}

/**
 * Load data from localStorage
 */
function loadData() {
    // TODO: Implement data loading from localStorage
    // Load both transactions and budgets, handle cases where no data exists
    // Hint: Use localStorage.getItem() to retrieve data
    // Use JSON.parse() to convert strings back to objects
    // Check if data exists before parsing
}

/**
 * Add a new transaction
 * @param {Object} transactionData - The transaction data
 */
function addTransaction(transactionData) {
    // TODO: Create a function that adds a new transaction
    // Validate the data, add an ID and timestamp, then save
    
    // Step 1: Validate required fields using conditionals
    // Check if type, amount, category, description, and date are provided
    
    // Step 2: Create transaction object with:
    // - Unique ID (use generateId())
    // - All the provided data
    // - Current timestamp for createdAt
    
    // Step 3: Add to transactions array
    
    // Step 4: Save data using saveData()
    
    // Step 5: Show success message
    
    // Return true if successful, false if validation failed
}

/**
 * Delete a transaction
 * @param {string} transactionId - ID of transaction to delete
 */
function deleteTransaction(transactionId) {
    // TODO: Create a function that deletes a transaction
    // Find the transaction by ID and remove it from the array
    // Hint: Use array.findIndex() to find the transaction
    // Use array.splice() to remove it
    // Don't forget to save data and show a message
}

// ============================================================================
// CALCULATION FUNCTIONS
// ============================================================================

/**
 * TODO (Lesson 3 - Operations + Lesson 5 - Loops):
 * Create functions that perform financial calculations
 * Use loops to process arrays of transactions and mathematical operations for calculations
 */

/**
 * Calculate total income for a specific month
 * @param {string} month - Month in YYYY-MM format
 * @returns {number} Total income
 */
function calculateTotalIncome(month = getCurrentMonth()) {
    // TODO: Use a loop to calculate total income for the specified month
    // Step 1: Initialize total to 0
    // Step 2: Loop through all transactions
    // Step 3: For each transaction, check if:
    //         - It's an income transaction
    //         - It's in the specified month (compare first 7 characters of date)
    // Step 4: If both conditions are true, add amount to total
    // Step 5: Return total
    
    let total = 0;
    
    // Your loop implementation here
    
    return total;
}

/**
 * Calculate total expenses for a specific month
 * @param {string} month - Month in YYYY-MM format
 * @returns {number} Total expenses
 */
function calculateTotalExpenses(month = getCurrentMonth()) {
    // TODO: Use a loop to calculate total expenses for the specified month
    // Similar to calculateTotalIncome, but check for type === 'expense'
    
    let total = 0;
    
    // Your loop implementation here
    
    return total;
}

/**
 * Calculate net balance (income - expenses)
 * @param {string} month - Month in YYYY-MM format
 * @returns {number} Net balance
 */
function calculateNetBalance(month = getCurrentMonth()) {
    // TODO: Use the income and expense functions to calculate net balance
    // This should be a simple subtraction: income - expenses
}

/**
 * Calculate spending by category
 * @param {string} month - Month in YYYY-MM format
 * @returns {Object} Spending by category
 */
function calculateSpendingByCategory(month = getCurrentMonth()) {
    // TODO: Use loops to group expenses by category
    // Step 1: Create an object to store category totals
    // Step 2: Initialize all expense categories with 0
    // Step 3: Loop through transactions
    // Step 4: For expense transactions in the specified month,
    //         add the amount to the appropriate category
    // Step 5: Return the category totals object
    
    const categoryTotals = {};
    
    // Initialize categories
    categories.expense.forEach(category => {
        categoryTotals[category] = 0;
    });
    
    // Your loop implementation here
    
    return categoryTotals;
}

/**
 * Calculate financial health score
 * @param {string} month - Month in YYYY-MM format
 * @returns {number} Health score (0-100)
 */
function calculateFinancialHealth(month = getCurrentMonth()) {
    // TODO: Create an algorithm that calculates financial health
    // Consider factors like: savings rate, budget adherence, expense variability
    // This is a more advanced function - start simple and improve later
    
    const income = calculateTotalIncome(month);
    const expenses = calculateTotalExpenses(month);
    
    if (income === 0) return 0;
    
    // Basic scoring: if you save money, you get points
    const savingsRate = (income - expenses) / income;
    
    // Convert to 0-100 scale
    let score = Math.max(0, savingsRate * 100);
    
    return Math.round(Math.min(100, score));
}

// ============================================================================
// USER INTERFACE FUNCTIONS
// ============================================================================

/**
 * TODO (Lesson 1 - DOM Manipulation):
 * Create functions that update the user interface
 * These functions should modify HTML elements to display data
 */

/**
 * Update the dashboard summary cards
 */
function updateDashboard() {
    // TODO: Update the summary cards with current month's data
    // Step 1: Get current month data using your calculation functions
    // Step 2: Find the HTML elements by their IDs
    // Step 3: Update their textContent with formatted values
    // Step 4: Update colors based on positive/negative balance
    
    const currentMonth = getCurrentMonth();
    
    // Get calculated values
    const totalIncome = calculateTotalIncome(currentMonth);
    const totalExpenses = calculateTotalExpenses(currentMonth);
    const netBalance = calculateNetBalance(currentMonth);
    const healthScore = calculateFinancialHealth(currentMonth);
    
    // TODO: Update DOM elements
    // document.getElementById('total-income').textContent = formatCurrency(totalIncome);
    // Continue for other elements...
}

/**
 * Display recent transactions
 */
function displayRecentTransactions() {
    // TODO: Show the 5 most recent transactions on the dashboard
    // Step 1: Get the recent transactions list element
    // Step 2: Sort transactions by date (newest first)
    // Step 3: Take only the first 5 transactions
    // Step 4: Create HTML for each transaction
    // Step 5: Set the innerHTML of the list element
    
    const recentList = document.getElementById('recent-list');
    
    // Check if there are any transactions
    if (transactions.length === 0) {
        recentList.innerHTML = '<p class="empty-state">No transactions yet. Add your first transaction to get started!</p>';
        return;
    }
    
    // TODO: Sort transactions and get recent 5
    // TODO: Create HTML for each transaction
    // TODO: Update the DOM
}

/**
 * Display all transactions with filtering
 */
function displayAllTransactions() {
    // TODO: Show all transactions with current filters applied
    // This is similar to displayRecentTransactions but shows all transactions
    // and applies filters from currentFilters object
    
    const allTransactionsList = document.getElementById('all-transactions-list');
    
    // TODO: Filter transactions based on currentFilters
    // TODO: Create HTML for filtered transactions
    // TODO: Update the DOM
}

/**
 * Populate category dropdowns
 */
function populateCategories() {
    // TODO: Fill the category dropdowns based on transaction type
    const transactionType = document.getElementById('transaction-type');
    const transactionCategory = document.getElementById('transaction-category');
    const filterCategory = document.getElementById('filter-category');
    
    // Update transaction form categories when type changes
    transactionType.addEventListener('change', function() {
        const selectedType = this.value;
        transactionCategory.innerHTML = '<option value="">Select category</option>';
        
        if (selectedType && categories[selectedType]) {
            categories[selectedType].forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = categoryNames[category];
                transactionCategory.appendChild(option);
            });
        }
    });
    
    // TODO: Populate filter categories with all categories
}

// ============================================================================
// EVENT HANDLERS
// ============================================================================

/**
 * TODO (Lesson 4 - Conditionals + Form Handling):
 * Create event handlers for user interactions
 * Use conditionals to validate input and handle different scenarios
 */

/**
 * Handle navigation between sections
 */
function setupNavigation() {
    // TODO: Set up navigation between different sections of the app
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // TODO: Remove active class from all nav buttons and sections
            // TODO: Add active class to clicked button and target section
            // TODO: Update displays when switching sections
        });
    });
}

/**
 * Handle transaction form submission
 */
function setupTransactionForm() {
    // TODO: Handle the transaction form submission with validation
    const form = document.getElementById('transaction-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // TODO: Get form data
        // TODO: Validate form data using conditionals
        // TODO: Call addTransaction() if valid
        // TODO: Reset form if successful
        // TODO: Update displays
    });
    
    // Set default date to today
    document.getElementById('transaction-date').value = new Date().toISOString().split('T')[0];
}

/**
 * Handle transaction filters
 */
function setupFilters() {
    // TODO: Set up filtering functionality for transactions
    const filterType = document.getElementById('filter-type');
    const filterCategory = document.getElementById('filter-category');
    const filterMonth = document.getElementById('filter-month');
    const clearFilters = document.getElementById('clear-filters');
    
    // TODO: Add event listeners for filter changes
    // TODO: Update currentFilters object when filters change
    // TODO: Call displayAllTransactions() to refresh the list
}

// ============================================================================
// BUDGET FUNCTIONS (INTERMEDIATE CHALLENGE)
// ============================================================================

/**
 * TODO (Advanced Challenge):
 * Implement budget functionality
 * This is more complex and combines multiple concepts
 */

/**
 * Set up budget form
 */
function setupBudgetForm() {
    // TODO: Create budget setting functionality
    // This is an intermediate challenge - implement after basic features work
}

/**
 * Display current budget status
 */
function displayBudgetStatus() {
    // TODO: Show budget progress for current month
    // This is an intermediate challenge - implement after basic features work
}

// ============================================================================
// CHARTS AND ANALYTICS (ADVANCED CHALLENGE)
// ============================================================================

/**
 * TODO (Advanced Challenge):
 * Implement charts using Chart.js library
 * This requires understanding of external libraries and data visualization
 */

/**
 * Update all charts
 */
function updateCharts() {
    // TODO: Create and update charts for analytics
    // This is an advanced challenge - implement after intermediate features work
}

// ============================================================================
// MODAL AND INTERACTION FUNCTIONS
// ============================================================================

/**
 * Show transaction details in modal
 * @param {string} transactionId - ID of transaction to show
 */
function showTransactionDetails(transactionId) {
    // TODO: Implement transaction details modal
    // Find the transaction and display its details in a modal
}

/**
 * Delete transaction and close modal
 * @param {string} transactionId - ID of transaction to delete
 */
function deleteTransactionAndClose(transactionId) {
    // TODO: Confirm deletion and call deleteTransaction()
}

/**
 * Close modal
 */
function closeModal() {
    const modal = document.getElementById('transaction-modal');
    modal.style.display = 'none';
}

/**
 * Show add transaction form with pre-filled type
 * @param {string} type - 'income' or 'expense'
 */
function showAddTransaction(type) {
    // Switch to transactions section
    showSection('transactions');
    
    // Pre-fill transaction type
    document.getElementById('transaction-type').value = type;
    
    // Trigger change event to populate categories
    document.getElementById('transaction-type').dispatchEvent(new Event('change'));
    
    // Focus on amount field
    document.getElementById('transaction-amount').focus();
}

/**
 * Show specific section
 * @param {string} sectionName - Name of section to show
 */
function showSection(sectionName) {
    // Remove active class from all nav buttons and sections
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    
    // Add active class to target button and section
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
    document.getElementById(sectionName).classList.add('active');
    
    // Update displays when switching sections
    if (sectionName === 'dashboard') {
        updateDashboard();
        displayRecentTransactions();
    } else if (sectionName === 'transactions') {
        displayAllTransactions();
    } else if (sectionName === 'budgets') {
        displayBudgetStatus();
    } else if (sectionName === 'analytics') {
        updateCharts();
    }
}

// ============================================================================
// INITIALIZATION AND SETUP
// ============================================================================

/**
 * Initialize the application
 */
function initializeApp() {
    // TODO: Set up the application when the page loads
    console.log('🚀 Personal Finance Tracker Starting...');
    
    // Load saved data
    loadData();
    
    // Set up event handlers
    setupNavigation();
    setupTransactionForm();
    setupFilters();
    populateCategories();
    
    // Set up modal close functionality
    document.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('transaction-modal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Initial display updates
    updateDashboard();
    displayRecentTransactions();
    
    console.log('✅ Finance Tracker Initialized Successfully!');
    console.log(`📊 Loaded ${transactions.length} transactions`);
    
    // Show welcome message for new users
    if (transactions.length === 0) {
        showMessage('Welcome to your Personal Finance Tracker! Add your first transaction to get started.', 'success');
    }
}

// ============================================================================
// SAMPLE DATA (FOR TESTING)
// ============================================================================

/**
 * Add sample data for testing (optional)
 * Students can use this to test their application with realistic data
 */
function addSampleData() {
    // TODO: Add sample transactions for testing
    // This function is provided to help you test your application
    // You can call this function from the browser console: addSampleData()
    
    const sampleTransactions = [
        {
            type: 'income',
            amount: 3000,
            category: 'salary',
            description: 'Monthly Salary',
            date: '2024-01-01'
        },
        {
            type: 'expense',
            amount: 50,
            category: 'food',
            description: 'Grocery Shopping',
            date: '2024-01-02'
        },
        {
            type: 'expense',
            amount: 25,
            category: 'transport',
            description: 'Gas for Car',
            date: '2024-01-03'
        },
        {
            type: 'expense',
            amount: 100,
            category: 'entertainment',
            description: 'Movie Night',
            date: '2024-01-04'
        },
        {
            type: 'income',
            amount: 500,
            category: 'freelance',
            description: 'Web Design Project',
            date: '2024-01-05'
        }
    ];
    
    // Add each sample transaction
    sampleTransactions.forEach(transactionData => {
        addTransaction(transactionData);
    });
    
    showMessage('Sample data added! Now implement the missing functions to see it in action.', 'success');
}

// Expose addSampleData function globally for testing
window.addSampleData = addSampleData;

// ============================================================================
// START THE APPLICATION
// ============================================================================

/**
 * Start the application when the page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + N: Add new transaction
        if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
            e.preventDefault();
            showSection('transactions');
            document.getElementById('transaction-amount').focus();
        }
        
        // Escape: Close modal
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    console.log('🎉 Personal Finance Tracker Ready!');
    console.log('💡 Tip: Press Ctrl+N to quickly add a new transaction');
    console.log('🧪 Tip: Type addSampleData() in console to add test data');
});

/**
 * TODO SUMMARY FOR STUDENTS:
 * 
 * PHASE 1 - BASIC FUNCTIONALITY (Required):
 * 🔲 Complete saveData() and loadData() functions
 * 🔲 Implement addTransaction() with validation
 * 🔲 Create calculation functions using loops
 * 🔲 Build updateDashboard() to show data
 * 🔲 Implement displayRecentTransactions()
 * 🔲 Set up form handling and validation
 * 
 * PHASE 2 - INTERMEDIATE FEATURES:
 * 🔲 Add transaction filtering and search
 * 🔲 Implement budget setting and tracking
 * 🔲 Create displayAllTransactions() with filters
 * 🔲 Add transaction deletion functionality
 * 🔲 Improve error handling and user feedback
 * 
 * PHASE 3 - ADVANCED FEATURES:
 * 🔲 Implement charts using Chart.js
 * 🔲 Add financial health scoring
 * 🔲 Create detailed analytics
 * 🔲 Add export functionality
 * 🔲 Implement advanced filtering
 * 
 * PHASE 4 - EXPERT CHALLENGES:
 * 🔲 Add recurring transactions
 * 🔲 Implement data backup/restore
 * 🔲 Create financial insights and recommendations
 * 🔲 Add goal tracking
 * 🔲 Implement advanced security features
 * 
 * Remember: Start with Phase 1 and build incrementally!
 * Each function you complete makes the app more functional! 🚀
 * 
 * DEBUGGING TIPS:
 * - Use console.log() to check if your functions are being called
 * - Check the browser's developer tools for errors
 * - Test each function individually before moving to the next
 * - Use the addSampleData() function to test with realistic data
 */
