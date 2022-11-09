import React, { useState, useMemo, useEffect, useCallback, useContext, useRef, useLayoutEffect } from 'react';
import require$$0 from 'os';
import ReactDOM, { flushSync } from 'react-dom';

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

function r$1(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r$1(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r$1(e))&&(n&&(n+=" "),n+=t);return n}

/* eslint-disable @typescript-eslint/ban-types */
function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}
var isBrowser = typeof window !== "undefined";

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }
        : null;
}
function rgbToHsl(r, g, b) {
    var tmpR = (r /= 255);
    var tmpG = (g /= 255);
    var tmpB = (b /= 255);
    var max = Math.max(tmpR, tmpG, tmpB), min = Math.min(tmpR, tmpG, tmpB);
    var h, s;
    var l = (max + min) / 2;
    if (max === min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case tmpR:
                h = (tmpG - tmpB) / d + (tmpG < tmpB ? 6 : 0);
                break;
            case tmpG:
                h = (tmpB - tmpR) / d + 2;
                break;
            case tmpB:
                h = (tmpR - tmpG) / d + 4;
                break;
        }
        h /= 6;
    }
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    return [h, s, l];
}
function hslToHex(h, s, l) {
    l /= 100;
    var a = (s * Math.min(l, 1 - l)) / 100;
    var f = function (n) {
        var k = (n + h / 30) % 12;
        var color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, "0"); // convert to Hex and prefix "0" if needed
    };
    return "#" + f(0) + f(8) + f(4);
}

var ThemeContext = React.createContext("light");
var App = function (_a) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.customTheme, customTheme = _d === void 0 ? undefined : _d, _e = _a.hasNavBar, hasNavBar = _e === void 0 ? false : _e, _f = _a.hasNavRail, hasNavRail = _f === void 0 ? false : _f, _g = _a.id, id = _g === void 0 ? "magnet-app" : _g, _h = _a.style, style = _h === void 0 ? undefined : _h, _j = _a.theme, theme = _j === void 0 ? "auto" : _j;
    // Vars & States - START
    var _k = useState("light"), internalTheme = _k[0], setInternalTheme = _k[1];
    // Vars & States - END
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-app": true,
            "magnet-app--has-nav-bar": hasNavBar,
            "magnet-app--has-nav-rail": hasNavRail,
            "theme-light": internalTheme === "light",
            "theme-dark": internalTheme === "dark"
        };
        return clsx([classes, className]);
    }, [className, hasNavBar, hasNavRail, internalTheme]);
    var customThemeStyle = useMemo(function () {
        var styleList = {};
        var valuesToGenerate = [
            0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 99, 100
        ];
        if (customTheme) {
            Object.entries(customTheme).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                var rgb = hexToRgb(value);
                var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
                styleList["--" + key + "-original"] = value;
                valuesToGenerate.forEach(function (gen) {
                    styleList["--" + key + "-" + gen] = hslToHex(hsl[0], hsl[1], gen);
                });
            });
        }
        return styleList;
    }, [customTheme]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign(__assign({}, styleList), customThemeStyle), style);
    }, [customThemeStyle, style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useEffect(function () {
        if (theme === "auto") {
            var setAutoTheme = function () {
                return setInternalTheme("light");
            };
            if (isBrowser) {
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
    return (React.createElement(ThemeContext.Provider, { value: internalTheme },
        React.createElement("div", { id: id, className: classes, style: styles },
            React.createElement("div", { className: "magnet-app--wrapper" }, children))));
};
App.displayName = "App";
var MagnetApp = React.memo(App);
MagnetApp.displayName = "MagnetApp";

var Main = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.style, style = _e === void 0 ? undefined : _e;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-main": true
        };
        return clsx([classes, className]);
    }, [className]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement("div", { id: id, className: classes, style: styles }, children));
};
Main.displayName = "Main";
var MagnetMain = React.memo(Main);
MagnetMain.displayName = "MagnetMain";

var Icon = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.id, id = _e === void 0 ? undefined : _e, _f = _a.onClick, onClick = _f === void 0 ? undefined : _f, _g = _a.size, size = _g === void 0 ? 20 : _g, _h = _a.style, style = _h === void 0 ? undefined : _h;
    // Methods & Handler - START
    var handleClick = useCallback(function (ev) {
        if (!disabled && onClick) {
            onClick(ev);
        }
    }, [disabled, onClick]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-icon": true,
            "magnet-icon--link": onClick !== undefined
        };
        return clsx([classes, className]);
    }, [className, onClick]);
    var styles = useMemo(function () {
        var styleList = {
            minHeight: size,
            maxHeight: size,
            minWidth: size,
            maxWidth: size
        };
        return __assign(__assign({}, styleList), style);
    }, [size, style]);
    var getIconStyles = useCallback(function () {
        var styleList = {
            fontSize: size
        };
        return __assign({}, styleList);
    }, [size]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement("span", { id: id, className: classes, style: styles, onClick: handleClick },
        React.createElement("span", { className: "material-symbols-rounded", style: getIconStyles() }, children)));
};
Icon.displayName = "Icon";
var MagnetIcon = React.memo(Icon);
MagnetIcon.displayName = "MagnetIcon";

var ProgressSpinner = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.className, className = _b === void 0 ? undefined : _b, _c = _a.id, id = _c === void 0 ? undefined : _c, _d = _a.size, size = _d === void 0 ? 20 : _d, _e = _a.style, style = _e === void 0 ? undefined : _e;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-progress-spinner": true
        };
        return clsx([classes, className]);
    }, [className]);
    var styles = useMemo(function () {
        var styleList = {
            fontSize: size
        };
        return __assign(__assign({}, styleList), style);
    }, [size, style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement(MagnetIcon, { id: id, className: classes, style: styles }, "autorenew"));
};
ProgressSpinner.displayName = "ProgressSpinner";
var MagnetProgressSpinner = React.memo(ProgressSpinner);
MagnetProgressSpinner.displayName = "MagnetProgressSpinner";

/* eslint-disable @typescript-eslint/no-explicit-any */
function useCombinedRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    var targetRef = React.useRef();
    React.useEffect(function () {
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

var defaultEvent = {
    clientX: 0,
    clientY: 0,
    target: null
};
var createRipple = function (element, options) {
    return function (ev) {
        var _a;
        var isExcluded = (options.excludedRefs || []).some(function (ref) {
            var _a;
            return ((!!ref.current && ref.current.contains(ev === null || ev === void 0 ? void 0 : ev.target)) ||
                ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.isSameNode(ev === null || ev === void 0 ? void 0 : ev.target)));
        });
        if (isExcluded) {
            return;
        }
        var clientX = (ev === null || ev === void 0 ? void 0 : ev.clientX) || defaultEvent.clientX;
        var clientY = (ev === null || ev === void 0 ? void 0 : ev.clientY) || defaultEvent.clientY;
        var _b = element.getBoundingClientRect(), height = _b.height, width = _b.width, top = _b.top, left = _b.left;
        var x = clientX - left;
        var y = clientY - top;
        var rippleSize = (_a = options.rippleSize) !== null && _a !== void 0 ? _a : Math.max(height, width);
        var positionTop = clientX
            ? y - rippleSize / 2
            : rippleSize / 2 - height / 2;
        var positionLeft = clientY
            ? x - rippleSize / 2
            : width / 2 - rippleSize / 2;
        var span = document.createElement("span");
        span.style.cssText = "\n            top: " + positionTop + "px;\n            left: " + positionLeft + "px;\n            position: absolute;\n            background-color: " + options.rippleColor + ";\n            border-radius: 50%;\n            pointer-events: none;\n            width: " + rippleSize + "px;\n            height: " + rippleSize + "px;\n            animation: use-ripple-animation " + options.animationLength + "ms ease-in;\n        ";
        element.appendChild(span);
        on(span, "animationend", function () {
            element.removeChild(span);
        });
    };
};
var defaultOptions = {
    animationLength: 1000,
    disabled: false,
    excludedRefs: [],
    rippleColor: "currentColor",
    rippleSize: undefined
};
var useRipple = function (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ref, options) {
    useEffect(function () {
        var rippleOptions = __assign(__assign({}, defaultOptions), options);
        if (rippleOptions.disabled || !(ref === null || ref === void 0 ? void 0 : ref.current)) {
            return;
        }
        var element = ref.current;
        var elementPosition = getComputedStyle(element).getPropertyValue("position");
        element.style.position =
            elementPosition === "static" || !elementPosition
                ? "relative"
                : elementPosition;
        element.style.overflow = "hidden";
        var ripple = createRipple(element, rippleOptions);
        var keyboardRipple = function (ev) {
            if (ev.key === "Enter" || ev.key === " ") {
                ripple();
            }
        };
        on(element, "mousedown", ripple);
        on(element, "keydown", keyboardRipple);
        return function () {
            off(element, "mousedown", ripple);
            off(element, "keydown", keyboardRipple);
        };
    }, [options, ref]);
};

var Button = React.forwardRef(function (_a, forwardRef) {
    var _b = _a.appendIcon, appendIcon = _b === void 0 ? undefined : _b, _c = _a.block, block = _c === void 0 ? false : _c, _d = _a.children, children = _d === void 0 ? undefined : _d, _e = _a.className, className = _e === void 0 ? undefined : _e, _f = _a.color, color = _f === void 0 ? "primary" : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.href, href = _h === void 0 ? undefined : _h, _j = _a.icon, icon = _j === void 0 ? false : _j, _k = _a.id, id = _k === void 0 ? undefined : _k, _l = _a.loading, loading = _l === void 0 ? false : _l, _m = _a.onClick, onClick = _m === void 0 ? undefined : _m, _o = _a.prependIcon, prependIcon = _o === void 0 ? undefined : _o, _p = _a.size, size = _p === void 0 ? "medium" : _p, _q = _a.style, style = _q === void 0 ? undefined : _q, _r = _a.target, target = _r === void 0 ? undefined : _r, _s = _a.theme, theme = _s === void 0 ? "auto" : _s, _t = _a.type, type = _t === void 0 ? "button" : _t, _u = _a.variant, variant = _u === void 0 ? "filled" : _u;
    // Vars & States - START
    var tag = href ? "a" : "button";
    var globalTheme = useContext(ThemeContext);
    var innerRef = useRef(null);
    var combinedRefs = useCombinedRefs(forwardRef, innerRef);
    // Vars & States - END
    // Methods & Handler - START
    var handleClick = useCallback(function (ev) {
        if (!disabled && !loading && onClick) {
            onClick(ev);
        }
    }, [disabled, loading, onClick]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
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
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useRipple(innerRef, { disabled: disabled });
    // Life Cycle Hooks - END
    // Render - START
    var renderInner = useCallback(function () {
        return (React.createElement("span", { className: "magnet-button--inner" },
            prependIcon && (React.createElement(MagnetIcon, { className: "mr-2" }, prependIcon)),
            children,
            appendIcon && (React.createElement(MagnetIcon, { className: "ml-2" }, appendIcon))));
    }, [appendIcon, children, prependIcon]);
    return React.createElement(tag, {
        id: id,
        className: classes,
        style: styles,
        onClick: handleClick,
        disabled: disabled,
        href: href,
        ref: combinedRefs,
        type: tag === "button" ? type : undefined,
        target: target,
        rel: target ? "noreferrer" : undefined
    }, React.createElement(React.Fragment, null,
        renderInner(),
        React.createElement(MagnetProgressSpinner, null)));
});
Button.displayName = "Button";
var MagnetButton = React.memo(Button);
MagnetButton.displayName = "MagnetButton";

var BannerTitle = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.style, style = _e === void 0 ? undefined : _e;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-banner-title": true
        };
        return clsx([classes, className]);
    }, [className]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement("div", { id: id, className: classes, style: styles }, children));
};
BannerTitle.displayName = "BannerTitle";
var MagnetBannerTitle = React.memo(BannerTitle);
MagnetBannerTitle.displayName = "MagnetBannerTitle";

