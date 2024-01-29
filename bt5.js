window.addEventListener('DOMContentLoaded', function() {
    var noteElement = document.getElementById('note');
    var mouseElement = document.getElementById('mouse');
    var mixElement = document.getElementById('mix');
    var delay = 1000;
    function runNumber(element, maxNumber) {
      var count = 0;
      var interval = setInterval(function() {
        element.textContent = count;
        count++;
  
        if (count > maxNumber) {
          clearInterval(interval);
        }
      }, delay);
    }
    runNumber(noteElement, parseInt(noteElement.textContent));
    runNumber(mouseElement, parseInt(mouseElement.textContent));
    runNumber(mixElement, parseInt(mixElement.textContent));
  });