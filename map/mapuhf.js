
let fortyTwoSpec = "map42.vl.json";
let thirtyFourSpec = "map34.vl.json";

const opt = {"renderer":"svg"};
const el = document.getElementById('map');


// this code listens to the form with map chooser; must run after DOM loads
window.onload =listenRadios;

function listenRadios() {
  radios = document.querySelectorAll('input[type=radio][name="uhfRadioGroup"]');
  radios.forEach(radio => radio.addEventListener('change', () => {
    if (radio.value==='42') {fortyTwoMapCreate()}
    else {thirtyFourMapCreate()}  // for if chosenField is uhf34
    ;
  }));
}


//this function creates the map
function fortyTwoMapCreate() {
vegaEmbed('#map', fortyTwoSpec, opt).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    viewObj = result.view;
  }).catch(console.error);
}

function thirtyFourMapCreate() {
  vegaEmbed('#map', thirtyFourSpec, opt).then(function(result) {
      // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
      viewObj = result.view;
    }).catch(console.error);
  }

fortyTwoMapCreate();
