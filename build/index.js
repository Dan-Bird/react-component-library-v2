'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Container = styled__default['default'].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n  ", "\n"], ["\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n  ",
    "\n"])), function (props) {
    return props.theme === 'secondary'
        ? styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          background-color: black;\n          color: white;\n        "], ["\n          background-color: black;\n          color: white;\n        "]))) : null;
});
var Heading = styled__default['default'].h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 64px;\n"], ["\n  font-size: 64px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;

var TestComponent = function (_a) {
    _a.theme;
    return (React__default['default'].createElement(Container, { "data-testid": "test-component" },
        React__default['default'].createElement(Heading, null, "I'm the test component"),
        React__default['default'].createElement("h2", null, "Made with love by Dan")));
};

exports.TestComponent = TestComponent;
//# sourceMappingURL=index.js.map
