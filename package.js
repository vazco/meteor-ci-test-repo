Package.describe({
  name: 'vazco:ci-test',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Ignore this package it does nothing',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/vazco/meteor-ci-test-repo',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('ci-test.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('vazco:ci-test');
  api.addFiles('ci-test-tests.js');
});
