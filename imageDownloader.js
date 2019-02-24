var toDataURI = (url, callback, i) => {
  var filename = i + ".jpg";

  console.log(filename);

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

// var urls = Array.prototype.map.call(
//   document.querySelectorAll("img"),
//   img => img.src
// );

var getUrlsToDownload = (x = 1) => {
  var urlWithoutExtension = (url = window.location.href) =>
    url.slice(0, url.indexOf(url.substring(url.lastIndexOf("/") + 1)));

  var produceUrlArr = baseUrl => {
    var urls = [];
    for (let i = 1; i <= x; i++) {
      urls.push(`${baseUrl}${i}.jpg`);
    }
    return urls;
  };

  return produceUrlArr(urlWithoutExtension());
};

urls.forEach((url, i) => {
  setTimeout(() => {
    toDataURI(url, download, i);
  }, i * 1000);
});
