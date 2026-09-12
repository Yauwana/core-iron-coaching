/* @ds-bundle: {"format":4,"namespace":"CoreIronCoachingDesignSystem_3e1466","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"ContactTile","sourcePath":"components/cards/ContactTile.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"QuoteBlock","sourcePath":"components/cards/QuoteBlock.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"TimelineEntry","sourcePath":"components/cards/TimelineEntry.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Input.jsx"},{"name":"PhotoFrame","sourcePath":"components/media/PhotoFrame.jsx"},{"name":"CTABanner","sourcePath":"components/site/CTABanner.jsx"},{"name":"FilterTabs","sourcePath":"components/site/FilterTabs.jsx"},{"name":"Hero","sourcePath":"components/site/Hero.jsx"},{"name":"Section","sourcePath":"components/site/Section.jsx"},{"name":"SiteFooter","sourcePath":"components/site/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/site/SiteHeader.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"b8407f5781b8","components/cards/Card.jsx":"92500b89f111","components/cards/ContactTile.jsx":"142b627902bc","components/cards/FeatureCard.jsx":"7e385d4f64b3","components/cards/QuoteBlock.jsx":"b681185d7c4e","components/cards/StatCard.jsx":"07b70d54110c","components/cards/TestimonialCard.jsx":"713a7dbc3c74","components/cards/TimelineEntry.jsx":"ed866d186d90","components/core/Badge.jsx":"39dcdf9d832e","components/core/Button.jsx":"363536d00414","components/core/Eyebrow.jsx":"8370638a9fb2","components/core/Icon.jsx":"f88145888aeb","components/core/SectionHeading.jsx":"f3249e0823ad","components/forms/Input.jsx":"e3607a972d8f","components/media/PhotoFrame.jsx":"556a08fa44b2","components/site/CTABanner.jsx":"4dd364a88f2b","components/site/FilterTabs.jsx":"0c4f898a9114","components/site/Hero.jsx":"66b409d33e2b","components/site/Section.jsx":"3edaa44a67c4","components/site/SiteFooter.jsx":"ec112df7392c","components/site/SiteHeader.jsx":"3d391c79ae18","ui_kits/marketing/ContactScreen.jsx":"055fa8143f7c","ui_kits/marketing/HomeScreen.jsx":"c212f734f2bc","ui_kits/marketing/MediaScreen.jsx":"1d285fa51153","ui_kits/marketing/TrainerScreen.jsx":"a582397f9ce3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CoreIronCoachingDesignSystem_3e1466 = window.CoreIronCoachingDesignSystem_3e1466 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FULL = '../../assets/logo-full.png';
const FULL_DARK = '../../assets/logo-full-dark.png';
const ICON = '../../assets/logo-icon.png';
function Wordmark({
  size = 22,
  inverse = false,
  stacked = false,
  mark = 'lockup',
  basePath,
  style,
  ...rest
}) {
  const p = rel => basePath ? basePath.replace(/\/$/, '') + rel.replace('../..', '') : rel;
  if (mark === 'icon') {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: p(ICON),
      alt: "Core Iron Coaching",
      style: {
        height: size * 1.5,
        width: 'auto',
        display: 'block',
        ...style
      }
    }, rest));
  }
  if (stacked) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: p(inverse ? FULL_DARK : FULL),
      alt: "Core Iron Coaching",
      style: {
        height: size * 3.2,
        width: 'auto',
        display: 'block',
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.42,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: p(ICON),
    alt: "",
    style: {
      height: size * 1.45,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: size * 0.06,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 78',
      fontStyle: 'italic',
      fontWeight: 800,
      fontSize: size,
      lineHeight: 0.98,
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
      color: inverse ? 'var(--iron-900)' : 'var(--paper-000)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Core Iron"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.4,
      fontStyle: 'normal',
      fontWeight: 700,
      letterSpacing: '0.28em',
      color: 'var(--orange-500)'
    }
  }, "Coaching")));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  dark: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-hairline)',
    color: 'var(--text-body)'
  },
  raised: {
    background: 'var(--surface-card-raised)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-body)'
  },
  light: {
    background: 'var(--surface-card-light)',
    border: '1px solid var(--border-inverse)',
    color: 'var(--text-body-inverse)'
  },
  outline: {
    background: 'transparent',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-body)'
  },
  accent: {
    background: 'rgba(226,105,31,.07)',
    border: '1px solid rgba(226,105,31,.34)',
    color: 'var(--text-body)'
  }
};
function Card({
  children,
  surface = 'dark',
  padding = 'var(--gutter-card)',
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SURFACES[surface] || SURFACES.dark;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      padding,
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: hover ? 'translateY(var(--lift-y))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      ...s,
      ...(hover ? {
        borderColor: 'rgba(226,105,31,.45)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  value,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    surface: "raised",
    padding: "20px 28px",
    style: {
      textAlign: 'center',
      minWidth: 132,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 76',
      fontStyle: 'italic',
      fontWeight: 800,
      fontSize: 40,
      lineHeight: 1,
      color: 'var(--orange-500)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 84',
      fontWeight: 600,
      fontSize: 10.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  orange: {
    bg: 'rgba(226,105,31,.14)',
    fg: 'var(--orange-400)',
    bd: 'rgba(226,105,31,.42)'
  },
  solid: {
    bg: 'var(--orange-500)',
    fg: 'var(--text-on-accent)',
    bd: 'var(--orange-500)'
  },
  neutral: {
    bg: 'rgba(255,255,255,.06)',
    fg: 'var(--iron-200)',
    bd: 'var(--border-subtle)'
  },
  success: {
    bg: 'rgba(62,158,99,.14)',
    fg: 'var(--green-500)',
    bd: 'rgba(62,158,99,.42)'
  },
  danger: {
    bg: 'rgba(207,62,46,.14)',
    fg: 'var(--red-500)',
    bd: 'rgba(207,62,46,.42)'
  },
  steel: {
    bg: 'rgba(154,161,166,.16)',
    fg: 'var(--steel-300)',
    bd: 'rgba(154,161,166,.44)'
  }
};
function Badge({
  children,
  tone = 'orange',
  shape = 'pill',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.orange;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 11px 5px',
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-xs)',
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 84',
      fontWeight: 700,
      fontSize: 10.5,
      letterSpacing: '0.13em',
      textTransform: 'uppercase',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  align = 'left',
  rule = true,
  tone = 'orange',
  style,
  ...rest
}) {
  const color = tone === 'muted' ? 'var(--text-muted)' : 'var(--orange-500)';
  const line = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: 26,
      height: 1,
      background: color,
      opacity: 0.7
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 80',
      fontWeight: 700,
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), rule ? line : null, /*#__PURE__*/React.createElement("span", null, children), rule && align === 'center' ? line : null);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE = 'https://unpkg.com/lucide-static@0.460.0/icons/';
function Icon({
  name,
  size = 18,
  strokeWidth,
  color = 'currentColor',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": name,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: color,
      WebkitMaskImage: `url(${LUCIDE}${name}.svg)`,
      maskImage: `url(${LUCIDE}${name}.svg)`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/ContactTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ContactTile({
  icon = 'mail',
  label,
  value,
  detail,
  href,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    surface: "raised",
    interactive: !!href,
    padding: "22px 18px",
    style: {
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Tag, {
    href: href,
    style: {
      display: 'block',
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 40,
      height: 40,
      margin: '0 auto 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--orange-500)',
      color: 'var(--iron-950)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 84',
      fontWeight: 700,
      fontSize: 'var(--fs-title-3)',
      color: 'var(--orange-500)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)'
    }
  }, value), detail ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, detail) : null));
}
Object.assign(__ds_scope, { ContactTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ContactTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureCard({
  icon = 'target',
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    surface: "dark",
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(226,105,31,.13)',
      border: '1px solid rgba(226,105,31,.30)',
      color: 'var(--orange-500)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 84',
      fontWeight: 700,
      fontSize: 'var(--fs-title-3)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: '0.005em',
      color: 'var(--text-display)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/QuoteBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuoteBlock({
  children,
  attribution,
  role,
  avatarLabel = 'Portrait',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      padding: '30px 34px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      borderLeft: '3px solid var(--orange-500)',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 22,
      right: 26,
      color: 'rgba(226,105,31,.22)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "quote",
    size: 34
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--measure-prose)',
      fontSize: 'var(--fs-body-lg)',
      fontStyle: 'italic',
      lineHeight: 1.7,
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      border: '2px solid var(--orange-500)',
      background: 'repeating-linear-gradient(135deg,var(--iron-800) 0 7px,var(--iron-850) 7px 14px)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 8,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--iron-400)',
      textAlign: 'center',
      overflow: 'hidden'
    },
    "aria-label": avatarLabel
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 84',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--orange-500)'
    }
  }, attribution), role ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, role) : null)));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/cards/TimelineEntry.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TimelineEntry({
  year,
  title,
  summary,
  highlighted = false,
  open = false,
  onToggle,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '28px minmax(0,1fr)',
      gap: 16,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: highlighted ? 'var(--orange-500)' : 'var(--iron-800)',
      border: `1px solid ${highlighted ? 'var(--orange-400)' : 'var(--border-inverse)'}`,
      color: highlighted ? 'var(--iron-950)' : 'var(--iron-400)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: highlighted ? 'trophy' : 'circle-dot',
    size: 13
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 1,
      background: 'var(--border-inverse)',
      marginTop: 6
    }
  })), /*#__PURE__*/React.createElement("div", {
    onClick: onToggle,
    style: {
      padding: '16px 18px',
      borderRadius: 'var(--radius-md)',
      background: highlighted ? 'linear-gradient(90deg,rgba(226,105,31,.14),rgba(226,105,31,.02))' : 'var(--paper-050)',
      border: `1px solid ${highlighted ? 'rgba(226,105,31,.42)' : 'var(--border-inverse)'}`,
      cursor: onToggle ? 'pointer' : undefined,
      transition: 'border-color var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "solid",
    shape: "square"
  }, year), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 84',
      fontWeight: 700,
      fontSize: 'var(--fs-title-3)',
      color: 'var(--text-display-inverse)'
    }
  }, title)), summary ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.6,
      color: 'var(--text-body-inverse)'
    }
  }, summary) : null, onToggle ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      marginTop: 10,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 84',
      fontWeight: 700,
      fontSize: 10.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--orange-600)'
    }
  }, open ? 'See less' : 'See details', " ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'chevron-up' : 'chevron-down',
    size: 13
  })) : null, open && children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, children) : null));
}
Object.assign(__ds_scope, { TimelineEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TimelineEntry.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '9px 16px',
    fontSize: 11.5,
    gap: 7,
    icon: 14
  },
  md: {
    padding: '13px 24px',
    fontSize: 13,
    gap: 9,
    icon: 16
  },
  lg: {
    padding: '17px 34px',
    fontSize: 14.5,
    gap: 10,
    icon: 18
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--sheen-orange)',
    color: 'var(--text-on-accent)',
    border: '1px solid var(--orange-400)',
    boxShadow: 'var(--shadow-glow-orange)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--paper-000)',
    border: '1px solid var(--border-strong)',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--orange-500)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  solidDark: {
    background: 'var(--iron-800)',
    color: 'var(--paper-000)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-sm)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled = false,
  fullWidth = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    fontFamily: 'var(--font-display)',
    fontVariationSettings: '"wdth" 82',
    fontWeight: 700,
    fontSize: s.fontSize,
    letterSpacing: 'var(--ls-button)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.42 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
    transform: down && !disabled ? 'scale(var(--press-scale))' : hover && !disabled ? 'translateY(var(--lift-y))' : 'none',
    filter: hover && !disabled ? 'brightness(1.08)' : 'none',
    ...v,
    ...(hover && !disabled && variant === 'secondary' ? {
      borderColor: 'var(--orange-500)',
      color: 'var(--orange-400)'
    } : null),
    ...(hover && !disabled && variant === 'ghost' ? {
      background: 'rgba(226,105,31,.10)'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: base
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LEVELS = {
  1: 'var(--fs-display-1)',
  2: 'var(--fs-display-2)',
  3: 'var(--fs-display-3)',
  4: 'var(--fs-title-1)'
};
function SectionHeading({
  children,
  level = 3,
  align = 'left',
  accent,
  inverse = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h2", _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: `"wdth" ${level <= 2 ? 'var(--display-width-tight)' : 'var(--display-width)'}`,
      fontStyle: 'italic',
      fontWeight: 800,
      fontSize: LEVELS[level] || LEVELS[3],
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      textTransform: 'uppercase',
      textAlign: align,
      color: inverse ? 'var(--text-display-inverse)' : 'var(--text-display)',
      textWrap: 'balance',
      ...style
    }
  }, rest), children, accent ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, " ", accent) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldBase = {
  width: '100%',
  padding: '12px 14px',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body)',
  color: 'var(--text-body)',
  background: 'var(--surface-inset)',
  border: '1px solid var(--border-subtle)',
  borderRadius: 'var(--radius-sm)',
  outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
};
function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 84',
      fontWeight: 700,
      fontSize: 10.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--status-danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
