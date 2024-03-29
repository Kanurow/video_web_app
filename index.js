/*
Using jQuery to add toggle functionality

$(document).ready(function(){
    $('.hamburger-button').click(function(){
        $('.sidebar').toggleClass('active');
    }),
    $('.hamburger-button').click(function(){
        $('.body').toggleClass('activeBody')

    })
});

*/


/* Using Vanilla Javascript 

document.querySelector(".hamburger-button").addEventListener("click", switchProperty);
function switchProperty() {
    let sidebarToggle = document.querySelector(".sidebar");
    let bodyToggle = document.querySelector("body");
    sidebarToggle.classList.toggle('active');
    bodyToggle.classList.toggle('activeBody')
}
*/

// Using Arrow Function instead of the conventional function method

document.querySelector(".hamburger-button").addEventListener("click", () => {
    let sidebarToggle = document.querySelector(".sidebar");
    let bodyToggle = document.querySelector("body");
    sidebarToggle.classList.toggle('active');
    bodyToggle.classList.toggle('activeBody')
});

var icon = document.getElementById("moon-icon")
icon.onclick = function() {
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src = "icons/sun.png";
    }else{
        icon.src = "icons/moon.png"
    }
}