<script>
  export let stationName;
  export let progress;
  export let index;
</script>

<style>
  #instructions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #000;
    color: #ccc;
    padding: 8px;
    font-size: 20px;
    font-weight: 600;
  }

  .find {
    display: flex;
    flex-direction: row;
  }

  .bright {
    color: #fff;
  }

  .blob {
    border-radius: 50%;
    margin-left: 8px;
    margin-top: 2px;
    height: 20px;
    width: 20px;
    background: white;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
    transform: scale(1);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
</style>

<div id="instructions">
  <div class="find">
    Find:&nbsp
    <span class="bright">{stationName}</span>
    <div class="blob white" />
  </div>
  <div>
    Score:
    <span class="bright">{progress}/{index}</span>
  </div>
</div>
