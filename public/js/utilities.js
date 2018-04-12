function Toggler(divId) {
    $("#" + divId).toggle();
}
function ShowLectureContent() {
    document.location.href = "#";
    Toggler("hidden");
}