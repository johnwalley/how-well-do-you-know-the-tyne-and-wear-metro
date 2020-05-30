<script>
  import { createEventDispatcher } from "svelte";

  export let progress;
  export let goal;

  const ratio = (progress / goal) * 100;

  let message = "";

  if (ratio < 40) {
    message = "Oh dear. This isn't for you is it?";
  } else if (ratio < 70) {
    message = "Not bad! You know your green line from your yellow.";
  } else if (ratio < 99) {
    message = "Excellent! Try again for that perfect score?";
  } else {
    message = "Perfect!";
  }

  const dispatch = createEventDispatcher();
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
  }

  .social {
    display: flex;
    flex-direction: row;
  }

  .fb-share-button {
    margin-right: 12px;
  }

  .try-again {
    margin-top: 12px;
  }
</style>

<div class="container">
  <p>
    Score:
    <strong>{progress} / {goal}</strong>
  </p>
  <p><strong>{message}</strong></p>
  <div class="social">
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
  </div>
  <div class="try-again">
    <button on:click={() => dispatch('message')}>
      Try with different stations
    </button>
  </div>
</div>
