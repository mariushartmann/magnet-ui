'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var require$$0 = require('os');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

/******************************************************************************
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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

var ThemeContext = React__default['default'].createContext("light");
var App = function (_a) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? "magnet-app" : _d, _e = _a.style, style = _e === void 0 ? undefined : _e, _f = _a.theme, theme = _f === void 0 ? "auto" : _f;
    // Vars & States - START
    var _g = React.useState("light"), internalTheme = _g[0], setInternalTheme = _g[1];
    // Vars & States - END
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-app": true,
            "theme-light": internalTheme === "light",
            "theme-dark": internalTheme === "dark"
        };
        return clsx([classes, className]);
    }, [className, internalTheme]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    React.useEffect(function () {
        if (theme === "auto") {
            var setAutoTheme = function () {
                return setInternalTheme("light");
            };
            if (typeof window !== "undefined") {
                if (window.matchMedia &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    setAutoTheme = function () {
                        return setInternalTheme("dark");
                    };
                }
            }
            setAutoTheme();
        }
        else {
            setInternalTheme(theme);
        }
    }, [theme]);
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement(ThemeContext.Provider, { value: internalTheme },
        React__default['default'].createElement("div", { id: id, className: classes, style: styles },
            React__default['default'].createElement("div", { className: "magnet-app--wrapper" }, children))));
};
App.displayName = "App";
var MagnetApp = React__default['default'].memo(App);
MagnetApp.displayName = "MagnetApp";

var Main = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.style, style = _e === void 0 ? undefined : _e;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-main": true
        };
        return clsx([classes, className]);
    }, [className]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement("div", { id: id, className: classes, style: styles }, children));
};
Main.displayName = "Main";
var MagnetMain = React__default['default'].memo(Main);
MagnetMain.displayName = "MagnetMain";

var Icon = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.id, id = _e === void 0 ? undefined : _e, _f = _a.onClick, onClick = _f === void 0 ? undefined : _f, _g = _a.size, size = _g === void 0 ? 20 : _g, _h = _a.style, style = _h === void 0 ? undefined : _h;
    // Methods & Handler - START
    var handleClick = React.useCallback(function (ev) {
        if (!disabled && onClick) {
            onClick(ev);
        }
    }, [disabled, onClick]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-icon": true,
            "magnet-icon--link": onClick !== undefined
        };
        return clsx([classes, className]);
    }, [className, onClick]);
    var styles = React.useMemo(function () {
        var styleList = {
            minHeight: size,
            maxHeight: size,
            minWidth: size,
            maxWidth: size
        };
        return __assign(__assign({}, styleList), style);
    }, [size, style]);
    var getIconStyles = React.useCallback(function () {
        var styleList = {
            fontSize: size
        };
        return __assign({}, styleList);
    }, [size]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement("span", { id: id, className: classes, style: styles, onClick: handleClick },
        React__default['default'].createElement("span", { className: "material-symbols-rounded", style: getIconStyles() }, children)));
};
Icon.displayName = "Icon";
var MagnetIcon = React__default['default'].memo(Icon);
MagnetIcon.displayName = "MagnetIcon";

var ProgressSpinner = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.className, className = _b === void 0 ? undefined : _b, _c = _a.id, id = _c === void 0 ? undefined : _c, _d = _a.size, size = _d === void 0 ? 20 : _d, _e = _a.style, style = _e === void 0 ? undefined : _e;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-progress-spinner": true
        };
        return clsx([classes, className]);
    }, [className]);
    var styles = React.useMemo(function () {
        var styleList = {
            fontSize: size
        };
        return __assign(__assign({}, styleList), style);
    }, [size, style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement(MagnetIcon, { id: id, className: classes, style: styles }, "autorenew"));
};
ProgressSpinner.displayName = "ProgressSpinner";
var MagnetProgressSpinner = React__default['default'].memo(ProgressSpinner);
MagnetProgressSpinner.displayName = "MagnetProgressSpinner";

/* eslint-disable @typescript-eslint/no-explicit-any */
function useCombinedRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    var targetRef = React__default['default'].useRef();
    React__default['default'].useEffect(function () {
        refs.forEach(function (ref) {
            if (!ref) {
                return;
            }
            if (typeof ref === "function") {
                ref(targetRef.current);
            }
            else {
                ref.current = targetRef.current;
            }
        });
    }, [refs]);
    return targetRef;
}

