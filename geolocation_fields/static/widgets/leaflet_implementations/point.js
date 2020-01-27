$(document).ready(()=>{
    var attribution = map_attributions;
    var point_field = $(`#id_${input_widget}`);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker_value;
    if(point_value){
        marker_value = point_value;        
    }else{
        marker_value = [0,0]
    }
    var marker = L.marker(marker_value, {
        draggable: true,
    }).addTo(map);
    map.setView(marker_value)
    

    marker.on('dragend', (event)=>{
        point_field.val(`[${marker.getLatLng().lat}, ${marker.getLatLng().lng}]`)
    });
    

    point_field.change((event)=>{
        console.log(event)
    });
});
