---
layout: archive
title: "논문 / 컨퍼런스"
permalink: /research/
author_profile: true
---

관심 있는 논문과 보안 컨퍼런스 내용을 정리하는 공간입니다.

{% assign category_posts = site.posts | where_exp: "post", "post.categories contains 'research'" %}

<div class="entries-grid">
  {% for post in category_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

{% if category_posts.size == 0 %}
아직 작성된 게시글이 없습니다.
{% endif %}
