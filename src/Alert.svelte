<script>
  import { fly } from "svelte/transition";

  export let message;
  export let variant;
</script>

<style>
  .alert {
    position: absolute;
    top: 0;
    width: 100%;
    background: #31aa47;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    padding: 8px;
    z-index: 500;
    box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.2);
  }

  .correct {
    background: #31aa47;
  }

  .wrong {
    background: #f7354f;
  }
</style>

<div class="alert {variant}" transition:fly={{ y: -100, duration: 500 }}>
  {message}
</div>
