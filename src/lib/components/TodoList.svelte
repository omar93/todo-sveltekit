<script>
  import TodoItem from '$lib/components/TodoItem.svelte'
  export let todos = ['omar','ali','ali','ali','ali','ali','ali','ali','ali','ali','ali','ali','ali']
</script>

<ul>
  {#each todos as todo}
    <TodoItem {todo}/>
  {/each}
</ul>