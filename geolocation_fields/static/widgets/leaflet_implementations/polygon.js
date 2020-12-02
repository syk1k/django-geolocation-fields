$(document).ready(() => {
    var attribution = polygon_map_attributions;
    var polygon_field = $(`#id_${polygon_input_widget}`)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(polygon_map);


    // Polygone test
    /* var polygon = L.polygon([
        [6.17357, 1.21276],
        [6.17375, 1.21395],
        [6.17292, 1.21390]
    ]).addTo(polygon_map); */



    polygon.on('click', () => {
        polygonToArray = []
        polygonLatLng = polygon.getLatLngs()[0];

        polygonLatLng.forEach(corner => {
            console.log(corner)
            polygonToArray.push(`[ ${corner.lat}, ${corner.lng}]`)
        });

        polygon_field.val(`[${polygonToArray}]`)
    })

    L.EditControl = L.Control.extend({

        options: {
            position: 'topleft',
            callback: null,
            kind: '',
            html: ''
        },

        onAdd: function(map) {
            var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
                link = L.DomUtil.create('a', '', container);

            link.href = '#';
            link.title = 'Create a new ' + this.options.kind;
            link.innerHTML = this.options.html;
            L.DomEvent.on(link, 'click', L.DomEvent.stop)
                .on(link, 'click', function() {
                    window.LAYER = this.options.callback.call(map.editTools);
                }, this);

            return container;
        }

    });

    var lineControl = L.EditControl.extend({
        options: {
            position: 'topleft',
            callback: map.editTools.startPolyline,
            kind: 'line',
            html: '\\/\\'
        }

    });

    map.addControl(lineControl);

});