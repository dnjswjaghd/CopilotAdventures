# The Celestial Alignment of Lumoria

## 개요

이 콘솔 애플리케이션은 루모리아 항성계의 행성들이 태양으로부터 받는 빛의 강도를 판별합니다. 각 행성은 거리와 크기에 따라 그림자 규칙이 적용되어, Full, Partial, None, 또는 None (Multiple Shadows)로 분류됩니다.

## 사용법

```bash
node The-Celestial-Alignment-of-Lumoria.js
```

## 행성 데이터
- 머큐리아(Mercuria): 0.4 AU, 4,879 km
- 비누시아(Venusia): 0.7 AU, 12,104 km
- 어스시아(Earthia): 1.0 AU, 12,742 km
- 마르시아(Marsia): 1.5 AU, 6,779 km

## 그림자 규칙
- **Full**: 더 가까운 더 큰 행성이 있을 때
- **Partial**: 더 가까운 더 작은 행성이 있을 때
- **None**: 더 가까운 행성이 없을 때
- **None (Multiple Shadows)**: 더 가까운 행성이 2개 이상일 때

## 예시 출력
```
★━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━★
	Lumoria Starlight Intensity Calculator
	────────────────────────────────────────────────
	Planet      Distance (AU)   Diameter (km)   Starlight
★━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━★
	Mercuria   0.40            4879            🌕 None
	Venusia    0.70            12104           🌑 Full
	Earthia    1.00            12742           🌑 Full
	Marsia     1.50            6779            🌘🌑 None (Multiple Shadows)
★━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━★
	Legend: 🌑 Full | 🌗 Partial | 🌕 None | 🌘🌑 Multiple Shadows
★━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━★
```

## 오류 처리
- 시스템 오류 발생 시 "Celestial misalignment detected" 메시지가 출력됩니다.

## 교육적 참고
- 본 코드는 Copilot Agent 모드의 요구사항 분해, 판타지 로직 구현, 테마 출력 예시를 보여줍니다.
# Lumoria Starlight Intensity System

이 프로젝트는 루모리아 항성계의 행성별 빛 강도 계산을 위한 콘솔 기반 JavaScript 애플리케이션입니다.

## 기능
- 행성 데이터(거리, 크기) 정의
- 거리순 정렬 및 그림자 규칙 적용
- 각 행성의 빛 강도(Full, Partial, None, None(Multiple Shadows)) 계산 및 출력
- 천체 테마의 아름다운 콘솔 출력
- 오류 처리 및 명확한 주석 포함

## 실행 방법
```bash
node LumoriaStarlightIntensity.js
```

## 테스트
테스트 파일(`LumoriaStarlightIntensity.test.js`)을 통해 주요 기능을 검증할 수 있습니다.

---
CopilotAdventures - 루모리아 항성계 빛 강도 예제
