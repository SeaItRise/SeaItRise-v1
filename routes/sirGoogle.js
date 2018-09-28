// api end point for CRUD of Sea It Rise markers from a Google Sheet 
// (so we can ditch Kinvey)
// 1. reading markers from google sheet, returning GeoJSON
//   a. for a bounding box
//   b. for a specific id
//   c. other filtering
// 2. updating marker GeoJSON using id
//   a. adding a metadata
//   b. adding "likes/favorites"
//
// 3. deleting a marker using id
// 
// 4. creating a new marker for the Sea It Rise collection 
// Markers have the structure:
// var SIRmarkerJSON = {
//     "type": "FeatureCollection",
//     "features": [{
//         "type": "Feature",
//         "geometry": {
//             "type": "Point",
//             "coordinates": [0, 0]
//         },
//         "properties": {
//             "title": "Fixed Marker",
//             //"icon": "marker",
//             //"fill-color": "#3887be"
//         }
//     }]
// };

const express  = require('express');
const router = express.Router();

const SIRmarkerGeojson = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0, 0]
        },
        "properties": {
            "title": "SIR Fixed Marker, Google",
            //"icon": "marker",
            //"fill-color": "#3887be"
        }
    }]
};
router.get('/', (req,res) => {
    res.send(SIRmarkerGeojson);
});

module.exports = router;

