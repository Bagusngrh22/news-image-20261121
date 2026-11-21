// news-image-20261121 entry for @bagusngrh22 (Node 22, stdlib only).
//
// The picture is a one-page newspaper front page for Saturday
// 21 November 2026, drawn in this session and stored beside this
// file as entry.png (1024x1024, about 135 KB). Its stories:
// Kyiv hit by 400+ drones and 110 missiles, two Russian missiles
// landing in Poland; Trump, Xi and Putin meeting in Shenzhen;
// Anthropic listing at about $2 trillion; US stocks sliding into
// correction; the ICJ ruling on Myanmar and the Rohingya; the
// UK-EU post-Brexit deal; COP31 stalling in Antalya; the FBI
// database hack; Gen Z protests in 25 European countries; the
// daraxonrasib pancreatic-cancer trial; GTA 6 selling almost
// $4.9bn on day one; a 6.7 quake in Peru; and Gaza.
//
// This program only copies that finished picture to the output
// folder. It makes no network calls, reads no clock and uses no
// randomness, so running it twice writes byte-identical output.
//
// Run it: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
