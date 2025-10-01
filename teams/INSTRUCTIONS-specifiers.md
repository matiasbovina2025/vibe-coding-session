# 📐 Instructions for Specifiers

You are the **Spec-Driven Team**.  
Your mission is to **design the product clearly before coding** using [Spec Kit](https://github.com/github/spec-kit).  
Then, use your spec to ask AI tools (Gemini, Copilot) to generate the code.

---

## 📝  Setup
1. Install [uv](https://astral.sh/uv) (only once):
curl -LsSf https://astral.sh/uv/install.sh | sh
uv --version
2. Initialize Spec Kit:
- New project: `specify init my-app`
- Existing project: `specify init .`
This creates `.github/prompts/` with prompt templates and a `spec.md`.
---

## 📝 Rules

- You **cannot** write code manually.  
- Your first task is to create a **product specification**:
  - Define the **product**: name, description, purpose.  
  - Define **features**: what it should do, how it should behave.  
  - Define **tasks**: concrete steps for implementation.  
- Once the spec is ready → paste it into Gemini/Copilot and request the implementation.  

---

## 📝 How to Use the Kit
- **Main file to edit** → `spec.md`
- Add product, features, tasks, acceptance criteria.
- **Useful commands with your AI assistant**:
- `/specify` → create baseline spec
- `/plan` → generate high-level plan
- `/tasks` → break plan into actionable tasks
- `/implement` → ask AI to generate code
- `/clarify` (optional) → find ambiguities
- `/analyze` (optional) → check consistency


---■ Deliverables
By the end of the workshop, you should have:
- A clear `spec.md` for your app.
- An app implementation that follows your spec.
- Friendly UI (not plain HTML).
- Data persistence with `localStorage`.
Most important → be ready to compare your process with the **Vibers** team.

■ Deliverables
By the end of the workshop, you should have:
- A clear `spec.md` for your app.
- An app implementation that follows your spec.
- Friendly UI (not plain HTML).
- Data persistence with `localStorage`.
Most important → be ready to compare your process with the **Vibers** team.

## Example 1 – Adjusting Project Constitution
Command:  
/constitution


Action:  
- Edit the generated `constitution.prompt.md` to set global rules for your app.  
- Example additions:  
  - “The UI must use a modern color palette (blue + white).”  
  - “The app should run without external frameworks (plain HTML/JS).”  
  - “No team should have fewer than 3 members.”  

This ensures **all future specs and tasks respect these rules**.

---

## Example 2 – Creating a Feature Spec
Command:  
/specify


Action:  
- Modify the `specify.prompt.md` to describe the product and its main features.  
- Example feature:  

Feature: Team Persistence
Description: Save all participants and teams in localStorage.
Acceptance Criteria:

When refreshing the page, participants and teams are restored.

Run `/specify` again to regenerate the baseline spec with the new feature.

---

## Example 3 – Adding a New Feature Template
Command:  
/template spec Team Shuffle


Action:  
- This generates a **new spec file** for a feature named *Team Shuffle*.  
- Edit it to describe exactly how shuffling should work:  
  - “Shuffle participants randomly.”  
  - “Guarantee each team has at least one technical member if possible.”  

---

## Example 4 – Planning Implementation
Command:  
/plan


Action:  
- Generates a high-level implementation plan from the spec.  
- Edit `plan.prompt.md` to refine steps.  
- Example:  
  - “Step 1: Create participant input form.”  
  - “Step 2: Implement shuffle logic with constraints.”  
  - “Step 3: Store results in localStorage.”  

---

## Example 5 – Breaking into Tasks
Command:  
/tasks


Action:  
- Creates specific tasks based on the plan.  
- Example tasks:  
  - Add text input + “Add participant” button.  
  - Create UI section to display current list.  
  - Add button “Generate Teams.”  
  - Style with CSS for modern look.  

---

## Example 6 – Implementation
Command:  
/implement


Action:  
- Copilot/Gemini will now generate code **based strictly on your spec + tasks**.  
- This is where the magic happens: the better your spec, the cleaner the code.

---

✅ Pro tip: Use `/clarify` before `/plan` if your spec feels ambiguous, and `/analyze` before `/implement` to check consistency.



---
