function encode(url) {
return encodeURIComponent(url).replace(/'/g, "%27").replace(/"/g, "%22");
}

function decode(url) {
return decodeURIComponent(url.replace(/\+/g, " "));
}
