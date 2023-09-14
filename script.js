let map;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: new google.maps.LatLng(-33.91722, 151.23064),
    mapTypeId: "roadmap"
  });

  const iconWomen = {
    text: "\ue13e",
    fontFamily: "Material Icons",
    color: "#ffffff",
    fontSize: "25px"
  }

  const iconMen = {
    text: "\ue4eb",
    fontFamily: "Material Icons",
    color: "#ffffff",
    fontSize: "25px"
  }

  const features = [
    {
      position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
      type: "mujer",
      label: iconWomen
    },
    {
      position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
      type: "hombre",
      label: iconMen
    },
    {
      position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
      type: "mujer",
      label: iconWomen
    },
    {
      position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
      type: "hombre",
      label: iconMen
    },
    {
      position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
      type: "mujer",
      label: iconWomen
    },
    {
      position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
      type: "mujer",
      label: iconWomen
    },
    {
      position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
      type: "hombre",
      label: iconMen
    },
    {
      position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
      type: "mujer",
      label: iconWomen
    },
  ];

  features.forEach((feature) => {
    new google.maps.Marker({
      position: feature.position,
      map: map,
      label: feature.label,
      title: feature.type
    })
  });

}

window.initMap = initMap;