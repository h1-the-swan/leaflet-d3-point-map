Author: Jason Portenoy

Leaflet and D3 powered map
Using D3

Peer dependencies: `jquery`, `d3`, `popper.js`, `tippy.js`, `leaflet`

### Usage
`var mapVis = new LeafletD3PointMap(mapOpts)`

#### Options

Initialize with a `mapOpts` object with the follwing properties:
= `el`: DOM element to add the map to
+ `data`: data representing institutions with latitude and longitude. Fields: `ID`, `COUNT_AUTHOR` (or other sizeField), `NAME`, `lat` (latitude), `lng` (longitude)
+ `width` (optional)
+ `sizeField` (optional)
+ `sizeScale` (optional)
+ `initMapCenter` (optional)
+ `initMapZoom` (optional)

```
defaults = {
			el: null,
			data: null,
			width: 960,
			sizeField: "COUNT_AUTHOR",
			sizeScale: [1,20],
			initMapCenter: [37.8, -26.9],
			initMapZoom: 1.5,
};
```



### Development
`npm run dev`
start a server at project root and point your web browser to `http://localhost:<PORT>/example/`
