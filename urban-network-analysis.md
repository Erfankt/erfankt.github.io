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
<p class="book-cite">Kefayat, E., &amp; Thill, J.-C. (2025). Urban Street Network Configuration and Property Crime: An Empirical Multivariate Case Study. <em>ISPRS International Journal of Geo-Information</em>, 14(5), 200. <a href="https://doi.org/10.3390/ijgi14050200" target="_blank" rel="noopener">doi.org/10.3390/ijgi14050200</a></p>
<figure class="pipeline-figure">
<svg id="pfSvg" viewBox="0 0 1620 260" role="img" aria-label="Animated pipeline: the county street centerline dataset is cleaned, simplified, and built into a network graph; each of 371 Neighborhood Profile Areas is buffered at five distances from 0.1 to 1 mile to compute 40 network measures; principal component analysis reduces these to the final modeling dataset.">
<defs>
<marker id="pfArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
<polygon points="0 0, 8 4, 0 8" fill="currentColor"></polygon>
</marker>
</defs>
<g class="pf-node" data-step="1">
<rect x="20" y="20" width="190" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>
<text x="115" y="45" text-anchor="middle" font-size="12">Street centerline</text>
<text x="115" y="62" text-anchor="middle" font-size="12">dataset (county)</text>
</g>
<g class="pf-arrow pf-arrow-h" data-step="2" style="transform-origin:210px 50px">
<line x1="210" y1="50" x2="250" y2="50" stroke="currentColor" stroke-width="1.5" marker-end="url(#pfArrow)"></line>
</g>
<g class="pf-node" data-step="3">
<rect x="250" y="20" width="160" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>
<text x="330" y="45" text-anchor="middle" font-size="12">Clean &amp; simplify</text>
<text x="330" y="62" text-anchor="middle" font-size="12">the network</text>
</g>
<g class="pf-arrow pf-arrow-h" data-step="4" style="transform-origin:410px 50px">
<line x1="410" y1="50" x2="450" y2="50" stroke="currentColor" stroke-width="1.5" marker-end="url(#pfArrow)"></line>
</g>
<g class="pf-node" data-step="5">
<rect x="450" y="20" width="220" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>
<text x="560" y="45" text-anchor="middle" font-size="12">Build network graph</text>
<text x="560" y="62" text-anchor="middle" font-size="12">(NetworkX)</text>
</g>
<g class="pf-node" data-step="6">
<rect x="20" y="170" width="220" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>
<text x="130" y="195" text-anchor="middle" font-size="12">Neighborhood Profile</text>
<text x="130" y="212" text-anchor="middle" font-size="12">Areas (371 NPAs)</text>
</g>
<g class="pf-arrow pf-arrow-v" data-step="7" style="transform-origin:130px 170px">
<line x1="130" y1="80" x2="130" y2="170" stroke="currentColor" stroke-width="1.5" marker-end="url(#pfArrow)"></line>
</g>
<g class="pf-node" data-step="8">
<rect x="260" y="170" width="200" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>
<text x="360" y="195" text-anchor="middle" font-size="12">Buffer at 5 scales</text>
<text x="360" y="212" text-anchor="middle" font-size="12">(0.1â1 mile)</text>
</g>
<g class="pf-arrow pf-arrow-h" data-step="9" style="transform-origin:240px 200px">
<line x1="240" y1="200" x2="260" y2="200" stroke="currentColor" stroke-width="1.5" marker-end="url(#pfArrow)"></line>
</g>
<g class="pf-arrow pf-arrow-h" data-step="10" style="transform-origin:460px 200px">
<line x1="460" y1="200" x2="490" y2="200" stroke="currentColor" stroke-width="1.5" marker-end="url(#pfArrow)"></line>
</g>
<g class="pf-node" data-step="11">
<rect x="490" y="170" width="230" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>
<text x="605" y="195" text-anchor="middle" font-size="12">Compute 40 network</text>
<text x="605" y="212" text-anchor="middle" font-size="12">measures (8 per scale)</text>
</g>
<g class="pf-arrow pf-arrow-h" data-step="12" style="transform-origin:720px 200px">
<line x1="720" y1="200" x2="750" y2="200" stroke="currentColor" stroke-width="1.5" marker-end="url(#pfArrow)"></line>
</g>
<g class="pf-node" data-step="13">
<rect x="750" y="170" width="230" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>
<text x="865" y="195" text-anchor="middle" font-size="12">PCA: 40 measures â</text>
<text x="865" y="212" text-anchor="middle" font-size="12">4 components</text>
</g>
<g class="pf-arrow pf-arrow-h" data-step="14" style="transform-origin:980px 200px">
<line x1="980" y1="200" x2="1010" y2="200" stroke="currentColor" stroke-width="1.5" marker-end="url(#pfArrow)"></line>
</g>
<g class="pf-node" data-step="15">
<rect x="1010" y="170" width="250" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>
<text x="1135" y="195" text-anchor="middle" font-size="12">Model dataset: 4 vars</text>
<text x="1135" y="212" text-anchor="middle" font-size="12">+ controls, N=371 NPAs</text>
</g>
<g class="pf-node" data-step="16">
<rect x="1290" y="170" width="330" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>
<text x="1455" y="195" text-anchor="middle" font-size="12">Spatial models</text>
<text x="1455" y="212" text-anchor="middle" font-size="12">(OLS Â· SAR Â· CAR Â· GWR)</text>
</g>
<g class="pf-arrow pf-arrow-h" data-step="17" style="transform-origin:1260px 200px">
<line x1="1260" y1="200" x2="1290" y2="200" stroke="currentColor" stroke-width="1.5" marker-end="url(#pfArrow)"></line>
</g>
</svg>
<figcaption>Data pipeline: the county, simplified, and built into a network graph. Each of the city's 371 Neighborhood Profile Areas is surrounded by five buffer distances (0.1&ndash;1 mile), yielding 40 network measures (8 per buffer scale). Principal component analysis reduces these to four components, one representative variable each, forming the final modeling dataset.</figcaption>
</figure>
</div>

