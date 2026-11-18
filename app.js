/* ============================================================
   Personal Task Manager — app.js
   Day 3 · JavaScript Fundamentals and DOM Manipulation
   ------------------------------------------------------------
   1.  Configuration and state
   2.  Element references
   3.  Utilities
   4.  Validation and form feedback
   5.  Rendering
   6.  Task actions (Add, Toggle, Delete)
   7.  Event handlers
   8.  Initialisation
   ============================================================ */

"use strict";

/* ------------------------------------------------------------
   1. Configuration and state
   ------------------------------------------------------------ */
const PRIORITIES = ["low", "medium", "high"];
const MAX_TITLE_LENGTH = 120;
const MAX_DESCRIPTION_LENGTH = 300;

let nextId = 4;

/* Initial seed data reflecting the concept design */
let tasks = [
  {
    id: 1,
    title: "Finish report",
    description: "Complete final summary and submit for review.",
    priority: "high",
    dueDate: "2026-11-20",
    completed: false
  },
  {
    id: 2,
    title: "Buy groceries",
    description: "Milk, eggs, fresh vegetables, and fruit.",
    priority: "medium",
    dueDate: "2026-11-22",
    completed: false
  },
  {
    id: 3,
    title: "Call the bank",
    description: "Inquire about account services and new card delivery.",
    priority: "low",
    dueDate: "2026-11-25",
    completed: false
  }
];

/* ------------------------------------------------------------
   2. Element references
   ------------------------------------------------------------ */
const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const taskList = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");

/* Inline error message for validation feedback */
const formError = document.createElement("p");
formError.id = "form-error";
formError.className = "form-error";
formError.setAttribute("role", "alert");
formError.hidden = true;

if (form) {
  form.prepend(formError);
}

/* ------------------------------------------------------------
   3. Utilities
   ------------------------------------------------------------ */
function nextTaskId() {
  const id = nextId;
  nextId += 1;
  return id;
}

function capitalise(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatDueDate(value) {
  if (!value) return "";
  const parts = value.split("-");
  if (parts.length === 3) {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = months[parseInt(parts[1], 10) - 1];
    const day = parseInt(parts[2], 10);
    if (month && !Number.isNaN(day)) {
      return `Due ${day} ${month}`;
    }
  }
  return `Due ${value}`;
}

/* ------------------------------------------------------------
   4. Validation and form feedback
   ------------------------------------------------------------ */
function validateTask(values) {
  const errors = [];

  if (!values.title || values.title.trim() === "") {
    errors.push("Task title is required.");
  } else if (values.title.length > MAX_TITLE_LENGTH) {
    errors.push(`Task title must be ${MAX_TITLE_LENGTH} characters or fewer.`);
  }

  if (values.description && values.description.length > MAX_DESCRIPTION_LENGTH) {
    errors.push(`Description must be ${MAX_DESCRIPTION_LENGTH} characters or fewer.`);
  }

  return errors;
}

function showFormError(message) {
  formError.textContent = message;
  formError.hidden = false;
}

function clearFormError() {
  formError.textContent = "";
  formError.hidden = true;
}

/* ------------------------------------------------------------
   5. Rendering (Data Drives the DOM)
   ------------------------------------------------------------ */
function renderTasks() {
  taskList.replaceChildren();

  if (tasks.length === 0) {
    if (emptyMessage) {
      emptyMessage.hidden = false;
    }
    return;
  }

  if (emptyMessage) {
    emptyMessage.hidden = true;
  }

  for (const task of tasks) {
    taskList.append(createTaskElement(task));
  }
}

function createTaskElement(task) {
  const item = document.createElement("li");
  item.className = "task-item";
  item.dataset.id = String(task.id);

  if (task.completed) {
    item.classList.add("completed");
  }

  /* Left side: Checkbox + Task Info (Title, Description, Due date) */
  const taskLeft = document.createElement("div");
  taskLeft.className = "task-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  checkbox.checked = task.completed;
  checkbox.setAttribute(
    "aria-label",
    task.completed
      ? `Mark ${task.title} as pending`
      : `Mark ${task.title} as completed`
  );
  checkbox.addEventListener("change", () => toggleTask(task.id));

  const details = document.createElement("div");
  details.className = "task-details";

  const title = document.createElement("h3");
  title.className = "task-title";
  title.textContent = task.title;

  details.append(title);

  if (task.description) {
    const desc = document.createElement("p");
    desc.className = "task-description";
    desc.textContent = task.description;
    details.append(desc);
  }

  if (task.dueDate) {
    const due = document.createElement("time");
    due.className = "task-due";
    due.dateTime = task.dueDate;
    due.textContent = formatDueDate(task.dueDate);
    details.append(due);
  }

  taskLeft.append(checkbox, details);

  /* Right side: Priority Badge + Delete Button */
  const taskRight = document.createElement("div");
  taskRight.className = "task-right";

  const priorityBadge = document.createElement("span");
  priorityBadge.className = `task-priority priority-${task.priority}`;
  priorityBadge.textContent = capitalise(task.priority);

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "btn-delete";
  deleteBtn.title = "Delete task";
  deleteBtn.setAttribute("aria-label", `Delete task ${task.title}`);
  deleteBtn.textContent = "×";
  deleteBtn.addEventListener("click", () => deleteTask(task.id));

  taskRight.append(priorityBadge, deleteBtn);

  item.append(taskLeft, taskRight);
  return item;
}

/* ------------------------------------------------------------
   6. Task actions
   ------------------------------------------------------------ */
function addTask(values) {
  tasks.push({
    id: nextTaskId(),
    title: values.title,
    description: values.description,
    priority: values.priority,
    dueDate: values.dueDate,
    completed: false
  });

  renderTasks();
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    console.warn(`Task ${id} not found`);
    return;
  }
  task.completed = !task.completed;
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  renderTasks();
}

/* ------------------------------------------------------------
   7. Event handlers
   ------------------------------------------------------------ */
function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const dueDate = String(formData.get("dueDate") ?? "");
  const priorityValue = String(formData.get("priority") ?? "medium").toLowerCase();

  const priority = PRIORITIES.includes(priorityValue) ? priorityValue : "medium";

  const errors = validateTask({ title, description });
  if (errors.length > 0) {
    showFormError(errors.join(" "));
    titleInput.focus();
    return;
  }

  clearFormError();
  addTask({ title, description, priority, dueDate });
  form.reset();
  titleInput.focus();
}

/* ------------------------------------------------------------
   8. Initialisation
   ------------------------------------------------------------ */
function init() {
  if (!form || !taskList || !titleInput) {
    console.error(
      "Task Manager: required elements are missing. " +
      "Check IDs in index.html (#task-form, #task-list, #task-title)."
    );
    return;
  }

  form.addEventListener("submit", handleSubmit);
  form.addEventListener("input", () => clearFormError());

  renderTasks();
}

document.addEventListener("DOMContentLoaded", init);
