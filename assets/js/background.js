(function () {
  const canvas = document.getElementById("network-background");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width;
  let height;
  let nodes = [];
  let animationFrame;

  const mouse = {
    x: null,
    y: null,
    radius: 180
  };

  const NODE_COUNT = 75;
  const MAX_DISTANCE = 150;
  const NODE_SPEED = 0.22;

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createNodes() {
    nodes = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * NODE_SPEED,
        vy: (Math.random() - 0.5) * NODE_SPEED,
        radius: Math.random() * 1.8 + 1
      });
    }
  }

  function updateNodes() {
    nodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) {
        node.vx *= -1;
      }

      if (node.y < 0 || node.y > height) {
        node.vy *= -1;
      }

      // Subtle mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius && distance > 0) {
          const force = (mouse.radius - distance) / mouse.radius;

          node.x -= (dx / distance) * force * 0.35;
          node.y -= (dy / distance) * force * 0.35;
        }
      }
    });
  }

  function drawNetwork() {
    ctx.clearRect(0, 0, width, height);

    // Connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];

        const dx = a.x - b.x;
        const dy = a.y - b.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAX_DISTANCE) {
          const opacity = 0.12 * (1 - distance / MAX_DISTANCE);

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);

          ctx.strokeStyle = `rgba(120, 140, 170, ${opacity})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    // Nodes
    nodes.forEach((node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

      ctx.fillStyle = "rgba(150, 170, 200, 0.45)";
      ctx.fill();
    });

    // Mouse interaction
    if (mouse.x !== null && mouse.y !== null) {
      nodes.forEach((node) => {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const opacity = 0.18 * (1 - distance / mouse.radius);

          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(node.x, node.y);

          ctx.strokeStyle = `rgba(100, 130, 170, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });
    }
  }

  function animate() {
    updateNodes();
    drawNetwork();

    animationFrame = requestAnimationFrame(animate);
  }

  window.addEventListener("resize", () => {
    resizeCanvas();
    createNodes();
  });

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  resizeCanvas();
  createNodes();
  animate();
})();
