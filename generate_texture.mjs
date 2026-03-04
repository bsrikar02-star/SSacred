// Final v4: Classic bold golden leopard rosettes to match reference image exactly
import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';

const SIZE = 512;
const canvas = createCanvas(SIZE, SIZE);
const ctx = canvas.getContext('2d');

// Warm golden base
ctx.fillStyle = '#C49228';
ctx.fillRect(0, 0, SIZE, SIZE);

// Subtle warm gradient
const g = ctx.createLinearGradient(0, 0, SIZE, SIZE);
g.addColorStop(0, 'rgba(215,170,55,0.25)');
g.addColorStop(1, 'rgba(165,110,8,0.25)');
ctx.fillStyle = g;
ctx.fillRect(0, 0, SIZE, SIZE);

// Draw a leopard rosette: thick arc strokes around a center
function rosette(cx, cy, r, rot) {
    const DARK = '#231000';
    const LIGHT_CTR = '#C9971E';

    // Outer ring as thick stroke arc (open circle = the rosette ring)
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);

    // Draw 3-4 bold arc segments as the ring
    const arcs = [
        [0.1, 1.05],
        [1.4, 2.35],
        [2.7, 3.70],
        [4.1, 5.05],
    ];

    for (const [s, e] of arcs) {
        ctx.beginPath();
        ctx.arc(0, 0, r, s, e);
        ctx.lineWidth = r * 0.55;
        ctx.strokeStyle = DARK;
        ctx.lineCap = 'round';
        ctx.stroke();
    }

    ctx.restore();

    // Central warm spot
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.38, 0, Math.PI * 2);
    ctx.fillStyle = LIGHT_CTR;
    ctx.fill();
}

function spot(cx, cy, rx, ry, rot) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#231000';
    ctx.fill();
    ctx.restore();
}

// Rosettes: [cx, cy, radius, rotation]  – laid out to tile at 512×512
const Rs = [
    [68, 58, 26, 0.20],
    [195, 38, 22, 1.00],
    [348, 65, 28, 0.75],
    [475, 48, 23, 1.55],
    [8, 175, 21, 0.50], // pair with [520,175]
    [520, 175, 21, 0.50],
    [148, 168, 29, 0.30],
    [295, 148, 24, 1.30],
    [428, 165, 26, 0.60],
    [80, 272, 28, 0.55],
    [218, 265, 23, 1.15],
    [358, 278, 30, 0.40],
    [490, 258, 24, 1.65],
    [2, 258, 24, 1.65], // tile mirror
    [135, 365, 26, 0.85],
    [272, 360, 22, 0.25],
    [408, 375, 28, 1.20],
    [45, 458, 25, 0.65],
    [180, 468, 21, 1.45],
    [325, 460, 26, 0.90],
    [462, 465, 23, 0.35],
    // Top edge mirrors for tiling
    [68, 570, 26, 0.20],
    [348, 577, 28, 0.75],
    [148, 680, 29, 0.30],
];

Rs.forEach(([cx, cy, r, rot]) => rosette(cx, cy, r, rot));

// Accent spots
const Sp = [
    [255, 85, 10, 15, 0.4],
    [425, 105, 9, 13, 1.2],
    [105, 108, 10, 14, 0.8],
    [505, 210, 9, 13, 0.2],
    [3, 210, 9, 13, 0.2],
    [168, 318, 9, 13, 1.5],
    [338, 188, 9, 13, 0.7],
    [480, 395, 10, 14, 1.0],
    [72, 398, 9, 13, 0.5],
    [235, 425, 10, 14, 1.3],
    [380, 512, 9, 13, 0.8],
    [380, 0, 9, 13, 0.8],
    [132, 512, 10, 14, 0.4],
    [132, 0, 10, 14, 0.4],
];
Sp.forEach(([cx, cy, rx, ry, rot]) => spot(cx, cy, rx, ry, rot));

// Film grain
for (let i = 0; i < 5000; i++) {
    ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.035})`;
    ctx.fillRect(Math.random() * SIZE, Math.random() * SIZE, 1, 1);
}

const buf = canvas.toBuffer('image/png');
writeFileSync('./public/leopard_texture.png', buf);
console.log('✅ Done → public/leopard_texture.png');
