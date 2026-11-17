# Task Manager

A beginner-friendly personal task manager built as the practical project of a five-day **Introduction to Web Development**. The application is developed step by step, starting with a semantic HTML foundation on Day 1 and growing into a styled, interactive, and finally TypeScript-typed application by Day 5.

> **Current status:** Day 1 — HTML structure. The page markup and task form exist, but styling, JavaScript behaviour, and persistence have not been implemented yet. See [Progressive Development Roadmap](#progressive-development-roadmap).

---

## Table of Contents

- [Project Overview](#project-overview)
- [Project Concept](#project-concept)
- [Learning Objectives](#learning-objectives)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How to Run the Project](#how-to-run-the-project)
- [How to Use the Application](#how-to-use-the-application)
- [Progressive Development Roadmap](#progressive-development-roadmap)
- [Learning Outcomes](#learning-outcomes)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

**Task Manager** is a small web application for planning work. Users can capture a task by entering a title, an optional description, a priority level, and a due date, then review their tasks in a single list.

The project exists to make web development concepts concrete. Instead of isolated exercises, each day adds a layer to the same application:

- **Day 1** establishes the page structure with semantic HTML.
- **Day 2** turns that structure into a designed, responsive interface with CSS.
- **Day 3** makes the interface interactive with JavaScript and the DOM.
- **Day 4** adds data handling with arrays, objects, JSON, storage, and object-oriented patterns.
- **Day 5** introduces TypeScript and applies typing to the existing code.

The goal is not only a working task manager, but a visible record of how a real frontend project is assembled one concern at a time.

## Project Concept

The concept below was presented on **Day 1** of the training and defines the visual and functional direction of the project.

![Task Manager Project Concept](images/concept.png)

The concept illustrates the intended end state: a header and description, an **Add Task** form with title, description, priority, and due date, an **Add Task** button, a task list with priority badges, and a footer.

> **Note:** The screenshot represents the project vision, not the current implementation. At the Day 1 stage, the repository contains only the HTML structure. Styling, task cards, badges, and interactive behaviour are introduced on later days.

## Learning Objectives

By building this project, learners practise:

- Structuring a page with semantic HTML5 elements such as `header`, `main`, `section`, `form`, and `footer`.
- Building accessible forms with labels, input types, and built-in validation.
- Styling an interface with CSS, including layout, spacing, colour, and typography.
- Creating responsive layouts with Flexbox and CSS custom properties.
- Selecting and manipulating DOM elements with JavaScript.
- Handling user events such as form submission and button clicks.
- Modelling data with arrays and objects, and serialising it with JSON.
- Persisting data in the browser with Web Storage.
- Organising code with object-oriented programming principles.
- Applying TypeScript types to functions, data models, and DOM interactions.
- Reading, extending, and documenting an existing codebase.

## Technologies Used

Only the technologies below are present in the repository today.

| Technology | Role in the project | Status |
| --- | --- | --- |
| HTML5 | Page structure, semantic sections, and the task form | Implemented |
| CSS | Visual design and responsive layout | Planned — stylesheet not yet added |
| JavaScript | Task creation, DOM updates, and interaction | Planned |
| JSON / Web Storage | Saving tasks between page reloads | Planned |
| TypeScript | Typed version of the application logic | Planned |

**No build tools, package managers, frameworks, or third-party dependencies are used at this stage.** The project runs directly in a web browser.

The document currently links to `styles.css`, but that file does not exist yet. The link is in place for the Day 2 styling work.

## Features

### Implemented today

- A page header with the application title and a short description.
- An **Add Task** form containing:
  - a required **Title** text input,
  - an optional **Description** text area,
  - a **Priority** selector with Low, Medium (default), and High options,
  - an optional **Due date** date picker,
  - a submit button labelled **Add Task**.
- A **My Tasks** section with an empty list container ready to receive tasks.
- A footer with the project copyright line.
- Basic browser validation for the required title field, provided by HTML attributes.

### Not implemented yet

These behaviours are part of the project plan but are **not** present in the code:

- Styling of any kind — the page renders with browser default styles.
- Adding a submitted task to the list.
- Marking tasks as complete or deleting them.
- Filtering, sorting, or searching tasks.
- Saving tasks in the browser.
- Any JavaScript or TypeScript file.

## Project Structure

```text
task-manager/
├── index.html          # Page structure: header, add-task form, task list, footer
├── README.md           # Project documentation (this file)
└── images/
    └── concept.png     # Original Day 1 concept presented
```

| Path | Description |
| --- | --- |
| `index.html` | The single HTML page. Contains the semantic layout and the task form. It references `styles.css`. |
| `images/concept.png` | The original concept image from Day 1. It is the design reference for later stages. |
| `README.md` | Documentation covering the project, its structure, and its learning roadmap. |

Additional files such as a stylesheet, JavaScript modules, and TypeScript configuration will be added as the training progresses. They are listed in the roadmap, not in the current structure.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge).
- A code editor such as Visual Studio Code — recommended for the Live Preview option, but not required.
- [Git](https://git-scm.com/) — only needed if you want to clone the repository.

The project is entirely frontend. No server, runtime, package manager, or dependency installation is required to view it.

### Step 1 — Get the project

Clone the repository:

```bash
git clone https://github.com/trgeorgeogilo/task-manager.git
cd task-manager
```

Alternatively, download the repository as a ZIP from GitHub and extract it.

### Step 2 — Confirm the files

Your project folder should contain:

```text
index.html
README.md
images/concept.png
```

### Step 3 — Open the project

Open `index.html` directly in a browser, or preview it inside VS Code. Both options are described in the next section.

## How to Run the Project

The application is plain HTML, so there is no build step and nothing to install. Choose either option below.

### Option A — Open the file in your browser

Double-click `index.html` in your file manager, or drag it into a browser window. The page opens with a `file://` URL and works immediately.

### Option B — Preview it in VS Code

1. Open the project folder in Visual Studio Code.
2. Install the **Live Preview** extension (`ms-vscode.live-server`) from the Extensions panel.
3. Right-click `index.html` in the Explorer and choose **Show Preview**, or run **Live Preview: Show Preview (Internal)** from the Command Palette (`Ctrl+Shift+P`).
4. The page opens in an embedded browser inside VS Code and refreshes when you save changes.

This option is convenient while developing, because you can edit the HTML and see the result without leaving the editor.

> **Note:** Visual Studio Code's **Live Server** extension (`ritwickdey.liveserver`) is an equally valid alternative. Either preview tool can be used — neither is a project dependency.

## How to Use the Application

The current version is a structural prototype. You can explore the interface, but tasks are not yet saved.

1. Open the application using either option in [How to Run the Project](#how-to-run-the-project).
2. In the **Add Task** section, enter a **Title**. This field is required.
3. Optionally add a **Description**.
4. Choose a **Priority** — Low, Medium, or High. Medium is selected by default.
5. Optionally choose a **Due date**.
6. Click **Add Task**.

Because no JavaScript is connected to the form yet, submitting it does not create a task. The browser may reload the page, and the **My Tasks** list remains empty. This is expected at the Day 1 stage and is the first behaviour addressed during the JavaScript sessions.

## Progressive Development Roadmap

The project is built incrementally. The table separates what is complete from what is planned.

| Day | Topic | Focus | Project work | Status |
| --- | --- | --- | --- | --- |
| **Day 1** | HTML5 | Semantic structure and forms | Page header, add-task form, task list container, footer | **Completed** |
| **Day 2** | CSS | Layout, colour, typography, responsiveness | Stylesheet, Flexbox layout, CSS variables, priority colours, hover and focus states, responsive behaviour | Planned |
| **Day 3** | JavaScript | Programming fundamentals and the DOM | Reading form values, preventing default submission, creating task elements, event handling, basic task interactions | Planned |
| **Day 4** | Advanced JavaScript | Data modelling and persistence | Arrays and objects for tasks, JSON serialisation, Web Storage, object-oriented structure, completion and deletion | Planned |
| **Day 5** | TypeScript | Static typing | TypeScript setup, typed task models, typed functions, DOM type annotations, migration of the JavaScript logic | Planned |

### What each day adds

**Day 1 — HTML5 (complete)**
The page is divided into meaningful regions using `header`, `main`, `section`, and `footer`. The form uses `label` elements linked to inputs by `for` and `id`, an appropriate `input type="date"`, a `select` for priority, and a `required` attribute for the title. This provides structure, accessibility, and built-in validation without any styling or scripting.

**Day 2 — CSS (planned)**
A stylesheet will be created and connected to the existing `styles.css` reference. The work will cover the visual system from the concept image: layout with Flexbox, spacing, typography, colour, CSS custom properties for reusable values, interactive states for buttons and fields, priority styling, and a layout that adapts to smaller screens.

**Day 3 — JavaScript (planned)**
JavaScript will connect the form to the task list. Learners will read input values, stop the default form submission, create list items dynamically, and respond to user events. The result will be a functional in-memory task list.

**Day 4 — Advanced JavaScript (planned)**
Tasks will become structured objects stored in an array. Learners will serialise that data with JSON, save and restore it using the browser's storage APIs, and reorganise the code using object-oriented principles so that task behaviour lives with the task data. Completion and deletion will be added here.

**Day 5 — TypeScript (planned)**
The application logic will be migrated to TypeScript. Learners will define interfaces for task data, add parameter and return types, handle nullable DOM lookups, and use the compiler to catch mistakes before runtime.

> Roadmap items are learning milestones. Only Day 1 is reflected in the current code.

## Learning Outcomes

After completing the full project, learners should be able to:

- Read and write clean, semantic HTML that is accessible by default.
- Turn a design reference into a responsive CSS layout.
- Explain how the DOM represents a page and how to update it safely.
- Handle form submissions and user events without relying on a framework.
- Choose appropriate data structures for application state.
- Persist and restore data using JSON and Web Storage.
- Organise small applications into cohesive, reusable objects or modules.
- Add TypeScript types to existing JavaScript and resolve compiler feedback.
- Work with Git and GitHub to track progress across the week.
- Document a project so that another person can run and understand it.

## Future Improvements

The following ideas are **not implemented**. They are reasonable next steps after the training:

- Complete the Day 2–5 roadmap described above.
- Add editing of existing tasks.
- Add filtering by status or priority, and sorting by due date.
- Add a search field for larger task lists.
- Show clear empty, loading, and error states in the task list.
- Add overdue and due-today indicators based on the due date.
- Support keyboard-only task management with visible focus styles.
- Review and validate the HTML structure, then add the missing viewport metadata for mobile rendering.
- Add automated checks for HTML validity and TypeScript type safety.
- Deploy the finished application to a static hosting service.

## Contributing

This repository is a learning project, and contributions that support that goal are welcome.

1. Fork the repository.
2. Create a branch with a descriptive name:

   ```bash
   git checkout -b feature/add-task-filter
   ```

3. Make a focused change and test it in the browser.
4. Commit with a clear message:

   ```bash
   git commit -m "Add filter for completed tasks"
   ```

5. Push the branch and open a pull request describing what changed and why.

### Suggested practice exercises

- Recreate the header and form from the concept image using only semantic HTML.
- On Day 2, style one section at a time and compare it with `images/concept.png`.
- On Day 3, add a task to the list before looking at the reference solution.
- On Day 4, save tasks, reload the page, and confirm they return.
- On Day 5, add types to a single function first, then expand outward.

Please keep changes small and readable — clarity matters more than cleverness in a learning codebase.

## License

No license file is currently included in this repository. Licensing terms have not yet been specified. If you intend to reuse or distribute this project, contact the repository owner first.

---

**Training:** Introduction to Web Development — five days
**Project stage:** Day 1 — HTML5 structure
**Repository:** [github.com/trgeorgeogilo/task-manager](https://github.com/trgeorgeogilo/task-manager)
