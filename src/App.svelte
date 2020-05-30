<script>
  import { group, range, shuffle } from "d3-array";
  import Alert from "./Alert.svelte";
  import EndScreen from "./EndScreen.svelte";
  import Header from "./Header.svelte";
  import Map from "./Map.svelte";
  import Progress from "./Progress.svelte";

  const ANSWER_DELAY = 3000;

  const stations = [
    { name: "Airport", pos: [52.4, 45.8], difficulty: 1 },
    { name: "Bank Foot", pos: [90.6, 45.8], difficulty: 2 },
    { name: "Bede", pos: [429.9, 149.4], difficulty: 3 },
    { name: "Benton", pos: [292.9, 45.2], difficulty: 2 },
    { name: "Brockley Whins", pos: [434.4, 174.6], difficulty: 3 },
    { name: "Byker", pos: [293.8, 112.6], difficulty: 2 },
    { name: "Callerton Parkway", pos: [71.4, 45.8], difficulty: 2 },
    {
      name: "Central Station",
      pos: [221.4 + 2.2, 123.9 + 0.55],
      difficulty: 1
    },
    { name: "Chichester", pos: [489.2, 149.4], difficulty: 3 },
    { name: "Chillingham Road", pos: [320.8, 112.6], difficulty: 2 },
    { name: "Cullercoats", pos: [518.1, 79.2], difficulty: 2 },
    { name: "East Boldon", pos: [466.6, 174.6], difficulty: 3 },
    { name: "Fawdon", pos: [128.8, 45.8], difficulty: 2 },
    { name: "Fellgate", pos: [397.2, 174.6], difficulty: 3 },
    { name: "Felling", pos: [309 + 0.55, 147.8 + 2.2], difficulty: 3 },
    { name: "Four Lane Ends", pos: [254.4, 45.2], difficulty: 2 },
    { name: "Gateshead", pos: [253.3 + 0.55, 147.8 + 2.2], difficulty: 1 },
    {
      name: "Gateshead Stadium",
      pos: [282.2 + 0.55, 147.8 + 2.2],
      difficulty: 2
    },
    { name: "Hadrian Road", pos: [401.3, 112.6], difficulty: 3 },
    { name: "Haymarket", pos: [206.2 + 2.2, 97.5 + 0.55], difficulty: 1 },
    { name: "Hebburn", pos: [390.5, 149.3], difficulty: 2 },
    { name: "Heworth", pos: [338.9 + 0.55, 147.8 + 2.2], difficulty: 2 },
    { name: "Howdon", pos: [428.2, 112.7], difficulty: 2 },
    { name: "Ilford Road", pos: [186.9 + 0.55, 64.3 + 2.2], difficulty: 2 },
    { name: "Jarrow", pos: [410.1, 149.4], difficulty: 2 },
    { name: "Jesmond", pos: [199.9 + 2.2, 86.5 + 0.55], difficulty: 1 },
    { name: "Kingston Park", pos: [109.6, 45.8], difficulty: 2 },
    { name: "Longbenton", pos: [215.8, 45.2], difficulty: 2 },
    { name: "Manors", pos: [267.1, 112.6], difficulty: 2 },
    { name: "Meadow Well", pos: [482, 112.6], difficulty: 2 },
    { name: "Millfield", pos: [459.2, 240], difficulty: 3 },
    { name: "Monkseaton", pos: [485, 45.2], difficulty: 2 },
    { name: "Monument", pos: [213.8 + 2.2, 110.4 + 0.55], difficulty: 1 },
    { name: "North Shields", pos: [508.9, 112.7], difficulty: 1 },
    { name: "Northumberland Park", pos: [370, 45.2], difficulty: 2 },
    { name: "Pallion", pos: [433.9, 240], difficulty: 3 },
    { name: "Palmersville", pos: [331.4, 45.1], difficulty: 2 },
    { name: "Park Lane", pos: [509.8, 240.1], difficulty: 2 },
    { name: "Pelaw", pos: [364.1 + 0.55, 147.7 + 2.2], difficulty: 2 },
    { name: "Percy Main", pos: [455.1, 112.7], difficulty: 2 },
    { name: "Regent Centre", pos: [167.2, 45.8], difficulty: 2 },
    { name: "Seaburn", pos: [518, 183.1], difficulty: 3 },
    { name: "Simonside", pos: [449.6, 149.3], difficulty: 3 },
    { name: "South Gosforth", pos: [181.1 + 2.2, 53.4 + 0.55], difficulty: 1 },
    { name: "St James", pos: [200, 112], difficulty: 1 },
    { name: "St Peter's", pos: [518, 204.6], difficulty: 2 },
    { name: "Shiremoor", pos: [408.6, 45.1], difficulty: 2 },
    { name: "South Hylton", pos: [408.4, 240.1], difficulty: 2 },
    { name: "South Shields", pos: [509.2, 149.4], difficulty: 1 },
    { name: "Stadium of Light", pos: [518, 193.2], difficulty: 2 },
    { name: "Sunderland", pos: [518, 227], difficulty: 1 },
    { name: "Tyne Dock", pos: [469.4, 149.4], difficulty: 2 },
    { name: "Tynemouth", pos: [518, 100], difficulty: 2 },
    { name: "University", pos: [484.7, 240], difficulty: 2 },
    { name: "Walkergate", pos: [347.7, 112.7], difficulty: 3 },
    { name: "Wallsend", pos: [374.7, 112.6], difficulty: 2 },
    { name: "Wansbeck Road", pos: [148.1, 45.8], difficulty: 3 },
    { name: "West Jesmond", pos: [193.9 + 2.2, 76.1 + 0.55], difficulty: 2 },
    { name: "West Monkseaton", pos: [447.2, 45.1], difficulty: 2 },
    { name: "Whitley Bay", pos: [518.1, 58.3], difficulty: 2 }
  ];

  let shuffledStations = shuffleStations(stations);

  let index = 0;
  let progress = 0;
  let goal = 1;
  let results = range(goal).map(d => null);
  let status = 0;
  let lastStationName;
  let timeoutID;

  let map;

  function handleMessage(event) {
    if (event.detail.text === shuffledStations[index].name) {
      status = 1;
      map.setView(shuffledStations[index].name, shuffledStations[index].pos);
      progress += 1;
      results[index] = true;
    } else {
      status = 2;
      map.setView(shuffledStations[index].name, shuffledStations[index].pos);
      lastStationName = shuffledStations[index].name;
      results[index] = false;
    }

    index += 1;

    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      status = index === goal ? 3 : 0;
    }, ANSWER_DELAY);
  }

  function shuffleStations(stations) {
    const groupedStations = group(stations, d => d.difficulty);

    return Array.from(groupedStations.values())
      .map(d => shuffle(d).slice(0, 4))
      .flat();
  }

  function handleTryAgain() {
    shuffledStations = shuffleStations(stations);
    index = 0;
    status = 0;
    progress = 0;
    results = range(goal).map(d => null);
  }
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    height: 100%;
  }

  #map {
    background: #fff;
    flex: 1 1 auto;
    overflow: hidden;
    height: 100%;
    position: relative;
  }

  @media (max-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <Header
    stationName={index === goal ? '' : shuffledStations[index].name}
    {progress}
    {index} />
  <Progress {index} {goal} {results} />
  <div id="map">
    {#if status < 3}
      <Map {stations} on:message={handleMessage} bind:this={map} />
    {:else if status === 3}
      <EndScreen on:message={handleTryAgain} {progress} {goal} />
    {/if}
    {#if status === 1}
      <Alert
        variant="correct"
        message={`Correct! ${goal - index > 0 ? `${goal - index} station${goal - index === 1 ? '' : 's'}
          to go.` : `Let's see how you did`}`} />
    {:else if status === 2}
      <Alert
        variant="wrong"
        message="D'oh! That's not {lastStationName}. Here's where it is." />
    {/if}
  </div>
</main>