<div class="book-page" data-i="1">
<div class="book-kicker">Page 2</div>
<h3>Study Area &amp; Street Network Diversity</h3>
<div class="p2-grid">
  <figure class="p2-map">
    <div class="p2-map-wrap" id="fig2Wrap" title="Click to enlarge">
      <img src="https://www.mdpi.com/ijgi/ijgi-14-00200/article_deploy/html/images/ijgi-14-00200-g002.png"
           alt="Figure 2: Diversity of street networks in the study area (Kefayat &amp; Thill 2025)"
           class="p2-map-img" id="fig2Img">
      <button class="fig2-expand-btn" id="fig2Btn" aria-label="View full size">
        <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <polyline points="3,8 3,3 8,3"/><line x1="3" y1="3" x2="9" y2="9"/>
          <polyline points="12,3 17,3 17,8"/><line x1="17" y1="3" x2="11" y2="9"/>
          <polyline points="3,12 3,17 8,17"/><line x1="3" y1="17" x2="9" y2="11"/>
          <polyline points="17,12 17,17 12,17"/><line x1="17" y1="17" x2="11" y2="11"/>
        </svg>
      </button>
    </div>
    <figcaption>Street network diversity across Charlotte.</figcaption>
  </figure>

  <!-- Lightbox -->
  <div class="fig2-lb" id="fig2Lb" role="dialog" aria-modal="true" aria-label="Figure 2 full size" hidden>
    <div class="fig2-lb-backdrop" id="fig2Backdrop"></div>
    <div class="fig2-lb-box">
      <button class="fig2-lb-close" id="fig2Close" aria-label="Close">&#215;</button>
      <img src="https://www.mdpi.com/ijgi/ijgi-14-00200/article_deploy/html/images/ijgi-14-00200-g002.png"
           alt="Figure 2 full size: Diversity of street networks in the study area"
           class="fig2-lb-img">
      <p class="fig2-lb-cap">Diversity of street networks in the study area</p>
    </div>
  </div>
  <div class="p2-concepts">
    <p class="p2-intro">The City of Charlotte is divided into 371 NPAs. Street networks range from dense Uptown grids to suburban cul-de-sac loops &mdash; an ideal natural experiment. Property crime in 2022 clusters spatially, demanding spatial models.</p>
    <div class="nc-pair">
      <div class="nc-box">
        <svg viewBox="0 0 100 100" class="nc-svg" aria-label="Dense grid street pattern">
          <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" stroke-width="2.2"/><line x1="0" y1="40" x2="100" y2="40" stroke="currentColor" stroke-width="2.2"/><line x1="0" y1="60" x2="100" y2="60" stroke="currentColor" stroke-width="2.2"/><line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" stroke-width="2.2"/>
          <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" stroke-width="2.2"/><line x1="40" y1="0" x2="40" y2="100" stroke="currentColor" stroke-width="2.2"/><line x1="60" y1="0" x2="60" y2="100" stroke="currentColor" stroke-width="2.2"/><line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" stroke-width="2.2"/>
          <circle cx="20" cy="20" r="3.5" fill="var(--color-accent)"/><circle cx="40" cy="20" r="3.5" fill="var(--color-accent)"/><circle cx="60" cy="20" r="3.5" fill="var(--color-accent)"/><circle cx="80" cy="20" r="3.5" fill="var(--color-accent)"/>
          <circle cx="20" cy="40" r="3.5" fill="var(--color-accent)"/><circle cx="40" cy="40" r="3.5" fill="var(--color-accent)"/><circle cx="60" cy="40" r="3.5" fill="var(--color-accent)"/><circle cx="80" cy="40" r="3.5" fill="var(--color-accent)"/>
          <circle cx="20" cy="60" r="3.5" fill="var(--color-accent)"/><circle cx="40" cy="60" r="3.5" fill="var(--color-accent)"/><circle cx="60" cy="60" r="3.5" fill="var(--color-accent)"/><circle cx="80" cy="60" r="3.5" fill="var(--color-accent)"/>
          <circle cx="20" cy="80" r="3.5" fill="var(--color-accent)"/><circle cx="40" cy="80" r="3.5" fill="var(--color-accent)"/><circle cx="60" cy="80" r="3.5" fill="var(--color-accent)"/><circle cx="80" cy="80" r="3.5" fill="var(--color-accent)"/>
        </svg>
        <p class="nc-lbl">Grid<br>Uptown &middot; high connectivity</p>
      </div>
      <div class="nc-box">
        <svg viewBox="0 0 100 100" class="nc-svg" accent)"/><circle cx="80" cy="40" r="3.5" fill="var(--color-accent)"/>
          <circle cx="20" cy="60" r="3.5" fill="var(--color-accent)"/><circle cx="40" cy="60" r="3.5" fill="var(--color-accent)"/><circle cx="60" cy="60" r="3.5" fill="var(--color-accent)"/><circle cx="80" cy="60" r="3.5" fill="var(--color-accent)"/>
          <circle cx="20" cy="80" r="3.5" fill="var(--color-accent)"/><circle cx="40" cy="80" r="3.5" fill="var(--color-accent)"/><circle cx="60" cy="80" r="3.5" fill="var(--color-accent)"/><circle cx="80" cy="80" r="3.5" fill="var(--color-accent)"/>
        </svg>
        <p class="nc-lbl">Grid<br>Uptown &middot; high connectivity</p>
      </div>
      <div class="nc-box">
        <svg viewBox="0 0 100 100" class="nc-svg" aria-label="Curvilinear suburban street pattern with cul-de-sacs">
          <path d="M0,55 Q25,50 50,55 Q75,60 100,55" stroke="currentColor" stroke-width="2.2" fill="none"/>
          <path d="M25,54 Q22,37 30,24" stroke="currentColor" stroke-width="1.6" fill="none"/>
          <circle cx="30" cy="21" r="6" stroke="currentColor" stroke-width="1.6" fill="none"/>
          <path d="M50,55 Q48,35 56,22" stroke="currentColor" stroke-width="1.6" fill="none"/>
          <circle cx="56" cy="19" r="6" stroke="currentColor" stroke-width="1.6" fill="none"/>
          <path d="M75,57 Q80,38 72,25" stroke="currentColor" stroke-width="1.6" fill="none"/>
          <circle cx="72" cy="22" r="6" stroke="currentColor" stroke-width="1.6" fill="none"/>
          <path d="M35,55 Q32,73 40,86" stroke="currentColor" stroke-width="1.6" fill="none"/>
          <circle cx="40" cy="89" r="6" stroke="currentColor" stroke-width="1.6" fill="none"/>
          <path d="M65,57 Q70,75 62,88" stroke="currentColor" stroke-width="1.6" fill="none"/>
          <circle cx="62" cy="91" r="6" stroke="currentColor" stroke-width="1.6" fill="none"/>
          <circle cx="25" cy="54" r="3.5" fill="var(--color-accent)"/><circle cx="50" cy="55" r="3.5" fill="var(--color-accent)"/><circle cx="75" cy="57" r="3.5" fill="var(--color-accent)"/>
        </svg>
        <p class="nc-lbl">Cul-de-sac<br>Suburbs &middot; low permeability</p>
      </div>
    </div>
    <div class="nc-crime-pair">
      <figure class="nc-crime-fig">
        <div class="p2-map-wrap" id="fig3Wrap" title="Click to enlarge">
          <img src="https://www.mdpi.com/ijgi/ijgi-14-00200/article_deploy/html/images/ijgi-14-00200-g003.png"
               alt="Figure 3: Property crime counts across NPAs in 2022"
               class="p2-map-img p2-map-img--xs" id="fig3Img">
          <button class="fig2-expand-btn" id="fig3Btn" aria-label="View full size">
            <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <polyline points="3,8 3,3 8,3"/><line x1="3" y1="3" x2="9" y2="9"/>
              <polyline points="12,3 17,3 17,8"/><line x1="17" y1="3" x2="11" y2="9"/>
              <polyline points="3,12 3,17 8,17"/><line x1="3" y1="17" x2="9" y2="11"/>
              <polyline points="17,12 17,17 12,17"/><line x1="17" y1="17" x2="11" y2="11"/>
            </svg>
          </button>
        </div>
        <figcaption>Crime counts by NPA.</figcaption>
      </figure>
      <figure class="nc-crime-fig">
        <div class="p2-map-wrap" id="fig4Wrap" title="Click to enlarge">
          <img src="https://www.mdpi.com/ijgi/ijgi-14-00200/article_deploy/html/images/ijgi-14-00200-g004.png"
               alt="Figure 4: Property crime density across NPAs (by acre) in 2022"
               class="p2-map-img p2-map-img--xs" id="fig4Img">
          <button class="fig2-expand-btn" id="fig4Btn" aria-label="View full size">
            <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <polyline points="3,8 3,3 8,3"/><line x1="3" y1="3" x2="9" y2="9"/>
              <polyline points="12,3 17,3 17,8"/><line x1="17" y1="3" x2="11" y2="9"/>
              <polyline points="3,12 3,17 8,17"/><line x1="3" y1="17" x2="9" y2="11"/>
              <polyline points="17,12 17,17 12,17"/><line x1="17" y1="17" x2="11" y2="11"/>
            </svg>
          </button>
        </div>
        <figcaption>Crime density/acre.</figcaption>
      </figure>
    </div>
    <div class="fig2-lb" id="fig3Lb" role="dialog" aria-modal="true" aria-label="Figure 3 full size" hidden>
      <div class="fig2-lb-backdrop" id="fig3Backdrop"></div>
      <div class="fig2-lb-box">
        <button class="fig2-lb-close" id="fig3Close" aria-label="Close">&#215;</button>
        <img src="https://www.mdpi.com/ijgi/ijgi-14-00200/article_deploy/html/images/ijgi-14-00200-g003.png"
             alt="Figure 3 full size: Property crime counts across NPAs in 2022"
             class="fig2-lb-img">
        <p class="fig2-lb-cap">Property crime counts across NPAs in 2022</p>
      </div>
    </div>
    <div class="fig2-lb" id="fig4Lb" role="dialog" aria-modal="true" aria-label="Figure 4 full size" hidden>
      <div class="fig2-lb-backdrop" id="fig4Backdrop"></div>
      <div class="fig2-lb-box">
        <button class="fig2-lb-close" id="fig4Close" aria-label="Close">&#215;</button>
        <img src="https://www.mdpi.com/ijgi/ijgi-14-00200/article_deploy/html/images/ijgi-14-00200-g004.png"
             alt="Figure 4 full size: Property crime density across NPAs (by acre) in 2022"
             class="fig2-lb-img">
        <p class="fig2-lb-cap">Property crime density across NPAs, per acre</p>
      </div>
    </div>
  </div>
