# covid-19-geojson-converter
JavaScript based converter that takes CSV data published by Johns Hopkins as input and outputs the data to GeoJSON

Idea behind this project is to help to provide a proper GeoJSON representation of the timeseries data that is published daily by Johns Hopkins and can be found here: 
https://github.com/CSSEGISandData/COVID-19

Example of the data visualization that is using this GeoJSON can be found here: 
https://mletic.github.io/covid-19-timeseries-viz/

![Image of COVID-19 data visualization timeseries](https://raw.githubusercontent.com/mletic/covid-19-geojson-converter/master/img/covid-19-data-visualization.png)

## How to use the converter
1. You need to have Node.js installed

2. Download the dependencies (there is only one, and that is csv-parser) with: 

`npm install` 

3. Run the project with: 

`node covid_geojson_converter.js example/time_series_covid19_confirmed_global.csv output`

Where the first parameter of the converter is the location of the input file, and the second is the name of the GeoJSON file that will be generated in the root directory of the project

4. It will generate `output.geojson` file in the root project folder. See: https://github.com/mletic/covid-19-geojson-converter/blob/master/output.geojson

5. Next step is up to you, but [here](https://mletic.github.io/covid-19-timeseries-viz/) is one example on how you can visualize this data.