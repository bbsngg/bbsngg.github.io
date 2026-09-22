---
layout: academic
title: "Curriculum Vitae"
permalink: /cv/
description: "Dingjie Song’s education, research experience, skills, and academic service."
redirect_from:
  - /resume
---
<div class="cv-page">
  <header class="page-heading">
    <div><h1>Curriculum Vitae</h1><p>Dingjie Song · Lehigh University</p></div>
    <a class="button-link button-primary" href="{{ site.data.profile.cv_link | relative_url }}">Download CV (PDF) ↓</a>
  </header>
  {% include academic/experience.html full=true %}
  <section class="card cv-skills" aria-labelledby="skills">
    <h2 id="skills">Skills</h2>
    <dl>{% for skill in site.data.profile.skills %}<dt>{{ skill[0] }}</dt><dd>{{ skill[1] }}</dd>{% endfor %}</dl>
  </section>
  <div class="closing-grid">
    {% include academic/awards.html %}
    {% include academic/service.html %}
  </div>
</div>
