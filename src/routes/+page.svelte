<script lang="ts">
  import { todos } from '$lib/todos';
  import TodoItem from '$lib/TodoItem.svelte';
  import type { Todo } from '$lib/todos';
  import { crossfade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { flip } from 'svelte/animate';

  const [send, receive] = crossfade({
    duration: 1500,
    easing: quintOut,
  });
</script>

<div class="flex flex-col gap-5 items-center justify-center h-screen w-screen">
  <h1 class="text-3xl font-black">Svelte PoC</h1>
  <div class="grid grid-cols-2 gap-14">
    <div>
      <h1 class="text-2xl font-bold">Pendientes</h1>
      <ul>
        {#each $todos.filter((tarea) => tarea.done === false) as tarea (tarea.id)}
          <li
            animate:flip={{ duration: 500 }}
            in:receive={{ key: tarea.id, duration: 500 }}
            out:send={{ key: tarea.id, duration: 500 }}
          >
            <TodoItem {tarea} />
          </li>
        {/each}
      </ul>
    </div>
    <div>
      <h1 class="text-2xl font-bold">Hechas</h1>
      <ul>
        {#each $todos.filter((tarea) => tarea.done === true) as tarea (tarea.id)}
          <li
            animate:flip={{ duration: 500 }}
            in:receive={{ key: tarea.id, duration: 500 }}
            out:send={{ key: tarea.id, duration: 500 }}
          >
            <TodoItem {tarea} />
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
