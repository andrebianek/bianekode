// JavaScript for loading components

function loadComponent(file, container) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `components/${file}`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            container.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

window.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.getElementById("header");
    const footerContainer = document.getElementById("footer");
    const navigationContainer = document.getElementById("navigation");

    loadComponent("header.html", headerContainer);
    loadComponent("footer.html", footerContainer);
    loadComponent("navigation.html", navigationContainer);
});
