let element = document.getElementById('button');
console.log(element)
element.addEventListener('click', clickFunction);

function clickFunction() {
    console.log("クリックされました");
    navigator.vibrate(1000);
}

