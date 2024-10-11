import { writable } from 'svelte/store';

export type Todo = {
  id: number;
  done: boolean;
  descripcion: string;
};

const listaTareas: Todo[] = [
  { id: 1, done: false, descripcion: 'Encerar' },
  { id: 2, done: false, descripcion: 'Pulir' },
  { id: 3, done: false, descripcion: 'Respirar' },
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
