// When the logo is moused over, its opacity steadily fades to 80%. Otherwise, it steadily increases to 100%.

var content = document.getElementsByClassName("content")[0];
var profile = document.getElementById("profile");
var profilename = document.getElementById("profile-name");
var buttons = document.getElementById("links");
var button = document.getElementsByClassName("button");
var widthcounter = document.getElementById("width");
//|| document.documentElement.clientWidth
//|| document.body.clientWidth;
//let logo = logodiv.getElementsByTagName("img")[0];
buttons.style.opacity = 0.2;
this.profilename.style.fontSize = window.innerWidth / 12 + "px";

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
    makeTransparent(profilename, 0.6);
}
buttons.onmouseleave = function() {
    for (i = 0; i < button.length; i++) {
        button[i].classList.remove("unfocused");
    }
    makeOpaque(profile);
    makeOpaque(profilename);
}

/*window.onresize = function () {
    this.profilename.style.fontSize = width / 15;
    this.profilename.textContent = width;
}*/

var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

addEvent(window, "resize", function () {
    var width = window.innerWidth;
    this.profilename.style.fontSize = width / 12 + "px";
    this.widthcounter.textContent = width;
});