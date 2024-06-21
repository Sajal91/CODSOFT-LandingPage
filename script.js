let mainHeading = document.querySelector('#sign-in-UI-container h1');
let heading = mainHeading.innerHTML;
mainHeading.innerHTML = "";

console.log(heading);
console.log(heading.length);
let time = 0;
for(let i = 0; i < heading.length; i++) {
    if(heading[i] == " ") {
        setTimeout(() => {
            mainHeading.innerHTML += heading[i];
        }, time+=150);
    } else {
        setTimeout(() => {
            mainHeading.innerHTML += heading[i];
        }, time+=100);
    }
}