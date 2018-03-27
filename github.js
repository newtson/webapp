"use strict";

var github = (function () {
    var showGithub = function () {
    window.mainContainer.innerHTML = "";

    var repoElement;

    fetch("https://api.github.com/users/newtson/repos")
               .then(function (response) {
                   return response.json();
               }).then(function(data) {
                   var titl = document.createElement("h1");
                   titl.textContent = "Github";
                   window.mainContainer.appendChild(titl);
                   data.forEach(function(repo) {
                       repoElement = document.createElement("a");
                       repoElement.className = "linkRepo";
                       repoElement.innerHTML = repo.name;
                       repoElement.addEventListener("click", showGit);
                       window.mainContainer.appendChild(repoElement);
                       var bsp = document.createElement("p");
                       bsp.innerHTML = "";
                       window.mainContainer.appendChild(bsp);
                   });

                   window.rootElement.appendChild(window.mainContainer);
               }).catch(function(error) {
                   console.log("The fetch operation failed due to the following error: ", error.message);
               });

    var showGit = function() {
        var clicked = this.innerHTML;
        if (clicked == "webapp") {
            this.href = "https://github.com/newtson/webapp";
        } else {
            this.href = "https://github.com/newtson/hello";
        }

    };

    menu.showMenu("folder");
};

    return {
        showGithub: showGithub
    };

})(github);
