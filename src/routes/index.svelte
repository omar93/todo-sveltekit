<script>
  import TodoList from '$lib/components/TodoList.svelte'
  import TodoForm from '$lib/components/TodoForm.svelte'
</script>

<main>
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
    height:100vh;
  }

  section {
    width: 800px;
    height: 100%;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

</style>