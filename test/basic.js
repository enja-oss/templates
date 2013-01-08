var expect = require('expect.js');
var child_process = require('child_process');
var exec = child_process.exec;
var spawn = child_process.spawn;
var fs = require('fs');
var path = require('path');
var root = path.resolve(__dirname, '..');
var gruntInitPath = root + '/node_modules/.bin/grunt-init';
var template = root + '/enja-oss-repo';
var sandbox = __dirname + '/.sandbox';

function exists(path) {
  expect(fs.existsSync(sandbox + '/' + path)).to.ok();
}

describe('Create Files', function() {
  before(function(done) {
    exec('rm -rf ' + sandbox, function() {
      fs.mkdirSync(sandbox);
      process.chdir(sandbox);
      var gruntInit = spawn(gruntInitPath, [template]);

      gruntInit.stdout.on('data', function(d) {
        var str = d.toString();

        // 最後のプロンプトだけ`N`にしないと終わらない
        if (str.match('continuing?')) {
          gruntInit.stdin.write('N\n');
        }
        else {
          gruntInit.stdin.write('enja\n');
        }
      });

      gruntInit.on('exit', function() {
        done();
      });
    });
  });

  after(function() {
    exec('rm -rf ' + sandbox);
  });

  it('exists files', function() {
    exists('README.md');
    exists('docs');
    exists('docs/.gitkeep');
    exists('LICENSE-enja');
  });

  it('process variable', function() {
    var title = fs.readFileSync(sandbox + '/README.md').toString().split('\n')[0];
    expect(title).to.be('# enja ドキュメント日本語訳');
  });
});
