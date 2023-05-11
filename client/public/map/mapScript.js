function initMap() {
  // Harita oluştur
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7589, lng: -73.9851 },
    zoom: 12,
  });

  // Çizim aracını oluştur
  var drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.POLYGON,
    drawingControl: false,
    markerOptions: { editable: true },
    polygonOptions: {
      fillColor: "#00FF00",
      fillOpacity: 0.5,
      strokeWeight: 2,
      strokeColor: "#000000",
      clickable: false,
      editable: true,
      zIndex: 1,
    },
  });

  // Çizim aracını haritaya ekle
  drawingManager.setMap(map);

  // Open butonu
  document.getElementById("open").addEventListener("click", () => {
    drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
    document.getElementById("open").setAttribute("disabled", "disabled");
  });

  // Harita tamamlama
  document.getElementById("draw").addEventListener("click", () => {
    var path = polygon.getPath();
    var coordinates = [];

    for (var i = 0; i < path.length; i++) {
      var lat = path.getAt(i).lat();
      var lng = path.getAt(i).lng();
      coordinates.push([lat, lng]);
    }

    fetch("https://taslabeni.onrender.com/site/", {
      // fetch("http://localhost:3000/site/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [coordinates],
        },
        properties: {
          name: "Site name",
          company: "642c1e14b37b36d53803ed31",
          referance: document.getElementById("reference").value,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    console.log(coordinates);
  });

  // polygone tamamlandığında yapılan işlemler
  google.maps.event.addListener(
    drawingManager,
    "overlaycomplete",
    function (event) {
      if (event.type == google.maps.drawing.OverlayType.POLYGON) {
        drawingManager.setDrawingMode(null);
        polygon = event.overlay;
        document.getElementById("open").removeAttribute("disabled");
      }
    }
  );
}
