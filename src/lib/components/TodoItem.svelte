<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let todo = {
    text: 'tja',
    isDone: false,
    id: 0
  }

  let isDone = false

  let handleClick = () => {
    todo.isDone = !todo.isDone
    dispatch('update', todo)
  }
</script>

<li on:click={handleClick}
  class = 
  "
    {todo.isDone ? 'done' : ''}
    text-black-700 
    text-2xl
    text-center
  "
>{todo.text}</li>

<style>
  .done {
    text-decoration: line-through;
  }
</style>