const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')
const zlib = require('zlib')
const chalk = require('chalk')
const archiver = require('archiver')
const GROUP_ID = 'com.gdn.app'
const projectDir = path.join(__dirname, '..')
const target = 'target'
const desktop = 'desktop'
const mobile = 'mobile'
const dist = 'dist'
const versionLabel = 'version'
const healthcheckLabel = 'healthcheck'
const targetDir = path.join(projectDir, target)

module.exports = {
  doPackage (mode) {
    const self = this
    mode = mode === 'RELEASE' ? '' : ('-' + mode)
    const targetResourcesFileName = process.env.npm_package_name + '-resources-' + process.env.npm_package_version + mode + '.zip'
    const archResourcesFolder = path.join(GROUP_ID + '-' + process.env.npm_package_name + '-resources', process.env.npm_package_version + mode)

    console.log('[LOG] Start packing')
    console.log(`[LOG] Project directory at ${projectDir}`)

    // Ensure target directory exist
    fse.ensureDirSync(targetDir)

    // Move dist to target folder
    console.log('[LOG] Copying dist/ files to target')
    fse.copySync(path.join(projectDir, dist), targetDir)

    // replicate files to desktop and mobile folder
    this.duplicateIndexFileForDevice()

    // Create additional files
    this.createAdditionalFiles(process.env.npm_package_version + mode, process.env.npm_package_name)

    console.log('[LOG] Archiving folder')
    // Create a file to stream archive data to.
    const outputResource = fs.createWriteStream(path.join(targetDir, targetResourcesFileName))

    // Archive main zip
    this.archive(outputResource,
        archive => {
          // default
          archive.directory(path.join(projectDir, target, '/static'),
              path.join(archResourcesFolder, '/static'))

          archive.file(path.join(projectDir, target, versionLabel), {
            name: versionLabel,
            prefix: path.join(archResourcesFolder)
          })
          archive.file(path.join(projectDir, target, healthcheckLabel), {
            name: healthcheckLabel,
            prefix: path.join(archResourcesFolder)
          })
        },
        archive => {
          console.log(`[LOG] ${archive.pointer()} total bytes`)
          console.log('[LOG] Archiver for app has been finalized and the output file descriptor has closed.')
          fse.removeSync(path.join(targetDir, 'index.html'))
          fse.removeSync(path.join(targetDir, 'static'))
          fse.removeSync(path.join(targetDir, versionLabel))
          fse.removeSync(path.join(targetDir, healthcheckLabel))
          // Create maven file
          self.createMaven(process.env.npm_package_version + mode, targetResourcesFileName, process.env.npm_package_name + '-resources', 'pom-resources.xml')
        }
    )
  },

  archive (output, archiveAction, closeHandler) {
    const archive = archiver('zip', { zlib: { level: 9 } })
    // Listen for all archive data to be written
    output.on('close', () => closeHandler(archive))
    // Good practice to catch this error explicitly
    archive.on('error', err => { console.log(`[ERROR] ${err}`) })
    // Pipe archive data to the file
    archive.pipe(output)
    archiveAction(archive)
    archive.finalize()
  },

  // create maven package file
  createMaven (version, targetFileName, packageName, pomFile = 'pom.xml') {
    const output = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">\n' +
        '  <modelVersion>4.0.0</modelVersion>\n' +
        '  <groupId>' + GROUP_ID + '</groupId>\n' +
        '  <artifactId>' + packageName + '</artifactId>\n' +
        '  <packaging>pom</packaging>\n' +
        '  <version>' + version + '</version>\n' +
        '  <name>' + packageName + '</name>\n' +
        '  <properties>\n' +
        '    <file>target/' + targetFileName + '</file>\n' +
        '  </properties>\n' +
        '</project>\n'

    // write file
    fs.writeFileSync(pomFile, output)
  },

  createAdditionalFiles (version, packageName) {
    // health
    const healthString = '{"status":"UP"}'

    // version
    const versionString =
        'maven.groupId=' + GROUP_ID + '\n' +
        'maven.artifactId=' + packageName + '\n' +
        'maven.pom.version=' + version + '\n' +
        'maven.build.time=' + new Date().toISOString().replace('T', ' ').substr(0, 19)

    fs.writeFileSync(path.join(projectDir, target, healthcheckLabel), healthString)
    fs.writeFileSync(path.join(projectDir, target, versionLabel), versionString)
  },

  duplicateIndexFileForDevice: function () {
    const verDir = path.join(targetDir, 'static', process.env.npm_package_version)
    const desktopDirTmp = path.join(targetDir, 'static', 'desktop' + '_tmp')
    const desktopDir = path.join(verDir, 'desktop')

    const mobileDirTmp = path.join(targetDir, 'static', 'mobile' + '_tmp')
    const mobileDir = path.join(verDir, 'mobile')

    fse.ensureDirSync(desktopDirTmp)
    console.log(chalk.green('Copying ' + verDir + ' to ' + desktopDir))
    fse.copySync(verDir, desktopDirTmp)
    fse.copySync(desktopDirTmp, mobileDirTmp)

    console.log(chalk.green('Copying ' + desktopDir + ' to ' + mobileDir))
    fse.moveSync(desktopDirTmp, desktopDir)
    fse.moveSync(mobileDirTmp, mobileDir)
  }

}
