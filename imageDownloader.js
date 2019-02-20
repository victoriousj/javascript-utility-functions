const urls = Array.prototype.map.call(
  document.querySelectorAll("img"),
  v => v.src
);

const toDataURI = (url, callback) => {
  var filename = url.substring(url.lastIndexOf("/") + 1).replace(":", "");
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result, filename);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.send();
};

const download = (canvas, filename) => {
  let anchor = document.createElement("a");
  anchor.href = canvas;
  anchor.download = filename;
  anchor.click();
};

urls.forEach(url => toDataURI(url, download));

// var downloadImage = url => {
//   let anchor = document.createElement("a");
//   anchor.href = url;
//   anchor.download = url;
//   anchor.target = "_blank";
//   anchor.click();
// };

// function download(dataurl) {
//   var filename = dataurl.substring(dataurl.lastIndexOf('/')+1).replace(':', '');
//   var a = document.createElement("a");
//   a.href = dataurl;
//   a.setAttribute("download", filename);
//   var b = document.createEvent("MouseEvents");
//   b.initEvent("click", false, true);
//   a.dispatchEvent(b);
//   return false;
// }

// function downloadCanvas(canvas) {
//       let anchor = document.createElement("a");
//       anchor.href = canvas.toDataURL();
//       anchor.download = 'asdf';
//       anchor.target = "_blank";
//       anchor.click();
//   }

// function saveData(blob, fileName) // does the same as FileSaver.js
// {
//     var a = document.createElement("a");
//     document.body.appendChild(a);
//     a.style = "display: none";

//     var url = window.URL.createObjectURL(blob);
//     a.href = url;
//     a.download = fileName;
//     a.click();
//     window.URL.revokeObjectURL(url);
// }

// var xhr = new XMLHttpRequest();
// xhr.open("GET", requestUrl);
// xhr.responseType = "blob";

// xhr.onload = function () {
//     saveData(this.response, 'filename'); // saveAs is now your function
// };
// xhr.send();

// https://en.wikipedia.org/wiki/File:Sunrise_Ruby.jpg
