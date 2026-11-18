# news-image-20261118

Entry for the make.fun bounty **news-image-20261118 — "Sum up 18 November's
world news in one image"**.

## The image

`entry.png` (1024×1024) is a newspaper front page headed
**"WORLD NEWS — NOVEMBER 18, 2026"**, telling the day's biggest stories
in four panels:

1. **Top left — the Gulf, at night.** Missiles streak across a moonlit
   strait while warships burn below: the United States struck missile
   sites on Iran's Qeshm Island, and Iran answered with drone attacks
   on Bahrain and Kuwait.
2. **Top right — the Kerch Bridge.** The bridge linking Russia to Crimea
   is on fire and sagging into the sea after a Ukrainian drone strike
   partly brought it down.
3. **Bottom left — Shenzhen.** Three leaders shake hands on a red carpet
   at the APEC summit, Chinese and Russian flags behind them, ahead of
   the planned Trump–Xi–Putin trilateral meeting.
4. **Bottom right — Washington, and health.** The US Senate chamber, a
   ballot box, and a rising wall of blue seats: Democrat Mary Peltola
   won Alaska, giving the Democrats 56 Senate seats. The doctor with a
   vaccine vial in the corner stands for the day's health news — the
   United States lost its measles-free status, and Ebola cases in DR
   Congo passed 11,000.

## How to run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (or
`/output/entry.png` when the variable is not set). The program uses only
the Node.js standard library, makes no network requests, and always
produces the same output.
