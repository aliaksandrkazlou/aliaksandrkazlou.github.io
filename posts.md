---
layout: page
title: Posts
---

<ul>
   {% for item in site.posts %}
      <li><a href="{{ item.url }}">{{ item.title }}</a></li>
   {% endfor %}
</ul>


