"use strict";

var home = (function () {
    var showHome = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Marie";

        var greeting = document.createElement("p");
        greeting.className = "greet";
        var timeOfDayGreeting = "Hej";
        var now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "God kväll";
        }

        greeting.textContent = timeOfDayGreeting + ", jag heter Marie och är student i kursen webapplikationer för mobila enheter vårterminen 2018.";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);

        var image = document.createElement("img");

        image.src = "merep.png";
        image.alt = "Alternativ bild";

        mainContainer.appendChild(image);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("home");

        //menu.showMenu("home");
        //home.showHome();
        //menu.showMenu();

    };



    return {
        showHome: showHome
    };

})(home);
