<script>
  import { range } from "d3-array";
  import { scalePoint } from "d3-scale";

  export let index;
  export let goal;
  export let results;

  const scale = scalePoint()
    .domain(range(1, goal + 1))
    .range([5, 95]);
</script>

<style>
  #progress {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #dfddda;
    color: #000;
    padding: 8px;
    font-size: 20px;
    font-weight: 600;
  }
</style>

<div id="progress">
  <svg width="100%" height="48">
    <g transform="translate(0,25)">
      <line
        x1="5%"
        y1="10"
        x2="95%"
        y2="10"
        stroke="#fff"
        stroke-width="20"
        stroke-linecap="round" />
      {#if index > 0}
        <line
          x1="5%"
          y1="10"
          x2="{scale(index)}%"
          y2="10"
          stroke="#ffc949"
          stroke-width="20"
          stroke-linecap="round" />
      {/if}
      {#each range(1, goal + 1) as point}
        <circle cx="{scale(point)}%" cy="10" r="6" fill="black" />
      {/each}
    </g>
    <g transform="translate(0,0)">
      {#each results as result, i}
        <g transform="translate(-9,1)">
          <rect
            x="{scale(i + 1)}%"
            y="0"
            width="18"
            height="18"
            rx="4"
            fill={'#fff'} />
        </g>
        <g transform="translate(-10,0)">
          <svg
            x="{scale(i + 1)}%"
            y="0"
            width="20"
            height="20"
            viewBox="0 0 448 512">
            {#if result === true}
              <path
                fill="#31aa47"
                d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48
                48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48
                48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379
                0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184
                302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628
                0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104
                104c6.249 6.25 16.379 6.25 22.628.001z" />
            {:else if result === false}
              <path
                fill="#f7354f"
                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48
                48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-54.4
                289.1c4.7 4.7 4.7 12.3 0 17L306 377.6c-4.7 4.7-12.3 4.7-17 0L224
                312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L102.4
                338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3
                0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7
                12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L280 256l65.6 65.1z" />
            {/if}
          </svg>
        </g>
      {/each}
    </g>
  </svg>
</div>