var Button = React__default['default'].forwardRef(function (_a, forwardRef) {
    var _b = _a.appendIcon, appendIcon = _b === void 0 ? undefined : _b, _c = _a.block, block = _c === void 0 ? false : _c, _d = _a.children, children = _d === void 0 ? undefined : _d, _e = _a.className, className = _e === void 0 ? undefined : _e, _f = _a.color, color = _f === void 0 ? "primary" : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.href, href = _h === void 0 ? undefined : _h, _j = _a.icon, icon = _j === void 0 ? false : _j, _k = _a.id, id = _k === void 0 ? undefined : _k, _l = _a.loading, loading = _l === void 0 ? false : _l, _m = _a.onClick, onClick = _m === void 0 ? undefined : _m, _o = _a.prependIcon, prependIcon = _o === void 0 ? undefined : _o, _p = _a.size, size = _p === void 0 ? "medium" : _p, _q = _a.style, style = _q === void 0 ? undefined : _q, _r = _a.theme, theme = _r === void 0 ? "auto" : _r, _s = _a.type, type = _s === void 0 ? "button" : _s, _t = _a.variant, variant = _t === void 0 ? "filled" : _t;
    // Vars & States - START
    var tag = href ? "a" : "button";
    var globalTheme = React.useContext(ThemeContext);
    var innerRef = React.useRef(null);
    var combinedRefs = useCombinedRefs(forwardRef, innerRef);
    // Vars & States - END
    // Methods & Handler - START
    var handleClick = React.useCallback(function (ev) {
        if (!disabled && !loading && onClick) {
            onClick(ev);
        }
    }, [disabled, loading, onClick]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-button": true,
            "elevation-1": variant === "elevated" && !disabled,
            "magnet-button--elevated": variant === "elevated",
            "magnet-button--filled": variant === "filled",
            "magnet-button--outlined": variant === "outlined",
            "magnet-button--text": variant === "text",
            "magnet-button--icon": icon,
            "magnet-button--block": block,
            "magnet-button--sm": size === "small",
            "magnet-button--md": size === "medium",
            "magnet-button--lg": size === "large",
            "magnet-button--disabled": disabled,
            "magnet-button--loading": loading,
            "magnet-button--primary": color && color === "primary",
            "magnet-button--secondary": color && color === "secondary",
            "magnet-button--success": color && color === "success",
            "magnet-button--warning": color && color === "warning",
            "magnet-button--error": color && color === "error",
            "theme-light": theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark": theme === "dark" ||
                (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [
        block,
        className,
        color,
        disabled,
        globalTheme,
        icon,
        loading,
        size,
        theme,
        variant
    ]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // useRipple(innerRef);
    // Life Cycle Hooks - END
    // Render - START
    var renderInner = React.useCallback(function () {
        return (React__default['default'].createElement("span", { className: "magnet-button--inner" },
            prependIcon && (React__default['default'].createElement(MagnetIcon, { className: "mr-2" }, prependIcon)),
            children,
            appendIcon && (React__default['default'].createElement(MagnetIcon, { className: "ml-2" }, appendIcon))));
    }, [appendIcon, children, prependIcon]);
    return React__default['default'].createElement(tag, {
        id: id,
        className: classes,
        style: styles,
        onClick: handleClick,
        disabled: disabled,
        href: href,
        ref: combinedRefs,
        type: tag === "button" ? type : undefined
    }, React__default['default'].createElement(React__default['default'].Fragment, null,
        renderInner(),
        React__default['default'].createElement(MagnetProgressSpinner, null)));
});
Button.displayName = "Button";
var MagnetButton = React__default['default'].memo(Button);
MagnetButton.displayName = "MagnetButton";

var Card = React__default['default'].forwardRef(function (_a, ref) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.href, href = _e === void 0 ? undefined : _e, _f = _a.id, id = _f === void 0 ? undefined : _f, _g = _a.onClick, onClick = _g === void 0 ? undefined : _g, _h = _a.style, style = _h === void 0 ? undefined : _h, _j = _a.theme, theme = _j === void 0 ? "auto" : _j, _k = _a.variant, variant = _k === void 0 ? "elevated" : _k;
    // Vars & States - START
    var tag = href ? "a" : "div";
    var globalTheme = React.useContext(ThemeContext);
    // Vars & States - END
    // Methods & Handler - START
    var handleClick = React.useCallback(function (ev) {
        if (onClick && !disabled) {
            onClick(ev);
        }
    }, [disabled, onClick]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-card": true,
            "elevation-1": variant === "elevated",
            "magnet-card--elevated": variant === "elevated",
            "magnet-card--filled": variant === "filled",
            "magnet-card--outlined": variant === "outlined",
            "magnet-card--disabled": disabled,
            "theme-light": theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark": theme === "dark" ||
                (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [className, disabled, globalTheme, theme, variant]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return React__default['default'].createElement(tag, {
        id: id,
        className: classes,
        style: styles,
        onClick: handleClick,
        href: !disabled ? href : undefined,
        ref: ref
    }, children);
});
Card.displayName = "Card";
var MagnetCard = React__default['default'].memo(Card);
MagnetCard.displayName = "MagnetCard";

var CardTitle = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.style, style = _e === void 0 ? undefined : _e;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-card-title": true
        };
        return clsx([classes, className]);
    }, [className]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement("div", { id: id, className: classes, style: styles }, children));
};
CardTitle.displayName = "CardTitle";
var MagnetCardTitle = React__default['default'].memo(CardTitle);
MagnetCardTitle.displayName = "MagnetCardTitle";

