---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 2
display_categories: []
horizontal: false
---

<div class="projects">
  <div class="project-grid">
    {% assign sorted_projects = site.projects | sort: "importance" %}
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