function Input({
  label,
  hint,
  error,
  icon,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const control = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 13,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBase,
      paddingLeft: icon ? 38 : 14,
      borderColor: error ? 'var(--status-danger)' : focus ? 'var(--orange-500)' : 'var(--border-subtle)',
      boxShadow: focus ? '0 0 0 3px rgba(226,105,31,.18)' : 'none',
      ...style
    }
  }, rest)));
  return label || hint || error ? /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: id
  }, control) : control;
}
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBase,
      resize: 'vertical',
      lineHeight: 1.6,
      borderColor: error ? 'var(--status-danger)' : focus ? 'var(--orange-500)' : 'var(--border-subtle)',
      boxShadow: focus ? '0 0 0 3px rgba(226,105,31,.18)' : 'none',
      ...style
    }
  }, rest)));
}
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBase,
      appearance: 'none',
      paddingRight: 38,
      cursor: 'pointer',
      borderColor: error ? 'var(--status-danger)' : focus ? 'var(--orange-500)' : 'var(--border-subtle)',
      boxShadow: focus ? '0 0 0 3px rgba(226,105,31,.18)' : 'none',
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === 'string' ? o : o.value,
    value: typeof o === 'string' ? o : o.value
  }, typeof o === 'string' ? o : o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 13,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--orange-500)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }))));
}
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: disabled ? undefined : () => onChange && onChange(!checked),
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 18,
      height: 18,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--orange-500)' : 'var(--surface-inset)',
      border: `1px solid ${checked ? 'var(--orange-500)' : 'var(--border-subtle)'}`,
      color: 'var(--iron-950)',
      transition: 'background var(--dur-fast) var(--ease-standard)'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  }) : null), label);
}
Object.assign(__ds_scope, { Field, Input, Textarea, Select, Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/media/PhotoFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PhotoFrame({
  label = 'Photography',
  ratio = '4 / 3',
  radius = 'var(--radius-md)',
  src,
  scrim = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      borderRadius: radius,
      overflow: 'hidden',
      border: '1px solid var(--border-hairline)',
      background: src ? `center/cover no-repeat url(${src})` : 'repeating-linear-gradient(135deg,var(--iron-800) 0 9px,var(--iron-850) 9px 18px)',
      ...style
    }
  }, rest), !src ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      padding: 16,
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 80',
      fontWeight: 700,
      fontSize: 10.5,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--iron-400)'
    }
  }, label) : null, scrim ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%'
    }
  }, children) : null);
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TestimonialCard({
  title,
  quote,
  name,
  role,
  photoLabel = 'Before / after',
  photoSrc,
  surface = 'light',
  style,
  ...rest
}) {
  const light = surface === 'light';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    surface: surface,
    padding: "0",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,200px) minmax(0,1fr)',
      gap: 0,
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.PhotoFrame, {
    ratio: "3 / 4",
    label: photoLabel,
    src: photoSrc,
    radius: "0",
    style: {
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 84',
      fontWeight: 700,
      fontSize: 'var(--fs-title-2)',
      lineHeight: 1.2,
      color: light ? 'var(--text-display-inverse)' : 'var(--text-display)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      fontStyle: 'italic',
      lineHeight: 1.75,
      color: light ? 'var(--text-body-inverse)' : 'var(--text-muted)'
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 600,
      color: 'var(--orange-600)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: light ? 'var(--text-muted-inverse)' : 'var(--text-faint)'
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/site/CTABanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CTABanner({
  kicker,
  title = 'Ready to start your',
  accent = 'transformation?',
  body,
  primaryCta = 'Start your journey',
  secondaryCta,
  onPrimary,
  onSecondary,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '38px 40px 42px',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center',
      background: 'linear-gradient(180deg,var(--iron-800) 0%,var(--iron-850) 100%)',
      border: '1px solid rgba(226,105,31,.26)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, rest), kicker ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    align: "center",
    style: {
      marginBottom: 14
    }
  }, kicker) : null, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 4,
    align: "center",
    accent: accent
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px auto 0',
      maxWidth: 540,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.7,
      color: 'var(--text-muted)'
    }
  }, body) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    iconRight: "arrow-right",
    onClick: onPrimary
  }, primaryCta), secondaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: onSecondary
  }, secondaryCta) : null));
}
Object.assign(__ds_scope, { CTABanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/CTABanner.jsx", error: String((e && e.message) || e) }); }

// components/site/FilterTabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FilterTabs({
  items = [],
  active,
  onChange,
  align = 'center',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      onClick: () => onChange && onChange(it),
      style: {
        padding: '8px 16px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        background: on ? 'var(--orange-500)' : 'var(--iron-800)',
        border: `1px solid ${on ? 'var(--orange-400)' : 'var(--border-subtle)'}`,
        color: on ? 'var(--iron-950)' : 'var(--iron-200)',
        fontFamily: 'var(--font-display)',
        fontVariationSettings: '"wdth" 84',
        fontWeight: 700,
        fontSize: 10.5,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { FilterTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/FilterTabs.jsx", error: String((e && e.message) || e) }); }

// components/site/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Hero({
  title = 'Transformation',
  titleLine2 = 'starts today',
  kicker,
  imageSrc,
  watermark = 'Personal Trainer',
  points = [],
  primaryCta = 'Start your transformation',
  secondaryCta,
  onPrimary,
  onSecondary,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      minHeight: 460,
      display: 'grid',
      alignItems: 'center',
      padding: '72px 48px 64px',
      overflow: 'hidden',
      background: imageSrc ? `var(--scrim-left), center/cover no-repeat url(${imageSrc})` : 'var(--scrim-left), repeating-linear-gradient(135deg,var(--iron-850) 0 14px,var(--iron-800) 14px 28px)',
      ...style
    }
  }, rest), watermark ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 8,
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 96',
      fontStyle: 'italic',
      fontWeight: 800,
      fontSize: 112,
      lineHeight: 1,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.055)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none'
    }
  }, watermark) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 620
    }
  }, kicker ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 80',
      fontWeight: 700,
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--orange-500)'
    }
  }, kicker) : null, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 1,
    style: {
      fontSize: 'clamp(44px, 6vw, 76px)'
    }
  }, title, titleLine2 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), titleLine2) : null), children ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      maxWidth: 480,
      fontSize: 'var(--fs-body)',
      fontStyle: 'italic',
      lineHeight: 1.7,
      color: 'var(--iron-200)'
    }
  }, children) : null, points.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 20,
      listStyle: 'none',
      margin: '24px 0 0',
      padding: 0
    }
  }, points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--iron-100)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: p.icon || 'check',
    size: 15,
    color: "var(--orange-500)"
  }), p.label))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: "primary",
    iconRight: "arrow-right",
    onClick: onPrimary
  }, primaryCta), secondaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: "secondary",
    onClick: onSecondary
  }, secondaryCta) : null)));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Hero.jsx", error: String((e && e.message) || e) }); }

