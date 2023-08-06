require('shelljs/make');
var path = require('path');
var fs = require('fs');
var semver = require('semver');

var rp = function(relPath) {
    return path.join(__dirname, relPath);
}

var buildPath = path.join(__dirname, '_build');

var run = function(cl) {
    console.log('>' + cl);
    var rc = exec(cl).code;
    if (rc !== 0) {
        echo('Exec failed with rc' + rc);
        exit(rc);
    }
}

target.clean = function() {
    rm('-Rf', buildPath);
};

target.build = function() {
    target.claim();

    run('tsc --outDir' + buildPath);

    cp('-Rf', rp('api/opensource'), buildPath);

    cp(rp('LICENSE'), buildPath);
    cp(rp('package.json'), buildPath);
    cp(rp('launch.json'), buildPath);
    cp(rp('package-lock.json'), buildPath);
    cp(rp('ThirdPartyNotice.txt'), buildPath);
    cp(rp('README.md'), buildPath);

    rm(path.join(buildPath, 'index.*'));
}

target.units = function() {
    target.build();
    var nodeVer = process.versions.node;

    if(semver.lit(nodeVer, 'version')){
        pushd('_build'); // building of the structure
    } 
    else{
        pushd('test'); // if the structure is already present
    }
    run('npm install ../_build');
    popd();

    console.log("------Unit Tests------");
    run('tsc -p ./test/units');
    run('tests/units');
}

target.test = function() {
    target.units();
}

