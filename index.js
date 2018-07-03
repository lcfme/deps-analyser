var path = require('path');
var readFile = require('./readFile');

module.exports = __loader__;

function __loader__(entryFile) {
    entryFile = /\.js$/.test(entryFile) ? entryFile : entryFile + '.js';
    var rootModule = {},
        requireStack = [],
        baseDir = path.dirname(entryFile);

    function __require__(id) {
        var fileData,
            _module,
            __func,
            parentModule = requireStack[requireStack.length - 1];
        id = parentModule
            ? path.resolve(path.dirname(parentModule.id), id)
            : entryFile;
        id = /\.js/.test(id) ? id : id + '.js';
        if (rootModule[id]) {
            return rootModule[id].exports;
        }
        _module = {
            exports: {},
            id: id,
            deps: []
        };
        if (parentModule) {
            parentModule.deps.push(_module);
        }
        requireStack.push(_module);
        fileData = readFile(id);
        __func = new Function('exports', 'module', 'require', fileData);
        __func.call(undefined, _module.exports, _module, __require__);
        rootModule[id] = _module;
        requireStack.pop();

        return _module.exports;
    }
    __require__(entryFile);

    return rootModule;
}