// components/site/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BANDS = {
  dark: 'var(--iron-900)',
  darker: 'var(--iron-950)',
  gradient: 'linear-gradient(180deg,var(--iron-950) 0%,var(--iron-850) 55%,var(--iron-900) 100%)',
  light: 'var(--paper-100)',
  paper: 'var(--paper-000)'
};
function Section({
  band = 'dark',
  kicker,
  title,
  accent,
  intro,
  align = 'center',
  width = 'var(--container-max)',
  children,
  style,
  ...rest
}) {
  const light = band === 'light' || band === 'paper';
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      padding: 'var(--gutter-section) 48px',
      background: BANDS[band] || BANDS.dark,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: width,
      margin: '0 auto'
    }
  }, kicker || title ? /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, kicker ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    align: align
  }, kicker) : null, title ? /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 3,
    align: align,
    accent: accent,
    inverse: light
  }, title) : null, intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 620,
      textAlign: align,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.75,
      color: light ? 'var(--text-muted-inverse)' : 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, intro) : null) : null, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Section.jsx", error: String((e && e.message) || e) }); }

// components/site/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const colTitle = {
  margin: '0 0 14px',
  fontFamily: 'var(--font-display)',
  fontVariationSettings: '"wdth" 84',
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--orange-500)'
};
const linkStyle = {
  display: 'block',
  padding: '4px 0',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--iron-300)',
  textDecoration: 'none'
};
function SiteFooter({
  blurb = 'Transform your body and mind with professional fitness training.',
  columns = [],
  socials = ['instagram', 'facebook', 'youtube'],
  legal = '© 2026 CoreIron Coaching. All rights reserved.',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      padding: '56px 48px 26px',
      background: 'var(--iron-950)',
      borderTop: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) repeat(3,minmax(0,1fr))',
      gap: 40,
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 22
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      maxWidth: 300,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.7,
      color: 'var(--iron-300)'
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 20
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: `#${s}`,
    onClick: e => e.preventDefault(),
    "aria-label": s,
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--iron-800)',
      border: '1px solid var(--border-hairline)',
      color: 'var(--iron-200)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s,
    size: 15
  }))))), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("h4", {
    style: colTitle
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: linkStyle
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '38px auto 0',
      paddingTop: 18,
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      fontSize: 'var(--fs-caption)',
      color: 'var(--iron-400)'
    }
  }, /*#__PURE__*/React.createElement("span", null, legal), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#privacy",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--iron-400)',
      textDecoration: 'none'
    }
  }, "Privacy policy"), /*#__PURE__*/React.createElement("a", {
    href: "#terms",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--iron-400)',
      textDecoration: 'none'
    }
  }, "Terms of service"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/site/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  items = ['Home', 'About', 'Programs', 'Results', 'Contact'],
  active = 'Home',
  onNavigate,
  cta = 'Book now',
  onCta,
  transparent = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '16px 32px',
      background: transparent ? 'rgba(17,19,21,.55)' : 'var(--iron-950)',
      backdropFilter: transparent ? `blur(var(--blur-glass))` : undefined,
      WebkitBackdropFilter: transparent ? `blur(var(--blur-glass))` : undefined,
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 21
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26
    }
  }, items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it,
      href: `#${it.toLowerCase()}`,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it);
      },
      style: {
        position: 'relative',
        fontFamily: 'var(--font-display)',
        fontVariationSettings: '"wdth" 84',
        fontWeight: 700,
        fontSize: 11.5,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: on ? 'var(--orange-500)' : 'var(--iron-200)',
        paddingBottom: 3,
        borderBottom: `2px solid ${on ? 'var(--orange-500)' : 'transparent'}`,
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, it);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#search",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--iron-200)',
      display: 'grid',
      placeItems: 'center'
    },
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 17
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "primary",
    onClick: onCta,
    icon: "calendar"
  }, cta)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ContactScreen.jsx
