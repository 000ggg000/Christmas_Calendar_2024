document.addEventListener("DOMContentLoaded", (event) => {
  const draggables = document.querySelectorAll(".draggable");
  const dropzone = document.getElementById("div1");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dropzone.addEventListener("dragover", dragOver);
  dropzone.addEventListener("drop", drop);

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const draggable = document.getElementById(id);
    const dropzoneRect = dropzone.getBoundingClientRect();
    const offsetX = e.clientX - dropzoneRect.left;
    const offsetY = e.clientY - dropzoneRect.top;

    draggable.style.position = "absolute";
    draggable.style.left = `${offsetX - draggable.offsetWidth / 2}px`;
    draggable.style.top = `${offsetY - draggable.offsetHeight / 2}px`;

    dropzone.appendChild(draggable);
  }
});
