var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_RATIOUNIV_0 = new ol.format.GeoJSON();
var features_RATIOUNIV_0 = format_RATIOUNIV_0.readFeatures(json_RATIOUNIV_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RATIOUNIV_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RATIOUNIV_0.addFeatures(features_RATIOUNIV_0);var lyr_RATIOUNIV_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RATIOUNIV_0, 
                style: style_RATIOUNIV_0,
    title: 'RATIO UNIV<br />\
    <img src="styles/legend/RATIOUNIV_0_0.png" /> LOW<br />\
    <img src="styles/legend/RATIOUNIV_0_1.png" /> MEDIUM<br />\
    <img src="styles/legend/RATIOUNIV_0_2.png" /> HIGH<br />\
    <img src="styles/legend/RATIOUNIV_0_3.png" /> VERY HIGH<br />'
        });

lyr_RATIOUNIV_0.setVisible(true);
var layersList = [baseLayer,lyr_RATIOUNIV_0];
lyr_RATIOUNIV_0.set('fieldAliases', {'ID': 'ID', 'KEC': 'KEC', 'KOTA': 'KOTA', 'PROV': 'PROV', 'Jml_univ': 'Jml_univ', 'Nama_Univ': 'Nama_Univ', 'Jml_Dos': 'Jml_Dos', 'Jml_Mhs': 'Jml_Mhs', 'Rasio': 'Rasio', });
lyr_RATIOUNIV_0.set('fieldImages', {'ID': 'TextEdit', 'KEC': 'TextEdit', 'KOTA': 'TextEdit', 'PROV': 'TextEdit', 'Jml_univ': 'TextEdit', 'Nama_Univ': 'TextEdit', 'Jml_Dos': 'TextEdit', 'Jml_Mhs': 'TextEdit', 'Rasio': 'TextEdit', });
lyr_RATIOUNIV_0.set('fieldLabels', {'ID': 'inline label', 'KEC': 'inline label', 'KOTA': 'inline label', 'PROV': 'inline label', 'Jml_univ': 'inline label', 'Nama_Univ': 'inline label', 'Jml_Dos': 'inline label', 'Jml_Mhs': 'inline label', 'Rasio': 'inline label', });
lyr_RATIOUNIV_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});