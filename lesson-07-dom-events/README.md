# Lesson 7: DOM Manipulation and Event Handling

## Learning Objectives

By the end of this lesson, you will be able to:

1. **Understand the Document Object Model (DOM)**
   - What the DOM is and how it represents HTML
   - The relationship between HTML elements and DOM nodes
   - How JavaScript can interact with the DOM

2. **Select and Access DOM Elements**
   - Use `getElementById()` to find elements by ID
   - Use `querySelector()` and `querySelectorAll()` for CSS selectors
   - Understand the difference between single elements and NodeLists

3. **Modify Element Content and Properties**
   - Change text content with `textContent` and `innerHTML`
   - Modify element attributes with `getAttribute()` and `setAttribute()`
   - Update CSS styles using the `style` property

4. **Create and Remove Elements Dynamically**
   - Create new elements with `createElement()`
   - Add elements to the page with `appendChild()` and `insertBefore()`
   - Remove elements with `removeChild()` and `remove()`

5. **Handle User Events**
   - Add event listeners with `addEventListener()`
   - Handle common events: click, input, change, submit
   - Understand event objects and event properties

6. **Build Interactive User Interfaces**
   - Create responsive buttons and forms
   - Validate user input in real-time
   - Build dynamic lists and interactive components

## What You'll Build

This lesson includes several hands-on exercises that build upon each other:

### Exercise 1: Element Selection and Modification
- Practice finding elements on the page
- Change text, colors, and styles dynamically
- Learn different ways to select elements

### Exercise 2: Interactive Counter
- Build buttons that increment and decrement a number
- Learn click event handling
- Practice updating element content

### Exercise 3: Dynamic Todo List
- Add new items to a list
- Mark items as complete
- Delete items from the list
- Combine multiple DOM manipulation techniques

### Exercise 4: Form Validation
- Create a registration form with real-time validation
- Check input as users type
- Display helpful error messages
- Prevent form submission with invalid data

### Exercise 5: Image Gallery
- Build a clickable image gallery
- Navigate between images with buttons
- Update image sources and descriptions dynamically

### Exercise 6: Mini Calculator
- Create a functional calculator interface
- Handle button clicks for numbers and operations
- Display results and handle calculations

## Key Concepts Covered

### DOM Selection Methods
```javascript
// Select by ID
const element = document.getElementById('myId');

// Select by CSS selector (first match)
const element = document.querySelector('.myClass');

// Select all matching elements
const elements = document.querySelectorAll('div.item');
```

### Content Modification
```javascript
// Change text content
element.textContent = 'New text';

// Change HTML content
element.innerHTML = '<strong>Bold text</strong>';

// Modify attributes
element.setAttribute('src', 'new-image.jpg');
element.className = 'new-class';
```

### Style Manipulation
```javascript
// Change individual styles
element.style.color = 'red';
element.style.backgroundColor = 'blue';

// Add/remove CSS classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('selected');
```

### Event Handling
```javascript
// Add event listener
button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Event with parameters
button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior
    console.log('Clicked element:', event.target);
});
```

### Creating Elements
```javascript
// Create new element
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';
newDiv.className = 'my-class';

// Add to page
document.body.appendChild(newDiv);
```

## Prerequisites

Before starting this lesson, make sure you understand:

- **Variables and Data Types** (Lesson 2)
- **Functions** (Lesson 6)
- **Conditionals** (Lesson 4) - for validation logic
- Basic HTML structure and CSS selectors

## Getting Started

1. Open the `index.html` file in your browser
2. Open the browser's Developer Tools (F12)
3. Follow along with each exercise
4. Experiment with the code examples
5. Complete the practice challenges

## Practice Challenges

After completing the main exercises, try these additional challenges:

### Beginner Challenges
1. **Color Picker**: Create buttons that change the background color of the page
2. **Text Formatter**: Build buttons that make text bold, italic, or change font size
3. **Show/Hide**: Create a button that toggles the visibility of content

### Intermediate Challenges
1. **Shopping Cart**: Build a simple shopping cart with add/remove functionality
2. **Tab Navigation**: Create a tabbed interface that shows different content
3. **Modal Dialog**: Build a popup modal that can be opened and closed

### Advanced Challenges
1. **Drag and Drop**: Create draggable elements that can be moved around
2. **Dynamic Form Builder**: Build a form that adds/removes input fields
3. **Real-time Search**: Create a search box that filters a list as you type

## Common Mistakes to Avoid

1. **Selecting Elements Before They Exist**
   ```javascript
   // Wrong - script runs before HTML is loaded
   const button = document.getElementById('myButton');
   
   // Right - wait for DOM to load
   document.addEventListener('DOMContentLoaded', function() {
       const button = document.getElementById('myButton');
   });
   ```

2. **Forgetting to Add Event Listeners**
   ```javascript
   // Wrong - just defining a function doesn't make it run
   function handleClick() {
       console.log('Clicked');
   }
   
   // Right - attach the function to an event
   button.addEventListener('click', handleClick);
   ```

3. **Mixing Up textContent and innerHTML**
   ```javascript
   // Use textContent for plain text (safer)
   element.textContent = 'Hello World';
   
   // Use innerHTML only when you need HTML tags
   element.innerHTML = '<strong>Hello World</strong>';
   ```

## Debugging Tips

1. **Use Console.log()**: Add console.log() statements to check if your code is running
2. **Check the Elements Tab**: Use browser dev tools to see if elements are being modified
3. **Verify Element Selection**: Make sure your selectors are finding the right elements
4. **Test Event Listeners**: Add simple console.log() in event handlers to confirm they're working

## Next Steps

After mastering DOM manipulation and event handling, you'll be ready for:

- **Lesson 8: Capstone Project** - Build a complete application using all your skills
- Advanced topics like AJAX, APIs, and modern JavaScript frameworks
- Building more complex interactive web applications

## Resources

- [MDN DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript DOM Manipulation Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

---

**Ready to start?** Open `index.html` in your browser and begin with Exercise 1!
