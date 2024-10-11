<script lang="ts">
  import { todos } from '$lib/todos';
  import TodoItem from '$lib/TodoItem.svelte';
  import type { Todo } from '$lib/todos';
</script>

<div class="flex flex-col gap-5 items-center justify-center h-screen w-screen">
  <h1 class="text-3xl font-black">Svelte PoC</h1>
  <div class="grid grid-cols-2 gap-14">
    <div>
      <h1 class="text-2xl font-bold">Pendientes</h1>
      {#each $todos.filter((tarea) => tarea.done === false) as tarea}
        <TodoItem {tarea} />
      {/each}
    </div>
    <div>
      <h1 class="text-2xl font-bold">Hechas</h1>
      {#each $todos.filter((tarea) => tarea.done === true) as tarea}
        <TodoItem {tarea} />
      {/each}
    </div>
  </div>
</div>
