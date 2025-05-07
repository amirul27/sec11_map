var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FinalwithphoneSheet1_XYTableToPoint_1 = new ol.format.GeoJSON();
var features_FinalwithphoneSheet1_XYTableToPoint_1 = format_FinalwithphoneSheet1_XYTableToPoint_1.readFeatures(json_FinalwithphoneSheet1_XYTableToPoint_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FinalwithphoneSheet1_XYTableToPoint_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FinalwithphoneSheet1_XYTableToPoint_1.addFeatures(features_FinalwithphoneSheet1_XYTableToPoint_1);
var lyr_FinalwithphoneSheet1_XYTableToPoint_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FinalwithphoneSheet1_XYTableToPoint_1, 
                style: style_FinalwithphoneSheet1_XYTableToPoint_1,
                popuplayertitle: 'FinalwithphoneSheet1_XYTableToPoint',
                interactive: true,
                title: '<img src="styles/legend/FinalwithphoneSheet1_XYTableToPoint_1.png" /> FinalwithphoneSheet1_XYTableToPoint'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_FinalwithphoneSheet1_XYTableToPoint_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FinalwithphoneSheet1_XYTableToPoint_1];
lyr_FinalwithphoneSheet1_XYTableToPoint_1.set('fieldAliases', {'objectid': 'objectid', 'plot': 'plot', 'plot_owner': 'plot_owner', 'course': 'course', 'mobile_no': 'mobile_no', 'lon': 'lon', 'lat': 'lat', });
lyr_FinalwithphoneSheet1_XYTableToPoint_1.set('fieldImages', {'objectid': '', 'plot': '', 'plot_owner': '', 'course': '', 'mobile_no': '', 'lon': '', 'lat': '', });
lyr_FinalwithphoneSheet1_XYTableToPoint_1.set('fieldLabels', {'objectid': 'no label', 'plot': 'no label', 'plot_owner': 'no label', 'course': 'no label', 'mobile_no': 'no label', 'lon': 'no label', 'lat': 'no label', });
lyr_FinalwithphoneSheet1_XYTableToPoint_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});