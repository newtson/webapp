"use strict";

var about = (function () {
    var showAbout = function () {
        window.mainContainer.innerHTML = "";

        var about = document.createElement("h1");

        about.className = "about";
        about.textContent = "Om";

        var omInfo = document.createElement("p");

        omInfo.className = "ominfo";
        omInfo.innerHTML = "Den här appen är till kursen webbapplikationer för mobila enheter.";

        window.mainContainer.appendChild(about);
        window.mainContainer.appendChild(omInfo);

        var image = document.createElement("img");

        image.src = "phones.jpg";
        image.alt = "Alternativ bild";

        window.mainContainer.appendChild(image);

        var imageR = document.createElement("img");

        imageR.src = "phones.jpg";
        imageR.alt = "Alternativ bild";

        window.mainContainer.appendChild(imageR);

        window.rootElement.appendChild(window.mainContainer);

        window.menu.showMenu("free_breakfast");
    };

    return {
        showAbout: showAbout
    };
})(about);
