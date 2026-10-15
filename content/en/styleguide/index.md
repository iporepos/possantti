---
title: "Style Guide"
noindex: true
toc: true
---

Internal reference for this site's custom shortcodes and partials, plus short how-tos for the built-in features that are easiest to get wrong (equations, video embeds, code blocks) — not linked from the main navigation, listed only in the footer. Documents parameters and defaults, with live rendered examples so behaviour is visible, not just described. English only.

## img

Figure with image, caption, and credit. `layouts/shortcodes/img.html` → `layouts/partials/img.html`.

<p class="sg-subheading">Parameters</p>

| Param           | Default                | Description                                                                                           |
|-----------------|-------------------------|---------------------------------------------------------------------------------------------------------|
| `src`           | —                       | Image URL (absolute or site-relative). Required unless `key` is set.                                   |
| `key`           | —                       | Lookup into `data/images.yaml` — supplies `src`/`alt`/`caption`/`credit`/`width` as fallbacks. Required unless `src` is set. |
| `caption`       | `""`                    | Caption text.                                                                                            |
| `credit`        | `""` → italic "Undefined" | Credit text. Any existing `(c)`/`©` is stripped; output is always prefixed with a single `©`.        |
| `alt`           | `""`                    | Alt text.                                                                                                |
| `width`         | `70%`                   | Image width, as a % of the text column. Bare numbers are treated as percent (`width=80` == `"80%"`).   |
| `align`         | `left`                  | Horizontal position of the image+caption block: `left` \| `center` \| `right`.                          |
| `width_caption` | mirrors `width`         | Caption box width, same % rules as `width`. Pass `width_caption=100` for the full text column regardless of image width. |
| `align_caption` | `left`                  | Caption text-align: `left` (ragged-right) \| `center` \| `right`.                                       |

<p class="sg-subheading">Default</p>

```text
{{</* img src="https://photos.possantti.net/covers/canela-1.jpg" caption="Caracol Falls — Canela's iconic landmark." */>}}
```

{{< img src="https://photos.possantti.net/covers/canela-1.jpg" caption="Caracol Falls — Canela's iconic landmark." >}}

<p class="sg-subheading"><code>width=40</code> — caption mirrors image width by default</p>

```text
{{</* img src="..." width=40 caption="Narrower image." */>}}
```

{{< img src="https://photos.possantti.net/covers/canela-1.jpg" width=40 caption="Narrower image — the caption box shrinks to match the 40% image width, which is the default." >}}

<p class="sg-subheading"><code>width_caption=100</code> — caption ignores image width</p>

```text
{{</* img src="..." width=40 width_caption=100 caption="..." */>}}
```

{{< img src="https://photos.possantti.net/covers/canela-1.jpg" width=40 width_caption=100 caption="Same 40% image, but width_caption=100 forces the caption to span the full text column instead of mirroring the image." >}}

<p class="sg-subheading"><code>align="center"</code> and <code>align="right"</code> — block position</p>

```text
{{</* img src="..." width=40 align="center" */>}}
{{</* img src="..." width=40 align="right" */>}}
```

{{< img src="https://photos.possantti.net/covers/canela-1.jpg" width=40 align="center" caption="align=\"center\"" >}}

{{< img src="https://photos.possantti.net/covers/canela-1.jpg" width=40 align="right" caption="align=\"right\"" >}}

<p class="sg-subheading"><code>align_caption="center"</code> — caption text only, block stays put</p>

```text
{{</* img src="..." width=40 align_caption="center" */>}}
```

{{< img src="https://photos.possantti.net/covers/canela-1.jpg" width=40 align_caption="center" caption="align_caption=\"center\" only changes how the caption text wraps inside its box — the block itself is still left-positioned by default." >}}

<p class="sg-subheading">Credit normalization</p>

An empty/missing credit falls back to italic "Undefined"; an existing `(c)` or `©` in the string is stripped before the single `©` prefix is added.

```text
{{</* img src="..." caption="No credit supplied" credit="" */>}}
{{</* img src="..." caption="Credit with a redundant (c)" credit="(c) Jane Doe" */>}}
```

{{< img src="https://photos.possantti.net/covers/canela-1.jpg" width=40 caption="No credit supplied" credit="" >}}

