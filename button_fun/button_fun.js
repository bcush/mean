var button = document.getElementById('someButton');

if (button) {
    button.addEventListener("click", whatToDoOnClick);
    }
else { console.log ('Your ElementById is null.'); }

function whatToDoOnClick(){
        alert("You did it!");
}