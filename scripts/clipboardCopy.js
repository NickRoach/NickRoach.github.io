function hoverFunction() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.style.opacity = 1;
    console.log("hover called");
}

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    var tooltip = document.getElementById("myTooltip");
    tooltip.style.opacity = 1;
    tooltip.innerHTML = "Copied";
    setTimeout(function () {
        tooltip.style.opacity = 0;
        setTimeout(function () {
            tooltip.innerHTML = "Copy to clipboard";
        }, 500);
    }, 1000);
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}
