<script>
  import { createEventDispatcher } from "svelte";

  export let progress;
  export let goal;

  const dispatch = createEventDispatcher();
</script>

<style>

</style>

<div>
  <p>Score: {progress} / {goal}</p>
  <p>Oh dear. You suck.</p>
  <div
    class="fb-share-button"
    data-href="https://metro-quiz.walley.org.uk"
    data-layout="button_count"
    data-size="large">
    <a
      target="_blank"
      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmetro-quiz.walley.org.uk%2F&amp;src=sdkpreparse"
      class="fb-xfbml-parse-ignore">
      Share you score
    </a>
  </div>
  <a
    class="twitter-share-button"
    href="https://twitter.com/intent/tweet?text=I%20scored%20{progress}%20out%20of%20{goal}"
    data-size="large">
    Tweet your score
  </a>
  <button on:click={() => dispatch('message')}>
    Try with different stations
  </button>
</div>
