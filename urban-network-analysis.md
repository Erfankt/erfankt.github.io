---
layout: page
title: Urban Street Network Configuration & Property Crime
permalink: /projects/urban-network-analysis/
---

<div class="fb-wrap" id="fbWrap">

<div class="fb-stage" id="fbStage">

<div class="fb-page" data-page="0">
<div class="fb-kicker">Project 01</div>
<h2>Urban Street Network Configuration &amp; Property Crime</h2>
<p>Does the way a neighborhood's streets are laid out relate to how much property crime it sees? This project builds the full data pipeline behind that question &mdash; and packages it so anyone can run it themselves, on Charlotte's data or their own city's.</p>
<div class="fb-note">Placeholder &mdash; pipeline diagram: streets + neighborhoods &rarr; network measures at multiple buffer scales &rarr; component analysis &rarr; modeling dataset. (Add image: assets/img/pipeline-diagram.png)</div>
</div>

<div class="fb-page" data-page="1">
<div class="fb-kicker">The Paper</div>
<p><strong>Kefayat, E., &amp; Thill, J.-C. (2025).</strong> Urban Street Network Configuration and Property Crime: An Empirical Multivariate Case Study. <em>ISPRS International Journal of Geo-Information</em>, 14(5), 200. <a href="https://doi.org/10.3390/ijgi14050200" target="_blank" rel="noopener">doi.org/10.3390/ijgi14050200</a></p>
<p class="fb-label">Three takeaways</p>
<p class="fb-placeholder">Placeholder &mdash; takeaway 1 from the paper's findings.</p>
<p class="fb-placeholder">Placeholder &mdash; takeaway 2 from the paper's findings.</p>
<p class="fb-placeholder">Placeholder &mdash; takeaway 3 from the paper's findings.</p>
</div>

<div class="fb-page" data-page="2">
<div class="fb-kicker">Try It Yourself</div>
<p>The repository isn't just the paper's code &mdash; it's a point-and-click web app. Download it, double-click a launcher, and step through the same pipeline in your browser: no command line required.</p>
<div class="fb-note">Placeholder &mdash; 30&ndash;60 second GIF or video of the app walking through the pipeline stages. (Add media: assets/img/app-demo.gif)</div>
<p><a class="fb-btn" href="https://github.com/Erfankt/urban-network-analysis" target="_blank" rel="noopener">View the repository on GitHub &rarr;</a></p>
<p><a class="fb-btn fb-btn-ghost" href="https://github.com/Erfankt/urban-network-analysis/releases/latest" target="_blank" rel="noopener">Latest release (v2.0.1) &rarr;</a></p>
</div>

<div class="fb-page" data-page="3">
<div class="fb-kicker">Under the Hood</div>
<p><strong>Language &amp; libraries:</strong> Python, GeoPandas, NetworkX, OSMnx</p>
<p><strong>Methods:</strong> spatial statistics, principal component analysis, large-scale checkpointed computation</p>
<p><strong>Interface:</strong> a Streamlit web app with an optional AI assistant for exploring run results</p>
<p><strong>License:</strong> MIT &mdash; free to reuse, extend, or adapt to another city's data</p>
</div>

<div class="fb-page" data-page="4">
<div class="fb-kicker">Cite This Work</div>
<p>Citation details (paper and software) are maintained in the repository's <a href="https://github.com/Erfankt/urban-network-analysis/blob/master/CITATION.cff" target="_blank" rel="noopener">CITATION.cff</a>.</p>
<p><a class="fb-btn fb-btn-ghost" href="/projects/">&larr; Back to Projects</a></p>
</div>

</div>

<div class="fb-controls">
<button type="button" class="fb-arrow" id="fbPrev" aria-label="Previous page">&#8592;</button>
<div class="fb-dots" id="fbDots"></div>
<button type="button" class="fb-arrow" id="fbNext" aria-label="Next page">&#8594;</button>
</div>

</div>

