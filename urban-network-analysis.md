---
layout: page
title: Street Networks & Property Crime in Charlotte, NC
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
<svg id="pfSvg" viewBox="0 0 1620 260" role="img" aria-label="Animated pipeline: the county street centerline dataset is cleaned, simplified, and built into a network graph; the network graph feeds into each of the 371 Neighborhood Profile Areas, which are buffered at five distances from 0.1 to 1 mile to compute 40 network measures; principal component analysis reduces these to the final modeling dataset.">
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
<g class="pf-arrow pf-arrow-v" data-step="7" style="transform-origin:560px 80px">
<path d="M 560 80 L 560 125 L 130 125 L 130 170" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#pfArrow)"></path>
</g>
<g class="pf-node" data-step="8">
<rect x="260" y="170" width="200" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"></rect>
<text x="360" y="195" text-anchor="middle" font-size="12">Buffer at 5 scales</text>
<text x="360" y="212" text-anchor="middle" font-size="12">(0.1–1 mile)</text>
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
<text x="865" y="195" text-anchor="middle" font-size="12">PCA: 40 measures →</text>
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
<text x="1455" y="212" text-anchor="middle" font-size="12">(OLS · SAR · CAR · GWR)</text>
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
<div class="p2-layout">

  <!-- A: NPA choropleth animation + definition ─────────────────── -->
  <div class="p2-cell">
    <p class="p2-cell-hd">What is an NPA?</p>
<figure class="npa-figure">
<svg viewBox="0 0 320 195" class="npa-svg" aria-label="371 NPAs colored by property crime density">
<style>
@keyframes npa-in { 0%,2%{opacity:0;transform:scale(0.96);transform-origin:50% 50%} 28%,100%{opacity:1;transform:scale(1);transform-origin:50% 50%} }
@keyframes npa-hot { 0%,55%,100%{opacity:var(--npa-op,0.5)} 70%,80%{opacity:1} }
</style>
<polygon points="0,0 64,0 73,59 0,65" fill="var(--color-accent)" opacity="0.10" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="animation:npa-in 0.7s ease-out both;animation-delay:1.62s"/>
<polygon points="64,0 128,0 117,64 73,59" fill="var(--color-accent)" opacity="0.18" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="animation:npa-in 0.7s ease-out both;animation-delay:0.90s"/>
<polygon points="128,0 192,0 188,63 117,64" fill="var(--color-accent)" opacity="0.30" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="animation:npa-in 0.7s ease-out both;animation-delay:0.18s"/>
<polygon points="192,0 256,0 249,59 188,63" fill="var(--color-accent)" opacity="0.20" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="animation:npa-in 0.7s ease-out both;animation-delay:1.08s"/>
<polygon points="256,0 320,0 320,65 249,59" fill="var(--color-accent)" opacity="0.10" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="animation:npa-in 0.7s ease-out both;animation-delay:1.80s"/>
<polygon points="0,65 73,59 74,138 0,130" fill="var(--color-accent)" opacity="0.22" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="animation:npa-in 0.7s ease-out both;animation-delay:2.34s"/>
<polygon points="73,59 117,64 119,139 74,138" fill="var(--color-accent)" opacity="0.55" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="--npa-op:0.55;animation:npa-in 0.7s ease-out both,npa-hot 3s 1.16s ease-in-out infinite"/>
<polygon points="117,64 188,63 194,122 119,139" fill="var(--color-accent)" opacity="0.92" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="--npa-op:0.92;animation:npa-in 0.7s ease-out both,npa-hot 3s 0.80s ease-in-out infinite"/>
<polygon points="188,63 249,59 245,123 194,122" fill="var(--color-accent)" opacity="0.68" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="--npa-op:0.68;animation:npa-in 0.7s ease-out both,npa-hot 3s 1.34s ease-in-out infinite"/>
<polygon points="249,59 320,65 320,130 245,123" fill="var(--color-accent)" opacity="0.27" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="animation:npa-in 0.7s ease-out both;animation-delay:2.52s"/>
<polygon points="0,130 74,138 64,195 0,195" fill="var(--color-accent)" opacity="0.14" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="animation:npa-in 0.7s ease-out both;animation-delay:1.98s"/>
<polygon points="74,138 119,139 128,195 64,195" fill="var(--color-accent)" opacity="0.38" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="animation:npa-in 0.7s ease-out both;animation-delay:1.26s"/>
<polygon points="119,139 194,122 192,195 128,195" fill="var(--color-accent)" opacity="0.72" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="--npa-op:0.72;animation:npa-in 0.7s ease-out both,npa-hot 3s 1.52s ease-in-out infinite"/>
<polygon points="194,122 245,123 256,195 192,195" fill="var(--color-accent)" opacity="0.48" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="animation:npa-in 0.7s ease-out both;animation-delay:1.44s"/>
<polygon points="245,123 320,130 320,195 256,195" fill="var(--color-accent)" opacity="0.16" stroke="var(--color-bg,#fff)" stroke-width="1.2" style="animation:npa-in 0.7s ease-out both;animation-delay:2.16s"/>
<g opacity="0.22">
<polygon points="0,0 64,0 73,59 0,65" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="64,0 128,0 117,64 73,59" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="128,0 192,0 188,63 117,64" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="192,0 256,0 249,59 188,63" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="256,0 320,0 320,65 249,59" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="0,65 73,59 74,138 0,130" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="73,59 117,64 119,139 74,138" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="117,64 188,63 194,122 119,139" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="188,63 249,59 245,123 194,122" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="249,59 320,65 320,130 245,123" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="0,130 74,138 64,195 0,195" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="74,138 119,139 128,195 64,195" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="119,139 194,122 192,195 128,195" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="194,122 245,123 256,195 192,195" fill="none" stroke="currentColor" stroke-width="0.6"/>
<polygon points="245,123 320,130 320,195 256,195" fill="none" stroke="currentColor" stroke-width="0.6"/>
</g>
<defs><linearGradient id="lgCrime" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="var(--color-accent)" stop-opacity="0.1"/>
<stop offset="100%" stop-color="var(--color-accent)" stop-opacity="1"/>
</linearGradient></defs>
<rect x="8" y="178" width="90" height="9" rx="2" fill="url(#lgCrime)" stroke="currentColor" stroke-width="0.5" opacity="0.7"/>
<text x="8" y="193" font-size="7.5" fill="currentColor" opacity="0.7">Low</text>
<text x="100" y="193" font-size="7.5" fill="currentColor" opacity="0.7" text-anchor="end">High</text>
<text x="106" y="187" font-size="7.5" fill="currentColor" opacity="0.65">Crime density</text>
</svg>
<figcaption>Neighborhood Profile Areas (NPAs) are geographic planning units defined by the City of Charlotte and Mecklenburg County to monitor and compare neighborhood conditions, housing, and quality-of-life indicators across the city (<a href="https://maps.mecklenburgcountync.gov/qol/" target="_blank" rel="noopener">City of Charlotte, NPA Program</a>).</figcaption>
</figure>
  </div><!-- /.p2-cell A -->

  <!-- E: Street network inside one NPA ──────────────────────────── -->
  <div class="p2-cell">
    <p class="p2-cell-hd">Street Network Inside One NPA</p>
    <figure class="npa-network-fig">
      <svg viewBox="0 0 175 112" class="npa-net-svg" aria-label="Street network inside a single NPA: nodes are intersections, edges are street segments">
        <polygon points="5,10 60,4 108,7 152,14 162,54 156,100 108,108 55,106 12,98 4,54" fill="var(--color-accent)" opacity="0.07" stroke="var(--color-accent)" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.35"/>
        <line x1="24" y1="22" x2="62" y2="12" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:0.0s"/>
        <line x1="62" y1="12" x2="102" y2="16" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:0.13s"/>
        <line x1="102" y1="16" x2="138" y2="22" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:0.26s"/>
        <line x1="18" y1="55" x2="52" y2="52" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:0.39s"/>
        <line x1="52" y1="52" x2="88" y2="50" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:0.52s"/>
        <line x1="88" y1="50" x2="124" y2="56" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:0.65s"/>
        <line x1="30" y1="90" x2="64" y2="86" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:0.78s"/>
        <line x1="64" y1="86" x2="102" y2="88" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:0.91s"/>
        <line x1="102" y1="88" x2="138" y2="88" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:1.04s"/>
        <line x1="24" y1="22" x2="18" y2="55" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:1.16s"/>
        <line x1="18" y1="55" x2="30" y2="90" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:1.29s"/>
        <line x1="62" y1="12" x2="52" y2="52" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:1.42s"/>
        <line x1="52" y1="52" x2="64" y2="86" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:1.55s"/>
        <line x1="102" y1="16" x2="88" y2="50" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:1.68s"/>
        <line x1="88" y1="50" x2="102" y2="88" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:1.81s"/>
        <line x1="138" y1="22" x2="150" y2="54" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:1.94s"/>
        <line x1="150" y1="54" x2="124" y2="56" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:2.07s"/>
        <line x1="124" y1="56" x2="138" y2="88" stroke="currentColor" stroke-width="1.35" stroke-dasharray="60" style="animation:mi-draw 5s ease-in-out infinite;animation-delay:2.2s"/>
        <circle cx="24" cy="22" r="3.2" fill="var(--color-accent)" style="animation:mi-pulse 5s ease-in-out infinite;animation-delay:2.4s"/>
        <circle cx="62" cy="12" r="3.2" fill="var(--color-accent)" style="animation:mi-pulse 5s ease-in-out infinite;animation-delay:2.47s"/>
        <circle cx="102" cy="16" r="3.2" fill="var(--color-accent)" style="animation:mi-pulse 5s ease-in-out infinite;animation-delay:2.53s"/>
        <circle cx="138" cy="22" r="3.2" fill="var(--color-accent)" style="animation:mi-pulse 5s ease-in-out infinite;animation-delay:2.6s"/>
        <circle cx="150" cy="54" r="3.2" fill="var(--color-accent)" style="animation:mi-pulse 5s ease-in-out infinite;animation-delay:2.67s"/>
        <circle cx="18" cy="55" r="3.2" fill="var(--color-accent)" style="animation:mi-pulse 5s ease-in-out infinite;animation-delay:2.73s"/>
        <circle cx="52" cy="52" r="3.2" fill="var(--color-accent)" style="animation:mi-pulse 5s ease-in-out infinite;animation-delay:2.8s"/>
        <circle cx="88" cy="50" r="3.2" fill="var(--color-accent)" style="animation:mi-pulse 5s ease-in-out infinite;animation-delay:2.87s"/>
        <circle cx="124" cy="56" r="3.2" fill="var(--color-accent)" style="animation:mi-pulse 5s ease-in-out infinite;animation-delay:2.93s"/>
        <circle cx="30" cy="90" r="3.2" fill="var(--color-accent)" style="animation:mi-pulse 5s ease-in-out infinite;animation-delay:3.0s"/>
        <circle cx="64" cy="86" r="3.2" fill="var(--color-accent)" style="animation:mi-pulse 5s ease-in-out infinite;animation-delay:3.07s"/>
        <circle cx="102" cy="88" r="3.2" fill="var(--color-accent)" style="animation:mi-pulse 5s ease-in-out infinite;animation-delay:3.13s"/>
        <circle cx="138" cy="88" r="3.2" fill="var(--color-accent)" style="animation:mi-pulse 5s ease-in-out infinite;animation-delay:3.2s"/>
        <text x="158" y="10" font-size="6.8" fill="var(--color-accent)" opacity="0.75" text-anchor="end">NPA boundary</text>
      </svg>
      <figcaption><strong>Nodes</strong> = intersections &nbsp;&bull;&nbsp; <strong>Edges</strong> = street segments.</figcaption>
    </figure>
  </div><!-- /.p2-cell E -->

  <!-- B: Street network patterns ───────────────────────────────── -->
  <div class="p2-cell">
    <p class="p2-cell-hd">Street Network Patterns</p>
    <p class="p2-cell-note">Charlotte&rsquo;s neighborhoods range from dense Uptown grids to suburban cul-de-sac loops &mdash; a natural experiment in how street layout relates to crime.</p>
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
  </div><!-- /.p2-cell B -->

  <!-- C: Network diversity map (Figure g002) ───────────────────── -->
  <div class="p2-cell">
    <p class="p2-cell-hd">Network Diversity Across Charlotte</p>
    <figure class="p2-map">
      <div class="p2-map-wrap" id="fig2Wrap" title="Click to enlarge">
        <img src="https://www.mdpi.com/ijgi/ijgi-14-00200/article_deploy/html/images/ijgi-14-00200-g002.png"
             alt="Diversity of street networks in the study area (Kefayat &amp; Thill 2025)"
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
  </div><!-- /.p2-cell C -->

  <!-- D: Crime maps side by side ──────────────────────────────── -->
  <div class="p2-cell p2-cell--full">
    <p class="p2-cell-hd">Property Crime Distribution (2022)</p>
    <div class="p2-crime-pair-row">
    <figure class="p2-crime-fig">
      <div class="p2-map-wrap" id="fig3Wrap" title="Click to enlarge">
        <img src="https://www.mdpi.com/ijgi/ijgi-14-00200/article_deploy/html/images/ijgi-14-00200-g003.png"
             alt="Property crime counts across NPAs in 2022"
             class="p2-map-img p2-map-img--sm" id="fig3Img">
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
    <figure class="p2-crime-fig">
      <div class="p2-map-wrap" id="fig4Wrap" title="Click to enlarge">
        <img src="https://www.mdpi.com/ijgi/ijgi-14-00200/article_deploy/html/images/ijgi-14-00200-g004.png"
             alt="Property crime density across NPAs (by acre) in 2022"
             class="p2-map-img p2-map-img--sm" id="fig4Img">
        <button class="fig2-expand-btn" id="fig4Btn" aria-label="View full size">
          <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <polyline points="3,8 3,3 8,3"/><line x1="3" y1="3" x2="9" y2="9"/>
            <polyline points="12,3 17,3 17,8"/><line x1="17" y1="3" x2="11" y2="9"/>
            <polyline points="3,12 3,17 8,17"/><line x1="3" y1="17" x2="9" y2="11"/>
            <polyline points="17,12 17,17 12,17"/><line x1="17" y1="17" x2="11" y2="11"/>
          </svg>
        </button>
      </div>
      <figcaption>Crime density per acre.</figcaption>
    </figure>
    </div><!-- /.p2-crime-pair-row -->
  </div><!-- /.p2-cell D -->

