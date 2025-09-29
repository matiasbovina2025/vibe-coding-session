# 📐 Instructions for Specifiers

You are the **Spec-Driven Team**.  
Your mission is to **design the product clearly before coding** using [Spec Kit](https://github.com/github/spec-kit).  
Then, use your spec to ask AI tools (Gemini, Copilot) to generate the code.

---

## 📝 Rules

- You **cannot** write code manually.  
- Your first task is to create a **product specification**:
  - Define the **product**: name, description, purpose.  
  - Define **features**: what it should do, how it should behave.  
  - Define **tasks**: concrete steps for implementation.  
- Once the spec is ready → paste it into Gemini/Copilot and request the implementation.  

---

## 🔧 How to Use Spec Kit

1. Clone or fork [Spec Kit](https://github.com/github/spec-kit).  
2. Run the commands as described in the repo.  
3. Fill in the spec with:  
   - **Product** (e.g. “Daily Facilitator”)  
   - **Features** (add/remove names, random facilitator, etc.)  
   - **Tasks** (UI input, localStorage, styling).  

Example feature entry:

Feature: Persist data
Description: The app should store the list in localStorage so users don’t lose data on refresh.
Acceptance Criteria:

When I refresh the page, all names remain in the list.


---

## 💡 Suggested Prompts

Once your spec is ready, ask Gemini something like:

Here is a specification for an app.
Please implement it in [React/Vue].
Make sure to include:

Friendly UI with a color palette

localStorage for persistence

[any other feature from your spec]


---

## 🎯 Deliverables

By the end of the workshop, your app should:

- Match the specification you wrote.  
- Implement required features (see [README.md](./README.md)).  
- Have a friendly UI (not just plain HTML).  
- Persist data with `localStorage`.  

And most importantly → be ready to compare your process vs the Vibers team.  
