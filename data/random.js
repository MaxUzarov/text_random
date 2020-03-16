var req;

function load_text(url) {
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req != undefined) {
    req.onreadystatechange = function() {
      loadDone();
    };
    req.open("GET", url, true);
    req.send("");
  } else {
    alert("Can't load file");
  }
}

function loadDone() {
  if (req.readyState == 4) {
    if (req.status == 200) {
      alertRndText(req.responseText);
    } else {
      alert("error:\n" + req.status + "\n" + req.statusText);
    }
  }
}

function rndNum(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function alertRndText(data) {
  console.log("data", data);
  let arrText = [];
  arrText = data.split("\n");

  const rnd = rndNum(1, arrText.length - 1);
  console.log("data", rnd);
  alert(arrText[rnd - 1]);
}

load_text("https://maxuzarov.github.io/text_random/data/text.txt");
