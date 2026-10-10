# Edge2XAI Website

Static website for [edge2xai.com](https://edge2xai.com), served by GitHub Pages.

## Pages
- `index.html` - Home
- `books.html` - Knowledge (books and publication roadmap)
- `practice.html` - Learning (courses and hands-on path)
- `training.html` - Training and mentorship
- `edgeverse.html` - EdgeVerse (industry and academia initiative)
- `advisory.html` - Selective advisory
- `about.html` - About
- `contact.html` - Connect

## Structure
- `css/site.css` - the single stylesheet
- `js/menu.js` - the compact mobile menu (the only script)
- `images/`, `covers/` - artwork and book covers
- `CNAME` - custom domain
- `.github/workflows/pages.yml` - deploys `main` to GitHub Pages

## Making changes
1. Edit the HTML or `css/site.css`.
2. When the stylesheet changes, bump the `?v=` number on its `<link>` in every page so browsers fetch the new file (browsers cache it for 10 minutes).
3. Commit and push to `main`. The site updates in about a minute.

The previous version of the site is preserved at the `V1.00.00` tag.
