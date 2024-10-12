<script lang="ts">
  import { todos } from '$lib/todos';
  import TodoItem from '$lib/TodoItem.svelte';
  import { crossfade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { flip } from 'svelte/animate';
  import { onMount } from 'svelte';

  let transicionar = false;

  onMount(() => {
    requestAnimationFrame(() => {
      transicionar = true;
    });
  });

  const [send, receive] = crossfade({
    duration: 1500,
    easing: quintOut,
  });

  let id = 3;
</script>

{#if transicionar}
  <div
    in:fly={{ y: 200, duration: 2000 }}
    class="flex flex-row md:flex-col flex-wrap gap-5 items-center justify-center h-screen w-screen"
  >
    <h1 class="text-3xl font-black">Svelte PoC</h1>
    <input
      class=" w-96 min-h-10 text-zinc-900 pl-3 font-medium"
      placeholder="¿Qué tarea desea agregar?"
      on:keydown={(e) => {
        if (e.key !== 'Enter') return;

        const tareaNueva = {
          id: ++id,
          descripcion: e.currentTarget.value,
          done: false,
        };
        todos.add(tareaNueva);
        e.currentTarget.value = '';
      }}
    />
    <div
      in:fly={{ y: 200, duration: 2000, delay: 200 }}
      class="grid grid-cols-1 md:grid-cols-2 gap-14"
    >
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
              class="opacity-40"
            >
              <TodoItem {tarea} />
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
{/if}