var CardBody = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.style, style = _e === void 0 ? undefined : _e;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-card-body": true
        };
        return clsx([classes, className]);
    }, [className]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement("div", { id: id, className: classes, style: styles }, children));
};
CardBody.displayName = "CardBody";
var MagnetCardBody = React__default['default'].memo(CardBody);
MagnetCardBody.displayName = "MagnetCardBody";

var CardActions = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.style, style = _e === void 0 ? undefined : _e;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-card-actions": true
        };
        return clsx([classes, className]);
    }, [className]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement("div", { id: id, className: classes, style: styles }, children));
};
CardActions.displayName = "CardActions";
var MagnetCardActions = React__default['default'].memo(CardActions);
MagnetCardActions.displayName = "MagnetCardActions";

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

function commonjsRequire (target) {
	throw new Error('Could not dynamically require "' + target + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.');
}

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var uniqid = createCommonjsModule(function (module) {
//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(typeof __webpack_require__ !== 'function' && typeof commonjsRequire !== 'undefined'){
    var mac = '', os = require$$0__default['default']; 
    if(os.networkInterfaces) var networkInterfaces = os.networkInterfaces();
    if(networkInterfaces){
        loop:
        for(let interface_key in networkInterfaces){
            const networkInterface = networkInterfaces[interface_key];
            const length = networkInterface.length;
            for(var i = 0; i < length; i++){
                if(networkInterface[i] !== undefined && networkInterface[i].mac && networkInterface[i].mac != '00:00:00:00:00:00'){
                    mac = networkInterface[i].mac; break loop;
                }
            }
        }
        address = mac ? parseInt(mac.replace(/\:|\D+/gi, '')).toString(36) : '' ;
    }
} 

//  Exports
// ================================================
module.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); };
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); };
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); };

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}
});

var FormContext = React__default['default'].createContext({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handlePublish: function () { },
    isDirty: false,
    mode: "lazy"
});
var Form = function (_a) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.isDirty, isDirty = _e === void 0 ? false : _e, _f = _a.mode, mode = _f === void 0 ? "lazy" : _f, onSubmit = _a.onSubmit, _g = _a.onValidityChange, onValidityChange = _g === void 0 ? undefined : _g, _h = _a.style, style = _h === void 0 ? undefined : _h;
    // Vars & States - START
    var _j = React.useState(true), isValid = _j[0], setIsValid = _j[1];
    var _k = React.useState(isDirty), lazyIsDirty = _k[0], setLazyIsDirty = _k[1];
    var formData = React.useRef({});
    // Vars & States - END
    // Methods & Handler - START
    var checkValidity = React.useCallback(function () {
        var isValidTmp = true;
        Object.values(formData.current).map(function (value) {
            if (!value.isValid) {
                isValidTmp = false;
            }
        });
        setIsValid(isValidTmp);
    }, []);
    var handlePublish = React.useCallback(function (data) {
        var formDataClone = __assign({}, formData.current);
        formDataClone[data.name] = {
            value: data.value,
            isValid: data.isValid
        };
        formData.current = formDataClone;
        checkValidity();
    }, [checkValidity]);
    var handleSubmit = React.useCallback(function (ev) {
        setLazyIsDirty(true);
        if (onSubmit && isValid) {
            onSubmit(Object.entries(formData.current).map(function (_a) {
                var key = _a[0], value = _a[1];
                return { key: key, value: value.value };
            }));
        }
        ev.preventDefault();
    }, [isValid, onSubmit]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-form": true
        };
        return clsx([classes, className]);
    }, [className]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    React.useEffect(function () {
        if (isDirty) {
            setLazyIsDirty(isDirty);
        }
    }, [isDirty]);
    React.useEffect(function () {
        if (onValidityChange) {
            onValidityChange(isValid);
        }
    }, [isValid, onValidityChange]);
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement(FormContext.Provider, { value: { isDirty: lazyIsDirty, mode: mode, handlePublish: handlePublish } },
        React__default['default'].createElement("form", { id: id, className: classes, onSubmit: handleSubmit, style: styles }, children)));
};
Form.displayName = "Form";
var MagnetForm = React__default['default'].memo(Form);
MagnetForm.displayName = "MagnetForm";