</div>
</div>

<div class="book-page" data-i="2">
</div>

<div class="book-page" data-i="2">
<div class="book-kicker">Page 3</div>
<h3>Measuring the Street Network</h3>
<p>For each of the 371 NPAs, eight network metrics were computed at five buffer distances &mdash; yielding 40 variables per neighborhood. Principal component analysis then distilled these into <strong>four independent components</strong> capturing 70% of the variance, with the highest-loading variable per component entering the regression models.</p>
<div class="measure-layout">
  <div>
    <svg viewBox="0 0 220 210" class="measure-svg" aria-label="Five concentric buffer rings around a neighborhood center with illustrative street segments">
      <circle cx="110" cy="105" r="98" fill="none" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4,3" opacity="0.55"/>
      <circle cx="110" cy="105" r="78" fill="none" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4,3" opacity="0.65"/>
      <circle cx="110" cy="105" r="56" fill="none" stroke="var(--color-border)" stroke-width="1.3" opacity="0.8"/>
      <circle cx="110" cy="105" r="34" fill="none" stroke="var(--color-border)" stroke-width="1.3"/>
      <circle cx="110" cy="105" r="16" fill="none" stroke="var(--color-accent)" stroke-width="1.8"/>
      <rect x="97" y="92" width="26" height="26" rx="3" fill="var(--color-accent)" opacity="0.15" stroke="var(--color-accent)" stroke-width="1.4"/>
      <text x="110" y="108" text-anchor="middle" font-size="7" fill="var(--color-accent)" font-weight="700">NPA</text>
      <line x1="92" y1="93" x2="72" y2="77" stroke="var(--color-text-muted)" stroke-width="0.9" opacity="0.45"/>
      <line x1="72" y1="77" x2="46" y2="82" stroke="var(--color-text-muted)" stroke-width="0.9" opacity="0.45"/>
      <line x1="128" y1="93" x2="150" y2="78" stroke="var(--color-text-muted)" stroke-width="0.9" opacity="0.45"/>
      <line x1="150" y1="78" x2="174" y2="86" stroke="var(--color-text-muted)" stroke-width="0.9" opacity="0.45"/>
      <line x1="110" y1="118" x2="98" y2="148" stroke="var(--color-text-muted)" stroke-width="0.9" opacity="0.45"/>
      <line x1="98" y1="148" x2="104" y2="175" stroke="var(--color-text-muted)" stroke-width="0.9" opacity="0.35"/>
      <text x="128" y="90" font-size="7.5" fill="var(--color-text-muted)">0.1 mi</text>
      <text x="146" y="74" font-size="7.5" fill="var(--color-text-muted)">0.25 mi</text>
      <text x="160" y="54" font-size="7.5" fill="var(--color-text-muted)">0.5 mi</text>
      <text x="172" y="35" font-size="7.5" fill="var(--color-text-muted)">0.75 mi</text>
      <text x="185" y="16" font-size="7.5" fill="var(--color-text-muted)">1 mi</text>
    </svg>
  </div>
  <div class="measure-right">
    <p class="measure-eq"><strong>8 metrics &times; 5 buffers = 40 variables</strong></p>
    <ul class="measure-list">
      <li>Street density</li>
      <li>Intersection density</li>
      <li>Avg. node degree</li>
      <li>Avg. clustering coefficient</li>
      <li>Avg. shortest path</li>
      <li>Avg. betweenness centrality</li>
      <li>Avg. closeness centrality</li>
      <li>Avg. PageRank centrality</li>
    </ul>
    <p class="measure-pca-head">PCA variance explained (4 retained components):</p>
    <div class="pca-bars">
      <div class="pca-row"><span class="pca-name">Intersection density</span><div class="pca-track"><div class="pca-fill" style="width:37%">26%</div></div></div>
      <div class="pca-row"><span class="pca-name">Clustering coeff.</span><div class="pca-track"><div class="pca-fill pf2" style="width:28.5%">20%</div></div></div>
      <div class="pca-row"><span class="pca-name">Avg. shortest path</span><div class="pca-track"><div class="pca-fill pf3" style="width:18.5%">13%</div></div></div>
      <div class="pca-row"><span class="pca-name">Betweenness</span><div class="pca-track"><div class="pca-fill pf4" style="width:15.7%">11%</div></div></div>
    </div>
    <p class="pca-note">16 socio-spatial controls (income, race, housing age, vacancy &hellip;) handled separately through their own PCA &rarr; 9 control components.</p>
  </div>
