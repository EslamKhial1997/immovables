import {
  R as Q,
  e as u,
  S as j,
  a7 as x,
  l as we,
  a8 as ye,
  a9 as _e,
  a6 as F,
  g as me,
  aa as ke,
  ab as pe,
  ac as p,
  k as ge,
  ad as m,
} from "./app-Cw8l14NC.js";
/**
 * Vue 3 Carousel 0.2.8
 * (c) 2022
 * @license MIT
 */ const g = {
    itemsToShow: 1,
    itemsToScroll: 1,
    modelValue: 0,
    transition: 300,
    autoplay: 0,
    snapAlign: "center",
    wrapAround: !1,
    pauseAutoplayOnHover: !1,
    mouseDrag: !0,
    touchDrag: !0,
    dir: "ltr",
    breakpoints: void 0,
  },
  he = {
    itemsToShow: { default: g.itemsToShow, type: Number },
    itemsToScroll: { default: g.itemsToScroll, type: Number },
    wrapAround: { default: g.wrapAround, type: Boolean },
    snapAlign: {
      default: g.snapAlign,
      validator(e) {
        return ["start", "end", "center", "center-even", "center-odd"].includes(
          e
        );
      },
    },
    transition: { default: g.transition, type: Number },
    breakpoints: { default: g.breakpoints, type: Object },
    autoplay: { default: g.autoplay, type: Number },
    pauseAutoplayOnHover: { default: g.pauseAutoplayOnHover, type: Boolean },
    modelValue: { default: void 0, type: Number },
    mouseDrag: { default: g.mouseDrag, type: Boolean },
    touchDrag: { default: g.touchDrag, type: Boolean },
    dir: {
      default: g.dir,
      validator(e) {
        return ["rtl", "ltr"].includes(e);
      },
    },
    settings: {
      default() {
        return {};
      },
      type: Object,
    },
  };
