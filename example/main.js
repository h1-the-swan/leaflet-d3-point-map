var LeafletD3PointMap = leaflet_d3_point_map.LeafletD3PointMap;

d3.json('data/feed0.json').then(function(data) {
	var institutions = data.graph.institutions;
	var sel = d3.select('#mapid');
	var vis = new LeafletD3PointMap({data: institutions, el: sel, width: 1000});
});
