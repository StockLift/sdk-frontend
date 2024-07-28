const userNumberElements = document.querySelector("#attempts")
let magicNumber = 5
function addAttemptElement(value) {
  const attempt = document.createElement("span")
  attempt.textContent =
    value > magicNumber ? `Less than ${value}` : `Bigger than ${value}`
  attempt.classList.add("attempt")
  userNumberElements.appendChild(attempt)
}
addAttemptElement(5)