</div><!-- /.p2-layout -->

<!-- Lightboxes (position:fixed overlays) -->
<div class="fig2-lb" id="fig2Lb" role="dialog" aria-modal="true" aria-label="Street network diversity full size" hidden>
  <div class="fig2-lb-backdrop" id="fig2Backdrop"></div>
  <div class="fig2-lb-box">
    <button class="fig2-lb-close" id="fig2Close" aria-label="Close">&#215;</button>
    <img src="https://www.mdpi.com/ijgi/ijgi-14-00200/article_deploy/html/images/ijgi-14-00200-g002.png"
         alt="Diversity of street networks in the study area"
         class="fig2-lb-img">
    <p class="fig2-lb-cap">Diversity of street networks in the study area</p>
  </div>
</div>
<div class="fig2-lb" id="fig3Lb" role="dialog" aria-modal="true" aria-label="Crime counts full size" hidden>
  <div class="fig2-lb-backdrop" id="fig3Backdrop"></div>
  <div class="fig2-lb-box">
    <button class="fig2-lb-close" id="fig3Close" aria-label="Close">&#215;</button>
    <img src="https://www.mdpi.com/ijgi/ijgi-14-00200/article_deploy/html/images/ijgi-14-00200-g003.png"
         alt="Property crime counts across NPAs in 2022"
         class="fig2-lb-img">
    <p class="fig2-lb-cap">Property crime counts across NPAs in 2022</p>
  </div>
</div>
<div class="fig2-lb" id="fig4Lb" role="dialog" aria-modal="true" aria-label="Crime density full size" hidden>
  <div class="fig2-lb-backdrop" id="fig4Backdrop"></div>
  <div class="fig2-lb-box">
    <button class="fig2-lb-close" id="fig4Close" aria-label="Close">&#215;</button>
    <img src="https://www.mdpi.com/ijgi/ijgi-14-00200/article_deploy/html/images/ijgi-14-00200-g004.png"
         alt="Property crime density across NPAs (by acre) in 2022"
         class="fig2-lb-img">
    <p class="fig2-lb-cap">Property crime density across NPAs, per acre</p>
  </div>
</div>
</div>

