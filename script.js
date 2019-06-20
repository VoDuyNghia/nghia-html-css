function changeLanguage() {
    var x = document.getElementById('myDropdown');
    if (x.style.display == "none") {
        $("#myDropdown").toggle("show");
    } else {
        $("#myDropdown").toggle("hide");
    }
}