{{< img src="https://photos.possantti.net/covers/canela-1.jpg" width=40 caption="Credit with a redundant (c)" credit="(c) Jane Doe" >}}

<p class="sg-subheading"><code>key</code> — lookup from <code>data/images.yaml</code></p>

```text
{{</* img key="basin_map" */>}}
```

{{< img key="basin_map" >}}

## before_after

Drag-to-reveal comparison slider (e.g. draft vs. final, before vs. after treatment). Pure CSS clip-path reveal + a small JS drag/keyboard handler — no external library. `layouts/shortcodes/before_after.html` → `layouts/partials/before-after.html`.

<p class="sg-subheading">Parameters</p>

| Param           | Default         | Description                                                                                                   |
|-----------------|-----------------|-----------------------------------------------------------------------------------------------------------------|
| `before`        | —               | Image for the "before" side — a `data/images.yaml` key, or a direct URL/path. Required.                       |
| `after`         | —               | Image for the "after" side — same resolution rules. Required.                                                 |
| `before_label`  | `Before`        | Tag text on the before side.                                                                                    |
| `after_label`   | `After`         | Tag text on the after side.                                                                                     |
| `ruler`         | `after`         | Which image's aspect ratio sizes the box: `before` \| `after`. The other image is cropped (`object-fit: cover`) to fill it. |
| `direction`     | `horizontal`    | Drag axis: `horizontal` \| `vertical`.                                                                          |
| `position`      | `50`            | Initial reveal position, 0–100.                                                                                  |
| `caption`       | `""`            | Caption text. Same behavior as `img`.                                                                           |
| `credit`        | `""` → italic "Undefined" | Credit text. Same normalization as `img`: any existing `(c)`/`©` is stripped; output is always prefixed with a single `©`. |
| `width`         | `100%`          | Slider width. Same as `img`: bare numbers are treated as percent (`width=80` == `"80%"`); any other CSS unit (e.g. `"500px"`) passes through unchanged. |
| `align`         | `left`          | Same as `img`: horizontal position of the slider+caption block — `left` \| `center` \| `right`.                 |
| `width_caption` | mirrors `width` | Same as `img`: caption box width. Pass `width_caption=100` for the full text column regardless of slider width. |
| `align_caption` | `left`          | Same as `img`: caption text-align — `left` (ragged-right) \| `center` \| `right`.                               |

<p class="sg-subheading">Default</p>

```text
{{</* before_after before="..." after="..." caption="Drag the handle to compare." */>}}
```

{{< before_after before="https://images.possantti.net/story/B005/draft-example-1.jpeg" after="https://images.possantti.net/story/B005/final-example-1.jpeg" caption="Default: drag the handle to compare." >}}

<p class="sg-subheading"><code>ruler="before"</code> — the other image's aspect ratio sizes the box</p>

```text
{{</* before_after before="..." after="..." ruler="before" */>}}
```

{{< before_after before="https://images.possantti.net/story/B005/draft-example-2.jpeg" after="https://images.possantti.net/story/B005/final-example-2.jpeg" ruler="before" caption="ruler=\"before\" — box sized by the before image instead of the default after image." >}}

<p class="sg-subheading"><code>direction="vertical"</code></p>

```text
{{</* before_after before="..." after="..." direction="vertical" */>}}
```

{{< before_after before="https://images.possantti.net/story/B005/draft-example-3.jpeg" after="https://images.possantti.net/story/B005/final-example-3.jpeg" direction="vertical" caption="direction=\"vertical\" — drag up/down instead of left/right." >}}

<p class="sg-subheading"><code>position</code> and custom labels</p>

```text
{{</* before_after before="..." after="..." position="25" before_label="Draft" after_label="Final" */>}}
```

{{< before_after before="https://images.possantti.net/story/B005/draft-example-1.jpeg" after="https://images.possantti.net/story/B005/final-example-1.jpeg" position="25" before_label="Draft" after_label="Final" caption="position=\"25\" starts the reveal near the left edge; labels renamed via before_label/after_label." >}}

<p class="sg-subheading"><code>width=40</code> and <code>align="center"</code> — same sizing/position rules as <code>img</code></p>

```text
{{</* before_after before="..." after="..." width=40 align="center" */>}}
```