function Te({ config: e, slidesCount: n }) {
  const { snapAlign: a, wrapAround: s, itemsToShow: i = 1 } = e;
  if (s) return Math.max(n - 1, 0);
  let l;
  switch (a) {
    case "start":
      l = n - i;
      break;
    case "end":
      l = n - 1;
      break;
    case "center":
    case "center-odd":
      l = n - Math.ceil((i - 0.5) / 2);
      break;
    case "center-even":
      l = n - Math.ceil(i / 2);
      break;
    default:
      l = 0;
      break;
  }
  return Math.max(l, 0);
}
function Ae({ config: e, slidesCount: n }) {
  const { wrapAround: a, snapAlign: s, itemsToShow: i = 1 } = e;
  let l = 0;
  if (a || i > n) return l;
  switch (s) {
    case "start":
      l = 0;
      break;
    case "end":
      l = i - 1;
      break;
    case "center":
    case "center-odd":
      l = Math.floor((i - 1) / 2);
      break;
    case "center-even":
      l = Math.floor((i - 2) / 2);
      break;
    default:
      l = 0;
      break;
  }
  return l;
}
function J({ val: e, max: n, min: a }) {
  return n < a ? e : Math.min(Math.max(e, a), n);
}
function Ce({ config: e, currentSlide: n, slidesCount: a }) {
  const { snapAlign: s, wrapAround: i, itemsToShow: l = 1 } = e;
  let c = n;
  switch (s) {
    case "center":
    case "center-odd":
      c -= (l - 1) / 2;
      break;
    case "center-even":
      c -= (l - 2) / 2;
      break;
    case "end":
      c -= l - 1;
      break;
  }
  return i ? c : J({ val: c, max: a - l, min: 0 });
}
function Me(e) {
  var n, a, s;
  return e
    ? ((a = (n = e[0]) === null || n === void 0 ? void 0 : n.type) === null ||
      a === void 0
        ? void 0
        : a.name) === "CarouselSlide"
      ? e
      : ((s = e[0]) === null || s === void 0 ? void 0 : s.children) || []
    : [];
}
function P({ val: e, max: n, min: a = 0 }) {
  return e > n
    ? P({ val: e - (n + 1), max: n, min: a })
    : e < a
    ? P({ val: e + (n + 1), max: n, min: a })
    : e;
}
function Oe(e, n) {
  let a;
  return function (...s) {
    const i = this;
    a || (e.apply(i, s), (a = !0), setTimeout(() => (a = !1), n));
  };
}
function Le(e, n) {
  let a;
  return function (...s) {
    a && clearTimeout(a),
      (a = setTimeout(() => {
        e(...s), (a = null);
      }, n));
  };
}
var je = Q({
    name: "ARIA",
    setup() {
      const e = m("currentSlide", u(0)),
        n = m("slidesCount", u(0));
      return () =>
        p(
          "div",
          {
            class: ["carousel__liveregion", "carousel__sr-only"],
            "aria-live": "polite",
            "aria-atomic": "true",
          },
          `Item ${e.value + 1} of ${n.value}`
        );
    },
  }),
  Ne = Q({
    name: "Carousel",
    props: he,
    setup(e, { slots: n, emit: a, expose: s }) {
      var i;
      const l = u(null),
        c = u([]),
        h = u(0),
        d = u(0);
      let b = u({}),
        w = Object.assign({}, g);
      const o = j(Object.assign({}, w)),
        r = u((i = e.modelValue) !== null && i !== void 0 ? i : 0),
        y = u(0),
        E = u(0),
        A = u(0),
        O = u(0);
      let C, V;
      x("config", o),
        x("slidesCount", d),
        x("currentSlide", r),
        x("maxSlide", A),
        x("minSlide", O),
        x("slideWidth", h);
      function Z() {
        const t = Object.assign(Object.assign({}, e), e.settings);
        (b = u(Object.assign({}, t.breakpoints))),
          (w = Object.assign(Object.assign({}, t), {
            settings: void 0,
            breakpoints: void 0,
          })),
          ee(w);
      }
      function I() {
        const t = Object.keys(b.value)
          .map((v) => Number(v))
          .sort((v, T) => +T - +v);
        let f = Object.assign({}, w);
        t.some((v) =>
          window.matchMedia(`(min-width: ${v}px)`).matches
            ? ((f = Object.assign(Object.assign({}, f), b.value[v])), !0)
            : !1
        ),
          ee(f);
      }
      function ee(t) {
        Object.entries(t).forEach(([f, v]) => (o[f] = v));
      }
      const te = Le(() => {
        Object.keys(b.value).length && (I(), L()), N();
      }, 16);
      function N() {
        if (!l.value) return;
        const t = l.value.getBoundingClientRect();
        h.value = t.width / o.itemsToShow;
      }
      function L() {
        d.value <= 0 ||
          ((E.value = Math.ceil((d.value - 1) / 2)),
          (A.value = Te({ config: o, slidesCount: d.value })),
          (O.value = Ae({ config: o, slidesCount: d.value })),
          o.wrapAround ||
            (r.value = J({ val: r.value, max: A.value, min: O.value })));
      }
      we(() => {
        Object.keys(b.value).length && I(),
          ye(() => {
            L(), N(), a("init");
          }),
          oe(),
          window.addEventListener("resize", te, { passive: !0 });
      }),
        _e(() => {
          V && clearTimeout(V),
            C && clearInterval(C),
            window.removeEventListener("resize", te, { passive: !0 });
        });
      let S = !1;
      const D = { x: 0, y: 0 },
        B = { x: 0, y: 0 },
        _ = j({ x: 0, y: 0 }),
        $ = u(!1),
        Se = () => {
          $.value = !0;
        },
        be = () => {
          $.value = !1;
        };
      function ne(t) {
        (S = t.type === "touchstart"),
          !((!S && t.button !== 0) || M.value) &&
            (S || t.preventDefault(),
            (D.x = S ? t.touches[0].clientX : t.clientX),
            (D.y = S ? t.touches[0].clientY : t.clientY),
            document.addEventListener(S ? "touchmove" : "mousemove", ae, !0),
            document.addEventListener(S ? "touchend" : "mouseup", le, !0));
      }
      const ae = Oe((t) => {
        (B.x = S ? t.touches[0].clientX : t.clientX),
          (B.y = S ? t.touches[0].clientY : t.clientY);
        const f = B.x - D.x,
          v = B.y - D.y;
        (_.y = v), (_.x = f);
      }, 16);
      function le() {
        const t = o.dir === "rtl" ? -1 : 1,
          f = Math.sign(_.x) * 0.4,
          v = Math.round(_.x / h.value + f) * t;
        if (v && !S) {
          const T = (H) => {
            H.stopPropagation(), window.removeEventListener("click", T, !0);
          };
          window.addEventListener("click", T, !0);
        }
        k(r.value - v),
          (_.x = 0),
          (_.y = 0),
          document.removeEventListener(S ? "touchmove" : "mousemove", ae, !0),
          document.removeEventListener(S ? "touchend" : "mouseup", le, !0);
      }
      function oe() {
        !o.autoplay ||
          o.autoplay <= 0 ||
          (C = setInterval(() => {
            (o.pauseAutoplayOnHover && $.value) || R();
          }, o.autoplay));
      }
      function ie() {
        C && (clearInterval(C), (C = null)), oe();
      }
      const M = u(!1);
      function k(t) {
        const f = o.wrapAround ? t : J({ val: t, max: A.value, min: O.value });
        r.value === f ||
          M.value ||
          (a("slide-start", {
            slidingToIndex: t,
            currentSlideIndex: r.value,
            prevSlideIndex: y.value,
            slidesCount: d.value,
          }),
          (M.value = !0),
          (y.value = r.value),
          (r.value = f),
          (V = setTimeout(() => {
            if (o.wrapAround) {
              const v = P({ val: f, max: A.value, min: 0 });
              v !== r.value &&
                ((r.value = v),
                a("loop", { currentSlideIndex: r.value, slidingToIndex: t }));
            }
            a("update:modelValue", r.value),
              a("slide-end", {
                currentSlideIndex: r.value,
                prevSlideIndex: y.value,
                slidesCount: d.value,
              }),
              (M.value = !1),
              ie();
          }, o.transition)));
      }
      function R() {
        k(r.value + o.itemsToScroll);
      }
      function z() {
        k(r.value - o.itemsToScroll);
      }
      const se = { slideTo: k, next: R, prev: z };
      x("nav", se), x("isSliding", M);
      const re = F(() =>
        Ce({ config: o, currentSlide: r.value, slidesCount: d.value })
      );
      x("slidesToScroll", re);
      const xe = F(() => {
        const t = o.dir === "rtl" ? -1 : 1,
          f = re.value * h.value * t;
        return {
          transform: `translateX(${_.x - f}px)`,
          transition: `${M.value ? o.transition : 0}ms`,
          margin: o.wrapAround ? `0 -${d.value * h.value}px` : "",
          width: "100%",
        };
      });
      function ue() {
        Z();
      }
      function ce() {
        Z(), I(), L(), N(), ie();
      }
      function de() {
        L();
      }
      Object.keys(he).forEach((t) => {
        ["modelValue"].includes(t) || me(() => e[t], ce);
      }),
        me(
          () => e.modelValue,
          (t) => {
            t !== r.value && k(Number(t));
          }
        ),
        ue(),
        ke(() => {
          d.value !== c.value.length && de();
        });
      const ve = {
        config: o,
        slidesCount: d,
        slideWidth: h,
        next: R,
        prev: z,
        slideTo: k,
        currentSlide: r,
        maxSlide: A,
        minSlide: O,
        middleSlide: E,
      };
      s({
        updateBreakpointsConfigs: I,
        updateSlidesData: L,
        updateSlideWidth: N,
        initCarousel: ue,
        restartCarousel: ce,
        updateCarousel: de,
        slideTo: k,
        next: R,
        prev: z,
        nav: se,
        data: ve,
      });
      const W = n.default || n.slides,
        X = n.addons,
        fe = j(ve);
      return () => {
        const t = Me(W == null ? void 0 : W(fe)),
          f = (X == null ? void 0 : X(fe)) || [];
        t.forEach((Y, U) => (Y.props.index = U));
        let v = t;
        if (o.wrapAround) {
          const Y = t.map((G, q) =>
              pe(G, { index: -t.length + q, isClone: !0 })
            ),
            U = t.map((G, q) => pe(G, { index: t.length + q, isClone: !0 }));
          v = [...Y, ...t, ...U];
        }
        (c.value = t), (d.value = Math.max(t.length, 1));
        const T = p(
            "ol",
            {
              class: "carousel__track",
              style: xe.value,
              onMousedown: o.mouseDrag ? ge(ne, ["capture"]) : null,
              onTouchstart: o.touchDrag ? ge(ne, ["capture"]) : null,
            },
            v
          ),
          H = p("div", { class: "carousel__viewport" }, T);
        return p(
          "section",
          {
            ref: l,
            class: { carousel: !0, "carousel--rtl": o.dir === "rtl" },
            dir: o.dir,
            "aria-label": "Gallery",
            tabindex: "0",
            onMouseenter: Se,
            onMouseleave: be,
          },
          [H, f, p(je)]
        );
      };
    },
  });
