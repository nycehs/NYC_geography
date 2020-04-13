# NYC_geography
 Geographic boundaries for NYC, including (some)shapefiles and simplified geojson and topojson files with join fields. A reference repository for NYC Environmental Health.

## Sources
 Most of these shapefiles were originally published by NYC Department of City Planning on their ['Bytes of the Big Apple' page](https://www1.nyc.gov/site/planning/data-maps/open-data.page). The modified 2010 Zip Code Tabulation Areas were supplied by the incredible Gretchen Culp at DOHMH. UHF 34 and 42 shapefiles were supplied to my by the wonderful Susan Resnick, also at DOHMH. 

## Processing
 These shapefiles were transformed to WGS84 and then simplified, cleaned and adjusted to rfc7946 standards using [Matthew Bloch's excellent Mapshaper](https://mapshaper.org/). Any manual adjustments were done using [QGIS](https://qgis.org/en/site/) or [Geojson.io](http://geojson.io/). Geojson geometry was tested using [Geojsonlint](http://geojsonlint.com/).

The goal of simplification was to maintain enough detail to be useful but to provide a smaller package to reduce latency when sending maps to mobile browsers and the like. 


