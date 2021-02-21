"use strict";

const $droppingArea = $("#file-dropping__area");

const $target = $("#file-dropping__target");

let files = "";

const droppingColor = "#ff0000";

const defaultColor = "";

$(function AddEvents() {
  $droppingArea.on("dragover", function (e) {
    $target.css("background-color", droppingColor);
    console.log("dragover");
    e.preventDefault();
  });
  $droppingArea.on("dragleave", function (e) {
    $target.css("background-color", defaultColor);
    console.log("dragleave");
    e.preventDefault();
  });

  $droppingArea.on("drop", function (e) {
    // 20210221最初にデフォルトのイベントを中止することで、ブラウザでドロップしたファイルを開くことを防ぐ
    e.preventDefault();
    $target.css("background-color", defaultColor);

    // 20210221jQueryでただ置き換えると、本来のイベントが動かない（eにdataTransferプロパティが存在しない）
    // if (e.dataTransfer.files.length > 0)
    //   console.log(e.dataTransfer.files.length.toString());

    files = e.originalEvent.dataTransfer.files;
    console.log(files.length.toString());
    $target.text(files[0].name);
    console.log("drop");
  });
});
