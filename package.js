Package.describe({
  name: 'interwebs:image-size',
  version: '1.0.2',
  summary: 'Retrieve the size of a remotely hosted image.',
  git: 'https://github.com/michelalbers/meteor-imagesize'
});

Npm.depends({
  'image-size': '0.3.5',
  'http-sync': '0.1.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('promise@0.5.1');
  api.addFiles('imagesize.js', ['server']);
  api.export('Interwebs', 'server');
});
