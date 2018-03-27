"use strict";

var menu = (function () {
    var showMenu = function (classElement) {
        window.navigation.innerHTML = "";

        var navElements = [{name: "Me", class: "home", nav: home.showHome},
                         {name: "Om", class: "free_breakfast", nav: about.showAbout},
                        {name: "Github", class: "folder", nav: github.showGithub},
                        {name: "Redovisning", class: "people", nav: presentation.showPresentation}];

        navElements.forEach(function (element) {
            var navElement = document.createElement("a");

            if (classElement === element.class) {
                  navElement.className = "active";
             }

            navElement.addEventListener("click", element.nav);

            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);

            var text = document.createElement("span");

            if (element.name == "Redovisning") {
                text.className = "icon-redovisning";
                text.textContent = element.name;
            } else if (element.name == "Github") {
                text.className = "icon-github";
                text.textContent = element.name;
            } else if (element.name == "Om") {
                text.className = "icon-om";
                text.textContent = element.name;
            } else {
                text.className = "icon-text";
                text.textContent = element.name;
            }

            navElement.appendChild(text);

            window.navigation.appendChild(navElement);


        });

            window.rootElement.appendChild(window.navigation);
    };

    return {
        showMenu: showMenu
    };

})();
