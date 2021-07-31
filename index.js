document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".todo");
  todo(container);
});

function todo(el) {
  el.innerHTML = `
     <h1>Todo app </h1> 
     <ul></ul>
     <h3>0 done</h3>
     <form>
        <input type='text' name='todo'/> 
        <button type='submit'>Add</button>
      </form>

  `;
  const form = document.querySelector("form");
  const list = document.querySelector("ul");
  const done = document.querySelector("h3");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.elements["todo"];
    addTodo(input.value);
    form.reset();
  });

  function addTodo(itemText) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(itemText));

    const check = document.createElement("input");
    check.type = "checkbox";
    check.addEventListener("change", () => {
      recount();
    });
    item.appendChild(check);

    const button = document.createElement("button");
    button.textContent = "delete";
    button.addEventListener("click", () => {
      list.removeChild(item);
      recount();
    });
    item.appendChild(button);

    function recount() {
      const count = list.querySelectorAll("input:checked").length;
      done.textContent = `${count} done`;
    }

    list.appendChild(item);
  }
}
