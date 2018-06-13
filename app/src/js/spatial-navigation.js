!(function(o) {
  "use strict";
  var v = {
      selector: "",
      straightOnly: !1,
      straightOverlapThreshold: 0.5,
      rememberSource: !1,
      disabled: !1,
      defaultElement: "",
      enterTo: "",
      leaveFor: null,
      restrict: "self-first",
      tabIndexIgnoreList:
        "a, input, select, textarea, button, iframe, [contentEditable=true]",
      navigableFilter: null
    },
    a = { 37: "left", 38: "up", 39: "right", 40: "down" },
    p = { left: "right", up: "down", right: "left", down: "up" },
    u = "sn:",
    r = 0,
    e = !1,
    c = !1,
    g = {},
    s = 0,
    f = "",
    l = "",
    d = !1,
    n =
      Element.prototype.matches ||
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      function(e) {
        var t = (this.parentNode || this.document).querySelectorAll(e);
        return 0 <= [].slice.call(t).indexOf(this);
      };
  function h(e) {
    var t = e.getBoundingClientRect(),
      r = {
        left: t.left,
        top: t.top,
        right: t.right,
        bottom: t.bottom,
        width: t.width,
        height: t.height
      };
    return (
      (r.element = e),
      (r.center = {
        x: r.left + Math.floor(r.width / 2),
        y: r.top + Math.floor(r.height / 2)
      }),
      (r.center.left = r.center.right = r.center.x),
      (r.center.top = r.center.bottom = r.center.y),
      r
    );
  }
  function b(e, t, r) {
    for (
      var n = [[], [], [], [], [], [], [], [], []], i = 0;
      i < e.length;
      i++
    ) {
      var o,
        a,
        u = e[i],
        c = u.center;
      if (
        ((o = c.x < t.left ? 0 : c.x <= t.right ? 1 : 2),
        n[(a = 3 * (c.y < t.top ? 0 : c.y <= t.bottom ? 1 : 2) + o)].push(u),
        -1 !== [0, 2, 6, 8].indexOf(a))
      ) {
        var s = r;
        u.left <= t.right - t.width * s &&
          (2 === a ? n[1].push(u) : 8 === a && n[7].push(u)),
          u.right >= t.left + t.width * s &&
            (0 === a ? n[1].push(u) : 6 === a && n[7].push(u)),
          u.top <= t.bottom - t.height * s &&
            (6 === a ? n[3].push(u) : 8 === a && n[5].push(u)),
          u.bottom >= t.top + t.height * s &&
            (0 === a ? n[3].push(u) : 2 === a && n[5].push(u));
      }
    }
    return n;
  }
  function m(e, t, r, n) {
    if (!(e && t && r && r.length)) return null;
    for (var i = [], o = 0; o < r.length; o++) {
      var a = h(r[o]);
      a && i.push(a);
    }
    if (!i.length) return null;
    var u = h(e);
    if (!u) return null;
    var c,
      s,
      f = ((c = u),
      {
        nearPlumbLineIsBetter: function(e) {
          var t;
          return (t =
            e.center.x < c.center.x
              ? c.center.x - e.right
              : e.left - c.center.x) < 0
            ? 0
            : t;
        },
        nearHorizonIsBetter: function(e) {
          var t;
          return (t =
            e.center.y < c.center.y
              ? c.center.y - e.bottom
              : e.top - c.center.y) < 0
            ? 0
            : t;
        },
        nearTargetLeftIsBetter: function(e) {
          var t;
          return (t =
            e.center.x < c.center.x ? c.left - e.right : e.left - c.left) < 0
            ? 0
            : t;
        },
        nearTargetTopIsBetter: function(e) {
          var t;
          return (t =
            e.center.y < c.center.y ? c.top - e.bottom : e.top - c.top) < 0
            ? 0
            : t;
        },
        topIsBetter: function(e) {
          return e.top;
        },
        bottomIsBetter: function(e) {
          return -1 * e.bottom;
        },
        leftIsBetter: function(e) {
          return e.left;
        },
        rightIsBetter: function(e) {
          return -1 * e.right;
        }
      }),
      l = b(i, u, n.straightOverlapThreshold),
      d = b(l[4], u.center, n.straightOverlapThreshold);
    switch (t) {
      case "left":
        s = [
          {
            group: d[0].concat(d[3]).concat(d[6]),
            distance: [f.nearPlumbLineIsBetter, f.topIsBetter]
          },
          { group: l[3], distance: [f.nearPlumbLineIsBetter, f.topIsBetter] },
          {
            group: l[0].concat(l[6]),
            distance: [
              f.nearHorizonIsBetter,
              f.rightIsBetter,
              f.nearTargetTopIsBetter
            ]
          }
        ];
        break;
      case "right":
        s = [
          {
            group: d[2].concat(d[5]).concat(d[8]),
            distance: [f.nearPlumbLineIsBetter, f.topIsBetter]
          },
          { group: l[5], distance: [f.nearPlumbLineIsBetter, f.topIsBetter] },
          {
            group: l[2].concat(l[8]),
            distance: [
              f.nearHorizonIsBetter,
              f.leftIsBetter,
              f.nearTargetTopIsBetter
            ]
          }
        ];
        break;
      case "up":
        s = [
          {
            group: d[0].concat(d[1]).concat(d[2]),
            distance: [f.nearHorizonIsBetter, f.leftIsBetter]
          },
          { group: l[1], distance: [f.nearHorizonIsBetter, f.leftIsBetter] },
          {
            group: l[0].concat(l[2]),
            distance: [
              f.nearPlumbLineIsBetter,
              f.bottomIsBetter,
              f.nearTargetLeftIsBetter
            ]
          }
        ];
        break;
      case "down":
        s = [
          {
            group: d[6].concat(d[7]).concat(d[8]),
            distance: [f.nearHorizonIsBetter, f.leftIsBetter]
          },
          { group: l[7], distance: [f.nearHorizonIsBetter, f.leftIsBetter] },
          {
            group: l[6].concat(l[8]),
            distance: [
              f.nearPlumbLineIsBetter,
              f.topIsBetter,
              f.nearTargetLeftIsBetter
            ]
          }
        ];
        break;
      default:
        return null;
    }
    n.straightOnly && s.pop();
    var v = (function(e) {
      for (var t = null, r = 0; r < e.length; r++)
        if (e[r].group.length) {
          t = e[r];
          break;
        }
      if (!t) return null;
      var o = t.distance;
      return (
        t.group.sort(function(e, t) {
          for (var r = 0; r < o.length; r++) {
            var n = o[r],
              i = n(e) - n(t);
            if (i) return i;
          }
          return 0;
        }),
        t.group
      );
    })(s);
    if (!v) return null;
    var p = null;
    if (
      n.rememberSource &&
      n.previous &&
      n.previous.destination === e &&
      n.previous.reverse === t
    )
      for (var g = 0; g < v.length; g++)
        if (v[g].element === n.previous.target) {
          p = v[g].element;
          break;
        }
    return p || (p = v[0].element), p;
  }
  function i(e) {
    return o
      ? o(e).get()
      : "string" == typeof e
        ? [].slice.call(document.querySelectorAll(e))
        : "object" == typeof e && e.length
          ? [].slice.call(e)
          : "object" == typeof e && 1 === e.nodeType
            ? [e]
            : [];
  }
  function y(e, t) {
    return o
      ? o(e).is(t)
      : "string" == typeof t
        ? n.call(e, t)
        : "object" == typeof t && t.length
          ? 0 <= t.indexOf(e)
          : "object" == typeof t && 1 === t.nodeType && e === t;
  }
  function w() {
    var e = document.activeElement;
    if (e && e !== document.body) return e;
  }
  function I(e) {
    e = e || {};
    for (var t = 1; t < arguments.length; t++)
      if (arguments[t])
        for (var r in arguments[t])
          arguments[t].hasOwnProperty(r) &&
            void 0 !== arguments[t][r] &&
            (e[r] = arguments[t][r]);
    return e;
  }
  function B(e, t) {
    Array.isArray(t) || (t = [t]);
    for (var r, n = 0; n < t.length; n++)
      0 <= (r = e.indexOf(t[n])) && e.splice(r, 1);
    return e;
  }
  function E(e, t, r) {
    if (!e || !t || !g[t] || g[t].disabled) return !1;
    if (
      (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
      e.hasAttribute("disabled")
    )
      return !1;
    if (r && !y(e, g[t].selector)) return !1;
    if ("function" == typeof g[t].navigableFilter) {
      if (!1 === g[t].navigableFilter(e, t)) return !1;
    } else if (
      "function" == typeof v.navigableFilter &&
      !1 === v.navigableFilter(e, t)
    )
      return !1;
    return !0;
  }
  function x(e) {
    for (var t in g) if (!g[t].disabled && y(e, g[t].selector)) return t;
  }
  function L(t) {
    return i(g[t].selector).filter(function(e) {
      return E(e, t);
    });
  }
  function k(e) {
    var t = g[e].defaultElement;
    return t
      ? ("string" == typeof t
          ? (t = i(t)[0])
          : o && t instanceof o && (t = t.get(0)),
        E(t, e, !0) ? t : null)
      : null;
  }
  function S(e) {
    var t = g[e].lastFocusedElement;
    return E(t, e, !0) ? t : null;
  }
  function T(e, t, r, n) {
    arguments.length < 4 && (n = !0);
    var i = document.createEvent("CustomEvent");
    return i.initCustomEvent(u + t, !0, n, r), e.dispatchEvent(i);
  }
  function F(e, t, r) {
    if (!e) return !1;
    var n = w(),
      i = function() {
        n && n.blur(), e.focus(), O(e, t);
      };
    if (d) return i(), !0;
    if (((d = !0), c)) return i(), !(d = !1);
    if (n) {
      var o = { nextElement: e, nextSectionId: t, direction: r, native: !1 };
      if (!T(n, "willunfocus", o)) return (d = !1);
      n.blur(), T(n, "unfocused", o, !1);
    }
    var a = { previousElement: n, sectionId: t, direction: r, native: !1 };
    return T(e, "willfocus", a)
      ? (e.focus(), T(e, "focused", a, !1), (d = !1), O(e, t), !0)
      : (d = !1);
  }
  function O(e, t) {
    t || (t = x(e)), t && ((g[t].lastFocusedElement = e), (l = t));
  }
  function P(e, t) {
    if ("@" == e.charAt(0)) {
      return 1 == e.length ? j() : j(e.substr(1));
    } else {
      var r = i(e)[0];
      if (r) {
        var n = x(r);
        if (E(r, n)) return F(r, n, t);
      }
    }
    return !1;
  }
  function j(e) {
    var t = [],
      r = function(e) {
        e && t.indexOf(e) < 0 && g[e] && !g[e].disabled && t.push(e);
      };
    e ? r(e) : (r(f), r(l), Object.keys(g).map(r));
    for (var n = 0; n < t.length; n++) {
      var i,
        o = t[n];
      if (
        (i =
          "last-focused" == g[o].enterTo
            ? S(o) || k(o) || L(o)[0]
            : k(o) || S(o) || L(o)[0])
      )
        return F(i, o);
    }
    return !1;
  }
  function A(e, t) {
    T(e, "navigatefailed", { direction: t }, !1);
  }
  function z(e, t) {
    if (g[e].leaveFor && void 0 !== g[e].leaveFor[t]) {
      var r = g[e].leaveFor[t];
      if ("string" == typeof r) return "" === r ? null : P(r, t);
      o && r instanceof o && (r = r.get(0));
      var n = x(r);
      if (E(r, n)) return F(r, n, t);
    }
    return !1;
  }
  function H(e, t, r) {
    var n = t.getAttribute("data-sn-" + e);
    if ("string" == typeof n) return !("" === n || !P(n, e)) || (A(t, e), !1);
    var i = {},
      o = [];
    for (var a in g) (i[a] = L(a)), (o = o.concat(i[a]));
    var u,
      c = I({}, v, g[r]);
    if ("self-only" == c.restrict || "self-first" == c.restrict) {
      var s = i[r];
      (u = m(t, e, B(s, t), c)) ||
        "self-first" != c.restrict ||
        (u = m(t, e, B(o, s), c));
    } else u = m(t, e, B(o, t), c);
    if (u) {
      g[r].previous = { target: t, destination: u, reverse: p[e] };
      var f = x(u);
      if (r != f) {
        var l,
          d = z(r, e);
        if (d) return !0;
        if (null === d) return A(t, e), !1;
        switch (g[f].enterTo) {
          case "last-focused":
            l = S(f) || k(f);
            break;
          case "default-element":
            l = k(f);
        }
        l && (u = l);
      }
      return F(u, f, e);
    }
    return !!z(r, e) || (A(t, e), !1);
  }
  function t(e) {
    if (!(!s || c || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)) {
      var t,
        r = function() {
          return e.preventDefault(), e.stopPropagation(), !1;
        },
        n = a[e.keyCode];
      if (!n)
        return 13 == e.keyCode && (t = w()) && x(t) && !T(t, "enter-down")
          ? r()
          : void 0;
      if (!(t = w()) && (l && (t = S(l)), !t)) return j(), r();
      var i = x(t);
      if (i)
        return (
          T(t, "willmove", { direction: n, sectionId: i, cause: "keydown" }) &&
            H(n, t, i),
          r()
        );
    }
  }
  function K(e) {
    if (
      !(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) &&
      !c &&
      s &&
      13 == e.keyCode
    ) {
      var t = w();
      t &&
        x(t) &&
        (T(t, "enter-up") || (e.preventDefault(), e.stopPropagation()));
    }
  }
  function C(e) {
    var t = e.target;
    if (t !== window && t !== document && s && !d) {
      var r = x(t);
      if (r) {
        if (c) return void O(t, r);
        var n = { sectionId: r, native: !0 };
        T(t, "willfocus", n)
          ? (T(t, "focused", n, !1), O(t, r))
          : ((d = !0), t.blur(), (d = !1));
      }
    }
  }
  function M(e) {
    var t = e.target;
    if (t !== window && t !== document && !c && s && !d && x(t)) {
      var r = { native: !0 };
      T(t, "willunfocus", r)
        ? T(t, "unfocused", r, !1)
        : ((d = !0),
          setTimeout(function() {
            t.focus(), (d = !1);
          }));
    }
  }
  var N = {
    init: function() {
      e ||
        (window.addEventListener("keydown", t),
        window.addEventListener("keyup", K),
        window.addEventListener("focus", C, !0),
        window.addEventListener("blur", M, !0),
        (e = !0));
    },
    uninit: function() {
      window.removeEventListener("blur", M, !0),
        window.removeEventListener("focus", C, !0),
        window.removeEventListener("keyup", K),
        window.removeEventListener("keydown", t),
        N.clear(),
        (r = 0),
        (e = !1);
    },
    clear: function() {
      (s = 0), (l = f = ""), (d = !(g = {}));
    },
    set: function() {
      var e, t;
      if ("object" == typeof arguments[0]) t = arguments[0];
      else {
        if ("string" != typeof arguments[0] || "object" != typeof arguments[1])
          return;
        if (((e = arguments[0]), (t = arguments[1]), !g[e]))
          throw new Error('Section "' + e + "\" doesn't exist!");
      }
      for (var r in t)
        void 0 !== v[r] &&
          (e ? (g[e][r] = t[r]) : void 0 !== t[r] && (v[r] = t[r]));
      e && (g[e] = I({}, g[e]));
    },
    add: function() {
      var e,
        t = {};
      if (
        ("object" == typeof arguments[0]
          ? (t = arguments[0])
          : "string" == typeof arguments[0] &&
            "object" == typeof arguments[1] &&
            ((e = arguments[0]), (t = arguments[1])),
        e ||
          (e =
            "string" == typeof t.id
              ? t.id
              : (function() {
                  for (var e; (e = "section-" + String(++r)), g[e]; );
                  return e;
                })()),
        g[e])
      )
        throw new Error('Section "' + e + '" has already existed!');
      return (g[e] = {}), s++, N.set(e, t), e;
    },
    remove: function(e) {
      if (!e || "string" != typeof e)
        throw new Error('Please assign the "sectionId"!');
      return !!g[e] && ((g[e] = void 0), (g = I({}, g)), s--, !0);
    },
    disable: function(e) {
      return !!g[e] && (g[e].disabled = !0);
    },
    enable: function(e) {
      return !!g[e] && !(g[e].disabled = !1);
    },
    pause: function() {
      c = !0;
    },
    resume: function() {
      c = !1;
    },
    focus: function(e, t) {
      var r = !1;
      void 0 === t && "boolean" == typeof e && ((t = e), (e = void 0));
      var n = !c && t;
      if ((n && N.pause(), e))
        if ("string" == typeof e) r = g[e] ? j(e) : P(e);
        else {
          o && e instanceof o && (e = e.get(0));
          var i = x(e);
          E(e, i) && (r = F(e, i));
        }
      else r = j();
      return n && N.resume(), r;
    },
    move: function(e, t) {
      if (((e = e.toLowerCase()), !p[e])) return !1;
      var r = t ? i(t)[0] : w();
      if (!r) return !1;
      var n = x(r);
      return (
        !!n &&
        (!!T(r, "willmove", { direction: e, sectionId: n, cause: "api" }) &&
          H(e, r, n))
      );
    },
    makeFocusable: function(e) {
      var t = function(e) {
        var t =
          void 0 !== e.tabIndexIgnoreList
            ? e.tabIndexIgnoreList
            : v.tabIndexIgnoreList;
        i(e.selector).forEach(function(e) {
          y(e, t) ||
            e.getAttribute("tabindex") ||
            e.setAttribute("tabindex", "-1");
        });
      };
      if (e) {
        if (!g[e]) throw new Error('Section "' + e + "\" doesn't exist!");
        t(g[e]);
      } else for (var r in g) t(g[r]);
    },
    setDefaultSection: function(e) {
      if (e) {
        if (!g[e]) throw new Error('Section "' + e + "\" doesn't exist!");
        f = e;
      } else f = "";
    }
  };
  (window.SpatialNavigation = N),
    o &&
      ((o.SpatialNavigation = function() {
        if ((N.init(), 0 < arguments.length)) {
          if (o.isPlainObject(arguments[0])) return N.add(arguments[0]);
          if (
            "string" === o.type(arguments[0]) &&
            o.isFunction(N[arguments[0]])
          )
            return N[arguments[0]].apply(N, [].slice.call(arguments, 1));
        }
        return o.extend({}, N);
      }),
      (o.fn.SpatialNavigation = function() {
        var e;
        return (
          ((e = o.isPlainObject(arguments[0])
            ? arguments[0]
            : { id: arguments[0] }).selector = this),
          N.init(),
          e.id && N.remove(e.id),
          N.add(e),
          N.makeFocusable(e.id),
          this
        );
      }));
})(window.jQuery);