var Banner = function (_a) {
    var _b = _a.actions, actions = _b === void 0 ? [] : _b, _c = _a.children, children = _c === void 0 ? undefined : _c, _d = _a.className, className = _d === void 0 ? undefined : _d, _e = _a.hideIcon, hideIcon = _e === void 0 ? false : _e, _f = _a.icon, icon = _f === void 0 ? undefined : _f, _g = _a.id, id = _g === void 0 ? undefined : _g, _h = _a.severity, severity = _h === void 0 ? "info" : _h, _j = _a.style, style = _j === void 0 ? undefined : _j, _k = _a.theme, theme = _k === void 0 ? "auto" : _k, _l = _a.title, title = _l === void 0 ? undefined : _l, _m = _a.variant, variant = _m === void 0 ? "elevated" : _m;
    // Vars & States - START
    var globalTheme = useContext(ThemeContext);
    var actionColor = useMemo(function () {
        if (severity === "info") {
            return "primary";
        }
        return severity;
    }, [severity]);
    // Vars & States - END
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-banner": true,
            "elevation-1": variant === "elevated",
            "magnet-banner--elevated": variant === "elevated",
            "magnet-banner--filled": variant === "filled",
            "magnet-banner--info": severity === "info",
            "magnet-banner--success": severity === "success",
            "magnet-banner--warning": severity === "warning",
            "magnet-banner--error": severity === "error",
            "theme-light": theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark": theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [className, globalTheme, severity, theme, variant]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    var renderIcon = useCallback(function () {
        var finalIcon = icon;
        if (!finalIcon) {
            switch (severity) {
                case "info":
                    finalIcon = "info";
                    break;
                case "success":
                    finalIcon = "check_circle";
                    break;
                case "warning":
                    finalIcon = "warning";
                    break;
                case "error":
                    finalIcon = "error";
                    break;
            }
        }
        return (React.createElement(MagnetIcon, { className: "magnet-banner--icon mt-1", size: 25 }, finalIcon));
    }, [icon, severity]);
    return (React.createElement("div", { id: id, className: classes, style: styles },
        React.createElement("div", { className: "magnet-banner--content" },
            !hideIcon && renderIcon(),
            React.createElement("div", { className: "magnet-banner--content-inner" },
                title && React.createElement(MagnetBannerTitle, null, title),
                React.createElement("span", { className: "d-block-xs mt-1" }, children))),
        actions && actions.length > 0 && (React.createElement("div", { className: "magnet-banner--actions" }, actions.map(function (action, index) {
            return (React.createElement(MagnetButton, __assign({ key: action.label + index }, action, { color: action.color ? action.color : actionColor }), action.label));
        })))));
};
Banner.displayName = "Banner";
var MagnetBanner = React.memo(Banner);
MagnetBanner.displayName = "MagnetBanner";

var Card = React.forwardRef(function (_a, ref) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.href, href = _e === void 0 ? undefined : _e, _f = _a.id, id = _f === void 0 ? undefined : _f, _g = _a.onClick, onClick = _g === void 0 ? undefined : _g, _h = _a.style, style = _h === void 0 ? undefined : _h, _j = _a.theme, theme = _j === void 0 ? "auto" : _j, _k = _a.variant, variant = _k === void 0 ? "elevated" : _k;
    // Vars & States - START
    var tag = href ? "a" : "div";
    var globalTheme = useContext(ThemeContext);
    // Vars & States - END
    // Methods & Handler - START
    var handleClick = useCallback(function (ev) {
        if (onClick && !disabled) {
            onClick(ev);
        }
    }, [disabled, onClick]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
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
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return React.createElement(tag, {
        id: id,
        className: classes,
        style: styles,
        onClick: handleClick,
        href: !disabled ? href : undefined,
        ref: ref
    }, children);
});
Card.displayName = "Card";
var MagnetCard = React.memo(Card);
MagnetCard.displayName = "MagnetCard";

var CardTitle = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.style, style = _e === void 0 ? undefined : _e;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-card-title": true
        };
        return clsx([classes, className]);
    }, [className]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement("div", { id: id, className: classes, style: styles }, children));
};
CardTitle.displayName = "CardTitle";
var MagnetCardTitle = React.memo(CardTitle);
MagnetCardTitle.displayName = "MagnetCardTitle";

var CardBody = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.style, style = _e === void 0 ? undefined : _e;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-card-body": true
        };
        return clsx([classes, className]);
    }, [className]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement("div", { id: id, className: classes, style: styles }, children));
};
CardBody.displayName = "CardBody";
var MagnetCardBody = React.memo(CardBody);
MagnetCardBody.displayName = "MagnetCardBody";

var CardActions = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.style, style = _e === void 0 ? undefined : _e;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-card-actions": true
        };
        return clsx([classes, className]);
    }, [className]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement("div", { id: id, className: classes, style: styles }, children));
};
CardActions.displayName = "CardActions";
var MagnetCardActions = React.memo(CardActions);
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
    var mac = '', os = require$$0; 
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

var FormContext = React.createContext({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handlePublish: function () { },
    isDirty: false,
    mode: "lazy"
});
var Form = function (_a) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.isDirty, isDirty = _e === void 0 ? false : _e, _f = _a.mode, mode = _f === void 0 ? "lazy" : _f, onSubmit = _a.onSubmit, _g = _a.onValidityChange, onValidityChange = _g === void 0 ? undefined : _g, _h = _a.style, style = _h === void 0 ? undefined : _h;
    // Vars & States - START
    var _j = useState(true), isValid = _j[0], setIsValid = _j[1];
    var _k = useState(isDirty), internalIsDirty = _k[0], setInternalIsDirty = _k[1];
    var formData = useRef({});
    // Vars & States - END
    // Methods & Handler - START
    var checkValidity = useCallback(function () {
        var isValidTmp = true;
        Object.values(formData.current).map(function (value) {
            if (!value.isValid) {
                isValidTmp = false;
            }
        });
        setIsValid(isValidTmp);
    }, []);
    var handlePublish = useCallback(function (data) {
        var formDataClone = __assign({}, formData.current);
        formDataClone[data.name] = {
            value: data.value,
            isValid: data.isValid
        };
        formData.current = formDataClone;
        checkValidity();
    }, [checkValidity]);
    var handleSubmit = useCallback(function (ev) {
        setInternalIsDirty(true);
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
    var classes = useMemo(function () {
        var classes = {
            "magnet-form": true
        };
        return clsx([classes, className]);
    }, [className]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useEffect(function () {
        if (isDirty) {
            setInternalIsDirty(isDirty);
        }
    }, [isDirty]);
    useEffect(function () {
        if (onValidityChange) {
            onValidityChange(isValid);
        }
    }, [isValid, onValidityChange]);
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement(FormContext.Provider, { value: { isDirty: internalIsDirty, mode: mode, handlePublish: handlePublish } },
        React.createElement("form", { id: id, className: classes, onSubmit: handleSubmit, style: styles }, children)));
};
Form.displayName = "Form";
var MagnetForm = React.memo(Form);
MagnetForm.displayName = "MagnetForm";

// System imports
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
    var globalTheme = useContext(ThemeContext);
    // Vars & States - END
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-hint": true,
            "magnet-hint--error": error,
            "theme-light": theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark": theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [className, theme, globalTheme, error]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement("div", { id: id, className: classes, style: styles }, hints.map(function (hint, index) {
        return React.createElement("span", { key: hint + index }, hint);
    })));
};
Hint.displayName = "Hint";
var MagnetHint = React.memo(Hint);
MagnetHint.displayName = "MagnetHint";

