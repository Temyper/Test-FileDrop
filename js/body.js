$(function AddEvents() {
  $("#file-dropping__area").on("dragover", function () {
    $("#file-dropping__target").css("background-color", "#ff0000");
    event.preventDefault();
  });
  $("#file-dropping__area").on("dragleave", function () {
    $("#file-dropping__target").css("background-color", "rgb(96, 235, 96)");
    event.preventDefault();
  });
});
