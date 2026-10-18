---
layout: page
title: Urban Street Network Configuration & Property Crime
permalink: /projects/urban-network-analysis/
---

<div class="book-wrap">

<div class="book" id="book">

<div class="book-page" data-i="0">
<div class="book-kicker">Page 1</div>
<h2>Urban Street Network Configuration &amp; Property Crime</h2>
<p>Does the way a neighborhood's streets are laid out relate to how much property crime it sees? This project builds the full data pipeline behind that question &mdash; and packages it so anyone can run it themselves, on Charlotte's data or their own city's.</p>
<div class="book-note">Placeholder &mdash; pipeline diagram: streets + neighborhoods &rarr; network measures at multiple buffer scales &rarr; component analysis &rarr; modeling dataset. (Add image: assets/img/pipeline-diagram.png)</div>
</div>

<div class="book-page" data-i="1">
<div class="book-kicker">Page 2</div>
<h3>The Paper</h3>
<p><strong>Kefayat, E., &amp; Thill, J.-C. (2025).</strong> Urban Street Network Configuration and Property Crime: An Empirical Multivariate Case Study. <em>ISPRS International Journal of Geo-Information</em>, 14(5), 200. <a href="https://doi.org/10.3390/ijgi14050200" target="_blank" rel="noopener">doi.org/10.3390/ijgi14050200</a></p>
<p class="book-label">Three takeaways</p>
<p class="book-placeholder">Placeholder &mdash; takeaway 1 from the paper's findings.</p>
<p class="book-placeholder">Placeholder &mdash; takeaway 2 from the paper's findings.</p>
<p class="book-placeholder">Placeholder &mdash; takeaway 3 from the paper's findings.</p>
</div>

<div class="book-page" data-i="2">
<div class="book-kicker">Page 3</div>
<h3>Try It Yourself</h3>
<p>The repository isn't just the paper's code &mdash; it's a point-and-click web app. Download it, double-click a launcher, and step through the same pipeline in your browser: no command line required.</p>
<div class="book-note">Placeholder &mdash; 30&ndash;60 second GIF or video of the app walking through the pipeline stages. (Add media: assets/img/app-demo.gif)</div>
<p><a class="book-btn" href="https://github.com/Erfankt/urban-network-analysis" target="_blank" rel="noopener">View the repository on GitHub &rarr;</a></p>
<p><a class="book-btn book-btn-ghost" href="https://github.com/Erfankt/urban-network-analysis/releases/latest" target="_blank" rel="noopener">Latest release (v2.0.1) &rarr;</a></p>
</div>

<div class="book-page" data-i="3">
<div class="book-kicker">Page 4</div>
<h3>Under the Hood</h3>
<p><strong>Language &amp; libraries:</strong> Python, GeoPandas, NetworkX, OSMnx</p>
<p><strong>Methods:</strong> spatial statistics, principal component analysis, large-scale checkpointed computation</p>
<p><strong>Interface:</strong> a Streamlit web app with an optional AI assistant for exploring run results</p>
<p><strong>License:</strong> MIT &mdash; free to reuse, extend, or adapt to another city's data</p>
</div>

<div class="book-page" data-i="4">
<div class="book-kicker">Page 5</div>
<h3>Cite This Work</h3>
<p>Citation details (paper and software) are maintained in the repository's <a href="https://github.com/Erfankt/urban-network-analysis/blob/master/CITATION.cff" target="_blank" rel="noopener">CITATION.cff</a>.</p>
<p><a class="book-btn book-btn-ghost" href="/projects/">&larr; Back to Projects</a></p>
</div>

</div>

<div class="book-controls">
<button type="button" class="book-nav" id="bookPrev">&#8249; Prev</button>
<div class="book-counter" id="bookCounter">1 / 5</div>
<button type="button" class="book-nav" id="bookNext">Next &#8250;</button>
</div>

</div>

