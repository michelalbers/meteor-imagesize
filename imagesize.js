var sizeOf = Npm.require("image-size");
var url = Npm.require("url");
var httpSync = Npm.require("http-sync");

Interwebs = Interwebs || {};

/**
  * sizeOfRemoteImage
  *
  * Takes an image URL and returns the image size
  * @param {String} imageUrl e.g. http://example.com/myimage.jpg
  * @return {Object} object containing the image sizes
  */
Interwebs.sizeOfRemoteImage = function(imageUrl) {
  if(!imageUrl) throw new Meteor.Error('no-image-given', 'Need image for size calculation');
  var options = url.parse(imageUrl);
  try {
    var image = httpSync.request(options).end();
    return sizeOf(image.body);
  } catch(e) {
    throw new Meteor.Error('error-while-getting-image-size', e);
  }
};
