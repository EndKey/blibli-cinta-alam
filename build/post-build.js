const concat = require('concat-files')
const zlib = require('zlib')
const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')
const hosts = require('../config/hosts')
const chalk = require('chalk')
const replace = require('replace-in-file')
const escapeStringRegexp = require('escape-string-regexp')

var input_files = []

const dist_folder = __dirname + '/../dist/'
const dist_js_folder = dist_folder + 'static/js/'
const dist_css_folder = dist_folder + 'static/css/'
const index_folder = dist_folder + 'static/' + process.env.npm_package_version + '/'
const index_js = index_folder + 'index.js'
const index_css = index_folder + 'index.css'

const js_files = fs.readdirSync(dist_js_folder)
const new_line_file = dist_folder + 'tmp_new_line.txt'
const new_line = '\n'

// create additional folders
fs.mkdirSync(index_folder)

// perform replication
const PROD_STATIC_URL = hosts.production.static_url
function replicateIndexCss () {
  for (const i in hosts) {
    // skip production
    if (i === 'production') {
      continue
    }
    replicateIndexCssFileBasedOnEnv(i, hosts[i].static_url)
  }
}

// replicate css for various env
function replicateIndexCssFileBasedOnEnv(prefix, url) {
  const src = index_css
  const target = path.join(index_folder, prefix + '.' + 'index.css')
  console.log(chalk.green('generating file: ' + target))

  fse.copySync(src, target)

  // replace prod url with env url
  const replaceOpts = {
    files: target,
    from: new RegExp(escapeStringRegexp(PROD_STATIC_URL), 'g'),
    to: url
  }
  replace.sync(replaceOpts)
  console.log(chalk.cyan(PROD_STATIC_URL + ' replaced with ' + url))
}
// end replication

// write a file to be a separator
fs.writeFileSync(new_line_file, new_line);

// app
input_files = input_files.concat(dist_js_folder + js_files.filter(a=>a.match(/^app\.(.*)\.js$/)))

console.log('start merging to index.js and index.css..')
concat(input_files, index_js, function(err) {
  if (err) throw err
  console.log(chalk.cyan('done merging file'))

  //remove new line file
  fs.unlinkSync(new_line_file)

  //js
  const inp_js = fs.createReadStream(index_js);
  const out_js = fs.createWriteStream(index_js + '.gz');
  inp_js.pipe(zlib.createGzip()).pipe(out_js);
});

//css
var css_files = fs.readdirSync(dist_css_folder)

css_files = css_files.filter(a=>a.match(/^app\.(.*)\.css$/))

if (css_files.length > 0) {
  fs.writeFileSync(index_css, fs.readFileSync(dist_css_folder + css_files[0]));

  //css
  const inp_css = fs.createReadStream(index_css);
  const out_css = fs.createWriteStream(index_css + '.gz');
  inp_css.pipe(zlib.createGzip()).pipe(out_css);

  console.log(chalk.cyan('replicating files for various env..'))
  replicateIndexCss()
}
