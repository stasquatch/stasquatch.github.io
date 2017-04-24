---
layout: page
title: Stacy Harrison, Developer
---
## Many Hat Wearer

I'm acquiring a lot of hats. By choice. And I love it. I started my career
as a print designer, which quickly morphed into digital design (because
it's the 21st century). When I began working in a marketing department
I picked up digital marketing to add to my arsenal. In the spring of
2016, I quit my day job to freelance full-time. I was able to blend
design, marketing, entrepreneurship, and web development daily for
some really awesome clients.

Now, I'm a **software developer**. I've got an itch to create, to build,
to teach, and to write.

On this website I am to document the programming projects I'm working on
in my free time, to blog about my journey as designer-turned-programmer,
and to provide resources that have helped me along the way to those
also learning.

## Latest From the Blog

{% for post in site.posts limit:5 %}
<a href="{{ post.url }}">{{ post.title }}</a> — {{ post.date | date_to_string }}
{% endfor %}
