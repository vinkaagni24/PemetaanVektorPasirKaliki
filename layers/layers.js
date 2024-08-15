var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VEKTOR2_1 = new ol.format.GeoJSON();
var features_VEKTOR2_1 = format_VEKTOR2_1.readFeatures(json_VEKTOR2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VEKTOR2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VEKTOR2_1.addFeatures(features_VEKTOR2_1);
var lyr_VEKTOR2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VEKTOR2_1, 
                style: style_VEKTOR2_1,
                popuplayertitle: "VEKTOR 2",
                interactive: true,
                title: '<img src="styles/legend/VEKTOR2_1.png" /> VEKTOR 2'
            });
var format_GPSEssentialsExport_2 = new ol.format.GeoJSON();
var features_GPSEssentialsExport_2 = format_GPSEssentialsExport_2.readFeatures(json_GPSEssentialsExport_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPSEssentialsExport_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPSEssentialsExport_2.addFeatures(features_GPSEssentialsExport_2);
var lyr_GPSEssentialsExport_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPSEssentialsExport_2, 
                style: style_GPSEssentialsExport_2,
                popuplayertitle: "GPS Essentials Export",
                interactive: true,
                title: '<img src="styles/legend/GPSEssentialsExport_2.png" /> GPS Essentials Export'
            });
var format_UTMVEKTOR1_3 = new ol.format.GeoJSON();
var features_UTMVEKTOR1_3 = format_UTMVEKTOR1_3.readFeatures(json_UTMVEKTOR1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMVEKTOR1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMVEKTOR1_3.addFeatures(features_UTMVEKTOR1_3);
var lyr_UTMVEKTOR1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMVEKTOR1_3, 
                style: style_UTMVEKTOR1_3,
                popuplayertitle: "UTM VEKTOR 1",
                interactive: true,
                title: '<img src="styles/legend/UTMVEKTOR1_3.png" /> UTM VEKTOR 1'
            });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_4.png" /> Buffered'
            });
var format_VEKTORVINKA2_5 = new ol.format.GeoJSON();
var features_VEKTORVINKA2_5 = format_VEKTORVINKA2_5.readFeatures(json_VEKTORVINKA2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VEKTORVINKA2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VEKTORVINKA2_5.addFeatures(features_VEKTORVINKA2_5);
var lyr_VEKTORVINKA2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VEKTORVINKA2_5, 
                style: style_VEKTORVINKA2_5,
                popuplayertitle: "VEKTOR VINKA 2",
                interactive: true,
                title: '<img src="styles/legend/VEKTORVINKA2_5.png" /> VEKTOR VINKA 2'
            });
var format_JALAN_LN_25K_6 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_6 = format_JALAN_LN_25K_6.readFeatures(json_JALAN_LN_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_6.addFeatures(features_JALAN_LN_25K_6);
var lyr_JALAN_LN_25K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_6, 
                style: style_JALAN_LN_25K_6,
                popuplayertitle: "JALAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_6.png" /> JALAN_LN_25K'
            });
var format_SUNGAI_LN_25K_7 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_7 = format_SUNGAI_LN_25K_7.readFeatures(json_SUNGAI_LN_25K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_7.addFeatures(features_SUNGAI_LN_25K_7);
var lyr_SUNGAI_LN_25K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_7, 
                style: style_SUNGAI_LN_25K_7,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_7.png" /> SUNGAI_LN_25K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_VEKTOR2_1.setVisible(true);lyr_GPSEssentialsExport_2.setVisible(true);lyr_UTMVEKTOR1_3.setVisible(true);lyr_Buffered_4.setVisible(true);lyr_VEKTORVINKA2_5.setVisible(true);lyr_JALAN_LN_25K_6.setVisible(true);lyr_SUNGAI_LN_25K_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_VEKTOR2_1,lyr_GPSEssentialsExport_2,lyr_UTMVEKTOR1_3,lyr_Buffered_4,lyr_VEKTORVINKA2_5,lyr_JALAN_LN_25K_6,lyr_SUNGAI_LN_25K_7];
lyr_VEKTOR2_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_GPSEssentialsExport_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UTMVEKTOR1_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_VEKTORVINKA2_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JALAN_LN_25K_6.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_25K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_VEKTOR2_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_GPSEssentialsExport_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_UTMVEKTOR1_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Buffered_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_VEKTORVINKA2_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_JALAN_LN_25K_6.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_SUNGAI_LN_25K_7.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_VEKTOR2_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_GPSEssentialsExport_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMVEKTOR1_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Buffered_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_VEKTORVINKA2_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_JALAN_LN_25K_6.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});