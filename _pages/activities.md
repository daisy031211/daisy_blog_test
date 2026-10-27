---
layout: archive
title: "공모전 / 자격증"
permalink: /activities/
author_profile: true
---

공모전, 대외활동 및 자격증 준비 과정을 기록하는 공간입니다.

{% assign category_posts = site.posts | where_exp: "post", "post.categories contains 'activities'" %}

<div class="entries-grid">
  {% for post in category_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

{% if category_posts.size == 0 %}
아직 작성된 게시글이 없습니다.
{% endif %}