<div class="book-page" data-i="2">
<div class="book-kicker">Page 3</div>
<h3>Measuring the Street Network</h3>
<p>For each of the 371 NPAs, eight street-network metrics were computed &mdash; each one capturing a different dimension of how streets connect, flow, and organize within a neighborhood.</p>
<table class="metric-table">
  <tr>
    <td class="mt-icon"><svg viewBox="0 0 50 40" aria-label="Street density">
          <line x1="5"  y1="10" x2="45" y2="10" stroke="currentColor" stroke-width="1.3" stroke-dasharray="40" style="animation:mi-draw 2.8s ease-in-out infinite;animation-delay:0s"/>
          <line x1="5"  y1="18" x2="45" y2="18" stroke="currentColor" stroke-width="1.5" stroke-dasharray="40" style="animation:mi-draw 2.8s ease-in-out infinite;animation-delay:0.2s"/>
          <line x1="5"  y1="26" x2="45" y2="26" stroke="currentColor" stroke-width="1.3" stroke-dasharray="40" style="animation:mi-draw 2.8s ease-in-out infinite;animation-delay:0.4s"/>
          <line x1="5"  y1="34" x2="45" y2="34" stroke="currentColor" stroke-width="1.1" stroke-dasharray="40" style="animation:mi-draw 2.8s ease-in-out infinite;animation-delay:0.6s"/>
          <line x1="13" y1="4"  x2="13" y2="38" stroke="currentColor" stroke-width="1.3" stroke-dasharray="34" style="animation:mi-draw 2.8s ease-in-out infinite;animation-delay:0.1s"/>
          <line x1="23" y1="4"  x2="23" y2="38" stroke="currentColor" stroke-width="1.5" stroke-dasharray="34" style="animation:mi-draw 2.8s ease-in-out infinite;animation-delay:0.3s"/>
          <line x1="33" y1="4"  x2="33" y2="38" stroke="currentColor" stroke-width="1.3" stroke-dasharray="34" style="animation:mi-draw 2.8s ease-in-out infinite;animation-delay:0.5s"/>
          <line x1="43" y1="4"  x2="43" y2="38" stroke="currentColor" stroke-width="1.1" stroke-dasharray="34" style="animation:mi-draw 2.8s ease-in-out infinite;animation-delay:0.7s"/>
          <rect x="3" y="3" width="44" height="34" rx="2" fill="none" stroke="var(--color-accent)" stroke-width="1" stroke-dasharray="3,2" opacity="0.55"/>
        </svg></td>
    <td class="mt-name">Street density</td>
    <td class="mt-desc">Total road length packed into a given area — denser streets mean more route choices within walking distance</td>
  </tr>
  <tr>
    <td class="mt-icon"><svg viewBox="0 0 50 40" aria-label="Intersection density">
          <line x1="5"  y1="14" x2="45" y2="14" stroke="currentColor" stroke-width="1.1" opacity="0.35"/>
          <line x1="5"  y1="28" x2="45" y2="28" stroke="currentColor" stroke-width="1.1" opacity="0.35"/>
          <line x1="16" y1="4"  x2="16" y2="38" stroke="currentColor" stroke-width="1.1" opacity="0.35"/>
          <line x1="28" y1="4"  x2="28" y2="38" stroke="currentColor" stroke-width="1.1" opacity="0.35"/>
          <line x1="40" y1="4"  x2="40" y2="38" stroke="currentColor" stroke-width="1.1" opacity="0.35"/>
          <circle cx="16" cy="14" r="3" fill="var(--color-accent)" style="animation:mi-pulse 2s ease-in-out infinite;animation-delay:0s"/>
          <circle cx="28" cy="14" r="3" fill="var(--color-accent)" style="animation:mi-pulse 2s ease-in-out infinite;animation-delay:0.25s"/>
          <circle cx="40" cy="14" r="3" fill="var(--color-accent)" style="animation:mi-pulse 2s ease-in-out infinite;animation-delay:0.5s"/>
          <circle cx="16" cy="28" r="3" fill="var(--color-accent)" style="animation:mi-pulse 2s ease-in-out infinite;animation-delay:0.75s"/>
          <circle cx="28" cy="28" r="3" fill="var(--color-accent)" style="animation:mi-pulse 2s ease-in-out infinite;animation-delay:1s"/>
          <circle cx="40" cy="28" r="3" fill="var(--color-accent)" style="animation:mi-pulse 2s ease-in-out infinite;animation-delay:1.25s"/>
        </svg></td>
    <td class="mt-name">Intersection density</td>
    <td class="mt-desc">Number of street corners per area — more corners means more ways to navigate without backtracking</td>
  </tr>
  <tr>
    <td class="mt-icon"><svg viewBox="0 0 50 40" aria-label="Avg. node degree">
          <line x1="25" y1="20" x2="8"  y2="8"  stroke="currentColor" stroke-width="1.4" stroke-dasharray="20" style="animation:mi-draw 2.2s ease-in-out infinite;animation-delay:0s"/>
          <line x1="25" y1="20" x2="42" y2="8"  stroke="currentColor" stroke-width="1.4" stroke-dasharray="20" style="animation:mi-draw 2.2s ease-in-out infinite;animation-delay:0.3s"/>
          <line x1="25" y1="20" x2="8"  y2="32" stroke="currentColor" stroke-width="1.4" stroke-dasharray="20" style="animation:mi-draw 2.2s ease-in-out infinite;animation-delay:0.6s"/>
          <line x1="25" y1="20" x2="42" y2="32" stroke="currentColor" stroke-width="1.4" stroke-dasharray="20" style="animation:mi-draw 2.2s ease-in-out infinite;animation-delay:0.9s"/>
          <circle cx="8"  cy="8"  r="3.5" fill="currentColor" opacity="0.35"/>
          <circle cx="42" cy="8"  r="3.5" fill="currentColor" opacity="0.35"/>
          <circle cx="8"  cy="32" r="3.5" fill="currentColor" opacity="0.35"/>
          <circle cx="42" cy="32" r="3.5" fill="currentColor" opacity="0.35"/>
          <circle cx="25" cy="20" r="6.5" fill="var(--color-accent)"/>
          <text x="25" y="23.5" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="700">4</text>
        </svg></td>
    <td class="mt-name">Avg. node degree</td>
    <td class="mt-desc">Average number of roads meeting at each junction — a 4-way cross = full grid, a dead end = 1</td>
  </tr>
  <tr>
    <td class="mt-icon"><svg viewBox="0 0 50 40" aria-label="Avg. clustering coeff.">
          <!-- Node A (center-left) connected to B (top) and C (right) — gray edges always visible -->
          <line x1="10" y1="35" x2="25" y2="7"  stroke="currentColor" stroke-width="1.4" opacity="0.42"/>
          <line x1="10" y1="35" x2="40" y2="35" stroke="currentColor" stroke-width="1.4" opacity="0.42"/>
          <!-- The "closing" B-C edge draws in = neighbors connect = high clustering = triangle! -->
          <line x1="25" y1="7" x2="40" y2="35" stroke="var(--color-accent)" stroke-width="2.4" stroke-dasharray="60" style="animation:mi-draw 3s ease-in-out infinite"/>
          <!-- Node A: gray (ego node) -->
          <circle cx="10" cy="35" r="4.5" fill="currentColor" opacity="0.48"/>
          <!-- Nodes B and C pulse when triangle closes -->
          <circle cx="25" cy="7"  r="4.5" fill="var(--color-accent)" style="animation:mi-pulse 3s ease-in-out infinite;animation-delay:1.8s"/>
          <circle cx="40" cy="35" r="4.5" fill="var(--color-accent)" style="animation:mi-pulse 3s ease-in-out infinite;animation-delay:2s"/>
        </svg></td>
    <td class="mt-name">Avg. clustering coeff.</td>
    <td class="mt-desc">Are your neighbors connected to each other? High = tightly-knit grid blocks; low = branching cul-de-sacs</td>
  </tr>
  <tr>
    <td class="mt-icon"><svg viewBox="0 0 50 40" aria-label="Avg. shortest path">
          <line x1="9"  y1="20" x2="19" y2="10" stroke="currentColor" stroke-width="1" opacity="0.28"/>
          <line x1="19" y1="10" x2="32" y2="15" stroke="currentColor" stroke-width="1" opacity="0.28"/>
          <line x1="32" y1="15" x2="41" y2="20" stroke="currentColor" stroke-width="1" opacity="0.28"/>
          <line x1="9"  y1="20" x2="21" y2="30" stroke="var(--color-accent)" stroke-width="2" stroke-dasharray="90" style="animation:mi-travel 2.6s ease-in-out infinite;animation-delay:0s"/>
          <line x1="21" y1="30" x2="33" y2="26" stroke="var(--color-accent)" stroke-width="2" stroke-dasharray="90" style="animation:mi-travel 2.6s ease-in-out infinite;animation-delay:0.18s"/>
          <line x1="33" y1="26" x2="41" y2="20" stroke="var(--color-accent)" stroke-width="2" stroke-dasharray="90" style="animation:mi-travel 2.6s ease-in-out infinite;animation-delay:0.35s"/>
          <circle cx="9"  cy="20" r="4"   fill="var(--color-accent)"/>
          <circle cx="19" cy="10" r="2.5" fill="currentColor" opacity="0.32"/>
          <circle cx="21" cy="30" r="3"   fill="currentColor" opacity="0.6"/>
          <circle cx="32" cy="15" r="2.5" fill="currentColor" opacity="0.32"/>
          <circle cx="33" cy="26" r="3"   fill="currentColor" opacity="0.6"/>
          <circle cx="41" cy="20" r="4"   fill="var(--color-accent)"/>
        </svg></td>
    <td class="mt-name">Avg. shortest path</td>
    <td class="mt-desc">Typical number of steps to travel across the whole network — shorter = easier to reach any destination</td>
  </tr>
  <tr>
    <td class="mt-icon"><svg viewBox="0 0 50 40" aria-label="Avg. betweenness">
          <line x1="8"  y1="11" x2="20" y2="20" stroke="currentColor" stroke-width="1.2" opacity="0.5"/>
          <line x1="8"  y1="29" x2="20" y2="20" stroke="currentColor" stroke-width="1.2" opacity="0.5"/>
          <line x1="8"  y1="11" x2="8"  y2="29" stroke="currentColor" stroke-width="1"   opacity="0.28"/>
          <line x1="20" y1="20" x2="30" y2="20" stroke="var(--color-accent)" stroke-width="2.5" style="animation:mi-pulse 1.8s ease-in-out infinite"/>
          <line x1="30" y1="20" x2="42" y2="11" stroke="currentColor" stroke-width="1.2" opacity="0.5"/>
          <line x1="30" y1="20" x2="42" y2="29" stroke="currentColor" stroke-width="1.2" opacity="0.5"/>
          <line x1="42" y1="11" x2="42" y2="29" stroke="currentColor" stroke-width="1"   opacity="0.28"/>
          <circle cx="8"  cy="11" r="2.5" fill="currentColor" opacity="0.45"/>
          <circle cx="8"  cy="29" r="2.5" fill="currentColor" opacity="0.45"/>
          <circle cx="20" cy="20" r="5"   fill="var(--color-accent)" style="animation:mi-pulse 1.8s ease-in-out infinite"/>
          <circle cx="30" cy="20" r="5"   fill="var(--color-accent)" style="animation:mi-pulse 1.8s ease-in-out infinite"/>
          <circle cx="42" cy="11" r="2.5" fill="currentColor" opacity="0.45"/>
          <circle cx="42" cy="29" r="2.5" fill="currentColor" opacity="0.45"/>
        </svg></td>
    <td class="mt-name">Avg. betweenness</td>
    <td class="mt-desc">Which intersections are unavoidable chokepoints that most routes must pass through — like a bridge on an island</td>
  </tr>
  <tr>
    <td class="mt-icon"><svg viewBox="0 0 50 40" aria-label="Avg. closeness">
          <!-- 6 static spokes from hub to outer nodes -->
          <line x1="25" y1="20" x2="25" y2="5"  stroke="currentColor" stroke-width="1.2" opacity="0.38"/>
          <line x1="25" y1="20" x2="42" y2="12" stroke="currentColor" stroke-width="1.2" opacity="0.38"/>
          <line x1="25" y1="20" x2="42" y2="30" stroke="currentColor" stroke-width="1.2" opacity="0.38"/>
          <line x1="25" y1="20" x2="25" y2="37" stroke="currentColor" stroke-width="1.2" opacity="0.38"/>
          <line x1="25" y1="20" x2="8"  y2="30" stroke="currentColor" stroke-width="1.2" opacity="0.38"/>
          <line x1="25" y1="20" x2="8"  y2="12" stroke="currentColor" stroke-width="1.2" opacity="0.38"/>
          <!-- Outer nodes flash in rapid sequence = hub reaches ALL in one hop = high closeness -->
          <circle cx="25" cy="5"  r="3" fill="var(--color-accent)" opacity="0.2" style="animation:mi-flash 2.4s ease-in-out infinite;animation-delay:0.55s"/>
          <circle cx="42" cy="12" r="3" fill="var(--color-accent)" opacity="0.2" style="animation:mi-flash 2.4s ease-in-out infinite;animation-delay:0.70s"/>
          <circle cx="42" cy="30" r="3" fill="var(--color-accent)" opacity="0.2" style="animation:mi-flash 2.4s ease-in-out infinite;animation-delay:0.85s"/>
          <circle cx="25" cy="37" r="3" fill="var(--color-accent)" opacity="0.2" style="animation:mi-flash 2.4s ease-in-out infinite;animation-delay:1.00s"/>
          <circle cx="8"  cy="30" r="3" fill="var(--color-accent)" opacity="0.2" style="animation:mi-flash 2.4s ease-in-out infinite;animation-delay:1.15s"/>
          <circle cx="8"  cy="12" r="3" fill="var(--color-accent)" opacity="0.2" style="animation:mi-flash 2.4s ease-in-out infinite;animation-delay:1.30s"/>
          <!-- Center hub pulses to "send" signal — one pulse, all reached quickly -->
          <circle cx="25" cy="20" r="6.5" fill="var(--color-accent)" style="animation:mi-pulse 2.4s ease-in-out infinite"/>
        </svg></td>
    <td class="mt-name">Avg. closeness</td>
    <td class="mt-desc">How quickly any corner can reach every other point — high = central hub, low = tucked-away dead end</td>
  </tr>
  <tr>
    <td class="mt-icon"><svg viewBox="0 0 50 40" aria-label="Avg. PageRank">
          <defs>
            <marker id="prArr3" markerWidth="5" markerHeight="4" refX="4" refY="2" orient="auto">
              <path d="M0,0 L5,2 L0,4 Z" fill="var(--color-accent)" opacity="0.85"/>
            </marker>
          </defs>
          <!-- Peripheral nodes of varying sizes (their own rank) -->
          <circle cx="8"  cy="8"  r="3.5" fill="currentColor" opacity="0.45"/>
          <circle cx="26" cy="4"  r="2.5" fill="currentColor" opacity="0.35"/>
          <circle cx="44" cy="10" r="4"   fill="currentColor" opacity="0.5"/>
          <circle cx="44" cy="30" r="2.5" fill="currentColor" opacity="0.35"/>
          <circle cx="12" cy="32" r="3"   fill="currentColor" opacity="0.4"/>
          <!-- Arrows draw in FROM periphery TOWARD center, one by one = incoming links accumulate rank -->
          <line x1="12" y1="11" x2="20" y2="16" stroke="var(--color-accent)" stroke-width="1.7" marker-end="url(#prArr3)" stroke-dasharray="60" style="animation:mi-draw 3.2s ease-in-out infinite;animation-delay:0s"/>
          <line x1="26" y1="7"  x2="26" y2="15" stroke="var(--color-accent)" stroke-width="1.7" marker-end="url(#prArr3)" stroke-dasharray="60" style="animation:mi-draw 3.2s ease-in-out infinite;animation-delay:0.4s"/>
          <line x1="40" y1="12" x2="31" y2="17" stroke="var(--color-accent)" stroke-width="1.7" marker-end="url(#prArr3)" stroke-dasharray="60" style="animation:mi-draw 3.2s ease-in-out infinite;animation-delay:0.8s"/>
          <line x1="41" y1="28" x2="32" y2="22" stroke="var(--color-accent)" stroke-width="1.7" marker-end="url(#prArr3)" stroke-dasharray="60" style="animation:mi-draw 3.2s ease-in-out infinite;animation-delay:1.2s"/>
          <line x1="15" y1="31" x2="21" y2="24" stroke="var(--color-accent)" stroke-width="1.7" marker-end="url(#prArr3)" stroke-dasharray="60" style="animation:mi-draw 3.2s ease-in-out infinite;animation-delay:1.6s"/>
          <!-- Center node: largest, pulses as rank accumulates from all incoming links -->
          <circle cx="26" cy="20" r="7" fill="var(--color-accent)" style="animation:mi-pulse 3.2s ease-in-out infinite;animation-delay:2.2s"/>
        </svg></td>
    <td class="mt-name">Avg. PageRank</td>
    <td class="mt-desc">Which intersections attract the most traffic — scored by how many important roads lead into them, like Google's ranking</td>
  </tr>
</table>
</div>