try { (() => {
const {
  Section,
  Card,
  ContactTile,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  Icon,
  SectionHeading,
  Eyebrow
} = window.CoreIronCoachingDesignSystem_3e1466;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [news, setNews] = React.useState(true);
  return /*#__PURE__*/React.createElement(Section, {
    band: "dark",
    kicker: "Get in touch",
    title: "Contact",
    accent: "us",
    intro: "Have a question, or ready to start? Reach out to us through any of these channels."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ContactTile, {
    icon: "mail",
    label: "Email us",
    value: "hello@coreiron.co",
    detail: "Replies within one day",
    href: "mailto:hello@coreiron.co"
  }), /*#__PURE__*/React.createElement(ContactTile, {
    icon: "phone",
    label: "Call us",
    value: "+64 21 000 0000",
    detail: "Mon\u2013Fri 6am\u20139pm",
    href: "tel:+64210000000"
  }), /*#__PURE__*/React.createElement(ContactTile, {
    icon: "map-pin",
    label: "Visit us",
    value: "Kilbirnie, Wellington",
    detail: "Studio access by appointment"
  }), /*#__PURE__*/React.createElement(ContactTile, {
    icon: "clock",
    label: "Opening hours",
    value: "Mon\u2013Sat 6am\u20139pm",
    detail: "Closed Sundays"
  })), /*#__PURE__*/React.createElement(Card, {
    surface: "raised",
    padding: "34px 36px",
    style: {
      marginTop: 28,
      maxWidth: 760,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '30px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 52,
      height: 52,
      margin: '0 auto 18px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--orange-500)',
      color: 'var(--iron-950)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 24
  })), /*#__PURE__*/React.createElement(SectionHeading, {
    level: 4,
    align: "center"
  }, "Request received"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px auto 22px',
      maxWidth: 400,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.7,
      color: 'var(--text-muted)'
    }
  }, "We will be in touch within one working day to book your free consultation."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Book a free consultation"), /*#__PURE__*/React.createElement(SectionHeading, {
    level: 4,
    style: {
      marginTop: 12,
      marginBottom: 24
    }
  }, "Tell us where you are now"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-name",
    label: "Full name",
    icon: "user",
    placeholder: "Jamie Reid"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "c-email",
    label: "Email",
    icon: "mail",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "c-phone",
    label: "Phone",
    icon: "phone",
    placeholder: "+64 21 000 0000"
  }), /*#__PURE__*/React.createElement(Select, {
    id: "c-goal",
    label: "Primary goal",
    options: ['Fat loss', 'Muscle gain', 'Competition prep', 'General fitness', 'Return from injury']
  }), /*#__PURE__*/React.createElement(Select, {
    id: "c-mode",
    label: "Training mode",
    options: ['In person, Wellington', 'Online coaching', 'Hybrid']
  }), /*#__PURE__*/React.createElement(Select, {
    id: "c-exp",
    label: "Training experience",
    options: ['New to the gym', 'Under a year', 'One to three years', 'Three years or more']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "c-notes",
    label: "Anything we should know",
    rows: 4,
    placeholder: "Injuries, schedule constraints, what you have tried before\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the weekly training email",
    checked: news,
    onChange: setNews
  }), /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right",
    onClick: () => setSent(true)
  }, "Book your session")))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HomeScreen.jsx
