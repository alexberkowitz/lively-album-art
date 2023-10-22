const albumArt = document.getElementById("albumart");
const backgroundImage = document.getElementById("backgroundImage");

let blankImage = "res/blank.jpg";
albumArt.src = blankImage;
backgroundImage.src = blankImage;

function livelyCurrentTrack(data) {
  let obj = JSON.parse(data);
  if (obj != null && obj.Thumbnail != null) {
    $("#albumContainer").css("opacity", 1);
    albumArt.src = "data:image/png;base64, " + obj.Thumbnail;
    backgroundImage.src = "data:image/png;base64, " + obj.Thumbnail;
  } else {
    $("#albumContainer").css("opacity", 0);
  }
}

function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}