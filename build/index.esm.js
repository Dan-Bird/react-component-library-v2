import React from 'react';
import styled, { css } from 'styled-components';

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

var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n  ", "\n"], ["\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n  ",
    "\n"])), function (props) {
    return props.theme === 'secondary' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: black;\n      color: white;\n    "], ["\n      background-color: black;\n      color: white;\n    "])));
});
var Heading = styled.h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 64px;\n"], ["\n  font-size: 64px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;

var TestComponent = function (_a) {
    var theme = _a.theme;
    return (React.createElement(Container, { "data-testid": "test-component", theme: theme },
        React.createElement(Heading, null, "I'm the test component"),
        React.createElement("h2", null, "Made with love by Dan"))
    // <div>
    //   <h1>I'm the test component</h1>
    //   <h2>Made with love by Dan</h2>
    // </div>
    );
};

export { TestComponent };
//# sourceMappingURL=index.esm.js.map