</div>
</div>

<div class="book-page" data-i="3">
<div class="book-kicker">Page 4</div>
<h3>Results Across Four Models</h3>
<p>The four retained network variables were tested in a standard negative-binomial GLM (baseline), a Spatial AutoRegressive model (SAR-NB), a Conditional AutoRegressive model (CAR-NB), and a Geographically Weighted model (GWR-NB) that lets coefficients vary across space.</p>
<div class="rtable-wrap">
<table class="rtable">
<thead>
<tr><th>Network variable</th><th>Hyp.</th><th>GLM-NB</th><th>SAR-NB</th><th>CAR-NB</th><th>GWR-NB</th></tr>
</thead>
<tbody>
<tr class="rtr-odd">
  <td><strong>Intersection density</strong><br><small>Network intensity &amp; permeability</small></td>
  <td class="rdir rpos">+</td>
  <td class="rdir rpos">+&#10003;</td>
  <td class="rdir rpos">+&#10003;</td>
  <td class="rdir rpos">+&#10003;</td>
  <td class="rdir rmix">&#9670;</td>
</tr>
<tr>
  <td><strong>Avg. clustering coeff.</strong><br><small>Local street enclosure</small></td>
  <td class="rdir rneg">&minus;</td>
  <td class="rdir rns">n.s.</td>
  <td class="rdir rneg">&minus;&#10003;</td>
  <td class="rdir rneg">&minus;&#10003;</td>
  <td class="rdir rmix">&#9670;</td>
</tr>
<tr class="rtr-odd">
  <td><strong>Avg. shortest path</strong><br><small>Network accessibility</small></td>
  <td class="rdir rneg">&minus;</td>
  <td class="rdir rneg">&minus;&#10003;</td>
  <td class="rdir rneg">&minus;&#10003;</td>
  <td class="rdir rns">n.s.</td>
  <td class="rdir rmix">&#9670;</td>
</tr>
<tr>
  <td><strong>Avg. betweenness centrality</strong><br><small>Through-traffic potential</small></td>
  <td class="rdir rpos">+</td>
  <td class="rdir rns">n.s.</td>
  <td class="rdir rns">n.s.</td>
  <td class="rdir rpos">+&#10003;</td>
  <td class="rdir rmix">&#9670;</td>
</tr>
</tbody>
</table>
</div>
<p class="rtable-note">&#10003;&nbsp;significant &nbsp;|&nbsp; n.s.&nbsp;not significant &nbsp;|&nbsp; &#9670;&nbsp;spatially varying (GWR: significant in some areas, not others)</p>
<p><strong>Where effects are strongest:</strong> GWR reveals that intersection density&rsquo;s positive association peaks in the suburban mid-ring &mdash; consistent with a saturation effect where adding one more intersection to an already hyper-connected downtown block matters less than the same addition in a disconnected suburb.</p>
</div>

