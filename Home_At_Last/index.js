// for later $(document).singlePageNav({filter: ':not(.internal)'});



var button1 = document.getElementById("clickme1"),
  count = 0;
button1.onclick = function() {
  count += 1;
  button1.innerHTML = count;
};

var button2 = document.getElementById("clickme2"),
  count = 0;
button2.onclick = function() {
  count += 1;
  button2.innerHTML = count;
};


//Also for later... = function gohome(href=index.html)
