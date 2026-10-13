/* Hamza Ait Mansour · portfolio behaviour.
   No framework: language switch, film leader, the light that swings his shadow,
   the bill of projects, dossiers, accordions and the night reel. */
(function () {
  'use strict';

  var P = window.PORTFOLIO;
  var doc = document.documentElement;
  var reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var lang = doc.getAttribute('data-lang') === 'en' ? 'en' : 'fr';
  var t = function (o) { return o && typeof o === 'object' ? (o[lang] != null ? o[lang] : o.fr) : o; };
  var ui = function () { return P.UI[lang]; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var pad2 = function (n) { return (n < 10 ? '0' : '') + n; };
  var store = {
    get: function (k, s) { try { return (s ? sessionStorage : localStorage).getItem(k); } catch (e) { return null; } },
    set: function (k, v, s) { try { (s ? sessionStorage : localStorage).setItem(k, v); } catch (e) { /* private mode */ } }
  };
  var icon = function (id) { return '<svg class="ic" aria-hidden="true"><use href="#' + id + '"/></svg>'; };
  // every item carries its own marker, so a wrapped line never starts or ends on a bare separator
  var dots = function (arr) { return arr.map(function (x) { return '<span class="it"><i>•</i>' + esc(x) + '</span>'; }).join(' '); };
  function wrapRolls(root) {
    $$('.roll__t', root).forEach(function (el) {
      if (el.parentNode.classList.contains('roll__m')) return;
      var m = document.createElement('span');
      m.className = 'roll__m';
      el.parentNode.insertBefore(m, el);
      m.appendChild(el);
    });
  }

  /* ------------------------------------------------------------------ i18n */
  var FR = {};
  var FR_ATTR = [];
  $$('[data-i18n]').forEach(function (el) { FR[el.getAttribute('data-i18n')] = el.innerHTML; });
  $$('[data-i18n-attr]').forEach(function (el) {
    el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
      var p = pair.split(':');
      FR_ATTR.push({ el: el, attr: p[0], key: p[1], fr: el.getAttribute(p[0]) });
    });
  });

  function applyStrings() {
    var en = P.STRINGS.en;
    $$('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var v = lang === 'en' ? en[k] : FR[k];
      if (v != null && el.innerHTML !== v) el.innerHTML = v;
    });
    FR_ATTR.forEach(function (a) {
      var v = lang === 'en' ? en[a.key] : a.fr;
      if (v != null) a.el.setAttribute(a.attr, v);
    });
    $$('[data-cv]').forEach(function (a) { a.setAttribute('href', P.CV[lang]); });
    $$('[data-set-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang)); });
    doc.lang = lang;
  }

  function setLang(next, focusBack) {
    if (next === lang) return;
    lang = next;
    doc.setAttribute('data-lang', lang);
    store.set('hm-lang', lang);
    applyStrings();
    renderAll();
    if (current) renderDossier(current);
    setTitle();
    hero.refit();
    if (focusBack) focusBack.focus();
  }

  /* --------------------------------------------------------- film leader */
  function runLeader(done) {
    var el = $('.leader');
    if (!doc.classList.contains('is-leader') || !el) { done(); return; }
    var num = $('[data-leader-num]', el);
    var n = 3;
    var finished = false;
    var start = performance.now();
    var step = 520;
    function frame(now) {
      if (finished) return;
      var elapsed = now - start;
      var idx = Math.floor(elapsed / step);
      var within = (elapsed % step) / step;
      var shown = 3 - idx;
      if (shown < 1) { finish(); return; }
      if (shown !== n) { n = shown; num.textContent = n; }
      el.style.setProperty('--sweep', (within * 360).toFixed(1) + 'deg');
      requestAnimationFrame(frame);
    }
    function finish() {
      if (finished) return;
      finished = true;
      store.set('hm-leader', '1', true);
      el.classList.add('is-out');
      document.removeEventListener('keydown', finish);
      el.removeEventListener('click', finish);
      setTimeout(function () { doc.classList.remove('is-leader'); }, 560);
      done();
    }
    document.addEventListener('keydown', finish);
    el.addEventListener('click', finish);
    requestAnimationFrame(frame);
  }

  /* ---------------------------------------------- hero: name, light, shadow */
  var hero = (function () {
    var stage = $('[data-stage]');
    var name = $('[data-name]');
    var shadow = $('[data-shadow]');
    var lit = $('[data-lit]');
    var portrait = $('[data-portrait]');
    if (!stage || !name) return { refit: function () {}, intro: function () {} };

    // letters ride up from the baseline; the h1 keeps one accessible label
    name.setAttribute('aria-label', 'Hamza Ait Mansour');
    var i = 0;
    $$('.name__first, .name__last', name).forEach(function (part) {
      var words = part.textContent.split(' ');
      part.innerHTML = words.map(function (w) {
        return '<span class="w" aria-hidden="true">' + w.split('').map(function (c) {
          return '<span class="ch" style="--i:' + (i++) + '">' + esc(c) + '</span>';
        }).join('') + '</span>';
      }).join(' ');
    });
    var clone = name.cloneNode(true);
    clone.removeAttribute('id');
    clone.removeAttribute('data-name');
    clone.removeAttribute('aria-label');
    clone.classList.add('name--lit');
    lit.appendChild(clone);

    var geo = { pw: 0, ph: 0, px: 0, py: 0 };
    var L = { x: 0.5, y: 0.6 };       // current light
    var goal = { x: 0.95, y: 0.62 };  // where the light wants to be
    var running = false;
    var visible = true;
    var touchSway = !finePointer.matches;
    var started = false;

    function fit() {
      stage.style.setProperty('--name-size', '100px');
      var stacked = getComputedStyle($('.name__first', name)).display === 'block';
      var avail = name.clientWidth;
      var textWidth = function (node) {
        var r = document.createRange();
        r.selectNodeContents(node);
        return r.getBoundingClientRect().width;
      };
      var w = stacked
        ? Math.max.apply(null, $$('.w', name).map(textWidth))
        : textWidth(name);
      if (!w) return;
      var size = Math.floor(100 * avail / w * 0.995);
      stage.style.setProperty('--name-size', size + 'px');
      stage.style.setProperty('--name-h', name.offsetHeight + 'px');
    }

    function measure() {
      var s = stage.getBoundingClientRect();
      var p = portrait.getBoundingClientRect();
      geo.pw = p.width; geo.ph = p.height;
      geo.px = p.left - s.left; geo.py = p.top - s.top;
      geo.sh = s.height;
      geo.stacked = getComputedStyle($('.name__first', name)).display === 'block';
      shadow.style.width = geo.pw + 'px';
      shadow.style.height = geo.ph + 'px';
      lit.style.width = s.width + 'px';
      lit.style.height = s.height + 'px';
    }

    function paint() {
      if (!geo.pw) return;
      var lx = 0.15 + L.x * 0.73;                    // keep the shadow off the caption block
      var s = 1.24 + (1 - L.y) * 0.16;               // a lower light throws a taller shadow
      if (geo.stacked) { lx = 0.45 + L.x * 0.17; s = 1.5; }
      // the whole head must land inside the stage, never sliced by its top edge
      s = Math.min(s, (geo.py + geo.ph - 0.03 * geo.sh) / geo.ph);
      var k = (lx - 0.5) * 2 * 36;                   // degrees of lean
      var off = (0.5 - lx) * geo.pw * 0.5;
      var M = new DOMMatrix()
        .translate(geo.px + geo.pw / 2 + off, geo.py + geo.ph)
        .skewX(k)
        .scale(s)
        .translate(-geo.pw / 2, -geo.ph);
      shadow.style.transform = M.toString();
      lit.style.transform = M.inverse().toString();
    }

    function loop(now) {
      if (touchSway && !reduceMQ.matches && started) {
        goal.x = geo.stacked ? 0.6 + Math.sin(now / 2600) * 0.4 : 0.82 + Math.sin(now / 2600) * 0.17;
        goal.y = 0.6 + Math.cos(now / 3400) * 0.08;
      }
      var dx = goal.x - L.x, dy = goal.y - L.y;
      L.x += dx * 0.075; L.y += dy * 0.075;
      paint();
      if (visible && (touchSway && !reduceMQ.matches || Math.abs(dx) + Math.abs(dy) > 0.0008)) {
        requestAnimationFrame(loop);
      } else {
        running = false;
      }
    }
    function kick() {
      if (running || !visible) return;
      running = true;
      requestAnimationFrame(loop);
    }

    function refit() { fit(); measure(); paint(); }

    function onMove(e) {
      if (reduceMQ.matches) return;
      var s = stage.getBoundingClientRect();
      goal.x = Math.min(1, Math.max(0, (e.clientX - s.left) / s.width));
      goal.y = Math.min(1, Math.max(0, (e.clientY - s.top) / s.height));
      kick();
    }

    function intro() {
      started = true;
      if (reduceMQ.matches) { L.x = goal.x; L.y = goal.y; paint(); return; }
      L.x = 0.5; L.y = 0.75;
      paint();
      setTimeout(kick, 650);
    }

    if (finePointer.matches) stage.closest('.hero').addEventListener('pointermove', onMove, { passive: true });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        visible = es[0].isIntersecting;
        if (visible) kick();
      }).observe(stage);
    }
    var rAFResize;
    window.addEventListener('resize', function () {
      cancelAnimationFrame(rAFResize);
      rAFResize = requestAnimationFrame(refit);
    });
    if (portrait.complete) refit(); else portrait.addEventListener('load', refit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);
    refit();

    return { refit: refit, intro: intro };
  })();

  /* --------------------------------------------------------- authored art */
  /* Poster plates: every object stands in one raking light from the right
     and throws a long, hard ink shadow to the left, like the hero. */
  var INK = '#0E0D0B', AMB = '#D1A23A', STK = '#F1E9D3', STK2 = '#E7DCBE';
  var FONT = 'font-family="League Gothic, Oswald, sans-serif"';
  // cast shadow of a box standing on y between x1 and x2 with height h
  function cast(x1, x2, y, h, len) {
    var dx = -(len || 1.7) * h, dy = 0.26 * h;
    return '<polygon points="' + [x1, y, x2, y, x2 + dx, y + dy, x1 + dx, y + dy].join(' ') + '" fill="' + INK + '"/>';
  }
  var ART = {
    route: function () {
      var bl = [[10, 62, 78], [70, 114, 108], [122, 202, 62]];
      var br = [[640, 680, 96], [688, 746, 130], [752, 800, 74]];
      var shadows = br.concat(bl).map(function (b) { return cast(b[0], b[1], 200, b[2], 1.5); }).join('');
      var blocks = br.concat(bl).map(function (b) { return '<rect x="' + b[0] + '" y="' + (200 - b[2]) + '" width="' + (b[1] - b[0]) + '" height="' + b[2] + '" fill="' + INK + '"/>'; }).join('');
      var qr = '<g transform="translate(624 268)"><rect width="140" height="140" fill="' + STK + '" stroke="' + INK + '" stroke-width="3"/>' +
        '<g fill="' + INK + '"><rect x="12" y="12" width="38" height="38"/><rect x="90" y="12" width="38" height="38"/><rect x="12" y="90" width="38" height="38"/></g>' +
        '<g fill="' + STK + '"><rect x="19" y="19" width="24" height="24"/><rect x="97" y="19" width="24" height="24"/><rect x="19" y="97" width="24" height="24"/></g>' +
        '<g fill="' + INK + '"><rect x="25" y="25" width="12" height="12"/><rect x="103" y="25" width="12" height="12"/><rect x="25" y="103" width="12" height="12"/><rect x="62" y="14" width="12" height="12"/><rect x="62" y="38" width="12" height="12"/><rect x="62" y="62" width="12" height="12"/><rect x="90" y="62" width="12" height="12"/><rect x="114" y="62" width="12" height="12"/><rect x="62" y="90" width="12" height="12"/><rect x="90" y="90" width="12" height="12"/><rect x="114" y="114" width="12" height="12"/><rect x="80" y="114" width="12" height="12"/><rect x="38" y="62" width="12" height="12"/><rect x="14" y="62" width="12" height="12"/></g></g>';
      return '<svg class="art-svg" viewBox="0 0 800 500" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">' +
        '<rect width="800" height="500" fill="' + AMB + '"/>' +
        '<polygon points="-40,500 380,500 560,200 516,200" fill="' + STK + '"/>' +
        shadows + blocks +
        '<rect x="0" y="198" width="800" height="3" fill="' + INK + '"/>' +
        '<line x1="170" y1="500" x2="538" y2="200" stroke="' + INK + '" stroke-width="5" stroke-dasharray="30 24"/>' +
        cast(624, 764, 408, 140, 1.6) + qr +
        '<g class="car">' + cast(226, 300, 436, 34, 2.2) + '<rect x="226" y="408" width="74" height="28" fill="' + INK + '"/><rect x="240" y="392" width="44" height="18" fill="' + INK + '"/><rect x="246" y="396" width="14" height="10" fill="' + AMB + '"/><rect x="264" y="396" width="14" height="10" fill="' + AMB + '"/></g>' +
        cast(474, 484, 306, 58, 1.8) + '<path d="M455 266c0-14 11-24 24-24s24 10 24 24c0 18-24 40-24 40s-24-22-24-40z" fill="' + INK + '"/><circle cx="479" cy="266" r="8" fill="' + AMB + '"/>' +
        cast(526, 532, 240, 40, 1.8) + '<path d="M512 212c0-10 8-17 17-17s17 7 17 17c0 13-17 28-17 28s-17-15-17-28z" fill="' + INK + '"/><circle cx="529" cy="212" r="6" fill="' + AMB + '"/>' +
        '</svg>';
    },
    classified: function () {
      var word = ui().confidential.toUpperCase();
      var bars = '';
      var rows = [250, 300, 210, 280, 160, 260];
      rows.forEach(function (w, i) { bars += '<rect x="150" y="' + (160 + i * 38) + '" width="' + w + '" height="15" fill="' + (i % 3 === 1 ? INK : '#9C927C') + '"/>'; });
      return '<svg class="art-svg" viewBox="0 0 800 500" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">' +
        '<rect width="800" height="500" fill="' + INK + '"/>' +
        '<polygon points="430,0 800,0 800,150 330,500 40,500" fill="' + AMB + '"/>' +
        '<polygon points="96,150 520,150 470,520 46,520" fill="' + INK + '"/>' +
        '<path d="M120 112h160l24 24h290v350H120z" fill="#2C2923" stroke="' + STK + '" stroke-width="3"/>' +
        '<rect x="140" y="134" width="420" height="352" fill="' + STK + '"/>' +
        '<polygon points="560,134 560,486 540,486" fill="#D9CBA6"/>' + bars +
        '<rect x="150" y="400" width="120" height="15" fill="' + INK + '"/><rect x="150" y="436" width="200" height="15" fill="#9C927C"/>' +
        '<g transform="rotate(-24 690 420)"><rect x="560" y="414" width="250" height="14" fill="' + INK + '"/><rect x="560" y="414" width="44" height="14" fill="' + STK + '"/></g>' +
        '<g class="stamp-g"><g transform="rotate(-11 350 300)"><rect x="196" y="256" width="308" height="88" fill="none" stroke="' + INK + '" stroke-width="11"/><rect x="196" y="256" width="308" height="88" fill="none" stroke="' + AMB + '" stroke-width="5"/>' +
        '<text x="350" y="326" text-anchor="middle" ' + FONT + ' font-size="70" textLength="276" lengthAdjust="spacingAndGlyphs" fill="' + AMB + '" stroke="' + INK + '" stroke-width="3" paint-order="stroke">' + esc(word) + '</text></g></g>' +
        '</svg>';
    },
    print: function () {
      var ridges = '';
      for (var r = 0; r < 13; r++) {
        var rx = 14 + r * 10, ry = 20 + r * 13.5;
        var dash = (r % 4 === 1) ? '110 12 50 9' : (r % 4 === 3 ? '170 16' : '');
        ridges += '<ellipse cx="330" cy="252" rx="' + rx + '" ry="' + ry + '" fill="none" stroke="' + INK + '" stroke-width="4.5"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + ' transform="rotate(' + (r % 2 ? 3 : -2) + ' 330 252)"/>';
      }
      return '<svg class="art-svg" viewBox="0 0 800 500" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">' +
        '<rect width="800" height="500" fill="' + STK2 + '"/>' +
        '<polygon points="560,0 800,0 800,500 300,500" fill="' + AMB + '"/>' +
        '<rect x="146" y="64" width="290" height="424" fill="' + INK + '"/>' +
        '<rect x="186" y="40" width="290" height="424" fill="' + STK + '" stroke="' + INK + '" stroke-width="3"/>' +
        '<defs><clipPath id="fp-clip"><ellipse cx="330" cy="252" rx="118" ry="176"/></clipPath></defs>' +
        '<g clip-path="url(#fp-clip)">' + ridges + '</g>' +
        '<g class="scan"><rect x="196" y="70" width="270" height="12" fill="' + AMB + '"/><rect x="196" y="82" width="270" height="2" fill="' + INK + '"/></g>' +
        '<g ' + FONT + ' fill="' + INK + '"><text x="760" y="62" font-size="34" letter-spacing="4" text-anchor="end">ZK9500</text><text x="760" y="470" font-size="24" letter-spacing="3" text-anchor="end">SPRING BOOT · MYSQL · AWS</text></g>' +
        '</svg>';
    },
    orbit: function () {
      var stars = [[60, 60], [140, 420], [250, 60], [720, 70], [760, 300], [690, 455], [520, 40], [40, 300], [330, 470], [600, 380]];
      var s = stars.map(function (p, i) { return '<rect x="' + p[0] + '" y="' + p[1] + '" width="' + (i % 3 ? 3 : 5) + '" height="' + (i % 3 ? 3 : 5) + '" fill="' + STK + '"/>'; }).join('');
      var helix = '', path1 = '', path2 = '';
      for (var y = 70; y <= 430; y += 26) {
        var a = Math.sin((y - 70) / 52);
        helix += '<line x1="' + (640 - a * 46).toFixed(1) + '" y1="' + y + '" x2="' + (640 + a * 46).toFixed(1) + '" y2="' + y + '" stroke="' + AMB + '" stroke-width="4"/>';
      }
      for (var yy = 60; yy <= 440; yy += 10) {
        var b = Math.sin((yy - 70) / 52);
        path1 += (yy === 60 ? 'M' : 'L') + (640 - b * 46).toFixed(1) + ' ' + yy;
        path2 += (yy === 60 ? 'M' : 'L') + (640 + b * 46).toFixed(1) + ' ' + yy;
      }
      return '<svg class="art-svg" viewBox="0 0 800 500" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">' +
        '<rect width="800" height="500" fill="' + INK + '"/>' + s +
        '<defs><clipPath id="planet"><circle cx="300" cy="250" r="118"/></clipPath></defs>' +
        '<path d="M74.9 306.1A232 58 -14 0 1 525.1 193.9" fill="none" stroke="' + AMB + '" stroke-width="3"/>' +
        '<circle cx="300" cy="250" r="118" fill="' + STK + '"/>' +
        '<g clip-path="url(#planet)"><path d="M180 220c50 22 170 26 222 2M176 268c60 26 176 26 230 0M190 312c50 20 150 22 200 0" fill="none" stroke="' + INK + '" stroke-width="2" opacity=".35"/>' +
        '<ellipse cx="222" cy="250" rx="132" ry="150" fill="' + INK + '"/>' +
        '<path d="M150 296c90 -16 210 -60 300 -112" fill="none" stroke="' + INK + '" stroke-width="10"/></g>' +
        '<path d="M525.1 193.9A232 58 -14 0 1 74.9 306.1" fill="none" stroke="' + AMB + '" stroke-width="3"/>' +
        '<g class="orbit-dot"><circle cx="528" cy="198" r="13" fill="' + AMB + '"/></g>' +
        helix + '<path d="' + path1 + '" fill="none" stroke="' + STK + '" stroke-width="4"/><path d="' + path2 + '" fill="none" stroke="' + STK + '" stroke-width="4"/>' +
        '<text x="40" y="470" ' + FONT + ' font-size="28" letter-spacing="5" fill="' + STK + '">608 PUBLICATIONS · NASA OSDR</text>' +
        '</svg>';
    },
    stadium: function () {
      var lines = function (c) {
        return '<g fill="none" stroke="' + c + '" stroke-width="3"><rect x="244" y="162" width="312" height="176"/><line x1="400" y1="162" x2="400" y2="338"/><circle cx="400" cy="250" r="30"/><rect x="244" y="208" width="44" height="84"/><rect x="512" y="208" width="44" height="84"/></g>';
      };
      return '<svg class="art-svg" viewBox="0 0 800 500" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">' +
        '<rect width="800" height="500" fill="' + AMB + '"/>' +
        '<g transform="translate(-92 34)"><rect x="110" y="56" width="580" height="388" rx="150" fill="' + INK + '"/></g>' +
        '<rect x="110" y="56" width="580" height="388" rx="150" fill="' + INK + '" stroke="' + STK + '" stroke-width="2"/>' +
        '<rect x="140" y="86" width="520" height="328" rx="124" fill="none" stroke="' + AMB + '" stroke-width="2" stroke-dasharray="6 9"/>' +
        '<rect x="232" y="150" width="336" height="200" fill="' + STK + '"/>' + lines(INK) +
        '<defs><clipPath id="stand-shadow"><polygon points="568,150 568,350 470,350 512,150"/></clipPath></defs>' +
        '<g clip-path="url(#stand-shadow)"><rect x="232" y="150" width="336" height="200" fill="' + INK + '"/>' + lines(AMB) + '</g>' +
        '<g ' + FONT + ' fill="' + INK + '"><text x="760" y="44" font-size="30" letter-spacing="5" text-anchor="end">AGADIR · 2030</text><text x="760" y="476" font-size="26" letter-spacing="4" text-anchor="end">' + (lang === 'en' ? 'DISCOVER · BOOK' : 'DÉCOUVRIR · RÉSERVER') + '</text></g>' +
        '</svg>';
    },
    infra: function () {
      var box = function (x, y, w, label) {
        return '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="46" fill="#F1E9D3" stroke="#0E0D0B" stroke-width="2.5"/>' +
          '<text x="' + (x + w / 2) + '" y="' + (y + 32) + '" text-anchor="middle" font-family="League Gothic, Oswald, sans-serif" font-size="25" letter-spacing="2" fill="#0E0D0B">' + label + '</text></g>';
      };
      var arrow = function (x1, y1, x2, y2) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#0E0D0B" stroke-width="2.5" marker-end="url(#ah)"/>'; };
      return '<svg viewBox="0 0 560 300" role="img" aria-label="AWS : WAF, ALB, ECS, RDS, ECR, CloudWatch">' +
        '<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 10 5 0 10z" fill="#0E0D0B"/></marker></defs>' +
        '<rect x="128" y="18" width="414" height="264" fill="none" stroke="#0E0D0B" stroke-width="2" stroke-dasharray="7 6"/>' +
        '<text x="140" y="44" font-family="League Gothic, Oswald, sans-serif" font-size="20" letter-spacing="3" fill="#0E0D0B">VPC · TERRAFORM</text>' +
        box(10, 126, 92, 'USERS') + arrow(102, 149, 150, 149) +
        box(152, 126, 70, 'WAF') + arrow(222, 149, 252, 149) +
        box(254, 126, 70, 'ALB') + arrow(324, 149, 354, 149) +
        box(356, 126, 96, 'ECS') + arrow(404, 172, 404, 210) +
        box(356, 212, 96, 'RDS') +
        box(356, 60, 96, 'ECR') + arrow(404, 106, 404, 124) +
        box(462, 212, 72, 'LOGS') +
        '<text x="470" y="80" font-family="League Gothic, Oswald, sans-serif" font-size="20" letter-spacing="2" fill="#0E0D0B">CLOUDWATCH</text>' +
        '</svg>';
    }
  };

  function screensArt(p) {
    var imgs = p.images.slice(0, 3);
    var wide = imgs.filter(function (m) { return m.wide; })[0];
    var tall = imgs.filter(function (m) { return !m.wide; });
    var html = '<div class="art-screens' + (wide ? ' art-screens--wide' : '') + '">';
    if (wide) html += '<div class="scr scr--wide"><img class="duo" src="' + wide.src + '" width="' + wide.w + '" height="' + wide.h + '" alt="" loading="lazy" decoding="async"></div>';
    tall.slice(0, wide ? 2 : 3).forEach(function (m) {
      html += '<div class="scr"><img class="duo" src="' + m.src + '" width="' + m.w + '" height="' + m.h + '" alt="" loading="lazy" decoding="async"></div>';
    });
    return html + '</div>';
  }

  /* ----------------------------------------------------- the bill (work) */
  var filter = 'all';
  function renderBills(animate) {
    var host = $('[data-bills]');
    host.innerHTML = P.PROJECTS.map(function (p, n) {
      var art = p.art === 'screens' ? screensArt(p) : ART[p.art]();
      return '<article class="bill" data-kind="' + p.kind + '" style="--n:' + n + '">' +
        '<a class="bill__link" href="#/dossier/' + p.id + '">' +
          '<div class="bill__art">' + art + '<span class="stamp bill__kind">' + esc(ui().kinds[p.kind]) + '</span></div>' +
          '<div class="bill__body">' +
            '<div class="bill__head"><h3 class="bill__title">' + esc(t(p.title)) + '</h3><span class="bill__year">' + esc(p.year) + '</span></div>' +
            '<p class="bill__sub">' + esc(t(p.sub)) + '</p>' +
            '<p class="bill__sum">' + esc(t(p.summary)) + '</p>' +
            '<div class="bill__foot"><p class="bill__tags">' + dots(p.tags) + '</p>' +
            '<span class="bill__open roll"><span class="roll__t">' + esc(ui().open) + '</span>' + icon('i-arrow-right') + '</span></div>' +
          '</div>' +
        '</a></article>';
    }).join('');
    $('[data-shorts]').innerHTML = P.SHORTS.map(function (s) {
      var y = s.href
        ? '<a class="short__y" href="' + s.href + '" target="_blank" rel="noopener">' + esc(s.year) + icon('i-arrow-ur') + '</a>'
        : '<span class="short__y">' + esc(s.year) + '</span>';
      return '<li class="short"><span class="short__t">' + esc(t(s.title)) + '</span><span class="short__w">' + esc(t(s.what)) + '</span>' + y + '</li>';
    }).join('');
    wrapRolls(host);
    applyFilter(animate);
  }

  function applyFilter(animate) {
    var shown = 0;
    $$('.bill').forEach(function (b, n) {
      var on = filter === 'all' || b.getAttribute('data-kind') === filter;
      b.hidden = !on;
      b.classList.remove('is-entering');
      if (on) {
        b.style.setProperty('--n', shown);
        shown++;
        if (animate && !reduceMQ.matches) { void b.offsetWidth; b.classList.add('is-entering'); }
      }
    });
    var sw = $('[data-shorts-wrap]');
    sw.hidden = !(filter === 'all' || filter === 'side');
    $$('[data-filter]').forEach(function (f) { f.setAttribute('aria-pressed', String(f.getAttribute('data-filter') === filter)); });
    return shown;
  }

  function counts() {
    var c = { all: P.PROJECTS.length, pro: 0, hack: 0, side: 0 };
    P.PROJECTS.forEach(function (p) { c[p.kind]++; });
    $$('[data-fcount]').forEach(function (s) { s.textContent = '[' + pad2(c[s.getAttribute('data-fcount')]) + ']'; });
    var nav = { work: P.PROJECTS.length, services: P.SERVICES.length, experience: P.REEL.length };
    $$('[data-count]').forEach(function (s) { s.textContent = '[' + pad2(nav[s.getAttribute('data-count')]) + ']'; });
  }

  $$('[data-filter]').forEach(function (b) {
    b.addEventListener('click', function () {
      filter = b.getAttribute('data-filter');
      var n = applyFilter(true);
      announce(ui().shown(n));
    });
  });

  /* --------------------------------------------------- services accordion */
  var openService = 'mobile';
  function serviceVisual(s) {
    if (s.visual === 'screens') {
      return '<div class="fan"><img src="assets/img/tandeem-event-detail.webp" alt="" loading="lazy"><img src="assets/img/tandeem-events-home.webp" alt="" loading="lazy"><img src="assets/img/tandeem-form-rating.webp" alt="" loading="lazy"></div>';
    }
    if (s.visual === 'board') return '<div class="board"><img src="assets/img/optifood-cds-tv.webp" width="1280" height="720" alt="" loading="lazy"></div>';
    if (s.visual === 'infra') return ART.infra();
    return '<div class="fan"><img src="assets/img/optifood-kiosk-order.webp" alt="" loading="lazy"><img src="assets/img/optifood-kiosk-menu.webp" alt="" loading="lazy"><img src="assets/img/educazen-home.webp" alt="" loading="lazy"></div>';
  }
  function renderServices() {
    $('[data-acc]').innerHTML = P.SERVICES.map(function (s) {
      var open = s.id === openService;
      return '<div class="acc__item' + (open ? ' is-open' : '') + '" data-svc="' + s.id + '">' +
        '<h3 class="acc__h"><button type="button" class="acc__b" id="acc-b-' + s.id + '" aria-expanded="' + open + '" aria-controls="acc-p-' + s.id + '">' +
          '<span class="acc__t">' + esc(t(s.title)) + '</span>' +
          '<svg class="ic acc__ic" aria-hidden="true"><use href="#i-plus"/></svg></button></h3>' +
        '<div class="acc__p" id="acc-p-' + s.id + '" role="region" aria-labelledby="acc-b-' + s.id + '"><div class="acc__pin"' + (open ? '' : ' inert') + '><div class="acc__grid">' +
          '<div class="acc__copy"><p class="acc__text">' + esc(t(s.text)) + '</p><p class="acc__stack">' + dots(s.stack) + '</p></div>' +
          '<div class="acc__vis" aria-hidden="true">' + serviceVisual(s) + '</div>' +
        '</div></div></div></div>';
    }).join('');
  }
  $('[data-acc]').addEventListener('click', function (e) {
    var b = e.target.closest('.acc__b');
    if (!b) return;
    var item = b.closest('.acc__item');
    var id = item.getAttribute('data-svc');
    openService = openService === id ? null : id;
    $$('.acc__item').forEach(function (it) {
      var on = it.getAttribute('data-svc') === openService;
      it.classList.toggle('is-open', on);
      $('.acc__b', it).setAttribute('aria-expanded', String(on));
      var pin = $('.acc__pin', it);
      if (on) pin.removeAttribute('inert'); else pin.setAttribute('inert', '');
    });
  });

  /* ------------------------------------------------------- the night reel */
  var openReel = null;
  function renderReel() {
    $('[data-reel]').innerHTML = P.REEL.map(function (r) {
      var open = r.id === openReel;
      return '<li class="reel__row' + (open ? ' is-open' : '') + '" data-reel-id="' + r.id + '">' +
        '<button type="button" class="reel__b" aria-expanded="' + open + '" aria-controls="reel-p-' + r.id + '">' +
          '<span class="reel__org">' + esc(r.org) + '<span class="reel__place">' + esc(t(r.place)) + '</span></span>' +
          '<span class="reel__role">' + esc(t(r.role)) + (r.now ? '<span class="stamp reel__now">' + esc(ui().now) + '</span>' : '') + '</span>' +
          '<span class="reel__dates">' + esc(t(r.dates)) + '</span>' +
          '<svg class="ic reel__ic" aria-hidden="true"><use href="#i-plus"/></svg>' +
        '</button>' +
        '<div class="reel__p" id="reel-p-' + r.id + '"><div class="reel__pin"' + (open ? '' : ' inert') + '><ul class="reel__points">' +
          t(r.points).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') +
        '</ul></div></div></li>';
    }).join('');
  }
  $('[data-reel]').addEventListener('click', function (e) {
    var b = e.target.closest('.reel__b');
    if (!b) return;
    var id = b.closest('.reel__row').getAttribute('data-reel-id');
    openReel = openReel === id ? null : id;
    $$('.reel__row').forEach(function (row) {
      var on = row.getAttribute('data-reel-id') === openReel;
      row.classList.toggle('is-open', on);
      $('.reel__b', row).setAttribute('aria-expanded', String(on));
      var pin = $('.reel__pin', row);
      if (on) pin.removeAttribute('inert'); else pin.setAttribute('inert', '');
    });
  });

  // a still from the film follows the cursor across the reel
  (function () {
    var still = $('[data-still]');
    var reel = $('[data-reel]');
    if (!still || !reel) return;
    var pos = { x: 0, y: 0 }, goal = { x: 0, y: 0 }, vx = 0, on = false, raf = 0, curId = null;
    function setStill(id) {
      if (id === curId) return;
      curId = id;
      var r = P.REEL.filter(function (x) { return x.id === id; })[0];
      if (!r) return;
      if (r.still === 'print') { still.innerHTML = ART.print(); return; }
      var isScreen = /\.webp$/.test(r.still);
      still.innerHTML = '<img alt="" src="' + r.still + '"' + (isScreen ? ' class="is-screen"' : '') + '>';
    }
    function tick() {
      var dx = goal.x - pos.x;
      pos.x += dx * 0.16; pos.y += (goal.y - pos.y) * 0.16;
      vx = vx * 0.8 + dx * 0.04;
      var rot = Math.max(-9, Math.min(9, vx));
      still.style.transform = 'translate(' + pos.x.toFixed(1) + 'px,' + pos.y.toFixed(1) + 'px) rotate(' + rot.toFixed(2) + 'deg)';
      if (on || Math.abs(dx) > 0.5) raf = requestAnimationFrame(tick); else raf = 0;
    }
    reel.addEventListener('pointermove', function (e) {
      if (!finePointer.matches || e.pointerType !== 'mouse') return;
      var row = e.target.closest('.reel__row');
      if (!row) { still.classList.remove('is-on'); on = false; return; }
      setStill(row.getAttribute('data-reel-id'));
      goal.x = e.clientX + 28; goal.y = e.clientY - 150;
      if (!on) { pos.x = goal.x; pos.y = goal.y; }
      on = true;
      still.classList.add('is-on');
      if (!raf) raf = requestAnimationFrame(tick);
    });
    reel.addEventListener('pointerleave', function () { on = false; still.classList.remove('is-on'); });
  })();

  /* ---------------------------------------------------------- dossiers */
  var current = null;
  var returnY = 0;
  var dossier = $('[data-dossier]');
  var main = $('#main');
  var wipe = $('[data-wipe]');

  function renderDossier(id) {
    var idx = -1;
    P.PROJECTS.forEach(function (p, i) { if (p.id === id) idx = i; });
    if (idx < 0) return false;
    var p = P.PROJECTS[idx];
    var next = P.PROJECTS[(idx + 1) % P.PROJECTS.length];
    var u = ui();
    var actions = p.links.map(function (l) {
      var label = l.kind === 'code' ? u.code : l.kind === 'site' ? u.site : u.challenge;
      return '<a class="btn btn--ink roll" href="' + l.href + '" target="_blank" rel="noopener"><span class="roll__t">' + esc(label) + '</span>' + icon('i-arrow-ur') + '</a>';
    }).join('') + '<a class="btn btn--line roll" href="mailto:hamza.aitmansour@edu.uiz.ac.ma"><span class="roll__t">' + esc(u.contact) + '</span>' + icon('i-mail') + '</a>';
    var facts = '<div><dt>' + esc(u.context) + '</dt><dd>' + esc(t(p.sub)) + '</dd></div>' +
      '<div><dt>' + esc(u.role) + '</dt><dd>' + esc(t(p.role)) + '</dd></div>' +
      '<div><dt>' + esc(u.period) + '</dt><dd>' + esc(t(p.period)) + '</dd></div>' +
      (p.stack.length ? '<div><dt>' + esc(u.stack) + '</dt><dd class="dos__stack">' + dots(p.stack) + '</dd></div>' : '');
    var media;
    if (p.images.length) {
      media = '<section class="dos__gallery" aria-label="' + esc(u.gallery) + '">' + p.images.map(function (m) {
        return '<figure' + (m.wide ? ' class="is-wide"' : '') + '><img src="' + m.src + '" width="' + m.w + '" height="' + m.h + '" alt="' + esc(t(m.alt)) + '" loading="lazy" decoding="async"><figcaption>' + esc(t(m.alt)) + '</figcaption></figure>';
      }).join('') + '</section>';
    } else {
      media = '<div class="dos__art">' + ART[p.art]() + '</div>';
    }
    dossier.innerHTML = '<div class="dos">' +
      '<div class="dos__bar"><a class="btn btn--line btn--sm roll" href="#projets" data-dos-back>' + icon('i-arrow-left') + '<span class="roll__t">' + esc(u.back) + '</span></a>' +
      '<span class="stamp">' + esc(u.kinds[p.kind]) + '</span></div>' +
      '<header class="dos__head"><div>' +
        '<h1 class="dos__title" id="dossier-title" tabindex="-1">' + esc(t(p.title)) + '</h1>' +
        '<p class="dos__sum">' + esc(t(p.summary)) + '</p>' +
        '<div class="dos__actions">' + actions + '</div>' +
      '</div><dl class="dos__facts">' + facts + '</dl></header>' +
      '<section class="dos__built"><h2 class="dos__h">' + esc(u.built) + '</h2><ol class="dos__list">' +
        t(p.built).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol></section>' +
      media +
      '<a class="dos__next" href="#/dossier/' + next.id + '"><span>' + esc(u.next) + '</span><strong>' + esc(t(next.title)) + icon('i-arrow-right') + '</strong></a>' +
      '</div>';
    wrapRolls(dossier);
    current = id;
    return true;
  }

  function withWipe(swap) {
    if (reduceMQ.matches) { swap(); return; }
    wipe.classList.remove('is-out');
    void wipe.offsetWidth;
    wipe.classList.add('is-in');
    setTimeout(function () {
      swap();
      wipe.classList.remove('is-in');
      wipe.classList.add('is-out');
      setTimeout(function () { wipe.classList.remove('is-out'); }, 520);
    }, 360);
  }

  function openDossier(id) {
    if (dossier.hidden) returnY = window.scrollY;
    withWipe(function () {
      if (!renderDossier(id)) { location.hash = '#projets'; return; }
      main.hidden = true;
      dossier.hidden = false;
      window.scrollTo(0, 0);
      setTitle();
      var h = $('#dossier-title');
      if (h) h.focus({ preventScroll: true });
      topbar.update();
    });
  }

  function closeDossier(targetId) {
    if (dossier.hidden) return false;
    var was = current;
    withWipe(function () {
      dossier.hidden = true;
      dossier.innerHTML = '';
      main.hidden = false;
      current = null;
      setTitle();
      var target = targetId && document.getElementById(targetId);
      if (target && targetId !== 'projets') {
        target.scrollIntoView();
      } else {
        window.scrollTo(0, returnY);
        var card = $('.bill__link[href="#/dossier/' + was + '"]');
        if (card) card.focus({ preventScroll: true });
      }
      hero.refit();
      topbar.update();
    });
    return true;
  }

  function route() {
    var m = location.hash.match(/^#\/dossier\/([\w-]+)/);
    if (m) { openDossier(m[1]); return; }
    var id = location.hash.slice(1);
    closeDossier(id);
  }
  window.addEventListener('hashchange', route);

  dossier.addEventListener('click', function (e) {
    var back = e.target.closest('[data-dos-back]');
    if (!back) return;
    e.preventDefault();
    location.hash = '#projets';
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !dossier.hidden) {
      var b = $('[data-dos-back]', dossier);
      if (b) b.click();
    }
  });

  function setTitle() {
    if (current) {
      var p = P.PROJECTS.filter(function (x) { return x.id === current; })[0];
      document.title = t(p.title) + ' · Hamza Ait Mansour';
    } else {
      document.title = ui().docTitle;
    }
  }

  /* ------------------------------------------------------------ top bar */
  var topbar = (function () {
    var bar = $('[data-topbar]');
    var night = $('#parcours');
    function update() {
      var y = window.scrollY;
      bar.classList.toggle('is-scrolled', y > 24 || !dossier.hidden);
      var onNight = false;
      if (night && !main.hidden) {
        var r = night.getBoundingClientRect();
        var mid = bar.getBoundingClientRect().bottom - 10;
        onNight = r.top <= mid && r.bottom >= mid;
      }
      bar.classList.toggle('on-night', onNight);
    }
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; update(); });
    }, { passive: true });
    update();
    return { update: update };
  })();

  /* --------------------------------------------------------------- menu */
  (function () {
    var menu = $('#menu');
    var openB = $('[data-menu-open]');
    function close(focus) {
      menu.hidden = true;
      openB.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (focus) openB.focus();
    }
    openB.addEventListener('click', function () {
      menu.hidden = false;
      openB.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      $('[data-menu-close]').focus();
    });
    $('[data-menu-close]').addEventListener('click', function () { close(true); });
    $$('[data-menu-link]').forEach(function (a) { a.addEventListener('click', function () { close(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) close(true); });
  })();

  /* ---------------------------------------------------------- language */
  $$('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-set-lang'), b); });
  });

  /* --------------------------------------------------------- copy e-mail */
  (function () {
    var b = $('[data-copy]');
    if (!b) return;
    var label = $('[data-copy-label]', b);
    var use = $('[data-copy-icon] use', b);
    var original = label.textContent;
    var timer;
    b.addEventListener('click', function () {
      var text = b.getAttribute('data-copy');
      var ok = function () {
        label.textContent = ui().copied;
        use.setAttribute('href', '#i-check');
        b.classList.add('is-done');
        announce(ui().copied);
        clearTimeout(timer);
        timer = setTimeout(function () { label.textContent = original; use.setAttribute('href', '#i-copy'); b.classList.remove('is-done'); }, 2200);
      };
      var fail = function () { announce(ui().copyFail); window.location.href = 'mailto:' + text; };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, fail);
      else fail();
    });
  })();

  (function () {
    var b = $('[data-colour]');
    if (!b) return;
    b.addEventListener('click', function () {
      b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
    });
  })();

  var announcer = $('[data-announce]');
  function announce(msg) { announcer.textContent = ''; setTimeout(function () { announcer.textContent = msg; }, 30); }

  /* ------------------------------------------------- section entrances */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -12% 0px' });
    $$('.sect__head, .sect--contact').forEach(function (el) { io.observe(el); });
  } else {
    $$('.sect__head, .sect--contact').forEach(function (el) { el.classList.add('is-in'); });
  }

  /* -------------------------------------------------------------- boot */
  function renderAll() { renderBills(false); renderServices(); renderReel(); counts(); }

  applyStrings();
  renderAll();
  wrapRolls(document);
  setTitle();

  runLeader(function () {
    requestAnimationFrame(function () {
      doc.classList.remove('is-intro');
      hero.intro();
    });
  });

  if (/^#\/dossier\//.test(location.hash)) route();
})();
