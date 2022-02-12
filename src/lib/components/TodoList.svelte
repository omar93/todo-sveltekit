<script>
  import TodoItem from '$lib/components/TodoItem.svelte'
  import { store } from '$lib/Store.js'
  
  let todos = []

  store.subscribe(todoStore => {
    todos = [...todoStore]
  })

  const updateTodoStatus = ({detail})=> {
    const index = $store.findIndex(item => item.id === detail.id)
    $store[index] = detail
  }
  
</script>

<ul>
  {#each todos as todo}
    <TodoItem {todo} on:update={updateTodoStatus}/>
  {/each}
</ul>