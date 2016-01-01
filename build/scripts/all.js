(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _coreThing = require('./core/thing');

var _coreThing2 = _interopRequireDefault(_coreThing);

console.log('Yo, ' + (0, _coreThing2['default'])() + '!');

},{"./core/thing":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = rock;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var result = [1, 2, 3].map(function (n) {
    return n * 2;
});
console.log(result);

// enhanced object literal
var project = "helloWorld";
var obj = _defineProperty({
    // Shorthand for ‘project: project’
    project: project,
    // Methods
    printProject: function printProject() {
        console.log(this.project);
    }
}, "prop_" + (function () {
    return 42;
})(), 42);
console.log(obj.printProject());
console.log(obj);

function rock() {
    return "hehe";
}

;
module.exports = exports["default"];

},{}]},{},[1])


//# sourceMappingURL=all.js.map
