<script lang="ts">
  import type { Todo } from './todos.js';
  import { todos } from './todos';

  export let tarea: Todo;

  function changeStatus() {
    tarea.done = !tarea.done;
    todos.mark(tarea);
  }

  function deleteTodo() {
    todos.remove(tarea);
  }
</script>

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=delete"
/>

<div
  class="flex mt-3 gap-3 shadow-lg bg-neutral-900 p-2 w-80 flex-wrap break-words break-all"
>
  <input on:change={changeStatus} type="checkbox" checked={tarea.done} />
  <span class="pt-1 break-words">{tarea.descripcion}</span>
  <button class=" ml-auto" on:click={deleteTodo}>
    <span class="material-symbols-outlined pt-1"> delete </span>
  </button>
</div>
