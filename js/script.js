const albumContainer = $("#albumContainer");
const albumArt = $("#albumArt");
const albumBackgroundImage = $("#albumBackgroundImage");
const backgroundImage = $("#backgroundImage");

const blankImage = "res/blank.jpg";

// Setup values
albumArt[0].src = blankImage;
albumBackgroundImage[0].src = blankImage;


// Get current album info
function livelyCurrentTrack(data) {
  let obj = JSON.parse(data);
  if (obj != null && obj.Thumbnail != null) {
    albumArt[0].src = "data:image/png;base64, " + obj.Thumbnail;
    albumBackgroundImage[0].src = "data:image/png;base64, " + obj.Thumbnail;
    setAlbumVisibility(true);
  } else {
    setAlbumVisibility(false);
  }
}

// Control visibility
function setAlbumVisibility(shouldShow) {
  if( shouldShow ){
    albumContainer.css("opacity", 1);
  } else {
    albumContainer.css("opacity", 0);
  }
}

// Handle properties
function livelyPropertyListener(name, val) {
  switch(name) {
    case 'albumSize':
      albumArt.css('height', `${val}%`);
      break;

    case 'albumCornerRadius':
      albumArt.css('border-radius', `${val}%`);
      break;
    
    case "bgImage":
      backgroundImage[0].src = val;
      break;
    
    case 'useAlbumArtAsBg':
      const shouldShow = val ? 'block' : 'none';
      const containerBgColor = val ? 'black' : 'transparent';
      albumBackgroundImage.css('display', shouldShow);
      albumContainer.css('background-color', containerBgColor);
      break;

    case "bgBrightness":
      albumBackgroundImage.css('opacity', val);
      break;

    case "bgBlur":
      albumBackgroundImage.css('filter', `blur(${val}px)`);
      break;
  }
}
