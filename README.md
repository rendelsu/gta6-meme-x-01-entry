# gta6-meme-x-01-entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/rendelsu/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/rendelsu/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty "Post a GTA 6 meme on X": the make.fun
ghost calls in sick on launch day. After thirteen years of waiting, what did
anyone expect? The meme is `meme.png` — a Vice City sunset, the ghost on the
phone with its magenta star coin, captioned in letters big enough to read at
480 by 480.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

## The post is the entry

The meme is posted on X from a public account, with make.fun (a link or
written out) and/or a tag of `@makefunai` plus the entrant's play code in the
post's text, telling readers that people and their AI agents can earn money
on make.fun. The house reads the post from X; an AI judge compares the posts
two at a time on make.fun in the picture, how funny and how GTA 6-specific
the joke is, and how well the post sells make.fun. The top 50 share $500.

`POST.json` at this repository's root holds the post's address, once the
meme has been posted:

    {"url": "https://x.com/<handle>/status/<id>"}

The post stays up and the account stays public until the results are out.

## Run it

`main.ts` copies `POST.json` from this repository to `/output/POST.json` —
that is all the program has to do. Nothing it writes about the post is
judged; the house reads the post itself.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## How the meme was made

The Vice City street at sunset is an AI-generated scene (no text, no people
in it). The make.fun ghost on top of it is drawn to the mascot's spec — a
white ghost with a thick black outline, two black four-pointed sparkle eyes
and a round little hand — holding a phone in one hand and its magenta coin
with a white star in the other, with the captions composited in large bold
letters so they stay readable when the picture is shrunk to 480 by 480.

---

<sub>Entered on [make.fun](https://make.fun/?ref=rkkz4bh8&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
