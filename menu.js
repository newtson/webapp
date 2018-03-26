"use strict";

var menu = (function () {
    var showMenu = function (classElement) {
        //window.mainContainer.innerHTML = "";
        window.navigation.innerHTML = "";

        /*var navigation = document.createElement("nav");

        window.navigation.className = "bottom-nav";*/

        /*var navElements = [{name: "Me", class: "home", nav: home.showHome()},
                         {name: "Om", class: "free_breakfast", nav: about.showAbout()},
                        {name: "Github", class: "folder", nav: github.showGithub()},
                        {name: "Redovisning", class: "people", nav: presentation.showPresentation()}];*/

                        var navElements = [{name: "Me", class: "home", nav: home.showHome},
                                         {name: "Om", class: "free_breakfast", nav: about.showAbout},
                                        {name: "Github", class: "folder", nav: github.showGithub},
                                        {name: "Redovisning", class: "people", nav: presentation.showPresentation}];

        navElements.forEach(function (element) {
            var navElement = document.createElement("a");

            //if (selected === element.class) {
            if (classElement === element.class) {
                  navElement.className = "active";
             }

            navElement.addEventListener("click", element.nav);

            /*var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);*/

            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);

            window.navigation.appendChild(navElement);


        });

            window.rootElement.appendChild(window.navigation);

    //menu.showMenu("home");
    //menu.showMenu("menu");
    };

    return {
        showMenu: showMenu
    };

})();
