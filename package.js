Package.describe({
  name: 'interwebs:image-size',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Retrieve the size of a remotely hosted image.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/michelalbers/',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Npm.depends({
  'image-size': '0.3.5',
  'http-sync': '0.1.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('promise');
  api.addFiles('imagesize.js', ['server']);
  api.export('Interwebs', 'server');
});
