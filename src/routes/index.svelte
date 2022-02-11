<script>
  import TodoList from '$lib/components/TodoList.svelte'
  import TodoForm from '$lib/components/TodoForm.svelte'
</script>

<main class="border-8 border-red-600">
  <section>
    <TodoList/>
    <TodoForm/>
  </section>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
  }

</style>