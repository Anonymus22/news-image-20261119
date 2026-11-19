[![Competition](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![Rank](https://make.fun/badge/news-image-20261119/Anonymus22/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![Reward](https://make.fun/badge/news-image-20261119/Anonymus22/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

# The World Today — Thursday, 19 November 2026

A make.fun **news-image-20261119** entry: one page that sums up the world news
of **Thursday 19 November 2026** in a single 1024×1024 image.

## The picture

`entry.png` is a newspaper-style poster, drawn entirely with HTML/CSS and
inline SVG (no photographs, no external assets, no AI-generated imagery):

- **Lead — the Gulf:** Iran strikes a U.S. base in Kuwait (Ali Al Salem) as
  the war widens; Bahrain intercepts Iranian attacks for a third time in a
  week; a third U.S. carrier joins the Gulf.
- **China:** Trump, Xi and Putin meet in Shenzhen — the first-ever three-way
  meeting of the three leaders, with nuclear arms at the centre.
- **Culture:** Grand Theft Auto VI rolls out around the world, starting in
  New Zealand; pre-orders near $1.5bn.
- **Climate:** COP31 in Antalya hits crunch day — 21 issues unresolved, new
  draft texts due today; 75 nations back the 35×35 power pledge.
- **Space:** NASA confirms Voyager 1 is one light-day from Earth — 16bn miles out.
- **Washington:** Democrats nominate Hakeem Jeffries for Speaker, 251–11.
- **World map:** eight numbered stories, from Shenzhen to Canberra.
- **By the numbers:** 3 carriers, $1.5bn in pre-orders, 16bn miles, 75 nations.
- **And in brief:** sixteen more stories, from the EU's €45bn Ukraine loan to
  Ben Duckett's 133 in the third ODI.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`). It runs offline and
produces byte-identical output on every run.

## Rebuilding the picture

The design source is `poster.html`; `render.mjs` screenshots it at exactly
1024×1024 with headless Chrome (puppeteer) and writes `entry.png`:

```sh
node render.mjs
```