<div class="book-page" data-i="4">
<div class="book-kicker">Page 5</div>
<h3>Three Takeaways</h3>
<p><strong>Denser street grids see more property crime.</strong> Intersection density was the strongest and most consistent predictor across every model: neighborhoods with more connected, more permeable street networks experienced more property crime, even after controlling for socioeconomic conditions.</p>
<p><strong>Accessibility cuts both ways.</strong> Neighborhoods that are easier to move through &mdash; shorter average network paths &mdash; tended to see more property crime, suggesting the same street layouts that serve residents' mobility can also extend offenders' reach.</p>
<p><strong>Place and scale matter.</strong> The network effect showed up most clearly at mid-range buffer scales and was stronger in suburban neighborhoods than downtown &mdash; which is why the study pairs multi-scale network measures with spatial regression models (SAR, CAR, GWR) rather than a single citywide equation.</p>
</div>

<div class="book-page" data-i="5">
<div class="book-kicker">Page 6</div>
<h3>Try It Yourself</h3>
<p>The repository isn't just the paper's code &mdash; it's a point-and-click web app. Download it, double-click a launcher, and step through the same pipeline in your browser: no command line required.</p>
<div class="book-note">Placeholder &mdash; 30&ndash;60 second GIF or video of the app walking through the pipeline stages. (Add media: assets/img/app-demo.gif)</div>
<p><a class="book-btn" href="https://github.com/Erfankt/urban-network-analysis" target="_blank" rel="noopener">View the repository on GitHub &rarr;</a></p>
<p><a class="book-btn book-btn-ghost" href="https://github.com/Erfankt/urban-network-analysis/releases/latest" target="_blank" rel="noopener">Latest release (v2.0.1) &rarr;</a></p>
</div>

<div class="book-page" data-i="6">
<div class="book-kicker">Page 7</div>
<h3>Under the Hood</h3>
<p><strong>Language &amp; libraries:</strong> Python, GeoPandas, NetworkX, scikit-learn, factor_analyzer</p>
<p><strong>Methods:</strong> spatial statistics, principal component analysis, large-scale checkpointed computation</p>
<p><strong>Interface:</strong> a Streamlit web app with an optional AI assistant for exploring run results</p>
<p><strong>License:</strong> MIT &mdash; free to reuse, extend, or adapt to another city's data</p>
</div>

