var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var prevpanel = this.previousElementSibling;
        var panel = this.nextElementSibling;
        if (panel.style.display === "inline") {
            this.setAttribute("style","border-bottom: solid 1px skyblue");
            panel.style.display = "none";
        } else {
            this.setAttribute("style","border-bottom: solid 1px indianred");
            panel.style.display = "inline";
        }
        if (prevpanel.style.display === "inline") {
            prevpanel.style.display = "none";
        } else {
            prevpanel.style.display = "inline";
        }
    });
}
