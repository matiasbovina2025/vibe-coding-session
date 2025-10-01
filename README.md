# 🤖 Vibe Coding vs Spec-Driven Workshop

Welcome to the workshop!  
Our goal is to explore two approaches to development with AI:

- **Vibers** → Code directly with AI tools (Gemini, Copilot) using prompts only.  
- **Specifiers** → Define the product clearly using [Spec Kit](https://github.com/github/spec-kit), then let AI generate the code.  

At the end we’ll compare processes, not just results.

---

## 🕒 Agenda (2h30)

- **0:00 – 0:20** → Introduction & group setup  
  - Explain Vibe Coding vs Spec-Driven  
  - Rules and tools setup  
  - Split into groups (6 total: 3 apps × 2 styles)

- **0:20 – 1:40** → Work in groups (80 min)  
  - Each group develops their app (Vibers vs Specifiers)  
  - Facilitators support setup, but no coding help  

- **1:40 – 2:10** → Presentations (30 min)  
  - Each app: Vibers show → Specifiers show → Quick compare  
  - Focus on *process* differences (not who “coded better”)

- **2:10 – 2:30** → Wrap-up & reflections (20 min)  
  - What worked well / what was frustrating  
  - What changed when using a spec  
  - Key learnings & takeaways

---

## 📜 Rules

- **No manual coding!** Code can only come from AI (Copilot, Gemini, or others).  
- **Help**: You can ask Vibers/Specifiers *from your same app* for help, but **not from other apps**.  
- **Default tools**: GitHub Copilot + Gemini. If you want to get creative, we’ll look away 👀.  
- **UI constraint**: Plain HTML not allowed → apps must have a minimal but friendly UI (color palette, layout).  
- **Persistence**: Data must survive page refresh (use `localStorage`).  

---

## 🧩 Applications

There are 3 apps. Each app will have **2 teams** → 1 Vibers + 1 Specifiers.

### 1. Daily Facilitator (Wheel of Names)
- Input: list of names.  
- Features:  
  - Add/remove names.  
  - Pick a random facilitator (no repeats until everyone has been chosen once).  
  - Show history of who facilitated before.  
- Output: selected facilitator + history.  

### 2. Pair Creator
- Input: list of names + anchors (tickets).  
- Features:  
  - Create pairs with anchors.  
  - Allow reshuffling → generate new pairs without losing the input list.  
- Output: list of pairs with their assigned anchor.  

### 3. To-do / Decision Helper
- Input: tasks.  
- Features:  
  - Mark/unmark as completed.  
  - Filter pending or completed.  
  - Add **priority** (low / medium / high).  
  - Sort tasks by priority.  
- Output: filtered and sorted list of tasks.  

---

## 🛠 Tools

Minimum setup:  
- **IDE**: IntelliJ or VS Code  
- **AI**: GitHub Copilot, Gemini  
- **Specifiers**: [Spec Kit](https://github.com/github/spec-kit)  
- **Optional for UX**: Figma, Paint, pen & paper (take a photo), etc.  

---

## 🎯 Expected Outcome

- Working app with basic features.  
- Friendly UI with colors (not just plain HTML).  
- Persistence with `localStorage`.  
- A reflection on the process:  
  - Vibers: How was coding directly with AI?  
  - Specifiers: Did the spec help to structure development?  

---

## 🚀 Next Steps

- Vibers → Check [`INSTRUCTIONS-vibers.md`](./teams/INSTRUCTIONS-vibers.md)  
- Specifiers → Check [`INSTRUCTIONS-specifiers.md`](./teams/INSTRUCTIONS-specifiers.md)  

Good luck, and have fun!
