let elementsToRemove = document.querySelectorAll('div[role="main"]');

function removeDiv() {
    elementsToRemove = document.querySelectorAll('div[role="main"]');
    elementsToRemove.forEach(function (element) {
        element.remove();
    });
}

document.addEventListener("DOMContentLoaded", setInterval(removeDiv, 500));
