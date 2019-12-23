// When the logo is moused over, its opacity steadily fades to 80%. Otherwise, it steadily increases to 100%.

var content = document.getElementsByClassName("content")[0];
var profile = document.getElementById("profile");
var profile_name = document.getElementById("profile-name");
var buttons = document.getElementById("links");
var button = document.getElementsByClassName("button");
//let logo = logodiv.getElementsByTagName("img")[0];
buttons.style.opacity = 0;

function makeTransparent(elem, level) {
    elem.style.opacity = level;
}

function makeOpaque(elem) {
    if (elem.style.opacity < 1) {
        elem.style.opacity = 1;
    }
}

content.onmouseenter = function() {
    makeOpaque(buttons);
}

buttons.onmouseenter = function() {
    for (i = 0; i < button.length; i++) {
        button[i].classList.add("unfocused");
    }
    makeTransparent(profile, 0.8);
    makeTransparent(profile_name, 0.6);
}
buttons.onmouseleave = function() {
    for (i = 0; i < button.length; i++) {
        button[i].classList.remove("unfocused");
    }
    makeOpaque(profile);
    makeOpaque(profile_name);
}