{{< before_after before="https://images.possantti.net/story/B005/draft-example-2.jpeg" after="https://images.possantti.net/story/B005/final-example-2.jpeg" width=40 align="center" caption="width=40 align=\"center\" — narrower slider, centered in the column." >}}

<p class="sg-subheading"><code>width_caption=100</code> — caption ignores slider width</p>

```text
{{</* before_after before="..." after="..." width=40 width_caption=100 */>}}
```

{{< before_after before="https://images.possantti.net/story/B005/draft-example-3.jpeg" after="https://images.possantti.net/story/B005/final-example-3.jpeg" width=40 width_caption=100 caption="Same 40% slider, but width_caption=100 forces the caption to span the full text column instead of mirroring the slider." >}}

<p class="sg-subheading">Credit normalization — identical to <code>img</code></p>

An empty/missing credit falls back to italic "Undefined"; an existing `(c)` or `©` in the string is stripped before the single `©` prefix is added.

```text
{{</* before_after before="..." after="..." credit="(c) Jane Doe" */>}}
```

{{< before_after before="https://images.possantti.net/story/B005/draft-example-1.jpeg" after="https://images.possantti.net/story/B005/final-example-1.jpeg" width=40 caption="Credit with a redundant (c)" credit="(c) Jane Doe" >}}

## Equations

