---
layout: academic
permalink: /
title: "Dingjie Song"
description: "Dingjie Song — Ph.D. student at Lehigh University researching LLM agents and AI for scientific discovery."
redirect_from:
  - /about/
  - /about.html
---
{% include academic/latest.html %}
{% include academic/profile.html %}
{% include academic/highlights.html %}
{% include academic/experience.html %}
{% include academic/news.html %}
<section class="home-section" aria-labelledby="publications">
  <div class="section-heading">
    <h2 id="publications">{% include academic/icon.html name="cv" %} Selected Publications</h2>
    <a href="{{ '/publications/' | relative_url }}">View all publications →</a>
  </div>
  <p class="muted small">* denotes equal contribution.</p>
  {% include academic/publications.html selected=true %}
  <p class="browse-all"><a href="{{ '/publications/' | relative_url }}">Browse all publications →</a></p>
</section>
<div class="closing-grid">
  {% include academic/awards.html %}
  {% include academic/service.html %}
</div>
<div class="visitor-map">
  <a href="https://mapmyvisitors.com/web/1bvss" aria-label="Visitor map"><img src="https://mapmyvisitors.com/map.png?cl=ffffff&amp;w=300&amp;t=tt&amp;d=pJ1pgUuPoKJii9Zaz72RjAS-htRZQIO-WrxhoD-fe6Y&amp;co=2d78ad&amp;ct=ffffff" alt="Map of homepage visitors" loading="lazy" width="300" height="180"></a>
</div>