function useValidation(
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
value, rules) {
    var errors = [];
    for (var index = 0; index < rules.length; index++) {
        var rule = rules[index];
        var valid = typeof rule === "function" ? rule(value) : rule;
        if (valid === false || typeof valid === "string") {
            errors.push(valid || "");
        }
        else if (typeof valid !== "boolean") {
            console.error("Rules should return a string or boolean, received '" + typeof valid + "' instead");
        }
    }
    return [errors.length < 1, errors];
}

var Hint = function (_a) {
    var _b = _a.className, className = _b === void 0 ? undefined : _b, _c = _a.error, error = _c === void 0 ? false : _c, _d = _a.hints, hints = _d === void 0 ? [] : _d, _e = _a.id, id = _e === void 0 ? undefined : _e, _f = _a.style, style = _f === void 0 ? undefined : _f, _g = _a.theme, theme = _g === void 0 ? "auto" : _g;
    // Vars & States - START
    var globalTheme = React.useContext(ThemeContext);
    // Vars & States - END
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-hint": true,
            "magnet-hint--error": error,
            "theme-light": theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark": theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [className, theme, globalTheme, error]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement("div", { id: id, className: classes, style: styles }, hints.map(function (hint, index) {
        return React__default['default'].createElement("span", { key: hint + index }, hint);
    })));
};
Hint.displayName = "Hint";
var MagnetHint = React__default['default'].memo(Hint);
MagnetHint.displayName = "MagnetHint";

var Checkbox = function (_a) {
    var _b = _a.className, className = _b === void 0 ? undefined : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.error, error = _d === void 0 ? false : _d, _e = _a.hint, hint = _e === void 0 ? undefined : _e, _f = _a.id, id = _f === void 0 ? undefined : _f, _g = _a.label, label = _g === void 0 ? undefined : _g, _h = _a.mode, mode = _h === void 0 ? "lazy" : _h, _j = _a.name, name = _j === void 0 ? undefined : _j, _k = _a.onChange, onChange = _k === void 0 ? undefined : _k, _l = _a.onClick, onClick = _l === void 0 ? undefined : _l, _m = _a.ref, ref = _m === void 0 ? undefined : _m, _o = _a.rules, rules = _o === void 0 ? [] : _o, _p = _a.style, style = _p === void 0 ? undefined : _p, _q = _a.theme, theme = _q === void 0 ? "auto" : _q, _r = _a.value, value = _r === void 0 ? false : _r;
    // Vars & States - START
    var globalTheme = React.useContext(ThemeContext);
    var formContext = React.useContext(FormContext);
    var _s = React.useState(id !== null && id !== void 0 ? id : uniqid("checkbox-")), internalId = _s[0], setLazyId = _s[1];
    var _t = React.useState(value), internalValue = _t[0], setInternalValue = _t[1];
    var _u = React.useState(false), isDirty = _u[0], setIsDirty = _u[1];
    var _v = useValidation(internalValue, rules), isValid = _v[0], validationErrors = _v[1];
    // Vars & States - END
    // Methods & Handler - START
    var handleChange = function () {
        if (disabled) {
            return;
        }
        var newValue = !internalValue;
        setInternalValue(newValue);
        setIsDirty(true);
        if (onChange) {
            onChange(newValue);
        }
    };
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-checkbox": true,
            "magnet-checkbox--has-value": internalValue,
            "magnet-checkbox--disabled": disabled,
            "magnet-checkbox--error": error || (isDirty && !isValid),
            "theme-light": theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark": theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [
        className,
        disabled,
        error,
        globalTheme,
        isDirty,
        isValid,
        internalValue,
        theme
    ]);
    var checkmarkClasses = React.useMemo(function () {
        return clsx({
            "magnet-checkbox--checkmark": true,
            "magnet-checkbox--checkmark-show": internalValue
        });
    }, [internalValue]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    React.useEffect(function () {
        setIsDirty((formContext && formContext.mode === "force") || mode === "force");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(function () {
        if ((formContext && formContext.isDirty) || mode === "force") {
            setIsDirty(true);
        }
    }, [formContext, mode]);
    React.useEffect(function () {
        setLazyId(id !== null && id !== void 0 ? id : uniqid("checkbox-"));
    }, [id]);
    React.useEffect(function () {
        setInternalValue(value);
    }, [value]);
    React.useEffect(function () {
        if (!formContext) {
            return;
        }
        if (!name) {
            console.error("You have to define a name to " + internalId + " if used inside an EForm.");
            return;
        }
        formContext.handlePublish({
            name: name,
            value: internalValue,
            isValid: isValid
        });
    }, [internalValue, isValid, formContext, name, internalId]);
    // Life Cycle Hooks - END
    // Render - START
    var renderHint = React.useCallback(function () {
        if (!hint && validationErrors.length < 1) {
            return null;
        }
        var hints = [];
        if (hint && hint.length > 0) {
            hints.push(hint);
        }
        validationErrors.forEach(function (errMsg) {
            hints.push(errMsg);
        });
        return React__default['default'].createElement(MagnetHint, { hints: hints, error: error });
    }, [hint, validationErrors, error]);
    return (React__default['default'].createElement("div", { className: classes, style: styles, onClick: onClick },
        React__default['default'].createElement("div", { className: "magnet-checkbox--inner" },
            React__default['default'].createElement("div", { className: "magnet-checkbox--input", onClick: handleChange },
                React__default['default'].createElement("input", { id: internalId, type: "checkbox", onChange: handleChange, disabled: disabled, checked: internalValue, ref: ref }),
                React__default['default'].createElement(MagnetIcon, { className: checkmarkClasses, size: 22, disabled: disabled, onClick: handleChange }, "check")),
            label && (React__default['default'].createElement("label", { htmlFor: internalId, className: "magnet-checkbox--label" }, label))),
        renderHint()));
};
Checkbox.displayName = "Checkbox";
var MagnetCheckbox = React__default['default'].memo(Checkbox);
MagnetCheckbox.displayName = "MagnetCheckbox";

var Container = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.fluid, fluid = _e === void 0 ? false : _e, _f = _a.style, style = _f === void 0 ? undefined : _f;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-container": true,
            "magnet-container--fluid": fluid
        };
        return clsx([classes, className]);
    }, [className, fluid]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement("div", { id: id, className: classes, style: styles }, children));
};
Container.displayName = "Container";
var MagnetContainer = React__default['default'].memo(Container);
MagnetContainer.displayName = "MagnetContainer";

