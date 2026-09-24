(function () {
  "use strict";

  var canvas = document.getElementById("network-background");
  if (!canvas) return;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var ctx = canvas.getContext("2d");
  var width, height, dpr;
  var nodes = [];
  var pointer = { x: null, y: null, active: false };

  var ACCENT_A = [37, 99, 235];
  var ACCENT_B = [6, 182, 212];

  function lerpColor(a, b, t) {
    return [
      Math.round(a[0] + (b[0] - a[0]) * t),
      Math.round(a[1] + (b[1] - a[1]) * t),
      Math.round(a[2] + (b[2] - a[2]) * t)
    ];
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildNodes();
  }

  function buildNodes() {
    var area = width * height;
    var count = Math.max(28, Math.min(90, Math.round(area / 22000)));
    nodes = [];
    for (var i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 1.2 + Math.random() * 1.4,
        t: Math.random() * Math.PI * 2
      });
    }
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    var linkDist = Math.min(150, Math.max(90, width / 9));

    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      n.t += 0.012;

      if (n.x < -20) n.x = width + 20;
      if (n.x > width + 20) n.x = -20;
      if (n.y < -20) n.y = height + 20;
      if (n.y > height + 20) n.y = -20;

      if (pointer.active) {
        var dxp = n.x - pointer.x;
        var dyp = n.y - pointer.y;
        var dp = Math.sqrt(dxp * dxp + dyp * dyp);
        if (dp < 130) {
          var force = (130 - dp) / 130 * 0.6;
          n.x += (dxp / (dp || 1)) * force;
          n.y += (dyp / (dp || 1)) * force;
        }
      }
    }

    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var a = nodes[i], b = nodes[j];
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < linkDist) {
          var alpha = (1 - dist / linkDist) * 0.18;
          var c = lerpColor(ACCENT_A, ACCENT_B, (a.x / width + b.x / width) / 2);
          ctx.strokeStyle = "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + alpha + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var pulse = 0.55 + Math.sin(n.t) * 0.35;
      var c = lerpColor(ACCENT_A, ACCENT_B, n.x / width);
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r + pulse * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + (0.35 + pulse * 0.25) + ")";
      ctx.fill();
    }

    if (!reduceMotion) {
      requestAnimationFrame(step);
    }
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", function (e) {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.active = true;
  });
  window.addEventListener("mouseleave", function () {
    pointer.active = false;
  });

  resize();
  if (!reduceMotion) {
    requestAnimationFrame(step);
  } else {
    step();
  }

  var content = document.querySelector(".main-content");
  if (content) {
    var targets = content.querySelectorAll("h1, h2, h3, p, ul, .project-box, .callout, img, hr");

    if (!("IntersectionObserver" in window) || reduceMotion) {
      for (var k = 0; k < targets.length; k++) {
        targets[k].classList.add("is-visible");
      }
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      for (var m = 0; m < targets.length; m++) {
        var el = targets[m];
        el.classList.add("reveal");
        el.style.transitionDelay = Math.min(m * 25, 200) + "ms";
        io.observe(el);
      }
    }
  }
})();
