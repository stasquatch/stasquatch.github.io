---
layout: page
title: Blog | Stacy Harrison
permalink: /blog/
---

<h2>Blog</h2>
{% for post in site.posts %}
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p><em>{{ post.date | date_to_string }}</em> | {{ post.excerpt }}</p>
  <a href="{{ post.url }}"> class="btn btn-default">Read More</a>
{% endfor %}
