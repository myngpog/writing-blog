writing blog website for my (professional) writing endeavors

## Adding Blog Posts

A blog post is represented in `/public/entries/{postId}.md` or `/public/entries/{postId}/postId.md`.
The latter is preferred for better organization in case you have a `files` key in your metadata.
A markdown file should be structured as so:

```md
---
title: title goes here, no quotes needed
desc: desc goes here, no quotes needed!
date: '2025-09-04' # <-- 'YYYY-MM-DD' it SHOULD be quoted because of parsing shenanigans
files: ['0', '1', '2'] # An image's number suffix, for example, IMG_4182.jpg -> "4182". Expected to be in the same dir as this .md file
---

Your markdown content, if any, goes here.
```
