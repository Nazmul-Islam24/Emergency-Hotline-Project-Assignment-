# Emergency Hotline Directory

A responsive web application providing quick access to essential national emergency services in Bangladesh. Users can view emergency contact details, copy contact numbers with a single click, simulate making calls, and track their call history in real-time.

---

## 🔗 Project Links

- **Live Preview:** https://nazmul-islam24.github.io/Emergency-Hotline-Project-Assignment-/
- **GitHub Repository:** https://github.com/Nazmul-Islam24/Emergency-Hotline-Project-Assignment-.git

---

## ✨ Features

- **Interactive Emergency Service Cards:** Displays various helpline numbers including National Emergency (999), Police, Fire Service, Ambulance, Women & Child Helpline, Anti-Corruption, Electricity, Brac, and Bangladesh Railway.
- **Dynamic Coin & Counter System:** Starts with 100 coins. Each simulated call deducts 20 coins. Displays an alert if coins are insufficient.
- **Favorite System:** Users can click the heart icon on any card to mark it and increase the global heart counter.
- **Copy Number:** Clicking the "Copy" button copies the specific helpline number to the clipboard and increments the copy counter.
- **Call History Tracking:** Real-time log showing the name, number, and exact timestamp of called services. Includes a "Clear" button to wipe history.
- **Fully Responsive Design:** Optimized for seamless viewing across mobile, tablet, and desktop screens using Tailwind CSS and DaisyUI.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic markup structure.
- **Tailwind CSS & DaisyUI:** Responsive and modern UI layout and components.
- **JavaScript (ES6):** Dynamic DOM manipulation, event listeners, state tracking, and clipboard handling.
- **Font Awesome:** Icons for interactive elements.

---

## ❓ Conceptual Questions & Answers

### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

- **`getElementById('id')`**: Selects a single element based on its unique `id`. It is fast and directly returns an HTML element object.
- **`getElementsByClassName('class')`**: Selects all elements matching a specific class name and returns an HTMLCollection (an array-like object). Changes to the DOM automatically update this collection (live).
- **`querySelector('selector')`**: Accepts any valid CSS selector (`.class`, `#id`, `element`) and returns the **first** matching element found in the DOM.
- **`querySelectorAll('selector')`**: Accepts any CSS selector and returns a `NodeList` containing **all** matching elements. Unlike HTMLCollection, NodeList supports array methods like `.forEach()`.

---

### 2. How do you create and insert a new element into the DOM?

Creating and inserting an element into the DOM involves three main steps:

1. **Create the element:** Use `document.createElement('tagName')`.
2. **Add content/attributes:** Set text, classes, or attributes (e.g., `element.innerText = 'Hello'`, `element.className = 'box'`).
3. **Insert into DOM:** Append it to an existing parent element using `parentElement.appendChild(element)` or `parentElement.insertAdjacentElement()`.

**Example:**

```javascript
const newDiv = document.createElement("div");
newDiv.innerText = "Call Log Entry";
document.getElementById("history-container").appendChild(newDiv);
```