<div class="book-page" data-i="3">
<div class="book-kicker">Page 4</div>
<h3>From 8 Metrics to 40 Variables</h3>
<p>Each street-network metric was computed not just <em>inside</em> each NPA boundary, but also at <strong>five buffer distances</strong> around every NPA centroid — 0.1, 0.25, 0.5, 0.75, and 1 mile — capturing how the surrounding street environment changes with scale. This yields <strong>8&nbsp;metrics&nbsp;&times;&nbsp;5&nbsp;distances&nbsp;=&nbsp;40&nbsp;variables</strong> per neighborhood. Because these 40 variables are highly collinear, PCA condensed them to <strong>four independent components</strong> capturing <strong>70% of the variance</strong>.</p>
<div class="measure-layout">
  <div>
    <svg viewBox="0 0 300 285" class="measure-svg" aria-label="Urban street network with NPA overlaid; buffer rings grow and highlight enclosed edges and nodes">
      <!-- ══ 1. BASE GRID (dim, full coverage, no diagonals) ══════════════ -->
      <g style="animation:net-fade 12s ease-in-out infinite" fill="none"
         stroke="var(--color-text-muted)">
        <!-- major horizontals -->
        <g stroke-width="1.2" opacity="0.45">
        <line x1="0" y1="44" x2="300" y2="44" stroke-width="1.2" opacity="0.45"/>
        <line x1="0" y1="100" x2="300" y2="100" stroke-width="1.2" opacity="0.45"/>
        <line x1="0" y1="142" x2="300" y2="142" stroke-width="1.2" opacity="0.45"/>
        <line x1="0" y1="184" x2="300" y2="184" stroke-width="1.2" opacity="0.45"/>
        <line x1="0" y1="234" x2="300" y2="234" stroke-width="1.2" opacity="0.45"/>
        </g>
        <!-- major verticals -->
        <g stroke-width="1.2" opacity="0.45">
        <line x1="55" y1="0" x2="55" y2="285" stroke-width="1.2" opacity="0.45"/>
        <line x1="110" y1="0" x2="110" y2="285" stroke-width="1.2" opacity="0.45"/>
        <line x1="150" y1="0" x2="150" y2="285" stroke-width="1.2" opacity="0.45"/>
        <line x1="190" y1="0" x2="190" y2="285" stroke-width="1.2" opacity="0.45"/>
        <line x1="245" y1="0" x2="245" y2="285" stroke-width="1.2" opacity="0.45"/>
        </g>
        <!-- minor horizontals -->
        <g stroke-width="0.6" opacity="0.28">
        <line x1="0" y1="12" x2="300" y2="12" stroke-width="0.6" opacity="0.28"/>
        <line x1="0" y1="72" x2="300" y2="72" stroke-width="0.6" opacity="0.28"/>
        <line x1="0" y1="120" x2="300" y2="120" stroke-width="0.6" opacity="0.28"/>
        <line x1="0" y1="163" x2="300" y2="163" stroke-width="0.6" opacity="0.28"/>
        <line x1="0" y1="210" x2="300" y2="210" stroke-width="0.6" opacity="0.28"/>
        <line x1="0" y1="260" x2="300" y2="260" stroke-width="0.6" opacity="0.28"/>
        </g>
        <!-- minor verticals -->
        <g stroke-width="0.6" opacity="0.28">
        <line x1="20" y1="0" x2="20" y2="285" stroke-width="0.6" opacity="0.28"/>
        <line x1="82" y1="0" x2="82" y2="285" stroke-width="0.6" opacity="0.28"/>
        <line x1="128" y1="0" x2="128" y2="285" stroke-width="0.6" opacity="0.28"/>
        <line x1="172" y1="0" x2="172" y2="285" stroke-width="0.6" opacity="0.28"/>
        <line x1="220" y1="0" x2="220" y2="285" stroke-width="0.6" opacity="0.28"/>
        <line x1="274" y1="0" x2="274" y2="285" stroke-width="0.6" opacity="0.28"/>
        </g>
        <!-- dim intersection nodes -->
        <g stroke="none" fill="var(--color-text-muted)" opacity="0.55">
        <circle cx="55" cy="44" r="1.8"/>
        <circle cx="110" cy="44" r="1.8"/>
        <circle cx="150" cy="44" r="1.8"/>
        <circle cx="190" cy="44" r="1.8"/>
        <circle cx="245" cy="44" r="1.8"/>
        <circle cx="55" cy="100" r="1.8"/>
        <circle cx="110" cy="100" r="1.8"/>
        <circle cx="150" cy="100" r="1.8"/>
        <circle cx="190" cy="100" r="1.8"/>
        <circle cx="245" cy="100" r="1.8"/>
        <circle cx="55" cy="142" r="1.8"/>
        <circle cx="110" cy="142" r="1.8"/>
        <circle cx="150" cy="142" r="1.8"/>
        <circle cx="190" cy="142" r="1.8"/>
        <circle cx="245" cy="142" r="1.8"/>
        <circle cx="55" cy="184" r="1.8"/>
        <circle cx="110" cy="184" r="1.8"/>
        <circle cx="150" cy="184" r="1.8"/>
        <circle cx="190" cy="184" r="1.8"/>
        <circle cx="245" cy="184" r="1.8"/>
        <circle cx="55" cy="234" r="1.8"/>
        <circle cx="110" cy="234" r="1.8"/>
        <circle cx="150" cy="234" r="1.8"/>
        <circle cx="190" cy="234" r="1.8"/>
        <circle cx="245" cy="234" r="1.8"/>
        <circle cx="20" cy="44" r="1.3"/>
        <circle cx="82" cy="44" r="1.3"/>
        <circle cx="128" cy="44" r="1.3"/>
        <circle cx="172" cy="44" r="1.3"/>
        <circle cx="220" cy="44" r="1.3"/>
        <circle cx="274" cy="44" r="1.3"/>
        <circle cx="20" cy="100" r="1.3"/>
        <circle cx="82" cy="100" r="1.3"/>
        <circle cx="128" cy="100" r="1.3"/>
        <circle cx="172" cy="100" r="1.3"/>
        <circle cx="220" cy="100" r="1.3"/>
        <circle cx="274" cy="100" r="1.3"/>
        <circle cx="20" cy="142" r="1.3"/>
        <circle cx="82" cy="142" r="1.3"/>
        <circle cx="128" cy="142" r="1.3"/>
        <circle cx="172" cy="142" r="1.3"/>
        <circle cx="220" cy="142" r="1.3"/>
        <circle cx="274" cy="142" r="1.3"/>
        <circle cx="20" cy="184" r="1.3"/>
        <circle cx="82" cy="184" r="1.3"/>
        <circle cx="128" cy="184" r="1.3"/>
        <circle cx="172" cy="184" r="1.3"/>
        <circle cx="220" cy="184" r="1.3"/>
        <circle cx="274" cy="184" r="1.3"/>
        <circle cx="20" cy="234" r="1.3"/>
        <circle cx="82" cy="234" r="1.3"/>
        <circle cx="128" cy="234" r="1.3"/>
        <circle cx="172" cy="234" r="1.3"/>
        <circle cx="220" cy="234" r="1.3"/>
        <circle cx="274" cy="234" r="1.3"/>
        <circle cx="55" cy="12" r="1.3"/>
        <circle cx="110" cy="12" r="1.3"/>
        <circle cx="150" cy="12" r="1.3"/>
        <circle cx="190" cy="12" r="1.3"/>
        <circle cx="245" cy="12" r="1.3"/>
        <circle cx="55" cy="72" r="1.3"/>
        <circle cx="110" cy="72" r="1.3"/>
        <circle cx="150" cy="72" r="1.3"/>
        <circle cx="190" cy="72" r="1.3"/>
        <circle cx="245" cy="72" r="1.3"/>
        <circle cx="55" cy="120" r="1.3"/>
        <circle cx="110" cy="120" r="1.3"/>
        <circle cx="150" cy="120" r="1.3"/>
        <circle cx="190" cy="120" r="1.3"/>
        <circle cx="245" cy="120" r="1.3"/>
        <circle cx="55" cy="163" r="1.3"/>
        <circle cx="110" cy="163" r="1.3"/>
        <circle cx="150" cy="163" r="1.3"/>
        <circle cx="190" cy="163" r="1.3"/>
        <circle cx="245" cy="163" r="1.3"/>
        <circle cx="55" cy="210" r="1.3"/>
        <circle cx="110" cy="210" r="1.3"/>
        <circle cx="150" cy="210" r="1.3"/>
        <circle cx="190" cy="210" r="1.3"/>
        <circle cx="245" cy="210" r="1.3"/>
        <circle cx="55" cy="260" r="1.3"/>
        <circle cx="110" cy="260" r="1.3"/>
        <circle cx="150" cy="260" r="1.3"/>
        <circle cx="190" cy="260" r="1.3"/>
        <circle cx="245" cy="260" r="1.3"/>
        </g>
      </g>
      <!-- ══ 2. BOLD HIGHLIGHT (accent, clip-path expands with rings) ════ -->
      <!--
        CSS clip-path:circle() grows in sync with each buffer ring.
        16%→32%: r grows 0→28px (ring 1 drawing)
        32%→44%: r grows 28→56px (ring 2 drawing)
        44%→54%: r grows 56→86px (ring 3 drawing)
        54%→64%: r grows 86→113px (ring 4 drawing)
        64%→74%: r grows 113→136px (ring 5 drawing)
      -->
      <g style="animation:bold-clip 12s ease-in-out infinite"
         stroke="var(--color-accent)" stroke-width="1.6" fill="none">
        <!-- major horizontals bold -->
        <line x1="0" y1="44" x2="300" y2="44" stroke-width="1.6" opacity="1"/>
        <line x1="0" y1="100" x2="300" y2="100" stroke-width="1.6" opacity="1"/>
        <line x1="0" y1="142" x2="300" y2="142" stroke-width="1.6" opacity="1"/>
        <line x1="0" y1="184" x2="300" y2="184" stroke-width="1.6" opacity="1"/>
        <line x1="0" y1="234" x2="300" y2="234" stroke-width="1.6" opacity="1"/>
        <!-- major verticals bold -->
        <line x1="55" y1="0" x2="55" y2="285" stroke-width="1.6" opacity="1"/>
        <line x1="110" y1="0" x2="110" y2="285" stroke-width="1.6" opacity="1"/>
        <line x1="150" y1="0" x2="150" y2="285" stroke-width="1.6" opacity="1"/>
        <line x1="190" y1="0" x2="190" y2="285" stroke-width="1.6" opacity="1"/>
        <line x1="245" y1="0" x2="245" y2="285" stroke-width="1.6" opacity="1"/>
        <!-- minor horizontals bold -->
        <line x1="0" y1="12" x2="300" y2="12" stroke-width="0.9" opacity="0.75"/>
        <line x1="0" y1="72" x2="300" y2="72" stroke-width="0.9" opacity="0.75"/>
        <line x1="0" y1="120" x2="300" y2="120" stroke-width="0.9" opacity="0.75"/>
        <line x1="0" y1="163" x2="300" y2="163" stroke-width="0.9" opacity="0.75"/>
        <line x1="0" y1="210" x2="300" y2="210" stroke-width="0.9" opacity="0.75"/>
        <line x1="0" y1="260" x2="300" y2="260" stroke-width="0.9" opacity="0.75"/>
        <!-- minor verticals bold -->
        <line x1="20" y1="0" x2="20" y2="285" stroke-width="0.9" opacity="0.75"/>
        <line x1="82" y1="0" x2="82" y2="285" stroke-width="0.9" opacity="0.75"/>
        <line x1="128" y1="0" x2="128" y2="285" stroke-width="0.9" opacity="0.75"/>
        <line x1="172" y1="0" x2="172" y2="285" stroke-width="0.9" opacity="0.75"/>
        <line x1="220" y1="0" x2="220" y2="285" stroke-width="0.9" opacity="0.75"/>
        <line x1="274" y1="0" x2="274" y2="285" stroke-width="0.9" opacity="0.75"/>
        <!-- bold intersection nodes -->
        <g stroke="none" fill="var(--color-accent)">
        <circle cx="55" cy="44" r="1.8"/>
        <circle cx="110" cy="44" r="1.8"/>
        <circle cx="150" cy="44" r="1.8"/>
        <circle cx="190" cy="44" r="1.8"/>
        <circle cx="245" cy="44" r="1.8"/>
        <circle cx="20" cy="44" r="1.3"/>
        <circle cx="82" cy="44" r="1.3"/>
        <circle cx="128" cy="44" r="1.3"/>
        <circle cx="172" cy="44" r="1.3"/>
        <circle cx="220" cy="44" r="1.3"/>
        <circle cx="274" cy="44" r="1.3"/>
        <circle cx="55" cy="100" r="1.8"/>
        <circle cx="110" cy="100" r="1.8"/>
        <circle cx="150" cy="100" r="1.8"/>
        <circle cx="190" cy="100" r="1.8"/>
        <circle cx="245" cy="100" r="1.8"/>
        <circle cx="20" cy="100" r="1.3"/>
        <circle cx="82" cy="100" r="1.3"/>
        <circle cx="128" cy="100" r="1.3"/>
        <circle cx="172" cy="100" r="1.3"/>
        <circle cx="220" cy="100" r="1.3"/>
        <circle cx="274" cy="100" r="1.3"/>
        <circle cx="55" cy="142" r="1.8"/>
        <circle cx="110" cy="142" r="1.8"/>
        <circle cx="150" cy="142" r="1.8"/>
        <circle cx="190" cy="142" r="1.8"/>
        <circle cx="245" cy="142" r="1.8"/>
        <circle cx="20" cy="142" r="1.3"/>
        <circle cx="82" cy="142" r="1.3"/>
        <circle cx="128" cy="142" r="1.3"/>
        <circle cx="172" cy="142" r="1.3"/>
        <circle cx="220" cy="142" r="1.3"/>
        <circle cx="274" cy="142" r="1.3"/>
        <circle cx="55" cy="184" r="1.8"/>
        <circle cx="110" cy="184" r="1.8"/>
        <circle cx="150" cy="184" r="1.8"/>
        <circle cx="190" cy="184" r="1.8"/>
        <circle cx="245" cy="184" r="1.8"/>
        <circle cx="20" cy="184" r="1.3"/>
        <circle cx="82" cy="184" r="1.3"/>
        <circle cx="128" cy="184" r="1.3"/>
        <circle cx="172" cy="184" r="1.3"/>
        <circle cx="220" cy="184" r="1.3"/>
        <circle cx="274" cy="184" r="1.3"/>
        <circle cx="55" cy="234" r="1.8"/>
        <circle cx="110" cy="234" r="1.8"/>
        <circle cx="150" cy="234" r="1.8"/>
        <circle cx="190" cy="234" r="1.8"/>
        <circle cx="245" cy="234" r="1.8"/>
        <circle cx="20" cy="234" r="1.3"/>
        <circle cx="82" cy="234" r="1.3"/>
        <circle cx="128" cy="234" r="1.3"/>
        <circle cx="172" cy="234" r="1.3"/>
        <circle cx="220" cy="234" r="1.3"/>
        <circle cx="274" cy="234" r="1.3"/>
        <circle cx="55" cy="12" r="1.3"/>
        <circle cx="110" cy="12" r="1.3"/>
        <circle cx="150" cy="12" r="1.3"/>
        <circle cx="190" cy="12" r="1.3"/>
        <circle cx="245" cy="12" r="1.3"/>
        <circle cx="20" cy="12" r="1.0"/>
        <circle cx="82" cy="12" r="1.0"/>
        <circle cx="128" cy="12" r="1.0"/>
        <circle cx="172" cy="12" r="1.0"/>
        <circle cx="220" cy="12" r="1.0"/>
        <circle cx="274" cy="12" r="1.0"/>
        <circle cx="55" cy="72" r="1.3"/>
        <circle cx="110" cy="72" r="1.3"/>
        <circle cx="150" cy="72" r="1.3"/>
        <circle cx="190" cy="72" r="1.3"/>
        <circle cx="245" cy="72" r="1.3"/>
        <circle cx="20" cy="72" r="1.0"/>
        <circle cx="82" cy="72" r="1.0"/>
        <circle cx="128" cy="72" r="1.0"/>
        <circle cx="172" cy="72" r="1.0"/>
        <circle cx="220" cy="72" r="1.0"/>
        <circle cx="274" cy="72" r="1.0"/>
        <circle cx="55" cy="120" r="1.3"/>
        <circle cx="110" cy="120" r="1.3"/>
        <circle cx="150" cy="120" r="1.3"/>
        <circle cx="190" cy="120" r="1.3"/>
        <circle cx="245" cy="120" r="1.3"/>
        <circle cx="20" cy="120" r="1.0"/>
        <circle cx="82" cy="120" r="1.0"/>
        <circle cx="128" cy="120" r="1.0"/>
        <circle cx="172" cy="120" r="1.0"/>
        <circle cx="220" cy="120" r="1.0"/>
        <circle cx="274" cy="120" r="1.0"/>
        <circle cx="55" cy="163" r="1.3"/>
        <circle cx="110" cy="163" r="1.3"/>
        <circle cx="150" cy="163" r="1.3"/>
        <circle cx="190" cy="163" r="1.3"/>
        <circle cx="245" cy="163" r="1.3"/>
        <circle cx="20" cy="163" r="1.0"/>
        <circle cx="82" cy="163" r="1.0"/>
        <circle cx="128" cy="163" r="1.0"/>
        <circle cx="172" cy="163" r="1.0"/>
        <circle cx="220" cy="163" r="1.0"/>
        <circle cx="274" cy="163" r="1.0"/>
        <circle cx="55" cy="210" r="1.3"/>
        <circle cx="110" cy="210" r="1.3"/>
        <circle cx="150" cy="210" r="1.3"/>
        <circle cx="190" cy="210" r="1.3"/>
        <circle cx="245" cy="210" r="1.3"/>
        <circle cx="20" cy="210" r="1.0"/>
        <circle cx="82" cy="210" r="1.0"/>
        <circle cx="128" cy="210" r="1.0"/>
        <circle cx="172" cy="210" r="1.0"/>
        <circle cx="220" cy="210" r="1.0"/>
        <circle cx="274" cy="210" r="1.0"/>
        <circle cx="55" cy="260" r="1.3"/>
        <circle cx="110" cy="260" r="1.3"/>
        <circle cx="150" cy="260" r="1.3"/>
        <circle cx="190" cy="260" r="1.3"/>
        <circle cx="245" cy="260" r="1.3"/>
        <circle cx="20" cy="260" r="1.0"/>
        <circle cx="82" cy="260" r="1.0"/>
        <circle cx="128" cy="260" r="1.0"/>
        <circle cx="172" cy="260" r="1.0"/>
        <circle cx="220" cy="260" r="1.0"/>
        <circle cx="274" cy="260" r="1.0"/>
        </g>
      </g>
      <!-- ══ 3. NPA POLYGON ════════════════════════════════════════════════ -->
      <g style="animation:buf-npa 12s ease-in-out infinite">
        <polygon points="132,131 163,125 170,149 138,157"
          fill="var(--color-accent)" opacity="0.30"
          stroke="var(--color-accent)" stroke-width="2" stroke-linejoin="round"/>
        <text x="151" y="143" text-anchor="middle" font-size="6.5"
          fill="var(--color-accent)" font-weight="700" opacity="0.95">NPA</text>
      </g>
      <!-- ══ 4. BUFFER RINGS ════════════════════════════════════════════════ -->
      <!-- Ring 1 · 0.1 mi · r=28 -->
      <circle cx="150" cy="142" r="28"  fill="none" stroke="var(--color-accent)" stroke-width="1.8" stroke-dasharray="176" stroke-dashoffset="176" style="animation:buf-r1 12s ease-in-out infinite"/>
      <!-- Ring 2 · 0.25 mi · r=56 -->
      <circle cx="150" cy="142" r="56"  fill="none" stroke="var(--color-border)" stroke-width="1.3" stroke-dasharray="352" stroke-dashoffset="352" style="animation:buf-r2 12s ease-in-out infinite"/>
      <!-- Ring 3 · 0.5 mi · r=86 -->
      <circle cx="150" cy="142" r="86"  fill="none" stroke="var(--color-border)" stroke-width="1.3" stroke-dasharray="540" stroke-dashoffset="540" style="animation:buf-r3 12s ease-in-out infinite"/>
      <!-- Ring 4 · 0.75 mi · r=113 -->
      <circle cx="150" cy="142" r="113" fill="none" stroke="var(--color-border)" stroke-width="1"   stroke-dasharray="710" stroke-dashoffset="710" style="animation:buf-r4 12s ease-in-out infinite"/>
      <!-- Ring 5 · 1 mi · r=136 -->
      <circle cx="150" cy="142" r="136" fill="none" stroke="var(--color-border)" stroke-width="1"   stroke-dasharray="854" stroke-dashoffset="854" style="animation:buf-r5 12s ease-in-out infinite"/>
      <!-- ══ 5. DISTANCE LABELS ════════════════════════════════════════════ -->
      <text x="181" y="117" font-size="7.5" fill="var(--color-text-muted)" style="animation:buf-lbl 12s ease-in-out infinite">0.1 mi</text>
      <text x="207" y="99"  font-size="7.5" fill="var(--color-text-muted)" style="animation:buf-lbl 12s ease-in-out infinite">0.25 mi</text>
      <text x="226" y="74"  font-size="7.5" fill="var(--color-text-muted)" style="animation:buf-lbl 12s ease-in-out infinite">0.5 mi</text>
      <text x="244" y="50"  font-size="7.5" fill="var(--color-text-muted)" style="animation:buf-lbl 12s ease-in-out infinite">0.75 mi</text>
      <text x="261" y="26"  font-size="7.5" fill="var(--color-text-muted)" style="animation:buf-lbl 12s ease-in-out infinite">1 mi</text>
    </svg>
    <p class="buf-eq">8 metrics &times; 5 buffers&nbsp;=&nbsp;<strong class="buf-eq-n">40 variables</strong></p>
  </div>
