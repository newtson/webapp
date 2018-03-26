
"use strict";

var github = (function () {
    var showGithub = function () {
    window.mainContainer.innerHTML = "";

    //fetch("https://api.github.com/users/:username/repos")
    fetch("https://api.github.com/users/anei17/repos")
               .then(function (response) {
                   return response.json();
               }).then(function(data) {
                   data.forEach(function(repo) {
                       var repoElement = document.createElement("p");

                       repoElement.textContent = repo.name;
                       window.mainContainer.appendChild(repoElement);
                   });

                   window.rootElement.appendChild(window.mainContainer);

                   menu.showMenu("folder");
               }).catch(function(error) {
                   console.log("The fetch operation failed due to the following error: ", error.message);
               });

    //menu.showMenu("home");
    //home.showHome();
    //menu.showMenu();
    //menu.showMenu("github");
    };

    return {
        showGithub: showGithub
    };

})(github);