const Ee = {
    arrowUp: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",
    arrowDown: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
    arrowRight: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",
    arrowLeft: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z",
  },
  K = (e) => {
    const n = e.name;
    if (!n || typeof n != "string") return;
    const a = Ee[n],
      s = p("path", { d: a }),
      i = e.title || n,
      l = p("title", i);
    return p(
      "svg",
      {
        class: "carousel__icon",
        viewBox: "0 0 24 24",
        role: "img",
        ariaLabel: i,
      },
      [l, s]
    );
  };
K.props = { name: String, title: String };
const De = (e, { slots: n, attrs: a }) => {
    const { next: s, prev: i } = n || {},
      l = m("config", j(Object.assign({}, g))),
      c = m("maxSlide", u(1)),
      h = m("minSlide", u(1)),
      d = m("currentSlide", u(1)),
      b = m("nav", {}),
      { dir: w, wrapAround: o } = l,
      r = w === "rtl",
      y = p(
        "button",
        {
          type: "button",
          class: [
            "carousel__prev",
            !o && d.value <= h.value && "carousel__prev--disabled",
            a == null ? void 0 : a.class,
          ],
          "aria-label": "Navigate to previous slide",
          onClick: b.prev,
        },
        (i == null ? void 0 : i()) ||
          p(K, { name: r ? "arrowRight" : "arrowLeft" })
      ),
      E = p(
        "button",
        {
          type: "button",
          class: [
            "carousel__next",
            !o && d.value >= c.value && "carousel__next--disabled",
            a == null ? void 0 : a.class,
          ],
          "aria-label": "Navigate to next slide",
          onClick: b.next,
        },
        (s == null ? void 0 : s()) ||
          p(K, { name: r ? "arrowLeft" : "arrowRight" })
      );
    return [y, E];
  },
  Be = () => {
    const e = m("maxSlide", u(1)),
      n = m("minSlide", u(1)),
      a = m("currentSlide", u(1)),
      s = m("nav", {}),
      i = (c) => P({ val: a.value, max: e.value, min: 0 }) === c,
      l = [];
    for (let c = n.value; c < e.value + 1; c++) {
      const h = p("button", {
          type: "button",
          class: {
            "carousel__pagination-button": !0,
            "carousel__pagination-button--active": i(c),
          },
          "aria-label": `Navigate to slide ${c + 1}`,
          onClick: () => s.slideTo(c),
        }),
        d = p("li", { class: "carousel__pagination-item", key: c }, h);
      l.push(d);
    }
    return p("ol", { class: "carousel__pagination" }, l);
  };
