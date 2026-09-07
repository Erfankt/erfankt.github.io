(function () {
  const canvas = document.getElementById("network-background");

  if (!canvas) {
    console.log("Network background: canvas not found.");
    return;
  }

  const ctx = canvas.getContext("2d");

  let width;
  let height;
  let nodes = [];

  const mouse = {
    x: null,
    y: null,
    radius: 220
  };

  const NODE_COUNT = 110;
  const MAX_DISTANCE = 170;
  const NODE_SPEED = 0.28;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

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
        radius: Math.random() * 1.5 + 1
      });
    }
  }

  function update() {
    for (const node of nodes) {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) {
        node.vx *= -1;
      }

      if (node.y < 0 || node.y > height) {
        node.vy *= -1;
      }

      if (mouse.x !== null) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius && distance > 0) {
          const force =
            (mouse.radius - distance) / mouse.radius;

          node.x -= (dx / distance) * force * 0.7;
          node.y -= (dy / distance) * force * 0.7;
        }
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    /*
     * Network connections
     */
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {

        const a = nodes[i];
        const b = nodes[j];

        const dx = a.x - b.x;
        const dy = a.y - b.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAX_DISTANCE) {

          const opacity =
            0.28 * (1 - distance / MAX_DISTANCE);

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);

          ctx.strokeStyle =
            `rgba(37, 99, 235, ${opacity})`;

          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    /*
     * Nodes
     */
    for (const node of nodes) {

      ctx.beginPath();

      ctx.arc(
        node.x,
        node.y,
        node.radius,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        "rgba(37, 99, 235, 0.65)";

      ctx.fill();
    }

    /*
     * Mouse connections
     */
    if (mouse.x !== null) {

      for (const node of nodes) {

        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;

        const distance =
          Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {

          const opacity =
            0.45 * (1 - distance / mouse.radius);

          ctx.beginPath();

          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(node.x, node.y);

          ctx.strokeStyle =
            `rgba(37, 99, 235, ${opacity})`;

          ctx.lineWidth = 1;

          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    update();
    draw();
    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", () => {
    resize();
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

  resize();
  createNodes();
  animate();

  console.log("Network background loaded.");
})();
