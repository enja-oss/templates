/*
 * grunt-init for enja-oss
 * https://github.com/enja-oss
 * 
 * Based on https://github.com/gruntjs/grunt-init
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a repository for translation on en.ja oss.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'If you encounter any problems, please let us know at https://github.com/enja-oss/README/issues';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    {
      name: 'original_repo_name',
      message: 'Which OSS are you translate?',
      default: 'none',
      warning: 'May consist of any characters.'
    },
    {
      name: 'original_repo_url',
      message: 'What is repository URL?',
      defalut: 'none',
      warning: 'Should be a public URL.'
    },
    init.prompt('licenses')
  ], function(err, props) {
    props.keywords = [];
    // author_name should alway be enja-oss
    props.author_name = 'enja-oss';
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};
