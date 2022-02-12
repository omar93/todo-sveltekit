<script>
  import { store } from '$lib/Store.js'

  let inputText

  const handleSubmit = () => {
    store.set([...$store, inputText])
    inputText = ''
  }

</script>

<form class="flex flex-col" on:submit|preventDefault={handleSubmit}>
  <input type="text" name="todo" placeholder="Todo" bind:value={inputText}
    class="
      border-solid
    border-green-600
      border-2
    "
  >
  <input type="submit" value="+">
</form>