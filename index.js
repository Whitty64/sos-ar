window.onload = function() {
    document.querySelector('#audio').addEventListener('click', function() {
        var sound = document.getElementById("jingle-bells");
        sound.play();
  });
}
