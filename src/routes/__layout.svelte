<script>
  import "../app.css";
</script>

<main>
  <div>left</div>
  <slot />
  <div>right</div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 400px 1fr 400px;
    grid-template-areas: 
    'left mid right';
  }
</style>