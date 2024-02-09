function switchTab(tabid) {
  if (tabid == "editor") {
    document.getElementById("EditorTab").style.display = "block";
    document.getElementById("SpritesTab").style.display = "none";
    document.getElementById("DetailsTab").style.display = "none";
    document.getElementById("AboutTab").style.display = "none";
  } else if (tabid == "sprites") {
    document.getElementById("EditorTab").style.display = "none";
    document.getElementById("SpritesTab").style.display = "block";
    document.getElementById("DetailsTab").style.display = "none";
    document.getElementById("AboutTab").style.display = "none";
  } else if (tabid == "details") {
    document.getElementById("EditorTab").style.display = "none";
    document.getElementById("SpritesTab").style.display = "none";
    document.getElementById("DetailsTab").style.display = "block";
    document.getElementById("AboutTab").style.display = "none";
  } else if (tabid == "about") {
    document.getElementById("EditorTab").style.display = "none";
    document.getElementById("SpritesTab").style.display = "none";
    document.getElementById("DetailsTab").style.display = "none";
    document.getElementById("AboutTab").style.display = "block";
  }
}