var Re = Q({
  name: "CarouselSlide",
  props: {
    index: { type: Number, default: 1 },
    isClone: { type: Boolean, default: !1 },
  },
  setup(e, { slots: n }) {
    const a = m("config", j(Object.assign({}, g))),
      s = m("currentSlide", u(0)),
      i = m("slidesToScroll", u(0)),
      l = m("slideWidth", u(0)),
      c = m("isSliding", u(!1)),
      h = F(() => ({ width: l.value ? `${l.value}px` : "100%" })),
      d = () => e.index === s.value,
      b = () => e.index === s.value - 1,
      w = () => e.index === s.value + 1,
      o = () => {
        const r = Math.floor(i.value),
          y = Math.ceil(i.value + a.itemsToShow - 1);
        return e.index >= r && e.index <= y;
      };
    return () => {
      var r;
      return p(
        "li",
        {
          style: h.value,
          class: {
            carousel__slide: !0,
            "carousel_slide--clone": e.isClone,
            "carousel__slide--visible": o(),
            "carousel__slide--active": d(),
            "carousel__slide--prev": b(),
            "carousel__slide--next": w(),
            "carousel__slide--sliding": c.value,
          },
          "aria-hidden": !o(),
        },
        (r = n.default) === null || r === void 0 ? void 0 : r.call(n)
      );
    };
  },
});
export { Ne as C, De as N, Be as P, Re as S };
