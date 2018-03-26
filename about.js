"use strict";

var about = (function () {
    var showAbout = function () {
    window.mainContainer.innerHTML = "";

    var about = document.createElement("h1");

    about.className = "about";
    about.textContent = "Om";

    var omInfo = document.createElement("p");

    omInfo.innerHTML = "Den här appen är till kursen webbapplikationer för mobila enheter.";

    window.mainContainer.appendChild(about);
    window.mainContainer.appendChild(omInfo);

    window.rootElement.appendChild(window.mainContainer);

    //menu.showMenu("home");
    //home.showHome();
    //menu.showMenu();
    menu.showMenu("free_breakfast");
    };

    return {
        showAbout: showAbout
    };

})();
