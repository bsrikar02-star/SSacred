// SSacred logo PNG — leopard fill + gold glow — fixed compositing
import { createCanvas, loadImage } from 'canvas';
import { writeFileSync } from 'fs';

const W = 900, H = 260;

// ── Step 1: Render crisp text mask ───────────────────────────────────────────
const maskCanvas = createCanvas(W, H);
const mCtx = maskCanvas.getContext('2d');
mCtx.clearRect(0, 0, W, H);
mCtx.font = '900 215px "Arial Black", Arial, sans-serif';
mCtx.textAlign = 'center';
mCtx.textBaseline = 'middle';
mCtx.fillStyle = '#ffffff';
mCtx.fillText('SSacred', W / 2, H / 2 + 5);

// ── Step 2: Tile leopard texture, clipped to text shape ──────────────────────
const texCanvas = createCanvas(W, H);
const tCtx = texCanvas.getContext('2d');
const tex = await loadImage('./public/leopard_texture.png');
const TILE = 150;
for (let x = 0; x < W; x += TILE)
    for (let y = 0; y < H; y += TILE)
        tCtx.drawImage(tex, x, y, TILE, TILE);

// Multiply: keep only pixels where mask is white
tCtx.globalCompositeOperation = 'destination-in';
tCtx.drawImage(maskCanvas, 0, 0);

// ── Step 3: Compose final image ────────────────────────────────────────────────
const out = createCanvas(W, H);
const ctx = out.getContext('2d');
// Solid white background
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, W, H);

// Thick black stroke for outline
ctx.save();
ctx.font = '900 215px "Arial Black", Arial, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.lineJoin = 'round';
ctx.miterLimit = 2;
ctx.strokeStyle = '#000000';
ctx.lineWidth = 18;
ctx.strokeText('SSacred', W / 2, H / 2 + 5);
ctx.restore();

// Now draw the leopard-textured text on top of the black outline
ctx.drawImage(texCanvas, 0, 0);

writeFileSync('./public/ssacred_logo.png', out.toBuffer('image/png'));
console.log('✅ Logo saved → public/ssacred_logo.png');
