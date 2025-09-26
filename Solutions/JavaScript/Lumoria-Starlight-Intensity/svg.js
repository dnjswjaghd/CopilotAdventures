// SVG 생성: 행성 정렬 시각화
function generateAlignmentSVG(planets, width = 800, height = 200) {
    const margin = 40;
    const maxDistance = Math.max(...planets.map(p => p.distance));
    const maxSize = Math.max(...planets.map(p => p.size));
    let svg = `<svg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg'>\n`;
    svg += `<rect width='100%' height='100%' fill='#111'/>\n`;
    planets.forEach((planet, i) => {
        const x = margin + (planet.distance / maxDistance) * (width - 2 * margin);
        const r = 20 + (planet.size / maxSize) * 40;
        svg += `<circle cx='${x}' cy='${height/2}' r='${r}' fill='#${(100+i*30).toString(16)}aaf0' stroke='#fff' stroke-width='2'/>`;
        svg += `<text x='${x}' y='${height/2 + r + 18}' fill='#fff' font-size='16' text-anchor='middle'>${planet.name}</text>`;
    });
    svg += `</svg>`;
    return svg;
}

module.exports = { generateAlignmentSVG };
