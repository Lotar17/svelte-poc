import { writable } from 'svelte/store';

export type Todo = {
  done: boolean;
  descripcion: string;
};

const listaTareas: Todo[] = [
  { done: true, descripcion: 'Lavar' },
  { done: false, descripcion: 'Limpiar' },
  { done: false, descripcion: 'Encerar' },
  { done: false, descripcion: 'Lustrar' },
];

export const { subscribe, update } = writable<Todo[]>(listaTareas);

export const todos = {
  subscribe,
  add: (tarea: Todo) => {
    update(($listaTareas) => [...$listaTareas, tarea]);
  },
  remove: (tarea: Todo) => {
    update(($listaTareas) => $listaTareas.filter((t) => t !== tarea));
  },
  mark: (tarea: Todo) => {
    update(($listaTareas) => [
      ...$listaTareas.filter((t) => t !== tarea),
      tarea,
    ]);
  },
};
