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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

</style>