<style>
.book-wrap {
  max-width: 780px;
  margin: 2.5em auto;
}
.book {
  position: relative;
  min-height: 460px;
  padding: 30px;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  perspective: 2400px;
}
.book-page {
  position: absolute;
  top: 30px;
  left: 30px;
  right: 30px;
  bottom: 30px;
  background: var(--color-surface);
  border-radius: 4px var(--radius-lg) var(--radius-lg) 4px;
  padding: 2.4em 2.6em;
  overflow: auto;
  box-shadow: 3px 0 16px rgba(0, 0, 0, 0.25), inset -1px 0 0 rgba(0, 0, 0, 0.06);
  transform-origin: left center;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1), box-shadow 0.9s ease;
}
.book-page::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 16px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.16), transparent);
  pointer-events: none;
}
.book-page.is-flipped {
  transform: rotateY(-178deg);
  box-shadow: -6px 0 18px rgba(0, 0, 0, 0.3);
}
.book-page.is-flipping::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, transparent 38%, rgba(0, 0, 0, 0.22) 50%, transparent 62%);
  animation: bookFold 0.9s ease;
  pointer-events: none;
}
@keyframes bookFold {
  0%   { opacity: 0; }
  40%  { opacity: 1; }
  100% { opacity: 0; }
}
.book-kicker {
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  color: var(--color-accent);
  font-weight: 700;
  margin-bottom: 0.6em;
}
.book-page h2, .book-page h3 {
  margin-top: 0;
}
.book-label {
  font-weight: 700;
  margin-bottom: 0.3em;
}
.book-placeholder {
  font-style: italic;
  color: var(--color-text-muted);
}
.book-note {
  background: var(--color-accent-soft);
  border-left: 4px solid var(--color-accent-2);
  border-radius: var(--radius-sm);
  padding: 1em 1.2em;
  font-style: italic;
  color: var(--color-text-muted);
  margin: 1em 0;
}
.book-btn {
  display: inline-block;
  background: var(--color-accent);
  color: #fff !important;
  padding: 0.6em 1.2em;
  border-radius: var(--radius-sm);
  text-decoration: none !important;
  font-weight: 600;
  margin: 0.3em 0.4em 0.3em 0;
}
.book-btn-ghost {
  background: transparent;
  color: var(--color-accent) !important;
  border: 1px solid var(--color-border);
}
.book-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4em;
  margin-top: 1.4em;
}
.book-nav {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.55em 1.4em;
  font-weight: 600;
  font-family: var(--font-heading);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  color: var(--color-text);
}
.book-nav:hover:not(:disabled) {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
.book-nav:disabled {
  opacity: 0.35;
  cursor: default;
}
.book-counter {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
  min-width: 56px;
  text-align: center;
}
@media (max-width: 600px) {
  .book { min-height: 560px; padding: 16px; }
  .book-page { top: 16px; left: 16px; right: 16px; bottom: 16px; padding: 1.6em 1.5em; }
}
</style>

<script>
(function() {
  var pages = Array.prototype.slice.call(document.querySelectorAll('#book .book-page'));
  var total = pages.length;
  var flipped = 0;
  var prevBtn = document.getElementById('bookPrev');
  var nextBtn = document.getElementById('bookNext');
  var counter = document.getElementById('bookCounter');

  pages.forEach(function(p, i) {
    p.style.zIndex = total - i;
  });

  function update() {
    counter.textContent = (flipped + 1) + ' / ' + total;
    prevBtn.disabled = flipped === 0;
    nextBtn.disabled = flipped === total - 1;
  }

  function settle(p) {
    setTimeout(function() { p.classList.remove('is-flipping'); }, 900);
  }

  function next() {
    if (flipped >= total - 1) { return; }
    var p = pages[flipped];
    p.classList.add('is-flipping');
    p.classList.add('is-flipped');
    flipped++;
    update();
    settle(p);
  }

  function prev() {
    if (flipped <= 0) { return; }
    flipped--;
    var p = pages[flipped];
    p.classList.add('is-flipping');
    p.classList.remove('is-flipped');
    update();
    settle(p);
  }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') { next(); }
    if (e.key === 'ArrowLeft') { prev(); }
  });

  update();
})();
</script>