var Checkbox = function (_a) {
    var _b = _a.className, className = _b === void 0 ? undefined : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.error, error = _d === void 0 ? false : _d, _e = _a.hint, hint = _e === void 0 ? undefined : _e, _f = _a.id, id = _f === void 0 ? undefined : _f, _g = _a.label, label = _g === void 0 ? undefined : _g, _h = _a.mode, mode = _h === void 0 ? "lazy" : _h, _j = _a.name, name = _j === void 0 ? undefined : _j, _k = _a.onChange, onChange = _k === void 0 ? undefined : _k, _l = _a.onClick, onClick = _l === void 0 ? undefined : _l, _m = _a.ref, ref = _m === void 0 ? undefined : _m, _o = _a.rules, rules = _o === void 0 ? [] : _o, _p = _a.style, style = _p === void 0 ? undefined : _p, _q = _a.theme, theme = _q === void 0 ? "auto" : _q, _r = _a.value, value = _r === void 0 ? false : _r;
    // Vars & States - START
    var globalTheme = useContext(ThemeContext);
    var formContext = useContext(FormContext);
    var _s = useState(id !== null && id !== void 0 ? id : uniqid("checkbox-")), internalId = _s[0], setInternalId = _s[1];
    var _t = useState(value), internalValue = _t[0], setInternalValue = _t[1];
    var _u = useState(false), isDirty = _u[0], setIsDirty = _u[1];
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
    var classes = useMemo(function () {
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
    var checkmarkClasses = useMemo(function () {
        return clsx({
            "magnet-checkbox--checkmark": true,
            "magnet-checkbox--checkmark-show": internalValue
        });
    }, [internalValue]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useEffect(function () {
        setIsDirty((formContext && formContext.mode === "force") || mode === "force");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(function () {
        if ((formContext && formContext.isDirty) || mode === "force") {
            setIsDirty(true);
        }
    }, [formContext, mode]);
    useEffect(function () {
        setInternalId(id !== null && id !== void 0 ? id : uniqid("checkbox-"));
    }, [id]);
    useEffect(function () {
        setInternalValue(value);
    }, [value]);
    useEffect(function () {
        if (!formContext) {
            return;
        }
        if (formContext && !name) {
            console.error("You have to define a name to " + internalId + " if used inside an MagnetForm.");
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
    var renderHint = useCallback(function () {
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
        return React.createElement(MagnetHint, { hints: hints, error: error });
    }, [hint, validationErrors, error]);
    return (React.createElement("div", { className: classes, style: styles, onClick: onClick },
        React.createElement("div", { className: "magnet-checkbox--inner" },
            React.createElement("div", { className: "magnet-checkbox--input", onClick: handleChange },
                React.createElement("input", { id: internalId, type: "checkbox", onChange: handleChange, disabled: disabled, checked: internalValue, ref: ref }),
                React.createElement(MagnetIcon, { className: checkmarkClasses, size: 22, disabled: disabled, onClick: handleChange }, "check")),
            label && (React.createElement("label", { htmlFor: internalId, className: "magnet-checkbox--label" }, label))),
        renderHint()));
};
Checkbox.displayName = "Checkbox";
var MagnetCheckbox = React.memo(Checkbox);
MagnetCheckbox.displayName = "MagnetCheckbox";

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal$4=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement$1=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal$4,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement$1,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = has$1;

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */








var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has$1(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has$1(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var propTypes = createCommonjsModule(function (module) {
if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal$3 = function (_React$Component) {
  _inherits$1(Portal, _React$Component);

  function Portal() {
    _classCallCheck$1(this, Portal);

    return _possibleConstructorReturn$1(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass$1(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(React.Component);

Portal$3.propTypes = {
  children: propTypes.node.isRequired,
  node: propTypes.any
};

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal$2 = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      ReactDOM.unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      var children = this.props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof this.props.children.type === 'function') {
        children = React.cloneElement(this.props.children);
      }

      this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(React.Component);


Portal$2.propTypes = {
  children: propTypes.node.isRequired,
  node: propTypes.any
};

var Portal = void 0;

if (ReactDOM.createPortal) {
  Portal = Portal$3;
} else {
  Portal = Portal$2;
}

var Portal$1 = Portal;

var Overlay = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.absolute, absolute = _b === void 0 ? false : _b, className = _a.className, _c = _a.color, color = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.onClick, onClick = _e === void 0 ? undefined : _e, _f = _a.opacity, opacity = _f === void 0 ? 0.5 : _f, style = _a.style, _g = _a.value, value = _g === void 0 ? false : _g, _h = _a.zIndex, zIndex = _h === void 0 ? 5 : _h;
    // Methods & Handler - START
    var handleClick = useCallback(function (ev) {
        if (onClick) {
            onClick(ev);
        }
    }, [onClick]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    var getClasses = useCallback(function () {
        var classes = {
            "magnet-overlay": true,
            "magnet-overlay--absolute": absolute,
            "magnet-overlay--show": value
        };
        return clsx([classes, className]);
    }, [absolute, className, value]);
    var getStyles = useCallback(function () {
        var styleList = {};
        styleList.backgroundColor = color;
        styleList.opacity = value ? opacity : undefined;
        styleList.zIndex = zIndex;
        return __assign(__assign({}, styleList), style);
    }, [color, opacity, style, value, zIndex]);
    // Life Cycle Hooks - END
    // Render - START
    var renderOverlay = useCallback(function () {
        return (React.createElement("div", { id: id, className: getClasses(), style: getStyles(), onClick: handleClick }));
    }, [getClasses, getStyles, handleClick, id]);
    return absolute ? (renderOverlay()) : (React.createElement(Portal$1, { node: typeof document !== "undefined" &&
            document.getElementById("magnet-app") }, renderOverlay()));
};
Overlay.displayName = "Overlay";
var MagnetOverlay = React.memo(Overlay);
MagnetOverlay.displayName = "MagnetOverlay";

var Spacer = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.className, className = _b === void 0 ? undefined : _b, _c = _a.id, id = _c === void 0 ? undefined : _c, _d = _a.style, style = _d === void 0 ? undefined : _d;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var getClasses = useCallback(function () {
        var classes = {
            "magnet-spacer": true
        };
        return clsx([classes, className]);
    }, [className]);
    var getStyles = useCallback(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return React.createElement("div", { id: id, className: getClasses(), style: getStyles() });
};
Spacer.displayName = "Spacer";
var MagnetSpacer = React.memo(Spacer);
MagnetSpacer.displayName = "MagnetSpacer";

var Dialog = function (_a) {
    var _b = _a.actions, actions = _b === void 0 ? [] : _b, children = _a.children, className = _a.className, _c = _a.onClose, onClose = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, style = _a.style, _e = _a.theme, theme = _e === void 0 ? "auto" : _e, title = _a.title, _f = _a.value, value = _f === void 0 ? false : _f, _g = _a.width, width = _g === void 0 ? "auto" : _g;
    // Vars & States - START
    var _h = useState(value), internalValue = _h[0], setInternalValue = _h[1];
    // Vars & States - END
    // Methods & Handler - START
    var handleClose = useCallback(function () {
        if (onClose) {
            setInternalValue(false);
            onClose();
        }
    }, [onClose]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var getClasses = useCallback(function () {
        var classes = {
            "magnet-dialog": true,
            "magnet-dialog--show": internalValue
        };
        return clsx([classes, className]);
    }, [className, internalValue]);
    var getStyles = useCallback(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    var getCardStyles = useCallback(function () {
        var styleList = {
            zIndex: 201,
            width: width
        };
        return __assign(__assign({}, styleList), style);
    }, [style, width]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useEffect(function () {
        setInternalValue(value);
    }, [value]);
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement(Portal$1, { node: typeof document !== "undefined" &&
            document.getElementById("magnet-app") },
        React.createElement("div", { id: id, className: getClasses(), style: getStyles() },
            React.createElement(MagnetOverlay, { zIndex: 200, value: internalValue, onClick: handleClose }),
            React.createElement(MagnetCard, { variant: "elevated", style: getCardStyles(), theme: theme },
                React.createElement(MagnetCardTitle, null,
                    React.createElement("span", null, title),
                    React.createElement(MagnetSpacer, null),
                    onClose && (React.createElement(MagnetButton, { icon: true, variant: "text", onClick: handleClose, theme: theme },
                        React.createElement(MagnetIcon, null, "close")))),
                React.createElement(MagnetCardBody, null, children),
                actions && actions.length > 0 && (React.createElement(MagnetCardActions, null, actions.map(function (action, index) {
                    return (React.createElement(MagnetButton, __assign({ key: action.label + index, theme: theme }, action), action.label));
                })))))));
};
Dialog.displayName = "Dialog";
var MagnetDialog = React.memo(Dialog);
MagnetDialog.displayName = "MagnetDialog";

var Container = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.fluid, fluid = _e === void 0 ? false : _e, _f = _a.style, style = _f === void 0 ? undefined : _f;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-container": true,
            "magnet-container--fluid": fluid
        };
        return clsx([classes, className]);
    }, [className, fluid]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement("div", { id: id, className: classes, style: styles }, children));
};
Container.displayName = "Container";
var MagnetContainer = React.memo(Container);
MagnetContainer.displayName = "MagnetContainer";

var Row = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.noGutters, noGutters = _e === void 0 ? false : _e, _f = _a.style, style = _f === void 0 ? undefined : _f;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-row": true,
            "magnet-row--no-gutters": noGutters
        };
        return clsx([classes, className]);
    }, [className, noGutters]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement("div", { id: id, className: classes, style: styles }, children));
};
Row.displayName = "Row";
var MagnetRow = React.memo(Row);
MagnetRow.displayName = "MagnetRow";

var Column = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.lg, lg = _e === void 0 ? undefined : _e, _f = _a.md, md = _f === void 0 ? undefined : _f, _g = _a.sm, sm = _g === void 0 ? undefined : _g, _h = _a.style, style = _h === void 0 ? undefined : _h, _j = _a.xl, xl = _j === void 0 ? undefined : _j, _k = _a.xs, xs = _k === void 0 ? undefined : _k;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
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
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement("div", { id: id, className: classes, style: styles }, children));
};
Column.displayName = "Column";
var MagnetColumn = React.memo(Column);
MagnetColumn.displayName = "MagnetColumn";

var Image = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var _b = _a.aspectRatio, aspectRatio = _b === void 0 ? 1 : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.contain, contain = _d === void 0 ? false : _d, _e = _a.id, id = _e === void 0 ? undefined : _e, src = _a.src, _f = _a.style, style = _f === void 0 ? undefined : _f;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-image": true,
            "magnet-image--contain": contain
        };
        return clsx([classes, className]);
    }, [className, contain]);
    var styles = useMemo(function () {
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
    return (React.createElement("div", { id: id, className: classes, style: styles },
        React.createElement("div", { className: "magnet-image--inner", style: {
                backgroundImage: "url(" + src + ")"
            } })));
};
Image.displayName = "Image";
var MagnetImage = React.memo(Image);
MagnetImage.displayName = "MagnetImage";

var List = function (_a) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.showDividers, showDividers = _d === void 0 ? false : _d, _e = _a.id, id = _e === void 0 ? undefined : _e, _f = _a.style, style = _f === void 0 ? undefined : _f, _g = _a.theme, theme = _g === void 0 ? "auto" : _g;
    // Vars & States - START
    var globalTheme = useContext(ThemeContext);
    // Vars & States - END
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-list": true,
            "magnet-list--dividers": showDividers,
            "theme-light": theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark": theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [className, globalTheme, showDividers, theme]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement("div", { id: id, className: classes, style: styles }, children));
};
List.displayName = "List";
var MagnetList = React.memo(List);
MagnetList.displayName = "MagnetList";

var ListItem = React.forwardRef(function (_a, forwardRef) {
    var _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.appendIcon, appendIcon = _c === void 0 ? undefined : _c, _d = _a.children, children = _d === void 0 ? undefined : _d, _e = _a.className, className = _e === void 0 ? undefined : _e, _f = _a.color, color = _f === void 0 ? undefined : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.href, href = _h === void 0 ? undefined : _h, _j = _a.id, id = _j === void 0 ? undefined : _j, _k = _a.onClick, onClick = _k === void 0 ? undefined : _k, _l = _a.prependIcon, prependIcon = _l === void 0 ? undefined : _l, _m = _a.style, style = _m === void 0 ? undefined : _m, _o = _a.target, target = _o === void 0 ? undefined : _o, _p = _a.theme, theme = _p === void 0 ? "auto" : _p;
    // Vars & States - START
    var tag = href ? "a" : "div";
    var globalTheme = useContext(ThemeContext);
    var innerRef = useRef(null);
    var combinedRefs = useCombinedRefs(forwardRef, innerRef);
    // Vars & States - END
    // Methods & Handler - START
    var handleClick = useCallback(function (ev) {
        if (!disabled && onClick) {
            onClick(ev);
        }
    }, [disabled, onClick]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-list-item": true,
            "magnet-list-item--active": active,
            "magnet-list-item--clickable": href || onClick,
            "magnet-list-item--disabled": disabled,
            "magnet-list-item--primary": color && color === "primary",
            "magnet-list-item--secondary": color && color === "secondary",
            "magnet-list-item--success": color && color === "success",
            "magnet-list-item--warning": color && color === "warning",
            "magnet-list-item--error": color && color === "error",
            "theme-light": theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark": theme === "dark" ||
                (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [
        active,
        className,
        color,
        disabled,
        globalTheme,
        href,
        onClick,
        theme
    ]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useRipple(innerRef, { disabled: disabled || (!href && !onClick) });
    // Life Cycle Hooks - END
    // Render - START
    var renderInner = useCallback(function () {
        return React.createElement("div", { className: "magnet-list-item--inner" }, children);
    }, [children]);
    return React.createElement(tag, {
        id: id,
        className: classes,
        style: styles,
        onClick: handleClick,
        disabled: disabled,
        href: href,
        ref: combinedRefs,
        target: target,
        rel: target ? "noreferrer" : undefined
    }, React.createElement(React.Fragment, null,
        prependIcon && (React.createElement(MagnetIcon, { className: "ml-4" }, prependIcon)),
        renderInner(),
        appendIcon && (React.createElement(MagnetIcon, { className: "mr-4" }, appendIcon))));
});
ListItem.displayName = "ListItem";
var MagnetListItem = React.memo(ListItem);
MagnetListItem.displayName = "MagnetListItem";

/**
 * Simple ponyfill for Object.fromEntries
 */

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var key = _ref[0],
        value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? useLayoutEffect : useEffect;

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = getComputedStyle$1(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle$1(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */
var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

var EMPTY_MODIFIERS = [];
var usePopper = function usePopper(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }

  var prevOptions = useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };

  var _React$useState = useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0'
      },
      arrow: {
        position: 'absolute'
      }
    },
    attributes: {}
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  var updateStateModifier = useMemo(function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn(_ref) {
        var state = _ref.state;
        var elements = Object.keys(state.elements);
        flushSync(function () {
          setState({
            styles: fromEntries(elements.map(function (element) {
              return [element, state.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function (element) {
              return [element, state.attributes[element]];
            }))
          });
        });
      },
      requires: ['computeStyles']
    };
  }, []);
  var popperOptions = useMemo(function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: 'applyStyles',
        enabled: false
      }])
    };

    if (reactFastCompare(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = useRef();
  useIsomorphicLayoutEffect(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function () {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    var createPopper$1 = options.createPopper || createPopper;
    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function () {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

// System imports
function getRect(element) {
    var rect = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0
    };
    if (element) {
        rect = element.getBoundingClientRect();
    }
    return rect;
}
function useRect(ref) {
    var _a = useState(ref && ref.current ? getRect(ref.current) : getRect()), rect = _a[0], setRect = _a[1];
    var handleResize = useCallback(function () {
        if (!ref || !ref.current) {
            return;
        }
        setRect(getRect(ref.current)); // Update client rect
    }, [ref]);
    useLayoutEffect(function () {
        if (!ref || !ref.current) {
            return;
        }
        var element = ref.current;
        handleResize();
        if (typeof ResizeObserver === "function") {
            var resizeObserver_1 = new ResizeObserver(function () {
                handleResize();
            });
            resizeObserver_1.observe(element);
            return function () {
                if (!resizeObserver_1) {
                    return;
                }
                resizeObserver_1.disconnect();
                resizeObserver_1 = null;
            };
        }
        else {
            if (isBrowser) {
                on(window, "scroll", handleResize);
                on(window, "resize", handleResize);
                return function () {
                    off(window, "scroll", handleResize);
                    off(window, "resize", handleResize);
                };
            }
        }
    }, [handleResize, ref]);
    return [rect, handleResize];
}

// System imports
var useOutsideClick = function (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ref, visible, onOutsideClick, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ignore) {
    var handleClick = useCallback(function (event) {
        // STOP, if click event is on the ignore list
        if (ignore) {
            for (var i = 0; i < ignore.length; i++) {
                if (ignore[i].current.contains(event.target)) {
                    return;
                }
            }
        }
        if (ref.current && !ref.current.contains(event.target)) {
            if (onOutsideClick) {
                onOutsideClick();
            }
            return;
        }
    }, [ignore, onOutsideClick, ref]);
    useEffect(function () {
        // only add the event listener when the ref is visible
        if (!visible) {
            return;
        }
        if (typeof document !== "undefined") {
            on(document, "click", handleClick);
            return function () {
                off(document, "click", handleClick);
            };
        }
    }, [handleClick, visible]);
};

var Popover = function (_a) {
    var anchorEl = _a.anchorEl, _b = _a.align, align = _b === void 0 ? "left" : _b, children = _a.children, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.onOutsideClick, onOutsideClick = _e === void 0 ? undefined : _e, _f = _a.style, style = _f === void 0 ? undefined : _f, _g = _a.theme, theme = _g === void 0 ? "auto" : _g, _h = _a.width, width = _h === void 0 ? "auto" : _h, _j = _a.value, value = _j === void 0 ? false : _j;
    // Vars & States - START
    var popperRef = useRef(null);
    var _k = useRect(anchorEl), anchorRect = _k[0], updateAnchor = _k[1];
    var _l = useState("bottom-end"), placement = _l[0], setPlacement = _l[1];
    var _m = usePopper(anchorEl.current, popperRef.current, {
        placement: placement
    }), styles = _m.styles, attributes = _m.attributes;
    // Vars & States - END
    // Methods & Handler - START
    var handleOutsideClick = useCallback(function () {
        if (value && onOutsideClick) {
            onOutsideClick();
        }
    }, [onOutsideClick, value]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var getClasses = useCallback(function () {
        var classes = {
            "magnet-popover": true,
            "magnet-popover--show": value
        };
        return clsx([classes, className]);
    }, [className, value]);
    var getStyles = useCallback(function () {
        var styleList = {
            width: width === "match-parent" ? anchorRect.width : undefined
        };
        return __assign(__assign(__assign({}, styleList), styles.popper), style);
    }, [anchorRect.width, style, styles.popper, width]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useOutsideClick(popperRef, value, function () {
        handleOutsideClick();
    }, [anchorEl]);
    useEffect(function () {
        if (value) {
            updateAnchor();
        }
    }, [updateAnchor, value]);
    useEffect(function () {
        if (align === "left") {
            setPlacement("bottom-start");
        }
        else {
            setPlacement("bottom-end");
        }
    }, [align]);
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement(Portal$1, { node: typeof document !== "undefined" &&
            document.getElementById("magnet-app") },
        React.createElement("div", __assign({ id: id, className: getClasses(), style: getStyles(), ref: popperRef }, attributes.popper),
            React.createElement(MagnetCard, { variant: "elevated", theme: theme }, children))));
};
Popover.displayName = "Popover";
var MagnetPopover = React.memo(Popover);
MagnetPopover.displayName = "MagnetPopover";

var Menu = function (_a) {
    // Vars & States - START
    // Vars & States - END
    var anchorEl = _a.anchorEl, _b = _a.align, align = _b === void 0 ? "left" : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.onOutsideClick, onOutsideClick = _e === void 0 ? undefined : _e, options = _a.options, _f = _a.style, style = _f === void 0 ? undefined : _f, _g = _a.theme, theme = _g === void 0 ? "auto" : _g, _h = _a.width, width = _h === void 0 ? "auto" : _h, _j = _a.value, value = _j === void 0 ? false : _j;
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var getClasses = useCallback(function () {
        var classes = {
            "magnet-menu": true
        };
        return clsx([classes, className]);
    }, [className]);
    var getStyles = useCallback(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement(MagnetPopover, { id: id, className: getClasses(), style: getStyles(), anchorEl: anchorEl, align: align, onOutsideClick: onOutsideClick, theme: theme, value: value, width: width },
        React.createElement(MagnetList, { theme: theme }, options.map(function (o, i) {
            return (React.createElement(MagnetListItem, { key: o.title + i, appendIcon: o.appendIcon, disabled: o.disabled, onClick: o.onClick, prependIcon: o.prependIcon }, o.title));
        }))));
};
Menu.displayName = "Menu";
var MagnetMenu = React.memo(Menu);
MagnetMenu.displayName = "MagnetMenu";

var NavBar = function (_a) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.style, style = _e === void 0 ? undefined : _e, _f = _a.theme, theme = _f === void 0 ? "auto" : _f, _g = _a.variant, variant = _g === void 0 ? "flat" : _g;
    // Vars & States - START
    var globalTheme = useContext(ThemeContext);
    // Vars & States - END
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
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
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // useRipple(innerRef);
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement("div", { id: id, className: classes, style: styles }, children));
};
NavBar.displayName = "NavBar";
var MagnetNavBar = React.memo(NavBar);
MagnetNavBar.displayName = "MagnetNavBar";

var NavBarLink = React.forwardRef(function (_a, forwardRef) {
    var _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.children, children = _c === void 0 ? undefined : _c, _d = _a.className, className = _d === void 0 ? undefined : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.href, href = _f === void 0 ? undefined : _f, icon = _a.icon, _g = _a.id, id = _g === void 0 ? undefined : _g, _h = _a.onClick, onClick = _h === void 0 ? undefined : _h, _j = _a.style, style = _j === void 0 ? undefined : _j;
    // Vars & States - START
    var tag = href ? "a" : "button";
    var innerRef = useRef(null);
    var combinedRefs = useCombinedRefs(forwardRef, innerRef);
    // Vars & States - END
    // Methods & Handler - START
    var handleClick = useCallback(function (ev) {
        if (!disabled && onClick) {
            onClick(ev);
        }
    }, [disabled, onClick]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-nav-bar-link": true,
            "magnet-nav-bar-link--active": active,
            "magnet-nav-bar-link--disabled": disabled
        };
        return clsx([classes, className]);
    }, [active, className, disabled]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useRipple(innerRef, { disabled: disabled });
    // Life Cycle Hooks - END
    // Render - START
    return React.createElement(tag, {
        id: id,
        className: classes,
        style: styles,
        onClick: handleClick,
        disabled: disabled,
        href: href,
        ref: combinedRefs
    }, React.createElement(React.Fragment, null,
        React.createElement(MagnetIcon, { className: "magnet-nav-bar-link--icon" }, icon),
        React.createElement("span", { className: "magnet-nav-bar-link--label" }, children)));
});
NavBarLink.displayName = "NavBarLink";
var MagnetNavBarLink = React.memo(NavBarLink);
MagnetNavBarLink.displayName = "MagnetNavBarLink";

var NavRail = function (_a) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.id, id = _d === void 0 ? undefined : _d, _e = _a.style, style = _e === void 0 ? undefined : _e, _f = _a.theme, theme = _f === void 0 ? "auto" : _f, _g = _a.variant, variant = _g === void 0 ? "flat" : _g;
    // Vars & States - START
    var globalTheme = useContext(ThemeContext);
    // Vars & States - END
    // Methods & Handler - START
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-nav-rail": true,
            "magnet-nav-rail--flat": variant === "flat",
            "magnet-nav-rail--elevated": variant === "elevated",
            "elevation-2": variant === "elevated",
            "theme-light": theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark": theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [className, globalTheme, theme, variant]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    // useRipple(innerRef);
    // Life Cycle Hooks - END
    // Render - START
    return (React.createElement("div", { id: id, className: classes, style: styles }, children));
};
NavRail.displayName = "NavRail";
var MagnetNavRail = React.memo(NavRail);
MagnetNavRail.displayName = "MagnetNavRail";

var NavRailLink = React.forwardRef(function (_a, forwardRef) {
    var _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.children, children = _c === void 0 ? undefined : _c, _d = _a.className, className = _d === void 0 ? undefined : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.href, href = _f === void 0 ? undefined : _f, icon = _a.icon, _g = _a.id, id = _g === void 0 ? undefined : _g, _h = _a.onClick, onClick = _h === void 0 ? undefined : _h, _j = _a.style, style = _j === void 0 ? undefined : _j;
    // Vars & States - START
    var tag = href ? "a" : "button";
    var innerRef = useRef(null);
    var combinedRefs = useCombinedRefs(forwardRef, innerRef);
    // Vars & States - END
    // Methods & Handler - START
    var handleClick = useCallback(function (ev) {
        if (!disabled && onClick) {
            onClick(ev);
        }
    }, [disabled, onClick]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var classes = useMemo(function () {
        var classes = {
            "magnet-nav-rail-link": true,
            "magnet-nav-rail-link--active": active,
            "magnet-nav-rail-link--disabled": disabled
        };
        return clsx([classes, className]);
    }, [active, className, disabled]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useRipple(innerRef, { disabled: disabled });
    // Life Cycle Hooks - END
    // Render - START
    return React.createElement(tag, {
        id: id,
        className: classes,
        style: styles,
        onClick: handleClick,
        disabled: disabled,
        href: href,
        ref: combinedRefs
    }, React.createElement(React.Fragment, null,
        React.createElement(MagnetIcon, { className: "magnet-nav-rail-link--icon" }, icon),
        React.createElement("span", { className: "magnet-nav-rail-link--label" }, children)));
});
NavRailLink.displayName = "NavRailLink";
var MagnetNavRailLink = React.memo(NavRailLink);
MagnetNavRailLink.displayName = "MagnetNavRailLink";

var Radio = function (_a) {
    var _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.error, error = _e === void 0 ? false : _e, _f = _a.id, id = _f === void 0 ? undefined : _f, _g = _a.label, label = _g === void 0 ? undefined : _g, _h = _a.name, name = _h === void 0 ? undefined : _h, _j = _a.onChange, onChange = _j === void 0 ? undefined : _j, _k = _a.onClick, onClick = _k === void 0 ? undefined : _k, _l = _a.ref, ref = _l === void 0 ? undefined : _l, _m = _a.style, style = _m === void 0 ? undefined : _m, _o = _a.theme, theme = _o === void 0 ? "auto" : _o, value = _a.value;
    // Vars & States - START
    var globalTheme = useContext(ThemeContext);
    var formContext = useContext(FormContext);
    var _p = useState(id !== null && id !== void 0 ? id : uniqid("radio-")), internalId = _p[0], setInternalId = _p[1];
    var _q = useState(checked), internalChecked = _q[0], setInternalChecked = _q[1];
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
    var classes = useMemo(function () {
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
    var checkmarkClasses = useMemo(function () {
        return clsx({
            "magnet-radio--checkmark": true,
            "magnet-radio--checkmark-show": internalChecked
        });
    }, [internalChecked]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useEffect(function () {
        setInternalId(id !== null && id !== void 0 ? id : uniqid("radio-"));
    }, [id]);
    useEffect(function () {
        setInternalChecked(checked);
    }, [checked]);
    useEffect(function () {
        if (!formContext) {
            return;
        }
        if (formContext && !name) {
            console.error("You have to define a name to " + internalId + " if used inside an MagnetForm.");
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
    return (React.createElement("div", { className: classes, style: styles, onClick: onClick },
        React.createElement("div", { className: "magnet-radio--inner" },
            React.createElement("div", { className: "magnet-radio--input", onClick: handleChange },
                React.createElement("input", { name: name, id: internalId, type: "radio", onChange: handleChange, disabled: disabled, checked: internalChecked, ref: ref, value: value }),
                React.createElement("div", { className: checkmarkClasses, onClick: handleChange })),
            label && (React.createElement("label", { htmlFor: internalId, className: "magnet-radio--label" }, label)))));
};
Radio.displayName = "Radio";
var MagnetRadio = React.memo(Radio);
MagnetRadio.displayName = "MagnetRadio";

var RadioGroup = function (_a) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.error, error = _e === void 0 ? false : _e, _f = _a.hint, hint = _f === void 0 ? undefined : _f, _g = _a.id, id = _g === void 0 ? undefined : _g, _h = _a.mode, mode = _h === void 0 ? "lazy" : _h, name = _a.name, _j = _a.onChange, onChange = _j === void 0 ? undefined : _j, _k = _a.row, row = _k === void 0 ? false : _k, _l = _a.rules, rules = _l === void 0 ? [] : _l, _m = _a.style, style = _m === void 0 ? undefined : _m, _o = _a.theme, theme = _o === void 0 ? "auto" : _o, _p = _a.value, value = _p === void 0 ? undefined : _p;
    // Vars & States - START
    var formContext = useContext(FormContext);
    var _q = useState(value), internalValue = _q[0], setInternalValue = _q[1];
    var _r = useState(false), isDirty = _r[0], setIsDirty = _r[1];
    var _s = useValidation(internalValue, rules), isValid = _s[0], validationErrors = _s[1];
    // Vars & States - END
    // Methods & Handler - START
    var handleChange = useCallback(function (ev) {
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
    var classes = useMemo(function () {
        var classes = {
            "magnet-radio-group": true,
            "magnet-radio-group--row": row,
            "magnet-radio-group--error": error || !isValid
        };
        return clsx([classes, className]);
    }, [row, error, isValid, className]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useEffect(function () {
        setIsDirty((formContext && formContext.mode === "force") || mode === "force");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(function () {
        if ((formContext && formContext.isDirty) || mode === "force") {
            setIsDirty(true);
        }
    }, [formContext, mode]);
    useEffect(function () {
        setInternalValue(value);
    }, [value]);
    var childs = React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                name: name,
                checked: child.props.value === internalValue,
                disabled: disabled,
                error: (isDirty && !isValid) || error,
                theme: theme
            });
        }
        return child;
    });
    useEffect(function () {
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
    var renderHint = useCallback(function () {
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
        return React.createElement(MagnetHint, { hints: hints, error: error });
    }, [hint, validationErrors, error]);
    return (React.createElement("div", { id: id, className: classes, style: styles, onChange: handleChange },
        React.createElement("div", { className: "magnet-radio-group--container" }, childs),
        renderHint(),
        internalValue));
};
RadioGroup.displayName = "RadioGroup";
var MagnetRadioGroup = React.memo(RadioGroup);
MagnetRadioGroup.displayName = "MagnetRadioGroup";

var Select = function (_a) {
    var _b = _a.appendIcon, appendIcon = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.clearable, clearable = _d === void 0 ? false : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.error, error = _f === void 0 ? false : _f, _g = _a.hint, hint = _g === void 0 ? undefined : _g, _h = _a.id, id = _h === void 0 ? undefined : _h, label = _a.label, _j = _a.mode, mode = _j === void 0 ? "lazy" : _j, _k = _a.name, name = _k === void 0 ? undefined : _k, _l = _a.onAppendIconClick, onAppendIconClick = _l === void 0 ? undefined : _l, _m = _a.onChange, onChange = _m === void 0 ? undefined : _m, _o = _a.onClear, onClear = _o === void 0 ? undefined : _o, _p = _a.onClick, onClick = _p === void 0 ? undefined : _p, _q = _a.onPrependIconClick, onPrependIconClick = _q === void 0 ? undefined : _q, _r = _a.options, options = _r === void 0 ? [] : _r, _s = _a.placeholder, placeholder = _s === void 0 ? undefined : _s, _t = _a.prependIcon, prependIcon = _t === void 0 ? undefined : _t, _u = _a.readOnly, readOnly = _u === void 0 ? false : _u, _v = _a.ref, ref = _v === void 0 ? undefined : _v, _w = _a.rules, rules = _w === void 0 ? [] : _w, _x = _a.style, style = _x === void 0 ? undefined : _x, _y = _a.theme, theme = _y === void 0 ? "auto" : _y, _z = _a.value, value = _z === void 0 ? undefined : _z;
    // Vars & States - START
    var globalTheme = useContext(ThemeContext);
    var formContext = useContext(FormContext);
    var anchorRef = useRef(null);
    var _0 = useState(undefined), internalAppendIcon = _0[0], setInternalAppendIcon = _0[1];
    var _1 = useState(id !== null && id !== void 0 ? id : uniqid("select-")), internalId = _1[0], setInternalId = _1[1];
    var _2 = useState(value), internalValue = _2[0], setInternalValue = _2[1];
    var _3 = useState(false), hasFocus = _3[0], setHasFocus = _3[1];
    var _4 = useState(false), isDirty = _4[0], setIsDirty = _4[1];
    var _5 = useValidation(internalValue, rules), isValid = _5[0], validationErrors = _5[1];
    // Vars & States - END
    // Methods & Handler - START
    var handleFocus = useCallback(function () {
        var _a;
        if (!disabled || readOnly) {
            (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.focus();
            setTimeout(function () {
                return setHasFocus(true);
            }, 100);
        }
    }, [disabled, id, readOnly]);
    var handleBlur = useCallback(function () {
        setTimeout(function () {
            setIsDirty(true);
            setHasFocus(false);
        }, 100);
    }, []);
    var handleChange = useCallback(function (newValue) {
        setInternalValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
        setHasFocus(false);
    }, [onChange]);
    var handleClear = useCallback(function () {
        setInternalValue(undefined);
        if (onChange) {
            onChange(undefined);
        }
        if (onClear) {
            onClear();
        }
    }, [onChange, onClear]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var getClasses = useCallback(function () {
        var classes = {
            "magnet-select": true,
            "magnet-select--value": internalValue !== undefined,
            "magnet-select--focus": hasFocus,
            "magnet-select--disabled": disabled,
            "magnet-select--error": error || (isDirty && !isValid),
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
        hasFocus,
        isDirty,
        isValid,
        internalValue,
        theme
    ]);
    var getStyles = useCallback(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useEffect(function () {
        setIsDirty((formContext && formContext.mode === "force") || mode === "force");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(function () {
        if ((formContext && formContext.isDirty) || mode === "force") {
            setIsDirty(true);
        }
    }, [formContext, mode]);
    useEffect(function () {
        setInternalId(id !== null && id !== void 0 ? id : uniqid("select-"));
    }, [id]);
    useEffect(function () {
        setInternalValue(value);
    }, [value]);
    useEffect(function () {
        if (!formContext) {
            return;
        }
        if (formContext && !name) {
            console.error("You have to define a name to " + internalId + " if used inside an MagnetForm.");
            return;
        }
        formContext.handlePublish({
            name: name,
            value: internalValue,
            isValid: isValid
        });
    }, [internalValue, isValid, formContext, name, internalId]);
    useEffect(function () {
        if (error) {
            setInternalAppendIcon("warning");
            return;
        }
        setInternalAppendIcon(appendIcon);
    }, [appendIcon, error]);
    // Life Cycle Hooks - END
    // Render - START
    var renderPrependIcon = useCallback(function () {
        if (!prependIcon) {
            return null;
        }
        return (React.createElement(MagnetIcon, { className: "magnet-select--prepend-icon", onClick: onPrependIconClick }, prependIcon));
    }, [onPrependIconClick, prependIcon]);
    var renderAppendIcon = useCallback(function () {
        if (!internalAppendIcon) {
            return null;
        }
        var onClickEvent = onAppendIconClick;
        if (error) {
            onClickEvent = undefined;
        }
        return (React.createElement(MagnetIcon, { className: "magnet-select--append-icon", onClick: onClickEvent }, internalAppendIcon));
    }, [error, internalAppendIcon, onAppendIconClick]);
    var renderHint = useCallback(function () {
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
        return React.createElement(MagnetHint, { hints: hints, error: error });
    }, [hint, validationErrors, error]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { "data-testid": "magnet-select", className: getClasses(), style: getStyles(), ref: anchorRef },
            React.createElement("div", { className: "magnet-select--container" },
                renderPrependIcon(),
                React.createElement("div", { className: "magnet-select--inner-container", onClick: onClick },
                    React.createElement("label", { htmlFor: internalId }, label),
                    React.createElement("input", { id: internalId, type: "text", value: internalValue
                            ? internalValue.text
                                ? internalValue === null || internalValue === void 0 ? void 0 : internalValue.text
                                : String(internalValue === null || internalValue === void 0 ? void 0 : internalValue.value)
                            : "", placeholder: !label || hasFocus ? placeholder : undefined, onFocus: handleFocus, onClick: onClick, disabled: disabled, readOnly: true, ref: ref, name: name })),
                clearable && internalValue && (React.createElement("div", { className: "magnet-select--append-icon", onClick: handleClear, style: { cursor: "pointer" } },
                    React.createElement(MagnetIcon, null, "close"))),
                renderAppendIcon()),
            renderHint()),
        React.createElement(MagnetMenu, { anchorEl: anchorRef, width: "match-parent", value: hasFocus, onOutsideClick: handleBlur, theme: theme, options: options.map(function (o) {
                return {
                    title: o.text ? o.text : o.value,
                    onClick: function () {
                        handleChange(o);
                    }
                };
            }) })));
};
Select.displayName = "Select";
var MagnetSelect = React.memo(Select);
MagnetSelect.displayName = "MagnetSelect";

var Switch = function (_a) {
    var _b = _a.className, className = _b === void 0 ? undefined : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.error, error = _d === void 0 ? false : _d, _e = _a.hint, hint = _e === void 0 ? undefined : _e, _f = _a.id, id = _f === void 0 ? undefined : _f, _g = _a.label, label = _g === void 0 ? undefined : _g, _h = _a.mode, mode = _h === void 0 ? "lazy" : _h, _j = _a.name, name = _j === void 0 ? undefined : _j, _k = _a.onChange, onChange = _k === void 0 ? undefined : _k, _l = _a.onClick, onClick = _l === void 0 ? undefined : _l, _m = _a.ref, ref = _m === void 0 ? undefined : _m, _o = _a.rules, rules = _o === void 0 ? [] : _o, _p = _a.style, style = _p === void 0 ? undefined : _p, _q = _a.theme, theme = _q === void 0 ? "auto" : _q, _r = _a.value, value = _r === void 0 ? false : _r;
    // Vars & States - START
    var globalTheme = useContext(ThemeContext);
    var formContext = useContext(FormContext);
    var _s = useState(id !== null && id !== void 0 ? id : uniqid("switch-")), internalId = _s[0], setInternalId = _s[1];
    var _t = useState(value), internalValue = _t[0], setInternalValue = _t[1];
    var _u = useState(false), isDirty = _u[0], setIsDirty = _u[1];
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
    var classes = useMemo(function () {
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
    var checkmarkClasses = useMemo(function () {
        return clsx({
            "magnet-switch--checkmark": true,
            "magnet-switch--checkmark-show": internalValue
        });
    }, [internalValue]);
    var styles = useMemo(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useEffect(function () {
        setIsDirty((formContext && formContext.mode === "force") || mode === "force");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(function () {
        if ((formContext && formContext.isDirty) || mode === "force") {
            setIsDirty(true);
        }
    }, [formContext, mode]);
    useEffect(function () {
        setInternalId(id !== null && id !== void 0 ? id : uniqid("switch-"));
    }, [id]);
    useEffect(function () {
        setInternalValue(value);
    }, [value]);
    useEffect(function () {
        if (!formContext) {
            return;
        }
        if (formContext && !name) {
            console.error("You have to define a name to " + internalId + " if used inside an MagnetForm.");
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
    var renderHint = useCallback(function () {
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
        return React.createElement(MagnetHint, { hints: hints, error: error });
    }, [hint, validationErrors, error]);
    return (React.createElement("div", { className: classes, style: styles, onClick: onClick },
        React.createElement("div", { className: "magnet-switch--inner" },
            React.createElement("div", { className: "magnet-switch--input", onClick: handleChange },
                React.createElement("input", { id: internalId, type: "checkbox", onChange: handleChange, disabled: disabled, checked: internalValue, ref: ref }),
                React.createElement("div", { className: checkmarkClasses },
                    React.createElement(MagnetIcon, { size: 18, disabled: disabled, onClick: handleChange }, "check"))),
            label && (React.createElement("label", { htmlFor: internalId, className: "magnet-switch--label" }, label))),
        renderHint()));
};
Switch.displayName = "Switch";
var MagnetSwitch = React.memo(Switch);
MagnetSwitch.displayName = "MagnetSwitch";

var Textarea = function (_a) {
    var _b = _a.appendIcon, appendIcon = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.clearable, clearable = _d === void 0 ? false : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.error, error = _f === void 0 ? false : _f, _g = _a.hint, hint = _g === void 0 ? undefined : _g, _h = _a.id, id = _h === void 0 ? undefined : _h, label = _a.label, _j = _a.mode, mode = _j === void 0 ? "lazy" : _j, _k = _a.name, name = _k === void 0 ? undefined : _k, _l = _a.onAppendIconClick, onAppendIconClick = _l === void 0 ? undefined : _l, _m = _a.onChange, onChange = _m === void 0 ? undefined : _m, _o = _a.onClear, onClear = _o === void 0 ? undefined : _o, _p = _a.onClick, onClick = _p === void 0 ? undefined : _p, _q = _a.onPrependIconClick, onPrependIconClick = _q === void 0 ? undefined : _q, _r = _a.placeholder, placeholder = _r === void 0 ? undefined : _r, _s = _a.prependIcon, prependIcon = _s === void 0 ? undefined : _s, _t = _a.readOnly, readOnly = _t === void 0 ? false : _t, _u = _a.ref, ref = _u === void 0 ? undefined : _u, _v = _a.rows, rows = _v === void 0 ? 5 : _v, _w = _a.rules, rules = _w === void 0 ? [] : _w, _x = _a.style, style = _x === void 0 ? undefined : _x, _y = _a.theme, theme = _y === void 0 ? "auto" : _y, _z = _a.value, value = _z === void 0 ? "" : _z;
    // Vars & States - START
    var globalTheme = useContext(ThemeContext);
    var formContext = useContext(FormContext);
    var _0 = useState(undefined), internalAppendIcon = _0[0], setInternalAppendIcon = _0[1];
    var _1 = useState(id !== null && id !== void 0 ? id : uniqid("textarea-")), internalId = _1[0], setInternalId = _1[1];
    var _2 = useState(value), internalValue = _2[0], setInternalValue = _2[1];
    var _3 = useState(false), hasFocus = _3[0], setHasFocus = _3[1];
    var _4 = useState(false), isDirty = _4[0], setIsDirty = _4[1];
    var _5 = useValidation(internalValue, rules), isValid = _5[0], validationErrors = _5[1];
    // Vars & States - END
    // Methods & Handler - START
    var handleFocus = useCallback(function () {
        setHasFocus(true);
    }, []);
    var handleBlur = useCallback(function () {
        setHasFocus(false);
        setIsDirty(true);
    }, []);
    var handleChange = useCallback(function (ev) {
        var newValue = ev.target.value;
        setInternalValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    }, [onChange]);
    var handleClear = useCallback(function () {
        setInternalValue("");
        if (onChange) {
            onChange("");
        }
        if (onClear) {
            onClear();
        }
    }, [onChange, onClear]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var getClasses = useCallback(function () {
        var classes = {
            "magnet-textarea": true,
            "magnet-textarea--value": internalValue !== undefined && internalValue !== "",
            "magnet-textarea--focus": hasFocus,
            "magnet-textarea--disabled": disabled,
            "magnet-textarea--error": error || (isDirty && !isValid),
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
        hasFocus,
        isDirty,
        isValid,
        internalValue,
        theme
    ]);
    var getStyles = useCallback(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useEffect(function () {
        setIsDirty((formContext && formContext.mode === "force") || mode === "force");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(function () {
        if ((formContext && formContext.isDirty) || mode === "force") {
            setIsDirty(true);
        }
    }, [formContext, mode]);
    useEffect(function () {
        setInternalId(id !== null && id !== void 0 ? id : uniqid("textarea-"));
    }, [id]);
    useEffect(function () {
        setInternalValue(value);
    }, [value]);
    useEffect(function () {
        if (!formContext) {
            return;
        }
        if (formContext && !name) {
            console.error("You have to define a name to " + internalId + " if used inside an MagnetForm.");
            return;
        }
        formContext.handlePublish({
            name: name,
            value: internalValue,
            isValid: isValid
        });
    }, [internalValue, isValid, formContext, name, internalId]);
    useEffect(function () {
        if (error) {
            setInternalAppendIcon("warning");
            return;
        }
        setInternalAppendIcon(appendIcon);
    }, [appendIcon, error]);
    // Life Cycle Hooks - END
    // Render - START
    var renderPrependIcon = useCallback(function () {
        if (!prependIcon) {
            return null;
        }
        return (React.createElement(MagnetIcon, { className: "magnet-textarea--prepend-icon", onClick: onPrependIconClick }, prependIcon));
    }, [onPrependIconClick, prependIcon]);
    var renderAppendIcon = useCallback(function () {
        if (!internalAppendIcon) {
            return null;
        }
        var onClickEvent = onAppendIconClick;
        if (error) {
            onClickEvent = undefined;
        }
        return (React.createElement(MagnetIcon, { className: "magnet-textarea--append-icon", onClick: onClickEvent }, internalAppendIcon));
    }, [error, internalAppendIcon, onAppendIconClick]);
    var renderHint = useCallback(function () {
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
        return React.createElement(MagnetHint, { hints: hints, error: error });
    }, [hint, validationErrors, error]);
    return (React.createElement("div", { "data-testid": "magnet-textarea", className: getClasses(), style: getStyles() },
        React.createElement("div", { className: "magnet-textarea--container" },
            renderPrependIcon(),
            React.createElement("div", { className: "magnet-textarea--inner-container", onClick: onClick },
                React.createElement("label", { htmlFor: internalId }, label),
                React.createElement("textarea", { id: internalId, value: internalValue, placeholder: !label || hasFocus ? placeholder : undefined, onFocus: handleFocus, onBlur: handleBlur, onChange: handleChange, disabled: disabled, readOnly: readOnly, ref: ref, name: name, rows: rows })),
            clearable && internalValue && (React.createElement("div", { className: "magnet-textarea--append-icon", onClick: handleClear, style: { cursor: "pointer" } },
                React.createElement(MagnetIcon, null, "close"))),
            renderAppendIcon()),
        renderHint()));
};
Textarea.displayName = "Textarea";
var MagnetTextarea = React.memo(Textarea);
MagnetTextarea.displayName = "MagnetTextarea";

var Textfield = function (_a) {
    var _b = _a.appendIcon, appendIcon = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? undefined : _c, _d = _a.clearable, clearable = _d === void 0 ? false : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.error, error = _f === void 0 ? false : _f, _g = _a.hint, hint = _g === void 0 ? undefined : _g, _h = _a.id, id = _h === void 0 ? undefined : _h, label = _a.label, _j = _a.mode, mode = _j === void 0 ? "lazy" : _j, _k = _a.name, name = _k === void 0 ? undefined : _k, _l = _a.onAppendIconClick, onAppendIconClick = _l === void 0 ? undefined : _l, _m = _a.onChange, onChange = _m === void 0 ? undefined : _m, _o = _a.onClear, onClear = _o === void 0 ? undefined : _o, _p = _a.onClick, onClick = _p === void 0 ? undefined : _p, _q = _a.onPrependIconClick, onPrependIconClick = _q === void 0 ? undefined : _q, _r = _a.placeholder, placeholder = _r === void 0 ? undefined : _r, _s = _a.prependIcon, prependIcon = _s === void 0 ? undefined : _s, _t = _a.readOnly, readOnly = _t === void 0 ? false : _t, _u = _a.ref, ref = _u === void 0 ? undefined : _u, _v = _a.rules, rules = _v === void 0 ? [] : _v, _w = _a.style, style = _w === void 0 ? undefined : _w, _x = _a.theme, theme = _x === void 0 ? "auto" : _x, _y = _a.type, type = _y === void 0 ? "text" : _y, _z = _a.value, value = _z === void 0 ? "" : _z;
    // Vars & States - START
    var globalTheme = useContext(ThemeContext);
    var formContext = useContext(FormContext);
    var _0 = useState(undefined), internalAppendIcon = _0[0], setInternalAppendIcon = _0[1];
    var _1 = useState(id !== null && id !== void 0 ? id : uniqid("textfield-")), internalId = _1[0], setInternalId = _1[1];
    var _2 = useState(false), showPassword = _2[0], setShowPassword = _2[1];
    var _3 = useState(value), internalValue = _3[0], setInternalValue = _3[1];
    var _4 = useState(false), hasFocus = _4[0], setHasFocus = _4[1];
    var _5 = useState(false), isDirty = _5[0], setIsDirty = _5[1];
    var _6 = useValidation(internalValue, rules), isValid = _6[0], validationErrors = _6[1];
    // Vars & States - END
    // Methods & Handler - START
    var handleFocus = useCallback(function () {
        setHasFocus(true);
    }, []);
    var handleBlur = useCallback(function () {
        setHasFocus(false);
        setIsDirty(true);
    }, []);
    var handleChange = useCallback(function (ev) {
        var newValue = ev.target.value;
        setInternalValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    }, [onChange]);
    var handleClear = useCallback(function () {
        setInternalValue("");
        if (onChange) {
            onChange("");
        }
        if (onClear) {
            onClear();
        }
    }, [onChange, onClear]);
    var handlePasswordToggle = useCallback(function () {
        setShowPassword(!showPassword);
    }, [showPassword]);
    // Methods & Handler - END
    // ClassNames & Styles - START
    var getClasses = useCallback(function () {
        var classes = {
            "magnet-textfield": true,
            "magnet-textfield--value": internalValue !== undefined && internalValue !== "",
            "magnet-textfield--focus": hasFocus,
            "magnet-textfield--disabled": disabled,
            "magnet-textfield--error": error || (isDirty && !isValid),
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
        hasFocus,
        isDirty,
        isValid,
        internalValue,
        theme
    ]);
    var getStyles = useCallback(function () {
        var styleList = {};
        return __assign(__assign({}, styleList), style);
    }, [style]);
    // ClassNames & Styles - END
    // Life Cycle Hooks - START
    useEffect(function () {
        setIsDirty((formContext && formContext.mode === "force") || mode === "force");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(function () {
        if ((formContext && formContext.isDirty) || mode === "force") {
            setIsDirty(true);
        }
    }, [formContext, mode]);
    useEffect(function () {
        setInternalId(id !== null && id !== void 0 ? id : uniqid("textfield-"));
    }, [id]);
    useEffect(function () {
        setInternalValue(value);
    }, [value]);
    useEffect(function () {
        if (!formContext) {
            return;
        }
        if (formContext && !name) {
            console.error("You have to define a name to " + internalId + " if used inside an MagnetForm.");
            return;
        }
        formContext.handlePublish({
            name: name,
            value: internalValue,
            isValid: isValid
        });
    }, [internalValue, isValid, formContext, name, internalId]);
    useEffect(function () {
        if (error) {
            setInternalAppendIcon("warning");
            return;
        }
        if (type === "password") {
            if (showPassword) {
                setInternalAppendIcon("visibility_off");
            }
            else {
                setInternalAppendIcon("visibility");
            }
            return;
        }
        setInternalAppendIcon(appendIcon);
    }, [appendIcon, error, type, showPassword]);
    // Life Cycle Hooks - END
    // Render - START
    var renderPrependIcon = useCallback(function () {
        if (!prependIcon) {
            return null;
        }
        return (React.createElement(MagnetIcon, { className: "magnet-textfield--prepend-icon", onClick: onPrependIconClick }, prependIcon));
    }, [onPrependIconClick, prependIcon]);
    var renderAppendIcon = useCallback(function () {
        if (!internalAppendIcon) {
            return null;
        }
        var onClickEvent = onAppendIconClick;
        if (type === "password") {
            onClickEvent = handlePasswordToggle;
        }
        if (error) {
            onClickEvent = undefined;
        }
        return (React.createElement(MagnetIcon, { className: "magnet-textfield--append-icon", onClick: onClickEvent }, internalAppendIcon));
    }, [
        error,
        handlePasswordToggle,
        internalAppendIcon,
        onAppendIconClick,
        type
    ]);
    var renderHint = useCallback(function () {
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
        return React.createElement(MagnetHint, { hints: hints, error: error });
    }, [hint, validationErrors, error]);
    return (React.createElement("div", { "data-testid": "magnet-textfield", className: getClasses(), style: getStyles() },
        React.createElement("div", { className: "magnet-textfield--container" },
            renderPrependIcon(),
            React.createElement("div", { className: "magnet-textfield--inner-container", onClick: onClick },
                React.createElement("label", { htmlFor: internalId }, label),
                React.createElement("input", { id: internalId, type: showPassword && !error ? "text" : type, value: internalValue, placeholder: !label || hasFocus ? placeholder : undefined, onFocus: handleFocus, onBlur: handleBlur, onChange: handleChange, onClick: onClick, disabled: disabled, readOnly: readOnly, ref: ref, name: name })),
            clearable && internalValue && (React.createElement("div", { className: "magnet-textfield--append-icon", onClick: handleClear, style: { cursor: "pointer" } },
                React.createElement(MagnetIcon, null, "close"))),
            renderAppendIcon()),
        renderHint()));
};
Textfield.displayName = "Textfield";
var MagnetTextfield = React.memo(Textfield);
MagnetTextfield.displayName = "MagnetTextfield";

export { Banner, Button, Card, CardActions, CardBody, CardTitle, Checkbox, Column, Container, Dialog, FormContext, Image, MagnetApp, MagnetBanner, MagnetButton, MagnetCard, MagnetCardActions, MagnetCardBody, MagnetCardTitle, MagnetCheckbox, MagnetColumn, MagnetContainer, MagnetDialog, MagnetForm, MagnetHint, MagnetIcon, MagnetImage, MagnetMain, MagnetMenu, MagnetNavBar, MagnetNavBarLink, MagnetNavRail, MagnetNavRailLink, MagnetOverlay, MagnetPopover, MagnetProgressSpinner, MagnetRadio, MagnetRadioGroup, MagnetRow, MagnetSelect, MagnetSpacer, MagnetSwitch, MagnetTextarea, MagnetTextfield, NavBar, NavBarLink, NavRail, NavRailLink, Overlay, Radio, RadioGroup, Row, Select, Spacer, Switch, Textarea, Textfield, ThemeContext };
//# sourceMappingURL=index.esm.js.map
