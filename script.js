// get the number from HTML
function getNumber(id) {
    const element = document.getElementById(id);
    return parseInt(element.innerText);
}

// change the text
function changeText(id, value) {
    document.getElementById(id).innerText = value;
}


// Heart button
const heartButtons = document.getElementsByClassName("heart-btn");

for (const button of heartButtons) {
    button.addEventListener("click", function () {

        const heartCount = getNumber("heart-count");
        changeText("heart-count", heartCount + 1);

        button.classList.remove("text-gray-400");
        button.classList.add("text-red-500");
    });
}


// Copy button
const copyButtons = document.getElementsByClassName("copy-btn");

for (const button of copyButtons) {
    button.addEventListener("click", function () {

        const number = this.getAttribute("data-number");

        if (number) {
            navigator.clipboard.writeText(number)
                .then(function () {
                    alert("Number " + number + " copied!");
                })
                .catch(function () {
                    alert("Could not copy the number.");
                });
        }

        const copyCount = getNumber("copy-count");
        changeText("copy-count", copyCount + 1);
    });
}


// Call button
const callButtons = document.getElementsByClassName("call-btn");

for (const button of callButtons) {
    button.addEventListener("click", function () {

        const coin = getNumber("coin-count");

        if (coin < 20) {
            alert("You don't have enough coins.");
            return;
        }

        const name = this.getAttribute("data-name");
        const number = this.getAttribute("data-number");

        alert("Calling " + name + " at " + number);

        changeText("coin-count", coin - 20);


        // add call history
        const history = document.getElementById("history-container");

        const time = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        const div = document.createElement("div");

        div.className =
            "flex justify-between items-center bg-gray-50 p-2.5 rounded border border-gray-100 text-xs sm:text-sm";

        div.innerHTML = `
            <div>
                <p class="font-bold text-gray-800">${name}</p>
                <p class="text-xs text-gray-500">${number}</p>
            </div>

            <span class="text-xs text-gray-400">${time}</span>
        `;

        history.appendChild(div);
    });
}


// Clear call history
document.getElementById("clear-history-btn").addEventListener("click", function () {
    document.getElementById("history-container").innerHTML = "";
});