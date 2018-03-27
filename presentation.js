"use strict";

var presentation = (function () {
    var showPresentation = function () {
        window.mainContainer.innerHTML = "";

        var present = document.createElement("h1");

        present.className = "present";
        present.textContent = "Redovisning";
        window.mainContainer.appendChild(present);

        var kmom1 = document.createElement("h2");

        kmom1.className = "k1";
        kmom1.textContent = "Kmom01:";
        window.mainContainer.appendChild(kmom1);

        var quest1 = document.createElement("h4");

        quest1.className = "question";
        quest1.textContent = "Är du sedan tidigare bekant med utveckling av mobila appar?";
        window.mainContainer.appendChild(quest1);

        var ans1 = document.createElement("p");

        ans1.className = "answer";
        ans1.textContent = "Nej, men jag har velat göra en app ett tag nu så det" +
        " ska bli kul att lära sig.";
        window.mainContainer.appendChild(ans1);

        var quest2 = document.createElement("h4");

        quest2.className = "question";
        quest2.textContent = "Vilket är den viktigaste lärdomen du gjort om typografi" +
        " för mobila enheter?";
        window.mainContainer.appendChild(quest2);

        var ans2 = document.createElement("p");

        ans2.className = "answer";
        ans2.textContent = "Att allt är viktigt egentligen. För att appen ska vara" +
        " användarvänlig krävs det att man tänker på typografi. Finns det nog med white space?" +
        " Man vill inte att användaren ska bli ansträngd av att läsa den. Är font stilen" +
        " läsbar? Osv. Särskilt när det kommer till små enheter. Typografi är också en" +
        " viktig del för att ge appen en t.ex. gammaldags känsla om det skulle vara det" +
        " man vill att appen ska utstråla eller vilken stil man nu vill ha på den.";
        window.mainContainer.appendChild(ans2);

        var quest3 = document.createElement("h4");

        quest3.className = "question";
        quest3.textContent = "Du har i kursmomentet hämtat data från två stycken API." +
        " Hur kändes detta?";
        window.mainContainer.appendChild(quest3);

        var ans3 = document.createElement("p");

        ans3.className = "answer";
        ans3.textContent = "Hade lite problem med denna del. När jag försökte med kommandot" +
        " 'git push -u origin master' så fick jag tillbaks 'HttpRequestException encountered'." +
        " Visade sig att allt jag behövde göra var att uppdatera git till version 2.16.2" +
        " för att det skulle fixa sig. Efter det hade ordnat sig så gick det ganska bra" +
        " att hämta data från API. Lite ovant och gjorde lite småfel här och där men det" +
        " kändes okej.";
        window.mainContainer.appendChild(ans3);

        var quest4 = document.createElement("h4");

        quest4.className = "question";
        quest4.textContent = "Vilken är din TIL för detta kmom?";
        window.mainContainer.appendChild(quest4);

        var ans4 = document.createElement("p");

        ans4.className = "answer";
        ans4.textContent = "Att det är bättre att använda rem istället för em när man" +
        " anger font-size. Det pga att med rem så blir storleken enligt root fonten medan" +
        " med em så blir storleken enligt dens föräldrar font. Det kan ställa till problem" +
        " om t.ex fonten man vill ändra är nestad och man inte tänker på det.";
        window.mainContainer.appendChild(ans4);

        window.rootElement.appendChild(window.mainContainer);

        window.menu.showMenu("people");
    };

    return {
        showPresentation: showPresentation
    };
})(presentation);
