# Interwebs Imagesize

This package wraps image-size (https://www.npmjs.com/package/image-size) and is able to retrieve the dimensions of remote images.

## Usage

Install the package with `meteor add interwebs:image-size`

### Simple

You can use it directly calling `var imageDimensions = Interwebs.sizeOfRemoteImage('http://website.com/myimage.jpg');`. `ìmageDimensions`
will then contain an object with the dimensions.

### In conjunction with collection2 (https://github.com/aldeed/meteor-collection2)

If you want to store the dimensions inside for example a media object, you could do it with the `autoValue` option like this:

```JavaScript
  dimensions: {
    type: Object,
    autoValue: function() {
      if(Meteor.isServer) {
        return Interwebs.sizeOfRemoteImage(this.field('url').value);
      }
    },
    optional: true
  },
    'dimensions.height': {
    type: Number,
    optional: true
  },
  'dimensions.width': {
    type: Number,
    optional: true
  },
  'dimensions.type': {
    type: String,
    optional: true
  }
```

## Contributing

Just create a fork and a pull request if you have something you want to add or change. Contributions are always welcome!