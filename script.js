
document.addEventListener("DOMContentLoaded", () => {

  const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
  const card = document.querySelector('[data-testid="test-todo-card"]');
  const status = document.querySelector('[data-testid="test-todo-status"]');
  const timeRemainingEl = document.querySelector('[data-testid="test-todo-time-remaining"]');

  const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
  const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');

  const dueDate = new Date("2026-04-16T18:00:00");

  function getTimeRemaining() {
    const now = new Date();
    const diff = dueDate - now;

    if (diff <= 0) {
      const overDueHours = Math.floor(Math.abs(diff) / (1000 * 60 * 60));
      return `Overdue by ${overDueHours} hour(s)`;
    }

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) return "Due now!";
    if (hours < 24) return `Due in ${hours} hour(s)`;
    if (days === 1) return "Due tomorrow";
    return `Due in ${days} days`;
  }

  function updateTime() {
    timeRemainingEl.textContent = getTimeRemaining();
  }

  updateTime();
  setInterval(updateTime, 60000);

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      card.classList.add("completed");
      status.textContent = "Done";
    } else {
      card.classList.remove("completed");
      status.textContent = "Pending";
    }
  });

  editBtn.addEventListener("click", () => {
    console.log("Edit clicked");
  });

  deleteBtn.addEventListener("click", () => {
    alert("Delete clicked");
  });

});




