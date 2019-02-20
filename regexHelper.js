const removePostExtensionChars = str =>
  str.replace(/(.*?(?:jpg|png|jpeg))|.*/gm, "$1");