var Row = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.noGutters, noGutters = _e === void 0 ? false : _e, _f = _a.style, style = _f === void 0 ? undefined : _f;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-row": true,
            "magnet-row--no-gutters": noGutters
        };
        return clsx([classes, className]);
    }, [className, noGutters]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement("div", { id: id, className: classes, style: styles }, children));
};
Row.displayName = "Row";
var MagnetRow = React__default['default'].memo(Row);
MagnetRow.displayName = "MagnetRow";

var Column = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.lg, lg = _e === void 0 ? undefined : _e, _f = _a.md, md = _f === void 0 ? undefined : _f, _g = _a.sm, sm = _g === void 0 ? undefined : _g, _h = _a.style, style = _h === void 0 ? undefined : _h, _j = _a.xl, xl = _j === void 0 ? undefined : _j, _k = _a.xs, xs = _k === void 0 ? undefined : _k;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        // eslint-disable-next-line @typescript-eslint/member-delimiter-style
        var classes = {
            "magnet-column": true
        };
        if (xs) {
            classes["magnet-column--xs-" + xs] = true;
        }
        if (sm) {
            classes["magnet-column--sm-" + sm] = true;
        }
        if (md) {
            classes["magnet-column--md-" + md] = true;
        }
        if (lg) {
            classes["magnet-column--lg-" + lg] = true;
        }
        if (xl) {
            classes["magnet-column--xl-" + xl] = true;
        }
        return clsx([classes, className]);
    }, [className, lg, md, sm, xl, xs]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement("div", { id: id, className: classes, style: styles }, children));
};
Column.displayName = "Column";
var MagnetColumn = React__default['default'].memo(Column);
MagnetColumn.displayName = "MagnetColumn";

var Image = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.aspectRatio, aspectRatio = _b === void 0 ? 1 : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.contain, contain = _d === void 0 ? false : _d, _e = _a.id, id = _e === void 0 ? undefined : _e, src = _a.src, _f = _a.style, style = _f === void 0 ? undefined : _f;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-image": true,
            "magnet-image--contain": contain
        };
        return clsx([classes, className]);
    }, [className, contain]);
    var styles = React.useMemo(function () {
        var styleList = {};
        var tmpStyle = style;
        if (aspectRatio) {
            tmpStyle = __assign(__assign({}, style), {
                paddingTop: 100 / aspectRatio + "%"
            });
        }
        return __assign(__assign({}, styleList), tmpStyle);
    }, [aspectRatio, style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement("div", { id: id, className: classes, style: styles },
        React__default['default'].createElement("div", { className: "magnet-image--inner", style: {
                backgroundImage: "url(" + src + ")"
            } })));
};
Image.displayName = "Image";
var MagnetImage = React__default['default'].memo(Image);
MagnetImage.displayName = "MagnetImage";

