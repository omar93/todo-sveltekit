<script>
  export let todo = 'tja'

  let isDone = false

  let handleClick = () => {
    isDone = !isDone
  }
</script>

<li on:click={handleClick}
  class = 
  "
    {isDone ? 'done' : ''}
    text-black-700 
    text-2xl
    text-center
  "
>{todo}</li>

<style>
  .done {
    text-decoration: line-through;
  }
</style>