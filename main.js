
function individualBio(evt, name) {
  var index, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (index = 0; index < tabcontent.length; index++) {
    tabcontent[index].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (index = 0; index < tablinks.length; index++) {
    tablinks[i].className = tablinks[index].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}
