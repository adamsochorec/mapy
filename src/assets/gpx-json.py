import xml.etree.ElementTree as ET
import json

def gpx_to_geojson(gpx_file):
    tree = ET.parse(gpx_file)
    root = tree.getroot()

    namespace = {'default': 'http://www.topografix.com/GPX/1/1'}

    geojson = {
        "type": "FeatureCollection",
        "features": []
    }

    for trk in root.findall('default:trk', namespace):
        for trkseg in trk.findall('default:trkseg', namespace):
            coordinates = []
            for trkpt in trkseg.findall('default:trkpt', namespace):
                lat = float(trkpt.get('lat'))
                lon = float(trkpt.get('lon'))
                ele = trkpt.find('default:ele', namespace)
                time = trkpt.find('default:time', namespace)
                coordinates.append([lon, lat, float(ele.text) if ele is not None else None, time.text if time is not None else None])

            feature = {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": coordinates
                },
                "properties": {
                    "name": trk.find('default:name', namespace).text if trk.find('default:name', namespace) is not None else None,
                    "type": trk.find('default:type', namespace).text if trk.find('default:type', namespace) is not None else None
                }
            }
            geojson["features"].append(feature)

    return geojson

gpx_file = 'romania.gpx'
geojson_data = gpx_to_geojson(gpx_file)

with open('new_geoData.json', 'w') as f:
    json.dump(geojson_data, f, indent=2)

print("GeoJSON data has been written to new_geoData.json.")