try { (() => {
const {
  SiteHeader,
  Hero,
  Section,
  FeatureCard,
  StatCard,
  TestimonialCard,
  CTABanner,
  SiteFooter,
  PhotoFrame,
  Button,
  Badge,
  Eyebrow,
  SectionHeading,
  Icon
} = window.CoreIronCoachingDesignSystem_3e1466;
function VideoPanel() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "16 / 9",
    label: "Client story \u2014 12 week transformation",
    radius: "var(--radius-lg)",
    scrim: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 62,
      height: 62,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--orange-500)',
      color: 'var(--iron-950)',
      boxShadow: 'var(--shadow-glow-orange)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 26
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px auto 0',
      maxWidth: 460,
      textAlign: 'center',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.7,
      color: 'var(--text-muted)'
    }
  }, "Join hundreds of clients who have taken the first step. Twelve weeks, one coach, and a plan built around the life you already have."));
}
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    kicker: "Certified personal trainer",
    title: "Transformation",
    titleLine2: "starts today",
    watermark: "Personal Trainer",
    points: [{
      icon: 'video',
      label: 'Online coaching'
    }, {
      icon: 'calendar-days',
      label: '12-week program'
    }, {
      icon: 'shield-check',
      label: 'REPs registered'
    }],
    primaryCta: "Start your transformation",
    secondaryCta: "Free consultation",
    onPrimary: () => onNavigate('Contact'),
    onSecondary: () => onNavigate('Contact')
  }, "From where you are to where you deserve to be \u2014 with a certified coach by your side."), /*#__PURE__*/React.createElement(Section, {
    band: "gradient",
    kicker: "See the stories",
    title: "Real results,",
    accent: "real people",
    intro: "Watch the transformation journeys that are possible with dedication and expert guidance."
  }, /*#__PURE__*/React.createElement(VideoPanel, null)), /*#__PURE__*/React.createElement(Section, {
    band: "dark",
    kicker: "What training with us looks like",
    title: "Comprehensive fitness",
    accent: "solutions",
    intro: "Over a decade of experience and a discipline-first approach, applied to training methods that deliver sustainable results at every level."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "target",
    title: "Goal-specific programming"
  }, "Every program is tailored to your specific goals, lifestyle and current fitness level."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "heart-pulse",
    title: "Health-first approach"
  }, "Prioritising long-term health and sustainability over quick fixes."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "trending-up",
    title: "Data-driven results"
  }, "Regular assessments and progress tracking to optimise your program."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "calendar-check",
    title: "Flexible scheduling"
  }, "Training sessions that fit your lifestyle and schedule, in person or online."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "message-circle",
    title: "Ongoing support"
  }, "Access to your coach between sessions, plus weekly written check-ins."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "shield-check",
    title: "Injury prevention"
  }, "Movement screening, proper form and progressive overload done properly."))), /*#__PURE__*/React.createElement(Section, {
    band: "darker",
    kicker: "Certified \xB7 Experienced \xB7 Results-driven",
    title: "A decade of",
    accent: "coaching"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "500+",
    label: "Clients transformed"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "10+",
    label: "Years experience"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "15+",
    label: "Certifications"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 700,
      margin: '28px auto 0',
      textAlign: 'center',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.8,
      color: 'var(--text-muted)'
    }
  }, "Certified Personal Trainer, Corrective Exercise Specialist and Precision Nutrition Coach. Continuing education in sports psychology, injury prevention and advanced training methodologies.")), /*#__PURE__*/React.createElement(Section, {
    band: "light",
    kicker: "More client results",
    title: "They did the work.",
    accent: "Here's the proof.",
    align: "left"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    title: "I lost 27kgs so far",
    name: "Hiran Badullage",
    role: "Accounts administrator",
    photoLabel: "Week 1 / Week 12",
    quote: "Once you decide to change your body, you need authentic guidance to achieve your goals. I personally tried a bunch of workouts, meal plans and followed so-called fitness models for years, and wasted my time and money."
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    title: "I lost 10kgs in 12 weeks",
    name: "Nishantha Perera",
    role: "Nurse",
    photoLabel: "Week 1 / Week 12",
    quote: "I was in and out of the gym for several years without proper results. The meal plans were not that hard to follow and I got all the nutrition I needed to keep healthy."
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    title: "Programming was different and very specific",
    name: "Andrew O'Brien",
    role: "Head coach",
    photoLabel: "Week 1 / Week 14",
    quote: "The programming was different to what I had experienced before and very specific. Highly recommend this as a premium service if you don't have time to work out yourself."
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    title: "You can definitely achieve your goals",
    name: "Gihan Swethahansa",
    role: "Mechanic",
    photoLabel: "Week 1 / Week 12",
    quote: "If we have a good navigator, we know that we will arrive at our destination safely without taking any wrong turns. You can definitely achieve your goals with a coach who has done it."
  }))), /*#__PURE__*/React.createElement(Section, {
    band: "dark",
    width: "var(--container-narrow)"
  }, /*#__PURE__*/React.createElement(CTABanner, {
    kicker: "Book your session",
    title: "Ready to start your",
    accent: "transformation?",
    body: "Book your first session with an expert trainer and begin the journey to a healthier, stronger you.",
    primaryCta: "Book appointment",
    secondaryCta: "Free consultation",
    onPrimary: () => onNavigate('Contact'),
    onSecondary: () => onNavigate('Contact')
  })));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MediaScreen.jsx
