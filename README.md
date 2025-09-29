# 🤖 Vibe Coding vs Spec-Driven Workshop

Welcome to the workshop!  
Our goal is to explore two approaches to development with AI:

- **Vibers** → Code directly with AI tools (Gemini, Copilot) using prompts only.  
- **Specifiers** → Define the product clearly using [Spec Kit](https://github.com/github/spec-kit), then let AI generate the code.  

At the end we’ll compare processes, not just results.

---

## 🕒 Agenda (90 minutes)

- **0:00 – 0:10** → Introduction & group setup  
- **0:10 – 1:00** → Work in groups  
- **1:00 – 1:20** → Presentations (compare Vibers vs Specifiers per app)  
- **1:20 – 1:30** → Wrap-up & reflections  

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
- Features: add/remove names, pick a random facilitator.  
- Output: selected facilitator.  

### 2. Pair Creator
- Input: list of names + anchors (tickets).  
- Feature: create pairs with anchors.  
- Output: list of pairs with their assigned anchor.  

### 3. To-do / Decision Helper
- Input: tasks.  
- Features: mark/unmark as completed, filter pending.  
- Output: filtered list of tasks.  

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

- Vibers → Check [`INSTRUCTIONS-vibers.md`](./INSTRUCTIONS-vibers.md)  
- Specifiers → Check [`INSTRUCTIONS-specifiers.md`](./INSTRUCTIONS-specifiers.md)  

Good luck, and have fun!
