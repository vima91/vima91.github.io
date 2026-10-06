import sharp from "sharp";
import { fileURLToPath } from "node:url";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fff8ed"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#181818" stroke-width="3"/>
  <path d="M40 122H1160" stroke="#181818" stroke-width="3"/>
  <g font-family="Arial, sans-serif" fill="#181818">
    <text x="76" y="95" font-size="35" font-weight="900" letter-spacing="-2">EVRAM.</text>
    <text x="1122" y="91" text-anchor="end" font-size="17" font-family="monospace">evram.me</text>
    <text x="76" y="186" font-size="19" font-family="monospace">SOFTWARE ENGINEERING MANAGER</text>
    <text x="70" y="279" font-size="76" font-weight="900" letter-spacing="-4">I build engineering</text>
    <text x="70" y="368" font-size="76" font-weight="900" letter-spacing="-4">teams <tspan fill="#2454ff">that deliver.</tspan></text>
    <rect x="76" y="427" width="1048" height="105" fill="#181818"/>
    <rect x="70" y="421" width="1048" height="105" fill="#ffb38a" stroke="#181818" stroke-width="3"/>
    <text x="99" y="470" font-size="30" font-weight="700">Evram Ehab</text>
    <text x="99" y="503" font-size="17" font-family="monospace">TEAMS / .NET / AZURE / AI WORKFLOWS</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(new URL("../public/social-preview.png", import.meta.url)));
