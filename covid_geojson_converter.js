const csv = require('csv-parser');
const fs = require('fs');
const myArgs = process.argv.slice(2);

let results = {
    "type": "FeatureCollection",
    "features": []
};
let headers = [];

fs.createReadStream(myArgs[0])
.pipe(csv())
.on('headers', (headersRead) => {
    headers = headersRead;
})
.on('data', (row) => {
    let result = [];
    for (const [index, [, value]] of Object.entries(Object.entries(row))) {
        result.push(value);
    }

    for (let i = 4; i < result.length; i++) {
        const feature = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [parseFloat(result[3]), parseFloat(result[2])]
            },
            "properties": {
                "province": result[0],
                "country": result[1],
                "date": headers[i],
                "confirmed": parseInt(result[i])
            }
        };
        results["features"].push(feature);
    }
})
.on('end', () => {
    console.log('CSV file successfully processed');
    //console.log(results);

    const resultString = JSON.stringify(results);

    const fs = require('fs');
    fs.writeFile(myArgs[1] + '.geojson', resultString, 'utf8', (err) => {
        if (err) throw err;
        console.log('complete');
    });
});
