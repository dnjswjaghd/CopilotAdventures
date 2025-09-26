// 그림자 계산의 과학적 정확도 개선
function calculateShadow(planets, currentIndex) {
    // 실제 거리, 크기, 광원 각도 반영 (단순화)
    const current = planets[currentIndex];
    let shadowing = 0;
    for (let i = 0; i < currentIndex; i++) {
        const p = planets[i];
        // 그림자 조건: 앞쪽에 있고, 크기가 더 크며, 거리 차이가 임계값 이내
        if (p.size > current.size && Math.abs(p.distance - current.distance) < 0.3) {
            shadowing++;
        }
    }
    return shadowing;
}

module.exports = { calculateShadow };
