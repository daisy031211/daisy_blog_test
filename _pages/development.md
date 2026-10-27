---
layout: archive
title: "개발"
permalink: /development/
author_profile: true
---

개발 프로젝트와 프로그래밍 학습 내용을 기록하는 공간입니다.

{% assign category_posts = site.posts | where_exp: "post", "post.categories contains 'development'" %}

<div class="entries-grid">
  {% for post in category_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

{% if category_posts.size == 0 %}
아직 작성된 게시글이 없습니다.
{% endif %}
