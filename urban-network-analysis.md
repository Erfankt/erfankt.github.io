---
layout: page
title: Urban Street Network Configuration & Property Crime
permalink: /projects/urban-network-analysis/
---

Does the way a neighborhood's streets are laid out relate to how much property crime it sees? This project builds the full data pipeline behind that question — and packages it so anyone can run it themselves, on Charlotte's data or their own city's.

<div class="callout" markdown="1">

*Placeholder — pipeline diagram: streets + neighborhoods → network measures at multiple buffer scales → component analysis → modeling dataset. (Add image: `assets/img/pipeline-diagram.png`)*

</div>

---

### 📄 The Paper

**Kefayat, E., & Thill, J.-C. (2025).** Urban Street Network Configuration and Property Crime: An Empirical Multivariate Case Study. *ISPRS International Journal of Geo-Information*, 14(5), 200. [doi.org/10.3390/ijgi14050200](https://doi.org/10.3390/ijgi14050200)

Three takeaways:

*Placeholder — takeaway 1 from the paper's findings.*

*Placeholder — takeaway 2 from the paper's findings.*

*Placeholder — takeaway 3 from the paper's findings.*

---

### 🖥️ Try It Yourself

The repository isn't just the paper's code — it's a point-and-click web app. Download it, double-click a launcher, and step through the same pipeline in your browser: no command line required.

<div class="callout" markdown="1">

*Placeholder — 30–60 second GIF or video of the app walking through the pipeline stages. (Add media: `assets/img/app-demo.gif`)*

</div>

<div class="project-box" markdown="1">

[View the repository on GitHub →](https://github.com/Erfankt/urban-network-analysis)

[Latest release (v2.0.1) →](https://github.com/Erfankt/urban-network-analysis/releases/latest)

</div>

---

### ⚙️ Under the Hood

**Language & libraries:** Python, GeoPandas, NetworkX, OSMnx

**Methods:** spatial statistics, principal component analysis, large-scale checkpointed computation

**Interface:** a Streamlit web app with an optional AI assistant for exploring run results

**License:** MIT — free to reuse, extend, or adapt to another city's data

---

### 📎 Cite This Work

Citation details (paper and software) are maintained in the repository's [`CITATION.cff`](https://github.com/Erfankt/urban-network-analysis/blob/master/CITATION.cff).

[← Back to Projects](/projects/)
