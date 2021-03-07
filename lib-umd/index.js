!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ImgZoom = t() : e.ImgZoom = t();
}(this, (function () {
    return d = [function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return u;
        })), n.d(t, "e", (function () {
            return a;
        })), n.d(t, "c", (function () {
            return s;
        })), n.d(t, "d", (function () {
            return l;
        })), n.d(t, "b", (function () {
            return f;
        }));
        var r = n(3), o = n.n(r), i = (t = n(2), n.n(t));
        r = n(4);

        function u(e, t) {
            var n = null;
            return function () {
                for (var r = this, o = arguments.length, i = new Array(o), u = 0; u < o; u++) i[u] = arguments[u];
                n && (clearTimeout(n), n = null), n = setTimeout((function () {
                    n = null, e.apply(r, i);
                }), t);
            };
        }

        function a(e) {
            var t = i()(e);
            return "object" !== t ? t : Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
        }

        n(1), n(10);
        t = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        var c = (n = [""].concat(r = ["十", "百", "千"], ["万"], r, ["亿"])).length;

        function s(e, t) {
            var n = {};

            function r(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            }

            return r(n, e), r(n, t), n;
        }

        function l(e, t, n) {
            var r = n || function (e) {
                return e;
            };
            return t.reduce((function (t, n) {
                return e.hasOwnProperty(n) && (t[n] = r(e[n], n, e)), t;
            }), {});
        }

        function f(e, t) {
            for (var n in e) if (e.hasOwnProperty(n) && !1 === t(e[n], n, e)) return;
        }

        (r = function e(t) {
            var n = ~~t, r = "", o = 0;
            if (0 <= t && t < 10) return e.numbers[t];
            for (; 1 <= n && o < c;) {
                var i = e.units[o], u = e.numbers[n % 10];
                u !== e.numbers[0] && (r = i + r), 1 === n && 1 === o || (r = u + r), n = ~~(n / 10), o++;
            }
            return r.replace(/(零+$)|((零)\3+)/g, "$3");
        }).units = o()(n), r.numbers = [].concat(t), (r = function e(t) {
            if (new RegExp("([^".concat(e.units.join() + e.numbers.join(), "])")).test(t)) throw new TypeError("发现不符合规则的字符(必须在units和numbers里存在的字符):" + RegExp.$1);
            return t.split(new RegExp("[".concat(e.units[4]).concat(e.units[8], "]"), "g")).map((function (t) {
                for (var n = 0, r = 1, o = t.length - 1; -1 < o; o--) {
                    var i = t[o], u = e.numbers.indexOf(i);
                    0 < u && (n += u * r), r = 0 < (i = e.units.indexOf(i)) ? Math.pow(10, i) : r;
                }
                return t[0] === e.units[1] && (n += 10), n;
            })).reverse().reduce((function (e, t, n) {
                return e + Math.pow(1e4, n) * t;
            }), 0);
        }).units = o()(n), r.numbers = [].concat(t);
    }, function (e, t, n) {
        "use strict";
        n.d(t, "e", (function () {
            return i;
        })), n.d(t, "a", (function () {
            return u;
        })), n.d(t, "g", (function () {
            return a;
        })), n.d(t, "c", (function () {
            return c;
        })), n.d(t, "f", (function () {
            return s;
        })), n.d(t, "d", (function () {
            return l;
        })), n.d(t, "b", (function () {
            return f;
        }));
        t = n(9), t = n(2);
        var r = n.n(t), o = n(0);

        function i(e) {
            return "object" === Object(o.e)(e);
        }

        function u(e) {
            return "array" === Object(o.e)(e);
        }

        function a(e) {
            return "string" === Object(o.e)(e);
        }

        function c(e) {
            return "function" === Object(o.e)(e);
        }

        function s(e) {
            var t = r()(e);
            return !!e && ("object" === t || "function" === t) && "function" == typeof e.then;
        }

        function l(e) {
            return function (e) {
                return "number" === Object(o.e)(e);
            }(e) && e != e;
        }

        function f(e) {
            if ([void 0, null, "", NaN].includes(e)) return !0;
            switch (Object(o.e)(e)) {
                case"array":
                    return !e.length;
                case"object":
                    return function (e) {
                        if (!i(e)) return !1;
                        for (var t in e) return void 0 === t;
                        return !0;
                    }(e);
            }
            return !1;
        }
    }, function (e, t) {
        function n(t) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function (e) {
                return typeof e;
            } : e.exports = n = function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, e.exports.default = e.exports, e.exports.__esModule = !0, n(t);
        }

        e.exports = n, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (e, t, n) {
        var r = n(12), o = n(13), i = n(6), u = n(14);
        e.exports = function (e) {
            return r(e) || o(e) || i(e) || u();
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (e, t, n) {
        e.exports = n(15);
    }, function (e, t) {
        e.exports = function (e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (e, t, n) {
        var r = n(5);
        e.exports = function (e, t) {
            if (e) {
                if ("string" == typeof e) return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
            }
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (e, t) {
        e.exports = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (e, t) {
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }

        e.exports = function (e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e;
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (e, t) {
        e.exports = function (e) {
            if (null == e) throw new TypeError("Cannot destructure undefined");
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function () {
            return deepClone;
        }));
        var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3),
            _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__),
            _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11),
            _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__),
            _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2),
            _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__),
            _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);

        function cloneFunction(fn) {
            return "function" !== Object(_common__WEBPACK_IMPORTED_MODULE_3__.e)(fn) ? fn : (eval("newFn = " + fn.toString()), newFn);
            var newFn;
        }

        var cloneStrategies = (Dm = {
            array: function (e) {
                return new e.constructor;
            }, function: function (e) {
                return cloneFunction(e);
            }, date: function (e) {
                return new e.constructor(e);
            },
        }, Object.assign(Object.assign({}, Dm), {object: Dm.array, regexp: Dm.date})), Dm;

        function deepClone(e) {
            var t = Object(_common__WEBPACK_IMPORTED_MODULE_3__.e)(e), n = cloneStrategies[t], r = n ? n(e) : e;
            if (-1 === ["object", "array", "function"].indexOf(t)) return r;
            var o, i = e;
            for (o in i) i.hasOwnProperty(o) && (r[o] = deepClone(i[o]));
            return r;
        }

        function deepCloneBfs(e) {
            if ("object" !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(e) || !e) return e;
            var t = new e.constructor, n = r(e, t);

            function r(e, t) {
                var n, r = [];
                for (n in e) e.hasOwnProperty(n) && r.push([n, e[n], t]);
                return r;
            }

            for (; n.length;) {
                var o = n.shift(),
                    i = (u = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(o, 3))[0],
                    u = (o = u[1], u[2]);
                "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(o) ? (void 0 === u[i] && (u[i] = new o.constructor), n.push.apply(n, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(r(o, u[i])))) : u[i] = o;
            }
            return t;
        }
    }, function (e, t, n) {
        var r = n(16), o = n(17), i = n(6), u = n(18);
        e.exports = function (e, t) {
            return r(e) || o(e, t) || i(e, t) || u();
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (e, t, n) {
        var r = n(5);
        e.exports = function (e) {
            if (Array.isArray(e)) return r(e);
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (e, t) {
        e.exports = function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (e, t) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (e, t, n) {
        var r = function (e) {
            "use strict";
            var t, n = Object.prototype, r = n.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {},
                i = o.iterator || "@@iterator", u = o.asyncIterator || "@@asyncIterator",
                a = o.toStringTag || "@@toStringTag";

            function c(e, t, n) {
                return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t];
            }

            try {
                c({}, "");
            } catch (n) {
                c = function (e, t, n) {
                    return e[t] = n;
                };
            }

            function s(e, n, r, o) {
                var i, u, a, c;
                n = n && n.prototype instanceof m ? n : m, n = Object.create(n.prototype), o = new L(o || []);
                return n._invoke = (i = e, u = r, a = o, c = f, function (e, n) {
                    if (c === d) throw new Error("Generator is already running");
                    if (c === h) {
                        if ("throw" === e) throw n;
                        return j();
                    }
                    for (a.method = e, a.arg = n; ;) {
                        var r = a.delegate;
                        if (r) {
                            var o = function e(n, r) {
                                var o;
                                if ((o = n.iterator[r.method]) === t) {
                                    if (r.delegate = null, "throw" === r.method) {
                                        if (n.iterator.return && (r.method = "return", r.arg = t, e(n, r), "throw" === r.method)) return _;
                                        r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
                                    }
                                    return _;
                                }
                                return "throw" === (o = l(o, n.iterator, r.arg)).type ? (r.method = "throw", r.arg = o.arg, r.delegate = null, _) : (o = o.arg) ? o.done ? (r[n.resultName] = o.value, r.next = n.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, _) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, _);
                            }(r, a);
                            if (o) {
                                if (o === _) continue;
                                return o;
                            }
                        }
                        if ("next" === a.method) a.sent = a._sent = a.arg; else if ("throw" === a.method) {
                            if (c === f) throw c = h, a.arg;
                            a.dispatchException(a.arg);
                        } else "return" === a.method && a.abrupt("return", a.arg);
                        if (c = d, "normal" === (o = l(i, u, a)).type) {
                            if (c = a.done ? h : p, o.arg !== _) return {value: o.arg, done: a.done};
                        } else "throw" === o.type && (c = h, a.method = "throw", a.arg = o.arg);
                    }
                }), n;
            }

            function l(e, t, n) {
                try {
                    return {type: "normal", arg: e.call(t, n)};
                } catch (e) {
                    return {type: "throw", arg: e};
                }
            }

            e.wrap = s;
            var f = "suspendedStart", p = "suspendedYield", d = "executing", h = "completed", _ = {};

            function m() {
            }

            function y() {
            }

            function v() {
            }

            var w = {};
            w[i] = function () {
                return this;
            }, (o = (o = Object.getPrototypeOf) && o(o(M([])))) && o !== n && r.call(o, i) && (w = o);
            var b = v.prototype = m.prototype = Object.create(w);

            function g(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    c(e, t, (function (e) {
                        return this._invoke(t, e);
                    }));
                }));
            }

            function x(e, t) {
                var n;
                this._invoke = function (o, i) {
                    function u() {
                        return new t((function (n, u) {
                            !function n(o, i, u, a) {
                                if ("throw" !== (o = l(e[o], e, i)).type) {
                                    var c = o.arg;
                                    return (i = c.value) && "object" == typeof i && r.call(i, "__await") ? t.resolve(i.__await).then((function (e) {
                                        n("next", e, u, a);
                                    }), (function (e) {
                                        n("throw", e, u, a);
                                    })) : t.resolve(i).then((function (e) {
                                        c.value = e, u(c);
                                    }), (function (e) {
                                        return n("throw", e, u, a);
                                    }));
                                }
                                a(o.arg);
                            }(o, i, n, u);
                        }));
                    }

                    return n = n ? n.then(u, u) : u();
                };
            }

            function E(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
            }

            function O(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }

            function L(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(E, this), this.reset(!0);
            }

            function M(e) {
                if (e) {
                    if (n = e[i]) return n.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n, o = -1;
                        return (n = function n() {
                            for (; ++o < e.length;) if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
                            return n.value = t, n.done = !0, n;
                        }).next = n;
                    }
                }
                return {next: j};
            }

            function j() {
                return {value: t, done: !0};
            }

            return ((y.prototype = b.constructor = v).constructor = y).displayName = c(v, a, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                return !!(e = "function" == typeof e && e.constructor) && (e === y || "GeneratorFunction" === (e.displayName || e.name));
            }, e.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, c(e, a, "GeneratorFunction")), e.prototype = Object.create(b), e;
            }, e.awrap = function (e) {
                return {__await: e};
            }, g(x.prototype), x.prototype[u] = function () {
                return this;
            }, e.AsyncIterator = x, e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var u = new x(s(t, n, r, o), i);
                return e.isGeneratorFunction(n) ? u : u.next().then((function (e) {
                    return e.done ? e.value : u.next();
                }));
            }, g(b), c(b, a, "Generator"), b[i] = function () {
                return this;
            }, b.toString = function () {
                return "[object Generator]";
            }, e.keys = function (e) {
                var t, n = [];
                for (t in e) n.push(t);
                return n.reverse(), function t() {
                    for (; n.length;) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t;
                    }
                    return t.done = !0, t;
                };
            }, e.values = M, L.prototype = {
                constructor: L, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(O), !e) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;

                    function o(r, o) {
                        return a.type = "throw", a.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o;
                    }

                    for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                        var u = this.tryEntries[i], a = u.completion;
                        if ("root" === u.tryLoc) return o("end");
                        if (u.tryLoc <= this.prev) {
                            var c = r.call(u, "catchLoc"), s = r.call(u, "finallyLoc");
                            if (c && s) {
                                if (this.prev < u.catchLoc) return o(u.catchLoc, !0);
                                if (this.prev < u.finallyLoc) return o(u.finallyLoc);
                            } else if (c) {
                                if (this.prev < u.catchLoc) return o(u.catchLoc, !0);
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < u.finallyLoc) return o(u.finallyLoc);
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    var u = (i = i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc ? null : i) ? i.completion : {};
                    return u.type = e, u.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, _) : this.complete(u);
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), _;
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), O(n), _;
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r, o = n.completion;
                            return "throw" === o.type && (r = o.arg, O(n)), r;
                        }
                    }
                    throw new Error("illegal catch attempt");
                }, delegateYield: function (e, n, r) {
                    return this.delegate = {
                        iterator: M(e),
                        resultName: n,
                        nextLoc: r,
                    }, "next" === this.method && (this.arg = t), _;
                },
            }, e;
        }(e.exports);
        try {
            regeneratorRuntime = r;
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(r);
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (Array.isArray(e)) return e;
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (e, t) {
        e.exports = function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var u, a = e[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e;
                } finally {
                    try {
                        r || null == a.return || a.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            }
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (e, t) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }, e.exports.default = e.exports, e.exports.__esModule = !0;
    }, function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function () {
            return b;
        }));
        t = n(7);
        var r = n.n(t), o = (t = n(8), n.n(t)), i = (t = n(3), n.n(t)), u = (t = n(2), n.n(t)), a = n(0), c = n(1),
            s = document.createElement("div").style, l = function () {
                var e, t = {
                    webkit: "webkitTransform",
                    Moz: "MozTransform",
                    O: "OTransform",
                    ms: "msTransform",
                    standard: "transform",
                };
                for (e in t) if (void 0 !== s[t[e]]) return e;
                return !1;
            }(), f = "object" === ("undefined" == typeof HTMLElement ? "undefined" : u()(HTMLElement)) ? function (e) {
                return e instanceof HTMLElement;
            } : function (e) {
                return e && "object" === u()(e) && 1 === e.nodeType && "string" == typeof e.nodeName;
            }, p = document.documentElement.classList ? function (e, t) {
                var n;
                return (n = e.classList).add.apply(n, i()(Array.isArray(t) ? t : [t])), e.className;
            } : function (e, t) {
                var n = e.className, r = n.split(" ");
                return t = Array.isArray(t) ? t : [t], (t = (t = Array.from(new Set(t))).filter((function (e) {
                    return !r.includes(e);
                }))).length ? (t = t.join(" "), e.className = n ? n + " " + t : t, e.className) : n;
            };

        function d(e, t, n, r) {
            return null !== (e = e ? f(e) ? e : document.querySelector(e) : document.documentElement) && (e.addEventListener(t, (function (e) {
                e = e || window.event, (f(n) ? [n] : Array.from(document.querySelectorAll(n))).includes(e.target) && r(e);
            })), 1);
        }

        function h(e, t) {
            var n = document.createElement(e);
            return Object(a.b)(t, (function (e, t, r) {
                n.setAttribute(t, "object" === u()(e) ? JSON.stringify(e) : e);
            })), n;
        }

        var _ = "\n.img-zoom-wrapper {\n  z-index: 10000;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.img-zoom-wrapper.hide {\n  display: none;\n}\n.img-zoom-wrapper .img-zoom-view {\n  z-index: 1000000;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  display: block;\n  width: auto;\n  height: auto;\n  user-select: none;\n  border: none;\n  outline: none;\n}\n".replace(/[\n\r]/g, "");
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function (e) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var t = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (null != r) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                }
                return t;
            }, writable: !0, configurable: !0,
        });
        var m, y = !(m = "transform") !== l && ("transform" === l ? m : l + m.charAt(0).toUpperCase() + m.substr(1)),
            v = {max: 10, min: .1, step: .1, default: 1}, w = {triggerImgClass: "img-zoom", isClickViewImgClose: !1},
            b = function () {
                function e(t) {
                    r()(this, e), this.options = Object(a.c)(JSON.parse(JSON.stringify(w)), t || {}), this.options.scale = Object(a.c)(v, this.options.scale || {});
                    var n = (i = this.options.scale).min, o = i.max, i = (t = i.default, i.step);
                    if (o < n) throw new Error("scale.max不能小于scale.min");
                    if (t < n) throw new Error("scale.default不能小于scale.min");
                    if (o < t) throw new Error("scale.default不能大于scale.max");
                    if (n <= 0) throw new Error("scale.min不能小于等于0");
                    if (i <= 0) throw new Error("scale.step不能小于等于0");
                    o < i && console.warn("scale.step已大于scale.max"), this.init();
                }

                return o()(e, [{
                    key: "init", value: function () {
                        this.initView(), this.addBodyEventListener();
                    },
                }, {
                    key: "setImg", value: function (e) {
                        var t;
                        this.scale = this.options.scale.default, this.zoomImg.src = e, e = "hide", (t = this.wrapper).classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s)" + e + "(\\s|$)", "gi"), ""), t.className, this.resetViewScaleAndPosition(), this.getViewPositionFromMatrix();
                    },
                }, {
                    key: "addBodyEventListener", value: function () {
                        var e = this, t = function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                            return function (n) {
                                var r, o;
                                t && e.isSupportTouch() || (o = (o = (r = n.target).getAttribute("data-zoom-src")) || "IMG" !== r.nodeName ? o : n.target.src) && e.setImg(o);
                            };
                        }, n = "img" + (this.options.triggerImgClass ? "." : "") + this.options.triggerImgClass;
                        d(null, "click", n, t()), d(null, "touchend", n, t(!0)), t = Object(a.a)((function () {
                            e.resetViewScaleAndPosition(), e.getViewPositionFromMatrix();
                        }), 100), window.addEventListener("resize", t);
                    },
                }, {
                    key: "resetViewScaleAndPosition", value: function () {
                        this.zoomImg.style[y] = "translate(-50%, -50%) scale(".concat(this.scale, ")");
                    },
                }, {
                    key: "getViewPosition", value: function () {
                        var e = window.innerHeight || document.documentElement.clientHeight,
                            t = window.innerWidth || document.documentElement.clientWidth,
                            n = (r = this.zoomImg).offsetWidth, r = r.offsetHeight;
                        this.left = (e - n) / 2, this.top = (t - r) / 2;
                    },
                }, {
                    key: "isSupportTouch", value: function () {
                        return "ontouchstart" in window;
                    },
                }, {
                    key: "getZoomImgStyleMatrixVal", value: function () {
                        var e = getComputedStyle(this.zoomImg)[y];
                        return (/matrix\(([\d\\.,\- ]+)\)/.test(e) ? RegExp.$1 : "0,0,0,0,0,0").split(/, ?/);
                    },
                }, {
                    key: "getViewPositionFromMatrix", value: function () {
                        var e = this.getZoomImgStyleMatrixVal();
                        this.left = Number(e[4]) || 0, this.top = Number(e[5]) || 0;
                    },
                }, {
                    key: "setViewScaleAndPosition", value: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0], t = this.scale,
                            n = this.getZoomImgStyleMatrixVal();
                        n[0] = n[3] = t, n[4] = this.left, n[5] = this.top, this.zoomImg.style[y] = "".concat(e && this.isSupportTouch() ? "translateZ(0) " : "", "matrix(").concat(n.join(", "), ")");
                    },
                }, {
                    key: "initView", value: function () {
                        var e = document.createElement("style");
                        e.innerHTML = _;
                        var t = h("div", {class: "img-zoom-wrapper hide"}),
                            n = h("img", {class: "img-zoom-view", draggable: "false", ondragstart: "return false"});
                        document.head.appendChild(e), t.appendChild(n), document.body.appendChild(t), this.zoomImg = n, this.wrapper = t, this.initViewEventListener();
                    },
                }, {
                    key: "initViewEventListener", value: function () {
                        function e() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                            return function (n) {
                                if (!e || !t.isSupportTouch()) return p(t.wrapper, "hide"), n.stopPropagation(), n.preventDefault(), !1;
                            };
                        }

                        var t = this, n = this.wrapper, r = this.zoomImg;
                        n.addEventListener("mouseup", e()), n.addEventListener("touchend", e(!0)), n.addEventListener("touchcancel", e(!0)), n.addEventListener("wheel", (function (e) {
                            e = e || window.event;
                            var n = (o = t.options.scale).step, r = o.min, o = o.max;
                            n = 0 < e.deltaY ? -n : n;
                            return (n = o < (n = t.scale + n) ? o : n) < r && (n = r), t.scale = n, t.setViewScaleAndPosition(), e.stopPropagation(), e.preventDefault(), !1;
                        })), function (e) {
                            var t = e.el, n = e.onDown, r = e.onMove, o = e.onUp,
                                i = void 0 === (e = e.capture) ? {down: !1, up: !0, move: !1} : e;
                            e = t;
                            if (!f(t)) if (Object(c.g)(t)) {
                                if (!(e = document.querySelector(t))) throw new Error("element not found!");
                            } else e = window;
                            var u, a = {x: 0, y: 0}, s = {x: 0, y: 0};

                            function l(e) {
                                return (e = {x: e.screenX, y: e.screenY}).x = ~~e.x, e.y = ~~e.y, e;
                            }

                            function p(e) {
                                return (e = {
                                    x: (e = e.changedTouches[0]).clientX,
                                    y: e.clientY,
                                }).x = ~~e.x, e.y = ~~e.y, e;
                            }

                            function d(e, t) {
                                return s = (u = "mouse" === t ? l : p)(e), a = s, t = void 0, n && Object(c.c)(n) ? n.call(this, e, s) : t;
                            }

                            function h(e) {
                                var t = u(e), n = void 0;
                                return r && Object(c.c)(r) && (n = r.call(this, e, t, a, s)), a = t, n;
                            }

                            function _(e) {
                                var t = u(e), n = void 0;
                                return a = t, o && Object(c.c)(o) && (n = o.call(this, e, t, s)), window.removeEventListener("mousemove", h, i.move), window.removeEventListener("mouseup", _, i.up), window.removeEventListener("touchmove", h, i.move), window.removeEventListener("touchend", _, i.up), window.removeEventListener("touchcancel", _, i.up), n;
                            }

                            e.addEventListener("mousedown", (function (e) {
                                return e = d.call(this, e, "mouse"), window.addEventListener("mousemove", h, i.move), window.addEventListener("mouseup", _, i.up), e;
                            }), i.down), e.addEventListener("touchstart", (function (e) {
                                return e = d.call(this, e, "touch"), window.addEventListener("touchmove", h, i.move), window.addEventListener("touchend", _, i.up), window.addEventListener("touchcancel", _, i.up), e;
                            }), i.down);
                        }({
                            el: r, onMove: function (e, n, r, o) {
                                var i = n.x;
                                n = n.y, i = ~~(i - r.x), r = ~~(n - r.y);
                                t.left += i, t.top += r, t.setViewScaleAndPosition(!0);
                            }, onUp: function (e, n, r) {
                                if (t.setViewScaleAndPosition(), !t.options.isClickViewImgClose || n.x !== r.x && n.y !== r.y) return e.stopPropagation(), e.preventDefault(), !1;
                            }, onDown: function () {
                                console.log(arguments);
                            },
                        });
                    },
                }]), e;
            }();
    }], e = {}, f.m = d, f.c = e, f.d = function (e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n});
    }, f.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0});
    }, f.t = function (e, t) {
        if (1 & t && (e = f(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (f.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e,
        }), 2 & t && "string" != typeof e) for (var r in e) f.d(n, r, function (t) {
            return e[t];
        }.bind(null, r));
        return n;
    }, f.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default;
        } : function () {
            return e;
        };
        return f.d(t, "a", t), t;
    }, f.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, f.p = "", f(f.s = 19).default;

    function f(t) {
        if (e[t]) return e[t].exports;
        var n = e[t] = {i: t, l: !1, exports: {}};
        return d[t].call(n.exports, n, n.exports, f), n.l = !0, n.exports;
    }

    var d, e;
}));