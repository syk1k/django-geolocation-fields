$(document).ready(()=>{
    var attribution = polygon_map_attributions;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(polygon_map);


    // Polygone test
    var polygon = L.polygon([
        [6.17357,1.21276],
        [6.17375, 1.21395],
        [6.17292, 1.21390]
    ]).addTo(polygon_map);

    console.log(polygon.getLatLngs())
    

    polygon.on('click', ()=>{
        console.log(polygon.getLatLngs())
    })

    polygon_map.on('load',()=>{
        console.log("Loaded")
    })    
    
});
