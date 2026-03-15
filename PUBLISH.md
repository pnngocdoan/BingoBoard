# Bingo Z — Publishing Checklist

## App Info
| Field | Value |
|---|---|
| App name | Bingo Z |
| Bundle ID (iOS) | com.pnngocdoan.bingoz |
| Package name (Android) | com.pnngocdoan.bingoz |
| Version | 1.0.0 |
| Privacy policy URL | https://pnngocdoan.github.io/BingoBoard/privacy-policy.html |
| Support email | ngocdoanpn@gmail.com |
| Category | Lifestyle |
| Age rating | 13+ |

---

## Store Listing Copy

**Subtitle / Short description**
```
Vision board bingo for GenZ
```

**Play Store short description** (80 chars max)
```
Turn your vision board into a bingo game. Check off goals, win the day.
```

**Full description** (use for both stores)
```
Bingo Z turns your goals into a game.

Build a 5×5 vision board, fill it with the things you want to do — daily
habits, monthly milestones, yearly dreams — then check them off and hit bingo.

✦ AI-powered suggestions to fill your board fast
✦ Day, Month, and Year modes to match your pace
✦ Confetti celebrations when you win
✦ Clean scrapbook aesthetic — bold, editorial, unapologetically you

No fluff. No streaks. Just your goals and the satisfaction of crossing them off.

Start your board. Hit bingo. Repeat.
```

**Keywords (App Store — 100 chars max)**
```
bingo,vision board,goals,habits,genz,daily,tracker,challenge,motivation,game
```

---

## Screenshots
All stored in `screenshots/` folder.

| File | Screen | Use for |
|---|---|---|
| `ios_intro.png` | Intro screen | App Store + Play Store |
| `ios_board.png` | Bingo board | App Store + Play Store |
| `ios_03.png` | AI suggestions | App Store + Play Store |
| `ios_win.png` | Win + confetti | App Store + Play Store |

> App Store requires 6.7"/6.9" size — all taken on iPhone 16 Pro Max ✓

---

## EAS Environment Variables (set before building)
These must be added as EAS secrets — never commit them.

```bash
eas secret:create --scope project --name EXPO_PUBLIC_GROQ_KEY --value <your_groq_key>
eas secret:create --scope project --name EXPO_PUBLIC_SUPABASE_URL --value <your_supabase_url>
eas secret:create --scope project --name EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY --value <your_supabase_anon_key>
```

---

## Build & Submit Commands

### Step 1 — Link EAS project (one-time)
```bash
eas init
```

### Step 2 — Build production
```bash
eas build --platform all --profile production
```

### Step 3 — Submit
```bash
# App Store
eas submit --platform ios

# Play Store (requires google-service-account.json first — see below)
eas submit --platform android
```

---

## Google Play — Service Account Key
Required for `eas submit --platform android`.

1. Go to [Google Play Console](https://play.google.com/console) → Setup → API access
2. Link to a Google Cloud project
3. Create a service account → grant **Release Manager** role
4. Download the JSON key
5. Save as `google-service-account.json` in project root (already gitignored)

---

## App Store Connect — One-time Setup
1. Log in at [appstoreconnect.apple.com](https://appstoreconnect.apple.com) with `ngocdoanpn@gmail.com`
2. Create new app → iOS → Bundle ID: `com.pnngocdoan.bingoz`
3. Fill in listing using copy above
4. Upload screenshots from `screenshots/` folder
5. Set privacy policy URL
6. Submit for review after build is uploaded

---

## Play Store — One-time Setup
1. Log in at [play.google.com/console](https://play.google.com/console)
2. Create new app → Android → Package: `com.pnngocdoan.bingoz`
3. Complete store listing using copy above
4. Data safety section — declare:
   - **Groq**: processes user text (AI suggestions), not stored
   - **Supabase**: stores board content, no personal data
5. Content rating questionnaire → select 13+
6. Set privacy policy URL
7. Upload screenshots
8. Submit build via `eas submit`

---

## TODO before first publish
- [ ] Run `eas init` to link project
- [ ] Add EAS secrets (Groq key, Supabase URL + key)
- [ ] Set up Google Play service account key
- [ ] Take Android screenshots (Android emulator or physical device)
- [ ] Complete App Store Connect listing
- [ ] Complete Play Store listing + data safety section
- [ ] Run `eas build --platform all --profile production`
- [ ] Submit to both stores