try { (() => {
const {
  Section,
  FilterTabs,
  PhotoFrame,
  Card,
  Badge,
  Button,
  Icon,
  SectionHeading,
  CTABanner
} = window.CoreIronCoachingDesignSystem_3e1466;
const ITEMS = [{
  id: 1,
  tag: 'Competitions',
  title: 'Nationals 2022 — behind the scenes',
  date: '18 Sep 2022',
  meta: '1:12'
}, {
  id: 2,
  tag: 'Competitions',
  title: 'Open class, prejudging',
  date: '18 Sep 2022',
  meta: '0:48'
}, {
  id: 3,
  tag: 'Media',
  title: 'Radio interview — training for real life',
  date: '02 Mar 2023',
  meta: '14:30'
}, {
  id: 4,
  tag: 'Seminars',
  title: 'Nutrition workshop, Wellington',
  date: '11 Jun 2024',
  meta: '9 photos'
}, {
  id: 5,
  tag: 'Media',
  title: 'Magazine feature — the twelve week rebuild',
  date: '20 Jan 2025',
  meta: '6 photos'
}, {
  id: 6,
  tag: 'Competitions',
  title: 'Championship finals',
  date: '05 Sep 2025',
  meta: '2:04'
}];
function MediaScreen() {
  const [filter, setFilter] = React.useState('All');
  const [selected, setSelected] = React.useState(ITEMS[0]);
  const shown = filter === 'All' ? ITEMS : ITEMS.filter(i => i.tag === filter);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    band: "dark",
    kicker: "Our journey",
    title: "Media &",
    accent: "achievements",
    intro: "Events, achievements and media coverage from the last five years of competing and coaching."
  }, /*#__PURE__*/React.createElement(FilterTabs, {
    items: ['All', 'Competitions', 'Media', 'Seminars'],
    active: filter,
    onChange: f => {
      setFilter(f);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,340px)',
      gap: 20,
      marginTop: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "dark",
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "16 / 9",
    label: selected.title,
    radius: "0",
    scrim: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 54,
      height: 54,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--orange-500)',
      color: 'var(--iron-950)',
      boxShadow: 'var(--shadow-glow-orange)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 22
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px 22px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "orange",
    shape: "square"
  }, selected.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '12px 0 6px',
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 82',
      fontWeight: 700,
      fontSize: 'var(--fs-title-2)',
      textTransform: 'uppercase',
      color: 'var(--text-display)'
    }
  }, selected.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 13
  }), selected.date), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 13
  }), selected.meta)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, shown.map(it => {
    const on = it.id === selected.id;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      onClick: () => setSelected(it),
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      surface: on ? 'accent' : 'dark',
      padding: "10px",
      style: {
        display: 'grid',
        gridTemplateColumns: '84px minmax(0,1fr)',
        gap: 12,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(PhotoFrame, {
      ratio: "16 / 10",
      label: "",
      radius: "var(--radius-sm)"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 600,
        lineHeight: 1.35,
        color: on ? 'var(--orange-400)' : 'var(--text-display)'
      }
    }, it.title), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-faint)'
      }
    }, it.tag, " \xB7 ", it.meta))));
  })))), /*#__PURE__*/React.createElement(Section, {
    band: "darker",
    width: "var(--container-narrow)"
  }, /*#__PURE__*/React.createElement(CTABanner, {
    kicker: "Not sure where to start",
    title: "Book a twenty minute",
    accent: "call",
    body: "No pressure and no sales script \u2014 we work out whether coaching is right for you, and what it would look like.",
    primaryCta: "Book a call"
  })));
}
Object.assign(window, {
  MediaScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MediaScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/TrainerScreen.jsx
try { (() => {
const {
  Section,
  TimelineEntry,
  QuoteBlock,
  PhotoFrame,
  Badge,
  Card,
  Icon,
  Button,
  SectionHeading,
  Eyebrow
} = window.CoreIronCoachingDesignSystem_3e1466;
const CREDENTIALS = [['dumbbell', 'Natural bodybuilding'], ['trophy', 'Competition prep'], ['scale', 'Weight management'], ['apple', 'Nutrition planning'], ['users', 'Group training'], ['activity', 'Recovery techniques']];
function TrainerScreen() {
  const [open, setOpen] = React.useState('2021');
  const toggle = y => setOpen(open === y ? null : y);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    band: "light",
    align: "left",
    width: "var(--container-narrow)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Meet the trainer"), /*#__PURE__*/React.createElement(SectionHeading, {
    level: 2,
    inverse: true,
    style: {
      marginTop: 12
    }
  }, "Ruwan Palihawadana"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    style: {
      color: 'var(--iron-600)',
      background: 'rgba(0,0,0,.05)',
      borderColor: 'var(--border-inverse)'
    }
  }, "Certified NZ trainer"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    style: {
      color: 'var(--iron-600)',
      background: 'rgba(0,0,0,.05)',
      borderColor: 'var(--border-inverse)'
    }
  }, "National champion"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    style: {
      color: 'var(--iron-600)',
      background: 'rgba(0,0,0,.05)',
      borderColor: 'var(--border-inverse)'
    }
  }, "Precision nutrition")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)',
      gap: 32,
      alignItems: 'start',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 4,
    inverse: true
  }, "From ordinary to extraordinary"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.85,
      color: 'var(--text-body-inverse)'
    }
  }, "Born and raised in Sri Lanka, Ruwan's journey took him from a desk job to a national stage in 2018. What started as a remedy for a lower-back problem became a full transformation \u2014 and then a decade-long career in coaching other people through the same shift."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.85,
      color: 'var(--text-body-inverse)'
    }
  }, "After relocating for advanced study in sports science and nutrition, he began competing. Twelve weeks out from his first show he weighed 92kg; he stepped on stage at 78kg and placed. The method behind that first prep is the same one every client follows today."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 20,
      flexWrap: 'wrap'
    }
  }, ['Training', 'Competing', 'Nutrition', 'Recovery', 'Mindset'].map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "orange",
    shape: "square"
  }, t)))), /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "3 / 4",
    label: "Trainer portrait"
  }))), /*#__PURE__*/React.createElement(Section, {
    band: "paper",
    kicker: "The journey",
    title: "From transformation to",
    accent: "championship",
    align: "left"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(TimelineEntry, {
    year: "2021",
    title: "12-week program success",
    summary: "Lost 12kg of fat while rebuilding a base of proper nutrition and training.",
    open: open === '2021',
    onToggle: () => toggle('2021')
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.75,
      color: 'var(--text-body-inverse)'
    }
  }, "Twelve weeks of structured progressive overload, a consistent calorie deficit and weekly check-ins. Sleep and step count were tracked alongside training volume."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "4 / 5",
    label: "Week 1"
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "4 / 5",
    label: "Week 6"
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "4 / 5",
    label: "Week 12"
  }))), /*#__PURE__*/React.createElement(TimelineEntry, {
    year: "2022",
    title: "First competition victory",
    summary: "Gold in the senior men's physique category, national classic.",
    open: open === '2022a',
    onToggle: () => toggle('2022a')
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "16 / 9",
    label: "Stage gallery"
  })), /*#__PURE__*/React.createElement(TimelineEntry, {
    year: "2022",
    title: "Qualified trainer",
    summary: "Graduated with a National Certificate in Fitness, level 4.",
    open: open === '2022b',
    onToggle: () => toggle('2022b')
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "16 / 9",
    label: "Graduation"
  })), /*#__PURE__*/React.createElement(TimelineEntry, {
    year: "2025",
    title: "Historic achievement",
    highlighted: true,
    summary: "National bodybuilding competitor, overall placing in open class.",
    open: open === '2025',
    onToggle: () => toggle('2025')
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "16 / 9",
    label: "Championship gallery"
  })))), /*#__PURE__*/React.createElement(Section, {
    band: "dark",
    width: "var(--container-narrow)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "dark"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 84',
      fontWeight: 700,
      fontSize: 'var(--fs-title-3)',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--orange-500)'
    }
  }, "Specialties"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, CREDENTIALS.map(([ic, label]) => /*#__PURE__*/React.createElement("span", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 15,
    color: "var(--orange-500)"
  }), label)))), /*#__PURE__*/React.createElement(Card, {
    surface: "dark"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 84',
      fontWeight: 700,
      fontSize: 'var(--fs-title-3)',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--orange-500)'
    }
  }, "Certifications"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['NZ Certificate in Exercise, Level 4', 'Whitireia Institute of Technology', '2022'], ['National bodybuilding competitor', 'IFBB / NABBA affiliated', '2025']].map(([t, s, y]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: '12px 14px',
      background: 'var(--surface-inset)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 600,
      color: 'var(--text-display)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)',
      margin: '3px 0 8px'
    }
  }, s), /*#__PURE__*/React.createElement(Badge, {
    tone: "orange",
    shape: "square"
  }, y)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(QuoteBlock, {
    attribution: "Ruwan Palihawadana",
    role: "Head coach, CoreIron"
  }, "You know where you are \u2014 struggling with weight, cutting confidence, and trying to do it all at once. I combined the foundations of injury-free training with the science that actually holds up, and made it something you can repeat for the rest of your life."))));
}
Object.assign(window, {
  TrainerScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/TrainerScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ContactTile = __ds_scope.ContactTile;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TimelineEntry = __ds_scope.TimelineEntry;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.CTABanner = __ds_scope.CTABanner;

__ds_ns.FilterTabs = __ds_scope.FilterTabs;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
