// 그림자 변화 애니메이션 (단순 예시)
function animateShadows(planets, steps = 10) {
    const frames = [];
    for (let s = 0; s < steps; s++) {
        // 각 step마다 행성 위치/거리/광원 각도 변화 (여기선 거리만 변화)
        const animated = planets.map(p => ({ ...p, distance: p.distance + s*0.05 }));
        frames.push(animated);
    }
    return frames;
}

module.exports = { animateShadows };