</div>

<style>
.app-pca{margin-top:1.1rem;border-top:1px solid rgba(255,255,255,0.12);padding-top:0.9rem}
.app-head{font-size:0.73rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;opacity:.6;margin:0 0 .8rem}
.app-row-top{display:grid;grid-template-columns:1fr 1.05fr;gap:1rem;margin-bottom:1rem}
.app-cap{font-size:.67rem;font-weight:600;opacity:.55;margin-bottom:.35rem;display:block}
.app-tbl{width:100%;border-collapse:collapse;font-size:.7rem}
.app-tbl th{text-align:left;padding:2px 5px;border-bottom:1px solid rgba(255,255,255,0.18);opacity:.7;font-weight:600;font-size:.65rem;white-space:nowrap}
.app-tbl td{padding:2px 5px;border-bottom:1px solid rgba(255,255,255,0.05);white-space:nowrap}
.app-tbl-scroll{max-height:190px;overflow-y:auto;border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:2px}
.app-tbl-sm{font-size:.63rem}
.app-fig-full{margin-bottom:.9rem}
.app-scree,.app-heatmap{width:100%;height:auto}
</style>
<div class="app-pca">
<div class="app-row-top">
  <!-- A1: Scree plot -->
  <figure style="margin:0">
    <span class="app-cap">A1 — Scree plot: eigenvalues of the 40-variable correlation matrix</span>
    <svg viewBox="0 0 260 170" class="app-scree" style="width:100%;height:auto;overflow:visible">
  <!-- Y axis -->
  <line x1="42" y1="10" x2="42" y2="140" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
  <!-- X axis -->
  <line x1="42" y1="140" x2="252" y2="140" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
  <!-- gridlines + ticks -->
  <text x="39" y="143.0" text-anchor="end" font-size="7.5" opacity="0.55">0</text><line x1="42" y1="140.0" x2="252" y2="140.0" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/><text x="39" y="124.4" text-anchor="end" font-size="7.5" opacity="0.55">2</text><line x1="42" y1="121.4" x2="252" y2="121.4" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/><text x="39" y="105.9" text-anchor="end" font-size="7.5" opacity="0.55">4</text><line x1="42" y1="102.9" x2="252" y2="102.9" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/><text x="39" y="87.3" text-anchor="end" font-size="7.5" opacity="0.55">6</text><line x1="42" y1="84.3" x2="252" y2="84.3" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/><text x="39" y="68.7" text-anchor="end" font-size="7.5" opacity="0.55">8</text><line x1="42" y1="65.7" x2="252" y2="65.7" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/><text x="39" y="50.1" text-anchor="end" font-size="7.5" opacity="0.55">10</text><line x1="42" y1="47.1" x2="252" y2="47.1" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/><text x="39" y="31.6" text-anchor="end" font-size="7.5" opacity="0.55">12</text><line x1="42" y1="28.6" x2="252" y2="28.6" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/><text x="39" y="13.0" text-anchor="end" font-size="7.5" opacity="0.55">14</text><line x1="42" y1="10.0" x2="252" y2="10.0" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/>
  <text x="42.0" y="154" text-anchor="middle" font-size="7.5" opacity="0.65">1</text><text x="61.1" y="154" text-anchor="middle" font-size="7.5" opacity="0.65">2</text><text x="80.2" y="154" text-anchor="middle" font-size="7.5" opacity="0.65">3</text><text x="99.3" y="154" text-anchor="middle" font-size="7.5" opacity="0.65">4</text><text x="118.4" y="154" text-anchor="middle" font-size="7.5" opacity="0.65">5</text><text x="137.5" y="154" text-anchor="middle" font-size="7.5" opacity="0.65">6</text><text x="156.5" y="154" text-anchor="middle" font-size="7.5" opacity="0.65">7</text><text x="175.6" y="154" text-anchor="middle" font-size="7.5" opacity="0.65">8</text><text x="194.7" y="154" text-anchor="middle" font-size="7.5" opacity="0.65">9</text><text x="213.8" y="154" text-anchor="middle" font-size="7.5" opacity="0.65">10</text><text x="232.9" y="154" text-anchor="middle" font-size="7.5" opacity="0.65">11</text><text x="252.0" y="154" text-anchor="middle" font-size="7.5" opacity="0.65">12</text>
  <!-- X axis label -->
  <text x="147.0" y="170" text-anchor="middle" font-size="8" opacity="0.6">Component</text>
  <!-- Y axis label -->
  <text x="8" y="75.0" text-anchor="middle" font-size="8" opacity="0.6" transform="rotate(-90,8,75.0)">Eigenvalue</text>
  <!-- Kaiser line -->
  <line x1="42" y1="130.7" x2="252" y2="130.7" stroke="#E07030" stroke-width="0.9" stroke-dasharray="3,2" opacity="0.6"/>
  <text x="254" y="133.7" font-size="6.5" fill="#E07030" opacity="0.8">Kaiser=1</text>
  <!-- Elbow annotation: PC4 shaded region -->
  <rect x="42" y="10" width="57.3" height="130" fill="var(--color-accent,#E07030)" opacity="0.04" rx="2"/>
  <line x1="99.3" y1="10" x2="99.3" y2="140" stroke="var(--color-accent,#E07030)" stroke-width="0.9" stroke-dasharray="3,2" opacity="0.5"/>
  <text x="97.3" y="19" text-anchor="end" font-size="7" fill="var(--color-accent,#E07030)" opacity="0.85">n=4 retained</text>
  <!-- Main scree line -->
  <polyline points="42.0,17.5 61.1,44.2 80.2,89.6 99.3,110.6 118.4,124.8 137.5,129.7 156.5,131.9 175.6,133.2 194.7,133.9 213.8,135.9 232.9,137.2 252.0,137.4" fill="none" stroke="var(--color-text,#ccc)" stroke-width="1.4" opacity="0.8" stroke-linejoin="round"/>
  <!-- Dots -->
  <circle cx="42.0" cy="17.5" r="2.2" fill="var(--color-accent,#E07030)" opacity="0.9"/><circle cx="61.1" cy="44.2" r="2.2" fill="var(--color-accent,#E07030)" opacity="0.9"/><circle cx="80.2" cy="89.6" r="2.2" fill="var(--color-accent,#E07030)" opacity="0.9"/><circle cx="99.3" cy="110.6" r="2.2" fill="var(--color-accent,#E07030)" opacity="0.9"/><circle cx="118.4" cy="124.8" r="2.2" fill="var(--color-accent,#E07030)" opacity="0.9"/><circle cx="137.5" cy="129.7" r="2.2" fill="var(--color-accent,#E07030)" opacity="0.9"/><circle cx="156.5" cy="131.9" r="1.6" fill="var(--color-text-muted,#777)" opacity="0.7"/><circle cx="175.6" cy="133.2" r="1.6" fill="var(--color-text-muted,#777)" opacity="0.7"/><circle cx="194.7" cy="133.9" r="1.6" fill="var(--color-text-muted,#777)" opacity="0.7"/><circle cx="213.8" cy="135.9" r="1.6" fill="var(--color-text-muted,#777)" opacity="0.7"/><circle cx="232.9" cy="137.2" r="1.6" fill="var(--color-text-muted,#777)" opacity="0.7"/><circle cx="252.0" cy="137.4" r="1.6" fill="var(--color-text-muted,#777)" opacity="0.7"/>