var NavBar = function (_a) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.style, style = _e === void 0 ? undefined : _e, _f = _a.theme, theme = _f === void 0 ? "auto" : _f, _g = _a.variant, variant = _g === void 0 ? "flat" : _g;
    // Vars & States - START
    var globalTheme = React.useContext(ThemeContext);
    // Vars & States - END
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-nav-bar": true,
            "magnet-nav-bar--flat": variant === "flat",
            "magnet-nav-bar--elevated": variant === "elevated",
            "elevation-2": variant === "elevated",
            "theme-light": theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark": theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [className, globalTheme, theme, variant]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // useRipple(innerRef);
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement("div", { id: id, className: classes, style: styles }, children));
};
NavBar.displayName = "NavBar";
var MagnetNavBar = React__default['default'].memo(NavBar);
MagnetNavBar.displayName = "MagnetNavBar";

var NavBarLink = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.children, children = _c === void 0 ? undefined : _c, _d = _a.className, className = _d === void 0 ? undefined : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, icon = _a.icon, _f = _a.id, id = _f === void 0 ? undefined : _f, _g = _a.onClick, onClick = _g === void 0 ? undefined : _g, _h = _a.style, style = _h === void 0 ? undefined : _h;
    // Methods & Handler - START
    var handleClick = React.useCallback(function (ev) {
        if (!disabled && onClick) {
            onClick(ev);
        }
    }, [disabled, onClick]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-nav-bar-link": true,
            "magnet-nav-bar-link--active": active,
            "magnet-nav-bar-link--disabled": disabled
        };
        return clsx([classes, className]);
    }, [active, className, disabled]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // useRipple(innerRef);
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement("button", { id: id, className: classes, style: styles, onClick: handleClick },
        React__default['default'].createElement(MagnetIcon, { className: "magnet-nav-bar-link--icon" }, icon),
        React__default['default'].createElement("span", { className: "magnet-nav-bar-link--label" }, children)));
};
NavBarLink.displayName = "NavBarLink";
var MagnetNavBarLink = React__default['default'].memo(NavBarLink);
MagnetNavBarLink.displayName = "MagnetNavBarLink";

