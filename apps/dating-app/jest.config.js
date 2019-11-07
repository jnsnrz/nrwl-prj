module.exports = {
  name: 'dating-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dating-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