<style>
.fb-wrap {
  max-width: 720px;
  margin: 2em auto;
}
.fb-stage {
  position: relative;
  min-height: 420px;
  perspective: 1800px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-accent);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}
.fb-page {
  display: none;
  padding: 2.2em 2.4em;
  transform-origin: center;
  backface-visibility: hidden;
}
.fb-page.fb-active {
  display: block;
}
.fb-stage.fb-flip .fb-page.fb-active {
  animation: fbTurn 0.5s ease;
}
@keyframes fbTurn {
  0%   { transform: rotateY(0deg);   opacity: 1; }
  45%  { transform: rotateY(-85deg); opacity: 0.15; }
  55%  { transform: rotateY(85deg);  opacity: 0.15; }
  100% { transform: rotateY(0deg);   opacity: 1; }
}
.fb-kicker {
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.8rem;
  color: var(--color-accent);
  font-weight: 700;
  margin-bottom: 0.6em;
}
.fb-page h2 {
  margin-top: 0;
}
.fb-label {
  font-weight: 700;
  margin-bottom: 0.3em;
}
.fb-placeholder {
  font-style: italic;
  color: var(--color-text-muted);
}
.fb-note {
  background: var(--color-accent-soft);
  border-left: 4px solid var(--color-accent-2);
  border-radius: var(--radius-sm);
  padding: 1em 1.2em;
  font-style: italic;
  color: var(--color-text-muted);
  margin: 1em 0;
}
.fb-btn {
  display: inline-block;
  background: var(--color-accent);
  color: #fff !important;
  padding: 0.6em 1.2em;
  border-radius: var(--radius-sm);
  text-decoration: none !important;
  font-weight: 600;
  margin: 0.3em 0.4em 0.3em 0;
}
.fb-btn-ghost {
  background: transparent;
  color: var(--color-accent) !important;
  border: 1px solid var(--color-border);
}
.fb-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2em;
  margin-top: 1.2em;
}
.fb-arrow {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  width: 42px;
  height: 42px;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  color: var(--color-text);
}
.fb-arrow:disabled {
  opacity: 0.35;
  cursor: default;
}
.fb-dots {
  display: flex;
  gap: 0.5em;
}
.fb-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--color-border);
  border: none;
  cursor: pointer;
  padding: 0;
}
.fb-dot.fb-dot-active {
  background: var(--color-accent);
}
@media (max-width: 600px) {
  .fb-page { padding: 1.6em 1.4em; }
}
</style>

<script>
(function() {
  var pages = Array.prototype.slice.call(document.querySelectorAll('#fbStage .fb-page'));
  var stage = document.getElementById('fbStage');
  var dotsWrap = document.getElementById('fbDots');
  var prevBtn = document.getElementById('fbPrev');
  var nextBtn = document.getElementById('fbNext');
  var current = 0;

  pages.forEach(function(p, i) {
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'fb-dot';
    dot.setAttribute('aria-label', 'Go to page ' + (i + 1));
    dot.addEventListener('click', function() { goTo(i); });
    dotsWrap.appendChild(dot);
  });

  function render() {
    pages.forEach(function(p, i) {
      p.classList.toggle('fb-active', i === current);
    });
    var dots = dotsWrap.querySelectorAll('.fb-dot');
    dots.forEach(function(d, i) {
      d.classList.toggle('fb-dot-active', i === current);
    });
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === pages.length - 1;
  }

  function goTo(index) {
    if (index === current || index < 0 || index >= pages.length) { return; }
    current = index;
    stage.classList.add('fb-flip');
    render();
    setTimeout(function() { stage.classList.remove('fb-flip'); }, 500);
  }

  prevBtn.addEventListener('click', function() { goTo(current - 1); });
  nextBtn.addEventListener('click', function() { goTo(current + 1); });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') { goTo(current + 1); }
    if (e.key === 'ArrowLeft') { goTo(current - 1); }
  });

  render();
})();
</script>