Math is rendered by [KaTeX](https://katex.org/) 0.16.9, loaded from a CDN by
`layouts/partials/helpers/katex.html` and switched on for every page by
`math = true` under `[params]` in `hugo.toml`. Nothing needs enabling per
page. Rendering happens in the browser on load, so the page source keeps the
LaTeX verbatim.

<p class="sg-subheading">Delimiters</p>

| Syntax | Mode | Renders as |
|---|---|---|
| `$ ... $` | inline | flows inside the sentence |
| `$$ ... $$` | display | its own centred block |

These two are the only delimiters wired up. `\( ... \)` and
`\[ ... \]` are **not** configured and would print literally.
The KaTeX delimiter list and the Goldmark passthrough delimiters in
`hugo.toml` have to agree, so adding a pair means editing both.

<p class="sg-subheading">Inline</p>

```text
The index $HAND_i = z_i - z_d$ gives the height of cell $i$ above its
nearest drainage $d$.
```

The index $HAND_i = z_i - z_d$ gives the height of cell $i$ above its nearest
drainage $d$.

<p class="sg-subheading">Display</p>

```text
$$
Q = \frac{1}{n} A R_h^{2/3} S^{1/2}
$$
```

$$
Q = \frac{1}{n} A R_h^{2/3} S^{1/2}
$$

<p class="sg-subheading">Multi-line, aligned</p>

The `\\` row separator works, but only because
`[markup.goldmark.extensions.passthrough]` is enabled in `hugo.toml`. Without
it, Goldmark parses the markdown inside the delimiters before KaTeX ever sees
it and turns `\\` into a `<br>`, which makes KaTeX throw a parse
error instead of rendering.

```text
$$
\begin{aligned}
P &= E + Q + \Delta S \\
Q &= Q_s + Q_b
\end{aligned}
$$
```

$$
\begin{aligned}
P &= E + Q + \Delta S \\
Q &= Q_s + Q_b
\end{aligned}
$$

<p class="sg-subheading">Gotchas</p>

- **Two bare `$` in one paragraph become math.** KaTeX scans text nodes for
  delimiter pairs, so prose like "costs `$5` and `$10`" would be read as one
  math span if those amounts were not in backticks, swallowing the words
  between them. A backslash does not help: Goldmark strips it and leaves a
  bare `$` behind. Backticks do work — KaTeX skips `code` and `pre` elements,
  which is also why the source blocks on this page render as text rather than
  as equations.
- **Subscripts never needed escaping.** `$x_a + y_b$` is safe even without
  passthrough, because CommonMark does not apply `_` emphasis inside a word.
- **`*` inside math does need passthrough.** Unspaced `$a*b*c$` would
  otherwise come out as `$a<em>b</em>c$`.

## YouTube videos

Hugo's own built-in shortcode — there is no project override. It is
documented here because the parameter names are easy to forget. The video id
is the `v=` value from the watch URL.

It gives a bare responsive iframe and nothing else. For a video that is a
figure in a post — with a caption, credit and a width — use the
[`ytvideo`](#ytvideo) shortcode below instead.

<p class="sg-subheading">Parameters</p>

| Param | Default | Description |
|---|---|---|
| `id` | — | Video id. Required. May be passed positionally as the first argument. |
| `title` | `YouTube video` | `title` attribute on the iframe. Worth setting for accessibility. |
| `start` | `0` | Start offset in seconds. |
| `end` | `0` | Stop offset in seconds; `0` plays to the end. |
| `autoplay` | `0` | `1` autoplays. Browsers block this unless `mute=1`. |
| `mute` | `0` | `1` starts muted. |
| `loop` | `0` | `1` loops. |
| `controls` | `1` | `0` hides the player controls. |
| `loading` | `eager` | Pass `lazy` for videos far down a long page. |
| `class` | — | Class for the wrapper `div`. See the gotcha below. |

<p class="sg-subheading">Default — positional id</p>

```text
{{</* youtube dC8I9PD8V5A */>}}
```

{{< youtube dC8I9PD8V5A >}}

<p class="sg-subheading">Named parameters</p>

```text
{{</* youtube id="dC8I9PD8V5A" start="30" title="Beven on reading papers" loading="lazy" */>}}
```

{{< youtube id="dC8I9PD8V5A" start="30" title="Beven on reading papers" loading="lazy" >}}

<p class="sg-subheading">Gotcha: <code>class</code> drops the responsive wrapper</p>

By default the shortcode wraps the iframe in a `div` carrying an inline
`padding-bottom: 56.25%` style, which is what keeps the video 16:9 and
full-width on mobile. Passing `class` **replaces** that inline style rather
than adding to it, so the video collapses to zero height unless the class
supplies its own aspect ratio. Leave `class` alone unless you are also
writing the CSS for it.

## ytvideo

YouTube embed wrapped in the same figure block as `img` — caption, credit,
width, alignment. Use it whenever a video is a figure in the flow of a post;
the built-in `youtube` shortcode above gives a bare iframe with none of that.
`layouts/shortcodes/ytvideo.html` → `layouts/partials/ytvideo.html`.

<p class="sg-subheading">Parameters</p>

| Param | Default | Description |
|---|---|---|
| `id` | — | Video id, or any URL it can be read from: `watch?v=ID`, `youtu.be/ID`, `/embed/ID`. Required. |
| `title` | the `caption`, else `YouTube video` | `title` on the iframe, which is what screen readers announce. |
| `start` | — | Start offset in seconds. |
| `ratio` | `16/9` | Aspect ratio as `W/H`. `4/3` for older footage, `9/16` for a vertical clip. |
| `loading` | `lazy` | `lazy` \| `eager`. Defaults to lazy, unlike the built-in shortcode, since these sit in long posts. |
| `caption` | `""` | Caption text. Same behaviour as `img`. |
| `credit` | `""` → italic "Undefined" | Same normalization as `img`: any existing `(c)`/`©` is stripped; output is always prefixed with a single `©`. |
| `width` | `100%` | Player width. Bare numbers are percent (`width=80` == `"80%"`); other CSS units pass through. Note `img` defaults to `70%` — pass `width=70` to match it. Desktop only: at ≤768px the figure always spans the full column. |
| `align` | `left` | Same as `img`: `left` \| `center` \| `right`. |
| `width_caption` | mirrors `width` | Same as `img`. Pass `100` for the full text column regardless of player width. |
| `align_caption` | `left` | Same as `img`: `left` (ragged-right) \| `center` \| `right`. |

<p class="sg-subheading">Default</p>

```text
{{</* ytvideo id="dC8I9PD8V5A" caption="..." credit="..." */>}}
```

{{< ytvideo id="dC8I9PD8V5A" caption="Keith Beven and Jeffrey McDonnell in conversation." credit="The Global Institute for Water Security" >}}

<p class="sg-subheading">Accepts a full URL, not just an id</p>

All three of these resolve to the same video, so a link pasted straight from
the browser works:

```text
{{</* ytvideo id="dC8I9PD8V5A" */>}}
{{</* ytvideo id="https://www.youtube.com/watch?v=dC8I9PD8V5A&ab_channel=X" */>}}
{{</* ytvideo id="https://youtu.be/dC8I9PD8V5A" */>}}
```

<p class="sg-subheading"><code>width=40</code> and <code>align="center"</code></p>

```text
{{</* ytvideo id="..." width=40 align="center" caption="..." */>}}
```

{{< ytvideo id="dC8I9PD8V5A" width=40 align="center" caption="width=40 align=\"center\" — the caption box mirrors the player width by default." >}}

<p class="sg-subheading"><code>width_caption=100</code> — caption ignores player width</p>

```text
{{</* ytvideo id="..." width=40 width_caption=100 caption="..." */>}}
```

{{< ytvideo id="dC8I9PD8V5A" width=40 width_caption=100 caption="Same 40% player, but width_caption=100 forces the caption to span the full text column instead of mirroring it." >}}

<p class="sg-subheading"><code>ratio</code> and <code>start</code></p>

```text
{{</* ytvideo id="..." ratio="4/3" start="30" caption="..." */>}}
```

{{< ytvideo id="dC8I9PD8V5A" ratio="4/3" width=60 start="30" caption="ratio=\"4/3\" boxes the player for older footage; start=\"30\" opens 30 seconds in." >}}

<p class="sg-subheading">Credit normalization — identical to <code>img</code></p>

An empty/missing credit falls back to italic "Undefined"; an existing `(c)`
or `©` in the string is stripped before the single `©` prefix is added.

```text
{{</* ytvideo id="..." caption="Credit with a redundant (c)" credit="(c) Jane Doe" */>}}
```

{{< ytvideo id="dC8I9PD8V5A" width=40 caption="Credit with a redundant (c)" credit="(c) Jane Doe" >}}

## Code blocks

Fenced blocks are highlighted by Hugo's built-in Chroma. `hugo.toml` sets
`markup.highlight.noClasses = false`, so Chroma emits CSS classes instead of
inline colours, and the palette lives in `assets/code-highlight.css` —
catppuccin-latte for light, catppuccin-frappe for dark. That file's header
comment carries the `hugo gen chromastyles` commands to regenerate it.

<p class="sg-subheading">Basic — the language tag sets the lexer</p>

Put the language right after the opening fence. **Omit it and there is no
highlighting at all** — just a plain `<pre>` with no `chroma` class.

````text
```python
def hand(dem, drainage):
    return dem - drainage
```
````

```python
def hand(dem, drainage):
    """Height above nearest drainage."""
    return dem - drainage
```

<p class="sg-subheading">Options</p>

Options go in braces after the language, comma-separated.

| Option | Example | Effect |
|---|---|---|
| `linenos` | `linenos=true` | Line numbers in a side table (`table` behaves the same as `true`). |
| `linenos=inline` | `linenos=inline` | Line numbers inline, so they are selected along with the code. |
| `hl_lines` | `hl_lines=[2,"4-6"]` | Highlight lines. Single numbers and `"from-to"` ranges both work. |
| `linenostart` | `linenostart=10` | Number the first line as 10 — useful when quoting an excerpt. |

<p class="sg-subheading"><code>linenos</code> with <code>hl_lines</code></p>

````text
```python {linenos=true, hl_lines=["2-3"]}
def exposure_curve(hand, addresses):
    levels = classify(hand)
    counts = tally(addresses, levels)
    return counts.cumsum()
```
````

```python {linenos=true, hl_lines=["2-3"]}
def exposure_curve(hand, addresses):
    levels = classify(hand)
    counts = tally(addresses, levels)
    return counts.cumsum()
```

<p class="sg-subheading"><code>linenostart</code> — an excerpt keeping its real line numbers</p>

````text
```python {linenos=true, linenostart=142}
for cell in basin:
    yield cell.elevation - cell.drainage
```
````

```python {linenos=true, linenostart=142}
for cell in basin:
    yield cell.elevation - cell.drainage
```

<p class="sg-subheading">Nesting fences</p>

Each source example above is wrapped in a **four**-backtick fence, because
the block it shows uses three. A three-backtick wrapper would be closed by
the inner fence instead of its own, silently shifting the rest of the page.

<p class="sg-subheading">Showing shortcode source without running it</p>

Every block on this page that displays shortcode source uses the comment form
of the delimiters, `{{</*` and `*/>}}`, which Hugo prints instead of
executing. Without it the example would render the shortcode a second time.