var Radio = function (_a) {
    var _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.error, error = _e === void 0 ? false : _e, _f = _a.id, id = _f === void 0 ? undefined : _f, _g = _a.label, label = _g === void 0 ? undefined : _g, _h = _a.name, name = _h === void 0 ? undefined : _h, _j = _a.onChange, onChange = _j === void 0 ? undefined : _j, _k = _a.onClick, onClick = _k === void 0 ? undefined : _k, _l = _a.ref, ref = _l === void 0 ? undefined : _l, _m = _a.style, style = _m === void 0 ? undefined : _m, _o = _a.theme, theme = _o === void 0 ? "auto" : _o, value = _a.value;
    // Vars & States - START
    var globalTheme = React.useContext(ThemeContext);
    var formContext = React.useContext(FormContext);
    var _p = React.useState(id !== null && id !== void 0 ? id : uniqid("radio-")), internalId = _p[0], setLazyId = _p[1];
    var _q = React.useState(checked), internalChecked = _q[0], setInternalChecked = _q[1];
    // Vars & States - END
    // Methods & Handler - START
    var handleChange = function () {
        if (disabled) {
            return;
        }
        if (internalChecked) {
            return;
        }
        setInternalChecked(true);
        if (onChange) {
            onChange(true);
        }
    };
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-radio": true,
            "magnet-radio--has-value": internalChecked,
            "magnet-radio--disabled": disabled,
            "magnet-radio--error": error,
            "theme-light": theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark": theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [className, disabled, error, globalTheme, internalChecked, theme]);
    var checkmarkClasses = React.useMemo(function () {
        return clsx({
            "magnet-radio--checkmark": true,
            "magnet-radio--checkmark-show": internalChecked
        });
    }, [internalChecked]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    React.useEffect(function () {
        setLazyId(id !== null && id !== void 0 ? id : uniqid("radio-"));
    }, [id]);
    React.useEffect(function () {
        setInternalChecked(checked);
    }, [checked]);
    React.useEffect(function () {
        if (!formContext) {
            return;
        }
        if (!name) {
            console.error("You have to define a name to " + internalId + " if used inside an EForm.");
            return;
        }
        formContext.handlePublish({
            name: name,
            value: internalChecked,
            isValid: true
        });
    }, [internalChecked, formContext, name, internalId]);
    // Life Cycle Hooks - END
    // Render - START
    return (React__default['default'].createElement("div", { className: classes, style: styles, onClick: onClick },
        React__default['default'].createElement("div", { className: "magnet-radio--inner" },
            React__default['default'].createElement("div", { className: "magnet-radio--input", onClick: handleChange },
                React__default['default'].createElement("input", { name: name, id: internalId, type: "radio", onChange: handleChange, disabled: disabled, checked: internalChecked, ref: ref, value: value }),
                React__default['default'].createElement("div", { className: checkmarkClasses, onClick: handleChange })),
            label && (React__default['default'].createElement("label", { htmlFor: internalId, className: "magnet-radio--label" }, label)))));
};
Radio.displayName = "Radio";
var MagnetRadio = React__default['default'].memo(Radio);
MagnetRadio.displayName = "MagnetRadio";

var RadioGroup = function (_a) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.error, error = _e === void 0 ? false : _e, _f = _a.hint, hint = _f === void 0 ? undefined : _f, _g = _a.id, id = _g === void 0 ? undefined : _g, _h = _a.mode, mode = _h === void 0 ? "lazy" : _h, name = _a.name, _j = _a.onChange, onChange = _j === void 0 ? undefined : _j, _k = _a.row, row = _k === void 0 ? false : _k, _l = _a.rules, rules = _l === void 0 ? [] : _l, _m = _a.style, style = _m === void 0 ? undefined : _m, _o = _a.theme, theme = _o === void 0 ? "auto" : _o, _p = _a.value, value = _p === void 0 ? undefined : _p;
    // Vars & States - START
    var formContext = React.useContext(FormContext);
    var _q = React.useState(value), internalValue = _q[0], setInternalValue = _q[1];
    var _r = React.useState(false), isDirty = _r[0], setIsDirty = _r[1];
    var _s = useValidation(internalValue, rules), isValid = _s[0], validationErrors = _s[1];
    // Vars & States - END
    // Methods & Handler - START
    var handleChange = React.useCallback(function (ev) {
        if (disabled) {
            return;
        }
        var newValue = ev.target.value;
        setInternalValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    }, [disabled, onChange]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-radio-group": true,
            "magnet-radio-group--row": row,
            "magnet-radio-group--error": error || !isValid
        };
        return clsx([classes, className]);
    }, [row, error, isValid, className]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    React.useEffect(function () {
        setIsDirty((formContext && formContext.mode === "force") || mode === "force");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(function () {
        if ((formContext && formContext.isDirty) || mode === "force") {
            setIsDirty(true);
        }
    }, [formContext, mode]);
    React.useEffect(function () {
        setInternalValue(value);
    }, [value]);
    var childs = React__default['default'].Children.map(children, function (child) {
        if (React__default['default'].isValidElement(child)) {
            return React__default['default'].cloneElement(child, {
                name: name,
                checked: child.props.value === internalValue,
                disabled: disabled,
                error: (isDirty && !isValid) || error,
                theme: theme
            });
        }
        return child;
    });
    React.useEffect(function () {
        if (!formContext) {
            return;
        }
        formContext.handlePublish({
            name: name,
            value: internalValue,
            isValid: isValid
        });
    }, [internalValue, isValid, formContext, name]);
    // Life Cycle Hooks - END
    // Render - START
    var renderHint = React.useCallback(function () {
        if (!hint && validationErrors.length < 1) {
            return null;
        }
        var hints = [];
        if (hint && hint.length > 0) {
            hints.push(hint);
        }
        validationErrors.forEach(function (errMsg) {
            hints.push(errMsg);
        });
        return React__default['default'].createElement(MagnetHint, { hints: hints, error: error });
    }, [hint, validationErrors, error]);
    return (React__default['default'].createElement("div", { id: id, className: classes, style: styles, onChange: handleChange },
        React__default['default'].createElement("div", { className: "magnet-radio-group--container" }, childs),
        renderHint(),
        internalValue));
};
RadioGroup.displayName = "RadioGroup";
var MagnetRadioGroup = React__default['default'].memo(RadioGroup);
MagnetRadioGroup.displayName = "MagnetRadioGroup";

var Switch = function (_a) {
    var _b = _a.className, className = _b === void 0 ? undefined : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.error, error = _d === void 0 ? false : _d, _e = _a.hint, hint = _e === void 0 ? undefined : _e, _f = _a.id, id = _f === void 0 ? undefined : _f, _g = _a.label, label = _g === void 0 ? undefined : _g, _h = _a.mode, mode = _h === void 0 ? "lazy" : _h, _j = _a.name, name = _j === void 0 ? undefined : _j, _k = _a.onChange, onChange = _k === void 0 ? undefined : _k, _l = _a.onClick, onClick = _l === void 0 ? undefined : _l, _m = _a.ref, ref = _m === void 0 ? undefined : _m, _o = _a.rules, rules = _o === void 0 ? [] : _o, _p = _a.style, style = _p === void 0 ? undefined : _p, _q = _a.theme, theme = _q === void 0 ? "auto" : _q, _r = _a.value, value = _r === void 0 ? false : _r;
    // Vars & States - START
    var globalTheme = React.useContext(ThemeContext);
    var formContext = React.useContext(FormContext);
    var _s = React.useState(id !== null && id !== void 0 ? id : uniqid("switch-")), internalId = _s[0], setLazyId = _s[1];
    var _t = React.useState(value), internalValue = _t[0], setInternalValue = _t[1];
    var _u = React.useState(false), isDirty = _u[0], setIsDirty = _u[1];
    var _v = useValidation(internalValue, rules), isValid = _v[0], validationErrors = _v[1];
    // Vars & States - END
    // Methods & Handler - START
    var handleChange = function () {
        if (disabled) {
            return;
        }
        var newValue = !internalValue;
        setInternalValue(newValue);
        setIsDirty(true);
        if (onChange) {
            onChange(newValue);
        }
    };
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = React.useMemo(function () {
        var classes = {
            "magnet-switch": true,
            "magnet-switch--has-value": internalValue,
            "magnet-switch--disabled": disabled,
            "magnet-switch--error": error || (isDirty && !isValid),
            "theme-light": theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark": theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [
        className,
        disabled,
        error,
        globalTheme,
        isDirty,
        isValid,
        internalValue,
        theme
    ]);
    var checkmarkClasses = React.useMemo(function () {
        return clsx({
            "magnet-switch--checkmark": true,
            "magnet-switch--checkmark-show": internalValue
        });
    }, [internalValue]);
    var styles = React.useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    React.useEffect(function () {
        setIsDirty((formContext && formContext.mode === "force") || mode === "force");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(function () {
        if ((formContext && formContext.isDirty) || mode === "force") {
            setIsDirty(true);
        }
    }, [formContext, mode]);
    React.useEffect(function () {
        setLazyId(id !== null && id !== void 0 ? id : uniqid("switch-"));
    }, [id]);
    React.useEffect(function () {
        setInternalValue(value);
    }, [value]);
    React.useEffect(function () {
        if (!formContext) {
            return;
        }
        if (!name) {
            console.error("You have to define a name to " + internalId + " if used inside an EForm.");
            return;
        }
        formContext.handlePublish({
            name: name,
            value: internalValue,
            isValid: isValid
        });
    }, [internalValue, isValid, formContext, name, internalId]);
    // Life Cycle Hooks - END
    // Render - START
    var renderHint = React.useCallback(function () {
        if (!hint && validationErrors.length < 1) {
            return null;
        }
        var hints = [];
        if (hint && hint.length > 0) {
            hints.push(hint);
        }
        validationErrors.forEach(function (errMsg) {
            hints.push(errMsg);
        });
        return React__default['default'].createElement(MagnetHint, { hints: hints, error: error });
    }, [hint, validationErrors, error]);
    return (React__default['default'].createElement("div", { className: classes, style: styles, onClick: onClick },
        React__default['default'].createElement("div", { className: "magnet-switch--inner" },
            React__default['default'].createElement("div", { className: "magnet-switch--input", onClick: handleChange },
                React__default['default'].createElement("input", { id: internalId, type: "checkbox", onChange: handleChange, disabled: disabled, checked: internalValue, ref: ref }),
                React__default['default'].createElement("div", { className: checkmarkClasses },
                    React__default['default'].createElement(MagnetIcon, { size: 18, disabled: disabled, onClick: handleChange }, "check"))),
            label && (React__default['default'].createElement("label", { htmlFor: internalId, className: "magnet-switch--label" }, label))),
        renderHint()));
};
Switch.displayName = "Switch";
var MagnetSwitch = React__default['default'].memo(Switch);
MagnetSwitch.displayName = "MagnetSwitch";

exports.Button = Button;
exports.Card = Card;
exports.CardActions = CardActions;
exports.CardBody = CardBody;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.Column = Column;
exports.Container = Container;
exports.FormContext = FormContext;
exports.Image = Image;
exports.MagnetApp = MagnetApp;
exports.MagnetButton = MagnetButton;
exports.MagnetCard = MagnetCard;
exports.MagnetCardActions = MagnetCardActions;
exports.MagnetCardBody = MagnetCardBody;
exports.MagnetCardTitle = MagnetCardTitle;
exports.MagnetCheckbox = MagnetCheckbox;
exports.MagnetColumn = MagnetColumn;
exports.MagnetContainer = MagnetContainer;
exports.MagnetForm = MagnetForm;
exports.MagnetHint = MagnetHint;
exports.MagnetIcon = MagnetIcon;
exports.MagnetImage = MagnetImage;
exports.MagnetMain = MagnetMain;
exports.MagnetNavBar = MagnetNavBar;
exports.MagnetNavBarLink = MagnetNavBarLink;
exports.MagnetProgressSpinner = MagnetProgressSpinner;
exports.MagnetRadio = MagnetRadio;
exports.MagnetRadioGroup = MagnetRadioGroup;
exports.MagnetRow = MagnetRow;
exports.MagnetSwitch = MagnetSwitch;
exports.NavBar = NavBar;
exports.NavBarLink = NavBarLink;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Row = Row;
exports.Switch = Switch;
exports.ThemeContext = ThemeContext;
//# sourceMappingURL=index.js.map
