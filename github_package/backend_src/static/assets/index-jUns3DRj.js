function sm(o, a) {
  for (var u = 0; u < a.length; u++) {
    const c = a[u];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const f in c)
        if (f !== "default" && !(f in o)) {
          const d = Object.getOwnPropertyDescriptor(c, f);
          d &&
            Object.defineProperty(
              o,
              f,
              d.get ? d : { enumerable: !0, get: () => c[f] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(o, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) c(f);
  new MutationObserver((f) => {
    for (const d of f)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(f) {
    const d = {};
    return (
      f.integrity && (d.integrity = f.integrity),
      f.referrerPolicy && (d.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : f.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function c(f) {
    if (f.ep) return;
    f.ep = !0;
    const d = u(f);
    fetch(f.href, d);
  }
})();
function cm(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
var hu = { exports: {} },
  $r = {},
  vu = { exports: {} },
  ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fc;
function fm() {
  if (Fc) return ne;
  Fc = 1;
  var o = Symbol.for("react.element"),
    a = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    h = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    N = Symbol.iterator;
  function R(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (N && S[N]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    L = {};
  function _(S, O, ee) {
    (this.props = S),
      (this.context = O),
      (this.refs = L),
      (this.updater = ee || M);
  }
  (_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (S, O) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, S, O, "setState");
    }),
    (_.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function T() {}
  T.prototype = _.prototype;
  function V(S, O, ee) {
    (this.props = S),
      (this.context = O),
      (this.refs = L),
      (this.updater = ee || M);
  }
  var D = (V.prototype = new T());
  (D.constructor = V), z(D, _.prototype), (D.isPureReactComponent = !0);
  var Q = Array.isArray,
    te = Object.prototype.hasOwnProperty,
    ue = { current: null },
    fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function re(S, O, ee) {
    var le,
      ae = {},
      se = null,
      ve = null;
    if (O != null)
      for (le in (O.ref !== void 0 && (ve = O.ref),
      O.key !== void 0 && (se = "" + O.key),
      O))
        te.call(O, le) && !fe.hasOwnProperty(le) && (ae[le] = O[le]);
    var de = arguments.length - 2;
    if (de === 1) ae.children = ee;
    else if (1 < de) {
      for (var Ce = Array(de), tt = 0; tt < de; tt++)
        Ce[tt] = arguments[tt + 2];
      ae.children = Ce;
    }
    if (S && S.defaultProps)
      for (le in ((de = S.defaultProps), de))
        ae[le] === void 0 && (ae[le] = de[le]);
    return {
      $$typeof: o,
      type: S,
      key: se,
      ref: ve,
      props: ae,
      _owner: ue.current,
    };
  }
  function me(S, O) {
    return {
      $$typeof: o,
      type: S.type,
      key: O,
      ref: S.ref,
      props: S.props,
      _owner: S._owner,
    };
  }
  function ye(S) {
    return typeof S == "object" && S !== null && S.$$typeof === o;
  }
  function Oe(S) {
    var O = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (ee) {
        return O[ee];
      })
    );
  }
  var oe = /\/+/g;
  function Fe(S, O) {
    return typeof S == "object" && S !== null && S.key != null
      ? Oe("" + S.key)
      : O.toString(36);
  }
  function $e(S, O, ee, le, ae) {
    var se = typeof S;
    (se === "undefined" || se === "boolean") && (S = null);
    var ve = !1;
    if (S === null) ve = !0;
    else
      switch (se) {
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case o:
            case a:
              ve = !0;
          }
      }
    if (ve)
      return (
        (ve = S),
        (ae = ae(ve)),
        (S = le === "" ? "." + Fe(ve, 0) : le),
        Q(ae)
          ? ((ee = ""),
            S != null && (ee = S.replace(oe, "$&/") + "/"),
            $e(ae, O, ee, "", function (tt) {
              return tt;
            }))
          : ae != null &&
            (ye(ae) &&
              (ae = me(
                ae,
                ee +
                  (!ae.key || (ve && ve.key === ae.key)
                    ? ""
                    : ("" + ae.key).replace(oe, "$&/") + "/") +
                  S
              )),
            O.push(ae)),
        1
      );
    if (((ve = 0), (le = le === "" ? "." : le + ":"), Q(S)))
      for (var de = 0; de < S.length; de++) {
        se = S[de];
        var Ce = le + Fe(se, de);
        ve += $e(se, O, ee, Ce, ae);
      }
    else if (((Ce = R(S)), typeof Ce == "function"))
      for (S = Ce.call(S), de = 0; !(se = S.next()).done; )
        (se = se.value),
          (Ce = le + Fe(se, de++)),
          (ve += $e(se, O, ee, Ce, ae));
    else if (se === "object")
      throw (
        ((O = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (O === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : O) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ve;
  }
  function Qe(S, O, ee) {
    if (S == null) return S;
    var le = [],
      ae = 0;
    return (
      $e(S, le, "", "", function (se) {
        return O.call(ee, se, ae++);
      }),
      le
    );
  }
  function he(S) {
    if (S._status === -1) {
      var O = S._result;
      (O = O()),
        O.then(
          function (ee) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = ee));
          },
          function (ee) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = ee));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = O));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var we = { current: null },
    $ = { transition: null },
    Y = {
      ReactCurrentDispatcher: we,
      ReactCurrentBatchConfig: $,
      ReactCurrentOwner: ue,
    };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ne.Children = {
      map: Qe,
      forEach: function (S, O, ee) {
        Qe(
          S,
          function () {
            O.apply(this, arguments);
          },
          ee
        );
      },
      count: function (S) {
        var O = 0;
        return (
          Qe(S, function () {
            O++;
          }),
          O
        );
      },
      toArray: function (S) {
        return (
          Qe(S, function (O) {
            return O;
          }) || []
        );
      },
      only: function (S) {
        if (!ye(S))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return S;
      },
    }),
    (ne.Component = _),
    (ne.Fragment = u),
    (ne.Profiler = f),
    (ne.PureComponent = V),
    (ne.StrictMode = c),
    (ne.Suspense = v),
    (ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (ne.act = W),
    (ne.cloneElement = function (S, O, ee) {
      if (S == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            S +
            "."
        );
      var le = z({}, S.props),
        ae = S.key,
        se = S.ref,
        ve = S._owner;
      if (O != null) {
        if (
          (O.ref !== void 0 && ((se = O.ref), (ve = ue.current)),
          O.key !== void 0 && (ae = "" + O.key),
          S.type && S.type.defaultProps)
        )
          var de = S.type.defaultProps;
        for (Ce in O)
          te.call(O, Ce) &&
            !fe.hasOwnProperty(Ce) &&
            (le[Ce] = O[Ce] === void 0 && de !== void 0 ? de[Ce] : O[Ce]);
      }
      var Ce = arguments.length - 2;
      if (Ce === 1) le.children = ee;
      else if (1 < Ce) {
        de = Array(Ce);
        for (var tt = 0; tt < Ce; tt++) de[tt] = arguments[tt + 2];
        le.children = de;
      }
      return {
        $$typeof: o,
        type: S.type,
        key: ae,
        ref: se,
        props: le,
        _owner: ve,
      };
    }),
    (ne.createContext = function (S) {
      return (
        (S = {
          $$typeof: h,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (S.Provider = { $$typeof: d, _context: S }),
        (S.Consumer = S)
      );
    }),
    (ne.createElement = re),
    (ne.createFactory = function (S) {
      var O = re.bind(null, S);
      return (O.type = S), O;
    }),
    (ne.createRef = function () {
      return { current: null };
    }),
    (ne.forwardRef = function (S) {
      return { $$typeof: m, render: S };
    }),
    (ne.isValidElement = ye),
    (ne.lazy = function (S) {
      return { $$typeof: C, _payload: { _status: -1, _result: S }, _init: he };
    }),
    (ne.memo = function (S, O) {
      return { $$typeof: y, type: S, compare: O === void 0 ? null : O };
    }),
    (ne.startTransition = function (S) {
      var O = $.transition;
      $.transition = {};
      try {
        S();
      } finally {
        $.transition = O;
      }
    }),
    (ne.unstable_act = W),
    (ne.useCallback = function (S, O) {
      return we.current.useCallback(S, O);
    }),
    (ne.useContext = function (S) {
      return we.current.useContext(S);
    }),
    (ne.useDebugValue = function () {}),
    (ne.useDeferredValue = function (S) {
      return we.current.useDeferredValue(S);
    }),
    (ne.useEffect = function (S, O) {
      return we.current.useEffect(S, O);
    }),
    (ne.useId = function () {
      return we.current.useId();
    }),
    (ne.useImperativeHandle = function (S, O, ee) {
      return we.current.useImperativeHandle(S, O, ee);
    }),
    (ne.useInsertionEffect = function (S, O) {
      return we.current.useInsertionEffect(S, O);
    }),
    (ne.useLayoutEffect = function (S, O) {
      return we.current.useLayoutEffect(S, O);
    }),
    (ne.useMemo = function (S, O) {
      return we.current.useMemo(S, O);
    }),
    (ne.useReducer = function (S, O, ee) {
      return we.current.useReducer(S, O, ee);
    }),
    (ne.useRef = function (S) {
      return we.current.useRef(S);
    }),
    (ne.useState = function (S) {
      return we.current.useState(S);
    }),
    (ne.useSyncExternalStore = function (S, O, ee) {
      return we.current.useSyncExternalStore(S, O, ee);
    }),
    (ne.useTransition = function () {
      return we.current.useTransition();
    }),
    (ne.version = "18.3.1"),
    ne
  );
}
var jc;
function zu() {
  return jc || ((jc = 1), (vu.exports = fm())), vu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dc;
function dm() {
  if (Dc) return $r;
  Dc = 1;
  var o = zu(),
    a = Symbol.for("react.element"),
    u = Symbol.for("react.fragment"),
    c = Object.prototype.hasOwnProperty,
    f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(m, v, y) {
    var C,
      N = {},
      R = null,
      M = null;
    y !== void 0 && (R = "" + y),
      v.key !== void 0 && (R = "" + v.key),
      v.ref !== void 0 && (M = v.ref);
    for (C in v) c.call(v, C) && !d.hasOwnProperty(C) && (N[C] = v[C]);
    if (m && m.defaultProps)
      for (C in ((v = m.defaultProps), v)) N[C] === void 0 && (N[C] = v[C]);
    return {
      $$typeof: a,
      type: m,
      key: R,
      ref: M,
      props: N,
      _owner: f.current,
    };
  }
  return ($r.Fragment = u), ($r.jsx = h), ($r.jsxs = h), $r;
}
var Ac;
function pm() {
  return Ac || ((Ac = 1), (hu.exports = dm())), hu.exports;
}
var U = pm(),
  w = zu();
const sn = cm(w),
  of = sm({ __proto__: null, default: sn }, [w]);
var ul = {},
  gu = { exports: {} },
  et = {},
  yu = { exports: {} },
  wu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $c;
function mm() {
  return (
    $c ||
      (($c = 1),
      (function (o) {
        function a($, Y) {
          var W = $.length;
          $.push(Y);
          e: for (; 0 < W; ) {
            var S = (W - 1) >>> 1,
              O = $[S];
            if (0 < f(O, Y)) ($[S] = Y), ($[W] = O), (W = S);
            else break e;
          }
        }
        function u($) {
          return $.length === 0 ? null : $[0];
        }
        function c($) {
          if ($.length === 0) return null;
          var Y = $[0],
            W = $.pop();
          if (W !== Y) {
            $[0] = W;
            e: for (var S = 0, O = $.length, ee = O >>> 1; S < ee; ) {
              var le = 2 * (S + 1) - 1,
                ae = $[le],
                se = le + 1,
                ve = $[se];
              if (0 > f(ae, W))
                se < O && 0 > f(ve, ae)
                  ? (($[S] = ve), ($[se] = W), (S = se))
                  : (($[S] = ae), ($[le] = W), (S = le));
              else if (se < O && 0 > f(ve, W))
                ($[S] = ve), ($[se] = W), (S = se);
              else break e;
            }
          }
          return Y;
        }
        function f($, Y) {
          var W = $.sortIndex - Y.sortIndex;
          return W !== 0 ? W : $.id - Y.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          o.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            m = h.now();
          o.unstable_now = function () {
            return h.now() - m;
          };
        }
        var v = [],
          y = [],
          C = 1,
          N = null,
          R = 3,
          M = !1,
          z = !1,
          L = !1,
          _ = typeof setTimeout == "function" ? setTimeout : null,
          T = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function D($) {
          for (var Y = u(y); Y !== null; ) {
            if (Y.callback === null) c(y);
            else if (Y.startTime <= $)
              c(y), (Y.sortIndex = Y.expirationTime), a(v, Y);
            else break;
            Y = u(y);
          }
        }
        function Q($) {
          if (((L = !1), D($), !z))
            if (u(v) !== null) (z = !0), he(te);
            else {
              var Y = u(y);
              Y !== null && we(Q, Y.startTime - $);
            }
        }
        function te($, Y) {
          (z = !1), L && ((L = !1), T(re), (re = -1)), (M = !0);
          var W = R;
          try {
            for (
              D(Y), N = u(v);
              N !== null && (!(N.expirationTime > Y) || ($ && !Oe()));

            ) {
              var S = N.callback;
              if (typeof S == "function") {
                (N.callback = null), (R = N.priorityLevel);
                var O = S(N.expirationTime <= Y);
                (Y = o.unstable_now()),
                  typeof O == "function"
                    ? (N.callback = O)
                    : N === u(v) && c(v),
                  D(Y);
              } else c(v);
              N = u(v);
            }
            if (N !== null) var ee = !0;
            else {
              var le = u(y);
              le !== null && we(Q, le.startTime - Y), (ee = !1);
            }
            return ee;
          } finally {
            (N = null), (R = W), (M = !1);
          }
        }
        var ue = !1,
          fe = null,
          re = -1,
          me = 5,
          ye = -1;
        function Oe() {
          return !(o.unstable_now() - ye < me);
        }
        function oe() {
          if (fe !== null) {
            var $ = o.unstable_now();
            ye = $;
            var Y = !0;
            try {
              Y = fe(!0, $);
            } finally {
              Y ? Fe() : ((ue = !1), (fe = null));
            }
          } else ue = !1;
        }
        var Fe;
        if (typeof V == "function")
          Fe = function () {
            V(oe);
          };
        else if (typeof MessageChannel < "u") {
          var $e = new MessageChannel(),
            Qe = $e.port2;
          ($e.port1.onmessage = oe),
            (Fe = function () {
              Qe.postMessage(null);
            });
        } else
          Fe = function () {
            _(oe, 0);
          };
        function he($) {
          (fe = $), ue || ((ue = !0), Fe());
        }
        function we($, Y) {
          re = _(function () {
            $(o.unstable_now());
          }, Y);
        }
        (o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function ($) {
            $.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            z || M || ((z = !0), he(te));
          }),
          (o.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (me = 0 < $ ? Math.floor(1e3 / $) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return u(v);
          }),
          (o.unstable_next = function ($) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = R;
            }
            var W = R;
            R = Y;
            try {
              return $();
            } finally {
              R = W;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function ($, Y) {
            switch ($) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                $ = 3;
            }
            var W = R;
            R = $;
            try {
              return Y();
            } finally {
              R = W;
            }
          }),
          (o.unstable_scheduleCallback = function ($, Y, W) {
            var S = o.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? S + W : S))
                : (W = S),
              $)
            ) {
              case 1:
                var O = -1;
                break;
              case 2:
                O = 250;
                break;
              case 5:
                O = 1073741823;
                break;
              case 4:
                O = 1e4;
                break;
              default:
                O = 5e3;
            }
            return (
              (O = W + O),
              ($ = {
                id: C++,
                callback: Y,
                priorityLevel: $,
                startTime: W,
                expirationTime: O,
                sortIndex: -1,
              }),
              W > S
                ? (($.sortIndex = W),
                  a(y, $),
                  u(v) === null &&
                    $ === u(y) &&
                    (L ? (T(re), (re = -1)) : (L = !0), we(Q, W - S)))
                : (($.sortIndex = O), a(v, $), z || M || ((z = !0), he(te))),
              $
            );
          }),
          (o.unstable_shouldYield = Oe),
          (o.unstable_wrapCallback = function ($) {
            var Y = R;
            return function () {
              var W = R;
              R = Y;
              try {
                return $.apply(this, arguments);
              } finally {
                R = W;
              }
            };
          });
      })(wu)),
    wu
  );
}
var Uc;
function hm() {
  return Uc || ((Uc = 1), (yu.exports = mm())), yu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vc;
function vm() {
  if (Vc) return et;
  Vc = 1;
  var o = zu(),
    a = hm();
  function u(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var c = new Set(),
    f = {};
  function d(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var m = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    v = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    C = {},
    N = {};
  function R(e) {
    return v.call(N, e)
      ? !0
      : v.call(C, e)
      ? !1
      : y.test(e)
      ? (N[e] = !0)
      : ((C[e] = !0), !1);
  }
  function M(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function z(e, t, n, r) {
    if (t === null || typeof t > "u" || M(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function L(e, t, n, r, l, i, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = s);
  }
  var _ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      _[e] = new L(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      _[t] = new L(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      _[e] = new L(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      _[e] = new L(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        _[e] = new L(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      _[e] = new L(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      _[e] = new L(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      _[e] = new L(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      _[e] = new L(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var T = /[\-:]([a-z])/g;
  function V(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(T, V);
      _[t] = new L(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(T, V);
        _[t] = new L(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(T, V);
      _[t] = new L(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      _[e] = new L(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (_.xlinkHref = new L(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      _[e] = new L(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function D(e, t, n, r) {
    var l = _.hasOwnProperty(t) ? _[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (z(t, n, l, r) && (n = null),
      r || l === null
        ? R(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Q = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    te = Symbol.for("react.element"),
    ue = Symbol.for("react.portal"),
    fe = Symbol.for("react.fragment"),
    re = Symbol.for("react.strict_mode"),
    me = Symbol.for("react.profiler"),
    ye = Symbol.for("react.provider"),
    Oe = Symbol.for("react.context"),
    oe = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    $e = Symbol.for("react.suspense_list"),
    Qe = Symbol.for("react.memo"),
    he = Symbol.for("react.lazy"),
    we = Symbol.for("react.offscreen"),
    $ = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = ($ && e[$]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var W = Object.assign,
    S;
  function O(e) {
    if (S === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        S = (t && t[1]) || "";
      }
    return (
      `
` +
      S +
      e
    );
  }
  var ee = !1;
  function le(e, t) {
    if (!e || ee) return "";
    ee = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (P) {
            var r = P;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (P) {
            r = P;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (P) {
          r = P;
        }
        e();
      }
    } catch (P) {
      if (P && r && typeof P.stack == "string") {
        for (
          var l = P.stack.split(`
`),
            i = r.stack.split(`
`),
            s = l.length - 1,
            p = i.length - 1;
          1 <= s && 0 <= p && l[s] !== i[p];

        )
          p--;
        for (; 1 <= s && 0 <= p; s--, p--)
          if (l[s] !== i[p]) {
            if (s !== 1 || p !== 1)
              do
                if ((s--, p--, 0 > p || l[s] !== i[p])) {
                  var g =
                    `
` + l[s].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", e.displayName)),
                    g
                  );
                }
              while (1 <= s && 0 <= p);
            break;
          }
      }
    } finally {
      (ee = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? O(e) : "";
  }
  function ae(e) {
    switch (e.tag) {
      case 5:
        return O(e.type);
      case 16:
        return O("Lazy");
      case 13:
        return O("Suspense");
      case 19:
        return O("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = le(e.type, !1)), e;
      case 11:
        return (e = le(e.type.render, !1)), e;
      case 1:
        return (e = le(e.type, !0)), e;
      default:
        return "";
    }
  }
  function se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case fe:
        return "Fragment";
      case ue:
        return "Portal";
      case me:
        return "Profiler";
      case re:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case $e:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Oe:
          return (e.displayName || "Context") + ".Consumer";
        case ye:
          return (e._context.displayName || "Context") + ".Provider";
        case oe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Qe:
          return (
            (t = e.displayName || null), t !== null ? t : se(e.type) || "Memo"
          );
        case he:
          (t = e._payload), (e = e._init);
          try {
            return se(e(t));
          } catch {}
      }
    return null;
  }
  function ve(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return se(t);
      case 8:
        return t === re ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function de(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ce(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function tt(e) {
    var t = Ce(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (s) {
            (r = "" + s), i.call(this, s);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (s) {
            r = "" + s;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Xr(e) {
    e._valueTracker || (e._valueTracker = tt(e));
  }
  function Vu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Ce(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Jr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function kl(e, t) {
    var n = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Bu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = de(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Wu(e, t) {
    (t = t.checked), t != null && D(e, "checked", t, !1);
  }
  function Cl(e, t) {
    Wu(e, t);
    var n = de(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? El(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && El(e, t.type, de(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Hu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function El(e, t, n) {
    (t !== "number" || Jr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var er = Array.isArray;
  function En(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + de(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Rl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function bu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(u(92));
        if (er(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: de(n) };
  }
  function Qu(e, t) {
    var n = de(t.value),
      r = de(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Gu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Ku(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Pl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ku(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Zr,
    Yu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Zr = Zr || document.createElement("div"),
            Zr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Zr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function tr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var nr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    pd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(nr).forEach(function (e) {
    pd.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (nr[t] = nr[e]);
    });
  });
  function Xu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (nr.hasOwnProperty(e) && nr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Ju(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Xu(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var md = W(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Nl(e, t) {
    if (t) {
      if (md[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function _l(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var zl = null;
  function Tl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ll = null,
    Rn = null,
    Pn = null;
  function Zu(e) {
    if ((e = Er(e))) {
      if (typeof Ll != "function") throw Error(u(280));
      var t = e.stateNode;
      t && ((t = ko(t)), Ll(e.stateNode, e.type, t));
    }
  }
  function qu(e) {
    Rn ? (Pn ? Pn.push(e) : (Pn = [e])) : (Rn = e);
  }
  function ea() {
    if (Rn) {
      var e = Rn,
        t = Pn;
      if (((Pn = Rn = null), Zu(e), t)) for (e = 0; e < t.length; e++) Zu(t[e]);
    }
  }
  function ta(e, t) {
    return e(t);
  }
  function na() {}
  var Il = !1;
  function ra(e, t, n) {
    if (Il) return e(t, n);
    Il = !0;
    try {
      return ta(e, t, n);
    } finally {
      (Il = !1), (Rn !== null || Pn !== null) && (na(), ea());
    }
  }
  function rr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ko(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var Ml = !1;
  if (m)
    try {
      var or = {};
      Object.defineProperty(or, "passive", {
        get: function () {
          Ml = !0;
        },
      }),
        window.addEventListener("test", or, or),
        window.removeEventListener("test", or, or);
    } catch {
      Ml = !1;
    }
  function hd(e, t, n, r, l, i, s, p, g) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, P);
    } catch (F) {
      this.onError(F);
    }
  }
  var lr = !1,
    qr = null,
    eo = !1,
    Ol = null,
    vd = {
      onError: function (e) {
        (lr = !0), (qr = e);
      },
    };
  function gd(e, t, n, r, l, i, s, p, g) {
    (lr = !1), (qr = null), hd.apply(vd, arguments);
  }
  function yd(e, t, n, r, l, i, s, p, g) {
    if ((gd.apply(this, arguments), lr)) {
      if (lr) {
        var P = qr;
        (lr = !1), (qr = null);
      } else throw Error(u(198));
      eo || ((eo = !0), (Ol = P));
    }
  }
  function fn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function oa(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function la(e) {
    if (fn(e) !== e) throw Error(u(188));
  }
  function wd(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = fn(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return la(l), e;
          if (i === r) return la(l), t;
          i = i.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) (n = l), (r = i);
      else {
        for (var s = !1, p = l.child; p; ) {
          if (p === n) {
            (s = !0), (n = l), (r = i);
            break;
          }
          if (p === r) {
            (s = !0), (r = l), (n = i);
            break;
          }
          p = p.sibling;
        }
        if (!s) {
          for (p = i.child; p; ) {
            if (p === n) {
              (s = !0), (n = i), (r = l);
              break;
            }
            if (p === r) {
              (s = !0), (r = i), (n = l);
              break;
            }
            p = p.sibling;
          }
          if (!s) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function ia(e) {
    return (e = wd(e)), e !== null ? ua(e) : null;
  }
  function ua(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ua(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var aa = a.unstable_scheduleCallback,
    sa = a.unstable_cancelCallback,
    xd = a.unstable_shouldYield,
    Sd = a.unstable_requestPaint,
    ze = a.unstable_now,
    kd = a.unstable_getCurrentPriorityLevel,
    Fl = a.unstable_ImmediatePriority,
    ca = a.unstable_UserBlockingPriority,
    to = a.unstable_NormalPriority,
    Cd = a.unstable_LowPriority,
    fa = a.unstable_IdlePriority,
    no = null,
    kt = null;
  function Ed(e) {
    if (kt && typeof kt.onCommitFiberRoot == "function")
      try {
        kt.onCommitFiberRoot(no, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var pt = Math.clz32 ? Math.clz32 : Nd,
    Rd = Math.log,
    Pd = Math.LN2;
  function Nd(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Rd(e) / Pd) | 0)) | 0;
  }
  var ro = 64,
    oo = 4194304;
  function ir(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function lo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      s = n & 268435455;
    if (s !== 0) {
      var p = s & ~l;
      p !== 0 ? (r = ir(p)) : ((i &= s), i !== 0 && (r = ir(i)));
    } else (s = n & ~l), s !== 0 ? (r = ir(s)) : i !== 0 && (r = ir(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - pt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function _d(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zd(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var s = 31 - pt(i),
        p = 1 << s,
        g = l[s];
      g === -1
        ? ((p & n) === 0 || (p & r) !== 0) && (l[s] = _d(p, t))
        : g <= t && (e.expiredLanes |= p),
        (i &= ~p);
    }
  }
  function jl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function da() {
    var e = ro;
    return (ro <<= 1), (ro & 4194240) === 0 && (ro = 64), e;
  }
  function Dl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ur(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - pt(t)),
      (e[t] = n);
  }
  function Td(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - pt(n),
        i = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
  }
  function Al(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - pt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var pe = 0;
  function pa(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var ma,
    $l,
    ha,
    va,
    ga,
    Ul = !1,
    io = [],
    Vt = null,
    Bt = null,
    Wt = null,
    ar = new Map(),
    sr = new Map(),
    Ht = [],
    Ld =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function ya(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        Bt = null;
        break;
      case "mouseover":
      case "mouseout":
        Wt = null;
        break;
      case "pointerover":
      case "pointerout":
        ar.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        sr.delete(t.pointerId);
    }
  }
  function cr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = Er(t)), t !== null && $l(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Id(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Vt = cr(Vt, e, t, n, r, l)), !0;
      case "dragenter":
        return (Bt = cr(Bt, e, t, n, r, l)), !0;
      case "mouseover":
        return (Wt = cr(Wt, e, t, n, r, l)), !0;
      case "pointerover":
        var i = l.pointerId;
        return ar.set(i, cr(ar.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (i = l.pointerId), sr.set(i, cr(sr.get(i) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function wa(e) {
    var t = dn(e.target);
    if (t !== null) {
      var n = fn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = oa(n)), t !== null)) {
            (e.blockedOn = t),
              ga(e.priority, function () {
                ha(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function uo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (zl = r), n.target.dispatchEvent(r), (zl = null);
      } else return (t = Er(n)), t !== null && $l(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function xa(e, t, n) {
    uo(e) && n.delete(t);
  }
  function Md() {
    (Ul = !1),
      Vt !== null && uo(Vt) && (Vt = null),
      Bt !== null && uo(Bt) && (Bt = null),
      Wt !== null && uo(Wt) && (Wt = null),
      ar.forEach(xa),
      sr.forEach(xa);
  }
  function fr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ul ||
        ((Ul = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Md)));
  }
  function dr(e) {
    function t(l) {
      return fr(l, e);
    }
    if (0 < io.length) {
      fr(io[0], e);
      for (var n = 1; n < io.length; n++) {
        var r = io[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Vt !== null && fr(Vt, e),
        Bt !== null && fr(Bt, e),
        Wt !== null && fr(Wt, e),
        ar.forEach(t),
        sr.forEach(t),
        n = 0;
      n < Ht.length;
      n++
    )
      (r = Ht[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ht.length && ((n = Ht[0]), n.blockedOn === null); )
      wa(n), n.blockedOn === null && Ht.shift();
  }
  var Nn = Q.ReactCurrentBatchConfig,
    ao = !0;
  function Od(e, t, n, r) {
    var l = pe,
      i = Nn.transition;
    Nn.transition = null;
    try {
      (pe = 1), Vl(e, t, n, r);
    } finally {
      (pe = l), (Nn.transition = i);
    }
  }
  function Fd(e, t, n, r) {
    var l = pe,
      i = Nn.transition;
    Nn.transition = null;
    try {
      (pe = 4), Vl(e, t, n, r);
    } finally {
      (pe = l), (Nn.transition = i);
    }
  }
  function Vl(e, t, n, r) {
    if (ao) {
      var l = Bl(e, t, n, r);
      if (l === null) li(e, t, r, so, n), ya(e, r);
      else if (Id(l, e, t, n, r)) r.stopPropagation();
      else if ((ya(e, r), t & 4 && -1 < Ld.indexOf(e))) {
        for (; l !== null; ) {
          var i = Er(l);
          if (
            (i !== null && ma(i),
            (i = Bl(e, t, n, r)),
            i === null && li(e, t, r, so, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else li(e, t, r, null, n);
    }
  }
  var so = null;
  function Bl(e, t, n, r) {
    if (((so = null), (e = Tl(r)), (e = dn(e)), e !== null))
      if (((t = fn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = oa(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (so = e), null;
  }
  function Sa(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (kd()) {
          case Fl:
            return 1;
          case ca:
            return 4;
          case to:
          case Cd:
            return 16;
          case fa:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var bt = null,
    Wl = null,
    co = null;
  function ka() {
    if (co) return co;
    var e,
      t = Wl,
      n = t.length,
      r,
      l = "value" in bt ? bt.value : bt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === l[i - r]; r++);
    return (co = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function fo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function po() {
    return !0;
  }
  function Ca() {
    return !1;
  }
  function nt(e) {
    function t(n, r, l, i, s) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = s),
        (this.currentTarget = null);
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(i) : i[p]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? po
          : Ca),
        (this.isPropagationStopped = Ca),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = po));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = po));
        },
        persist: function () {},
        isPersistent: po,
      }),
      t
    );
  }
  var _n = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Hl = nt(_n),
    pr = W({}, _n, { view: 0, detail: 0 }),
    jd = nt(pr),
    bl,
    Ql,
    mr,
    mo = W({}, pr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Kl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== mr &&
              (mr && e.type === "mousemove"
                ? ((bl = e.screenX - mr.screenX), (Ql = e.screenY - mr.screenY))
                : (Ql = bl = 0),
              (mr = e)),
            bl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ql;
      },
    }),
    Ea = nt(mo),
    Dd = W({}, mo, { dataTransfer: 0 }),
    Ad = nt(Dd),
    $d = W({}, pr, { relatedTarget: 0 }),
    Gl = nt($d),
    Ud = W({}, _n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vd = nt(Ud),
    Bd = W({}, _n, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Wd = nt(Bd),
    Hd = W({}, _n, { data: 0 }),
    Ra = nt(Hd),
    bd = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Qd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Gd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Kd(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Gd[e])
      ? !!t[e]
      : !1;
  }
  function Kl() {
    return Kd;
  }
  var Yd = W({}, pr, {
      key: function (e) {
        if (e.key) {
          var t = bd[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = fo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Qd[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Kl,
      charCode: function (e) {
        return e.type === "keypress" ? fo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? fo(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Xd = nt(Yd),
    Jd = W({}, mo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Pa = nt(Jd),
    Zd = W({}, pr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Kl,
    }),
    qd = nt(Zd),
    ep = W({}, _n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    tp = nt(ep),
    np = W({}, mo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    rp = nt(np),
    op = [9, 13, 27, 32],
    Yl = m && "CompositionEvent" in window,
    hr = null;
  m && "documentMode" in document && (hr = document.documentMode);
  var lp = m && "TextEvent" in window && !hr,
    Na = m && (!Yl || (hr && 8 < hr && 11 >= hr)),
    _a = " ",
    za = !1;
  function Ta(e, t) {
    switch (e) {
      case "keyup":
        return op.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function La(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var zn = !1;
  function ip(e, t) {
    switch (e) {
      case "compositionend":
        return La(t);
      case "keypress":
        return t.which !== 32 ? null : ((za = !0), _a);
      case "textInput":
        return (e = t.data), e === _a && za ? null : e;
      default:
        return null;
    }
  }
  function up(e, t) {
    if (zn)
      return e === "compositionend" || (!Yl && Ta(e, t))
        ? ((e = ka()), (co = Wl = bt = null), (zn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Na && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ap = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ia(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ap[e.type] : t === "textarea";
  }
  function Ma(e, t, n, r) {
    qu(r),
      (t = wo(t, "onChange")),
      0 < t.length &&
        ((n = new Hl("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var vr = null,
    gr = null;
  function sp(e) {
    Ja(e, 0);
  }
  function ho(e) {
    var t = On(e);
    if (Vu(t)) return e;
  }
  function cp(e, t) {
    if (e === "change") return t;
  }
  var Oa = !1;
  if (m) {
    var Xl;
    if (m) {
      var Jl = "oninput" in document;
      if (!Jl) {
        var Fa = document.createElement("div");
        Fa.setAttribute("oninput", "return;"),
          (Jl = typeof Fa.oninput == "function");
      }
      Xl = Jl;
    } else Xl = !1;
    Oa = Xl && (!document.documentMode || 9 < document.documentMode);
  }
  function ja() {
    vr && (vr.detachEvent("onpropertychange", Da), (gr = vr = null));
  }
  function Da(e) {
    if (e.propertyName === "value" && ho(gr)) {
      var t = [];
      Ma(t, gr, e, Tl(e)), ra(sp, t);
    }
  }
  function fp(e, t, n) {
    e === "focusin"
      ? (ja(), (vr = t), (gr = n), vr.attachEvent("onpropertychange", Da))
      : e === "focusout" && ja();
  }
  function dp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ho(gr);
  }
  function pp(e, t) {
    if (e === "click") return ho(t);
  }
  function mp(e, t) {
    if (e === "input" || e === "change") return ho(t);
  }
  function hp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var mt = typeof Object.is == "function" ? Object.is : hp;
  function yr(e, t) {
    if (mt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!v.call(t, l) || !mt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Aa(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $a(e, t) {
    var n = Aa(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Aa(n);
    }
  }
  function Ua(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Ua(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Va() {
    for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Jr(e.document);
    }
    return t;
  }
  function Zl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function vp(e) {
    var t = Va(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ua(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Zl(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          (r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = $a(n, i));
          var s = $a(n, r);
          l &&
            s &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== s.node ||
              e.focusOffset !== s.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(s.node, s.offset))
              : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var gp = m && "documentMode" in document && 11 >= document.documentMode,
    Tn = null,
    ql = null,
    wr = null,
    ei = !1;
  function Ba(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ei ||
      Tn == null ||
      Tn !== Jr(r) ||
      ((r = Tn),
      "selectionStart" in r && Zl(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (wr && yr(wr, r)) ||
        ((wr = r),
        (r = wo(ql, "onSelect")),
        0 < r.length &&
          ((t = new Hl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Tn))));
  }
  function vo(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Ln = {
      animationend: vo("Animation", "AnimationEnd"),
      animationiteration: vo("Animation", "AnimationIteration"),
      animationstart: vo("Animation", "AnimationStart"),
      transitionend: vo("Transition", "TransitionEnd"),
    },
    ti = {},
    Wa = {};
  m &&
    ((Wa = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ln.animationend.animation,
      delete Ln.animationiteration.animation,
      delete Ln.animationstart.animation),
    "TransitionEvent" in window || delete Ln.transitionend.transition);
  function go(e) {
    if (ti[e]) return ti[e];
    if (!Ln[e]) return e;
    var t = Ln[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Wa) return (ti[e] = t[n]);
    return e;
  }
  var Ha = go("animationend"),
    ba = go("animationiteration"),
    Qa = go("animationstart"),
    Ga = go("transitionend"),
    Ka = new Map(),
    Ya =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Qt(e, t) {
    Ka.set(e, t), d(t, [e]);
  }
  for (var ni = 0; ni < Ya.length; ni++) {
    var ri = Ya[ni],
      yp = ri.toLowerCase(),
      wp = ri[0].toUpperCase() + ri.slice(1);
    Qt(yp, "on" + wp);
  }
  Qt(Ha, "onAnimationEnd"),
    Qt(ba, "onAnimationIteration"),
    Qt(Qa, "onAnimationStart"),
    Qt("dblclick", "onDoubleClick"),
    Qt("focusin", "onFocus"),
    Qt("focusout", "onBlur"),
    Qt(Ga, "onTransitionEnd"),
    h("onMouseEnter", ["mouseout", "mouseover"]),
    h("onMouseLeave", ["mouseout", "mouseover"]),
    h("onPointerEnter", ["pointerout", "pointerover"]),
    h("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var xr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    xp = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(xr)
    );
  function Xa(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), yd(r, t, void 0, e), (e.currentTarget = null);
  }
  function Ja(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var p = r[s],
              g = p.instance,
              P = p.currentTarget;
            if (((p = p.listener), g !== i && l.isPropagationStopped()))
              break e;
            Xa(l, p, P), (i = g);
          }
        else
          for (s = 0; s < r.length; s++) {
            if (
              ((p = r[s]),
              (g = p.instance),
              (P = p.currentTarget),
              (p = p.listener),
              g !== i && l.isPropagationStopped())
            )
              break e;
            Xa(l, p, P), (i = g);
          }
      }
    }
    if (eo) throw ((e = Ol), (eo = !1), (Ol = null), e);
  }
  function xe(e, t) {
    var n = t[fi];
    n === void 0 && (n = t[fi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Za(t, e, 2, !1), n.add(r));
  }
  function oi(e, t, n) {
    var r = 0;
    t && (r |= 4), Za(n, e, r, t);
  }
  var yo = "_reactListening" + Math.random().toString(36).slice(2);
  function Sr(e) {
    if (!e[yo]) {
      (e[yo] = !0),
        c.forEach(function (n) {
          n !== "selectionchange" && (xp.has(n) || oi(n, !1, e), oi(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[yo] || ((t[yo] = !0), oi("selectionchange", !1, t));
    }
  }
  function Za(e, t, n, r) {
    switch (Sa(t)) {
      case 1:
        var l = Od;
        break;
      case 4:
        l = Fd;
        break;
      default:
        l = Vl;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Ml ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function li(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var p = r.stateNode.containerInfo;
          if (p === l || (p.nodeType === 8 && p.parentNode === l)) break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var g = s.tag;
              if (
                (g === 3 || g === 4) &&
                ((g = s.stateNode.containerInfo),
                g === l || (g.nodeType === 8 && g.parentNode === l))
              )
                return;
              s = s.return;
            }
          for (; p !== null; ) {
            if (((s = dn(p)), s === null)) return;
            if (((g = s.tag), g === 5 || g === 6)) {
              r = i = s;
              continue e;
            }
            p = p.parentNode;
          }
        }
        r = r.return;
      }
    ra(function () {
      var P = i,
        F = Tl(n),
        j = [];
      e: {
        var I = Ka.get(e);
        if (I !== void 0) {
          var B = Hl,
            b = e;
          switch (e) {
            case "keypress":
              if (fo(n) === 0) break e;
            case "keydown":
            case "keyup":
              B = Xd;
              break;
            case "focusin":
              (b = "focus"), (B = Gl);
              break;
            case "focusout":
              (b = "blur"), (B = Gl);
              break;
            case "beforeblur":
            case "afterblur":
              B = Gl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = Ea;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = Ad;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = qd;
              break;
            case Ha:
            case ba:
            case Qa:
              B = Vd;
              break;
            case Ga:
              B = tp;
              break;
            case "scroll":
              B = jd;
              break;
            case "wheel":
              B = rp;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = Wd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = Pa;
          }
          var G = (t & 4) !== 0,
            Te = !G && e === "scroll",
            k = G ? (I !== null ? I + "Capture" : null) : I;
          G = [];
          for (var x = P, E; x !== null; ) {
            E = x;
            var A = E.stateNode;
            if (
              (E.tag === 5 &&
                A !== null &&
                ((E = A),
                k !== null &&
                  ((A = rr(x, k)), A != null && G.push(kr(x, A, E)))),
              Te)
            )
              break;
            x = x.return;
          }
          0 < G.length &&
            ((I = new B(I, b, null, n, F)), j.push({ event: I, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((I = e === "mouseover" || e === "pointerover"),
            (B = e === "mouseout" || e === "pointerout"),
            I &&
              n !== zl &&
              (b = n.relatedTarget || n.fromElement) &&
              (dn(b) || b[_t]))
          )
            break e;
          if (
            (B || I) &&
            ((I =
              F.window === F
                ? F
                : (I = F.ownerDocument)
                ? I.defaultView || I.parentWindow
                : window),
            B
              ? ((b = n.relatedTarget || n.toElement),
                (B = P),
                (b = b ? dn(b) : null),
                b !== null &&
                  ((Te = fn(b)), b !== Te || (b.tag !== 5 && b.tag !== 6)) &&
                  (b = null))
              : ((B = null), (b = P)),
            B !== b)
          ) {
            if (
              ((G = Ea),
              (A = "onMouseLeave"),
              (k = "onMouseEnter"),
              (x = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((G = Pa),
                (A = "onPointerLeave"),
                (k = "onPointerEnter"),
                (x = "pointer")),
              (Te = B == null ? I : On(B)),
              (E = b == null ? I : On(b)),
              (I = new G(A, x + "leave", B, n, F)),
              (I.target = Te),
              (I.relatedTarget = E),
              (A = null),
              dn(F) === P &&
                ((G = new G(k, x + "enter", b, n, F)),
                (G.target = E),
                (G.relatedTarget = Te),
                (A = G)),
              (Te = A),
              B && b)
            )
              t: {
                for (G = B, k = b, x = 0, E = G; E; E = In(E)) x++;
                for (E = 0, A = k; A; A = In(A)) E++;
                for (; 0 < x - E; ) (G = In(G)), x--;
                for (; 0 < E - x; ) (k = In(k)), E--;
                for (; x--; ) {
                  if (G === k || (k !== null && G === k.alternate)) break t;
                  (G = In(G)), (k = In(k));
                }
                G = null;
              }
            else G = null;
            B !== null && qa(j, I, B, G, !1),
              b !== null && Te !== null && qa(j, Te, b, G, !0);
          }
        }
        e: {
          if (
            ((I = P ? On(P) : window),
            (B = I.nodeName && I.nodeName.toLowerCase()),
            B === "select" || (B === "input" && I.type === "file"))
          )
            var K = cp;
          else if (Ia(I))
            if (Oa) K = mp;
            else {
              K = dp;
              var X = fp;
            }
          else
            (B = I.nodeName) &&
              B.toLowerCase() === "input" &&
              (I.type === "checkbox" || I.type === "radio") &&
              (K = pp);
          if (K && (K = K(e, P))) {
            Ma(j, K, n, F);
            break e;
          }
          X && X(e, I, P),
            e === "focusout" &&
              (X = I._wrapperState) &&
              X.controlled &&
              I.type === "number" &&
              El(I, "number", I.value);
        }
        switch (((X = P ? On(P) : window), e)) {
          case "focusin":
            (Ia(X) || X.contentEditable === "true") &&
              ((Tn = X), (ql = P), (wr = null));
            break;
          case "focusout":
            wr = ql = Tn = null;
            break;
          case "mousedown":
            ei = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ei = !1), Ba(j, n, F);
            break;
          case "selectionchange":
            if (gp) break;
          case "keydown":
          case "keyup":
            Ba(j, n, F);
        }
        var J;
        if (Yl)
          e: {
            switch (e) {
              case "compositionstart":
                var Z = "onCompositionStart";
                break e;
              case "compositionend":
                Z = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Z = "onCompositionUpdate";
                break e;
            }
            Z = void 0;
          }
        else
          zn
            ? Ta(e, n) && (Z = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Z = "onCompositionStart");
        Z &&
          (Na &&
            n.locale !== "ko" &&
            (zn || Z !== "onCompositionStart"
              ? Z === "onCompositionEnd" && zn && (J = ka())
              : ((bt = F),
                (Wl = "value" in bt ? bt.value : bt.textContent),
                (zn = !0))),
          (X = wo(P, Z)),
          0 < X.length &&
            ((Z = new Ra(Z, e, null, n, F)),
            j.push({ event: Z, listeners: X }),
            J ? (Z.data = J) : ((J = La(n)), J !== null && (Z.data = J)))),
          (J = lp ? ip(e, n) : up(e, n)) &&
            ((P = wo(P, "onBeforeInput")),
            0 < P.length &&
              ((F = new Ra("onBeforeInput", "beforeinput", null, n, F)),
              j.push({ event: F, listeners: P }),
              (F.data = J)));
      }
      Ja(j, t);
    });
  }
  function kr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function wo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = rr(e, n)),
        i != null && r.unshift(kr(e, i, l)),
        (i = rr(e, t)),
        i != null && r.push(kr(e, i, l))),
        (e = e.return);
    }
    return r;
  }
  function In(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function qa(e, t, n, r, l) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
      var p = n,
        g = p.alternate,
        P = p.stateNode;
      if (g !== null && g === r) break;
      p.tag === 5 &&
        P !== null &&
        ((p = P),
        l
          ? ((g = rr(n, i)), g != null && s.unshift(kr(n, g, p)))
          : l || ((g = rr(n, i)), g != null && s.push(kr(n, g, p)))),
        (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Sp = /\r\n?/g,
    kp = /\u0000|\uFFFD/g;
  function es(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Sp,
        `
`
      )
      .replace(kp, "");
  }
  function xo(e, t, n) {
    if (((t = es(t)), es(e) !== t && n)) throw Error(u(425));
  }
  function So() {}
  var ii = null,
    ui = null;
  function ai(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var si = typeof setTimeout == "function" ? setTimeout : void 0,
    Cp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ts = typeof Promise == "function" ? Promise : void 0,
    Ep =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ts < "u"
        ? function (e) {
            return ts.resolve(null).then(e).catch(Rp);
          }
        : si;
  function Rp(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ci(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), dr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    dr(t);
  }
  function Gt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ns(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Mn = Math.random().toString(36).slice(2),
    Ct = "__reactFiber$" + Mn,
    Cr = "__reactProps$" + Mn,
    _t = "__reactContainer$" + Mn,
    fi = "__reactEvents$" + Mn,
    Pp = "__reactListeners$" + Mn,
    Np = "__reactHandles$" + Mn;
  function dn(e) {
    var t = e[Ct];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[_t] || n[Ct])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ns(e); e !== null; ) {
            if ((n = e[Ct])) return n;
            e = ns(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Er(e) {
    return (
      (e = e[Ct] || e[_t]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function On(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function ko(e) {
    return e[Cr] || null;
  }
  var di = [],
    Fn = -1;
  function Kt(e) {
    return { current: e };
  }
  function Se(e) {
    0 > Fn || ((e.current = di[Fn]), (di[Fn] = null), Fn--);
  }
  function ge(e, t) {
    Fn++, (di[Fn] = e.current), (e.current = t);
  }
  var Yt = {},
    Be = Kt(Yt),
    Ye = Kt(!1),
    pn = Yt;
  function jn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Yt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Xe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Co() {
    Se(Ye), Se(Be);
  }
  function rs(e, t, n) {
    if (Be.current !== Yt) throw Error(u(168));
    ge(Be, t), ge(Ye, n);
  }
  function os(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(u(108, ve(e) || "Unknown", l));
    return W({}, n, r);
  }
  function Eo(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Yt),
      (pn = Be.current),
      ge(Be, e),
      ge(Ye, Ye.current),
      !0
    );
  }
  function ls(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n
      ? ((e = os(e, t, pn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Se(Ye),
        Se(Be),
        ge(Be, e))
      : Se(Ye),
      ge(Ye, n);
  }
  var zt = null,
    Ro = !1,
    pi = !1;
  function is(e) {
    zt === null ? (zt = [e]) : zt.push(e);
  }
  function _p(e) {
    (Ro = !0), is(e);
  }
  function Xt() {
    if (!pi && zt !== null) {
      pi = !0;
      var e = 0,
        t = pe;
      try {
        var n = zt;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (zt = null), (Ro = !1);
      } catch (l) {
        throw (zt !== null && (zt = zt.slice(e + 1)), aa(Fl, Xt), l);
      } finally {
        (pe = t), (pi = !1);
      }
    }
    return null;
  }
  var Dn = [],
    An = 0,
    Po = null,
    No = 0,
    ut = [],
    at = 0,
    mn = null,
    Tt = 1,
    Lt = "";
  function hn(e, t) {
    (Dn[An++] = No), (Dn[An++] = Po), (Po = e), (No = t);
  }
  function us(e, t, n) {
    (ut[at++] = Tt), (ut[at++] = Lt), (ut[at++] = mn), (mn = e);
    var r = Tt;
    e = Lt;
    var l = 32 - pt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - pt(t) + l;
    if (30 < i) {
      var s = l - (l % 5);
      (i = (r & ((1 << s) - 1)).toString(32)),
        (r >>= s),
        (l -= s),
        (Tt = (1 << (32 - pt(t) + l)) | (n << l) | r),
        (Lt = i + e);
    } else (Tt = (1 << i) | (n << l) | r), (Lt = e);
  }
  function mi(e) {
    e.return !== null && (hn(e, 1), us(e, 1, 0));
  }
  function hi(e) {
    for (; e === Po; )
      (Po = Dn[--An]), (Dn[An] = null), (No = Dn[--An]), (Dn[An] = null);
    for (; e === mn; )
      (mn = ut[--at]),
        (ut[at] = null),
        (Lt = ut[--at]),
        (ut[at] = null),
        (Tt = ut[--at]),
        (ut[at] = null);
  }
  var rt = null,
    ot = null,
    Ee = !1,
    ht = null;
  function as(e, t) {
    var n = dt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function ss(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (rt = e), (ot = Gt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (rt = e), (ot = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = mn !== null ? { id: Tt, overflow: Lt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = dt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (rt = e),
              (ot = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function vi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function gi(e) {
    if (Ee) {
      var t = ot;
      if (t) {
        var n = t;
        if (!ss(e, t)) {
          if (vi(e)) throw Error(u(418));
          t = Gt(n.nextSibling);
          var r = rt;
          t && ss(e, t)
            ? as(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (rt = e));
        }
      } else {
        if (vi(e)) throw Error(u(418));
        (e.flags = (e.flags & -4097) | 2), (Ee = !1), (rt = e);
      }
    }
  }
  function cs(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    rt = e;
  }
  function _o(e) {
    if (e !== rt) return !1;
    if (!Ee) return cs(e), (Ee = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ai(e.type, e.memoizedProps))),
      t && (t = ot))
    ) {
      if (vi(e)) throw (fs(), Error(u(418)));
      for (; t; ) as(e, t), (t = Gt(t.nextSibling));
    }
    if ((cs(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ot = Gt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ot = null;
      }
    } else ot = rt ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function fs() {
    for (var e = ot; e; ) e = Gt(e.nextSibling);
  }
  function $n() {
    (ot = rt = null), (Ee = !1);
  }
  function yi(e) {
    ht === null ? (ht = [e]) : ht.push(e);
  }
  var zp = Q.ReactCurrentBatchConfig;
  function Rr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (s) {
              var p = l.refs;
              s === null ? delete p[i] : (p[i] = s);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function zo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        u(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function ds(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ps(e) {
    function t(k, x) {
      if (e) {
        var E = k.deletions;
        E === null ? ((k.deletions = [x]), (k.flags |= 16)) : E.push(x);
      }
    }
    function n(k, x) {
      if (!e) return null;
      for (; x !== null; ) t(k, x), (x = x.sibling);
      return null;
    }
    function r(k, x) {
      for (k = new Map(); x !== null; )
        x.key !== null ? k.set(x.key, x) : k.set(x.index, x), (x = x.sibling);
      return k;
    }
    function l(k, x) {
      return (k = on(k, x)), (k.index = 0), (k.sibling = null), k;
    }
    function i(k, x, E) {
      return (
        (k.index = E),
        e
          ? ((E = k.alternate),
            E !== null
              ? ((E = E.index), E < x ? ((k.flags |= 2), x) : E)
              : ((k.flags |= 2), x))
          : ((k.flags |= 1048576), x)
      );
    }
    function s(k) {
      return e && k.alternate === null && (k.flags |= 2), k;
    }
    function p(k, x, E, A) {
      return x === null || x.tag !== 6
        ? ((x = su(E, k.mode, A)), (x.return = k), x)
        : ((x = l(x, E)), (x.return = k), x);
    }
    function g(k, x, E, A) {
      var K = E.type;
      return K === fe
        ? F(k, x, E.props.children, A, E.key)
        : x !== null &&
          (x.elementType === K ||
            (typeof K == "object" &&
              K !== null &&
              K.$$typeof === he &&
              ds(K) === x.type))
        ? ((A = l(x, E.props)), (A.ref = Rr(k, x, E)), (A.return = k), A)
        : ((A = qo(E.type, E.key, E.props, null, k.mode, A)),
          (A.ref = Rr(k, x, E)),
          (A.return = k),
          A);
    }
    function P(k, x, E, A) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== E.containerInfo ||
        x.stateNode.implementation !== E.implementation
        ? ((x = cu(E, k.mode, A)), (x.return = k), x)
        : ((x = l(x, E.children || [])), (x.return = k), x);
    }
    function F(k, x, E, A, K) {
      return x === null || x.tag !== 7
        ? ((x = Cn(E, k.mode, A, K)), (x.return = k), x)
        : ((x = l(x, E)), (x.return = k), x);
    }
    function j(k, x, E) {
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return (x = su("" + x, k.mode, E)), (x.return = k), x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case te:
            return (
              (E = qo(x.type, x.key, x.props, null, k.mode, E)),
              (E.ref = Rr(k, null, x)),
              (E.return = k),
              E
            );
          case ue:
            return (x = cu(x, k.mode, E)), (x.return = k), x;
          case he:
            var A = x._init;
            return j(k, A(x._payload), E);
        }
        if (er(x) || Y(x))
          return (x = Cn(x, k.mode, E, null)), (x.return = k), x;
        zo(k, x);
      }
      return null;
    }
    function I(k, x, E, A) {
      var K = x !== null ? x.key : null;
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return K !== null ? null : p(k, x, "" + E, A);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case te:
            return E.key === K ? g(k, x, E, A) : null;
          case ue:
            return E.key === K ? P(k, x, E, A) : null;
          case he:
            return (K = E._init), I(k, x, K(E._payload), A);
        }
        if (er(E) || Y(E)) return K !== null ? null : F(k, x, E, A, null);
        zo(k, E);
      }
      return null;
    }
    function B(k, x, E, A, K) {
      if ((typeof A == "string" && A !== "") || typeof A == "number")
        return (k = k.get(E) || null), p(x, k, "" + A, K);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case te:
            return (
              (k = k.get(A.key === null ? E : A.key) || null), g(x, k, A, K)
            );
          case ue:
            return (
              (k = k.get(A.key === null ? E : A.key) || null), P(x, k, A, K)
            );
          case he:
            var X = A._init;
            return B(k, x, E, X(A._payload), K);
        }
        if (er(A) || Y(A)) return (k = k.get(E) || null), F(x, k, A, K, null);
        zo(x, A);
      }
      return null;
    }
    function b(k, x, E, A) {
      for (
        var K = null, X = null, J = x, Z = (x = 0), Ae = null;
        J !== null && Z < E.length;
        Z++
      ) {
        J.index > Z ? ((Ae = J), (J = null)) : (Ae = J.sibling);
        var ce = I(k, J, E[Z], A);
        if (ce === null) {
          J === null && (J = Ae);
          break;
        }
        e && J && ce.alternate === null && t(k, J),
          (x = i(ce, x, Z)),
          X === null ? (K = ce) : (X.sibling = ce),
          (X = ce),
          (J = Ae);
      }
      if (Z === E.length) return n(k, J), Ee && hn(k, Z), K;
      if (J === null) {
        for (; Z < E.length; Z++)
          (J = j(k, E[Z], A)),
            J !== null &&
              ((x = i(J, x, Z)),
              X === null ? (K = J) : (X.sibling = J),
              (X = J));
        return Ee && hn(k, Z), K;
      }
      for (J = r(k, J); Z < E.length; Z++)
        (Ae = B(J, k, Z, E[Z], A)),
          Ae !== null &&
            (e &&
              Ae.alternate !== null &&
              J.delete(Ae.key === null ? Z : Ae.key),
            (x = i(Ae, x, Z)),
            X === null ? (K = Ae) : (X.sibling = Ae),
            (X = Ae));
      return (
        e &&
          J.forEach(function (ln) {
            return t(k, ln);
          }),
        Ee && hn(k, Z),
        K
      );
    }
    function G(k, x, E, A) {
      var K = Y(E);
      if (typeof K != "function") throw Error(u(150));
      if (((E = K.call(E)), E == null)) throw Error(u(151));
      for (
        var X = (K = null), J = x, Z = (x = 0), Ae = null, ce = E.next();
        J !== null && !ce.done;
        Z++, ce = E.next()
      ) {
        J.index > Z ? ((Ae = J), (J = null)) : (Ae = J.sibling);
        var ln = I(k, J, ce.value, A);
        if (ln === null) {
          J === null && (J = Ae);
          break;
        }
        e && J && ln.alternate === null && t(k, J),
          (x = i(ln, x, Z)),
          X === null ? (K = ln) : (X.sibling = ln),
          (X = ln),
          (J = Ae);
      }
      if (ce.done) return n(k, J), Ee && hn(k, Z), K;
      if (J === null) {
        for (; !ce.done; Z++, ce = E.next())
          (ce = j(k, ce.value, A)),
            ce !== null &&
              ((x = i(ce, x, Z)),
              X === null ? (K = ce) : (X.sibling = ce),
              (X = ce));
        return Ee && hn(k, Z), K;
      }
      for (J = r(k, J); !ce.done; Z++, ce = E.next())
        (ce = B(J, k, Z, ce.value, A)),
          ce !== null &&
            (e &&
              ce.alternate !== null &&
              J.delete(ce.key === null ? Z : ce.key),
            (x = i(ce, x, Z)),
            X === null ? (K = ce) : (X.sibling = ce),
            (X = ce));
      return (
        e &&
          J.forEach(function (am) {
            return t(k, am);
          }),
        Ee && hn(k, Z),
        K
      );
    }
    function Te(k, x, E, A) {
      if (
        (typeof E == "object" &&
          E !== null &&
          E.type === fe &&
          E.key === null &&
          (E = E.props.children),
        typeof E == "object" && E !== null)
      ) {
        switch (E.$$typeof) {
          case te:
            e: {
              for (var K = E.key, X = x; X !== null; ) {
                if (X.key === K) {
                  if (((K = E.type), K === fe)) {
                    if (X.tag === 7) {
                      n(k, X.sibling),
                        (x = l(X, E.props.children)),
                        (x.return = k),
                        (k = x);
                      break e;
                    }
                  } else if (
                    X.elementType === K ||
                    (typeof K == "object" &&
                      K !== null &&
                      K.$$typeof === he &&
                      ds(K) === X.type)
                  ) {
                    n(k, X.sibling),
                      (x = l(X, E.props)),
                      (x.ref = Rr(k, X, E)),
                      (x.return = k),
                      (k = x);
                    break e;
                  }
                  n(k, X);
                  break;
                } else t(k, X);
                X = X.sibling;
              }
              E.type === fe
                ? ((x = Cn(E.props.children, k.mode, A, E.key)),
                  (x.return = k),
                  (k = x))
                : ((A = qo(E.type, E.key, E.props, null, k.mode, A)),
                  (A.ref = Rr(k, x, E)),
                  (A.return = k),
                  (k = A));
            }
            return s(k);
          case ue:
            e: {
              for (X = E.key; x !== null; ) {
                if (x.key === X)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === E.containerInfo &&
                    x.stateNode.implementation === E.implementation
                  ) {
                    n(k, x.sibling),
                      (x = l(x, E.children || [])),
                      (x.return = k),
                      (k = x);
                    break e;
                  } else {
                    n(k, x);
                    break;
                  }
                else t(k, x);
                x = x.sibling;
              }
              (x = cu(E, k.mode, A)), (x.return = k), (k = x);
            }
            return s(k);
          case he:
            return (X = E._init), Te(k, x, X(E._payload), A);
        }
        if (er(E)) return b(k, x, E, A);
        if (Y(E)) return G(k, x, E, A);
        zo(k, E);
      }
      return (typeof E == "string" && E !== "") || typeof E == "number"
        ? ((E = "" + E),
          x !== null && x.tag === 6
            ? (n(k, x.sibling), (x = l(x, E)), (x.return = k), (k = x))
            : (n(k, x), (x = su(E, k.mode, A)), (x.return = k), (k = x)),
          s(k))
        : n(k, x);
    }
    return Te;
  }
  var Un = ps(!0),
    ms = ps(!1),
    To = Kt(null),
    Lo = null,
    Vn = null,
    wi = null;
  function xi() {
    wi = Vn = Lo = null;
  }
  function Si(e) {
    var t = To.current;
    Se(To), (e._currentValue = t);
  }
  function ki(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Bn(e, t) {
    (Lo = e),
      (wi = Vn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Je = !0), (e.firstContext = null));
  }
  function st(e) {
    var t = e._currentValue;
    if (wi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
        if (Lo === null) throw Error(u(308));
        (Vn = e), (Lo.dependencies = { lanes: 0, firstContext: e });
      } else Vn = Vn.next = e;
    return t;
  }
  var vn = null;
  function Ci(e) {
    vn === null ? (vn = [e]) : vn.push(e);
  }
  function hs(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Ci(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      It(e, r)
    );
  }
  function It(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Jt = !1;
  function Ei(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function vs(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Mt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Zt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (ie & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        It(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Ci(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      It(e, n)
    );
  }
  function Io(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n);
    }
  }
  function gs(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var s = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (l = i = s) : (i = i.next = s), (n = n.next);
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Mo(e, t, n, r) {
    var l = e.updateQueue;
    Jt = !1;
    var i = l.firstBaseUpdate,
      s = l.lastBaseUpdate,
      p = l.shared.pending;
    if (p !== null) {
      l.shared.pending = null;
      var g = p,
        P = g.next;
      (g.next = null), s === null ? (i = P) : (s.next = P), (s = g);
      var F = e.alternate;
      F !== null &&
        ((F = F.updateQueue),
        (p = F.lastBaseUpdate),
        p !== s &&
          (p === null ? (F.firstBaseUpdate = P) : (p.next = P),
          (F.lastBaseUpdate = g)));
    }
    if (i !== null) {
      var j = l.baseState;
      (s = 0), (F = P = g = null), (p = i);
      do {
        var I = p.lane,
          B = p.eventTime;
        if ((r & I) === I) {
          F !== null &&
            (F = F.next =
              {
                eventTime: B,
                lane: 0,
                tag: p.tag,
                payload: p.payload,
                callback: p.callback,
                next: null,
              });
          e: {
            var b = e,
              G = p;
            switch (((I = t), (B = n), G.tag)) {
              case 1:
                if (((b = G.payload), typeof b == "function")) {
                  j = b.call(B, j, I);
                  break e;
                }
                j = b;
                break e;
              case 3:
                b.flags = (b.flags & -65537) | 128;
              case 0:
                if (
                  ((b = G.payload),
                  (I = typeof b == "function" ? b.call(B, j, I) : b),
                  I == null)
                )
                  break e;
                j = W({}, j, I);
                break e;
              case 2:
                Jt = !0;
            }
          }
          p.callback !== null &&
            p.lane !== 0 &&
            ((e.flags |= 64),
            (I = l.effects),
            I === null ? (l.effects = [p]) : I.push(p));
        } else
          (B = {
            eventTime: B,
            lane: I,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            F === null ? ((P = F = B), (g = j)) : (F = F.next = B),
            (s |= I);
        if (((p = p.next), p === null)) {
          if (((p = l.shared.pending), p === null)) break;
          (I = p),
            (p = I.next),
            (I.next = null),
            (l.lastBaseUpdate = I),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (F === null && (g = j),
        (l.baseState = g),
        (l.firstBaseUpdate = P),
        (l.lastBaseUpdate = F),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (s |= l.lane), (l = l.next);
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      (wn |= s), (e.lanes = s), (e.memoizedState = j);
    }
  }
  function ys(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(u(191, l));
          l.call(r);
        }
      }
  }
  var Pr = {},
    Et = Kt(Pr),
    Nr = Kt(Pr),
    _r = Kt(Pr);
  function gn(e) {
    if (e === Pr) throw Error(u(174));
    return e;
  }
  function Ri(e, t) {
    switch ((ge(_r, t), ge(Nr, e), ge(Et, Pr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Pl(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Pl(t, e));
    }
    Se(Et), ge(Et, t);
  }
  function Wn() {
    Se(Et), Se(Nr), Se(_r);
  }
  function ws(e) {
    gn(_r.current);
    var t = gn(Et.current),
      n = Pl(t, e.type);
    t !== n && (ge(Nr, e), ge(Et, n));
  }
  function Pi(e) {
    Nr.current === e && (Se(Et), Se(Nr));
  }
  var Pe = Kt(0);
  function Oo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Ni = [];
  function _i() {
    for (var e = 0; e < Ni.length; e++)
      Ni[e]._workInProgressVersionPrimary = null;
    Ni.length = 0;
  }
  var Fo = Q.ReactCurrentDispatcher,
    zi = Q.ReactCurrentBatchConfig,
    yn = 0,
    Ne = null,
    Ie = null,
    je = null,
    jo = !1,
    zr = !1,
    Tr = 0,
    Tp = 0;
  function We() {
    throw Error(u(321));
  }
  function Ti(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!mt(e[n], t[n])) return !1;
    return !0;
  }
  function Li(e, t, n, r, l, i) {
    if (
      ((yn = i),
      (Ne = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Fo.current = e === null || e.memoizedState === null ? Op : Fp),
      (e = n(r, l)),
      zr)
    ) {
      i = 0;
      do {
        if (((zr = !1), (Tr = 0), 25 <= i)) throw Error(u(301));
        (i += 1),
          (je = Ie = null),
          (t.updateQueue = null),
          (Fo.current = jp),
          (e = n(r, l));
      } while (zr);
    }
    if (
      ((Fo.current = $o),
      (t = Ie !== null && Ie.next !== null),
      (yn = 0),
      (je = Ie = Ne = null),
      (jo = !1),
      t)
    )
      throw Error(u(300));
    return e;
  }
  function Ii() {
    var e = Tr !== 0;
    return (Tr = 0), e;
  }
  function Rt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return je === null ? (Ne.memoizedState = je = e) : (je = je.next = e), je;
  }
  function ct() {
    if (Ie === null) {
      var e = Ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ie.next;
    var t = je === null ? Ne.memoizedState : je.next;
    if (t !== null) (je = t), (Ie = e);
    else {
      if (e === null) throw Error(u(310));
      (Ie = e),
        (e = {
          memoizedState: Ie.memoizedState,
          baseState: Ie.baseState,
          baseQueue: Ie.baseQueue,
          queue: Ie.queue,
          next: null,
        }),
        je === null ? (Ne.memoizedState = je = e) : (je = je.next = e);
    }
    return je;
  }
  function Lr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Mi(e) {
    var t = ct(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = Ie,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var s = l.next;
        (l.next = i.next), (i.next = s);
      }
      (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
      (i = l.next), (r = r.baseState);
      var p = (s = null),
        g = null,
        P = i;
      do {
        var F = P.lane;
        if ((yn & F) === F)
          g !== null &&
            (g = g.next =
              {
                lane: 0,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null,
              }),
            (r = P.hasEagerState ? P.eagerState : e(r, P.action));
        else {
          var j = {
            lane: F,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          };
          g === null ? ((p = g = j), (s = r)) : (g = g.next = j),
            (Ne.lanes |= F),
            (wn |= F);
        }
        P = P.next;
      } while (P !== null && P !== i);
      g === null ? (s = r) : (g.next = p),
        mt(r, t.memoizedState) || (Je = !0),
        (t.memoizedState = r),
        (t.baseState = s),
        (t.baseQueue = g),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (i = l.lane), (Ne.lanes |= i), (wn |= i), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Oi(e) {
    var t = ct(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var s = (l = l.next);
      do (i = e(i, s.action)), (s = s.next);
      while (s !== l);
      mt(i, t.memoizedState) || (Je = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function xs() {}
  function Ss(e, t) {
    var n = Ne,
      r = ct(),
      l = t(),
      i = !mt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Je = !0)),
      (r = r.queue),
      Fi(Es.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (je !== null && je.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Ir(9, Cs.bind(null, n, r, l, t), void 0, null),
        De === null)
      )
        throw Error(u(349));
      (yn & 30) !== 0 || ks(n, t, l);
    }
    return l;
  }
  function ks(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ne.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Cs(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Rs(t) && Ps(e);
  }
  function Es(e, t, n) {
    return n(function () {
      Rs(t) && Ps(e);
    });
  }
  function Rs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mt(e, n);
    } catch {
      return !0;
    }
  }
  function Ps(e) {
    var t = It(e, 1);
    t !== null && wt(t, e, 1, -1);
  }
  function Ns(e) {
    var t = Rt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Lr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Mp.bind(null, Ne, e)),
      [t.memoizedState, e]
    );
  }
  function Ir(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ne.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function _s() {
    return ct().memoizedState;
  }
  function Do(e, t, n, r) {
    var l = Rt();
    (Ne.flags |= e),
      (l.memoizedState = Ir(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Ao(e, t, n, r) {
    var l = ct();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ie !== null) {
      var s = Ie.memoizedState;
      if (((i = s.destroy), r !== null && Ti(r, s.deps))) {
        l.memoizedState = Ir(t, n, i, r);
        return;
      }
    }
    (Ne.flags |= e), (l.memoizedState = Ir(1 | t, n, i, r));
  }
  function zs(e, t) {
    return Do(8390656, 8, e, t);
  }
  function Fi(e, t) {
    return Ao(2048, 8, e, t);
  }
  function Ts(e, t) {
    return Ao(4, 2, e, t);
  }
  function Ls(e, t) {
    return Ao(4, 4, e, t);
  }
  function Is(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ms(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Ao(4, 4, Is.bind(null, t, e), n)
    );
  }
  function ji() {}
  function Os(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ti(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Fs(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ti(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function js(e, t, n) {
    return (yn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = n))
      : (mt(n, t) ||
          ((n = da()), (Ne.lanes |= n), (wn |= n), (e.baseState = !0)),
        t);
  }
  function Lp(e, t) {
    var n = pe;
    (pe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = zi.transition;
    zi.transition = {};
    try {
      e(!1), t();
    } finally {
      (pe = n), (zi.transition = r);
    }
  }
  function Ds() {
    return ct().memoizedState;
  }
  function Ip(e, t, n) {
    var r = nn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      As(e))
    )
      $s(t, n);
    else if (((n = hs(e, t, n, r)), n !== null)) {
      var l = Ke();
      wt(n, e, r, l), Us(n, t, r);
    }
  }
  function Mp(e, t, n) {
    var r = nn(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (As(e)) $s(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var s = t.lastRenderedState,
            p = i(s, n);
          if (((l.hasEagerState = !0), (l.eagerState = p), mt(p, s))) {
            var g = t.interleaved;
            g === null
              ? ((l.next = l), Ci(t))
              : ((l.next = g.next), (g.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = hs(e, t, l, r)),
        n !== null && ((l = Ke()), wt(n, e, r, l), Us(n, t, r));
    }
  }
  function As(e) {
    var t = e.alternate;
    return e === Ne || (t !== null && t === Ne);
  }
  function $s(e, t) {
    zr = jo = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Us(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n);
    }
  }
  var $o = {
      readContext: st,
      useCallback: We,
      useContext: We,
      useEffect: We,
      useImperativeHandle: We,
      useInsertionEffect: We,
      useLayoutEffect: We,
      useMemo: We,
      useReducer: We,
      useRef: We,
      useState: We,
      useDebugValue: We,
      useDeferredValue: We,
      useTransition: We,
      useMutableSource: We,
      useSyncExternalStore: We,
      useId: We,
      unstable_isNewReconciler: !1,
    },
    Op = {
      readContext: st,
      useCallback: function (e, t) {
        return (Rt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: st,
      useEffect: zs,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Do(4194308, 4, Is.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Do(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Do(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Rt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Rt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Ip.bind(null, Ne, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Rt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Ns,
      useDebugValue: ji,
      useDeferredValue: function (e) {
        return (Rt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ns(!1),
          t = e[0];
        return (e = Lp.bind(null, e[1])), (Rt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ne,
          l = Rt();
        if (Ee) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = t()), De === null)) throw Error(u(349));
          (yn & 30) !== 0 || ks(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          zs(Es.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          Ir(9, Cs.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Rt(),
          t = De.identifierPrefix;
        if (Ee) {
          var n = Lt,
            r = Tt;
          (n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Tr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Tp++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Fp = {
      readContext: st,
      useCallback: Os,
      useContext: st,
      useEffect: Fi,
      useImperativeHandle: Ms,
      useInsertionEffect: Ts,
      useLayoutEffect: Ls,
      useMemo: Fs,
      useReducer: Mi,
      useRef: _s,
      useState: function () {
        return Mi(Lr);
      },
      useDebugValue: ji,
      useDeferredValue: function (e) {
        var t = ct();
        return js(t, Ie.memoizedState, e);
      },
      useTransition: function () {
        var e = Mi(Lr)[0],
          t = ct().memoizedState;
        return [e, t];
      },
      useMutableSource: xs,
      useSyncExternalStore: Ss,
      useId: Ds,
      unstable_isNewReconciler: !1,
    },
    jp = {
      readContext: st,
      useCallback: Os,
      useContext: st,
      useEffect: Fi,
      useImperativeHandle: Ms,
      useInsertionEffect: Ts,
      useLayoutEffect: Ls,
      useMemo: Fs,
      useReducer: Oi,
      useRef: _s,
      useState: function () {
        return Oi(Lr);
      },
      useDebugValue: ji,
      useDeferredValue: function (e) {
        var t = ct();
        return Ie === null ? (t.memoizedState = e) : js(t, Ie.memoizedState, e);
      },
      useTransition: function () {
        var e = Oi(Lr)[0],
          t = ct().memoizedState;
        return [e, t];
      },
      useMutableSource: xs,
      useSyncExternalStore: Ss,
      useId: Ds,
      unstable_isNewReconciler: !1,
    };
  function vt(e, t) {
    if (e && e.defaultProps) {
      (t = W({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Di(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : W({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Uo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? fn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ke(),
        l = nn(e),
        i = Mt(r, l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = Zt(e, i, l)),
        t !== null && (wt(t, e, l, r), Io(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ke(),
        l = nn(e),
        i = Mt(r, l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Zt(e, i, l)),
        t !== null && (wt(t, e, l, r), Io(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ke(),
        r = nn(e),
        l = Mt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Zt(e, l, r)),
        t !== null && (wt(t, e, r, n), Io(t, e, r));
    },
  };
  function Vs(e, t, n, r, l, i, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, s)
        : t.prototype && t.prototype.isPureReactComponent
        ? !yr(n, r) || !yr(l, i)
        : !0
    );
  }
  function Bs(e, t, n) {
    var r = !1,
      l = Yt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = st(i))
        : ((l = Xe(t) ? pn : Be.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? jn(e, l) : Yt)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Uo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Ws(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Uo.enqueueReplaceState(t, t.state, null);
  }
  function Ai(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ei(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (l.context = st(i))
      : ((i = Xe(t) ? pn : Be.current), (l.context = jn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Di(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Uo.enqueueReplaceState(l, l.state, null),
        Mo(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Hn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += ae(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function $i(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ui(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Dp = typeof WeakMap == "function" ? WeakMap : Map;
  function Hs(e, t, n) {
    (n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Go || ((Go = !0), (tu = r)), Ui(e, t);
      }),
      n
    );
  }
  function bs(e, t, n) {
    (n = Mt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Ui(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          Ui(e, t),
            typeof r != "function" &&
              (en === null ? (en = new Set([this])) : en.add(this));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : "",
          });
        }),
      n
    );
  }
  function Qs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Dp();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Jp.bind(null, e, t, n)), t.then(e, e));
  }
  function Gs(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ks(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Mt(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Ap = Q.ReactCurrentOwner,
    Je = !1;
  function Ge(e, t, n, r) {
    t.child = e === null ? ms(t, null, n, r) : Un(t, e.child, n, r);
  }
  function Ys(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Bn(t, l),
      (r = Li(e, t, n, r, i, l)),
      (n = Ii()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Ot(e, t, l))
        : (Ee && n && mi(t), (t.flags |= 1), Ge(e, t, r, l), t.child)
    );
  }
  function Xs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !au(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Js(e, t, i, r, l))
        : ((e = qo(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var s = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : yr), n(s, r) && e.ref === t.ref)
      )
        return Ot(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = on(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Js(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (yr(i, r) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Je = !0);
        else return (t.lanes = e.lanes), Ot(e, t, l);
    }
    return Vi(e, t, n, r, l);
  }
  function Zs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ge(Qn, lt),
          (lt |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ge(Qn, lt),
            (lt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          ge(Qn, lt),
          (lt |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ge(Qn, lt),
        (lt |= r);
    return Ge(e, t, l, n), t.child;
  }
  function qs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Vi(e, t, n, r, l) {
    var i = Xe(n) ? pn : Be.current;
    return (
      (i = jn(t, i)),
      Bn(t, l),
      (n = Li(e, t, n, r, i, l)),
      (r = Ii()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Ot(e, t, l))
        : (Ee && r && mi(t), (t.flags |= 1), Ge(e, t, n, l), t.child)
    );
  }
  function ec(e, t, n, r, l) {
    if (Xe(n)) {
      var i = !0;
      Eo(t);
    } else i = !1;
    if ((Bn(t, l), t.stateNode === null))
      Bo(e, t), Bs(t, n, r), Ai(t, n, r, l), (r = !0);
    else if (e === null) {
      var s = t.stateNode,
        p = t.memoizedProps;
      s.props = p;
      var g = s.context,
        P = n.contextType;
      typeof P == "object" && P !== null
        ? (P = st(P))
        : ((P = Xe(n) ? pn : Be.current), (P = jn(t, P)));
      var F = n.getDerivedStateFromProps,
        j =
          typeof F == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function";
      j ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((p !== r || g !== P) && Ws(t, s, r, P)),
        (Jt = !1);
      var I = t.memoizedState;
      (s.state = I),
        Mo(t, r, s, l),
        (g = t.memoizedState),
        p !== r || I !== g || Ye.current || Jt
          ? (typeof F == "function" && (Di(t, n, F, r), (g = t.memoizedState)),
            (p = Jt || Vs(t, n, p, r, I, g, P))
              ? (j ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = g)),
            (s.props = r),
            (s.state = g),
            (s.context = P),
            (r = p))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (s = t.stateNode),
        vs(e, t),
        (p = t.memoizedProps),
        (P = t.type === t.elementType ? p : vt(t.type, p)),
        (s.props = P),
        (j = t.pendingProps),
        (I = s.context),
        (g = n.contextType),
        typeof g == "object" && g !== null
          ? (g = st(g))
          : ((g = Xe(n) ? pn : Be.current), (g = jn(t, g)));
      var B = n.getDerivedStateFromProps;
      (F =
        typeof B == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((p !== j || I !== g) && Ws(t, s, r, g)),
        (Jt = !1),
        (I = t.memoizedState),
        (s.state = I),
        Mo(t, r, s, l);
      var b = t.memoizedState;
      p !== j || I !== b || Ye.current || Jt
        ? (typeof B == "function" && (Di(t, n, B, r), (b = t.memoizedState)),
          (P = Jt || Vs(t, n, P, r, I, b, g) || !1)
            ? (F ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(r, b, g),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(r, b, g)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (p === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = b)),
          (s.props = r),
          (s.state = b),
          (s.context = g),
          (r = P))
        : (typeof s.componentDidUpdate != "function" ||
            (p === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Bi(e, t, n, r, i, l);
  }
  function Bi(e, t, n, r, l, i) {
    qs(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return l && ls(t, n, !1), Ot(e, t, i);
    (r = t.stateNode), (Ap.current = t);
    var p =
      s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && s
        ? ((t.child = Un(t, e.child, null, i)), (t.child = Un(t, null, p, i)))
        : Ge(e, t, p, i),
      (t.memoizedState = r.state),
      l && ls(t, n, !0),
      t.child
    );
  }
  function tc(e) {
    var t = e.stateNode;
    t.pendingContext
      ? rs(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && rs(e, t.context, !1),
      Ri(e, t.containerInfo);
  }
  function nc(e, t, n, r, l) {
    return $n(), yi(l), (t.flags |= 256), Ge(e, t, n, r), t.child;
  }
  var Wi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Hi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function rc(e, t, n) {
    var r = t.pendingProps,
      l = Pe.current,
      i = !1,
      s = (t.flags & 128) !== 0,
      p;
    if (
      ((p = s) ||
        (p = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      p
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ge(Pe, l & 1),
      e === null)
    )
      return (
        gi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((s = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (s = { mode: "hidden", children: s }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = s))
                  : (i = el(s, r, 0, null)),
                (e = Cn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Hi(n)),
                (t.memoizedState = Wi),
                e)
              : bi(t, s))
      );
    if (((l = e.memoizedState), l !== null && ((p = l.dehydrated), p !== null)))
      return $p(e, t, s, r, p, l, n);
    if (i) {
      (i = r.fallback), (s = t.mode), (l = e.child), (p = l.sibling);
      var g = { mode: "hidden", children: r.children };
      return (
        (s & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = g),
            (t.deletions = null))
          : ((r = on(l, g)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        p !== null ? (i = on(p, i)) : ((i = Cn(i, s, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (s = e.child.memoizedState),
        (s =
          s === null
            ? Hi(n)
            : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions,
              }),
        (i.memoizedState = s),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Wi),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = on(i, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function bi(e, t) {
    return (
      (t = el({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Vo(e, t, n, r) {
    return (
      r !== null && yi(r),
      Un(t, e.child, null, n),
      (e = bi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function $p(e, t, n, r, l, i, s) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = $i(Error(u(422)))), Vo(e, t, s, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = el({ mode: "visible", children: r.children }, l, 0, null)),
          (i = Cn(i, l, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          (t.mode & 1) !== 0 && Un(t, e.child, null, s),
          (t.child.memoizedState = Hi(s)),
          (t.memoizedState = Wi),
          i);
    if ((t.mode & 1) === 0) return Vo(e, t, s, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var p = r.dgst;
      return (
        (r = p), (i = Error(u(419))), (r = $i(i, r, void 0)), Vo(e, t, s, r)
      );
    }
    if (((p = (s & e.childLanes) !== 0), Je || p)) {
      if (((r = De), r !== null)) {
        switch (s & -s) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = (l & (r.suspendedLanes | s)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), It(e, l), wt(r, e, l, -1));
      }
      return uu(), (r = $i(Error(u(421)))), Vo(e, t, s, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Zp.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (ot = Gt(l.nextSibling)),
        (rt = t),
        (Ee = !0),
        (ht = null),
        e !== null &&
          ((ut[at++] = Tt),
          (ut[at++] = Lt),
          (ut[at++] = mn),
          (Tt = e.id),
          (Lt = e.overflow),
          (mn = t)),
        (t = bi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function oc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ki(e.return, t, n);
  }
  function Qi(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function lc(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Ge(e, t, r.children, n), (r = Pe.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && oc(e, n, t);
          else if (e.tag === 19) oc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ge(Pe, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && Oo(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Qi(t, !1, l, n, i);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Oo(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Qi(t, !0, n, null, i);
          break;
        case "together":
          Qi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Bo(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ot(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (wn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = on(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Up(e, t, n) {
    switch (t.tag) {
      case 3:
        tc(t), $n();
        break;
      case 5:
        ws(t);
        break;
      case 1:
        Xe(t.type) && Eo(t);
        break;
      case 4:
        Ri(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        ge(To, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ge(Pe, Pe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? rc(e, t, n)
            : (ge(Pe, Pe.current & 1),
              (e = Ot(e, t, n)),
              e !== null ? e.sibling : null);
        ge(Pe, Pe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return lc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ge(Pe, Pe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Zs(e, t, n);
    }
    return Ot(e, t, n);
  }
  var ic, Gi, uc, ac;
  (ic = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Gi = function () {}),
    (uc = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), gn(Et.current);
        var i = null;
        switch (n) {
          case "input":
            (l = kl(e, l)), (r = kl(e, r)), (i = []);
            break;
          case "select":
            (l = W({}, l, { value: void 0 })),
              (r = W({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (l = Rl(e, l)), (r = Rl(e, r)), (i = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = So);
        }
        Nl(n, r);
        var s;
        n = null;
        for (P in l)
          if (!r.hasOwnProperty(P) && l.hasOwnProperty(P) && l[P] != null)
            if (P === "style") {
              var p = l[P];
              for (s in p) p.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
            } else
              P !== "dangerouslySetInnerHTML" &&
                P !== "children" &&
                P !== "suppressContentEditableWarning" &&
                P !== "suppressHydrationWarning" &&
                P !== "autoFocus" &&
                (f.hasOwnProperty(P)
                  ? i || (i = [])
                  : (i = i || []).push(P, null));
        for (P in r) {
          var g = r[P];
          if (
            ((p = l != null ? l[P] : void 0),
            r.hasOwnProperty(P) && g !== p && (g != null || p != null))
          )
            if (P === "style")
              if (p) {
                for (s in p)
                  !p.hasOwnProperty(s) ||
                    (g && g.hasOwnProperty(s)) ||
                    (n || (n = {}), (n[s] = ""));
                for (s in g)
                  g.hasOwnProperty(s) &&
                    p[s] !== g[s] &&
                    (n || (n = {}), (n[s] = g[s]));
              } else n || (i || (i = []), i.push(P, n)), (n = g);
            else
              P === "dangerouslySetInnerHTML"
                ? ((g = g ? g.__html : void 0),
                  (p = p ? p.__html : void 0),
                  g != null && p !== g && (i = i || []).push(P, g))
                : P === "children"
                ? (typeof g != "string" && typeof g != "number") ||
                  (i = i || []).push(P, "" + g)
                : P !== "suppressContentEditableWarning" &&
                  P !== "suppressHydrationWarning" &&
                  (f.hasOwnProperty(P)
                    ? (g != null && P === "onScroll" && xe("scroll", e),
                      i || p === g || (i = []))
                    : (i = i || []).push(P, g));
        }
        n && (i = i || []).push("style", n);
        var P = i;
        (t.updateQueue = P) && (t.flags |= 4);
      }
    }),
    (ac = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Mr(e, t) {
    if (!Ee)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Vp(e, t, n) {
    var r = t.pendingProps;
    switch ((hi(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return He(t), null;
      case 1:
        return Xe(t.type) && Co(), He(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Wn(),
          Se(Ye),
          Se(Be),
          _i(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (_o(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ht !== null && (ou(ht), (ht = null)))),
          Gi(e, t),
          He(t),
          null
        );
      case 5:
        Pi(t);
        var l = gn(_r.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          uc(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return He(t), null;
          }
          if (((e = gn(Et.current)), _o(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[Ct] = t), (r[Cr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                xe("cancel", r), xe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < xr.length; l++) xe(xr[l], r);
                break;
              case "source":
                xe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                xe("error", r), xe("load", r);
                break;
              case "details":
                xe("toggle", r);
                break;
              case "input":
                Bu(r, i), xe("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  xe("invalid", r);
                break;
              case "textarea":
                bu(r, i), xe("invalid", r);
            }
            Nl(n, i), (l = null);
            for (var s in i)
              if (i.hasOwnProperty(s)) {
                var p = i[s];
                s === "children"
                  ? typeof p == "string"
                    ? r.textContent !== p &&
                      (i.suppressHydrationWarning !== !0 &&
                        xo(r.textContent, p, e),
                      (l = ["children", p]))
                    : typeof p == "number" &&
                      r.textContent !== "" + p &&
                      (i.suppressHydrationWarning !== !0 &&
                        xo(r.textContent, p, e),
                      (l = ["children", "" + p]))
                  : f.hasOwnProperty(s) &&
                    p != null &&
                    s === "onScroll" &&
                    xe("scroll", r);
              }
            switch (n) {
              case "input":
                Xr(r), Hu(r, i, !0);
                break;
              case "textarea":
                Xr(r), Gu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = So);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (s = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ku(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = s.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
                : (e = s.createElementNS(e, n)),
              (e[Ct] = t),
              (e[Cr] = r),
              ic(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((s = _l(n, r)), n)) {
                case "dialog":
                  xe("cancel", e), xe("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  xe("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < xr.length; l++) xe(xr[l], e);
                  l = r;
                  break;
                case "source":
                  xe("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  xe("error", e), xe("load", e), (l = r);
                  break;
                case "details":
                  xe("toggle", e), (l = r);
                  break;
                case "input":
                  Bu(e, r), (l = kl(e, r)), xe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = W({}, r, { value: void 0 })),
                    xe("invalid", e);
                  break;
                case "textarea":
                  bu(e, r), (l = Rl(e, r)), xe("invalid", e);
                  break;
                default:
                  l = r;
              }
              Nl(n, l), (p = l);
              for (i in p)
                if (p.hasOwnProperty(i)) {
                  var g = p[i];
                  i === "style"
                    ? Ju(e, g)
                    : i === "dangerouslySetInnerHTML"
                    ? ((g = g ? g.__html : void 0), g != null && Yu(e, g))
                    : i === "children"
                    ? typeof g == "string"
                      ? (n !== "textarea" || g !== "") && tr(e, g)
                      : typeof g == "number" && tr(e, "" + g)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (f.hasOwnProperty(i)
                        ? g != null && i === "onScroll" && xe("scroll", e)
                        : g != null && D(e, i, g, s));
                }
              switch (n) {
                case "input":
                  Xr(e), Hu(e, r, !1);
                  break;
                case "textarea":
                  Xr(e), Gu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + de(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? En(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        En(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = So);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return He(t), null;
      case 6:
        if (e && t.stateNode != null) ac(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (((n = gn(_r.current)), gn(Et.current), _o(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Ct] = t),
              (i = r.nodeValue !== n) && ((e = rt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  xo(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    xo(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Ct] = t),
              (t.stateNode = r);
        }
        return He(t), null;
      case 13:
        if (
          (Se(Pe),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ee && ot !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            fs(), $n(), (t.flags |= 98560), (i = !1);
          else if (((i = _o(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(u(317));
              i[Ct] = t;
            } else
              $n(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            He(t), (i = !1);
          } else ht !== null && (ou(ht), (ht = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Pe.current & 1) !== 0
                  ? Me === 0 && (Me = 3)
                  : uu())),
            t.updateQueue !== null && (t.flags |= 4),
            He(t),
            null);
      case 4:
        return (
          Wn(),
          Gi(e, t),
          e === null && Sr(t.stateNode.containerInfo),
          He(t),
          null
        );
      case 10:
        return Si(t.type._context), He(t), null;
      case 17:
        return Xe(t.type) && Co(), He(t), null;
      case 19:
        if ((Se(Pe), (i = t.memoizedState), i === null)) return He(t), null;
        if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
          if (r) Mr(i, !1);
          else {
            if (Me !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((s = Oo(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      Mr(i, !1),
                      r = s.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (s = i.alternate),
                      s === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = s.childLanes),
                          (i.lanes = s.lanes),
                          (i.child = s.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = s.memoizedProps),
                          (i.memoizedState = s.memoizedState),
                          (i.updateQueue = s.updateQueue),
                          (i.type = s.type),
                          (e = s.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ge(Pe, (Pe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ze() > Gn &&
              ((t.flags |= 128), (r = !0), Mr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Oo(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Mr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !s.alternate &&
                  !Ee)
              )
                return He(t), null;
            } else
              2 * ze() - i.renderingStartTime > Gn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Mr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((n = i.last),
              n !== null ? (n.sibling = s) : (t.child = s),
              (i.last = s));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ze()),
            (t.sibling = null),
            (n = Pe.current),
            ge(Pe, r ? (n & 1) | 2 : n & 1),
            t)
          : (He(t), null);
      case 22:
      case 23:
        return (
          iu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (lt & 1073741824) !== 0 &&
              (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : He(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Bp(e, t) {
    switch ((hi(t), t.tag)) {
      case 1:
        return (
          Xe(t.type) && Co(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Wn(),
          Se(Ye),
          Se(Be),
          _i(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Pi(t), null;
      case 13:
        if (
          (Se(Pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          $n();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Se(Pe), null;
      case 4:
        return Wn(), null;
      case 10:
        return Si(t.type._context), null;
      case 22:
      case 23:
        return iu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Wo = !1,
    be = !1,
    Wp = typeof WeakSet == "function" ? WeakSet : Set,
    H = null;
  function bn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          _e(e, t, r);
        }
      else n.current = null;
  }
  function Ki(e, t, n) {
    try {
      n();
    } catch (r) {
      _e(e, t, r);
    }
  }
  var sc = !1;
  function Hp(e, t) {
    if (((ii = ao), (e = Va()), Zl(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var s = 0,
              p = -1,
              g = -1,
              P = 0,
              F = 0,
              j = e,
              I = null;
            t: for (;;) {
              for (
                var B;
                j !== n || (l !== 0 && j.nodeType !== 3) || (p = s + l),
                  j !== i || (r !== 0 && j.nodeType !== 3) || (g = s + r),
                  j.nodeType === 3 && (s += j.nodeValue.length),
                  (B = j.firstChild) !== null;

              )
                (I = j), (j = B);
              for (;;) {
                if (j === e) break t;
                if (
                  (I === n && ++P === l && (p = s),
                  I === i && ++F === r && (g = s),
                  (B = j.nextSibling) !== null)
                )
                  break;
                (j = I), (I = j.parentNode);
              }
              j = B;
            }
            n = p === -1 || g === -1 ? null : { start: p, end: g };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      ui = { focusedElem: e, selectionRange: n }, ao = !1, H = t;
      H !== null;

    )
      if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (H = e);
      else
        for (; H !== null; ) {
          t = H;
          try {
            var b = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (b !== null) {
                    var G = b.memoizedProps,
                      Te = b.memoizedState,
                      k = t.stateNode,
                      x = k.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? G : vt(t.type, G),
                        Te
                      );
                    k.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var E = t.stateNode.containerInfo;
                  E.nodeType === 1
                    ? (E.textContent = "")
                    : E.nodeType === 9 &&
                      E.documentElement &&
                      E.removeChild(E.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(u(163));
              }
          } catch (A) {
            _e(t, t.return, A);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (H = e);
            break;
          }
          H = t.return;
        }
    return (b = sc), (sc = !1), b;
  }
  function Or(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          (l.destroy = void 0), i !== void 0 && Ki(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ho(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Yi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function cc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), cc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Ct],
          delete t[Cr],
          delete t[fi],
          delete t[Pp],
          delete t[Np])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function fc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function dc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || fc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Xi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = So));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Xi(e, t, n), e = e.sibling; e !== null; )
        Xi(e, t, n), (e = e.sibling);
  }
  function Ji(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ji(e, t, n), e = e.sibling; e !== null; )
        Ji(e, t, n), (e = e.sibling);
  }
  var Ue = null,
    gt = !1;
  function qt(e, t, n) {
    for (n = n.child; n !== null; ) pc(e, t, n), (n = n.sibling);
  }
  function pc(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function")
      try {
        kt.onCommitFiberUnmount(no, n);
      } catch {}
    switch (n.tag) {
      case 5:
        be || bn(n, t);
      case 6:
        var r = Ue,
          l = gt;
        (Ue = null),
          qt(e, t, n),
          (Ue = r),
          (gt = l),
          Ue !== null &&
            (gt
              ? ((e = Ue),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ue.removeChild(n.stateNode));
        break;
      case 18:
        Ue !== null &&
          (gt
            ? ((e = Ue),
              (n = n.stateNode),
              e.nodeType === 8
                ? ci(e.parentNode, n)
                : e.nodeType === 1 && ci(e, n),
              dr(e))
            : ci(Ue, n.stateNode));
        break;
      case 4:
        (r = Ue),
          (l = gt),
          (Ue = n.stateNode.containerInfo),
          (gt = !0),
          qt(e, t, n),
          (Ue = r),
          (gt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !be &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              s = i.destroy;
            (i = i.tag),
              s !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Ki(n, t, s),
              (l = l.next);
          } while (l !== r);
        }
        qt(e, t, n);
        break;
      case 1:
        if (
          !be &&
          (bn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (p) {
            _e(n, t, p);
          }
        qt(e, t, n);
        break;
      case 21:
        qt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((be = (r = be) || n.memoizedState !== null), qt(e, t, n), (be = r))
          : qt(e, t, n);
        break;
      default:
        qt(e, t, n);
    }
  }
  function mc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Wp()),
        t.forEach(function (r) {
          var l = qp.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function yt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            s = t,
            p = s;
          e: for (; p !== null; ) {
            switch (p.tag) {
              case 5:
                (Ue = p.stateNode), (gt = !1);
                break e;
              case 3:
                (Ue = p.stateNode.containerInfo), (gt = !0);
                break e;
              case 4:
                (Ue = p.stateNode.containerInfo), (gt = !0);
                break e;
            }
            p = p.return;
          }
          if (Ue === null) throw Error(u(160));
          pc(i, s, l), (Ue = null), (gt = !1);
          var g = l.alternate;
          g !== null && (g.return = null), (l.return = null);
        } catch (P) {
          _e(l, t, P);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) hc(t, e), (t = t.sibling);
  }
  function hc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((yt(t, e), Pt(e), r & 4)) {
          try {
            Or(3, e, e.return), Ho(3, e);
          } catch (G) {
            _e(e, e.return, G);
          }
          try {
            Or(5, e, e.return);
          } catch (G) {
            _e(e, e.return, G);
          }
        }
        break;
      case 1:
        yt(t, e), Pt(e), r & 512 && n !== null && bn(n, n.return);
        break;
      case 5:
        if (
          (yt(t, e),
          Pt(e),
          r & 512 && n !== null && bn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            tr(l, "");
          } catch (G) {
            _e(e, e.return, G);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            s = n !== null ? n.memoizedProps : i,
            p = e.type,
            g = e.updateQueue;
          if (((e.updateQueue = null), g !== null))
            try {
              p === "input" && i.type === "radio" && i.name != null && Wu(l, i),
                _l(p, s);
              var P = _l(p, i);
              for (s = 0; s < g.length; s += 2) {
                var F = g[s],
                  j = g[s + 1];
                F === "style"
                  ? Ju(l, j)
                  : F === "dangerouslySetInnerHTML"
                  ? Yu(l, j)
                  : F === "children"
                  ? tr(l, j)
                  : D(l, F, j, P);
              }
              switch (p) {
                case "input":
                  Cl(l, i);
                  break;
                case "textarea":
                  Qu(l, i);
                  break;
                case "select":
                  var I = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var B = i.value;
                  B != null
                    ? En(l, !!i.multiple, B, !1)
                    : I !== !!i.multiple &&
                      (i.defaultValue != null
                        ? En(l, !!i.multiple, i.defaultValue, !0)
                        : En(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[Cr] = i;
            } catch (G) {
              _e(e, e.return, G);
            }
        }
        break;
      case 6:
        if ((yt(t, e), Pt(e), r & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          (l = e.stateNode), (i = e.memoizedProps);
          try {
            l.nodeValue = i;
          } catch (G) {
            _e(e, e.return, G);
          }
        }
        break;
      case 3:
        if (
          (yt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            dr(t.containerInfo);
          } catch (G) {
            _e(e, e.return, G);
          }
        break;
      case 4:
        yt(t, e), Pt(e);
        break;
      case 13:
        yt(t, e),
          Pt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (eu = ze())),
          r & 4 && mc(e);
        break;
      case 22:
        if (
          ((F = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((be = (P = be) || F), yt(t, e), (be = P)) : yt(t, e),
          Pt(e),
          r & 8192)
        ) {
          if (
            ((P = e.memoizedState !== null),
            (e.stateNode.isHidden = P) && !F && (e.mode & 1) !== 0)
          )
            for (H = e, F = e.child; F !== null; ) {
              for (j = H = F; H !== null; ) {
                switch (((I = H), (B = I.child), I.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Or(4, I, I.return);
                    break;
                  case 1:
                    bn(I, I.return);
                    var b = I.stateNode;
                    if (typeof b.componentWillUnmount == "function") {
                      (r = I), (n = I.return);
                      try {
                        (t = r),
                          (b.props = t.memoizedProps),
                          (b.state = t.memoizedState),
                          b.componentWillUnmount();
                      } catch (G) {
                        _e(r, n, G);
                      }
                    }
                    break;
                  case 5:
                    bn(I, I.return);
                    break;
                  case 22:
                    if (I.memoizedState !== null) {
                      yc(j);
                      continue;
                    }
                }
                B !== null ? ((B.return = I), (H = B)) : yc(j);
              }
              F = F.sibling;
            }
          e: for (F = null, j = e; ; ) {
            if (j.tag === 5) {
              if (F === null) {
                F = j;
                try {
                  (l = j.stateNode),
                    P
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((p = j.stateNode),
                        (g = j.memoizedProps.style),
                        (s =
                          g != null && g.hasOwnProperty("display")
                            ? g.display
                            : null),
                        (p.style.display = Xu("display", s)));
                } catch (G) {
                  _e(e, e.return, G);
                }
              }
            } else if (j.tag === 6) {
              if (F === null)
                try {
                  j.stateNode.nodeValue = P ? "" : j.memoizedProps;
                } catch (G) {
                  _e(e, e.return, G);
                }
            } else if (
              ((j.tag !== 22 && j.tag !== 23) ||
                j.memoizedState === null ||
                j === e) &&
              j.child !== null
            ) {
              (j.child.return = j), (j = j.child);
              continue;
            }
            if (j === e) break e;
            for (; j.sibling === null; ) {
              if (j.return === null || j.return === e) break e;
              F === j && (F = null), (j = j.return);
            }
            F === j && (F = null),
              (j.sibling.return = j.return),
              (j = j.sibling);
          }
        }
        break;
      case 19:
        yt(t, e), Pt(e), r & 4 && mc(e);
        break;
      case 21:
        break;
      default:
        yt(t, e), Pt(e);
    }
  }
  function Pt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (fc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (tr(l, ""), (r.flags &= -33));
            var i = dc(e);
            Ji(e, i, l);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              p = dc(e);
            Xi(e, p, s);
            break;
          default:
            throw Error(u(161));
        }
      } catch (g) {
        _e(e, e.return, g);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function bp(e, t, n) {
    (H = e), vc(e);
  }
  function vc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; H !== null; ) {
      var l = H,
        i = l.child;
      if (l.tag === 22 && r) {
        var s = l.memoizedState !== null || Wo;
        if (!s) {
          var p = l.alternate,
            g = (p !== null && p.memoizedState !== null) || be;
          p = Wo;
          var P = be;
          if (((Wo = s), (be = g) && !P))
            for (H = l; H !== null; )
              (s = H),
                (g = s.child),
                s.tag === 22 && s.memoizedState !== null
                  ? wc(l)
                  : g !== null
                  ? ((g.return = s), (H = g))
                  : wc(l);
          for (; i !== null; ) (H = i), vc(i), (i = i.sibling);
          (H = l), (Wo = p), (be = P);
        }
        gc(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && i !== null
          ? ((i.return = l), (H = i))
          : gc(e);
    }
  }
  function gc(e) {
    for (; H !== null; ) {
      var t = H;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                be || Ho(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !be)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : vt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && ys(t, i, r);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ys(t, s, n);
                }
                break;
              case 5:
                var p = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = p;
                  var g = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      g.autoFocus && n.focus();
                      break;
                    case "img":
                      g.src && (n.src = g.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var P = t.alternate;
                  if (P !== null) {
                    var F = P.memoizedState;
                    if (F !== null) {
                      var j = F.dehydrated;
                      j !== null && dr(j);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(u(163));
            }
          be || (t.flags & 512 && Yi(t));
        } catch (I) {
          _e(t, t.return, I);
        }
      }
      if (t === e) {
        H = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (H = n);
        break;
      }
      H = t.return;
    }
  }
  function yc(e) {
    for (; H !== null; ) {
      var t = H;
      if (t === e) {
        H = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (H = n);
        break;
      }
      H = t.return;
    }
  }
  function wc(e) {
    for (; H !== null; ) {
      var t = H;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ho(4, t);
            } catch (g) {
              _e(t, n, g);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (g) {
                _e(t, l, g);
              }
            }
            var i = t.return;
            try {
              Yi(t);
            } catch (g) {
              _e(t, i, g);
            }
            break;
          case 5:
            var s = t.return;
            try {
              Yi(t);
            } catch (g) {
              _e(t, s, g);
            }
        }
      } catch (g) {
        _e(t, t.return, g);
      }
      if (t === e) {
        H = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        (p.return = t.return), (H = p);
        break;
      }
      H = t.return;
    }
  }
  var Qp = Math.ceil,
    bo = Q.ReactCurrentDispatcher,
    Zi = Q.ReactCurrentOwner,
    ft = Q.ReactCurrentBatchConfig,
    ie = 0,
    De = null,
    Le = null,
    Ve = 0,
    lt = 0,
    Qn = Kt(0),
    Me = 0,
    Fr = null,
    wn = 0,
    Qo = 0,
    qi = 0,
    jr = null,
    Ze = null,
    eu = 0,
    Gn = 1 / 0,
    Ft = null,
    Go = !1,
    tu = null,
    en = null,
    Ko = !1,
    tn = null,
    Yo = 0,
    Dr = 0,
    nu = null,
    Xo = -1,
    Jo = 0;
  function Ke() {
    return (ie & 6) !== 0 ? ze() : Xo !== -1 ? Xo : (Xo = ze());
  }
  function nn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ie & 2) !== 0 && Ve !== 0
      ? Ve & -Ve
      : zp.transition !== null
      ? (Jo === 0 && (Jo = da()), Jo)
      : ((e = pe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sa(e.type))),
        e);
  }
  function wt(e, t, n, r) {
    if (50 < Dr) throw ((Dr = 0), (nu = null), Error(u(185)));
    ur(e, n, r),
      ((ie & 2) === 0 || e !== De) &&
        (e === De && ((ie & 2) === 0 && (Qo |= n), Me === 4 && rn(e, Ve)),
        qe(e, r),
        n === 1 &&
          ie === 0 &&
          (t.mode & 1) === 0 &&
          ((Gn = ze() + 500), Ro && Xt()));
  }
  function qe(e, t) {
    var n = e.callbackNode;
    zd(e, t);
    var r = lo(e, e === De ? Ve : 0);
    if (r === 0)
      n !== null && sa(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && sa(n), t === 1))
        e.tag === 0 ? _p(Sc.bind(null, e)) : is(Sc.bind(null, e)),
          Ep(function () {
            (ie & 6) === 0 && Xt();
          }),
          (n = null);
      else {
        switch (pa(r)) {
          case 1:
            n = Fl;
            break;
          case 4:
            n = ca;
            break;
          case 16:
            n = to;
            break;
          case 536870912:
            n = fa;
            break;
          default:
            n = to;
        }
        n = zc(n, xc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function xc(e, t) {
    if (((Xo = -1), (Jo = 0), (ie & 6) !== 0)) throw Error(u(327));
    var n = e.callbackNode;
    if (Kn() && e.callbackNode !== n) return null;
    var r = lo(e, e === De ? Ve : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Zo(e, r);
    else {
      t = r;
      var l = ie;
      ie |= 2;
      var i = Cc();
      (De !== e || Ve !== t) && ((Ft = null), (Gn = ze() + 500), Sn(e, t));
      do
        try {
          Yp();
          break;
        } catch (p) {
          kc(e, p);
        }
      while (!0);
      xi(),
        (bo.current = i),
        (ie = l),
        Le !== null ? (t = 0) : ((De = null), (Ve = 0), (t = Me));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = jl(e)), l !== 0 && ((r = l), (t = ru(e, l)))),
        t === 1)
      )
        throw ((n = Fr), Sn(e, 0), rn(e, r), qe(e, ze()), n);
      if (t === 6) rn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Gp(l) &&
            ((t = Zo(e, r)),
            t === 2 && ((i = jl(e)), i !== 0 && ((r = i), (t = ru(e, i)))),
            t === 1))
        )
          throw ((n = Fr), Sn(e, 0), rn(e, r), qe(e, ze()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            kn(e, Ze, Ft);
            break;
          case 3:
            if (
              (rn(e, r),
              (r & 130023424) === r && ((t = eu + 500 - ze()), 10 < t))
            ) {
              if (lo(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ke(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = si(kn.bind(null, e, Ze, Ft), t);
              break;
            }
            kn(e, Ze, Ft);
            break;
          case 4:
            if ((rn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var s = 31 - pt(r);
              (i = 1 << s), (s = t[s]), s > l && (l = s), (r &= ~i);
            }
            if (
              ((r = l),
              (r = ze() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * Qp(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = si(kn.bind(null, e, Ze, Ft), r);
              break;
            }
            kn(e, Ze, Ft);
            break;
          case 5:
            kn(e, Ze, Ft);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return qe(e, ze()), e.callbackNode === n ? xc.bind(null, e) : null;
  }
  function ru(e, t) {
    var n = jr;
    return (
      e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256),
      (e = Zo(e, t)),
      e !== 2 && ((t = Ze), (Ze = n), t !== null && ou(t)),
      e
    );
  }
  function ou(e) {
    Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
  }
  function Gp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!mt(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function rn(e, t) {
    for (
      t &= ~qi,
        t &= ~Qo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - pt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Sc(e) {
    if ((ie & 6) !== 0) throw Error(u(327));
    Kn();
    var t = lo(e, 0);
    if ((t & 1) === 0) return qe(e, ze()), null;
    var n = Zo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = jl(e);
      r !== 0 && ((t = r), (n = ru(e, r)));
    }
    if (n === 1) throw ((n = Fr), Sn(e, 0), rn(e, t), qe(e, ze()), n);
    if (n === 6) throw Error(u(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      kn(e, Ze, Ft),
      qe(e, ze()),
      null
    );
  }
  function lu(e, t) {
    var n = ie;
    ie |= 1;
    try {
      return e(t);
    } finally {
      (ie = n), ie === 0 && ((Gn = ze() + 500), Ro && Xt());
    }
  }
  function xn(e) {
    tn !== null && tn.tag === 0 && (ie & 6) === 0 && Kn();
    var t = ie;
    ie |= 1;
    var n = ft.transition,
      r = pe;
    try {
      if (((ft.transition = null), (pe = 1), e)) return e();
    } finally {
      (pe = r), (ft.transition = n), (ie = t), (ie & 6) === 0 && Xt();
    }
  }
  function iu() {
    (lt = Qn.current), Se(Qn);
  }
  function Sn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Cp(n)), Le !== null))
      for (n = Le.return; n !== null; ) {
        var r = n;
        switch ((hi(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Co();
            break;
          case 3:
            Wn(), Se(Ye), Se(Be), _i();
            break;
          case 5:
            Pi(r);
            break;
          case 4:
            Wn();
            break;
          case 13:
            Se(Pe);
            break;
          case 19:
            Se(Pe);
            break;
          case 10:
            Si(r.type._context);
            break;
          case 22:
          case 23:
            iu();
        }
        n = n.return;
      }
    if (
      ((De = e),
      (Le = e = on(e.current, null)),
      (Ve = lt = t),
      (Me = 0),
      (Fr = null),
      (qi = Qo = wn = 0),
      (Ze = jr = null),
      vn !== null)
    ) {
      for (t = 0; t < vn.length; t++)
        if (((n = vn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var s = i.next;
            (i.next = l), (r.next = s);
          }
          n.pending = r;
        }
      vn = null;
    }
    return e;
  }
  function kc(e, t) {
    do {
      var n = Le;
      try {
        if ((xi(), (Fo.current = $o), jo)) {
          for (var r = Ne.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          jo = !1;
        }
        if (
          ((yn = 0),
          (je = Ie = Ne = null),
          (zr = !1),
          (Tr = 0),
          (Zi.current = null),
          n === null || n.return === null)
        ) {
          (Me = 1), (Fr = t), (Le = null);
          break;
        }
        e: {
          var i = e,
            s = n.return,
            p = n,
            g = t;
          if (
            ((t = Ve),
            (p.flags |= 32768),
            g !== null && typeof g == "object" && typeof g.then == "function")
          ) {
            var P = g,
              F = p,
              j = F.tag;
            if ((F.mode & 1) === 0 && (j === 0 || j === 11 || j === 15)) {
              var I = F.alternate;
              I
                ? ((F.updateQueue = I.updateQueue),
                  (F.memoizedState = I.memoizedState),
                  (F.lanes = I.lanes))
                : ((F.updateQueue = null), (F.memoizedState = null));
            }
            var B = Gs(s);
            if (B !== null) {
              (B.flags &= -257),
                Ks(B, s, p, i, t),
                B.mode & 1 && Qs(i, P, t),
                (t = B),
                (g = P);
              var b = t.updateQueue;
              if (b === null) {
                var G = new Set();
                G.add(g), (t.updateQueue = G);
              } else b.add(g);
              break e;
            } else {
              if ((t & 1) === 0) {
                Qs(i, P, t), uu();
                break e;
              }
              g = Error(u(426));
            }
          } else if (Ee && p.mode & 1) {
            var Te = Gs(s);
            if (Te !== null) {
              (Te.flags & 65536) === 0 && (Te.flags |= 256),
                Ks(Te, s, p, i, t),
                yi(Hn(g, p));
              break e;
            }
          }
          (i = g = Hn(g, p)),
            Me !== 4 && (Me = 2),
            jr === null ? (jr = [i]) : jr.push(i),
            (i = s);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = Hs(i, g, t);
                gs(i, k);
                break e;
              case 1:
                p = g;
                var x = i.type,
                  E = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof x.getDerivedStateFromError == "function" ||
                    (E !== null &&
                      typeof E.componentDidCatch == "function" &&
                      (en === null || !en.has(E))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var A = bs(i, p, t);
                  gs(i, A);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Rc(n);
      } catch (K) {
        (t = K), Le === n && n !== null && (Le = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Cc() {
    var e = bo.current;
    return (bo.current = $o), e === null ? $o : e;
  }
  function uu() {
    (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
      De === null ||
        ((wn & 268435455) === 0 && (Qo & 268435455) === 0) ||
        rn(De, Ve);
  }
  function Zo(e, t) {
    var n = ie;
    ie |= 2;
    var r = Cc();
    (De !== e || Ve !== t) && ((Ft = null), Sn(e, t));
    do
      try {
        Kp();
        break;
      } catch (l) {
        kc(e, l);
      }
    while (!0);
    if ((xi(), (ie = n), (bo.current = r), Le !== null)) throw Error(u(261));
    return (De = null), (Ve = 0), Me;
  }
  function Kp() {
    for (; Le !== null; ) Ec(Le);
  }
  function Yp() {
    for (; Le !== null && !xd(); ) Ec(Le);
  }
  function Ec(e) {
    var t = _c(e.alternate, e, lt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Rc(e) : (Le = t),
      (Zi.current = null);
  }
  function Rc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Vp(n, t, lt)), n !== null)) {
          Le = n;
          return;
        }
      } else {
        if (((n = Bp(n, t)), n !== null)) {
          (n.flags &= 32767), (Le = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Me = 6), (Le = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Le = t;
        return;
      }
      Le = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function kn(e, t, n) {
    var r = pe,
      l = ft.transition;
    try {
      (ft.transition = null), (pe = 1), Xp(e, t, n, r);
    } finally {
      (ft.transition = l), (pe = r);
    }
    return null;
  }
  function Xp(e, t, n, r) {
    do Kn();
    while (tn !== null);
    if ((ie & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(u(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (Td(e, i),
      e === De && ((Le = De = null), (Ve = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ko ||
        ((Ko = !0),
        zc(to, function () {
          return Kn(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      (i = ft.transition), (ft.transition = null);
      var s = pe;
      pe = 1;
      var p = ie;
      (ie |= 4),
        (Zi.current = null),
        Hp(e, n),
        hc(n, e),
        vp(ui),
        (ao = !!ii),
        (ui = ii = null),
        (e.current = n),
        bp(n),
        Sd(),
        (ie = p),
        (pe = s),
        (ft.transition = i);
    } else e.current = n;
    if (
      (Ko && ((Ko = !1), (tn = e), (Yo = l)),
      (i = e.pendingLanes),
      i === 0 && (en = null),
      Ed(n.stateNode),
      qe(e, ze()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Go) throw ((Go = !1), (e = tu), (tu = null), e);
    return (
      (Yo & 1) !== 0 && e.tag !== 0 && Kn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === nu ? Dr++ : ((Dr = 0), (nu = e))) : (Dr = 0),
      Xt(),
      null
    );
  }
  function Kn() {
    if (tn !== null) {
      var e = pa(Yo),
        t = ft.transition,
        n = pe;
      try {
        if (((ft.transition = null), (pe = 16 > e ? 16 : e), tn === null))
          var r = !1;
        else {
          if (((e = tn), (tn = null), (Yo = 0), (ie & 6) !== 0))
            throw Error(u(331));
          var l = ie;
          for (ie |= 4, H = e.current; H !== null; ) {
            var i = H,
              s = i.child;
            if ((H.flags & 16) !== 0) {
              var p = i.deletions;
              if (p !== null) {
                for (var g = 0; g < p.length; g++) {
                  var P = p[g];
                  for (H = P; H !== null; ) {
                    var F = H;
                    switch (F.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Or(8, F, i);
                    }
                    var j = F.child;
                    if (j !== null) (j.return = F), (H = j);
                    else
                      for (; H !== null; ) {
                        F = H;
                        var I = F.sibling,
                          B = F.return;
                        if ((cc(F), F === P)) {
                          H = null;
                          break;
                        }
                        if (I !== null) {
                          (I.return = B), (H = I);
                          break;
                        }
                        H = B;
                      }
                  }
                }
                var b = i.alternate;
                if (b !== null) {
                  var G = b.child;
                  if (G !== null) {
                    b.child = null;
                    do {
                      var Te = G.sibling;
                      (G.sibling = null), (G = Te);
                    } while (G !== null);
                  }
                }
                H = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && s !== null)
              (s.return = i), (H = s);
            else
              e: for (; H !== null; ) {
                if (((i = H), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Or(9, i, i.return);
                  }
                var k = i.sibling;
                if (k !== null) {
                  (k.return = i.return), (H = k);
                  break e;
                }
                H = i.return;
              }
          }
          var x = e.current;
          for (H = x; H !== null; ) {
            s = H;
            var E = s.child;
            if ((s.subtreeFlags & 2064) !== 0 && E !== null)
              (E.return = s), (H = E);
            else
              e: for (s = x; H !== null; ) {
                if (((p = H), (p.flags & 2048) !== 0))
                  try {
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ho(9, p);
                    }
                  } catch (K) {
                    _e(p, p.return, K);
                  }
                if (p === s) {
                  H = null;
                  break e;
                }
                var A = p.sibling;
                if (A !== null) {
                  (A.return = p.return), (H = A);
                  break e;
                }
                H = p.return;
              }
          }
          if (
            ((ie = l),
            Xt(),
            kt && typeof kt.onPostCommitFiberRoot == "function")
          )
            try {
              kt.onPostCommitFiberRoot(no, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (pe = n), (ft.transition = t);
      }
    }
    return !1;
  }
  function Pc(e, t, n) {
    (t = Hn(n, t)),
      (t = Hs(e, t, 1)),
      (e = Zt(e, t, 1)),
      (t = Ke()),
      e !== null && (ur(e, 1, t), qe(e, t));
  }
  function _e(e, t, n) {
    if (e.tag === 3) Pc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Pc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (en === null || !en.has(r)))
          ) {
            (e = Hn(n, e)),
              (e = bs(t, e, 1)),
              (t = Zt(t, e, 1)),
              (e = Ke()),
              t !== null && (ur(t, 1, e), qe(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ke()),
      (e.pingedLanes |= e.suspendedLanes & n),
      De === e &&
        (Ve & n) === n &&
        (Me === 4 || (Me === 3 && (Ve & 130023424) === Ve && 500 > ze() - eu)
          ? Sn(e, 0)
          : (qi |= n)),
      qe(e, t);
  }
  function Nc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = oo), (oo <<= 1), (oo & 130023424) === 0 && (oo = 4194304)));
    var n = Ke();
    (e = It(e, t)), e !== null && (ur(e, t, n), qe(e, n));
  }
  function Zp(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Nc(e, n);
  }
  function qp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), Nc(e, n);
  }
  var _c;
  _c = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ye.current) Je = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (Je = !1), Up(e, t, n);
        Je = (e.flags & 131072) !== 0;
      }
    else (Je = !1), Ee && (t.flags & 1048576) !== 0 && us(t, No, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Bo(e, t), (e = t.pendingProps);
        var l = jn(t, Be.current);
        Bn(t, n), (l = Li(null, t, r, e, l, n));
        var i = Ii();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Xe(r) ? ((i = !0), Eo(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ei(t),
              (l.updater = Uo),
              (t.stateNode = l),
              (l._reactInternals = t),
              Ai(t, r, e, n),
              (t = Bi(null, t, r, !0, i, n)))
            : ((t.tag = 0), Ee && i && mi(t), Ge(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Bo(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = tm(r)),
            (e = vt(r, e)),
            l)
          ) {
            case 0:
              t = Vi(null, t, r, e, n);
              break e;
            case 1:
              t = ec(null, t, r, e, n);
              break e;
            case 11:
              t = Ys(null, t, r, e, n);
              break e;
            case 14:
              t = Xs(null, t, r, vt(r.type, e), n);
              break e;
          }
          throw Error(u(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : vt(r, l)),
          Vi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : vt(r, l)),
          ec(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((tc(t), e === null)) throw Error(u(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            vs(e, t),
            Mo(t, r, null, n);
          var s = t.memoizedState;
          if (((r = s.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (l = Hn(Error(u(423)), t)), (t = nc(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Hn(Error(u(424)), t)), (t = nc(e, t, r, n, l));
              break e;
            } else
              for (
                ot = Gt(t.stateNode.containerInfo.firstChild),
                  rt = t,
                  Ee = !0,
                  ht = null,
                  n = ms(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if (($n(), r === l)) {
              t = Ot(e, t, n);
              break e;
            }
            Ge(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ws(t),
          e === null && gi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (s = l.children),
          ai(r, l) ? (s = null) : i !== null && ai(r, i) && (t.flags |= 32),
          qs(e, t),
          Ge(e, t, s, n),
          t.child
        );
      case 6:
        return e === null && gi(t), null;
      case 13:
        return rc(e, t, n);
      case 4:
        return (
          Ri(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Un(t, null, r, n)) : Ge(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : vt(r, l)),
          Ys(e, t, r, l, n)
        );
      case 7:
        return Ge(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ge(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ge(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (s = l.value),
            ge(To, r._currentValue),
            (r._currentValue = s),
            i !== null)
          )
            if (mt(i.value, s)) {
              if (i.children === l.children && !Ye.current) {
                t = Ot(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var p = i.dependencies;
                if (p !== null) {
                  s = i.child;
                  for (var g = p.firstContext; g !== null; ) {
                    if (g.context === r) {
                      if (i.tag === 1) {
                        (g = Mt(-1, n & -n)), (g.tag = 2);
                        var P = i.updateQueue;
                        if (P !== null) {
                          P = P.shared;
                          var F = P.pending;
                          F === null
                            ? (g.next = g)
                            : ((g.next = F.next), (F.next = g)),
                            (P.pending = g);
                        }
                      }
                      (i.lanes |= n),
                        (g = i.alternate),
                        g !== null && (g.lanes |= n),
                        ki(i.return, n, t),
                        (p.lanes |= n);
                      break;
                    }
                    g = g.next;
                  }
                } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((s = i.return), s === null)) throw Error(u(341));
                  (s.lanes |= n),
                    (p = s.alternate),
                    p !== null && (p.lanes |= n),
                    ki(s, n, t),
                    (s = i.sibling);
                } else s = i.child;
                if (s !== null) s.return = i;
                else
                  for (s = i; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (((i = s.sibling), i !== null)) {
                      (i.return = s.return), (s = i);
                      break;
                    }
                    s = s.return;
                  }
                i = s;
              }
          Ge(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Bn(t, n),
          (l = st(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ge(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = vt(r, t.pendingProps)),
          (l = vt(r.type, l)),
          Xs(e, t, r, l, n)
        );
      case 15:
        return Js(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : vt(r, l)),
          Bo(e, t),
          (t.tag = 1),
          Xe(r) ? ((e = !0), Eo(t)) : (e = !1),
          Bn(t, n),
          Bs(t, r, l),
          Ai(t, r, l, n),
          Bi(null, t, r, !0, e, n)
        );
      case 19:
        return lc(e, t, n);
      case 22:
        return Zs(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function zc(e, t) {
    return aa(e, t);
  }
  function em(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function dt(e, t, n, r) {
    return new em(e, t, n, r);
  }
  function au(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function tm(e) {
    if (typeof e == "function") return au(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === oe)) return 11;
      if (e === Qe) return 14;
    }
    return 2;
  }
  function on(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = dt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function qo(e, t, n, r, l, i) {
    var s = 2;
    if (((r = e), typeof e == "function")) au(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
      e: switch (e) {
        case fe:
          return Cn(n.children, l, i, t);
        case re:
          (s = 8), (l |= 8);
          break;
        case me:
          return (
            (e = dt(12, n, t, l | 2)), (e.elementType = me), (e.lanes = i), e
          );
        case Fe:
          return (e = dt(13, n, t, l)), (e.elementType = Fe), (e.lanes = i), e;
        case $e:
          return (e = dt(19, n, t, l)), (e.elementType = $e), (e.lanes = i), e;
        case we:
          return el(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ye:
                s = 10;
                break e;
              case Oe:
                s = 9;
                break e;
              case oe:
                s = 11;
                break e;
              case Qe:
                s = 14;
                break e;
              case he:
                (s = 16), (r = null);
                break e;
            }
          throw Error(u(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = dt(s, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function Cn(e, t, n, r) {
    return (e = dt(7, e, r, t)), (e.lanes = n), e;
  }
  function el(e, t, n, r) {
    return (
      (e = dt(22, e, r, t)),
      (e.elementType = we),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function su(e, t, n) {
    return (e = dt(6, e, null, t)), (e.lanes = n), e;
  }
  function cu(e, t, n) {
    return (
      (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function nm(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Dl(0)),
      (this.expirationTimes = Dl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Dl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function fu(e, t, n, r, l, i, s, p, g) {
    return (
      (e = new nm(e, t, n, p, g)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = dt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ei(i),
      e
    );
  }
  function rm(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ue,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Tc(e) {
    if (!e) return Yt;
    e = e._reactInternals;
    e: {
      if (fn(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Xe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Xe(n)) return os(e, n, t);
    }
    return t;
  }
  function Lc(e, t, n, r, l, i, s, p, g) {
    return (
      (e = fu(n, r, !0, e, l, i, s, p, g)),
      (e.context = Tc(null)),
      (n = e.current),
      (r = Ke()),
      (l = nn(n)),
      (i = Mt(r, l)),
      (i.callback = t ?? null),
      Zt(n, i, l),
      (e.current.lanes = l),
      ur(e, l, r),
      qe(e, r),
      e
    );
  }
  function tl(e, t, n, r) {
    var l = t.current,
      i = Ke(),
      s = nn(l);
    return (
      (n = Tc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Mt(i, s)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Zt(l, t, s)),
      e !== null && (wt(e, l, s, i), Io(e, l, s)),
      s
    );
  }
  function nl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ic(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function du(e, t) {
    Ic(e, t), (e = e.alternate) && Ic(e, t);
  }
  function om() {
    return null;
  }
  var Mc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function pu(e) {
    this._internalRoot = e;
  }
  (rl.prototype.render = pu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      tl(e, t, null, null);
    }),
    (rl.prototype.unmount = pu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          xn(function () {
            tl(null, e, null, null);
          }),
            (t[_t] = null);
        }
      });
  function rl(e) {
    this._internalRoot = e;
  }
  rl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = va();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
      Ht.splice(n, 0, e), n === 0 && wa(e);
    }
  };
  function mu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ol(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Oc() {}
  function lm(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var P = nl(s);
          i.call(P);
        };
      }
      var s = Lc(t, r, e, 0, null, !1, !1, "", Oc);
      return (
        (e._reactRootContainer = s),
        (e[_t] = s.current),
        Sr(e.nodeType === 8 ? e.parentNode : e),
        xn(),
        s
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var p = r;
      r = function () {
        var P = nl(g);
        p.call(P);
      };
    }
    var g = fu(e, 0, !1, null, null, !1, !1, "", Oc);
    return (
      (e._reactRootContainer = g),
      (e[_t] = g.current),
      Sr(e.nodeType === 8 ? e.parentNode : e),
      xn(function () {
        tl(t, g, n, r);
      }),
      g
    );
  }
  function ll(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var s = i;
      if (typeof l == "function") {
        var p = l;
        l = function () {
          var g = nl(s);
          p.call(g);
        };
      }
      tl(t, s, e, l);
    } else s = lm(n, t, e, l, r);
    return nl(s);
  }
  (ma = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ir(t.pendingLanes);
          n !== 0 &&
            (Al(t, n | 1),
            qe(t, ze()),
            (ie & 6) === 0 && ((Gn = ze() + 500), Xt()));
        }
        break;
      case 13:
        xn(function () {
          var r = It(e, 1);
          if (r !== null) {
            var l = Ke();
            wt(r, e, 1, l);
          }
        }),
          du(e, 1);
    }
  }),
    ($l = function (e) {
      if (e.tag === 13) {
        var t = It(e, 134217728);
        if (t !== null) {
          var n = Ke();
          wt(t, e, 134217728, n);
        }
        du(e, 134217728);
      }
    }),
    (ha = function (e) {
      if (e.tag === 13) {
        var t = nn(e),
          n = It(e, t);
        if (n !== null) {
          var r = Ke();
          wt(n, e, t, r);
        }
        du(e, t);
      }
    }),
    (va = function () {
      return pe;
    }),
    (ga = function (e, t) {
      var n = pe;
      try {
        return (pe = e), t();
      } finally {
        pe = n;
      }
    }),
    (Ll = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Cl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = ko(r);
                if (!l) throw Error(u(90));
                Vu(r), Cl(r, l);
              }
            }
          }
          break;
        case "textarea":
          Qu(e, n);
          break;
        case "select":
          (t = n.value), t != null && En(e, !!n.multiple, t, !1);
      }
    }),
    (ta = lu),
    (na = xn);
  var im = { usingClientEntryPoint: !1, Events: [Er, On, ko, qu, ea, lu] },
    Ar = {
      findFiberByHostInstance: dn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    um = {
      bundleType: Ar.bundleType,
      version: Ar.version,
      rendererPackageName: Ar.rendererPackageName,
      rendererConfig: Ar.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Q.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ia(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ar.findFiberByHostInstance || om,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!il.isDisabled && il.supportsFiber)
      try {
        (no = il.inject(um)), (kt = il);
      } catch {}
  }
  return (
    (et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = im),
    (et.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!mu(t)) throw Error(u(200));
      return rm(e, t, null, n);
    }),
    (et.createRoot = function (e, t) {
      if (!mu(e)) throw Error(u(299));
      var n = !1,
        r = "",
        l = Mc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = fu(e, 1, !1, null, null, n, !1, r, l)),
        (e[_t] = t.current),
        Sr(e.nodeType === 8 ? e.parentNode : e),
        new pu(t)
      );
    }),
    (et.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(u(188))
          : ((e = Object.keys(e).join(",")), Error(u(268, e)));
      return (e = ia(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (et.flushSync = function (e) {
      return xn(e);
    }),
    (et.hydrate = function (e, t, n) {
      if (!ol(t)) throw Error(u(200));
      return ll(null, e, t, !0, n);
    }),
    (et.hydrateRoot = function (e, t, n) {
      if (!mu(e)) throw Error(u(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        s = Mc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = Lc(t, null, e, 1, n ?? null, l, !1, i, s)),
        (e[_t] = t.current),
        Sr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new rl(t);
    }),
    (et.render = function (e, t, n) {
      if (!ol(t)) throw Error(u(200));
      return ll(null, e, t, !1, n);
    }),
    (et.unmountComponentAtNode = function (e) {
      if (!ol(e)) throw Error(u(40));
      return e._reactRootContainer
        ? (xn(function () {
            ll(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[_t] = null);
            });
          }),
          !0)
        : !1;
    }),
    (et.unstable_batchedUpdates = lu),
    (et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!ol(n)) throw Error(u(200));
      if (e == null || e._reactInternals === void 0) throw Error(u(38));
      return ll(e, t, n, !1, r);
    }),
    (et.version = "18.3.1-next-f1338f8080-20240426"),
    et
  );
}
var Bc;
function lf() {
  if (Bc) return gu.exports;
  Bc = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (a) {
        console.error(a);
      }
  }
  return o(), (gu.exports = vm()), gu.exports;
}
var Wc;
function gm() {
  if (Wc) return ul;
  Wc = 1;
  var o = lf();
  return (ul.createRoot = o.createRoot), (ul.hydrateRoot = o.hydrateRoot), ul;
}
var ym = gm(),
  Ur = {},
  Hc;
function wm() {
  if (Hc) return Ur;
  (Hc = 1),
    Object.defineProperty(Ur, "__esModule", { value: !0 }),
    (Ur.parse = h),
    (Ur.serialize = y);
  const o = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    a = /^[\u0021-\u003A\u003C-\u007E]*$/,
    u =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    c = /^[\u0020-\u003A\u003D-\u007E]*$/,
    f = Object.prototype.toString,
    d = (() => {
      const R = function () {};
      return (R.prototype = Object.create(null)), R;
    })();
  function h(R, M) {
    const z = new d(),
      L = R.length;
    if (L < 2) return z;
    const _ = (M == null ? void 0 : M.decode) || C;
    let T = 0;
    do {
      const V = R.indexOf("=", T);
      if (V === -1) break;
      const D = R.indexOf(";", T),
        Q = D === -1 ? L : D;
      if (V > Q) {
        T = R.lastIndexOf(";", V - 1) + 1;
        continue;
      }
      const te = m(R, T, V),
        ue = v(R, V, te),
        fe = R.slice(te, ue);
      if (z[fe] === void 0) {
        let re = m(R, V + 1, Q),
          me = v(R, Q, re);
        const ye = _(R.slice(re, me));
        z[fe] = ye;
      }
      T = Q + 1;
    } while (T < L);
    return z;
  }
  function m(R, M, z) {
    do {
      const L = R.charCodeAt(M);
      if (L !== 32 && L !== 9) return M;
    } while (++M < z);
    return z;
  }
  function v(R, M, z) {
    for (; M > z; ) {
      const L = R.charCodeAt(--M);
      if (L !== 32 && L !== 9) return M + 1;
    }
    return z;
  }
  function y(R, M, z) {
    const L = (z == null ? void 0 : z.encode) || encodeURIComponent;
    if (!o.test(R)) throw new TypeError(`argument name is invalid: ${R}`);
    const _ = L(M);
    if (!a.test(_)) throw new TypeError(`argument val is invalid: ${M}`);
    let T = R + "=" + _;
    if (!z) return T;
    if (z.maxAge !== void 0) {
      if (!Number.isInteger(z.maxAge))
        throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);
      T += "; Max-Age=" + z.maxAge;
    }
    if (z.domain) {
      if (!u.test(z.domain))
        throw new TypeError(`option domain is invalid: ${z.domain}`);
      T += "; Domain=" + z.domain;
    }
    if (z.path) {
      if (!c.test(z.path))
        throw new TypeError(`option path is invalid: ${z.path}`);
      T += "; Path=" + z.path;
    }
    if (z.expires) {
      if (!N(z.expires) || !Number.isFinite(z.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${z.expires}`);
      T += "; Expires=" + z.expires.toUTCString();
    }
    if (
      (z.httpOnly && (T += "; HttpOnly"),
      z.secure && (T += "; Secure"),
      z.partitioned && (T += "; Partitioned"),
      z.priority)
    )
      switch (
        typeof z.priority == "string" ? z.priority.toLowerCase() : void 0
      ) {
        case "low":
          T += "; Priority=Low";
          break;
        case "medium":
          T += "; Priority=Medium";
          break;
        case "high":
          T += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${z.priority}`);
      }
    if (z.sameSite)
      switch (
        typeof z.sameSite == "string" ? z.sameSite.toLowerCase() : z.sameSite
      ) {
        case !0:
        case "strict":
          T += "; SameSite=Strict";
          break;
        case "lax":
          T += "; SameSite=Lax";
          break;
        case "none":
          T += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${z.sameSite}`);
      }
    return T;
  }
  function C(R) {
    if (R.indexOf("%") === -1) return R;
    try {
      return decodeURIComponent(R);
    } catch {
      return R;
    }
  }
  function N(R) {
    return f.call(R) === "[object Date]";
  }
  return Ur;
}
wm();
var bc = "popstate";
function xm(o = {}) {
  function a(c, f) {
    let { pathname: d, search: h, hash: m } = c.location;
    return Eu(
      "",
      { pathname: d, search: h, hash: m },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default"
    );
  }
  function u(c, f) {
    return typeof f == "string" ? f : Qr(f);
  }
  return km(a, u, null, o);
}
function Re(o, a) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(a);
}
function xt(o, a) {
  if (!o) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function Sm() {
  return Math.random().toString(36).substring(2, 10);
}
function Qc(o, a) {
  return { usr: o.state, key: o.key, idx: a };
}
function Eu(o, a, u = null, c) {
  return {
    pathname: typeof o == "string" ? o : o.pathname,
    search: "",
    hash: "",
    ...(typeof a == "string" ? Xn(a) : a),
    state: u,
    key: (a && a.key) || c || Sm(),
  };
}
function Qr({ pathname: o = "/", search: a = "", hash: u = "" }) {
  return (
    a && a !== "?" && (o += a.charAt(0) === "?" ? a : "?" + a),
    u && u !== "#" && (o += u.charAt(0) === "#" ? u : "#" + u),
    o
  );
}
function Xn(o) {
  let a = {};
  if (o) {
    let u = o.indexOf("#");
    u >= 0 && ((a.hash = o.substring(u)), (o = o.substring(0, u)));
    let c = o.indexOf("?");
    c >= 0 && ((a.search = o.substring(c)), (o = o.substring(0, c))),
      o && (a.pathname = o);
  }
  return a;
}
function km(o, a, u, c = {}) {
  let { window: f = document.defaultView, v5Compat: d = !1 } = c,
    h = f.history,
    m = "POP",
    v = null,
    y = C();
  y == null && ((y = 0), h.replaceState({ ...h.state, idx: y }, ""));
  function C() {
    return (h.state || { idx: null }).idx;
  }
  function N() {
    m = "POP";
    let _ = C(),
      T = _ == null ? null : _ - y;
    (y = _), v && v({ action: m, location: L.location, delta: T });
  }
  function R(_, T) {
    m = "PUSH";
    let V = Eu(L.location, _, T);
    y = C() + 1;
    let D = Qc(V, y),
      Q = L.createHref(V);
    try {
      h.pushState(D, "", Q);
    } catch (te) {
      if (te instanceof DOMException && te.name === "DataCloneError") throw te;
      f.location.assign(Q);
    }
    d && v && v({ action: m, location: L.location, delta: 1 });
  }
  function M(_, T) {
    m = "REPLACE";
    let V = Eu(L.location, _, T);
    y = C();
    let D = Qc(V, y),
      Q = L.createHref(V);
    h.replaceState(D, "", Q),
      d && v && v({ action: m, location: L.location, delta: 0 });
  }
  function z(_) {
    return Cm(_);
  }
  let L = {
    get action() {
      return m;
    },
    get location() {
      return o(f, h);
    },
    listen(_) {
      if (v) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(bc, N),
        (v = _),
        () => {
          f.removeEventListener(bc, N), (v = null);
        }
      );
    },
    createHref(_) {
      return a(f, _);
    },
    createURL: z,
    encodeLocation(_) {
      let T = z(_);
      return { pathname: T.pathname, search: T.search, hash: T.hash };
    },
    push: R,
    replace: M,
    go(_) {
      return h.go(_);
    },
  };
  return L;
}
function Cm(o, a = !1) {
  let u = "http://localhost";
  typeof window < "u" &&
    (u =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Re(u, "No window.location.(origin|href) available to create URL");
  let c = typeof o == "string" ? o : Qr(o);
  return (
    (c = c.replace(/ $/, "%20")),
    !a && c.startsWith("//") && (c = u + c),
    new URL(c, u)
  );
}
function uf(o, a, u = "/") {
  return Em(o, a, u, !1);
}
function Em(o, a, u, c) {
  let f = typeof a == "string" ? Xn(a) : a,
    d = $t(f.pathname || "/", u);
  if (d == null) return null;
  let h = af(o);
  Rm(h);
  let m = null;
  for (let v = 0; m == null && v < h.length; ++v) {
    let y = jm(d);
    m = Om(h[v], y, c);
  }
  return m;
}
function af(o, a = [], u = [], c = "") {
  let f = (d, h, m) => {
    let v = {
      relativePath: m === void 0 ? d.path || "" : m,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d,
    };
    v.relativePath.startsWith("/") &&
      (Re(
        v.relativePath.startsWith(c),
        `Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (v.relativePath = v.relativePath.slice(c.length)));
    let y = Dt([c, v.relativePath]),
      C = u.concat(v);
    d.children &&
      d.children.length > 0 &&
      (Re(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
      ),
      af(d.children, a, C, y)),
      !(d.path == null && !d.index) &&
        a.push({ path: y, score: Im(y, d.index), routesMeta: C });
  };
  return (
    o.forEach((d, h) => {
      var m;
      if (d.path === "" || !((m = d.path) != null && m.includes("?"))) f(d, h);
      else for (let v of sf(d.path)) f(d, h, v);
    }),
    a
  );
}
function sf(o) {
  let a = o.split("/");
  if (a.length === 0) return [];
  let [u, ...c] = a,
    f = u.endsWith("?"),
    d = u.replace(/\?$/, "");
  if (c.length === 0) return f ? [d, ""] : [d];
  let h = sf(c.join("/")),
    m = [];
  return (
    m.push(...h.map((v) => (v === "" ? d : [d, v].join("/")))),
    f && m.push(...h),
    m.map((v) => (o.startsWith("/") && v === "" ? "/" : v))
  );
}
function Rm(o) {
  o.sort((a, u) =>
    a.score !== u.score
      ? u.score - a.score
      : Mm(
          a.routesMeta.map((c) => c.childrenIndex),
          u.routesMeta.map((c) => c.childrenIndex)
        )
  );
}
var Pm = /^:[\w-]+$/,
  Nm = 3,
  _m = 2,
  zm = 1,
  Tm = 10,
  Lm = -2,
  Gc = (o) => o === "*";
function Im(o, a) {
  let u = o.split("/"),
    c = u.length;
  return (
    u.some(Gc) && (c += Lm),
    a && (c += _m),
    u
      .filter((f) => !Gc(f))
      .reduce((f, d) => f + (Pm.test(d) ? Nm : d === "" ? zm : Tm), c)
  );
}
function Mm(o, a) {
  return o.length === a.length && o.slice(0, -1).every((c, f) => c === a[f])
    ? o[o.length - 1] - a[a.length - 1]
    : 0;
}
function Om(o, a, u = !1) {
  let { routesMeta: c } = o,
    f = {},
    d = "/",
    h = [];
  for (let m = 0; m < c.length; ++m) {
    let v = c[m],
      y = m === c.length - 1,
      C = d === "/" ? a : a.slice(d.length) || "/",
      N = pl(
        { path: v.relativePath, caseSensitive: v.caseSensitive, end: y },
        C
      ),
      R = v.route;
    if (
      (!N &&
        y &&
        u &&
        !c[c.length - 1].route.index &&
        (N = pl(
          { path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 },
          C
        )),
      !N)
    )
      return null;
    Object.assign(f, N.params),
      h.push({
        params: f,
        pathname: Dt([d, N.pathname]),
        pathnameBase: Um(Dt([d, N.pathnameBase])),
        route: R,
      }),
      N.pathnameBase !== "/" && (d = Dt([d, N.pathnameBase]));
  }
  return h;
}
function pl(o, a) {
  typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
  let [u, c] = Fm(o.path, o.caseSensitive, o.end),
    f = a.match(u);
  if (!f) return null;
  let d = f[0],
    h = d.replace(/(.)\/+$/, "$1"),
    m = f.slice(1);
  return {
    params: c.reduce((y, { paramName: C, isOptional: N }, R) => {
      if (C === "*") {
        let z = m[R] || "";
        h = d.slice(0, d.length - z.length).replace(/(.)\/+$/, "$1");
      }
      const M = m[R];
      return (
        N && !M ? (y[C] = void 0) : (y[C] = (M || "").replace(/%2F/g, "/")), y
      );
    }, {}),
    pathname: d,
    pathnameBase: h,
    pattern: o,
  };
}
function Fm(o, a = !1, u = !0) {
  xt(
    o === "*" || !o.endsWith("*") || o.endsWith("/*"),
    `Route path "${o}" will be treated as if it were "${o.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let c = [],
    f =
      "^" +
      o
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, m, v) => (
            c.push({ paramName: m, isOptional: v != null }),
            v ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    o.endsWith("*")
      ? (c.push({ paramName: "*" }),
        (f += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : u
      ? (f += "\\/*$")
      : o !== "" && o !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, a ? void 0 : "i"), c]
  );
}
function jm(o) {
  try {
    return o
      .split("/")
      .map((a) => decodeURIComponent(a).replace(/\//g, "%2F"))
      .join("/");
  } catch (a) {
    return (
      xt(
        !1,
        `The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
      ),
      o
    );
  }
}
function $t(o, a) {
  if (a === "/") return o;
  if (!o.toLowerCase().startsWith(a.toLowerCase())) return null;
  let u = a.endsWith("/") ? a.length - 1 : a.length,
    c = o.charAt(u);
  return c && c !== "/" ? null : o.slice(u) || "/";
}
function Dm(o, a = "/") {
  let {
    pathname: u,
    search: c = "",
    hash: f = "",
  } = typeof o == "string" ? Xn(o) : o;
  return {
    pathname: u ? (u.startsWith("/") ? u : Am(u, a)) : a,
    search: Vm(c),
    hash: Bm(f),
  };
}
function Am(o, a) {
  let u = a.replace(/\/+$/, "").split("/");
  return (
    o.split("/").forEach((f) => {
      f === ".." ? u.length > 1 && u.pop() : f !== "." && u.push(f);
    }),
    u.length > 1 ? u.join("/") : "/"
  );
}
function xu(o, a, u, c) {
  return `Cannot include a '${o}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function $m(o) {
  return o.filter(
    (a, u) => u === 0 || (a.route.path && a.route.path.length > 0)
  );
}
function Tu(o) {
  let a = $m(o);
  return a.map((u, c) => (c === a.length - 1 ? u.pathname : u.pathnameBase));
}
function Lu(o, a, u, c = !1) {
  let f;
  typeof o == "string"
    ? (f = Xn(o))
    : ((f = { ...o }),
      Re(
        !f.pathname || !f.pathname.includes("?"),
        xu("?", "pathname", "search", f)
      ),
      Re(
        !f.pathname || !f.pathname.includes("#"),
        xu("#", "pathname", "hash", f)
      ),
      Re(!f.search || !f.search.includes("#"), xu("#", "search", "hash", f)));
  let d = o === "" || f.pathname === "",
    h = d ? "/" : f.pathname,
    m;
  if (h == null) m = u;
  else {
    let N = a.length - 1;
    if (!c && h.startsWith("..")) {
      let R = h.split("/");
      for (; R[0] === ".."; ) R.shift(), (N -= 1);
      f.pathname = R.join("/");
    }
    m = N >= 0 ? a[N] : "/";
  }
  let v = Dm(f, m),
    y = h && h !== "/" && h.endsWith("/"),
    C = (d || h === ".") && u.endsWith("/");
  return !v.pathname.endsWith("/") && (y || C) && (v.pathname += "/"), v;
}
var Dt = (o) => o.join("/").replace(/\/\/+/g, "/"),
  Um = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Vm = (o) => (!o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o),
  Bm = (o) => (!o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o);
function Wm(o) {
  return (
    o != null &&
    typeof o.status == "number" &&
    typeof o.statusText == "string" &&
    typeof o.internal == "boolean" &&
    "data" in o
  );
}
var cf = ["POST", "PUT", "PATCH", "DELETE"];
new Set(cf);
var Hm = ["GET", ...cf];
new Set(Hm);
var Jn = w.createContext(null);
Jn.displayName = "DataRouter";
var yl = w.createContext(null);
yl.displayName = "DataRouterState";
var ff = w.createContext({ isTransitioning: !1 });
ff.displayName = "ViewTransition";
var bm = w.createContext(new Map());
bm.displayName = "Fetchers";
var Qm = w.createContext(null);
Qm.displayName = "Await";
var St = w.createContext(null);
St.displayName = "Navigation";
var Gr = w.createContext(null);
Gr.displayName = "Location";
var Nt = w.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Nt.displayName = "Route";
var Iu = w.createContext(null);
Iu.displayName = "RouteError";
function Gm(o, { relative: a } = {}) {
  Re(
    Zn(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: u, navigator: c } = w.useContext(St),
    { hash: f, pathname: d, search: h } = Kr(o, { relative: a }),
    m = d;
  return (
    u !== "/" && (m = d === "/" ? u : Dt([u, d])),
    c.createHref({ pathname: m, search: h, hash: f })
  );
}
function Zn() {
  return w.useContext(Gr) != null;
}
function cn() {
  return (
    Re(
      Zn(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    w.useContext(Gr).location
  );
}
var df =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function pf(o) {
  w.useContext(St).static || w.useLayoutEffect(o);
}
function mf() {
  let { isDataRoute: o } = w.useContext(Nt);
  return o ? ih() : Km();
}
function Km() {
  Re(
    Zn(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let o = w.useContext(Jn),
    { basename: a, navigator: u } = w.useContext(St),
    { matches: c } = w.useContext(Nt),
    { pathname: f } = cn(),
    d = JSON.stringify(Tu(c)),
    h = w.useRef(!1);
  return (
    pf(() => {
      h.current = !0;
    }),
    w.useCallback(
      (v, y = {}) => {
        if ((xt(h.current, df), !h.current)) return;
        if (typeof v == "number") {
          u.go(v);
          return;
        }
        let C = Lu(v, JSON.parse(d), f, y.relative === "path");
        o == null &&
          a !== "/" &&
          (C.pathname = C.pathname === "/" ? a : Dt([a, C.pathname])),
          (y.replace ? u.replace : u.push)(C, y.state, y);
      },
      [a, u, d, f, o]
    )
  );
}
w.createContext(null);
function Kr(o, { relative: a } = {}) {
  let { matches: u } = w.useContext(Nt),
    { pathname: c } = cn(),
    f = JSON.stringify(Tu(u));
  return w.useMemo(() => Lu(o, JSON.parse(f), c, a === "path"), [o, f, c, a]);
}
function Ym(o, a) {
  return hf(o, a);
}
function hf(o, a, u, c) {
  var V;
  Re(
    Zn(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f, static: d } = w.useContext(St),
    { matches: h } = w.useContext(Nt),
    m = h[h.length - 1],
    v = m ? m.params : {},
    y = m ? m.pathname : "/",
    C = m ? m.pathnameBase : "/",
    N = m && m.route;
  {
    let D = (N && N.path) || "";
    vf(
      y,
      !N || D.endsWith("*") || D.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${
        D === "/" ? "*" : `${D}/*`
      }">.`
    );
  }
  let R = cn(),
    M;
  if (a) {
    let D = typeof a == "string" ? Xn(a) : a;
    Re(
      C === "/" || ((V = D.pathname) == null ? void 0 : V.startsWith(C)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${D.pathname}" was given in the \`location\` prop.`
    ),
      (M = D);
  } else M = R;
  let z = M.pathname || "/",
    L = z;
  if (C !== "/") {
    let D = C.replace(/^\//, "").split("/");
    L = "/" + z.replace(/^\//, "").split("/").slice(D.length).join("/");
  }
  let _ =
    !d && u && u.matches && u.matches.length > 0
      ? u.matches
      : uf(o, { pathname: L });
  xt(
    N || _ != null,
    `No routes matched location "${M.pathname}${M.search}${M.hash}" `
  ),
    xt(
      _ == null ||
        _[_.length - 1].route.element !== void 0 ||
        _[_.length - 1].route.Component !== void 0 ||
        _[_.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let T = eh(
    _ &&
      _.map((D) =>
        Object.assign({}, D, {
          params: Object.assign({}, v, D.params),
          pathname: Dt([
            C,
            f.encodeLocation
              ? f.encodeLocation(D.pathname).pathname
              : D.pathname,
          ]),
          pathnameBase:
            D.pathnameBase === "/"
              ? C
              : Dt([
                  C,
                  f.encodeLocation
                    ? f.encodeLocation(D.pathnameBase).pathname
                    : D.pathnameBase,
                ]),
        })
      ),
    h,
    u,
    c
  );
  return a && T
    ? w.createElement(
        Gr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...M,
            },
            navigationType: "POP",
          },
        },
        T
      )
    : T;
}
function Xm() {
  let o = lh(),
    a = Wm(o)
      ? `${o.status} ${o.statusText}`
      : o instanceof Error
      ? o.message
      : JSON.stringify(o),
    u = o instanceof Error ? o.stack : null,
    c = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: c },
    d = { padding: "2px 4px", backgroundColor: c },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", o),
    (h = w.createElement(
      w.Fragment,
      null,
      w.createElement("p", null, "💿 Hey developer 👋"),
      w.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        w.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        w.createElement("code", { style: d }, "errorElement"),
        " prop on your route."
      )
    )),
    w.createElement(
      w.Fragment,
      null,
      w.createElement("h2", null, "Unexpected Application Error!"),
      w.createElement("h3", { style: { fontStyle: "italic" } }, a),
      u ? w.createElement("pre", { style: f }, u) : null,
      h
    )
  );
}
var Jm = w.createElement(Xm, null),
  Zm = class extends w.Component {
    constructor(o) {
      super(o),
        (this.state = {
          location: o.location,
          revalidation: o.revalidation,
          error: o.error,
        });
    }
    static getDerivedStateFromError(o) {
      return { error: o };
    }
    static getDerivedStateFromProps(o, a) {
      return a.location !== o.location ||
        (a.revalidation !== "idle" && o.revalidation === "idle")
        ? { error: o.error, location: o.location, revalidation: o.revalidation }
        : {
            error: o.error !== void 0 ? o.error : a.error,
            location: a.location,
            revalidation: o.revalidation || a.revalidation,
          };
    }
    componentDidCatch(o, a) {
      console.error(
        "React Router caught the following error during render",
        o,
        a
      );
    }
    render() {
      return this.state.error !== void 0
        ? w.createElement(
            Nt.Provider,
            { value: this.props.routeContext },
            w.createElement(Iu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function qm({ routeContext: o, match: a, children: u }) {
  let c = w.useContext(Jn);
  return (
    c &&
      c.static &&
      c.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = a.route.id),
    w.createElement(Nt.Provider, { value: o }, u)
  );
}
function eh(o, a = [], u = null, c = null) {
  if (o == null) {
    if (!u) return null;
    if (u.errors) o = u.matches;
    else if (a.length === 0 && !u.initialized && u.matches.length > 0)
      o = u.matches;
    else return null;
  }
  let f = o,
    d = u == null ? void 0 : u.errors;
  if (d != null) {
    let v = f.findIndex(
      (y) => y.route.id && (d == null ? void 0 : d[y.route.id]) !== void 0
    );
    Re(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        d
      ).join(",")}`
    ),
      (f = f.slice(0, Math.min(f.length, v + 1)));
  }
  let h = !1,
    m = -1;
  if (u)
    for (let v = 0; v < f.length; v++) {
      let y = f[v];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = v),
        y.route.id)
      ) {
        let { loaderData: C, errors: N } = u,
          R =
            y.route.loader &&
            !C.hasOwnProperty(y.route.id) &&
            (!N || N[y.route.id] === void 0);
        if (y.route.lazy || R) {
          (h = !0), m >= 0 ? (f = f.slice(0, m + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((v, y, C) => {
    let N,
      R = !1,
      M = null,
      z = null;
    u &&
      ((N = d && y.route.id ? d[y.route.id] : void 0),
      (M = y.route.errorElement || Jm),
      h &&
        (m < 0 && C === 0
          ? (vf(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (R = !0),
            (z = null))
          : m === C &&
            ((R = !0), (z = y.route.hydrateFallbackElement || null))));
    let L = a.concat(f.slice(0, C + 1)),
      _ = () => {
        let T;
        return (
          N
            ? (T = M)
            : R
            ? (T = z)
            : y.route.Component
            ? (T = w.createElement(y.route.Component, null))
            : y.route.element
            ? (T = y.route.element)
            : (T = v),
          w.createElement(qm, {
            match: y,
            routeContext: { outlet: v, matches: L, isDataRoute: u != null },
            children: T,
          })
        );
      };
    return u && (y.route.ErrorBoundary || y.route.errorElement || C === 0)
      ? w.createElement(Zm, {
          location: u.location,
          revalidation: u.revalidation,
          component: M,
          error: N,
          children: _(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
        })
      : _();
  }, null);
}
function Mu(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function th(o) {
  let a = w.useContext(Jn);
  return Re(a, Mu(o)), a;
}
function nh(o) {
  let a = w.useContext(yl);
  return Re(a, Mu(o)), a;
}
function rh(o) {
  let a = w.useContext(Nt);
  return Re(a, Mu(o)), a;
}
function Ou(o) {
  let a = rh(o),
    u = a.matches[a.matches.length - 1];
  return (
    Re(
      u.route.id,
      `${o} can only be used on routes that contain a unique "id"`
    ),
    u.route.id
  );
}
function oh() {
  return Ou("useRouteId");
}
function lh() {
  var c;
  let o = w.useContext(Iu),
    a = nh("useRouteError"),
    u = Ou("useRouteError");
  return o !== void 0 ? o : (c = a.errors) == null ? void 0 : c[u];
}
function ih() {
  let { router: o } = th("useNavigate"),
    a = Ou("useNavigate"),
    u = w.useRef(!1);
  return (
    pf(() => {
      u.current = !0;
    }),
    w.useCallback(
      async (f, d = {}) => {
        xt(u.current, df),
          u.current &&
            (typeof f == "number"
              ? o.navigate(f)
              : await o.navigate(f, { fromRouteId: a, ...d }));
      },
      [o, a]
    )
  );
}
var Kc = {};
function vf(o, a, u) {
  !a && !Kc[o] && ((Kc[o] = !0), xt(!1, u));
}
w.memo(uh);
function uh({ routes: o, future: a, state: u }) {
  return hf(o, void 0, u, a);
}
function Yc({ to: o, replace: a, state: u, relative: c }) {
  Re(
    Zn(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = w.useContext(St);
  xt(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: d } = w.useContext(Nt),
    { pathname: h } = cn(),
    m = mf(),
    v = Lu(o, Tu(d), h, c === "path"),
    y = JSON.stringify(v);
  return (
    w.useEffect(() => {
      m(JSON.parse(y), { replace: a, state: u, relative: c });
    }, [m, y, c, a, u]),
    null
  );
}
function cl(o) {
  Re(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function ah({
  basename: o = "/",
  children: a = null,
  location: u,
  navigationType: c = "POP",
  navigator: f,
  static: d = !1,
}) {
  Re(
    !Zn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = o.replace(/^\/*/, "/"),
    m = w.useMemo(
      () => ({ basename: h, navigator: f, static: d, future: {} }),
      [h, f, d]
    );
  typeof u == "string" && (u = Xn(u));
  let {
      pathname: v = "/",
      search: y = "",
      hash: C = "",
      state: N = null,
      key: R = "default",
    } = u,
    M = w.useMemo(() => {
      let z = $t(v, h);
      return z == null
        ? null
        : {
            location: { pathname: z, search: y, hash: C, state: N, key: R },
            navigationType: c,
          };
    }, [h, v, y, C, N, R, c]);
  return (
    xt(
      M != null,
      `<Router basename="${h}"> is not able to match the URL "${v}${y}${C}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    M == null
      ? null
      : w.createElement(
          St.Provider,
          { value: m },
          w.createElement(Gr.Provider, { children: a, value: M })
        )
  );
}
function sh({ children: o, location: a }) {
  return Ym(Ru(o), a);
}
function Ru(o, a = []) {
  let u = [];
  return (
    w.Children.forEach(o, (c, f) => {
      if (!w.isValidElement(c)) return;
      let d = [...a, f];
      if (c.type === w.Fragment) {
        u.push.apply(u, Ru(c.props.children, d));
        return;
      }
      Re(
        c.type === cl,
        `[${
          typeof c.type == "string" ? c.type : c.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Re(
          !c.props.index || !c.props.children,
          "An index route cannot have child routes."
        );
      let h = {
        id: c.props.id || d.join("-"),
        caseSensitive: c.props.caseSensitive,
        element: c.props.element,
        Component: c.props.Component,
        index: c.props.index,
        path: c.props.path,
        loader: c.props.loader,
        action: c.props.action,
        hydrateFallbackElement: c.props.hydrateFallbackElement,
        HydrateFallback: c.props.HydrateFallback,
        errorElement: c.props.errorElement,
        ErrorBoundary: c.props.ErrorBoundary,
        hasErrorBoundary:
          c.props.hasErrorBoundary === !0 ||
          c.props.ErrorBoundary != null ||
          c.props.errorElement != null,
        shouldRevalidate: c.props.shouldRevalidate,
        handle: c.props.handle,
        lazy: c.props.lazy,
      };
      c.props.children && (h.children = Ru(c.props.children, d)), u.push(h);
    }),
    u
  );
}
var fl = "get",
  dl = "application/x-www-form-urlencoded";
function wl(o) {
  return o != null && typeof o.tagName == "string";
}
function ch(o) {
  return wl(o) && o.tagName.toLowerCase() === "button";
}
function fh(o) {
  return wl(o) && o.tagName.toLowerCase() === "form";
}
function dh(o) {
  return wl(o) && o.tagName.toLowerCase() === "input";
}
function ph(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function mh(o, a) {
  return o.button === 0 && (!a || a === "_self") && !ph(o);
}
var al = null;
function hh() {
  if (al === null)
    try {
      new FormData(document.createElement("form"), 0), (al = !1);
    } catch {
      al = !0;
    }
  return al;
}
var vh = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Su(o) {
  return o != null && !vh.has(o)
    ? (xt(
        !1,
        `"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${dl}"`
      ),
      null)
    : o;
}
function gh(o, a) {
  let u, c, f, d, h;
  if (fh(o)) {
    let m = o.getAttribute("action");
    (c = m ? $t(m, a) : null),
      (u = o.getAttribute("method") || fl),
      (f = Su(o.getAttribute("enctype")) || dl),
      (d = new FormData(o));
  } else if (ch(o) || (dh(o) && (o.type === "submit" || o.type === "image"))) {
    let m = o.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let v = o.getAttribute("formaction") || m.getAttribute("action");
    if (
      ((c = v ? $t(v, a) : null),
      (u = o.getAttribute("formmethod") || m.getAttribute("method") || fl),
      (f =
        Su(o.getAttribute("formenctype")) ||
        Su(m.getAttribute("enctype")) ||
        dl),
      (d = new FormData(m, o)),
      !hh())
    ) {
      let { name: y, type: C, value: N } = o;
      if (C === "image") {
        let R = y ? `${y}.` : "";
        d.append(`${R}x`, "0"), d.append(`${R}y`, "0");
      } else y && d.append(y, N);
    }
  } else {
    if (wl(o))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (u = fl), (c = null), (f = dl), (h = o);
  }
  return (
    d && f === "text/plain" && ((h = d), (d = void 0)),
    { action: c, method: u.toLowerCase(), encType: f, formData: d, body: h }
  );
}
function Fu(o, a) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(a);
}
async function yh(o, a) {
  if (o.id in a) return a[o.id];
  try {
    let u = await import(o.module);
    return (a[o.id] = u), u;
  } catch (u) {
    return (
      console.error(
        `Error loading route module \`${o.module}\`, reloading page...`
      ),
      console.error(u),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function wh(o) {
  return o == null
    ? !1
    : o.href == null
    ? o.rel === "preload" &&
      typeof o.imageSrcSet == "string" &&
      typeof o.imageSizes == "string"
    : typeof o.rel == "string" && typeof o.href == "string";
}
async function xh(o, a, u) {
  let c = await Promise.all(
    o.map(async (f) => {
      let d = a.routes[f.route.id];
      if (d) {
        let h = await yh(d, u);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return Eh(
    c
      .flat(1)
      .filter(wh)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" }
      )
  );
}
function Xc(o, a, u, c, f, d) {
  let h = (v, y) => (u[y] ? v.route.id !== u[y].route.id : !0),
    m = (v, y) => {
      var C;
      return (
        u[y].pathname !== v.pathname ||
        (((C = u[y].route.path) == null ? void 0 : C.endsWith("*")) &&
          u[y].params["*"] !== v.params["*"])
      );
    };
  return d === "assets"
    ? a.filter((v, y) => h(v, y) || m(v, y))
    : d === "data"
    ? a.filter((v, y) => {
        var N;
        let C = c.routes[v.route.id];
        if (!C || !C.hasLoader) return !1;
        if (h(v, y) || m(v, y)) return !0;
        if (v.route.shouldRevalidate) {
          let R = v.route.shouldRevalidate({
            currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
            currentParams: ((N = u[0]) == null ? void 0 : N.params) || {},
            nextUrl: new URL(o, window.origin),
            nextParams: v.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof R == "boolean") return R;
        }
        return !0;
      })
    : [];
}
function Sh(o, a, { includeHydrateFallback: u } = {}) {
  return kh(
    o
      .map((c) => {
        let f = a.routes[c.route.id];
        if (!f) return [];
        let d = [f.module];
        return (
          f.clientActionModule && (d = d.concat(f.clientActionModule)),
          f.clientLoaderModule && (d = d.concat(f.clientLoaderModule)),
          u &&
            f.hydrateFallbackModule &&
            (d = d.concat(f.hydrateFallbackModule)),
          f.imports && (d = d.concat(f.imports)),
          d
        );
      })
      .flat(1)
  );
}
function kh(o) {
  return [...new Set(o)];
}
function Ch(o) {
  let a = {},
    u = Object.keys(o).sort();
  for (let c of u) a[c] = o[c];
  return a;
}
function Eh(o, a) {
  let u = new Set();
  return (
    new Set(a),
    o.reduce((c, f) => {
      let d = JSON.stringify(Ch(f));
      return u.has(d) || (u.add(d), c.push({ key: d, link: f })), c;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Rh = new Set([100, 101, 204, 205]);
function Ph(o, a) {
  let u =
    typeof o == "string"
      ? new URL(
          o,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : o;
  return (
    u.pathname === "/"
      ? (u.pathname = "_root.data")
      : a && $t(u.pathname, a) === "/"
      ? (u.pathname = `${a.replace(/\/$/, "")}/_root.data`)
      : (u.pathname = `${u.pathname.replace(/\/$/, "")}.data`),
    u
  );
}
function gf() {
  let o = w.useContext(Jn);
  return (
    Fu(
      o,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    o
  );
}
function Nh() {
  let o = w.useContext(yl);
  return (
    Fu(
      o,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    o
  );
}
var ju = w.createContext(void 0);
ju.displayName = "FrameworkContext";
function yf() {
  let o = w.useContext(ju);
  return (
    Fu(o, "You must render this element inside a <HydratedRouter> element"), o
  );
}
function _h(o, a) {
  let u = w.useContext(ju),
    [c, f] = w.useState(!1),
    [d, h] = w.useState(!1),
    {
      onFocus: m,
      onBlur: v,
      onMouseEnter: y,
      onMouseLeave: C,
      onTouchStart: N,
    } = a,
    R = w.useRef(null);
  w.useEffect(() => {
    if ((o === "render" && h(!0), o === "viewport")) {
      let L = (T) => {
          T.forEach((V) => {
            h(V.isIntersecting);
          });
        },
        _ = new IntersectionObserver(L, { threshold: 0.5 });
      return (
        R.current && _.observe(R.current),
        () => {
          _.disconnect();
        }
      );
    }
  }, [o]),
    w.useEffect(() => {
      if (c) {
        let L = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(L);
        };
      }
    }, [c]);
  let M = () => {
      f(!0);
    },
    z = () => {
      f(!1), h(!1);
    };
  return u
    ? o !== "intent"
      ? [d, R, {}]
      : [
          d,
          R,
          {
            onFocus: Vr(m, M),
            onBlur: Vr(v, z),
            onMouseEnter: Vr(y, M),
            onMouseLeave: Vr(C, z),
            onTouchStart: Vr(N, M),
          },
        ]
    : [!1, R, {}];
}
function Vr(o, a) {
  return (u) => {
    o && o(u), u.defaultPrevented || a(u);
  };
}
function zh({ page: o, ...a }) {
  let { router: u } = gf(),
    c = w.useMemo(() => uf(u.routes, o, u.basename), [u.routes, o, u.basename]);
  return c ? w.createElement(Lh, { page: o, matches: c, ...a }) : null;
}
function Th(o) {
  let { manifest: a, routeModules: u } = yf(),
    [c, f] = w.useState([]);
  return (
    w.useEffect(() => {
      let d = !1;
      return (
        xh(o, a, u).then((h) => {
          d || f(h);
        }),
        () => {
          d = !0;
        }
      );
    }, [o, a, u]),
    c
  );
}
function Lh({ page: o, matches: a, ...u }) {
  let c = cn(),
    { manifest: f, routeModules: d } = yf(),
    { basename: h } = gf(),
    { loaderData: m, matches: v } = Nh(),
    y = w.useMemo(() => Xc(o, a, v, f, c, "data"), [o, a, v, f, c]),
    C = w.useMemo(() => Xc(o, a, v, f, c, "assets"), [o, a, v, f, c]),
    N = w.useMemo(() => {
      if (o === c.pathname + c.search + c.hash) return [];
      let z = new Set(),
        L = !1;
      if (
        (a.forEach((T) => {
          var D;
          let V = f.routes[T.route.id];
          !V ||
            !V.hasLoader ||
            ((!y.some((Q) => Q.route.id === T.route.id) &&
              T.route.id in m &&
              (D = d[T.route.id]) != null &&
              D.shouldRevalidate) ||
            V.hasClientLoader
              ? (L = !0)
              : z.add(T.route.id));
        }),
        z.size === 0)
      )
        return [];
      let _ = Ph(o, h);
      return (
        L &&
          z.size > 0 &&
          _.searchParams.set(
            "_routes",
            a
              .filter((T) => z.has(T.route.id))
              .map((T) => T.route.id)
              .join(",")
          ),
        [_.pathname + _.search]
      );
    }, [h, m, c, f, y, a, o, d]),
    R = w.useMemo(() => Sh(C, f), [C, f]),
    M = Th(C);
  return w.createElement(
    w.Fragment,
    null,
    N.map((z) =>
      w.createElement("link", {
        key: z,
        rel: "prefetch",
        as: "fetch",
        href: z,
        ...u,
      })
    ),
    R.map((z) =>
      w.createElement("link", { key: z, rel: "modulepreload", href: z, ...u })
    ),
    M.map(({ key: z, link: L }) => w.createElement("link", { key: z, ...L }))
  );
}
function Ih(...o) {
  return (a) => {
    o.forEach((u) => {
      typeof u == "function" ? u(a) : u != null && (u.current = a);
    });
  };
}
var wf =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  wf && (window.__reactRouterVersion = "7.6.0");
} catch {}
function Mh({ basename: o, children: a, window: u }) {
  let c = w.useRef();
  c.current == null && (c.current = xm({ window: u, v5Compat: !0 }));
  let f = c.current,
    [d, h] = w.useState({ action: f.action, location: f.location }),
    m = w.useCallback(
      (v) => {
        w.startTransition(() => h(v));
      },
      [h]
    );
  return (
    w.useLayoutEffect(() => f.listen(m), [f, m]),
    w.createElement(ah, {
      basename: o,
      children: a,
      location: d.location,
      navigationType: d.action,
      navigator: f,
    })
  );
}
var xf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Sf = w.forwardRef(function (
    {
      onClick: a,
      discover: u = "render",
      prefetch: c = "none",
      relative: f,
      reloadDocument: d,
      replace: h,
      state: m,
      target: v,
      to: y,
      preventScrollReset: C,
      viewTransition: N,
      ...R
    },
    M
  ) {
    let { basename: z } = w.useContext(St),
      L = typeof y == "string" && xf.test(y),
      _,
      T = !1;
    if (typeof y == "string" && L && ((_ = y), wf))
      try {
        let me = new URL(window.location.href),
          ye = y.startsWith("//") ? new URL(me.protocol + y) : new URL(y),
          Oe = $t(ye.pathname, z);
        ye.origin === me.origin && Oe != null
          ? (y = Oe + ye.search + ye.hash)
          : (T = !0);
      } catch {
        xt(
          !1,
          `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let V = Gm(y, { relative: f }),
      [D, Q, te] = _h(c, R),
      ue = Dh(y, {
        replace: h,
        state: m,
        target: v,
        preventScrollReset: C,
        relative: f,
        viewTransition: N,
      });
    function fe(me) {
      a && a(me), me.defaultPrevented || ue(me);
    }
    let re = w.createElement("a", {
      ...R,
      ...te,
      href: _ || V,
      onClick: T || d ? a : fe,
      ref: Ih(M, Q),
      target: v,
      "data-discover": !L && u === "render" ? "true" : void 0,
    });
    return D && !L
      ? w.createElement(w.Fragment, null, re, w.createElement(zh, { page: V }))
      : re;
  });
Sf.displayName = "Link";
var Oh = w.forwardRef(function (
  {
    "aria-current": a = "page",
    caseSensitive: u = !1,
    className: c = "",
    end: f = !1,
    style: d,
    to: h,
    viewTransition: m,
    children: v,
    ...y
  },
  C
) {
  let N = Kr(h, { relative: y.relative }),
    R = cn(),
    M = w.useContext(yl),
    { navigator: z, basename: L } = w.useContext(St),
    _ = M != null && Bh(N) && m === !0,
    T = z.encodeLocation ? z.encodeLocation(N).pathname : N.pathname,
    V = R.pathname,
    D =
      M && M.navigation && M.navigation.location
        ? M.navigation.location.pathname
        : null;
  u ||
    ((V = V.toLowerCase()),
    (D = D ? D.toLowerCase() : null),
    (T = T.toLowerCase())),
    D && L && (D = $t(D, L) || D);
  const Q = T !== "/" && T.endsWith("/") ? T.length - 1 : T.length;
  let te = V === T || (!f && V.startsWith(T) && V.charAt(Q) === "/"),
    ue =
      D != null &&
      (D === T || (!f && D.startsWith(T) && D.charAt(T.length) === "/")),
    fe = { isActive: te, isPending: ue, isTransitioning: _ },
    re = te ? a : void 0,
    me;
  typeof c == "function"
    ? (me = c(fe))
    : (me = [
        c,
        te ? "active" : null,
        ue ? "pending" : null,
        _ ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ye = typeof d == "function" ? d(fe) : d;
  return w.createElement(
    Sf,
    {
      ...y,
      "aria-current": re,
      className: me,
      ref: C,
      style: ye,
      to: h,
      viewTransition: m,
    },
    typeof v == "function" ? v(fe) : v
  );
});
Oh.displayName = "NavLink";
var Fh = w.forwardRef(
  (
    {
      discover: o = "render",
      fetcherKey: a,
      navigate: u,
      reloadDocument: c,
      replace: f,
      state: d,
      method: h = fl,
      action: m,
      onSubmit: v,
      relative: y,
      preventScrollReset: C,
      viewTransition: N,
      ...R
    },
    M
  ) => {
    let z = Uh(),
      L = Vh(m, { relative: y }),
      _ = h.toLowerCase() === "get" ? "get" : "post",
      T = typeof m == "string" && xf.test(m),
      V = (D) => {
        if ((v && v(D), D.defaultPrevented)) return;
        D.preventDefault();
        let Q = D.nativeEvent.submitter,
          te = (Q == null ? void 0 : Q.getAttribute("formmethod")) || h;
        z(Q || D.currentTarget, {
          fetcherKey: a,
          method: te,
          navigate: u,
          replace: f,
          state: d,
          relative: y,
          preventScrollReset: C,
          viewTransition: N,
        });
      };
    return w.createElement("form", {
      ref: M,
      method: _,
      action: L,
      onSubmit: c ? v : V,
      ...R,
      "data-discover": !T && o === "render" ? "true" : void 0,
    });
  }
);
Fh.displayName = "Form";
function jh(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function kf(o) {
  let a = w.useContext(Jn);
  return Re(a, jh(o)), a;
}
function Dh(
  o,
  {
    target: a,
    replace: u,
    state: c,
    preventScrollReset: f,
    relative: d,
    viewTransition: h,
  } = {}
) {
  let m = mf(),
    v = cn(),
    y = Kr(o, { relative: d });
  return w.useCallback(
    (C) => {
      if (mh(C, a)) {
        C.preventDefault();
        let N = u !== void 0 ? u : Qr(v) === Qr(y);
        m(o, {
          replace: N,
          state: c,
          preventScrollReset: f,
          relative: d,
          viewTransition: h,
        });
      }
    },
    [v, m, y, u, c, a, o, f, d, h]
  );
}
var Ah = 0,
  $h = () => `__${String(++Ah)}__`;
function Uh() {
  let { router: o } = kf("useSubmit"),
    { basename: a } = w.useContext(St),
    u = oh();
  return w.useCallback(
    async (c, f = {}) => {
      let { action: d, method: h, encType: m, formData: v, body: y } = gh(c, a);
      if (f.navigate === !1) {
        let C = f.fetcherKey || $h();
        await o.fetch(C, u, f.action || d, {
          preventScrollReset: f.preventScrollReset,
          formData: v,
          body: y,
          formMethod: f.method || h,
          formEncType: f.encType || m,
          flushSync: f.flushSync,
        });
      } else
        await o.navigate(f.action || d, {
          preventScrollReset: f.preventScrollReset,
          formData: v,
          body: y,
          formMethod: f.method || h,
          formEncType: f.encType || m,
          replace: f.replace,
          state: f.state,
          fromRouteId: u,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [o, a, u]
  );
}
function Vh(o, { relative: a } = {}) {
  let { basename: u } = w.useContext(St),
    c = w.useContext(Nt);
  Re(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1),
    d = { ...Kr(o || ".", { relative: a }) },
    h = cn();
  if (o == null) {
    d.search = h.search;
    let m = new URLSearchParams(d.search),
      v = m.getAll("index");
    if (v.some((C) => C === "")) {
      m.delete("index"),
        v.filter((N) => N).forEach((N) => m.append("index", N));
      let C = m.toString();
      d.search = C ? `?${C}` : "";
    }
  }
  return (
    (!o || o === ".") &&
      f.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    u !== "/" && (d.pathname = d.pathname === "/" ? u : Dt([u, d.pathname])),
    Qr(d)
  );
}
function Bh(o, a = {}) {
  let u = w.useContext(ff);
  Re(
    u != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = kf("useViewTransitionState"),
    f = Kr(o, { relative: a.relative });
  if (!u.isTransitioning) return !1;
  let d = $t(u.currentLocation.pathname, c) || u.currentLocation.pathname,
    h = $t(u.nextLocation.pathname, c) || u.nextLocation.pathname;
  return pl(f.pathname, h) != null || pl(f.pathname, d) != null;
}
[...Rh];
lf();
function Jc(o, a) {
  if (typeof o == "function") return o(a);
  o != null && (o.current = a);
}
function Cf(...o) {
  return (a) => {
    let u = !1;
    const c = o.map((f) => {
      const d = Jc(f, a);
      return !u && typeof d == "function" && (u = !0), d;
    });
    if (u)
      return () => {
        for (let f = 0; f < c.length; f++) {
          const d = c[f];
          typeof d == "function" ? d() : Jc(o[f], null);
        }
      };
  };
}
function ml(...o) {
  return w.useCallback(Cf(...o), o);
}
function hl(o) {
  const a = Hh(o),
    u = w.forwardRef((c, f) => {
      const { children: d, ...h } = c,
        m = w.Children.toArray(d),
        v = m.find(Qh);
      if (v) {
        const y = v.props.children,
          C = m.map((N) =>
            N === v
              ? w.Children.count(y) > 1
                ? w.Children.only(null)
                : w.isValidElement(y)
                ? y.props.children
                : null
              : N
          );
        return U.jsx(a, {
          ...h,
          ref: f,
          children: w.isValidElement(y) ? w.cloneElement(y, void 0, C) : null,
        });
      }
      return U.jsx(a, { ...h, ref: f, children: d });
    });
  return (u.displayName = `${o}.Slot`), u;
}
var Wh = hl("Slot");
function Hh(o) {
  const a = w.forwardRef((u, c) => {
    const { children: f, ...d } = u;
    if (w.isValidElement(f)) {
      const h = Kh(f),
        m = Gh(d, f.props);
      return (
        f.type !== w.Fragment && (m.ref = c ? Cf(c, h) : h),
        w.cloneElement(f, m)
      );
    }
    return w.Children.count(f) > 1 ? w.Children.only(null) : null;
  });
  return (a.displayName = `${o}.SlotClone`), a;
}
var bh = Symbol("radix.slottable");
function Qh(o) {
  return (
    w.isValidElement(o) &&
    typeof o.type == "function" &&
    "__radixId" in o.type &&
    o.type.__radixId === bh
  );
}
function Gh(o, a) {
  const u = { ...a };
  for (const c in a) {
    const f = o[c],
      d = a[c];
    /^on[A-Z]/.test(c)
      ? f && d
        ? (u[c] = (...m) => {
            const v = d(...m);
            return f(...m), v;
          })
        : f && (u[c] = f)
      : c === "style"
      ? (u[c] = { ...f, ...d })
      : c === "className" && (u[c] = [f, d].filter(Boolean).join(" "));
  }
  return { ...o, ...u };
}
function Kh(o) {
  var c, f;
  let a =
      (c = Object.getOwnPropertyDescriptor(o.props, "ref")) == null
        ? void 0
        : c.get,
    u = a && "isReactWarning" in a && a.isReactWarning;
  return u
    ? o.ref
    : ((a =
        (f = Object.getOwnPropertyDescriptor(o, "ref")) == null
          ? void 0
          : f.get),
      (u = a && "isReactWarning" in a && a.isReactWarning),
      u ? o.props.ref : o.props.ref || o.ref);
}
function Ef(o) {
  var a,
    u,
    c = "";
  if (typeof o == "string" || typeof o == "number") c += o;
  else if (typeof o == "object")
    if (Array.isArray(o)) {
      var f = o.length;
      for (a = 0; a < f; a++)
        o[a] && (u = Ef(o[a])) && (c && (c += " "), (c += u));
    } else for (u in o) o[u] && (c && (c += " "), (c += u));
  return c;
}
function Rf() {
  for (var o, a, u = 0, c = "", f = arguments.length; u < f; u++)
    (o = arguments[u]) && (a = Ef(o)) && (c && (c += " "), (c += a));
  return c;
}
const Zc = (o) => (typeof o == "boolean" ? `${o}` : o === 0 ? "0" : o),
  qc = Rf,
  Pf = (o, a) => (u) => {
    var c;
    if ((a == null ? void 0 : a.variants) == null)
      return qc(
        o,
        u == null ? void 0 : u.class,
        u == null ? void 0 : u.className
      );
    const { variants: f, defaultVariants: d } = a,
      h = Object.keys(f).map((y) => {
        const C = u == null ? void 0 : u[y],
          N = d == null ? void 0 : d[y];
        if (C === null) return null;
        const R = Zc(C) || Zc(N);
        return f[y][R];
      }),
      m =
        u &&
        Object.entries(u).reduce((y, C) => {
          let [N, R] = C;
          return R === void 0 || (y[N] = R), y;
        }, {}),
      v =
        a == null || (c = a.compoundVariants) === null || c === void 0
          ? void 0
          : c.reduce((y, C) => {
              let { class: N, className: R, ...M } = C;
              return Object.entries(M).every((z) => {
                let [L, _] = z;
                return Array.isArray(_)
                  ? _.includes({ ...d, ...m }[L])
                  : { ...d, ...m }[L] === _;
              })
                ? [...y, N, R]
                : y;
            }, []);
    return qc(
      o,
      h,
      v,
      u == null ? void 0 : u.class,
      u == null ? void 0 : u.className
    );
  },
  Du = "-",
  Yh = (o) => {
    const a = Jh(o),
      { conflictingClassGroups: u, conflictingClassGroupModifiers: c } = o;
    return {
      getClassGroupId: (h) => {
        const m = h.split(Du);
        return m[0] === "" && m.length !== 1 && m.shift(), Nf(m, a) || Xh(h);
      },
      getConflictingClassGroupIds: (h, m) => {
        const v = u[h] || [];
        return m && c[h] ? [...v, ...c[h]] : v;
      },
    };
  },
  Nf = (o, a) => {
    var h;
    if (o.length === 0) return a.classGroupId;
    const u = o[0],
      c = a.nextPart.get(u),
      f = c ? Nf(o.slice(1), c) : void 0;
    if (f) return f;
    if (a.validators.length === 0) return;
    const d = o.join(Du);
    return (h = a.validators.find(({ validator: m }) => m(d))) == null
      ? void 0
      : h.classGroupId;
  },
  ef = /^\[(.+)\]$/,
  Xh = (o) => {
    if (ef.test(o)) {
      const a = ef.exec(o)[1],
        u = a == null ? void 0 : a.substring(0, a.indexOf(":"));
      if (u) return "arbitrary.." + u;
    }
  },
  Jh = (o) => {
    const { theme: a, prefix: u } = o,
      c = { nextPart: new Map(), validators: [] };
    return (
      qh(Object.entries(o.classGroups), u).forEach(([d, h]) => {
        Pu(h, c, d, a);
      }),
      c
    );
  },
  Pu = (o, a, u, c) => {
    o.forEach((f) => {
      if (typeof f == "string") {
        const d = f === "" ? a : tf(a, f);
        d.classGroupId = u;
        return;
      }
      if (typeof f == "function") {
        if (Zh(f)) {
          Pu(f(c), a, u, c);
          return;
        }
        a.validators.push({ validator: f, classGroupId: u });
        return;
      }
      Object.entries(f).forEach(([d, h]) => {
        Pu(h, tf(a, d), u, c);
      });
    });
  },
  tf = (o, a) => {
    let u = o;
    return (
      a.split(Du).forEach((c) => {
        u.nextPart.has(c) ||
          u.nextPart.set(c, { nextPart: new Map(), validators: [] }),
          (u = u.nextPart.get(c));
      }),
      u
    );
  },
  Zh = (o) => o.isThemeGetter,
  qh = (o, a) =>
    a
      ? o.map(([u, c]) => {
          const f = c.map((d) =>
            typeof d == "string"
              ? a + d
              : typeof d == "object"
              ? Object.fromEntries(
                  Object.entries(d).map(([h, m]) => [a + h, m])
                )
              : d
          );
          return [u, f];
        })
      : o,
  ev = (o) => {
    if (o < 1) return { get: () => {}, set: () => {} };
    let a = 0,
      u = new Map(),
      c = new Map();
    const f = (d, h) => {
      u.set(d, h), a++, a > o && ((a = 0), (c = u), (u = new Map()));
    };
    return {
      get(d) {
        let h = u.get(d);
        if (h !== void 0) return h;
        if ((h = c.get(d)) !== void 0) return f(d, h), h;
      },
      set(d, h) {
        u.has(d) ? u.set(d, h) : f(d, h);
      },
    };
  },
  _f = "!",
  tv = (o) => {
    const { separator: a, experimentalParseClassName: u } = o,
      c = a.length === 1,
      f = a[0],
      d = a.length,
      h = (m) => {
        const v = [];
        let y = 0,
          C = 0,
          N;
        for (let _ = 0; _ < m.length; _++) {
          let T = m[_];
          if (y === 0) {
            if (T === f && (c || m.slice(_, _ + d) === a)) {
              v.push(m.slice(C, _)), (C = _ + d);
              continue;
            }
            if (T === "/") {
              N = _;
              continue;
            }
          }
          T === "[" ? y++ : T === "]" && y--;
        }
        const R = v.length === 0 ? m : m.substring(C),
          M = R.startsWith(_f),
          z = M ? R.substring(1) : R,
          L = N && N > C ? N - C : void 0;
        return {
          modifiers: v,
          hasImportantModifier: M,
          baseClassName: z,
          maybePostfixModifierPosition: L,
        };
      };
    return u ? (m) => u({ className: m, parseClassName: h }) : h;
  },
  nv = (o) => {
    if (o.length <= 1) return o;
    const a = [];
    let u = [];
    return (
      o.forEach((c) => {
        c[0] === "[" ? (a.push(...u.sort(), c), (u = [])) : u.push(c);
      }),
      a.push(...u.sort()),
      a
    );
  },
  rv = (o) => ({ cache: ev(o.cacheSize), parseClassName: tv(o), ...Yh(o) }),
  ov = /\s+/,
  lv = (o, a) => {
    const {
        parseClassName: u,
        getClassGroupId: c,
        getConflictingClassGroupIds: f,
      } = a,
      d = [],
      h = o.trim().split(ov);
    let m = "";
    for (let v = h.length - 1; v >= 0; v -= 1) {
      const y = h[v],
        {
          modifiers: C,
          hasImportantModifier: N,
          baseClassName: R,
          maybePostfixModifierPosition: M,
        } = u(y);
      let z = !!M,
        L = c(z ? R.substring(0, M) : R);
      if (!L) {
        if (!z) {
          m = y + (m.length > 0 ? " " + m : m);
          continue;
        }
        if (((L = c(R)), !L)) {
          m = y + (m.length > 0 ? " " + m : m);
          continue;
        }
        z = !1;
      }
      const _ = nv(C).join(":"),
        T = N ? _ + _f : _,
        V = T + L;
      if (d.includes(V)) continue;
      d.push(V);
      const D = f(L, z);
      for (let Q = 0; Q < D.length; ++Q) {
        const te = D[Q];
        d.push(T + te);
      }
      m = y + (m.length > 0 ? " " + m : m);
    }
    return m;
  };
function iv() {
  let o = 0,
    a,
    u,
    c = "";
  for (; o < arguments.length; )
    (a = arguments[o++]) && (u = zf(a)) && (c && (c += " "), (c += u));
  return c;
}
const zf = (o) => {
  if (typeof o == "string") return o;
  let a,
    u = "";
  for (let c = 0; c < o.length; c++)
    o[c] && (a = zf(o[c])) && (u && (u += " "), (u += a));
  return u;
};
function uv(o, ...a) {
  let u,
    c,
    f,
    d = h;
  function h(v) {
    const y = a.reduce((C, N) => N(C), o());
    return (u = rv(y)), (c = u.cache.get), (f = u.cache.set), (d = m), m(v);
  }
  function m(v) {
    const y = c(v);
    if (y) return y;
    const C = lv(v, u);
    return f(v, C), C;
  }
  return function () {
    return d(iv.apply(null, arguments));
  };
}
const ke = (o) => {
    const a = (u) => u[o] || [];
    return (a.isThemeGetter = !0), a;
  },
  Tf = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  av = /^\d+\/\d+$/,
  sv = new Set(["px", "full", "screen"]),
  cv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  fv =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  dv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  pv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  mv =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  jt = (o) => Yn(o) || sv.has(o) || av.test(o),
  un = (o) => qn(o, "length", kv),
  Yn = (o) => !!o && !Number.isNaN(Number(o)),
  ku = (o) => qn(o, "number", Yn),
  Br = (o) => !!o && Number.isInteger(Number(o)),
  hv = (o) => o.endsWith("%") && Yn(o.slice(0, -1)),
  q = (o) => Tf.test(o),
  an = (o) => cv.test(o),
  vv = new Set(["length", "size", "percentage"]),
  gv = (o) => qn(o, vv, Lf),
  yv = (o) => qn(o, "position", Lf),
  wv = new Set(["image", "url"]),
  xv = (o) => qn(o, wv, Ev),
  Sv = (o) => qn(o, "", Cv),
  Wr = () => !0,
  qn = (o, a, u) => {
    const c = Tf.exec(o);
    return c
      ? c[1]
        ? typeof a == "string"
          ? c[1] === a
          : a.has(c[1])
        : u(c[2])
      : !1;
  },
  kv = (o) => fv.test(o) && !dv.test(o),
  Lf = () => !1,
  Cv = (o) => pv.test(o),
  Ev = (o) => mv.test(o),
  Rv = () => {
    const o = ke("colors"),
      a = ke("spacing"),
      u = ke("blur"),
      c = ke("brightness"),
      f = ke("borderColor"),
      d = ke("borderRadius"),
      h = ke("borderSpacing"),
      m = ke("borderWidth"),
      v = ke("contrast"),
      y = ke("grayscale"),
      C = ke("hueRotate"),
      N = ke("invert"),
      R = ke("gap"),
      M = ke("gradientColorStops"),
      z = ke("gradientColorStopPositions"),
      L = ke("inset"),
      _ = ke("margin"),
      T = ke("opacity"),
      V = ke("padding"),
      D = ke("saturate"),
      Q = ke("scale"),
      te = ke("sepia"),
      ue = ke("skew"),
      fe = ke("space"),
      re = ke("translate"),
      me = () => ["auto", "contain", "none"],
      ye = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Oe = () => ["auto", q, a],
      oe = () => [q, a],
      Fe = () => ["", jt, un],
      $e = () => ["auto", Yn, q],
      Qe = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      he = () => ["solid", "dashed", "dotted", "double", "none"],
      we = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      $ = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      Y = () => ["", "0", q],
      W = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      S = () => [Yn, q];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Wr],
        spacing: [jt, un],
        blur: ["none", "", an, q],
        brightness: S(),
        borderColor: [o],
        borderRadius: ["none", "", "full", an, q],
        borderSpacing: oe(),
        borderWidth: Fe(),
        contrast: S(),
        grayscale: Y(),
        hueRotate: S(),
        invert: Y(),
        gap: oe(),
        gradientColorStops: [o],
        gradientColorStopPositions: [hv, un],
        inset: Oe(),
        margin: Oe(),
        opacity: S(),
        padding: oe(),
        saturate: S(),
        scale: S(),
        sepia: Y(),
        skew: S(),
        space: oe(),
        translate: oe(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", q] }],
        container: ["container"],
        columns: [{ columns: [an] }],
        "break-after": [{ "break-after": W() }],
        "break-before": [{ "break-before": W() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Qe(), q] }],
        overflow: [{ overflow: ye() }],
        "overflow-x": [{ "overflow-x": ye() }],
        "overflow-y": [{ "overflow-y": ye() }],
        overscroll: [{ overscroll: me() }],
        "overscroll-x": [{ "overscroll-x": me() }],
        "overscroll-y": [{ "overscroll-y": me() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [L] }],
        "inset-x": [{ "inset-x": [L] }],
        "inset-y": [{ "inset-y": [L] }],
        start: [{ start: [L] }],
        end: [{ end: [L] }],
        top: [{ top: [L] }],
        right: [{ right: [L] }],
        bottom: [{ bottom: [L] }],
        left: [{ left: [L] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Br, q] }],
        basis: [{ basis: Oe() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", q] }],
        grow: [{ grow: Y() }],
        shrink: [{ shrink: Y() }],
        order: [{ order: ["first", "last", "none", Br, q] }],
        "grid-cols": [{ "grid-cols": [Wr] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Br, q] }, q] }],
        "col-start": [{ "col-start": $e() }],
        "col-end": [{ "col-end": $e() }],
        "grid-rows": [{ "grid-rows": [Wr] }],
        "row-start-end": [{ row: ["auto", { span: [Br, q] }, q] }],
        "row-start": [{ "row-start": $e() }],
        "row-end": [{ "row-end": $e() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", q] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", q] }],
        gap: [{ gap: [R] }],
        "gap-x": [{ "gap-x": [R] }],
        "gap-y": [{ "gap-y": [R] }],
        "justify-content": [{ justify: ["normal", ...$()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...$(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...$(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [V] }],
        px: [{ px: [V] }],
        py: [{ py: [V] }],
        ps: [{ ps: [V] }],
        pe: [{ pe: [V] }],
        pt: [{ pt: [V] }],
        pr: [{ pr: [V] }],
        pb: [{ pb: [V] }],
        pl: [{ pl: [V] }],
        m: [{ m: [_] }],
        mx: [{ mx: [_] }],
        my: [{ my: [_] }],
        ms: [{ ms: [_] }],
        me: [{ me: [_] }],
        mt: [{ mt: [_] }],
        mr: [{ mr: [_] }],
        mb: [{ mb: [_] }],
        ml: [{ ml: [_] }],
        "space-x": [{ "space-x": [fe] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [fe] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", q, a] }],
        "min-w": [{ "min-w": [q, a, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              q,
              a,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [an] },
              an,
            ],
          },
        ],
        h: [{ h: [q, a, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [q, a, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [q, a, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [q, a, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", an, un] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              ku,
            ],
          },
        ],
        "font-family": [{ font: [Wr] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              q,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Yn, ku] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              jt,
              q,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", q] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", q] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [o] }],
        "placeholder-opacity": [{ "placeholder-opacity": [T] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [o] }],
        "text-opacity": [{ "text-opacity": [T] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...he(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", jt, un] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", jt, q] }],
        "text-decoration-color": [{ decoration: [o] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: oe() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", q] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [T] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Qe(), yv] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", gv] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              xv,
            ],
          },
        ],
        "bg-color": [{ bg: [o] }],
        "gradient-from-pos": [{ from: [z] }],
        "gradient-via-pos": [{ via: [z] }],
        "gradient-to-pos": [{ to: [z] }],
        "gradient-from": [{ from: [M] }],
        "gradient-via": [{ via: [M] }],
        "gradient-to": [{ to: [M] }],
        rounded: [{ rounded: [d] }],
        "rounded-s": [{ "rounded-s": [d] }],
        "rounded-e": [{ "rounded-e": [d] }],
        "rounded-t": [{ "rounded-t": [d] }],
        "rounded-r": [{ "rounded-r": [d] }],
        "rounded-b": [{ "rounded-b": [d] }],
        "rounded-l": [{ "rounded-l": [d] }],
        "rounded-ss": [{ "rounded-ss": [d] }],
        "rounded-se": [{ "rounded-se": [d] }],
        "rounded-ee": [{ "rounded-ee": [d] }],
        "rounded-es": [{ "rounded-es": [d] }],
        "rounded-tl": [{ "rounded-tl": [d] }],
        "rounded-tr": [{ "rounded-tr": [d] }],
        "rounded-br": [{ "rounded-br": [d] }],
        "rounded-bl": [{ "rounded-bl": [d] }],
        "border-w": [{ border: [m] }],
        "border-w-x": [{ "border-x": [m] }],
        "border-w-y": [{ "border-y": [m] }],
        "border-w-s": [{ "border-s": [m] }],
        "border-w-e": [{ "border-e": [m] }],
        "border-w-t": [{ "border-t": [m] }],
        "border-w-r": [{ "border-r": [m] }],
        "border-w-b": [{ "border-b": [m] }],
        "border-w-l": [{ "border-l": [m] }],
        "border-opacity": [{ "border-opacity": [T] }],
        "border-style": [{ border: [...he(), "hidden"] }],
        "divide-x": [{ "divide-x": [m] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [m] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [T] }],
        "divide-style": [{ divide: he() }],
        "border-color": [{ border: [f] }],
        "border-color-x": [{ "border-x": [f] }],
        "border-color-y": [{ "border-y": [f] }],
        "border-color-s": [{ "border-s": [f] }],
        "border-color-e": [{ "border-e": [f] }],
        "border-color-t": [{ "border-t": [f] }],
        "border-color-r": [{ "border-r": [f] }],
        "border-color-b": [{ "border-b": [f] }],
        "border-color-l": [{ "border-l": [f] }],
        "divide-color": [{ divide: [f] }],
        "outline-style": [{ outline: ["", ...he()] }],
        "outline-offset": [{ "outline-offset": [jt, q] }],
        "outline-w": [{ outline: [jt, un] }],
        "outline-color": [{ outline: [o] }],
        "ring-w": [{ ring: Fe() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [o] }],
        "ring-opacity": [{ "ring-opacity": [T] }],
        "ring-offset-w": [{ "ring-offset": [jt, un] }],
        "ring-offset-color": [{ "ring-offset": [o] }],
        shadow: [{ shadow: ["", "inner", "none", an, Sv] }],
        "shadow-color": [{ shadow: [Wr] }],
        opacity: [{ opacity: [T] }],
        "mix-blend": [
          { "mix-blend": [...we(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": we() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [u] }],
        brightness: [{ brightness: [c] }],
        contrast: [{ contrast: [v] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", an, q] }],
        grayscale: [{ grayscale: [y] }],
        "hue-rotate": [{ "hue-rotate": [C] }],
        invert: [{ invert: [N] }],
        saturate: [{ saturate: [D] }],
        sepia: [{ sepia: [te] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [u] }],
        "backdrop-brightness": [{ "backdrop-brightness": [c] }],
        "backdrop-contrast": [{ "backdrop-contrast": [v] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [y] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [C] }],
        "backdrop-invert": [{ "backdrop-invert": [N] }],
        "backdrop-opacity": [{ "backdrop-opacity": [T] }],
        "backdrop-saturate": [{ "backdrop-saturate": [D] }],
        "backdrop-sepia": [{ "backdrop-sepia": [te] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [h] }],
        "border-spacing-x": [{ "border-spacing-x": [h] }],
        "border-spacing-y": [{ "border-spacing-y": [h] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              q,
            ],
          },
        ],
        duration: [{ duration: S() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", q] }],
        delay: [{ delay: S() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", q] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [Q] }],
        "scale-x": [{ "scale-x": [Q] }],
        "scale-y": [{ "scale-y": [Q] }],
        rotate: [{ rotate: [Br, q] }],
        "translate-x": [{ "translate-x": [re] }],
        "translate-y": [{ "translate-y": [re] }],
        "skew-x": [{ "skew-x": [ue] }],
        "skew-y": [{ "skew-y": [ue] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              q,
            ],
          },
        ],
        accent: [{ accent: ["auto", o] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              q,
            ],
          },
        ],
        "caret-color": [{ caret: [o] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": oe() }],
        "scroll-mx": [{ "scroll-mx": oe() }],
        "scroll-my": [{ "scroll-my": oe() }],
        "scroll-ms": [{ "scroll-ms": oe() }],
        "scroll-me": [{ "scroll-me": oe() }],
        "scroll-mt": [{ "scroll-mt": oe() }],
        "scroll-mr": [{ "scroll-mr": oe() }],
        "scroll-mb": [{ "scroll-mb": oe() }],
        "scroll-ml": [{ "scroll-ml": oe() }],
        "scroll-p": [{ "scroll-p": oe() }],
        "scroll-px": [{ "scroll-px": oe() }],
        "scroll-py": [{ "scroll-py": oe() }],
        "scroll-ps": [{ "scroll-ps": oe() }],
        "scroll-pe": [{ "scroll-pe": oe() }],
        "scroll-pt": [{ "scroll-pt": oe() }],
        "scroll-pr": [{ "scroll-pr": oe() }],
        "scroll-pb": [{ "scroll-pb": oe() }],
        "scroll-pl": [{ "scroll-pl": oe() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", q] },
        ],
        fill: [{ fill: [o, "none"] }],
        "stroke-w": [{ stroke: [jt, un, ku] }],
        stroke: [{ stroke: [o, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
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
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Pv = uv(Rv);
function it(...o) {
  return Pv(Rf(o));
}
const Nv = Pf(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300",
    {
      variants: {
        variant: {
          default:
            "bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
          destructive:
            "bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
          outline:
            "border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
          secondary:
            "bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
          ghost:
            "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
          link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Nu = w.forwardRef(
    ({ className: o, variant: a, size: u, asChild: c = !1, ...f }, d) => {
      const h = c ? Wh : "button";
      return U.jsx(h, {
        className: it(Nv({ variant: a, size: u, className: o })),
        ref: d,
        ...f,
      });
    }
  );
Nu.displayName = "Button";
const Hr = w.forwardRef(({ className: o, type: a, ...u }, c) =>
  U.jsx("input", {
    type: a,
    className: it(
      "flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
      o
    ),
    ref: c,
    ...u,
  })
);
Hr.displayName = "Input";
const If = w.forwardRef(({ className: o, ...a }, u) =>
  U.jsx("div", {
    ref: u,
    className: it(
      "rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",
      o
    ),
    ...a,
  })
);
If.displayName = "Card";
const Mf = w.forwardRef(({ className: o, ...a }, u) =>
  U.jsx("div", {
    ref: u,
    className: it("flex flex-col space-y-1.5 p-6", o),
    ...a,
  })
);
Mf.displayName = "CardHeader";
const Of = w.forwardRef(({ className: o, ...a }, u) =>
  U.jsx("div", {
    ref: u,
    className: it("font-semibold leading-none tracking-tight", o),
    ...a,
  })
);
Of.displayName = "CardTitle";
const Ff = w.forwardRef(({ className: o, ...a }, u) =>
  U.jsx("div", {
    ref: u,
    className: it("text-sm text-zinc-500 dark:text-zinc-400", o),
    ...a,
  })
);
Ff.displayName = "CardDescription";
const jf = w.forwardRef(({ className: o, ...a }, u) =>
  U.jsx("div", { ref: u, className: it("p-6 pt-0", o), ...a })
);
jf.displayName = "CardContent";
const Df = w.forwardRef(({ className: o, ...a }, u) =>
  U.jsx("div", { ref: u, className: it("flex items-center p-6 pt-0", o), ...a })
);
Df.displayName = "CardFooter";
var _v = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ut = _v.reduce((o, a) => {
    const u = hl(`Primitive.${a}`),
      c = w.forwardRef((f, d) => {
        const { asChild: h, ...m } = f,
          v = h ? u : a;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          U.jsx(v, { ...m, ref: d })
        );
      });
    return (c.displayName = `Primitive.${a}`), { ...o, [a]: c };
  }, {}),
  zv = "Label",
  Af = w.forwardRef((o, a) =>
    U.jsx(Ut.label, {
      ...o,
      ref: a,
      onMouseDown: (u) => {
        var f;
        u.target.closest("button, input, select, textarea") ||
          ((f = o.onMouseDown) == null || f.call(o, u),
          !u.defaultPrevented && u.detail > 1 && u.preventDefault());
      },
    })
  );
Af.displayName = zv;
var $f = Af;
const Tv = Pf(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  br = w.forwardRef(({ className: o, ...a }, u) =>
    U.jsx($f, { ref: u, className: it(Tv(), o), ...a })
  );
br.displayName = $f.displayName;
const Lv = () => {
  const [o, a] = w.useState(!0),
    [u, c] = w.useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }),
    f = (h) => {
      const { name: m, value: v } = h.target;
      c((y) => ({ ...y, [m]: v }));
    },
    d = (h) => {
      h.preventDefault(), console.log("Form submitted:", u);
    };
  return U.jsx("div", {
    className: "flex justify-center items-center min-h-screen bg-gray-50",
    children: U.jsxs(If, {
      className: "w-full max-w-md",
      children: [
        U.jsxs(Mf, {
          children: [
            U.jsx(Of, { children: o ? "Login" : "Register" }),
            U.jsx(Ff, {
              children: o
                ? "Enter your credentials to access your account"
                : "Create an account to use Silent Contributor Detector",
            }),
          ],
        }),
        U.jsx(jf, {
          children: U.jsx("form", {
            onSubmit: d,
            children: U.jsxs("div", {
              className: "space-y-4",
              children: [
                U.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    U.jsx(br, { htmlFor: "username", children: "Username" }),
                    U.jsx(Hr, {
                      id: "username",
                      name: "username",
                      placeholder: "Enter your username",
                      value: u.username,
                      onChange: f,
                      required: !0,
                    }),
                  ],
                }),
                !o &&
                  U.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      U.jsx(br, { htmlFor: "email", children: "Email" }),
                      U.jsx(Hr, {
                        id: "email",
                        name: "email",
                        type: "email",
                        placeholder: "Enter your email",
                        value: u.email,
                        onChange: f,
                        required: !0,
                      }),
                    ],
                  }),
                U.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    U.jsx(br, { htmlFor: "password", children: "Password" }),
                    U.jsx(Hr, {
                      id: "password",
                      name: "password",
                      type: "password",
                      placeholder: "Enter your password",
                      value: u.password,
                      onChange: f,
                      required: !0,
                    }),
                  ],
                }),
                !o &&
                  U.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      U.jsx(br, {
                        htmlFor: "confirmPassword",
                        children: "Confirm Password",
                      }),
                      U.jsx(Hr, {
                        id: "confirmPassword",
                        name: "confirmPassword",
                        type: "password",
                        placeholder: "Confirm your password",
                        value: u.confirmPassword,
                        onChange: f,
                        required: !0,
                      }),
                    ],
                  }),
                U.jsx(Nu, {
                  type: "submit",
                  className: "w-full",
                  children: o ? "Login" : "Register",
                }),
              ],
            }),
          }),
        }),
        U.jsx(Df, {
          className: "flex justify-center",
          children: U.jsx(Nu, {
            variant: "link",
            onClick: () => a(!o),
            children: o
              ? "Don't have an account? Register"
              : "Already have an account? Login",
          }),
        }),
      ],
    }),
  });
};
function xl(o, a = []) {
  let u = [];
  function c(d, h) {
    const m = w.createContext(h),
      v = u.length;
    u = [...u, h];
    const y = (N) => {
      var T;
      const { scope: R, children: M, ...z } = N,
        L = ((T = R == null ? void 0 : R[o]) == null ? void 0 : T[v]) || m,
        _ = w.useMemo(() => z, Object.values(z));
      return U.jsx(L.Provider, { value: _, children: M });
    };
    y.displayName = d + "Provider";
    function C(N, R) {
      var L;
      const M = ((L = R == null ? void 0 : R[o]) == null ? void 0 : L[v]) || m,
        z = w.useContext(M);
      if (z) return z;
      if (h !== void 0) return h;
      throw new Error(`\`${N}\` must be used within \`${d}\``);
    }
    return [y, C];
  }
  const f = () => {
    const d = u.map((h) => w.createContext(h));
    return function (m) {
      const v = (m == null ? void 0 : m[o]) || d;
      return w.useMemo(() => ({ [`__scope${o}`]: { ...m, [o]: v } }), [m, v]);
    };
  };
  return (f.scopeName = o), [c, Iv(f, ...a)];
}
function Iv(...o) {
  const a = o[0];
  if (o.length === 1) return a;
  const u = () => {
    const c = o.map((f) => ({ useScope: f(), scopeName: f.scopeName }));
    return function (d) {
      const h = c.reduce((m, { useScope: v, scopeName: y }) => {
        const N = v(d)[`__scope${y}`];
        return { ...m, ...N };
      }, {});
      return w.useMemo(() => ({ [`__scope${a.scopeName}`]: h }), [h]);
    };
  };
  return (u.scopeName = a.scopeName), u;
}
var Au = "Progress",
  $u = 100,
  [Mv, gg] = xl(Au),
  [Ov, Fv] = Mv(Au),
  Uf = w.forwardRef((o, a) => {
    const {
      __scopeProgress: u,
      value: c = null,
      max: f,
      getValueLabel: d = jv,
      ...h
    } = o;
    (f || f === 0) && !nf(f) && console.error(Dv(`${f}`, "Progress"));
    const m = nf(f) ? f : $u;
    c !== null && !rf(c, m) && console.error(Av(`${c}`, "Progress"));
    const v = rf(c, m) ? c : null,
      y = vl(v) ? d(v, m) : void 0;
    return U.jsx(Ov, {
      scope: u,
      value: v,
      max: m,
      children: U.jsx(Ut.div, {
        "aria-valuemax": m,
        "aria-valuemin": 0,
        "aria-valuenow": vl(v) ? v : void 0,
        "aria-valuetext": y,
        role: "progressbar",
        "data-state": Wf(v, m),
        "data-value": v ?? void 0,
        "data-max": m,
        ...h,
        ref: a,
      }),
    });
  });
Uf.displayName = Au;
var Vf = "ProgressIndicator",
  Bf = w.forwardRef((o, a) => {
    const { __scopeProgress: u, ...c } = o,
      f = Fv(Vf, u);
    return U.jsx(Ut.div, {
      "data-state": Wf(f.value, f.max),
      "data-value": f.value ?? void 0,
      "data-max": f.max,
      ...c,
      ref: a,
    });
  });
Bf.displayName = Vf;
function jv(o, a) {
  return `${Math.round((o / a) * 100)}%`;
}
function Wf(o, a) {
  return o == null ? "indeterminate" : o === a ? "complete" : "loading";
}
function vl(o) {
  return typeof o == "number";
}
function nf(o) {
  return vl(o) && !isNaN(o) && o > 0;
}
function rf(o, a) {
  return vl(o) && !isNaN(o) && o <= a && o >= 0;
}
function Dv(o, a) {
  return `Invalid prop \`max\` of value \`${o}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$u}\`.`;
}
function Av(o, a) {
  return `Invalid prop \`value\` of value \`${o}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${$u} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Hf = Uf,
  $v = Bf;
const Uv = w.forwardRef(({ className: o, value: a, ...u }, c) =>
  U.jsx(Hf, {
    ref: c,
    className: it(
      "relative h-2 w-full overflow-hidden rounded-full bg-zinc-900/20 dark:bg-zinc-50/20",
      o
    ),
    ...u,
    children: U.jsx($v, {
      className:
        "h-full w-full flex-1 bg-zinc-900 transition-all dark:bg-zinc-50",
      style: { transform: `translateX(-${100 - (a || 0)}%)` },
    }),
  })
);
Uv.displayName = Hf.displayName;
function At(o, a, { checkForDefaultPrevented: u = !0 } = {}) {
  return function (f) {
    if ((o == null || o(f), u === !1 || !f.defaultPrevented))
      return a == null ? void 0 : a(f);
  };
}
function Vv(o) {
  const a = o + "CollectionProvider",
    [u, c] = xl(a),
    [f, d] = u(a, { collectionRef: { current: null }, itemMap: new Map() }),
    h = (L) => {
      const { scope: _, children: T } = L,
        V = sn.useRef(null),
        D = sn.useRef(new Map()).current;
      return U.jsx(f, { scope: _, itemMap: D, collectionRef: V, children: T });
    };
  h.displayName = a;
  const m = o + "CollectionSlot",
    v = hl(m),
    y = sn.forwardRef((L, _) => {
      const { scope: T, children: V } = L,
        D = d(m, T),
        Q = ml(_, D.collectionRef);
      return U.jsx(v, { ref: Q, children: V });
    });
  y.displayName = m;
  const C = o + "CollectionItemSlot",
    N = "data-radix-collection-item",
    R = hl(C),
    M = sn.forwardRef((L, _) => {
      const { scope: T, children: V, ...D } = L,
        Q = sn.useRef(null),
        te = ml(_, Q),
        ue = d(C, T);
      return (
        sn.useEffect(
          () => (
            ue.itemMap.set(Q, { ref: Q, ...D }), () => void ue.itemMap.delete(Q)
          )
        ),
        U.jsx(R, { [N]: "", ref: te, children: V })
      );
    });
  M.displayName = C;
  function z(L) {
    const _ = d(o + "CollectionConsumer", L);
    return sn.useCallback(() => {
      const V = _.collectionRef.current;
      if (!V) return [];
      const D = Array.from(V.querySelectorAll(`[${N}]`));
      return Array.from(_.itemMap.values()).sort(
        (ue, fe) => D.indexOf(ue.ref.current) - D.indexOf(fe.ref.current)
      );
    }, [_.collectionRef, _.itemMap]);
  }
  return [{ Provider: h, Slot: y, ItemSlot: M }, z, c];
}
var gl =
    globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
  Bv = of[" useId ".trim().toString()] || (() => {}),
  Wv = 0;
function bf(o) {
  const [a, u] = w.useState(Bv());
  return (
    gl(() => {
      u((c) => c ?? String(Wv++));
    }, [o]),
    a ? `radix-${a}` : ""
  );
}
function Hv(o) {
  const a = w.useRef(o);
  return (
    w.useEffect(() => {
      a.current = o;
    }),
    w.useMemo(
      () =>
        (...u) => {
          var c;
          return (c = a.current) == null ? void 0 : c.call(a, ...u);
        },
      []
    )
  );
}
var bv = of[" useInsertionEffect ".trim().toString()] || gl;
function Qf({ prop: o, defaultProp: a, onChange: u = () => {}, caller: c }) {
  const [f, d, h] = Qv({ defaultProp: a, onChange: u }),
    m = o !== void 0,
    v = m ? o : f;
  {
    const C = w.useRef(o !== void 0);
    w.useEffect(() => {
      const N = C.current;
      N !== m &&
        console.warn(
          `${c} is changing from ${N ? "controlled" : "uncontrolled"} to ${
            m ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (C.current = m);
    }, [m, c]);
  }
  const y = w.useCallback(
    (C) => {
      var N;
      if (m) {
        const R = Gv(C) ? C(o) : C;
        R !== o && ((N = h.current) == null || N.call(h, R));
      } else d(C);
    },
    [m, o, d, h]
  );
  return [v, y];
}
function Qv({ defaultProp: o, onChange: a }) {
  const [u, c] = w.useState(o),
    f = w.useRef(u),
    d = w.useRef(a);
  return (
    bv(() => {
      d.current = a;
    }, [a]),
    w.useEffect(() => {
      var h;
      f.current !== u &&
        ((h = d.current) == null || h.call(d, u), (f.current = u));
    }, [u, f]),
    [u, c, d]
  );
}
function Gv(o) {
  return typeof o == "function";
}
var Kv = w.createContext(void 0);
function Gf(o) {
  const a = w.useContext(Kv);
  return o || a || "ltr";
}
var Cu = "rovingFocusGroup.onEntryFocus",
  Yv = { bubbles: !1, cancelable: !0 },
  Yr = "RovingFocusGroup",
  [_u, Kf, Xv] = Vv(Yr),
  [Jv, Yf] = xl(Yr, [Xv]),
  [Zv, qv] = Jv(Yr),
  Xf = w.forwardRef((o, a) =>
    U.jsx(_u.Provider, {
      scope: o.__scopeRovingFocusGroup,
      children: U.jsx(_u.Slot, {
        scope: o.__scopeRovingFocusGroup,
        children: U.jsx(eg, { ...o, ref: a }),
      }),
    })
  );
Xf.displayName = Yr;
var eg = w.forwardRef((o, a) => {
    const {
        __scopeRovingFocusGroup: u,
        orientation: c,
        loop: f = !1,
        dir: d,
        currentTabStopId: h,
        defaultCurrentTabStopId: m,
        onCurrentTabStopIdChange: v,
        onEntryFocus: y,
        preventScrollOnEntryFocus: C = !1,
        ...N
      } = o,
      R = w.useRef(null),
      M = ml(a, R),
      z = Gf(d),
      [L, _] = Qf({ prop: h, defaultProp: m ?? null, onChange: v, caller: Yr }),
      [T, V] = w.useState(!1),
      D = Hv(y),
      Q = Kf(u),
      te = w.useRef(!1),
      [ue, fe] = w.useState(0);
    return (
      w.useEffect(() => {
        const re = R.current;
        if (re)
          return (
            re.addEventListener(Cu, D), () => re.removeEventListener(Cu, D)
          );
      }, [D]),
      U.jsx(Zv, {
        scope: u,
        orientation: c,
        dir: z,
        loop: f,
        currentTabStopId: L,
        onItemFocus: w.useCallback((re) => _(re), [_]),
        onItemShiftTab: w.useCallback(() => V(!0), []),
        onFocusableItemAdd: w.useCallback(() => fe((re) => re + 1), []),
        onFocusableItemRemove: w.useCallback(() => fe((re) => re - 1), []),
        children: U.jsx(Ut.div, {
          tabIndex: T || ue === 0 ? -1 : 0,
          "data-orientation": c,
          ...N,
          ref: M,
          style: { outline: "none", ...o.style },
          onMouseDown: At(o.onMouseDown, () => {
            te.current = !0;
          }),
          onFocus: At(o.onFocus, (re) => {
            const me = !te.current;
            if (re.target === re.currentTarget && me && !T) {
              const ye = new CustomEvent(Cu, Yv);
              if ((re.currentTarget.dispatchEvent(ye), !ye.defaultPrevented)) {
                const Oe = Q().filter((he) => he.focusable),
                  oe = Oe.find((he) => he.active),
                  Fe = Oe.find((he) => he.id === L),
                  Qe = [oe, Fe, ...Oe]
                    .filter(Boolean)
                    .map((he) => he.ref.current);
                qf(Qe, C);
              }
            }
            te.current = !1;
          }),
          onBlur: At(o.onBlur, () => V(!1)),
        }),
      })
    );
  }),
  Jf = "RovingFocusGroupItem",
  Zf = w.forwardRef((o, a) => {
    const {
        __scopeRovingFocusGroup: u,
        focusable: c = !0,
        active: f = !1,
        tabStopId: d,
        children: h,
        ...m
      } = o,
      v = bf(),
      y = d || v,
      C = qv(Jf, u),
      N = C.currentTabStopId === y,
      R = Kf(u),
      {
        onFocusableItemAdd: M,
        onFocusableItemRemove: z,
        currentTabStopId: L,
      } = C;
    return (
      w.useEffect(() => {
        if (c) return M(), () => z();
      }, [c, M, z]),
      U.jsx(_u.ItemSlot, {
        scope: u,
        id: y,
        focusable: c,
        active: f,
        children: U.jsx(Ut.span, {
          tabIndex: N ? 0 : -1,
          "data-orientation": C.orientation,
          ...m,
          ref: a,
          onMouseDown: At(o.onMouseDown, (_) => {
            c ? C.onItemFocus(y) : _.preventDefault();
          }),
          onFocus: At(o.onFocus, () => C.onItemFocus(y)),
          onKeyDown: At(o.onKeyDown, (_) => {
            if (_.key === "Tab" && _.shiftKey) {
              C.onItemShiftTab();
              return;
            }
            if (_.target !== _.currentTarget) return;
            const T = rg(_, C.orientation, C.dir);
            if (T !== void 0) {
              if (_.metaKey || _.ctrlKey || _.altKey || _.shiftKey) return;
              _.preventDefault();
              let D = R()
                .filter((Q) => Q.focusable)
                .map((Q) => Q.ref.current);
              if (T === "last") D.reverse();
              else if (T === "prev" || T === "next") {
                T === "prev" && D.reverse();
                const Q = D.indexOf(_.currentTarget);
                D = C.loop ? og(D, Q + 1) : D.slice(Q + 1);
              }
              setTimeout(() => qf(D));
            }
          }),
          children:
            typeof h == "function"
              ? h({ isCurrentTabStop: N, hasTabStop: L != null })
              : h,
        }),
      })
    );
  });
Zf.displayName = Jf;
var tg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function ng(o, a) {
  return a !== "rtl"
    ? o
    : o === "ArrowLeft"
    ? "ArrowRight"
    : o === "ArrowRight"
    ? "ArrowLeft"
    : o;
}
function rg(o, a, u) {
  const c = ng(o.key, u);
  if (
    !(a === "vertical" && ["ArrowLeft", "ArrowRight"].includes(c)) &&
    !(a === "horizontal" && ["ArrowUp", "ArrowDown"].includes(c))
  )
    return tg[c];
}
function qf(o, a = !1) {
  const u = document.activeElement;
  for (const c of o)
    if (
      c === u ||
      (c.focus({ preventScroll: a }), document.activeElement !== u)
    )
      return;
}
function og(o, a) {
  return o.map((u, c) => o[(a + c) % o.length]);
}
var lg = Xf,
  ig = Zf;
function ug(o, a) {
  return w.useReducer((u, c) => a[u][c] ?? u, o);
}
var ed = (o) => {
  const { present: a, children: u } = o,
    c = ag(a),
    f =
      typeof u == "function" ? u({ present: c.isPresent }) : w.Children.only(u),
    d = ml(c.ref, sg(f));
  return typeof u == "function" || c.isPresent
    ? w.cloneElement(f, { ref: d })
    : null;
};
ed.displayName = "Presence";
function ag(o) {
  const [a, u] = w.useState(),
    c = w.useRef(null),
    f = w.useRef(o),
    d = w.useRef("none"),
    h = o ? "mounted" : "unmounted",
    [m, v] = ug(h, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const y = sl(c.current);
      d.current = m === "mounted" ? y : "none";
    }, [m]),
    gl(() => {
      const y = c.current,
        C = f.current;
      if (C !== o) {
        const R = d.current,
          M = sl(y);
        o
          ? v("MOUNT")
          : M === "none" || (y == null ? void 0 : y.display) === "none"
          ? v("UNMOUNT")
          : v(C && R !== M ? "ANIMATION_OUT" : "UNMOUNT"),
          (f.current = o);
      }
    }, [o, v]),
    gl(() => {
      if (a) {
        let y;
        const C = a.ownerDocument.defaultView ?? window,
          N = (M) => {
            const L = sl(c.current).includes(M.animationName);
            if (M.target === a && L && (v("ANIMATION_END"), !f.current)) {
              const _ = a.style.animationFillMode;
              (a.style.animationFillMode = "forwards"),
                (y = C.setTimeout(() => {
                  a.style.animationFillMode === "forwards" &&
                    (a.style.animationFillMode = _);
                }));
            }
          },
          R = (M) => {
            M.target === a && (d.current = sl(c.current));
          };
        return (
          a.addEventListener("animationstart", R),
          a.addEventListener("animationcancel", N),
          a.addEventListener("animationend", N),
          () => {
            C.clearTimeout(y),
              a.removeEventListener("animationstart", R),
              a.removeEventListener("animationcancel", N),
              a.removeEventListener("animationend", N);
          }
        );
      } else v("ANIMATION_END");
    }, [a, v]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(m),
      ref: w.useCallback((y) => {
        (c.current = y ? getComputedStyle(y) : null), u(y);
      }, []),
    }
  );
}
function sl(o) {
  return (o == null ? void 0 : o.animationName) || "none";
}
function sg(o) {
  var c, f;
  let a =
      (c = Object.getOwnPropertyDescriptor(o.props, "ref")) == null
        ? void 0
        : c.get,
    u = a && "isReactWarning" in a && a.isReactWarning;
  return u
    ? o.ref
    : ((a =
        (f = Object.getOwnPropertyDescriptor(o, "ref")) == null
          ? void 0
          : f.get),
      (u = a && "isReactWarning" in a && a.isReactWarning),
      u ? o.props.ref : o.props.ref || o.ref);
}
var Sl = "Tabs",
  [cg, yg] = xl(Sl, [Yf]),
  td = Yf(),
  [fg, Uu] = cg(Sl),
  dg = w.forwardRef((o, a) => {
    const {
        __scopeTabs: u,
        value: c,
        onValueChange: f,
        defaultValue: d,
        orientation: h = "horizontal",
        dir: m,
        activationMode: v = "automatic",
        ...y
      } = o,
      C = Gf(m),
      [N, R] = Qf({ prop: c, onChange: f, defaultProp: d ?? "", caller: Sl });
    return U.jsx(fg, {
      scope: u,
      baseId: bf(),
      value: N,
      onValueChange: R,
      orientation: h,
      dir: C,
      activationMode: v,
      children: U.jsx(Ut.div, { dir: C, "data-orientation": h, ...y, ref: a }),
    });
  });
dg.displayName = Sl;
var nd = "TabsList",
  rd = w.forwardRef((o, a) => {
    const { __scopeTabs: u, loop: c = !0, ...f } = o,
      d = Uu(nd, u),
      h = td(u);
    return U.jsx(lg, {
      asChild: !0,
      ...h,
      orientation: d.orientation,
      dir: d.dir,
      loop: c,
      children: U.jsx(Ut.div, {
        role: "tablist",
        "aria-orientation": d.orientation,
        ...f,
        ref: a,
      }),
    });
  });
rd.displayName = nd;
var od = "TabsTrigger",
  ld = w.forwardRef((o, a) => {
    const { __scopeTabs: u, value: c, disabled: f = !1, ...d } = o,
      h = Uu(od, u),
      m = td(u),
      v = ad(h.baseId, c),
      y = sd(h.baseId, c),
      C = c === h.value;
    return U.jsx(ig, {
      asChild: !0,
      ...m,
      focusable: !f,
      active: C,
      children: U.jsx(Ut.button, {
        type: "button",
        role: "tab",
        "aria-selected": C,
        "aria-controls": y,
        "data-state": C ? "active" : "inactive",
        "data-disabled": f ? "" : void 0,
        disabled: f,
        id: v,
        ...d,
        ref: a,
        onMouseDown: At(o.onMouseDown, (N) => {
          !f && N.button === 0 && N.ctrlKey === !1
            ? h.onValueChange(c)
            : N.preventDefault();
        }),
        onKeyDown: At(o.onKeyDown, (N) => {
          [" ", "Enter"].includes(N.key) && h.onValueChange(c);
        }),
        onFocus: At(o.onFocus, () => {
          const N = h.activationMode !== "manual";
          !C && !f && N && h.onValueChange(c);
        }),
      }),
    });
  });
ld.displayName = od;
var id = "TabsContent",
  ud = w.forwardRef((o, a) => {
    const { __scopeTabs: u, value: c, forceMount: f, children: d, ...h } = o,
      m = Uu(id, u),
      v = ad(m.baseId, c),
      y = sd(m.baseId, c),
      C = c === m.value,
      N = w.useRef(C);
    return (
      w.useEffect(() => {
        const R = requestAnimationFrame(() => (N.current = !1));
        return () => cancelAnimationFrame(R);
      }, []),
      U.jsx(ed, {
        present: f || C,
        children: ({ present: R }) =>
          U.jsx(Ut.div, {
            "data-state": C ? "active" : "inactive",
            "data-orientation": m.orientation,
            role: "tabpanel",
            "aria-labelledby": v,
            hidden: !R,
            id: y,
            tabIndex: 0,
            ...h,
            ref: a,
            style: { ...o.style, animationDuration: N.current ? "0s" : void 0 },
            children: R && d,
          }),
      })
    );
  });
ud.displayName = id;
function ad(o, a) {
  return `${o}-trigger-${a}`;
}
function sd(o, a) {
  return `${o}-content-${a}`;
}
var cd = rd,
  fd = ld,
  dd = ud;
const pg = w.forwardRef(({ className: o, ...a }, u) =>
  U.jsx(cd, {
    ref: u,
    className: it(
      "inline-flex h-9 items-center justify-center rounded-lg bg-zinc-100 p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
      o
    ),
    ...a,
  })
);
pg.displayName = cd.displayName;
const mg = w.forwardRef(({ className: o, ...a }, u) =>
  U.jsx(fd, {
    ref: u,
    className: it(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50",
      o
    ),
    ...a,
  })
);
mg.displayName = fd.displayName;
const hg = w.forwardRef(({ className: o, ...a }, u) =>
  U.jsx(dd, {
    ref: u,
    className: it(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
      o
    ),
    ...a,
  })
);
hg.displayName = dd.displayName;
function vg() {
  return U.jsx(Mh, {
    children: U.jsxs(sh, {
      children: [
        U.jsx(cl, { path: "/auth", element: U.jsx(Lv, {}) }),
        U.jsx(cl, {
          path: "/dashboard",
          element: U.jsx(Yc, { to: "/auth", replace: !0 }),
        }),
        U.jsx(cl, {
          path: "/",
          element: U.jsx(Yc, { to: "/auth", replace: !0 }),
        }),
      ],
    }),
  });
}
ym.createRoot(document.getElementById("root")).render(
  U.jsx(w.StrictMode, { children: U.jsx(vg, {}) })
);