<div class="book-page" data-i="7">
<div class="book-kicker">Page 8</div>
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
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 2.5em;
  margin-bottom: 2.5em;
  padding: 0 1.5em;
  box-sizing: border-box;
}
.book {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  min-height: 820px;
  padding: 6px;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  perspective: 2400px;
}
.book-page {
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;
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
.pipeline-figure {
  margin: 1.2em 0;
  color: var(--color-text);
}
.pipeline-figure svg {
  max-width: 100%;
  height: auto;
  display: block;
}
.pipeline-figure figcaption {
  margin-top: 0.6em;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-style: italic;
}
.pf-node {
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.pf-node.pf-on {
  opacity: 1;
  transform: translateY(0);
}
.pf-arrow-h {
  transform: scaleX(0.001);
  transition: transform 0.45s ease-out;
}
.pf-arrow-h.pf-on {
  transform: scaleX(1);
}
.pf-arrow-diag {
  opacity: 0;
  transition: opacity 0.55s ease;
}
.pf-arrow-diag.pf-on {
  opacity: 1;
}
text.pf-label {
  opacity: 0;
  transition: opacity 0.4s ease;
  fill: currentColor;
}
text.pf-label.pf-on {
  opacity: 1;
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
.book-cite {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  border-left: 3px solid var(--color-border);
  padding-left: 0.9em;
  margin: 0.9em 0;
}
/* ââ Page 2: Study Area âââââââââââââââââââââââââââ */
.p2-intro { margin: 0 0 0.55em; font-size: 0.88rem; line-height: 1.45; }
.p2-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 1em;
  align-items: start;
}
.p2-map { margin: 0; }
.p2-map-img {
  width: 100%;
  max-height: 268px;
  object-fit: contain;
  object-position: top;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  display: block;
}
.p2-map figcaption {
  margin-top: 0.35em;
  font-size: 0.72rem;
  color: var(--color-text-muted);
  font-style: italic;
  line-height: 1.4;
}
.fig-source { font-style: normal; font-size: 0.7rem; opacity: 0.75; }
.p2-concepts { display: flex; flex-direction: column; gap: 0.55em; }
.nc-pair {
  display: flex;
  gap: 0.8em;
}
.nc-box { flex: 1; text-align: center; }
.nc-svg {
  width: 100%;
  max-width: 90px;
  height: auto;
  display: block;
  margin: 0 auto 0.3em;
  color: var(--color-text-muted);
}
.nc-lbl {
  font-size: 0.7rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.35;
}
/* ââ Figure 2 expand / lightbox âââââââââââââââââ */
.p2-map-wrap {
  position: relative;
  cursor: zoom-in;
  display: block;
}
.fig2-expand-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.55);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s;
  pointer-events: none;
  z-index: 2;
}
.p2-map-wrap:hover .fig2-expand-btn { opacity: 1; pointer-events: auto; }
.fig2-lb {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;
}
.fig2-lb.is-open { display: flex; }
.fig2-lb-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.82);
  cursor: zoom-out;
}
.fig2-lb-box {
  position: relative;
  max-width: min(92vw, 900px);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  z-index: 1;
}
.fig2-lb-img {
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 6px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
  display: block;
}
.fig2-lb-close {
  position: absolute;
  top: -14px;
  right: -14px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  border: none;
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  z-index: 2;
}
.fig2-lb-cap {
  color: #ccc;
  font-size: 0.72rem;
  text-align: center;
  line-height: 1.45;
  margin: 0;
}
.fig2-lb-cap a { color: #8bbfff; }
/* ââ Crime maps pair (Page 2 right column) âââââââ */
.nc-crime-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5em; margin-top: 0.4em; }
.nc-crime-fig { margin: 0; }
.nc-crime-fig figcaption { font-size: 0.68rem; color: var(--color-text-muted); margin-top: 0.25em; line-height: 1.3; }
.p2-map-img--xs { max-height: 130px; object-fit: contain; width: 100%; display: block; }
.story-stats-row {
  display: flex;
  gap: 0.7em;
  margin-top: 1em;
}
.sstat {
  flex: 1;
  text-align: center;
  background: var(--color-accent-soft, rgba(99,102,241,.08));
  border-radius: var(--radius-sm);
  padding: 0.55em 0.3em;
}
.sstat-n {
  display: block;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-accent);
  font-family: var(--font-heading);
  line-height: 1.1;
}
.sstat-l {
  display: block;
  font-size: 0.68rem;
  color: var(--color-text-muted);
  margin-top: 0.15em;
}
/* ââ Page 3: Measurement ââââââââââââââââââââââââââ */
YX\Ý\K[^[Ý]Â\Ü^NÜYÂÜY][\]KXÛÛ[[ÎLYÂØ\K[NÂ[YÛZ][\ÎÝ\ÂX\Ú[]ÜY[NÂBYX\Ý\K\ÝÈÂÚYL	NÂZYÚ]]ÎÂ\Ü^NØÚÎÂÛÛÜ\KXÛÛÜ]^
NÂBYX\Ý\KY\HÂX\Ú[Y[NÂBYX\Ý\K[\ÝÂX\Ú[[HK[NÂY[ÎÂÛ\Ú^NÜ[NÂÛÛÜ\KXÛÛÜ]^[]]Y
NÂ[KZZYÚKÎÂBYX\Ý\K\ØKZXYÂÛ\Ú^N[NÂÛ]ÙZYÚ
ÂX\Ú[
Y[NÂBØKX\ÈÈX\Ú[ÈBØK\ÝÈÂ\Ü^N^Â[YÛZ][\ÎÙ[\ÂØ\Y[NÂX\Ú[XÝÛNÎ[NÂBØK[[YHÂÛ\Ú^NÍ[NÂÛÛÜ\KXÛÛÜ]^[]]Y
NÂZ[]ÚYLÌÂ^\Ú[ÎÂBØK]XÚÈÂ^NÂXÚÙÜÝ[\KXÛÛÜXÜ\NÂÜ\\Y]\ÎN\ÂZYÚÂÝ\ÝÎY[ÂBØKY[ÂZYÚL	NÂXÚÙÜÝ[\KXÛÛÜXXØÙ[
NÂÜ\\Y]\ÎN\Â\Ü^N^Â[YÛZ][\ÎÙ[\ÂY[Ë[Y
ÜÂÛ\Ú^NÜ[NÂÛÛÜÙÂÛ]ÙZYÚ
ÌÂÚ]K\ÜXÙNÝÜ\ÂBÈXÚÙÜÝ[ÌXMYNNÈBÈÈXÚÙÜÝ[ÎXÙÈBÈXÚÙÜÝ[ÌLNNÈBØK[ÝHÂÛ\Ú^NÎ[NÂÛÛÜ\KXÛÛÜ]^[]]Y
NÂX\Ú[]Ü[NÂBÊ8¥ 8¥ YÙH
\Ý[ÈXH8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 
ÂXK]Ü\ÂÝ\ÝË^]]ÎÂX\Ú[Ù[HÙ[NÂBXHÂÚYL	NÂÜ\XÛÛ\ÙNÛÛ\ÙNÂÛ\Ú^N\[NÂBXHÂXÚÙÜÝ[\KXÛÛÜXXØÙ[\ÛÙØJNKLK
JNÂY[Î
Y[HY[NÂ^X[YÛYÂÛY[Z[N\KYÛZXY[ÊNÂÛ\Ú^NÍ[NÂÜ\XÝÛNÛÛY\KXÛÛÜXÜ\NÂÚ]K\ÜXÙNÝÜ\ÂBXHÂY[ÎY[HY[NÂÜ\XÝÛN\ÛÛY\KXÛÛÜXÜ\NÂ\XØ[X[YÛZYNÂBXHÛX[Â\Ü^NØÚÎÂÛÛÜ\KXÛÛÜ]^[]]Y
NÂÛ\Ú^NÎ[NÂX\Ú[]ÜY[NÂB[ÙÈXÚÙÜÝ[\KXÛÛÜXXØÙ[\ÛÙØJNKLK
JNÈB\Â^X[YÛÙ[\ÂÛ]ÙZYÚ
ÌÂÛ\Ú^NM\[NÂÚ]K\ÜXÙNÝÜ\ÂBÜÈÈÛÛÜÙY


ÈBYÈÈÛÛÜÌØÈBÈÈÛÛÜ\KXÛÛÜ]^[]]Y
NÈÛ]ÙZYÚ
ÈÛ\Ú^N[NÈBZ^ÈÛÛÜÎXÙÈBXK[ÝHÂÛ\Ú^NÍ[NÂÛÛÜ\KXÛÛÜ]^[]]Y
NÂX\Ú[XÝÛN[NÂBYYXH
X^]ÚY
Ì
HÂYX\Ý\K[^[Ý]ÈÜY][\]KXÛÛ[[ÎYÈBYX\Ý\K\ÝÈÈX^]ÚYÈX\Ú[]]ÈY[NÈBØK[[YHÈZ[]ÚYM\ÈBBÛÚË[ÝHÂXÚÙÜÝ[\KXÛÛÜXXØÙ[\ÛÙ
NÂÜ\[Y
ÛÛY\KXÛÛÜXXØÙ[LNÂÜ\\Y]\Î\K\Y]\Ë\ÛJNÂY[ÎY[HK[NÂÛ\Ý[N][XÎÂÛÛÜ\KXÛÛÜ]^[]]Y
NÂX\Ú[Y[HÂBÛÚËXÂ\Ü^N[[KXØÚÎÂXÚÙÜÝ[\KXÛÛÜXXØÙ[
NÂÛÛÜÙZ[\Ü[ÂY[Î[HK[NÂÜ\\Y]\Î\K\Y]\Ë\ÛJNÂ^YXÛÜ][ÛÛHZ[\Ü[ÂÛ]ÙZYÚ
ÂX\Ú[Ù[H[HÙ[HÂBÛÚËXYÚÜÝÂXÚÙÜÝ[[Ü\[ÂÛÛÜ\KXÛÛÜXXØÙ[
HZ[\Ü[ÂÜ\\ÛÛY\KXÛÛÜXÜ\NÂBÛÚËXÛÛÛÈÂ\Ü^N^Â[YÛZ][\ÎÙ[\Â\ÝYKXÛÛ[Ù[\ÂØ\K[NÂX\Ú[]ÜK[NÂBÛÚË[]ÂXÚÙÜÝ[\KXÛÛÜ\Ý\XÙJNÂÜ\\ÛÛY\KXÛÛÜXÜ\NÂÜ\\Y]\ÎNN\ÂY[ÎMY[HK[NÂÛ]ÙZYÚ
ÂÛY[Z[N\KYÛZXY[ÊNÂÝ\ÛÜÚ[\ÂÞ\ÚYÝÎ\K\ÚYÝË\ÛJNÂÛÛÜ\KXÛÛÜ]^
NÂBÛÚË[]Ý\Ý
\ØXY
HÂÜ\XÛÛÜ\KXÛÛÜXXØÙ[
NÂÛÛÜ\KXÛÛÜXXØÙ[
NÂBÛÚË[]\ØXYÂÜXÚ]NÍNÂÝ\ÛÜY][ÂBÛÚËXÛÝ[\ÂÛY[Z[N\KYÛZXY[ÊNÂÛ]ÙZYÚ
ÌÂÛÛÜ\KXÛÛÜ]^[]]Y
NÂ]\\ÜXÚ[Î
[NÂZ[]ÚY
MÂ^X[YÛÙ[\ÂBYYXH
X^]ÚY

HÂÛÚË]Ü\ÈY[Î[NÈBÛÚÈÈZ[ZZYÚ
ÈY[Î
ÈBÛÚË\YÙHÈÜ
ÈY
ÈYÚ
ÈÝÛN
ÈY[ÎK[HKY[NÈBBÜÝ[OØÜ\[Ý[Û
HÂ\YÙ\ÈH\^KÝÝ\KÛXÙKØ[
ØÝ[Y[]Y\TÙ[XÝÜ[
	ÈØÛÚÈÛÚË\YÙIÊJNÂ\Ý[HYÙ\Ë[ÝÂ\\YHÂ\]HØÝ[Y[Ù][[Y[RY
	ØÛÚÔ]ÊNÂ\^HØÝ[Y[Ù][[Y[RY
	ØÛÚÓ^	ÊNÂ\ÛÝ[\HØÝ[Y[Ù][[Y[RY
	ØÛÚÐÛÝ[\ÊNÂYÙ\ËÜXXÚ
[Ý[ÛJHÂÝ[K[^HÝ[HNÂJNÂ\ÝÈHØÝ[Y[Ù][[Y[RY
	ÜÝÉÊNÂ\[Y\ÈH×NÂ[Ý[Û^T\[[J
HÂY
\ÝÊHÈ]\ÈB\[H\^KÝÝ\KÛXÙKØ[
ÝË]Y\TÙ[XÝÜ[
	ÖÙ]K\Ý\IÊJNÂ[Y\ËÜXXÚ
[Ý[Û
HÈÛX\[Y[Ý]

NÈJNÂ[Y\ÈH×NÂ[ÜXXÚ
[Ý[Û[
HÈ[Û\ÜÓ\Ý[[ÝJ	Ü[ÛÊNÈJNÂÚYÝËÙ]Ý[[ÐÛY[XÝ

NÂ\X^Ý\HÂ[ÜXXÚ
[Ý[Û[
HÈX^Ý\HX]X^
X^Ý\\ÙR[
[Ù]]X]J	Ù]K\Ý\	ÊKL
JNÈJNÂÜ
\HHNÈHHX^Ý\ÈJÊÊHÂ
[Ý[ÛÝ\[JHÂ\HÙ][Y[Ý]
[Ý[Û
HÂ[ÜXXÚ
[Ý[Û[
HÂY
\ÙR[
[Ù]]X]J	Ù]K\Ý\	ÊKL
HOOHÝ\[JHÈ[Û\ÜÓ\ÝY
	Ü[ÛÊNÈBJNÂK
Ý\[HHJH

NÂ[Y\Ë\Ú

NÂJJJNÂBB[Ý[Û\]J
HÂÛÝ[\^ÛÛ[H
\Y
ÈJH
È	ÈÈ	È
ÈÝ[Â]\ØXYH\YOOHÂ^\ØXYH\YOOHÝ[HNÂY
\YOOH
HÈ^T\[[J
NÈBB[Ý[ÛÙ]J
HÂÙ][Y[Ý]
[Ý[Û
HÈÛ\ÜÓ\Ý[[ÝJ	Ú\ËY\[ÉÊNÈKL
NÂB[Ý[Û^

HÂY
\YHÝ[HJHÈ]\ÈB\HYÙ\ÖÙ\YNÂÛ\ÜÓ\ÝY
	Ú\ËY\[ÉÊNÂÛ\ÜÓ\ÝY
	Ú\ËY\Y	ÊNÂ\Y
ÊÎÂ\]J
NÂÙ]J
NÂB[Ý[Û]
HÂY
\YH
HÈ]\ÈB\YKNÂ\HYÙ\ÖÙ\YNÂÛ\ÜÓ\ÝY
	Ú\ËY\[ÉÊNÂÛ\ÜÓ\Ý[[ÝJ	Ú\ËY\Y	ÊNÂ\]J
NÂÙ]J
NÂB^Y][\Ý[\	ØÛXÚÉË^
NÂ]Y][\Ý[\	ØÛXÚÉË]NÂØÝ[Y[Y][\Ý[\	ÚÙ^YÝÛË[Ý[ÛJHÂY
KÙ^HOOH	Ð\ÝÔYÚ	ÊHÈ^

NÈBY
KÙ^HOOH	Ð\ÝÓY	ÊHÈ]
NÈBJNÂ\]J
NÂJJ
NÂËÈ8¥ 8¥ YÝ\HYÚÞ8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ [Ý[Û
HÂ\HØÝ[Y[Ù][[Y[RY
	ÙYÌÊNÂ\XÚÙÜHØÝ[Y[Ù][[Y[RY
	ÙYÌXÚÙÜ	ÊNÂ\ÛÜÙPHØÝ[Y[Ù][[Y[RY
	ÙYÌÛÜÙIÊNÂ\Ü\HØÝ[Y[Ù][[Y[RY
	ÙYÌÜ\	ÊNÂ\^[HØÝ[Y[Ù][[Y[RY
	ÙYÌÊNÂY
[]Ü\
H]\Â[Ý[ÛÜ[
HÂ[[ÝP]X]J	ÚY[ÊNÂÛ\ÜÓ\ÝY
	Ú\Ë[Ü[ÊNÂØÝ[Y[ÙKÝ[KÝ\ÝÈH	ÚY[ÎÂB[Ý[ÛÛÜÙJ
HÂÙ]]X]J	ÚY[Ë	ÉÊNÂÛ\ÜÓ\Ý[[ÝJ	Ú\Ë[Ü[ÊNÂØÝ[Y[ÙKÝ[KÝ\ÝÈH	ÉÎÂBÜ\Y][\Ý[\	ØÛXÚÉË[Ý[ÛJHÂY
K\Ù]OOH^[^[ÛÛZ[ÊK\Ù]
HK\Ù]OOHÜ\]Y\TÙ[XÝÜ	Ë[X\Z[YÉÊHÜ\ÛÛZ[ÊK\Ù]
JHÂÜ[
NÂBJNÂY
XÚÙÜ
HXÚÙÜY][\Ý[\	ØÛXÚÉËÛÜÙJNÂY
ÛÜÙPHÛÜÙPY][\Ý[\	ØÛXÚÉËÛÜÙJNÂØÝ[Y[Y][\Ý[\	ÚÙ^YÝÛË[Ý[ÛJHÂY
KÙ^HOOH	Ñ\ØØ\IÈ	Û\ÜÓ\ÝÛÛZ[Ê	Ú\Ë[Ü[ÊJHÈÛÜÙJ
NÈBJNÂJJ
NÂËÈ8¥ 8¥ YÝ\HÈYÚÞ8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ [Ý[Û
HÂ\HØÝ[Y[Ù][[Y[RY
	ÙYÌÓÊNÂ\XÚÙÜHØÝ[Y[Ù][[Y[RY
	ÙYÌÐXÚÙÜ	ÊNÂ\ÛÜÙPHØÝ[Y[Ù][[Y[RY
	ÙYÌÐÛÜÙIÊNÂ\Ü\HØÝ[Y[Ù][[Y[RY
	ÙYÌÕÜ\	ÊNÂ\^[HØÝ[Y[Ù][[Y[RY
	ÙYÌÐÊNÂY
[]Ü\
H]\Â[Ý[ÛÜ[
HÂ[[ÝP]X]J	ÚY[ÊNÂÛ\ÜÓ\ÝY
	Ú\Ë[Ü[ÊNÂØÝ[Y[ÙKÝ[KÝ\ÝÈH	ÚY[ÎÂB[Ý[ÛÛÜÙJ
HÂÙ]]X]J	ÚY[Ë	ÉÊNÂÛ\ÜÓ\Ý[[ÝJ	Ú\Ë[Ü[ÊNÂØÝ[Y[ÙKÝ[KÝ\ÝÈH	ÉÎÂBÜ\Y][\Ý[\	ØÛXÚÉË[Ý[ÛJHÂY
K\Ù]OOH^[^[ÛÛZ[ÊK\Ù]
HK\Ù]OOHÜ\]Y\TÙ[XÝÜ	Ë[X\Z[YÉÊHÜ\ÛÛZ[ÊK\Ù]
JHÂÜ[
NÂBJNÂY
XÚÙÜ
HXÚÙÜY][\Ý[\	ØÛXÚÉËÛÜÙJNÂY
ÛÜÙPHÛÜÙPY][\Ý[\	ØÛXÚÉËÛÜÙJNÂØÝ[Y[Y][\Ý[\	ÚÙ^YÝÛË[Ý[ÛJHÂY
KÙ^HOOH	Ñ\ØØ\IÈ	Û\ÜÓ\ÝÛÛZ[Ê	Ú\Ë[Ü[ÊJHÈÛÜÙJ
NÈBJNÂJJ
NÂËÈ8¥ 8¥ YÝ\H
YÚÞ8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ 8¥ [Ý[Û
HÂ\HØÝ[Y[Ù][[Y[RY
	ÙYÍÊNÂ\XÚÙÜHØÝ[Y[Ù][[Y[RY
	ÙYÍXÚÙÜ	ÊNÂ\ÛÜÙPHØÝ[Y[Ù][[Y[RY
	ÙYÍÛÜÙIÊNÂ\Ü\HØÝ[Y[Ù][[Y[RY
	ÙYÍÜ\	ÊNÂ\^[HØÝ[Y[Ù][[Y[RY
	ÙYÍÊNÂY
[]Ü\
H]\Â[Ý[ÛÜ[
HÂ[[ÝP]X]J	ÚY[ÊNÂÛ\ÜÓ\ÝY
	Ú\Ë[Ü[ÊNÂØÝ[Y[ÙKÝ[KÝ\ÝÈH	ÚY[ÎÂB[Ý[ÛÛÜÙJ
HÂÙ]]X]J	ÚY[Ë	ÉÊNÂÛ\ÜÓ\Ý[[ÝJ	Ú\Ë[Ü[ÊNÂØÝ[Y[ÙKÝ[KÝ\ÝÈH	ÉÎÂBÜ\Y][\Ý[\	ØÛXÚÉË[Ý[ÛJHÂY
K\Ù]OOH^[^[ÛÛZ[ÊK\Ù]
HK\Ù]OOHÜ\]Y\TÙ[XÝÜ	Ë[X\Z[YÉÊHÜ\ÛÛZ[ÊK\Ù]
JHÂÜ[
NÂBJNÂY
XÚÙÜ
HXÚÙÜY][\Ý[\	ØÛXÚÉËÛÜÙJNÂY
ÛÜÙPHÛÜÙPY][\Ý[\	ØÛXÚÉËÛÜÙJNÂØÝ[Y[Y][\Ý[\	ÚÙ^YÝÛË[Ý[ÛJHÂY
KÙ^HOOH	Ñ\ØØ\IÈ	Û\ÜÓ\ÝÛÛZ[Ê	Ú\Ë[Ü[ÊJHÈÛÜÙJ
NÈBJNÂJJ
NÂÜØÜ\
