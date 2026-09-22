# Dingjie Song · Academic homepage

The home, Publications, and CV pages use a light background and deep navy palette,
with larger publication text, local SVG icons, and native collapsible year groups.
They use a customized version of
[luost26/academic-homepage](https://github.com/luost26/academic-homepage), with the
layout and typography inspired by [yuxuan.world](https://yuxuan.world/).
The site remains compatible with the existing Jekyll / GitHub Pages build.
Older pages and the ScratchMath project retain their original layouts.

## Updating content

- `_data/profile.yml`: biography, social links, CV download, education, experience,
  awards, skills, and service. This feeds both the homepage and CV page.
- `_data/news.yml`: newest-first news entries, each with a display `date` and
  Markdown/HTML `text`. The first six display immediately; the rest expand with
  “Earlier news”. Keep the existing order for entries in the same month.
- `_publications/*.md`: the canonical publication catalog for both lists. Set
  `catalog: true`, `display_year`, `preprint`, `selected`, `authors`, `pub`,
  `paper_url`, `links`, and `list_order` (ascending within each group).
  `selected_order` controls the order within each year on the homepage.
  `cover` is optional; absent covers render as text without a placeholder.
  Keep `*` on author names for equal contributions. Your name is bolded automatically.
- Research highlights are publications with `highlight_order` (1–3),
  `short_title`, `abstract`, and a `cover`. Their titles, venues and links come
  from the same catalog as the paper lists.
- Keep existing `permalink` values when editing publications so inbound links
  continue to work. `display_year` controls list grouping independently of a
  paper's original `date`.
- The Latest Research strip reuses the three highlight records. Contact links
  share one component between the profile and the desktop rail (1360px and wider).
  Year and Preprints groups start expanded and work without JavaScript.
- Layout/components: `_layouts/academic.html`, `_includes/academic/`.
  Visual overrides: `assets/css/academic.css`; upstream base styles:
  `assets/css/academic-base.css`.

## Preview and validation

With the existing Ruby dependencies installed:

```sh
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

On this Mac, the installed Homebrew Ruby and existing compatibility shim are
needed for the older GitHub Pages dependencies:

```sh
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
RUBYOPT="-r$PWD/.preview-shim.rb" bundle exec jekyll serve --config _config.yml,.preview-config.yml
```

The shim and `.preview-config.yml` are local, ignored files; production builds
use `_config.yml` only. A production build can be checked without overwriting
local previews:

```sh
RUBYOPT="-r$PWD/.preview-shim.rb" bundle exec jekyll build --destination /tmp/homepage-build
```

Before publishing, check `/`, `/publications/`, and `/cv/` at 375, 768, and
1440 pixels; check news expansion, navigation, CV download, old publication
URLs, and `/ScratchMath/`. Native disclosure elements work without JavaScript.
Bootstrap CSS is bundled locally; fonts have system fallbacks.

## Template provenance

Upstream: `luost26/academic-homepage` at commit
`7bd10b6af57d52fd74ba1dd0e0f5aa4b6419c97e`.
Adapted components: `profile_card.html`, `experience_card.html`,
`publication_item.html`, and `assets/css/global.css`.
The upstream profile data interface and Bootstrap layout conventions are retained;
components are namespaced to avoid collisions with the older AcademicPages theme.

See `licenses/academic-homepage-MIT.txt` and `licenses/bootstrap-MIT.txt`.
Only the upstream template is reused as source; the Yuxuan site is a visual reference.
No analytics IDs or personal assets from that site are imported.

---

### Citation and contribution maintenance

Seven selected papers carry optional `author_role` (`first` or `co-first`),
`bibtex`, and `bibtex_source` fields. Roles were checked against paper author
blocks; OpenSkill and Medical AI Scientist against their arXiv PDFs/HTML,
MM-Detect and LongLLaVA against the published ACL PDFs. Citations for TRIM,
MM-Detect and LongLLaVA use ACL exports; MileBench uses COLM/OpenReview metadata;
the three 2026 highlights use arXiv metadata until proceedings are available.
Published citations can differ from the older arXiv title/author list displayed
on the site, particularly LongLLaVA. Preserve the source record in BibTeX.

`content_updated` in profile data is an explicitly maintained content date,
not the build date. Citation text is static HTML and remains accessible without
JavaScript. Copy and back-to-top behavior is progressively enhanced.

### Compact homepage content

`profile.short_bio` is the visible introduction; `profile.background_bio` appears
under “More about me”. The latest news strip uses `news[0].summary`, falling back
to its full text. Home shows three research experiences plus “Earlier experience”;
CV always shows all records. Highlight cards use intrinsic subgrid rows, with a
flex layout fallback for browsers without subgrid support.

## Original AcademicPages documentation

A Github Pages template for academic websites. This was forked (then detached) by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License. See LICENSE.md.

I think I've got things running smoothly and fixed some major bugs, but feel free to file issues or make pull requests if you want to improve the generic template / theme.

### Note: if you are using this repo and now get a notification about a security vulnerability, delete the Gemfile.lock file. 

# Instructions

1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section
1. (Optional) Use the Jupyter notebooks or python scripts in the `markdown_generator` folder to generate markdown files for publications and talks from a TSV file.

See more info at https://academicpages.github.io/

## To run locally (not on GitHub Pages, to serve on your own computer)

1. Clone the repository and made updates as detailed above
1. Make sure you have ruby-dev, bundler, and nodejs installed: `sudo apt install ruby-dev ruby-bundler nodejs`
1. Run `bundle clean` to clean up the directory (no need to run `--force`)
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
1. Run `bundle exec jekyll liveserve` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

# Changelog -- bugfixes and enhancements

There is one logistical issue with a ready-to-fork template theme like academic pages that makes it a little tricky to get bug fixes and updates to the core theme. If you fork this repository, customize it, then pull again, you'll probably get merge conflicts. If you want to save your various .yml configuration files and markdown files, you can delete the repository and fork it again. Or you can manually patch. 

To support this, all changes to the underlying code appear as a closed issue with the tag 'code change' -- get the list [here](https://github.com/academicpages/academicpages.github.io/issues?q=is%3Aclosed%20is%3Aissue%20label%3A%22code%20change%22%20). Each issue thread includes a comment linking to the single commit or a diff across multiple commits, so those with forked repositories can easily identify what they need to patch.

### Institution marks

Education and experience use `institution` keys referencing `_data/institutions.yml`.
Each entry records its official website, local logo and original asset source.
Marks were obtained from the institutions’ own websites on 2026-09-22 and remain
the property of their respective institutions (not covered by the template MIT
license). Nanjing University and IDEA use their supplied white variants on colored
backgrounds without recoloring or cropping. CUHK-Shenzhen uses its own website icon.
A missing logo configuration renders an abbreviation; institution text always remains
available. Home and CV share institution and academic-service components.

On small screens the footer provides the 44px back-to-top target; the floating
control is hidden to keep long institution names unobstructed.

### Paper TL;DR summaries

Each catalog paper has a plain-text `tldr` (one concise English sentence) and
`tldr_source` linking to the primary paper or publisher page used to verify it.
Summaries appear in home selections, the complete publication list, and both
publication detail layouts. Research highlights retain their longer introductions.
When updating a summary, verify the mechanism or finding against its source; do
not infer personal contributions from author order or add unsupported results.

### Publication previews and appearance

Every catalog paper has a local `cover`. New previews record `cover_source` and
`cover_note`; see `images/pubs/SOURCES.md` for provenance and the EPL illustration.

The navigation theme button cycles through System, Light, and Dark. System is the
default; explicit choices persist in `homepage-theme` local storage across pages
and tabs. `assets/js/theme.js` applies the saved setting before styles load, while
CSS follows system appearance if JavaScript is unavailable. Print styles stay
light. Theme colors and responsive controls live in `assets/css/academic.css`.
