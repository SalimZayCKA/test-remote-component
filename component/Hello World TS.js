!(function (t, n) {
  for (var e in n) t[e] = n[e];
})(
  exports,
  (function (t) {
    var n = {};
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
      }),
      (e.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (e.t = function (t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (e.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var o in t)
            e.d(
              r,
              o,
              function (n) {
                return t[n];
              }.bind(null, o)
            );
        return r;
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, "a", n), n;
      }),
      (e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = ""),
      e((e.s = 25))
    );
  })([
    function (t, n, e) {
      t.exports = !e(6)(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            }
          }).a
        );
      });
    },
    function (t, n) {
      var e = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = e);
    },
    function (t, n, e) {
      var r = e(9),
        o = e(10),
        u = e(12),
        i = Object.defineProperty;
      n.f = e(0)
        ? Object.defineProperty
        : function (t, n, e) {
            if ((r(t), (n = u(n, !0)), r(e), o))
              try {
                return i(t, n, e);
              } catch (t) {}
            if ("get" in e || "set" in e)
              throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t;
          };
    },
    function (t, n) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    function (t, n) {
      var e = (t.exports = { version: "2.6.12" });
      "number" == typeof __e && (__e = e);
    },
    function (t, n) {
      t.exports = require("react");
    },
    function (t, n) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function (t, n, e) {
      var r = e(2),
        o = e(15);
      t.exports = e(0)
        ? function (t, n, e) {
            return r.f(t, n, o(1, e));
          }
        : function (t, n, e) {
            return (t[n] = e), t;
          };
    },
    function (t, n, e) {
      var r = e(2).f,
        o = Function.prototype,
        u = /^\s*function ([^ (]*)/;
      "name" in o ||
        (e(0) &&
          r(o, "name", {
            configurable: !0,
            get: function () {
              try {
                return ("" + this).match(u)[1];
              } catch (t) {
                return "";
              }
            }
          }));
    },
    function (t, n, e) {
      var r = e(3);
      t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    },
    function (t, n, e) {
      t.exports =
        !e(0) &&
        !e(6)(function () {
          return (
            7 !=
            Object.defineProperty(e(11)("div"), "a", {
              get: function () {
                return 7;
              }
            }).a
          );
        });
    },
    function (t, n, e) {
      var r = e(3),
        o = e(1).document,
        u = r(o) && r(o.createElement);
      t.exports = function (t) {
        return u ? o.createElement(t) : {};
      };
    },
    function (t, n, e) {
      var r = e(3);
      t.exports = function (t, n) {
        if (!r(t)) return t;
        var e, o;
        if (n && "function" == typeof (e = t.toString) && !r((o = e.call(t))))
          return o;
        if ("function" == typeof (e = t.valueOf) && !r((o = e.call(t))))
          return o;
        if (!n && "function" == typeof (e = t.toString) && !r((o = e.call(t))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (t, n, e) {
      var r = e(14);
      r(r.S + r.F * !e(0), "Object", { defineProperty: e(2).f });
    },
    function (t, n, e) {
      var r = e(1),
        o = e(4),
        u = e(7),
        i = e(16),
        c = e(22),
        f = function (t, n, e) {
          var a,
            p,
            l,
            s,
            v = t & f.F,
            d = t & f.G,
            y = t & f.S,
            b = t & f.P,
            x = t & f.B,
            _ = d ? r : y ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
            h = d ? o : o[n] || (o[n] = {}),
            g = h.prototype || (h.prototype = {});
          for (a in (d && (e = n), e))
            (l = ((p = !v && _ && void 0 !== _[a]) ? _ : e)[a]),
              (s =
                x && p
                  ? c(l, r)
                  : b && "function" == typeof l
                  ? c(Function.call, l)
                  : l),
              _ && i(_, a, l, t & f.U),
              h[a] != l && u(h, a, s),
              b && g[a] != l && (g[a] = l);
        };
      (r.core = o),
        (f.F = 1),
        (f.G = 2),
        (f.S = 4),
        (f.P = 8),
        (f.B = 16),
        (f.W = 32),
        (f.U = 64),
        (f.R = 128),
        (t.exports = f);
    },
    function (t, n) {
      t.exports = function (t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n
        };
      };
    },
    function (t, n, e) {
      var r = e(1),
        o = e(7),
        u = e(17),
        i = e(18)("src"),
        c = e(19),
        f = ("" + c).split("toString");
      (e(4).inspectSource = function (t) {
        return c.call(t);
      }),
        (t.exports = function (t, n, e, c) {
          var a = "function" == typeof e;
          a && (u(e, "name") || o(e, "name", n)),
            t[n] !== e &&
              (a && (u(e, i) || o(e, i, t[n] ? "" + t[n] : f.join(String(n)))),
              t === r
                ? (t[n] = e)
                : c
                ? t[n]
                  ? (t[n] = e)
                  : o(t, n, e)
                : (delete t[n], o(t, n, e)));
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && this[i]) || c.call(this);
        });
    },
    function (t, n) {
      var e = {}.hasOwnProperty;
      t.exports = function (t, n) {
        return e.call(t, n);
      };
    },
    function (t, n) {
      var e = 0,
        r = Math.random();
      t.exports = function (t) {
        return "Symbol(".concat(
          void 0 === t ? "" : t,
          ")_",
          (++e + r).toString(36)
        );
      };
    },
    function (t, n, e) {
      t.exports = e(20)("native-function-to-string", Function.toString);
    },
    function (t, n, e) {
      var r = e(4),
        o = e(1),
        u = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
      (t.exports = function (t, n) {
        return u[t] || (u[t] = void 0 !== n ? n : {});
      })("versions", []).push({
        version: r.version,
        mode: e(21) ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      });
    },
    function (t, n) {
      t.exports = !1;
    },
    function (t, n, e) {
      var r = e(23);
      t.exports = function (t, n, e) {
        if ((r(t), void 0 === n)) return t;
        switch (e) {
          case 1:
            return function (e) {
              return t.call(n, e);
            };
          case 2:
            return function (e, r) {
              return t.call(n, e, r);
            };
          case 3:
            return function (e, r, o) {
              return t.call(n, e, r, o);
            };
        }
        return function () {
          return t.apply(n, arguments);
        };
      };
    },
    function (t, n) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "Title", function () {
          return u;
        });
      var r = e(5),
        o = e.n(r),
        u = function (t) {
          var n = t.children;
          return o.a.createElement("h1", null, n);
        };
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      e(8), e(13);
      var r = function (t) {
        return t && t.__esModule ? t : { default: t };
      };
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.App = void 0);
      var o = r(e(5)),
        u = e(24);
      exports.App = function (t) {
        var n = t.name,
          e = void 0 === n ? "World" : n;
        return o.default.createElement(u.Title, null, "Hello ", e, "!");
      };
      n.default = void 0;
    }
  ])
);
