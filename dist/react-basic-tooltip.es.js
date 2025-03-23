import rr, { useState as tr } from "react";
var xe = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function or() {
  if (Ie) return be;
  Ie = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(o, c, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      f = {};
      for (var g in c)
        g !== "key" && (f[g] = c[g]);
    } else f = c;
    return c = f.ref, {
      $$typeof: r,
      type: o,
      key: d,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return be.Fragment = n, be.jsx = t, be.jsxs = t, be;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function nr() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === A ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case u:
          return "Fragment";
        case B:
          return "Portal";
        case ue:
          return "Profiler";
        case z:
          return "StrictMode";
        case Z:
          return "Suspense";
        case V:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case X:
            return (e.displayName || "Context") + ".Provider";
          case fe:
            return (e._context.displayName || "Context") + ".Consumer";
          case oe:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case M:
            return a = e.displayName || null, a !== null ? a : r(e.type) || "Memo";
          case O:
            a = e._payload, e = e._init;
            try {
              return r(e(a));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function t(e) {
      try {
        n(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var i = a.error, h = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          h
        ), n(e);
      }
    }
    function o() {
    }
    function c() {
      if (F === 0) {
        K = console.log, le = console.info, D = console.warn, Te = console.error, _e = console.group, ze = console.groupCollapsed, Me = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      F++;
    }
    function f() {
      if (F--, F === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: $({}, e, { value: K }),
          info: $({}, e, { value: le }),
          warn: $({}, e, { value: D }),
          error: $({}, e, { value: Te }),
          group: $({}, e, { value: _e }),
          groupCollapsed: $({}, e, { value: ze }),
          groupEnd: $({}, e, { value: Me })
        });
      }
      0 > F && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function d(e) {
      if (we === void 0)
        try {
          throw Error();
        } catch (i) {
          var a = i.stack.trim().match(/\n( *(at )?)/);
          we = a && a[1] || "", Ne = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + we + e + Ne;
    }
    function g(e, a) {
      if (!e || ye) return "";
      var i = Ee.get(e);
      if (i !== void 0) return i;
      ye = !0, i = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var h = null;
      h = y.H, y.H = null, c();
      try {
        var S = {
          DetermineComponentFrameRoot: function() {
            try {
              if (a) {
                var U = function() {
                  throw Error();
                };
                if (Object.defineProperty(U.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(U, []);
                  } catch (Y) {
                    var he = Y;
                  }
                  Reflect.construct(e, [], U);
                } else {
                  try {
                    U.call();
                  } catch (Y) {
                    he = Y;
                  }
                  e.call(U.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Y) {
                  he = Y;
                }
                (U = e()) && typeof U.catch == "function" && U.catch(function() {
                });
              }
            } catch (Y) {
              if (Y && he && typeof Y.stack == "string")
                return [Y.stack, he.stack];
            }
            return [null, null];
          }
        };
        S.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var v = Object.getOwnPropertyDescriptor(
          S.DetermineComponentFrameRoot,
          "name"
        );
        v && v.configurable && Object.defineProperty(
          S.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var b = S.DetermineComponentFrameRoot(), W = b[0], ae = b[1];
        if (W && ae) {
          var T = W.split(`
`), ee = ae.split(`
`);
          for (b = v = 0; v < T.length && !T[v].includes(
            "DetermineComponentFrameRoot"
          ); )
            v++;
          for (; b < ee.length && !ee[b].includes(
            "DetermineComponentFrameRoot"
          ); )
            b++;
          if (v === T.length || b === ee.length)
            for (v = T.length - 1, b = ee.length - 1; 1 <= v && 0 <= b && T[v] !== ee[b]; )
              b--;
          for (; 1 <= v && 0 <= b; v--, b--)
            if (T[v] !== ee[b]) {
              if (v !== 1 || b !== 1)
                do
                  if (v--, b--, 0 > b || T[v] !== ee[b]) {
                    var pe = `
` + T[v].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", e.displayName)), typeof e == "function" && Ee.set(e, pe), pe;
                  }
                while (1 <= v && 0 <= b);
              break;
            }
        }
      } finally {
        ye = !1, y.H = h, f(), Error.prepareStackTrace = i;
      }
      return T = (T = e ? e.displayName || e.name : "") ? d(T) : "", typeof e == "function" && Ee.set(e, T), T;
    }
    function p(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var a = e.prototype;
        return g(
          e,
          !(!a || !a.isReactComponent)
        );
      }
      if (typeof e == "string") return d(e);
      switch (e) {
        case Z:
          return d("Suspense");
        case V:
          return d("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case oe:
            return e = g(e.render, !1), e;
          case M:
            return p(e.type);
          case O:
            a = e._payload, e = e._init;
            try {
              return p(e(a));
            } catch {
            }
        }
      return "";
    }
    function w() {
      var e = y.A;
      return e === null ? null : e.getOwner();
    }
    function E(e) {
      if (Q.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function R(e, a) {
      function i() {
        Pe || (Pe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function N() {
      var e = r(this.type);
      return Oe[e] || (Oe[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function P(e, a, i, h, S, v) {
      return i = v.ref, e = {
        $$typeof: I,
        type: e,
        key: a,
        props: v,
        _owner: S
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: N
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function j(e, a, i, h, S, v) {
      if (typeof e == "string" || typeof e == "function" || e === u || e === ue || e === z || e === Z || e === V || e === x || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === M || e.$$typeof === X || e.$$typeof === fe || e.$$typeof === oe || e.$$typeof === me || e.getModuleId !== void 0)) {
        var b = a.children;
        if (b !== void 0)
          if (h)
            if (se(b)) {
              for (h = 0; h < b.length; h++)
                _(b[h], e);
              Object.freeze && Object.freeze(b);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else _(b, e);
      } else
        b = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? h = "null" : se(e) ? h = "array" : e !== void 0 && e.$$typeof === I ? (h = "<" + (r(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          h,
          b
        );
      if (Q.call(a, "key")) {
        b = r(e);
        var W = Object.keys(a).filter(function(T) {
          return T !== "key";
        });
        h = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", Le[b + h] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          h,
          b,
          W,
          b
        ), Le[b + h] = !0);
      }
      if (b = null, i !== void 0 && (t(i), b = "" + i), E(a) && (t(a.key), b = "" + a.key), "key" in a) {
        i = {};
        for (var ae in a)
          ae !== "key" && (i[ae] = a[ae]);
      } else i = a;
      return b && R(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), P(e, b, v, S, w(), i);
    }
    function _(e, a) {
      if (typeof e == "object" && e && e.$$typeof !== er) {
        if (se(e))
          for (var i = 0; i < e.length; i++) {
            var h = e[i];
            L(h) && G(h, a);
          }
        else if (L(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? i = null : (i = ne && e[ne] || e["@@iterator"], i = typeof i == "function" ? i : null), typeof i == "function" && i !== e.entries && (i = i.call(e), i !== e))
          for (; !(e = i.next()).done; )
            L(e.value) && G(e.value, a);
      }
    }
    function L(e) {
      return typeof e == "object" && e !== null && e.$$typeof === I;
    }
    function G(e, a) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, a = J(a), !Ge[a])) {
        Ge[a] = !0;
        var i = "";
        e && e._owner != null && e._owner !== w() && (i = null, typeof e._owner.tag == "number" ? i = r(e._owner.type) : typeof e._owner.name == "string" && (i = e._owner.name), i = " It was passed a child from " + i + ".");
        var h = y.getCurrentStack;
        y.getCurrentStack = function() {
          var S = p(e.type);
          return h && (S += h() || ""), S;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          a,
          i
        ), y.getCurrentStack = h;
      }
    }
    function J(e) {
      var a = "", i = w();
      return i && (i = r(i.type)) && (a = `

Check the render method of \`` + i + "`."), a || (e = r(e)) && (a = `

Check the top-level render call using <` + e + ">."), a;
    }
    var H = rr, I = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), ue = Symbol.for("react.profiler"), fe = Symbol.for("react.consumer"), X = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), ne = Symbol.iterator, A = Symbol.for("react.client.reference"), y = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, $ = Object.assign, me = Symbol.for("react.client.reference"), se = Array.isArray, F = 0, K, le, D, Te, _e, ze, Me;
    o.__reactDisabledLog = !0;
    var we, Ne, ye = !1, Ee = new (typeof WeakMap == "function" ? WeakMap : Map)(), er = Symbol.for("react.client.reference"), Pe, Oe = {}, Le = {}, Ge = {};
    ge.Fragment = u, ge.jsx = function(e, a, i, h, S) {
      return j(e, a, i, !1, h, S);
    }, ge.jsxs = function(e, a, i, h, S) {
      return j(e, a, i, !0, h, S);
    };
  }()), ge;
}
var $e;
function sr() {
  return $e || ($e = 1, process.env.NODE_ENV === "production" ? xe.exports = or() : xe.exports = nr()), xe.exports;
}
var k = sr();
function Ue(r) {
  var n, t, o = "";
  if (typeof r == "string" || typeof r == "number") o += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var c = r.length;
    for (n = 0; n < c; n++) r[n] && (t = Ue(r[n])) && (o && (o += " "), o += t);
  } else for (t in r) r[t] && (o && (o += " "), o += t);
  return o;
}
function lr() {
  for (var r, n, t = 0, o = "", c = arguments.length; t < c; t++) (r = arguments[t]) && (n = Ue(r)) && (o && (o += " "), o += n);
  return o;
}
const Re = "-", ar = (r) => {
  const n = cr(r), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: o
  } = r;
  return {
    getClassGroupId: (d) => {
      const g = d.split(Re);
      return g[0] === "" && g.length !== 1 && g.shift(), qe(g, n) || ir(d);
    },
    getConflictingClassGroupIds: (d, g) => {
      const p = t[d] || [];
      return g && o[d] ? [...p, ...o[d]] : p;
    }
  };
}, qe = (r, n) => {
  var d;
  if (r.length === 0)
    return n.classGroupId;
  const t = r[0], o = n.nextPart.get(t), c = o ? qe(r.slice(1), o) : void 0;
  if (c)
    return c;
  if (n.validators.length === 0)
    return;
  const f = r.join(Re);
  return (d = n.validators.find(({
    validator: g
  }) => g(f))) == null ? void 0 : d.classGroupId;
}, Fe = /^\[(.+)\]$/, ir = (r) => {
  if (Fe.test(r)) {
    const n = Fe.exec(r)[1], t = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, cr = (r) => {
  const {
    theme: n,
    classGroups: t
  } = r, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const c in t)
    Ce(t[c], o, c, n);
  return o;
}, Ce = (r, n, t, o) => {
  r.forEach((c) => {
    if (typeof c == "string") {
      const f = c === "" ? n : We(n, c);
      f.classGroupId = t;
      return;
    }
    if (typeof c == "function") {
      if (dr(c)) {
        Ce(c(o), n, t, o);
        return;
      }
      n.validators.push({
        validator: c,
        classGroupId: t
      });
      return;
    }
    Object.entries(c).forEach(([f, d]) => {
      Ce(d, We(n, f), t, o);
    });
  });
}, We = (r, n) => {
  let t = r;
  return n.split(Re).forEach((o) => {
    t.nextPart.has(o) || t.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(o);
  }), t;
}, dr = (r) => r.isThemeGetter, ur = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const c = (f, d) => {
    t.set(f, d), n++, n > r && (n = 0, o = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(f) {
      let d = t.get(f);
      if (d !== void 0)
        return d;
      if ((d = o.get(f)) !== void 0)
        return c(f, d), d;
    },
    set(f, d) {
      t.has(f) ? t.set(f, d) : c(f, d);
    }
  };
}, Ae = "!", Se = ":", fr = Se.length, pr = (r) => {
  const {
    prefix: n,
    experimentalParseClassName: t
  } = r;
  let o = (c) => {
    const f = [];
    let d = 0, g = 0, p = 0, w;
    for (let j = 0; j < c.length; j++) {
      let _ = c[j];
      if (d === 0 && g === 0) {
        if (_ === Se) {
          f.push(c.slice(p, j)), p = j + fr;
          continue;
        }
        if (_ === "/") {
          w = j;
          continue;
        }
      }
      _ === "[" ? d++ : _ === "]" ? d-- : _ === "(" ? g++ : _ === ")" && g--;
    }
    const E = f.length === 0 ? c : c.substring(p), R = br(E), N = R !== E, P = w && w > p ? w - p : void 0;
    return {
      modifiers: f,
      hasImportantModifier: N,
      baseClassName: R,
      maybePostfixModifierPosition: P
    };
  };
  if (n) {
    const c = n + Se, f = o;
    o = (d) => d.startsWith(c) ? f(d.substring(c.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: d,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const c = o;
    o = (f) => t({
      className: f,
      parseClassName: c
    });
  }
  return o;
}, br = (r) => r.endsWith(Ae) ? r.substring(0, r.length - 1) : r.startsWith(Ae) ? r.substring(1) : r, gr = (r) => {
  const n = Object.fromEntries(r.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const c = [];
    let f = [];
    return o.forEach((d) => {
      d[0] === "[" || n[d] ? (c.push(...f.sort(), d), f = []) : f.push(d);
    }), c.push(...f.sort()), c;
  };
}, mr = (r) => ({
  cache: ur(r.cacheSize),
  parseClassName: pr(r),
  sortModifiers: gr(r),
  ...ar(r)
}), hr = /\s+/, xr = (r, n) => {
  const {
    parseClassName: t,
    getClassGroupId: o,
    getConflictingClassGroupIds: c,
    sortModifiers: f
  } = n, d = [], g = r.trim().split(hr);
  let p = "";
  for (let w = g.length - 1; w >= 0; w -= 1) {
    const E = g[w], {
      isExternal: R,
      modifiers: N,
      hasImportantModifier: P,
      baseClassName: j,
      maybePostfixModifierPosition: _
    } = t(E);
    if (R) {
      p = E + (p.length > 0 ? " " + p : p);
      continue;
    }
    let L = !!_, G = o(L ? j.substring(0, _) : j);
    if (!G) {
      if (!L) {
        p = E + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (G = o(j), !G) {
        p = E + (p.length > 0 ? " " + p : p);
        continue;
      }
      L = !1;
    }
    const J = f(N).join(":"), H = P ? J + Ae : J, I = H + G;
    if (d.includes(I))
      continue;
    d.push(I);
    const B = c(G, L);
    for (let u = 0; u < B.length; ++u) {
      const z = B[u];
      d.push(H + z);
    }
    p = E + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function vr() {
  let r = 0, n, t, o = "";
  for (; r < arguments.length; )
    (n = arguments[r++]) && (t = Je(n)) && (o && (o += " "), o += t);
  return o;
}
const Je = (r) => {
  if (typeof r == "string")
    return r;
  let n, t = "";
  for (let o = 0; o < r.length; o++)
    r[o] && (n = Je(r[o])) && (t && (t += " "), t += n);
  return t;
};
function wr(r, ...n) {
  let t, o, c, f = d;
  function d(p) {
    const w = n.reduce((E, R) => R(E), r());
    return t = mr(w), o = t.cache.get, c = t.cache.set, f = g, g(p);
  }
  function g(p) {
    const w = o(p);
    if (w)
      return w;
    const E = xr(p, t);
    return c(p, E), E;
  }
  return function() {
    return f(vr.apply(null, arguments));
  };
}
const C = (r) => {
  const n = (t) => t[r] || [];
  return n.isThemeGetter = !0, n;
}, He = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Xe = /^\((?:(\w[\w-]*):)?(.+)\)$/i, yr = /^\d+\/\d+$/, Er = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, kr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Cr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ar = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Sr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ie = (r) => yr.test(r), m = (r) => !!r && !Number.isNaN(Number(r)), re = (r) => !!r && Number.isInteger(Number(r)), Ye = (r) => r.endsWith("%") && m(r.slice(0, -1)), q = (r) => Er.test(r), Rr = () => !0, jr = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  kr.test(r) && !Cr.test(r)
), je = () => !1, Tr = (r) => Ar.test(r), _r = (r) => Sr.test(r), zr = (r) => !s(r) && !l(r), Mr = (r) => ce(r, Ke, je), s = (r) => He.test(r), te = (r) => ce(r, De, jr), ke = (r) => ce(r, Yr, m), Nr = (r) => ce(r, Ze, je), Pr = (r) => ce(r, Qe, _r), Or = (r) => ce(r, je, Tr), l = (r) => Xe.test(r), ve = (r) => de(r, De), Lr = (r) => de(r, Br), Gr = (r) => de(r, Ze), Ir = (r) => de(r, Ke), Vr = (r) => de(r, Qe), $r = (r) => de(r, Ur, !0), ce = (r, n, t) => {
  const o = He.exec(r);
  return o ? o[1] ? n(o[1]) : t(o[2]) : !1;
}, de = (r, n, t = !1) => {
  const o = Xe.exec(r);
  return o ? o[1] ? n(o[1]) : t : !1;
}, Ze = (r) => r === "position", Fr = /* @__PURE__ */ new Set(["image", "url"]), Qe = (r) => Fr.has(r), Wr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ke = (r) => Wr.has(r), De = (r) => r === "length", Yr = (r) => r === "number", Br = (r) => r === "family-name", Ur = (r) => r === "shadow", qr = () => {
  const r = C("color"), n = C("font"), t = C("text"), o = C("font-weight"), c = C("tracking"), f = C("leading"), d = C("breakpoint"), g = C("container"), p = C("spacing"), w = C("radius"), E = C("shadow"), R = C("inset-shadow"), N = C("drop-shadow"), P = C("blur"), j = C("perspective"), _ = C("aspect"), L = C("ease"), G = C("animate"), J = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], I = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", "contain", "none"], u = () => [l, s, p], z = () => [ie, "full", "auto", ...u()], ue = () => [re, "none", "subgrid", l, s], fe = () => ["auto", {
    span: ["full", re, l, s]
  }, l, s], X = () => [re, "auto", l, s], oe = () => ["auto", "min", "max", "fr", l, s], Z = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], V = () => ["start", "end", "center", "stretch"], M = () => ["auto", ...u()], O = () => [ie, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...u()], x = () => [r, l, s], ne = () => [Ye, te], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    w,
    l,
    s
  ], y = () => ["", m, ve, te], Q = () => ["solid", "dashed", "dotted", "double"], $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], me = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    P,
    l,
    s
  ], se = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l, s], F = () => ["none", m, l, s], K = () => ["none", m, l, s], le = () => [m, l, s], D = () => [ie, "full", ...u()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [q],
      breakpoint: [q],
      color: [Rr],
      container: [q],
      "drop-shadow": [q],
      ease: ["in", "out", "in-out"],
      font: [zr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [q],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [q],
      shadow: [q],
      spacing: ["px", m],
      text: [q],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", ie, s, l, _]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [m, s, l, g]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": J()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": J()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...H(), s, l]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: B()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": B()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": B()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: z()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": z()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": z()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: z()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: z()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: z()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: z()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: z()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: z()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [re, "auto", l, s]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ie, "full", "auto", g, ...u()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [m, ie, "auto", "initial", "none", s]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", m, l, s]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", m, l, s]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [re, "first", "last", "none", l, s]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ue()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: fe()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": X()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": X()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ue()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: fe()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": X()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": X()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": oe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": oe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: u()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": u()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": u()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Z(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...V(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...V()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Z()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...V(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...V(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Z()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...V(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...V()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: u()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: u()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: u()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: u()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: u()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: u()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: u()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: u()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: u()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: M()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: M()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: M()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: M()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: M()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: M()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: M()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: M()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: M()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": u()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": u()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: O()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [g, "screen", ...O()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          g,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...O()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          g,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...O()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...O()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...O()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...O()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, ve, te]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, l, ke]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ye, s]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Lr, s, n]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [c, l, s]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [m, "none", l, ke]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          ...u()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", l, s]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", l, s]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: x()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: x()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [m, "from-font", "auto", l, te]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: x()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [m, "auto", l, s]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: u()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l, s]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", l, s]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...H(), Gr, Nr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Ir, Mr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, re, l, s],
          radial: ["", l, s],
          conic: [re, l, s]
        }, Vr, Pr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: x()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ne()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ne()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ne()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: x()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: x()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: x()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: A()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": A()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": A()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": A()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": A()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": A()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": A()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": A()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": A()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": A()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": A()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": A()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": A()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": A()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": A()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: y()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": y()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": y()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": y()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": y()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": y()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": y()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": y()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": y()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": y()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": y()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Q(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Q(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: x()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": x()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": x()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": x()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": x()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": x()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": x()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": x()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": x()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: x()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Q(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [m, l, s]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", m, ve, te]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          E,
          $r,
          Or
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: x()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", l, s, R]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": x()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: y()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: x()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [m, te]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": x()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": y()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": x()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [m, l, s]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...$(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          l,
          s
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: me()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [m, l, s]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [m, l, s]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          N,
          l,
          s
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", m, l, s]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [m, l, s]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", m, l, s]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [m, l, s]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", m, l, s]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          l,
          s
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": me()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [m, l, s]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [m, l, s]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", m, l, s]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m, l, s]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", m, l, s]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [m, l, s]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [m, l, s]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", m, l, s]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": u()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": u()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": u()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", l, s]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [m, "initial", l, s]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", L, l, s]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [m, l, s]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", G, l, s]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [j, l, s]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": se()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: F()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": F()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": F()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": F()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: K()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": K()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": K()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": K()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: le()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": le()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": le()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [l, s, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: se()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: D()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": D()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": D()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": D()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: x()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: x()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l, s]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": u()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": u()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": u()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": u()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": u()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": u()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": u()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": u()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": u()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": u()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": u()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": u()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": u()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": u()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": u()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": u()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": u()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": u()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", l, s]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...x()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [m, ve, te, ke]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...x()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, Jr = /* @__PURE__ */ wr(qr);
function Be(...r) {
  return Jr(lr(r));
}
const Dr = ({
  content: r,
  children: n,
  position: t = "top-center",
  color: o = "dark",
  className: c,
  width: f
}) => {
  const [d, g] = tr(!1), p = Be(
    "absolute z-50 py-1 px-2 rounded-md text-sm shadow-md transition-opacity duration-200 whitespace-nowrap",
    d ? "opacity-100" : "opacity-0 pointer-events-none",
    o === "dark" ? "bg-black text-white" : "bg-white text-black border border-gray-200",
    {
      "origin-top-left": t === "top-right" || t === "bottom-right",
      "origin-top-right": t === "top-left" || t === "bottom-left",
      "origin-center": t === "top-center" || t === "bottom-center" || t === "left" || t === "right"
    },
    c
  ), w = {
    "top-left": "bottom-full left-0 mb-2",
    "top-center": "bottom-full left-1/2 -translate-x-1/2 mb-2",
    "top-right": "bottom-full right-0 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    "bottom-right": "top-full right-0 mt-2",
    "bottom-center": "top-full left-1/2 -translate-x-1/2 mt-2",
    "bottom-left": "top-full left-0 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2"
  }, E = () => {
    const R = o === "dark" ? "#000000" : "#FFFFFF", N = o === "dark" ? "#000000" : "#F1F1F1", P = {
      "top-left": "absolute top-full left-3 -mt-[2px] ",
      "top-right": "absolute top-full right-3 -mt-[2px]",
      "top-center": "absolute top-full left-1/2 -translate-x-1/2 -mt-[2px]",
      "bottom-left": "absolute bottom-full left-3 -mb-[2px]",
      "bottom-right": "absolute bottom-full right-3 -mb-[2px]",
      "bottom-center": "absolute bottom-full left-1/2 -translate-x-1/2 -mb-[2px]",
      right: "absolute right-full top-1/2 -translate-y-1/2 -mr-[2px]",
      left: "absolute left-full top-1/2 -translate-y-1/2 -ml-[2px]"
    };
    if (t.startsWith("top"))
      return /* @__PURE__ */ k.jsx("div", { className: P[t], children: Qr(R, N) });
    if (t.startsWith("bottom"))
      return /* @__PURE__ */ k.jsx("div", { className: P[t], children: Hr(R, N) });
    if (t === "right")
      return /* @__PURE__ */ k.jsx("div", { className: P.right, children: Zr(R, N) });
    if (t === "left")
      return /* @__PURE__ */ k.jsx("div", { className: P.left, children: Xr(R, N) });
  };
  return /* @__PURE__ */ k.jsxs("div", { className: "relative inline-block", children: [
    /* @__PURE__ */ k.jsx(
      "div",
      {
        onMouseEnter: () => g(!0),
        onMouseLeave: () => g(!1),
        onFocus: () => g(!0),
        onBlur: () => g(!1),
        children: n
      }
    ),
    /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: Be(
          "shadow-xsmall",
          p,
          w[t]
        ),
        style: f ? { width: f } : void 0,
        children: [
          r,
          E()
        ]
      }
    )
  ] });
}, Hr = (r, n) => /* @__PURE__ */ k.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "7",
    viewBox: "0 0 14 7",
    fill: "none",
    children: [
      /* @__PURE__ */ k.jsx(
        "path",
        {
          d: "M11 5.5L12.2071 5.5L11.3536 4.64645L8.41421 1.70711C7.63317 0.926059 6.36684 0.926057 5.58579 1.70711L2.64645 4.64645L1.79289 5.5L3 5.5L11 5.5Z",
          fill: r,
          stroke: n
        }
      ),
      /* @__PURE__ */ k.jsx(
        "rect",
        {
          x: "14",
          y: "7",
          width: "14",
          height: "2",
          rx: "1",
          transform: "rotate(-180 14 7)",
          fill: r
        }
      )
    ]
  }
), Xr = (r, n) => /* @__PURE__ */ k.jsxs(
  "svg",
  {
    width: "7",
    height: "24",
    viewBox: "0 0 7 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ k.jsx(
        "path",
        {
          d: "M1.5 8L1.5 6.79289L2.35355 7.64645L5.29289 10.5858C6.07394 11.3668 6.07394 12.6332 5.29289 13.4142L2.35355 16.3536L1.5 17.2071L1.5 16L1.5 8Z",
          fill: r,
          stroke: n
        }
      ),
      /* @__PURE__ */ k.jsx(
        "rect",
        {
          y: "19",
          width: "14",
          height: "2",
          rx: "1",
          transform: "rotate(-90 0 19)",
          fill: r
        }
      )
    ]
  }
), Zr = (r, n) => /* @__PURE__ */ k.jsxs(
  "svg",
  {
    width: "7",
    height: "24",
    viewBox: "0 0 7 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ k.jsx(
        "path",
        {
          d: "M5.5 8L5.5 6.79289L4.64645 7.64645L1.70711 10.5858C0.926059 11.3668 0.926057 12.6332 1.70711 13.4142L4.64645 16.3536L5.5 17.2071L5.5 16L5.5 8Z",
          fill: r,
          stroke: n
        }
      ),
      /* @__PURE__ */ k.jsx(
        "rect",
        {
          x: "5",
          y: "19",
          width: "14",
          height: "2",
          rx: "1",
          transform: "rotate(-90 5 19)",
          fill: r
        }
      )
    ]
  }
), Qr = (r, n) => /* @__PURE__ */ k.jsxs(
  "svg",
  {
    width: "14",
    height: "7",
    viewBox: "0 0 14 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ k.jsx(
        "path",
        {
          d: "M11 1.5L12.2071 1.5L11.3536 2.35355L8.41421 5.29289C7.63317 6.07394 6.36684 6.07394 5.58579 5.29289L2.64645 2.35355L1.79289 1.5L3 1.5L11 1.5Z",
          fill: r,
          stroke: n
        }
      ),
      /* @__PURE__ */ k.jsx(
        "rect",
        {
          x: "14",
          y: "2",
          width: "14",
          height: "2",
          rx: "1",
          transform: "rotate(-180 14 2)",
          fill: r
        }
      )
    ]
  }
);
export {
  Dr as default
};
