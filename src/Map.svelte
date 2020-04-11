<script>
  export let stations;
  let timeoutID;

  export const setView = (name, pos) => {
    correctMarker.setStyle({ opacity: 1 });
    correctMarker.setLatLng([280.6 - pos[1], pos[0]]);

    leafletMap.flyTo([280.6 - pos[1], pos[0]]);

    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      correctMarker.setStyle({ opacity: 0 });
    }, 5000);
  };

  import L from "leaflet";
  import { onMount, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let mapContainer;
  let leafletMap;
  let correctMarker;

  onMount(async () => {
    leafletMap = L.map(mapContainer, {
      crs: L.CRS.Simple,
      zoomControl: true,
      center: [280.6 - 110
      , 213],
      zoom: 2,
      minZoom: 1,
      maxZoom: 3,
      attributionControl: false
      //maxBounds: [[-100, -100], [280.6, 595.3]],
      //maxBoundsViscosity: 0.2
    });

    const imageUrl =
      "images/metro_map_third_a4_final_2018_no_station_labels.svg";

    const imageBounds = [[0, 0], [280.6, 595.3]];

    L.imageOverlay(imageUrl, imageBounds).addTo(leafletMap);

    leafletMap.zoomControl.setPosition("bottomright");

    stations.forEach(station => {
      const circle = L.circle([280.6 - station.pos[1], station.pos[0]], {
        stroke: false,
        fillColor: "#CCC9C8",
        fillOpacity: 0,
        radius: 10
      }).addTo(leafletMap);

      circle.on("click", function(ev) {
        sayHello(station.name);
      });

      circle.on("mouseover", function(ev) {
        ev.target.setStyle({
          //fillOpacity: 0.5 //or whatever style you wish to use;
        });
      });

      circle.on("mouseout", function(ev) {
        ev.target.setStyle({
          //fillOpacity: 0 //or whatever style you wish to use;
        });
      });
    });

    // TODO: Use two circles to get the ring with stroke effect
    correctMarker = L.circle([280.6 - 44, 215], {
      interactive: false,
      stroke: true,
      color: "#31AA47",
      opacity: 0,
      weight: 4,
      fillColor: "#31AA47",
      fillOpacity: 0,
      radius: 10
    }).addTo(leafletMap);
  });

  function sayHello(name) {
    dispatch("message", {
      text: name
    });
  }
</script>

<style>
  .map {
    height: 100%;
    width: 100%;
    background: #fff;
  }
</style>

<div class="map" bind:this={mapContainer} />
