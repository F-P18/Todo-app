
document.addEventListener("DOMContentLoaded", () => {

  // STATE
  let todo = {
    title: document.querySelector('[data-testid="test-todo-title"]').textContent,
    description: document.getElementById("descBox").textContent,
    priority: "High",
    status: "Pending",
    dueDate: "2026-04-20T00:00:00"
  };

  // ELEMENTS
  const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
  const statusText = document.querySelector('[data-testid="test-todo-status"]');
  const statusControl = document.getElementById("statusControl");

  const editBtn = document.getElementById("editBtn");
  const editForm = document.getElementById("editForm");
  const todoView = document.getElementById("todoView");

  const editTitle = document.getElementById("editTitle");
  const editDesc = document.getElementById("editDesc");
  const editPriority = document.getElementById("editPriority");
  const editDate = document.getElementById("editDate");

  const saveBtn = document.getElementById("saveBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  const titleEl = document.querySelector('[data-testid="test-todo-title"]');
  const descBox = document.getElementById("descBox");
  const dateEl = document.querySelector('[data-testid="test-todo-due-date"]');

  const timeEl = document.querySelector('[data-testid="test-todo-time-remaining"]');

  // TIME FUNCTION
  function updateTime() {
    const now = new Date();
    const due = new Date(todo.dueDate);

    if (todo.status === "Done") {
      timeEl.textContent = "Completed";
      return;
    }

    const diff = due - now;

    if (diff <= 0) {
      const hours = Math.floor(Math.abs(diff) / 3600000);
      timeEl.textContent = `Overdue by ${hours} hour(s)`;
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000);

    if (days > 0) {
      timeEl.textContent = `Due in ${days} day(s)`;
    } else {
      timeEl.textContent = `Due in ${hours} hour(s)`;
    }
  }

  // UI UPDATE
  function updateUI() {
    statusText.textContent = todo.status;
    checkbox.checked = todo.status === "Done";
    statusControl.value = todo.status;
    updateTime();
  }

  // STATUS SYNC
  checkbox.addEventListener("change", () => {
    todo.status = checkbox.checked ? "Done" : "Pending";
    updateUI();
  });

  statusControl.addEventListener("change", (e) => {
    todo.status = e.target.value;
    updateUI();
  });

  // EDIT BUTTON
  editBtn.addEventListener("click", () => {
    todoView.style.display = "none";
    editForm.style.display = "block";

    editTitle.value = todo.title;
    editDesc.value = todo.description;
    editPriority.value = todo.priority;
    editDate.value = todo.dueDate.split("T")[0];
  });

  // SAVE
  saveBtn.addEventListener("click", () => {
    todo.title = editTitle.value;
    todo.description = editDesc.value;
    todo.priority = editPriority.value;
    todo.dueDate = editDate.value + "T23:59:59";

    titleEl.textContent = todo.title;
    descBox.textContent = todo.description;

    const formatted = new Date(todo.dueDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    dateEl.textContent = `Due ${formatted}`;
    dateEl.setAttribute("datetime", todo.dueDate);

    editForm.style.display = "none";
    todoView.style.display = "block";

    updateUI();
  });

  // CANCEL
  cancelBtn.addEventListener("click", () => {
    editForm.style.display = "none";
    todoView.style.display = "block";
  });

  // INIT
  updateUI();

});