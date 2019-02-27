var toDataURI = (url, callback, i) => {
  var filename = i + "." + url.split('.').pop();

  var xhr = new XMLHttpRequest();
  xhr.onload = () => {
    var reader = new FileReader();
    reader.onloadend = () => callback(reader.result, filename);
    reader.readAsDataURL(xhr.response);
  };

  xhr.open("GET", url);
  xhr.responseType = "blob";

  xhr.send();
};

var download = (canvas, filename) => {
  let anchor = document.createElement("a");
  anchor.download = filename;
  anchor.href = canvas;
  anchor.click();
};

var imageNodes = document.querySelectorAll('img');
var imageSrcArr = [];
imageNodes.forEach(x => imageSrcArr.push(x.src));


imageSrcArr.forEach((url, i) => {
  setTimeout(() => {
    toDataURI(url, download, i);
  }, i * 1000);
});
