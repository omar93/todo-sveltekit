<script>
  import TodoItem from '$lib/components/TodoItem.svelte'
  import { store } from '$lib/Store.js'
  
  let todos = []

  store.subscribe(todoStore => {
    todos = [...todoStore]
  })
  
</script>

<ul>
  {#each todos as todo}
    <TodoItem {todo}/>
  {/each}
</ul>