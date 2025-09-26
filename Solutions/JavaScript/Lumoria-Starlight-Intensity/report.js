// 천체 현상 상세 보고서 생성
function generateReport(planets, intensities) {
    let report = `=== Lumoria Celestial Alignment Report ===\n`;
    planets.forEach((p, i) => {
        report += `Planet: ${p.name}\n  Distance: ${p.distance} AU\n  Size: ${p.size} km\n  Light Intensity: ${intensities[i].light}\n`;
    });
    return report;
}

module.exports = { generateReport };
