var wms_layers = [];

var format_PERSILTAWANGMANGU_0 = new ol.format.GeoJSON();
var features_PERSILTAWANGMANGU_0 = format_PERSILTAWANGMANGU_0.readFeatures(json_PERSILTAWANGMANGU_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERSILTAWANGMANGU_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERSILTAWANGMANGU_0.addFeatures(features_PERSILTAWANGMANGU_0);
var lyr_PERSILTAWANGMANGU_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERSILTAWANGMANGU_0, 
                style: style_PERSILTAWANGMANGU_0,
                popuplayertitle: 'PERSIL TAWANGMANGU',
                interactive: true,
                title: '<img src="styles/legend/PERSILTAWANGMANGU_0.png" /> PERSIL TAWANGMANGU'
            });

lyr_PERSILTAWANGMANGU_0.setVisible(true);
var layersList = [lyr_PERSILTAWANGMANGU_0];
lyr_PERSILTAWANGMANGU_0.set('fieldAliases', {'ID': 'ID', 'KODEWILAYA': 'KODEWILAYA', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'TIPEHAK': 'TIPEHAK', 'TIPEPRODUK': 'TIPEPRODUK', 'TAHUN': 'TAHUN', 'NIB': 'NIB', 'LUASTERTUL': 'LUASTERTUL', 'LUASPETA': 'LUASPETA', 'SUMBERGEOM': 'SUMBERGEOM', 'ALATUKUR': 'ALATUKUR', 'PENGGUNAAN': 'PENGGUNAAN', 'METODUKUR': 'METODUKUR', 'LUAS': 'LUAS', });
lyr_PERSILTAWANGMANGU_0.set('fieldImages', {'ID': '', 'KODEWILAYA': '', 'KECAMATAN': '', 'KELURAHAN': '', 'TIPEHAK': '', 'TIPEPRODUK': '', 'TAHUN': '', 'NIB': '', 'LUASTERTUL': '', 'LUASPETA': '', 'SUMBERGEOM': '', 'ALATUKUR': '', 'PENGGUNAAN': '', 'METODUKUR': '', 'LUAS': '', });
lyr_PERSILTAWANGMANGU_0.set('fieldLabels', {'ID': 'hidden field', 'KODEWILAYA': 'hidden field', 'KECAMATAN': 'inline label - visible with data', 'KELURAHAN': 'inline label - visible with data', 'TIPEHAK': 'inline label - visible with data', 'TIPEPRODUK': 'inline label - visible with data', 'TAHUN': 'inline label - visible with data', 'NIB': 'header label - visible with data', 'LUASTERTUL': 'inline label - visible with data', 'LUASPETA': 'inline label - visible with data', 'SUMBERGEOM': 'hidden field', 'ALATUKUR': 'inline label - visible with data', 'PENGGUNAAN': 'inline label - visible with data', 'METODUKUR': 'inline label - visible with data', 'LUAS': 'header label - visible with data', });
lyr_PERSILTAWANGMANGU_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});