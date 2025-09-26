// 사용자 정의 행성/항성계 지원
function createStarSystem(planets) {
    return planets.map(p => ({ ...p }));
}

const defaultPlanets = [
    { name: "Mercuria", distance: 0.4, size: 4879 },
    { name: "Earthia", distance: 1, size: 12742 },
    { name: "Venusia", distance: 0.7, size: 12104 },
    { name: "Marsia", distance: 1.5, size: 6779 }
];



// 그림자 계산 개선 (거리, 크기, 각도 반영)
const { calculateShadow } = require('./Lumoria-Starlight-Intensity/shadowPhysics');

function getShadowCount(planets, currentIndex) {
    return calculateShadow(planets, currentIndex);
}

// Takes the current index and the number of shadows cast on the planet
// and returns the light intensity of the planet
function getLightIntensity(i, shadowCount) {
    /** 
     * RULES
     * - If a smaller planet is behind a larger planet (relative to the Lumorian Sun), it will be in the shadow and will receive no light (`None`).
     * - If a larger planet is behind a smaller planet (relative to the Lumorian Sun), it will have `Partial` light.
     * - If a planet is in the shadow of multiple planets, it will be marked as `None (Multiple Shadows)`.
     * - If two planets are of similar size and are near each other in alignment, they might partially eclipse each other, but for simplicity, you can consider them both to receive full light.
     **/
    if (i === 0) return 'Full';
    if (shadowCount === 1) return 'None';
    if (shadowCount > 1) return 'None (Multiple Shadows)';
    return 'Partial';
}

// SVG, 애니메이션, 보고서 연동
const { generateAlignmentSVG } = require('./Lumoria-Starlight-Intensity/svg');
const { animateShadows } = require('./Lumoria-Starlight-Intensity/shadowAnimation');
const { generateReport } = require('./Lumoria-Starlight-Intensity/report');

function calculateLightIntensity(planets) {
    return planets.map((planet, i) => {
        const shadowCount = getShadowCount(planets, i);
        let lightIntensity = getLightIntensity(i, shadowCount);
        return { name: planet.name, light: lightIntensity };
    });
}

// 메인 실행: 사용자 정의 입력 지원
function runAlignment(planets = defaultPlanets) {
    const starSystem = createStarSystem(planets);
    const sortedPlanets = starSystem.sort((a, b) => a.distance - b.distance);
    const intensities = calculateLightIntensity(sortedPlanets);
    // SVG 시각화
    const svg = generateAlignmentSVG(sortedPlanets);
    // 그림자 애니메이션 프레임
    const animationFrames = animateShadows(sortedPlanets);
    // 상세 보고서
    const report = generateReport(sortedPlanets, intensities);
    // 결과 출력
    console.log(report);
    // SVG 및 애니메이션 프레임 파일로 저장 가능 (예시)
    // require('fs').writeFileSync('alignment.svg', svg);
    // require('fs').writeFileSync('animation.json', JSON.stringify(animationFrames));
    return { svg, animationFrames, report, intensities };
}

// 기본 실행
if (require.main === module) {
    runAlignment();
}

module.exports = { getLightIntensity, runAlignment, createStarSystem };
