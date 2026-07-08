const filters = Array.from(document.querySelectorAll("[data-filter]"));
const events = Array.from(document.querySelectorAll(".event"));

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filters.forEach((item) => item.classList.toggle("active", item === button));
    events.forEach((event) => {
      const visible = selected === "all" || event.dataset.kind === selected;
      event.hidden = !visible;
    });
  });
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
