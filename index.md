---
layout: page
title: Stacy Harrison, Developer
---
## Many Hat Wearer

I'm acquiring a lot of hats. By choice. And I love it.

Currently, I'm a **software developer**. I've got an itch to create, to build,
to teach, and to write. I also wear the hats of: designer, web developer,
marketer, writer, and entrepreneur.

On this website I aim:
* to document the programming projects I'm working on;
* to blog about my journey as designer-turned-programmer;
* to provide resources that have helped me along the way to those also learning.

Want to chat? Reach out on [Twitter](https://twitter.com/stacyeharrison) or [LinkedIn](https://www.linkedin.com/in/stacy-harrison/).

## Latest From the Blog

{% for post in site.posts limit:5 %}
<a href="{{ post.url }}">{{ post.title }}</a> — {{ post.date | date_to_string }}
{% endfor %}