</svg>
  </figure>
  <!-- A2: Loadings heatmap (right column) -->
  <figure style="margin:0">
    <span class="app-cap">A2 — Rotated component loadings heatmap (street-network measures)</span>
    <svg viewBox="0 0 280 214" class="app-heatmap" style="width:100%;height:auto;overflow:visible">
  <text x="102" y="28" text-anchor="middle" font-size="8" opacity="0.8" font-weight="600">F1</text>
  <text x="153" y="28" text-anchor="middle" font-size="8" opacity="0.8" font-weight="600">F2</text>
  <line x1="128" y1="36" x2="128" y2="212" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
  <text x="204" y="28" text-anchor="middle" font-size="8" opacity="0.8" font-weight="600">F3</text>
  <line x1="179" y1="36" x2="179" y2="212" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
  <text x="255" y="28" text-anchor="middle" font-size="8" opacity="0.8" font-weight="600">F4</text>
  <line x1="230" y1="36" x2="230" y2="212" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
  <text x="74" y="50" text-anchor="end" font-size="7.5" opacity="0.75">Int. density</text>
  <rect x="77" y="36" width="50" height="22" fill="rgba(225,125,40,0.97)" rx="2"/>
  <text x="102" y="50" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">+0.97</text>
  <rect x="128" y="36" width="50" height="22" fill="rgba(225,125,40,0.36)" rx="2"/>
  <rect x="179" y="36" width="50" height="22" fill="rgba(55,135,220,0.37)" rx="2"/>
  <rect x="230" y="36" width="50" height="22" fill="rgba(55,135,220,0.12)" rx="2"/>
  <text x="74" y="72" text-anchor="end" font-size="7.5" opacity="0.75">Street density</text>
  <rect x="77" y="58" width="50" height="22" fill="rgba(225,125,40,0.95)" rx="2"/>
  <text x="102" y="72" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">+0.95</text>
  <rect x="128" y="58" width="50" height="22" fill="rgba(225,125,40,0.39)" rx="2"/>
  <rect x="179" y="58" width="50" height="22" fill="rgba(55,135,220,0.21)" rx="2"/>
  <rect x="230" y="58" width="50" height="22" fill="rgba(225,125,40,0.11)" rx="2"/>
  <text x="74" y="94" text-anchor="end" font-size="7.5" opacity="0.75">Node degree</text>
  <rect x="77" y="80" width="50" height="22" fill="rgba(225,125,40,0.57)" rx="2"/>
  <text x="102" y="94" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">+0.53</text>
  <rect x="128" y="80" width="50" height="22" fill="rgba(225,125,40,0.25)" rx="2"/>
  <rect x="179" y="80" width="50" height="22" fill="rgba(55,135,220,0.38)" rx="2"/>
  <rect x="230" y="80" width="50" height="22" fill="rgba(225,125,40,0.72)" rx="2"/>
  <text x="255" y="94" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">+0.70</text>
  <text x="74" y="116" text-anchor="end" font-size="7.5" opacity="0.75">Clustering coeff.</text>
  <rect x="77" y="102" width="50" height="22" fill="rgba(55,135,220,0.24)" rx="2"/>
  <rect x="128" y="102" width="50" height="22" fill="rgba(55,135,220,0.16)" rx="2"/>
  <rect x="179" y="102" width="50" height="22" fill="rgba(225,125,40,0.26)" rx="2"/>
  <rect x="230" y="102" width="50" height="22" fill="rgba(225,125,40,0.83)" rx="2"/>
  <text x="255" y="116" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">+0.82</text>
  <text x="74" y="138" text-anchor="end" font-size="7.5" opacity="0.75">Avg. shortest path</text>
  <rect x="77" y="124" width="50" height="22" fill="rgba(55,135,220,0.58)" rx="2"/>
  <text x="102" y="138" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">-0.54</text>
  <rect x="128" y="124" width="50" height="22" fill="rgba(55,135,220,0.84)" rx="2"/>
  <text x="153" y="138" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">-0.83</text>
  <rect x="179" y="124" width="50" height="22" fill="rgba(55,135,220,0.40)" rx="2"/>
  <rect x="230" y="124" width="50" height="22" fill="rgba(225,125,40,0.20)" rx="2"/>
  <text x="74" y="160" text-anchor="end" font-size="7.5" opacity="0.75">Betweenness</text>
  <rect x="77" y="146" width="50" height="22" fill="rgba(55,135,220,0.56)" rx="2"/>
  <text x="102" y="160" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">-0.52</text>
  <rect x="128" y="146" width="50" height="22" fill="rgba(225,125,40,0.56)" rx="2"/>
  <text x="153" y="160" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">+0.53</text>
  <rect x="179" y="146" width="50" height="22" fill="rgba(225,125,40,0.91)" rx="2"/>
  <text x="204" y="160" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">+0.90</text>
  <rect x="230" y="146" width="50" height="22" fill="rgba(225,125,40,0.27)" rx="2"/>
  <text x="74" y="182" text-anchor="end" font-size="7.5" opacity="0.75">Closeness</text>
  <rect x="77" y="168" width="50" height="22" fill="rgba(55,135,220,0.34)" rx="2"/>
  <rect x="128" y="168" width="50" height="22" fill="rgba(225,125,40,0.83)" rx="2"/>
  <text x="153" y="182" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">+0.82</text>
  <rect x="179" y="168" width="50" height="22" fill="rgba(225,125,40,0.69)" rx="2"/>
  <text x="204" y="182" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">+0.66</text>
  <rect x="230" y="168" width="50" height="22" fill="rgba(225,125,40,0.18)" rx="2"/>
  <text x="74" y="204" text-anchor="end" font-size="7.5" opacity="0.75">PageRank</text>
  <rect x="77" y="190" width="50" height="22" fill="rgba(55,135,220,0.53)" rx="2"/>
  <rect x="128" y="190" width="50" height="22" fill="rgba(225,125,40,0.74)" rx="2"/>
  <text x="153" y="204" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">+0.72</text>
  <rect x="179" y="190" width="50" height="22" fill="rgba(225,125,40,0.89)" rx="2"/>
  <text x="204" y="204" text-anchor="middle" font-size="6.5" fill="#fff" font-weight="500">+0.88</text>
  <rect x="230" y="190" width="50" height="22" fill="rgba(225,125,40,0.24)" rx="2"/>
