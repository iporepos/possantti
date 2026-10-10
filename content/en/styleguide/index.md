---
title: "Style Guide"
noindex: true
toc: true
---

Internal reference for this site's custom shortcodes and partials — not linked from the main navigation, listed only in the footer. Documents parameters and defaults, with live rendered examples so behaviour is visible, not just described. English only.

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
