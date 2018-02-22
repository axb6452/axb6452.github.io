$(function () {
  function initMap () {
    const location = new google.maps.LatLng(42.3765, -71.2356)
    const mapCanvas = document.getElementById('map')
    mapCanvas.height = 300
    const mapOptions = {
      center: location,
      zoom: 12,
      panControl: false,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    const map = new google.maps.Map(mapCanvas, mapOptions)

    const markerImage = '../axb6452.github.io/img/marker.png'

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: markerImage
    })

    const contentString = '<div class="info-window">' +
                "<h3>Ashok's location</h3>" +
                '<div class="info-content">' +
                '<p>Waltham, MA</p>' +
                '</div>' +
                '</div>'

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 400
    })

    marker.addListener('click', function () {
      infowindow.open(map, marker)
    })

    const styles = [{'featureType': 'landscape', 'stylers': [{'saturation': -100}, {'lightness': 65}, {'visibility': 'on'}]}, {'featureType': 'poi',
      'stylers': [{'saturation': -100}, {'lightness': 51},
    {'visibility': 'simplified'}]}, {'featureType': 'road.highway', 'stylers': [{'saturation': -100}, {'visibility': 'simplified'}]}, {'featureType': 'road.arterial',
      'stylers': [{'saturation': -100}, {'lightness': 30},
    {'visibility': 'on'}]}, {'featureType': 'road.local', 'stylers': [{'saturation': -100}, {'lightness': 40}, {'visibility': 'on'}]}, {'featureType': 'transit',
      'stylers': [{'saturation': -100},
    {'visibility': 'simplified'}]}, {'featureType': 'administrative.province', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'water',
      'elementType': 'labels',
      'stylers': [{'visibility': 'on'}, {'lightness': -25},
    {'saturation': -100}]}, {'featureType': 'water', 'elementType': 'geometry', 'stylers': [{'hue': '#ffff00'}, {'lightness': -25}, {'saturation': -97}]}]
    map.set('styles', styles)
  }
  google.maps.event.addDomListener(window, 'load', initMap)
})
