"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.classNames = function (el) {
    if (typeof el === 'string') {
        return el
            .split('.')
            .join(' ')
            .trim();
    }
    else if (el instanceof HTMLElement) {
        return el.className;
    }
    return '';
};
exports.validateChildren = function (children) {
    var isValid = true;
    if (Array.isArray(children)) {
        react_1.Children.forEach(children, function (child) {
            if (!react_1.isValidElement(child)) {
                isValid = false;
            }
        });
    }
    else {
        isValid = react_1.isValidElement(children);
    }
    return isValid;
};
exports.isReactElement = function (element) {
    return react_1.isValidElement(element) &&
        (typeof element.type === 'string' ||
            typeof element.type === 'function' ||
            typeof element.type === 'object');
};
exports.isModuleAvailable = function (modules, moduleName) {
    var moduleAvailable = false;
    for (var i = 0; i < modules.length; i++) {
        if (modules[i].name === moduleName) {
            moduleAvailable = true;
            break;
        }
    }
    return moduleAvailable;
};
