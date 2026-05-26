# 천하제일 입코딩 대회 랜딩 페이지 — Copilot 가이드

이 저장소는 행사 랜딩 페이지(https://lipcoding.kr)다. 매년 신규 이벤트 페이지를 추가하고 이전 페이지는 `/<연도>` 경로에 아카이브한다.

## 기술 스택

- Vite + React 18 + TypeScript
- Tailwind CSS (다크 테마, 커스텀 디자인 토큰 사용)
- framer-motion (스크롤·페이드 애니메이션)
- shadcn-ui (`src/components/ui/`) · Radix 기반
- lucide-react (아이콘)
- react-router-dom (라우팅)
- 배포: GitHub Pages (`.github/workflows/publish-gh-pages.yaml`)

## 디렉터리 구조

```
src/
├── components/
│   ├── 2025/       # 2025 대회용 컴포넌트 (아카이브, 수정 금지)
│   ├── 2026/       # 현재 대회용 컴포넌트 (작업 대상)
│   └── ui/         # shadcn 컴포넌트 (가급적 손대지 않기)
├── pages/
│   ├── Index.tsx        # 현재(2026) 랜딩, "/"
│   ├── Index2025.tsx    # 2025 아카이브, "/2025"
│   └── NotFound.tsx     # 404 (SPA 리다이렉트 포함)
├── App.tsx              # 라우팅
├── index.css            # Tailwind + 커스텀 utility (glass-card, halftone-dots, orb-*, mint 등)
└── main.tsx
```

라우트 추가는 `App.tsx`의 catch-all `*` 위에 등록한다.

## 작업 원칙

- **현재 행사 작업은 `src/components/2026/`에서만 한다.** `src/components/2025/`와 `src/pages/Index2025.tsx`는 아카이브이므로 수정 금지.
- 새 섹션을 추가할 때:
  1. `src/components/2026/<Name>Section.tsx` 생성
  2. `src/pages/Index.tsx`에서 import 후 적절한 위치에 배치
- 기존 섹션 컴포넌트(`HeroSection`, `KeynoteSection`, `ScheduleSection`, `BenefitsSection`, `PrizeSection`, `SponsorsSection` 등)의 패턴을 따른다.
- 새 패키지 설치는 꼭 필요할 때만. 이미 설치된 라이브러리(framer-motion, lucide-react, shadcn-ui)로 해결 가능한지 먼저 확인.

## 디자인 토큰 & 스타일

다크 테마가 일관된 정체성이다. 새 섹션도 다크 테마를 따른다.

**배경 (Tailwind 클래스)**
- `bg-ink-0` (#000000), `bg-ink-1` (#0a0a0a), `bg-ink-2`, `bg-ink-3`
- 인접 섹션끼리는 톤을 교차시켜 구분감을 준다 (예: ink-0 → ink-1 → ink-0).

**액센트 컬러**
- `text-mint` / `bg-mint/*` (#5fed83) — 주요 강조색. 키워드, 강조 행, 링크에 사용.
- `text-primer-gradient` — mint 단색 (legacy alias).
- 보조: `primer-cyan`, `primer-purple`, `primer-pink` (배경 오브, 그라데이션).

**커스텀 utility (`src/index.css`)**
- `glass-card` — 반투명 다크 카드. 거의 모든 카드/박스에 사용.
- `halftone-dots`, `halftone-dots-corner` — 배경 패턴 (보라색 점).
- `orb-pink`, `orb-cyan`, `orb-purple`, `orb-green` — 배경 광원 블러 효과.
- `divider-mint`, `divider-mint-v` — mint 그라데이션 구분선.
- `btn-gradient-border` — 그라데이션 테두리 버튼.

**타이포그래피**
- `font-display` (Mona Sans / Inter, ss01·ss02 feature 활성화)
- 섹션 제목 패턴:
  ```
  <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
    한국어 <span className="text-mint">강조</span>
  </h2>
  ```
- 섹션 위 라벨: `text-[11px] uppercase tracking-[0.25em] text-white/40 font-semibold`

## 섹션 컴포넌트 표준 패턴

```tsx
import { motion } from "framer-motion";

const FooSection = () => {
  return (
    <section className="relative py-24 px-4 bg-ink-1 font-display overflow-hidden">
      <div className="absolute inset-0 halftone-dots-corner opacity-10 pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* 라벨 + 제목 */}
        </motion.div>

        {/* 본문은 glass-card + motion.div로 구성 */}
      </div>
    </section>
  );
};

export default FooSection;
```

- 스크롤 진입 애니메이션: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`
- 카드 리스트는 `transition={{ delay: i * 0.1 }}` 식으로 스태거.
- 외부 링크: `target="_blank" rel="noopener noreferrer"` 필수.

## 외부 이미지 자산

행사 이미지는 보통 다음 경로에 호스팅된다:
```
https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/<filename>
```
새 이미지는 같은 호스트에 올린다고 가정하고 절대 URL로 참조한다. 모든 `<img>`는 `loading="lazy"` 부여.

## 명령어

```sh
npm i             # 패키지 설치
npm run dev       # 로컬 개발 서버 (Vite, 보통 8080 사용)
npm run build     # 프로덕션 빌드 (dist/)
npm run lint      # ESLint
npm run preview   # 빌드 결과 미리보기
```

## 코드 스타일

- TypeScript 엄격 모드 유지. 불필요한 `any` 지양.
- 컴포넌트는 함수형 + default export, 파일명은 PascalCase (`HeroSection.tsx`).
- 데이터 배열은 컴포넌트 파일 상단 상수로 분리 (`const PRIZES: Prize[] = [...]`).
- 모바일 우선 반응형: 기본 → `md:` → `lg:` 순서.
- 주석은 비자명한 의도에만 짧게. 명확한 코드를 다시 설명하지 말 것.

## 보안 고려 사항

`~/.claude/CLAUDE.md`의 Shannon 트리거 규칙은 Claude Code 한정이므로 Copilot 사용자에게는 적용되지 않지만, 다음 영역을 변경할 때는 별도 보안 검토를 권장한다:
- 외부 입력(쿼리 파라미터, 폼) 처리
- 외부 리다이렉트
- 환경 변수·시크릿 처리

## 배포

`main` 브랜치 푸시 시 `publish-gh-pages.yaml` 워크플로우가 자동 배포한다. 별도 수동 단계 없음. 푸시 전 `npm run build`로 로컬 빌드 통과를 확인한다.

## 참고 링크

- 행사 페이지: https://lipcoding.kr
- 신청: https://ticketa.co/event/z49uyhx8
- 토론: https://lipcoding.kr/discussions
- 2025 아카이브: https://lipcoding.kr/2025
