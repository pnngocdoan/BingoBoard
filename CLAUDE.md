# Project: Bingo Z (Expo/React Native)

## Vision & Functional Specs
- **Core Idea**: Fast, vibrant Bingo board generator for GenZ.
- **Board Logic**: 
  - Must be a rectangle with 5 rows and 5 columns.
  - Time Granularity: Day, Month, Year modes.
  - Win Condition: 1 row, 1 column, or 1 diagonal triggers success.
  - Cell Interaction: Click to show up a drop down options: Edit text, free space, and trigger AI suggestions.
- **Success State**: Trigger party/confetti animations on win.

## Aesthetic & Design System
- **Style**: Editorial scrapbook / magazine cutout. Bold black typography on textured paper with red accents.
- **Palette**:
  - `cream`: #F2EFE8 — paper background tint
  - `red`: #D13B3B — accent (squiggles, arrows, underlines)
  - `pink`: #FAC9D0
  - `pencil`: #b9bbb3 - pencil feeling
  - **Text**: Always #000000 (Black).
- **Fonts** (loaded from `assets/fonts/` via `expo-font`):
  - Headline: `PlayfairDisplay` — serif, tracking -30 (Canva units); use `fontStyle: 'italic'` only for hero/intro copy, not for UI labels
  - Body/Labels/CTA: `MontserratClassic` — bold sans, tracking -59 (Canva units)
  - Tracking formula: `letterSpacing = (fontSize × tracking) / 1000`
- **Intro Screen Assets** (in `assets/`):
  - `bg_paper.png` — full-screen paper texture background
  - `bg_grid.png` — pencil-grid overlay (full screen, subtle)
  - `hand_pen.png` — B&W hand holding pen, top-right
  - `deco_squiggle.png` — red loop/squiggle, mid-left
  - `deco_fan_right.png` — red fan burst; flip `scaleX: -1` for left side
  - `deco_arrow.png` — red curved arrow pointing to CTA

## Tech Stack
- **Framework**: Expo (Managed Workflow)
- **Navigation**: Expo Router (File-based)
- **Styling**: NativeWind (Tailwind CSS)
- **Animations**: `react-native-reanimated` & `canvas-confetti` (or `lottie-react-native`)
- **Icons**: `lucide-react-native`
- **AI Integration**: Groq API via `groq-sdk`
- **Backend/Storage**: Supabase (boards stored in Supabase DB)

## UI Preview & Testing
- **Style-First Workflow**: Add a debug borderWidth for all components. Explain layers first, then components. 
- **Approval Gate**: Do not write complex logic until the visual style of the component is approved in the preview.
- **Visual Check**: Before moving to logic, Claude must provide a description of the UI layout for visual approval.

## Development Guidelines
- **Instructional Mode**: When integrating a new feature/library, Claude MUST:
  1. **Explain**: Why this library/method was chosen.
  2. **Step-by-Step**: List every command to run (e.g., `npx expo install...`).
  3. **Verification**: Tell the user exactly how to verify the step worked.
- **Workflow**: Always use `/plan` before generating complex UI.
- **TypeScript**: Strict type checking for all components.

## Repo guidelines
- For UI related (colors, font, outliness thickness, etc), store in @constants
- All screens are stored under @screens and all components under @components. Both screens and components must use UI from @constants, which help editing and testing UI-related visual easier

## Token Efficiency & Strict Mode
- **Permission Required**: Ask for confirmation before reading more than 3 files in a single turn.
- **Selective Reading**: Never read an entire file if the task only involves one function; use `read <file>:<line-range>` instead.
- **Anti-Vagueness**: If my prompt is under 10 words or lacks specific file references, do NOT execute. Instead, ask 3 clarifying questions to narrow the context.
- **No Speculative Scans**: Do not "explore" the codebase to find related files. I will provide the `@` references or file paths needed.
- **Compact & Clear**: Suggest a `/compact` session every 10 messages or when the context window reaches 60% capacity.
- **Output Brevity**: Provide only the code changes and a 1-sentence explanation. Do not summarize what I already know.
