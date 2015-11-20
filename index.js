var request = require('request');

function random(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

var giphyKittensRequestObject = {
  method: 'GET',
  url: 'http://api.giphy.com/v1/gifs/search',
  headers: {
    'Content-Type': 'application/json'
  },
  qs: {
    q: 'kittens',
    api_key: 'dc6zaTOxFJmzC'
  }
};

function hereKittyKitty(cb) {
  cb = cb || function () {};

  request(giphyKittensRequestObject, function (err, result) {
    var images;
    var imagesArr;
    var body;
    if (err) {
      cb(err);
      return;
    }
    body = JSON.parse(result.body);
    imagesArr = body.data;
    index = random(0, imagesArr.length);

    cb(false, imagesArr[index].images.fixed_height.url);
  });
}

module.exports = hereKittyKitty;
