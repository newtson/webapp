"use strict";

var presentation = (function () {
    var showPresentation = function () {
    window.mainContainer.innerHTML = "";

    var present = document.createElement("h1");
    present.className = "present";
    present.textContent = "Presentation";
    window.mainContainer.appendChild(present);

    var kmom1 = document.createElement("h2");
    kmom1.className = "k1";
    kmom1.textContent = "Kmom01";
    window.mainContainer.appendChild(kmom1);

    var quest1 = document.createElement("h4");
    quest1.className = "question1";
    quest1.textContent = "Är du sedan tidigare bekant med utveckling av mobila appar?";
    window.mainContainer.appendChild(quest1);

    var ans1 = document.createElement("p");
    ans1.className = "answer1";
    ans1.textContent = "Nej men jag har velat göra en app ett tag nu så det ska bli kul att lära sig.";
    window.mainContainer.appendChild(ans1);

    //nedan kod lägger in redovisning.html filen men den fylller inte sidan
    //window.mainContainer.innerHTML='<object type="text/html" data="redovisning.html"></object>';

    window.rootElement.appendChild(window.mainContainer);


    //menu.showMenu("home");
    //home.showHome();
    //menu.showMenu();
    menu.showMenu("people");
    };

    return {
        showPresentation: showPresentation
    };

})(presentation);