</svg>
</figure>
</div>
<!-- A1: Communality table (full width) -->
<figure class="app-fig-full" style="margin:0 0 .9rem">
  <span class="app-cap">A1 — Communality of street-network measures for the retained components</span>
  <div class="app-tbl-scroll">
    <table class="app-tbl app-tbl-sm">
      <thead><tr><th>Metric</th><th>Buffer</th><th>Communality</th></tr></thead>
      <tbody>
<tr><td>Intersection density</td><td style="opacity:0.6">0.1 mi</td><td style="font-weight:700">0.779</td></tr>
<tr><td>Street density</td><td style="opacity:0.6">0.1 mi</td><td>0.620</td></tr>
<tr><td>Node degree</td><td style="opacity:0.6">0.1 mi</td><td>0.645</td></tr>
<tr><td>Clustering coeff.</td><td style="opacity:0.6">0.1 mi</td><td>0.424</td></tr>
<tr><td>Avg. shortest path</td><td style="opacity:0.6">0.1 mi</td><td style="font-weight:700">0.746</td></tr>
<tr><td>Betweenness</td><td style="opacity:0.6">0.1 mi</td><td style="font-weight:700">0.811</td></tr>
<tr><td>Closeness</td><td style="opacity:0.6">0.1 mi</td><td style="font-weight:700">0.770</td></tr>
<tr><td>PageRank</td><td style="opacity:0.6">0.1 mi</td><td style="font-weight:700">0.879</td></tr>
<tr style="border-top:1px solid rgba(255,255,255,0.14)"><td>Intersection density</td><td style="opacity:0.6">0.25 mi</td><td style="font-weight:700">0.862</td></tr>
<tr><td>Street density</td><td style="opacity:0.6">0.25 mi</td><td style="font-weight:700">0.730</td></tr>
<tr><td>Node degree</td><td style="opacity:0.6">0.25 mi</td><td style="font-weight:700">0.779</td></tr>
<tr><td>Clustering coeff.</td><td style="opacity:0.6">0.25 mi</td><td>0.602</td></tr>
<tr><td>Avg. shortest path</td><td style="opacity:0.6">0.25 mi</td><td style="font-weight:700">0.745</td></tr>
<tr><td>Betweenness</td><td style="opacity:0.6">0.25 mi</td><td style="font-weight:700">0.879</td></tr>
<tr><td>Closeness</td><td style="opacity:0.6">0.25 mi</td><td style="font-weight:700">0.749</td></tr>
<tr><td>PageRank</td><td style="opacity:0.6">0.25 mi</td><td style="font-weight:700">0.950</td></tr>
<tr style="border-top:1px solid rgba(255,255,255,0.14)"><td>Intersection density</td><td style="opacity:0.6">0.5 mi</td><td style="font-weight:700">0.904</td></tr>
<tr><td>Street density</td><td style="opacity:0.6">0.5 mi</td><td style="font-weight:700">0.836</td></tr>
<tr><td>Node degree</td><td style="opacity:0.6">0.5 mi</td><td style="font-weight:700">0.813</td></tr>
<tr><td>Clustering coeff.</td><td style="opacity:0.6">0.5 mi</td><td>0.683</td></tr>
<tr><td>Avg. shortest path</td><td style="opacity:0.6">0.5 mi</td><td style="font-weight:700">0.789</td></tr>
<tr><td>Betweenness</td><td style="opacity:0.6">0.5 mi</td><td style="font-weight:700">0.805</td></tr>
<tr><td>Closeness</td><td style="opacity:0.6">0.5 mi</td><td style="font-weight:700">0.775</td></tr>
<tr><td>PageRank</td><td style="opacity:0.6">0.5 mi</td><td style="font-weight:700">0.926</td></tr>
<tr style="border-top:1px solid rgba(255,255,255,0.14)"><td>Intersection density</td><td style="opacity:0.6">0.75 mi</td><td style="font-weight:700">0.951</td></tr>
<tr><td>Street density</td><td style="opacity:0.6">0.75 mi</td><td style="font-weight:700">0.932</td></tr>
<tr><td>Node degree</td><td style="opacity:0.6">0.75 mi</td><td style="font-weight:700">0.776</td></tr>
<tr><td>Clustering coeff.</td><td style="opacity:0.6">0.75 mi</td><td style="font-weight:700">0.703</td></tr>
<tr><td>Avg. shortest path</td><td style="opacity:0.6">0.75 mi</td><td style="font-weight:700">0.805</td></tr>
<tr><td>Betweenness</td><td style="opacity:0.6">0.75 mi</td><td style="font-weight:700">0.741</td></tr>
<tr><td>Closeness</td><td style="opacity:0.6">0.75 mi</td><td style="font-weight:700">0.770</td></tr>
<tr><td>PageRank</td><td style="opacity:0.6">0.75 mi</td><td style="font-weight:700">0.922</td></tr>
<tr style="border-top:1px solid rgba(255,255,255,0.14)"><td>Intersection density</td><td style="opacity:0.6">1.0 mi</td><td style="font-weight:700">0.944</td></tr>
<tr><td>Street density</td><td style="opacity:0.6">1.0 mi</td><td style="font-weight:700">0.904</td></tr>
<tr><td>Node degree</td><td style="opacity:0.6">1.0 mi</td><td style="font-weight:700">0.721</td></tr>
<tr><td>Clustering coeff.</td><td style="opacity:0.6">1.0 mi</td><td>0.642</td></tr>
<tr><td>Avg. shortest path</td><td style="opacity:0.6">1.0 mi</td><td>0.648</td></tr>
<tr><td>Betweenness</td><td style="opacity:0.6">1.0 mi</td><td style="font-weight:700">0.721</td></tr>
<tr><td>Closeness</td><td style="opacity:0.6">1.0 mi</td><td>0.696</td></tr>
<tr><td>PageRank</td><td style="opacity:0.6">1.0 mi</td><td style="font-weight:700">0.860</td></tr>
      </tbody>
    </table>
  </div>
</figure>
<!-- A2: Variance explained (full width) -->
<figure class="app-fig-full" style="margin:0">
  <span class="app-cap">A2 — Variance explained (rotated solution)</span>
  <div class="pca-bars">
    <div class="pca-row"><span class="pca-name">Intersection density</span><div class="pca-track"><div class="pca-fill" style="width:60%">28.1%</div></div></div>
    <div class="pca-row"><span class="pca-name">Network accessibility</span><div class="pca-track"><div class="pca-fill pf2" style="width:43.4%">20.3%</div></div></div>
    <div class="pca-row"><span class="pca-name">Betweenness</span><div class="pca-track"><div class="pca-fill pf3" style="width:35.5%">16.6%</div></div></div>
    <div class="pca-row"><span class="pca-name">Clustering</span><div class="pca-track"><div class="pca-fill pf4" style="width:28.0%">13.1%</div></div></div>
  </div>
</figure>
</div>
</div>

<div class="book-page" data-i="4">
<div class="book-kicker">Page 5</div>
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

<div class="book-page" data-i="5">
<div class="book-kicker">Page 6</div>
<h3>Three Takeaways</h3>
<p><strong>Denser street grids see more property crime.</strong> Intersection density was the strongest and most consistent predictor across every model: neighborhoods with more connected, more permeable street networks experienced more property crime, even after controlling for socioeconomic conditions.</p>
<p><strong>Accessibility cuts both ways.</strong> Neighborhoods that are easier to move through &mdash; shorter average network paths &mdash; tended to see more property crime, suggesting the same street layouts that serve residents' mobility can also extend offenders' reach.</p>
<p><strong>Place and scale matter.</strong> The network effect showed up most clearly at mid-range buffer scales and was stronger in suburban neighborhoods than downtown &mdash; which is why the study pairs multi-scale network measures with spatial regression models (SAR, CAR, GWR) rather than a single citywide equation.</p>
</div>

<div class="book-page" data-i="6">
<div class="book-kicker">Page 7</div>
<h3>Try It Yourself</h3>
<p>The repository isn't just the paper's code &mdash; it's a point-and-click web app. Download it, double-click a launcher, and step through the same pipeline in your browser: no command line required.</p>
<div class="book-note">Placeholder &mdash; 30&ndash;60 second GIF or video of the app walking through the pipeline stages. (Add media: assets/img/app-demo.gif)</div>
<p><a class="book-btn" href="https://github.com/Erfankt/urban-network-analysis" target="_blank" rel="noopener">View the repository on GitHub &rarr;</a></p>
<p><a class="book-btn book-btn-ghost" href="https://github.com/Erfankt/urban-network-analysis/releases/latest" target="_blank" rel="noopener">Latest release (v2.0.1) &rarr;</a></p>
</div>

<div class="book-page" data-i="7">
<div class="book-kicker">Page 8</div>
<h3>Under the Hood</h3>
<p><strong>Language &amp; libraries:</strong> Python, GeoPandas, NetworkX, scikit-learn, factor_analyzer</p>
<p><strong>Methods:</strong> spatial statistics, principal component analysis, large-scale checkpointed computation</p>
<p><strong>Interface:</strong> a Streamlit web app with an optional AI assistant for exploring run results</p>
<p><strong>License:</strong> MIT &mdash; free to reuse, extend, or adapt to another city's data</p>
</div>

<div class="book-page" data-i="8">
<div class="book-kicker">Page 9</div>
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
/* ── Page 2: Study Area ─────────────────────────── */
.p2-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em 1.3em;
  align-items: start;
}
.p2-cell { min-width: 0; }
.p2-cell--full { grid-column: 1 / -1; text-align: center; }
.p2-cell-hd {
  font-size: 0.67rem;
  font-weight: 700;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin: 0 0 0.5em;
  padding-bottom: 0.28em;
  border-bottom: 1px solid var(--color-border);
}
.p2-cell-note {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  line-height: 1.4;
  margin: 0 0 0.6em;
}
.p2-crime-pair-row { display: flex; gap: 1.2em; justify-content: center; align-items: flex-start; }
.p2-crime-pair-row .p2-crime-fig { flex: 1; max-width: 280px; margin: 0; }
.p2-crime-fig { margin: 0 0 0.5em; }
.p2-crime-fig:last-child { margin-bottom: 0; }
.p2-crime-fig figcaption { font-size: 0.68rem; color: var(--color-text-muted); margin-top: 0.25em; line-height: 1.3; text-align: center; }
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
/* .p2-concepts removed — using .p2-layout cells */
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
/* ── Figure 2 expand / lightbox ───────────────── */
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
/* ── Crime maps (Page 2 right column, stacked) ──── */
.p2-map-img--sm { max-height: 180px; object-fit: contain; width: 100%; display: block; }
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
/* ── Page 3: Measurement ────────────────────────── */
.measure-layout {
  display: grid;
  grid-template-columns: 248px 1fr;
  gap: 1.6em;
  align-items: start;
  margin-top: 0.5em;
}
.measure-svg {
  width: 100%;
  height: auto;
  display: block;
  color: var(--color-text);
}
.measure-eq {
  margin: 0 0 0.5em;
}
.metric-icons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.55em 0.3em;
  margin: 0.4em 0 0.5em;
}
.mi-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.1em;
}
.mi-svg {
  width: 100%;
  max-height: 52px;
  color: var(--color-text-muted);
}
.mi-item span {
  font-size: 0.58rem;
  color: var(--color-text-muted);
  line-height: 1.15;
}
/* Metric table */
.metric-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0.4em 0;
}
.metric-table tr + tr td {
  border-top: 1px solid var(--color-border);
}
.mt-icon {
  width: 72px;
  padding: 0.26em 0.3em 0.26em 0;
  vertical-align: middle;
}
.mt-icon svg {
  width: 72px;
  height: 58px;
  display: block;
  color: var(--color-text-muted);
}
.mt-name {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.26em 0.55em;
  vertical-align: middle;
  white-space: nowrap;
  width: 28%;
  color: var(--color-text);
}
.mt-desc {
  font-size: 0.69rem;
  color: var(--color-text-muted);
  padding: 0.26em 0 0.26em 0.3em;
  vertical-align: middle;
  line-height: 1.3;
}
/* Metric icon animations */
.npa-network-fig {
  margin: 0.4em 0 0;
  text-align: center;
  display: inline-block;
}
.npa-net-svg {
  width: 100%;
  max-width: 320px;
  height: auto;
  display: inline-block;
  color: var(--color-text-muted);
}
.npa-network-fig figcaption {
  font-size: 0.66rem;
  color: var(--color-text-muted);
  margin-top: 0.3em;
  line-height: 1.35;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
}

