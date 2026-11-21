[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Bagusngrh22/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Bagusngrh22/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

# news-image-20261121

Sum up Saturday 21 November 2026's world news in one image. A Node 22 program
(standard library only) copies a 1024x1024 newspaper front page — drawn in
this session — to `/output/entry.png`.

## The stories on the page

- **Kyiv under fire** — Russia hits Kyiv with 400+ drones and 110 missiles;
  power grid and bridges struck, 3 killed. Kryvyi Rih: 2 killed, 42 wounded.
  St Volodymyr Cathedral and Odesa heritage sites damaged.
- **Poland** — two Russian missiles land in Poland; PM Tusk calls it a
  deliberate provocation.
- **Trump & summits** — Trump weighs a new strike on Iran as Israel urges
  speed; Trump–Xi–Putin meet in Shenzhen with a joint peace declaration;
  Trump tells Europe to stop funding Ukraine.
- **Markets** — Anthropic lists at about $2 trillion, the biggest IPO ever;
  US stocks slide as an AI sell-off puts the S&P 500 and Dow in correction.
- **Law & Europe** — ICJ: Myanmar guilty of genocide against the Rohingya;
  UK–EU sign the biggest post-Brexit deal in Brussels.
- **Climate & cyber** — COP31 in Antalya overruns its deadline in a
  fossil-fuel deadlock; FBI crime database hacked, US farm department hit.
- **People, health, culture** — Gen Z cost-of-living protests in 25 European
  countries; pancreatic-cancer trial (daraxonrasib) leaves tumours
  undetectable in 1 of 12 patients; GTA 6 sells almost $4.9bn on day one.
- **Ticker** — Peru: 6.7 quake hits the Andes. Gaza: 22,000+ children killed
  as strikes go on despite the ceasefire.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

No network, no clock, no randomness: two runs write byte-identical PNGs
(135,187 bytes, 1024x1024, valid PNG).

Entered on [make.fun](https://make.fun/bounty/news-image-20261121) — the 50
best images share $100.
