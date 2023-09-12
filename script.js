let map;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: new google.maps.LatLng(-33.91722, 151.23064),
    mapTypeId: "roadmap"
  });

  const iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
  const icons = {
    parking: {
      name: "Hombre",
      icon: iconBase + "parking_lot_maps.png",
    },
    library: {
      name: "Mujer",
      icon: iconBase + "library_maps.png",
    },
    
  };

  const features = [
    {
      position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
      type: "library",
    },
  ];

  features.forEach((feature) => {
    new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    })
  });

  const legend = document.getElementById("legend");

  for (let key in icons) {
    const type = icons[key];
    const name = type.name;
    const icon = type.icon;
    const div = document.createElement("div");

    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

}

window.initMap = initMap;