.npa-figure {
  margin: 0 0 0.4em;
  text-align: center;
}
.npa-figure .npa-svg {
  width: 100%;
  max-width: 320px;
  height: auto;
  display: inline-block;
  color: var(--color-text-muted);
}
.npa-figure figcaption {
  font-size: 0.68rem;
  color: var(--color-text-muted);
  margin-top: 0.35em;
  line-height: 1.35;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
}
@keyframes mi-draw   { 0%,5%{stroke-dashoffset:60} 65%,100%{stroke-dashoffset:0} }
@keyframes mi-pulse  { 0%,100%{opacity:0.2} 50%{opacity:1} }
@keyframes mi-travel { 0%,8%{stroke-dashoffset:90} 72%,100%{stroke-dashoffset:0} }
@keyframes mi-ripple { 0%{r:0;opacity:0.7;stroke-width:1.8} 65%{opacity:0.1} 100%{r:22;opacity:0;stroke-width:0.3} }
@keyframes mi-flash  { 0%,50%,100%{opacity:0.2} 62%{opacity:1} }
/* ── Buffer ring animations (Page 4) ─────────────────────────────── */
@keyframes net-fade { 0%{opacity:0} 6%{opacity:1} 78%{opacity:0.85} 88%{opacity:0} 100%{opacity:0} }
@keyframes bold-clip {
  0%,14%{clip-path:circle(0px at 150px 142px);opacity:0}
  16%{clip-path:circle(0px at 150px 142px);opacity:0.85}
  32%{clip-path:circle(28px  at 150px 142px);opacity:0.85}
  44%{clip-path:circle(56px  at 150px 142px);opacity:0.85}
  54%{clip-path:circle(86px  at 150px 142px);opacity:0.85}
  64%{clip-path:circle(113px at 150px 142px);opacity:0.85}
  74%{clip-path:circle(136px at 150px 142px);opacity:0.85}
  78%{clip-path:circle(136px at 150px 142px);opacity:0.85}
  88%{clip-path:circle(0px  at 150px 142px);opacity:0}
  100%{clip-path:circle(0px at 150px 142px);opacity:0} }
@keyframes buf-npa  { 0%,8%{opacity:0} 14%{opacity:1} 78%{opacity:1} 90%{opacity:0} 100%{opacity:0} }
@keyframes buf-r1  { 0%,16%{stroke-dashoffset:176;opacity:0} 20%{opacity:1} 32%{stroke-dashoffset:0;opacity:1} 75%{opacity:1} 88%{opacity:0} 100%{stroke-dashoffset:176;opacity:0} }
@keyframes buf-r2  { 0%,26%{stroke-dashoffset:352;opacity:0} 30%{opacity:1} 44%{stroke-dashoffset:0;opacity:1} 75%{opacity:1} 88%{opacity:0} 100%{stroke-dashoffset:352;opacity:0} }
@keyframes buf-r3  { 0%,36%{stroke-dashoffset:540;opacity:0} 40%{opacity:1} 54%{stroke-dashoffset:0;opacity:1} 75%{opacity:1} 88%{opacity:0} 100%{stroke-dashoffset:540;opacity:0} }
@keyframes buf-r4  { 0%,46%{stroke-dashoffset:710;opacity:0} 50%{opacity:1} 64%{stroke-dashoffset:0;opacity:1} 75%{opacity:1} 88%{opacity:0} 100%{stroke-dashoffset:710;opacity:0} }
@keyframes buf-r5  { 0%,56%{stroke-dashoffset:854;opacity:0} 60%{opacity:1} 74%{stroke-dashoffset:0;opacity:1} 77%{opacity:1} 88%{opacity:0} 100%{stroke-dashoffset:854;opacity:0} }
@keyframes buf-lbl { 0%,72%{opacity:0} 78%{opacity:1} 82%{opacity:1} 90%{opacity:0} 100%{opacity:0} }

.buf-eq { font-size:0.82rem; text-align:center; margin:0.4em 0 0; color:var(--color-text-muted); }
.buf-eq-n { color:var(--color-accent); font-size:1rem; }
.measure-pca-head {
  font-size: 0.82rem;
  font-weight: 600;
  margin: 0 0 0.45em;
}
.pca-bars { margin: 0; }
.pca-row {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 0.38em;
}
.pca-name {
  font-size: 0.76rem;
  color: var(--color-text-muted);
  min-width: 130px;
  flex-shrink: 0;
}
.pca-track {
  flex: 1;
  background: var(--color-border);
  border-radius: 99px;
  height: 20px;
  overflow: hidden;
}
.pca-fill {
  height: 100%;
  background: var(--color-accent);
  border-radius: 99px;
  display: flex;
  align-items: center;
  padding-left: 7px;
  font-size: 0.7rem;
  color: #fff;
  font-weight: 700;
  white-space: nowrap;
}
.pf2 { background: #0ea5e9; }
.pf3 { background: #8b5cf6; }
.pf4 { background: #10b981; }
.pca-note {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  margin-top: 0.8em;
}
/* ── Page 4: Results Table ──────────────────────── */
.rtable-wrap {
  overflow-x: auto;
  margin: 0.7em 0 0.3em;
}
.rtable {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.81rem;
}
.rtable th {
  background: var(--color-accent-soft, rgba(99,102,241,.08));
  padding: 0.45em 0.65em;
  text-align: left;
  font-family: var(--font-heading);
  font-size: 0.76rem;
  border-bottom: 2px solid var(--color-border);
  white-space: nowrap;
}
.rtable td {
  padding: 0.5em 0.65em;
  border-bottom: 1px solid var(--color-border);
  vertical-align: middle;
}
.rtable td small {
  display: block;
  color: var(--color-text-muted);
  font-size: 0.78em;
  margin-top: 0.1em;
}
.rtr-odd td { background: var(--color-accent-soft, rgba(99,102,241,.04)); }
.rdir {
  text-align: center;
  font-weight: 700;
  font-size: 0.95rem;
  white-space: nowrap;
}
.rpos { color: #ef4444; }
.rneg { color: #3b82f6; }
.rns  { color: var(--color-text-muted); font-weight: 400; font-size: 0.8rem; }
.rmix { color: #8b5cf6; }
.rtable-note {
  font-size: 0.76rem;
  color: var(--color-text-muted);
  margin-bottom: 0.8em;
}
@media (max-width: 700px) {
  .measure-layout { grid-template-columns: 1fr; }
  .measure-svg { max-width: 200px; margin: 0 auto 1em; }
  .pca-name { min-width: 95px; }
}
.book-note {
  background: var(--color-accent-soft);
  border-left: 4px solid var(--color-accent-2);
  border-radius: var(--radius-sm);
  padding: 1em 1.2em;
  font-style: italic;
  color: var(--color-text-muted);
  margin: 1em 0;
  text-align: center;
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
  .book-wrap { padding: 0 0.8em; }
  .book { min-height: 620px; padding: 4px; }
  .book-page { top: 4px; left: 4px; right: 4px; bottom: 4px; padding: 1.6em 1.5em; }
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

  var pfSvg = document.getElementById('pfSvg');
  var pfTimers = [];

  function playPipeline() {
    if (!pfSvg) { return; }
    var all = Array.prototype.slice.call(pfSvg.querySelectorAll('[data-step]'));
    pfTimers.forEach(function(t) { clearTimeout(t); });
    pfTimers = [];
    all.forEach(function(el) { el.classList.remove('pf-on'); });
    void pfSvg.getBoundingClientRect();
    var maxStep = 0;
    all.forEach(function(el) { maxStep = Math.max(maxStep, parseInt(el.getAttribute('data-step'), 10)); });
    for (var i = 1; i <= maxStep; i++) {
      (function(stepNum) {
        var t = setTimeout(function() {
          all.forEach(function(el) {
            if (parseInt(el.getAttribute('data-step'), 10) === stepNum) { el.classList.add('pf-on'); }
          });
        }, (stepNum - 1) * 220);
        pfTimers.push(t);
      })(i);
    }
  }

  function update() {
    counter.textContent = (flipped + 1) + ' / ' + total;
    prevBtn.disabled = flipped === 0;
    nextBtn.disabled = flipped === total - 1;
    if (flipped === 0) { playPipeline(); }
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

// ── Figure 2 Lightbox ───────────────────────────────
(function() {
  var lb       = document.getElementById('fig2Lb');
  var backdrop = document.getElementById('fig2Backdrop');
  var closeBtn = document.getElementById('fig2Close');
  var wrap     = document.getElementById('fig2Wrap');
  var expandBtn = document.getElementById('fig2Btn');
  if (!lb || !wrap) return;

  function open() {
    lb.removeAttribute('hidden');
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.setAttribute('hidden', '');
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  wrap.addEventListener('click', function(e) {
    if (e.target === expandBtn || expandBtn.contains(e.target) || e.target === wrap.querySelector('.p2-map-img') || wrap.contains(e.target)) {
      open();
    }
  });
  if (backdrop) backdrop.addEventListener('click', close);
  if (closeBtn) closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lb.classList.contains('is-open')) { close(); }
  });
})();

// ── Figure 3 Lightbox ───────────────────────────────
(function() {
  var lb       = document.getElementById('fig3Lb');
  var backdrop = document.getElementById('fig3Backdrop');
  var closeBtn = document.getElementById('fig3Close');
  var wrap     = document.getElementById('fig3Wrap');
  var expandBtn = document.getElementById('fig3Btn');
  if (!lb || !wrap) return;
  function open() {
    lb.removeAttribute('hidden');
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.setAttribute('hidden', '');
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  wrap.addEventListener('click', function(e) {
    if (e.target === expandBtn || expandBtn.contains(e.target) || e.target === wrap.querySelector('.p2-map-img') || wrap.contains(e.target)) {
      open();
    }
  });
  if (backdrop) backdrop.addEventListener('click', close);
  if (closeBtn) closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lb.classList.contains('is-open')) { close(); }
  });
})();

// ── Figure 4 Lightbox ───────────────────────────────
(function() {
  var lb       = document.getElementById('fig4Lb');
  var backdrop = document.getElementById('fig4Backdrop');
  var closeBtn = document.getElementById('fig4Close');
  var wrap     = document.getElementById('fig4Wrap');
  var expandBtn = document.getElementById('fig4Btn');
  if (!lb || !wrap) return;
  function open() {
    lb.removeAttribute('hidden');
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.setAttribute('hidden', '');
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  wrap.addEventListener('click', function(e) {
    if (e.target === expandBtn || expandBtn.contains(e.target) || e.target === wrap.querySelector('.p2-map-img') || wrap.contains(e.target)) {
      open();
    }
  });
  if (backdrop) backdrop.addEventListener('click', close);
  if (closeBtn) closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lb.classList.contains('is-open')) { close(); }
  });
})();
</script>
