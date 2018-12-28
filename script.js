var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var prevpanel = this.previousElementSibling;
        var panel = this.nextElementSibling;
        if (panel.style.display === "inline" || panel.style.display === "block") {
            this.setAttribute("style","border-bottom: solid 1px skyblue");
            panel.style.display = "none";
        } else {
            this.setAttribute("style","border-bottom: solid 1px indianred");
            if(this.classList.contains("inlineaccordion")) {
              panel.style.display = "inline";
            }
            else {
              panel.style.display = "block";
              panel.style.padding = "0 60px 0 40px";
            }
        }
        if (prevpanel.style.display === "inline") {
            prevpanel.style.display = "none";
        } else {
            prevpanel.style.display = "inline";
        }
    });
}



$(document).ready(function() {
    $("#backToTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

});
