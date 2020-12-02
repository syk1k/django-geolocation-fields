$(document).ready(() => {

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(polygon_map);

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


    L.NewPolygonControl = L.EditControl.extend({

        options: {
            position: 'topleft',
            callback: polygon_map.editTools.startPolygon,
            kind: 'polygon',
            html: '▰'
        }

    });

    polygon_map.addControl(new L.NewPolygonControl());
});