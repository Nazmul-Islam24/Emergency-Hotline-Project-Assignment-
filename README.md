# Emergency Hotline

This is a simple responsive web project for finding important emergency service numbers in Bangladesh.

The main idea of the project is to make the emergency numbers easy to find and use. Users can copy a number, like a service, make a simulated call, and also see their recent call history.

## Project Links

**Live Preview:** https://nazmul-islam24.github.io/Emergency-Hotline-Project-Assignment-/

**GitHub Repository:** https://github.com/Nazmul-Islam24/Emergency-Hotline-Project-Assignment-.git

## Features

**Emergency service cards:** Shows different emergency services and their hotline numbers, such as 999, Police, Fire Service, Ambulance, Women & Child Helpline, Anti-Corruption, Electricity, BRAC and Bangladesh Railway.

**Coin system:** The project starts with 100 coins. Every time a user makes a call, 20 coins are deducted. If there are not enough coins, the call cannot be made.

**Favorite button:** Users can click the heart button on a service card. The total number of favorites is also shown.

**Copy number:** The Copy button copies the selected hotline number to the clipboard and increases the copy counter.

**Call history:** After making a call, the service name, number and calling time are added to the history section. There is also a Clear button to remove the history.

**Responsive design:** The website works on mobile, tablet and desktop screens.

## Technologies Used

**HTML** ----> Used to create the basic structure of the website.
**Tailwind CSS** -----> Used for styling and responsive design.
**DaisyUI** --------> Used for some UI components and styles.
**JavaScript** -----> Used for DOM manipulation, click events, counters, clipboard copying and call history.
**Font Awesome** ------> Used for icons.

---

# Questions & Answers

## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

### `getElementById()`

getElementById(): Selects a single element based on its unique `id`. It is fast and directly returns an HTML element object.

### `getElementsByClassName()`

getElementsByClassName(): Selects all elements matching a specific class name and returns an HTMLCollection (an array-like object). Changes to the DOM automatically update this collection (live).

One thing to remember is that `HTMLCollection` is a live collection. If matching elements are added or removed from the DOM, the collection can change automatically.

### `querySelector()`

querySelector(): Accepts any valid CSS selector (.class, #id, element) and returns the first matching element found in the DOM.

### `querySelectorAll()`

querySelectorAll(): Accepts any CSS selector and returns a NodeList containing all matching elements. Unlike HTMLCollection, NodeList supports array methods like .forEach().

---

## 2. How do you create and insert a new element into the DOM?

We can create a new element using------- document.createElement().

After creating it, we can add text, classes or other content to it. Then we insert it into an existing element using methods such as----- appendChild().

For example:

js:
const newDiv = document.createElement("div");

newDiv.innerText = "Call Log Entry";

document.getElementById("history-container").appendChild(newDiv);

Here, three things are happening:

document.createElement("div")----- creates a new div.
innerText------- adds text inside the new div.
appendChild()-------- puts the new div inside history-container.

---

## 3. What is Event Bubbling and how does it work?

Event Bubbling means that when an event happens on an element, the event can move upward through its parent elements.

For example, suppose we have:

html:

<div id="parent">
    <button id="child">Click Me</button>
</div>

If we click the button, the click event first happens on the button. Then it can bubble up to the div and then to other parent elements.

Example:

js:
document.getElementById("child").addEventListener("click", function() {
console.log("Button clicked");
});

document.getElementById("parent").addEventListener("click", function() {
console.log("Parent clicked");
});

When the button is clicked, the output will be:

text:
Button clicked
Parent clicked

The button event happens first, and then the event bubbles up to its parent.

We can stop this bubbling with:

js:
event.stopPropagation();

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where we add one event listener to a parent element instead of adding separate event listeners to every child element.

It works because of Event Bubbling.

This is useful when there are many child elements because we don't need to create an event listener for every single child.

It is also useful when new elements are added to the parent later. The parent listener can still handle events from those new elements.

So, Event Delegation helps keep the code simpler and can reduce the number of event listeners.

---

## 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

Both methods are related to events, but they do different jobs.

### `preventDefault()`

preventDefault()------ stops the browser's default action for an event.

For example, clicking a link normally opens that link:

html:
<a href="https://example.com" id="link">Open</a>

We can stop the default action like this:

js:
document.getElementById("link").addEventListener("click", function(event) {
event.preventDefault();
});

Now clicking the link will not open the URL.

It is also commonly used with forms to stop the page from submitting normally:

js:
form.addEventListener("submit", function(event) {
event.preventDefault();
});

### `stopPropagation()`

stopPropagation()----- stops the event from moving to its parent elements.

For example:

js:
button.addEventListener("click", function(event) {
event.stopPropagation();
});

If the button is inside a parent that also has a click event, the click will not continue bubbling to that parent.

### The main difference

preventDefault() -------> stops the browser's default action.
stopPropagation() ------> stops the event from moving/bubbling to other elements.

They solve two different problems.
