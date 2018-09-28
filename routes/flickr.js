// api end point for CRUD of flickr markers from a Google Sheet 
// (so we can ditch Kinvey)
// 1. reading markers from flickr, returning GeoJSON
//   a. for a bounding box
//   b. for a specific id
//   c. other filtering (e.g. hash tags)
//   d. storing the resulting markers w/ metadata into the Google Sheet
// 2. updating marker GeoJSON using id
//   a. adding a metadata
//   b. adding SIR "likes/favorites"
//
// 3. deleting a marker using id
// 
// 4. creating a new marker for the Sea It Rise collection 
// Markers have the structure:
// 
// var flickr_geojson = {
//     "type": "FeatureCollection",
//     "features": [{
//         "type": "Feature",
//         "geometry": {
//             "type": "Point",
//             "coordinates": [0, 0]
//         },
//         "properties": {
//             "title": "flickr Layer Marker",
//             "icon": "marker",
//             "fill-color": "#3887be"
//         }
//     }]
// };

const express  = require('express');
const router = express.Router();

const flickrGeojson = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0, 0]
        },
        "properties": {
            "title": "flickr Layer Marker",
            "icon": "marker",
            "fill-color": "#3887be"
        }
    }]
};

router.get('/', (req,res) => {
    res.send(flickrGeojson);
});

module.exports = router;