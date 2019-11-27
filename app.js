document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'left',
        hoverEnabled: true
    });
    var elements = document.querySelectorAll('.sidenav');
    var inStances = M.Sidenav.init(elements, {
        edge: 'right'
    });
});

let date = new Date();
let style;
if (date.getHours() >= 0 <= 6 && date.getHours() > 18 <= 23) {
    console.log(date.getHours());

    style = [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#263c3f' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6b9a76' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#38414e' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#212a37' }]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9ca5b3' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#746855' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#1f2835' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#f3d19c' }]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#2f3948' }]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#17263c' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#515c6d' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#17263c' }]
        }
    ];
} else {
    style = null;
}

function initMap() {
    // Map option
    let options = {
        zoom: 7,
        center: { lat: 6.5244, lng: 3.3792 },
        styles: style
    };

    // New Map
    let map = new google.maps.Map(document.getElementById('map'), options);

    // Add Marker
    var marker = new google.maps.Marker({ position: { lat: 6.5244, lng: 3.3792 }, map: map });
}

// ====================== Nav Buttons ============================== //

/* The Refresh Icon */
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => location.reload());

/* The Search Button */


// ================== The Fixed-Floating Button =======================//

/* The Current Location Button */
let myLoaction = document.getElementById('my_location');



let showLocation = function (position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    // let latlongvalue = `${latitude}, ${longitude}`;

    let options = {
        zoom: 18,
        center: { lat: latitude, lng: longitude },
        styles: style
    };

    let map = new google.maps.Map(document.getElementById('map'), options);

    // Add Marker
    var marker = new google.maps.Marker({ position: { lat: latitude, lng: longitude }, map: map });
};
let errorHandler = function (err) {
    if (err.code == 1) {
        M.toast({ html: 'Access denied!' });
    } else if (err.code == 2) {
        M.toast({ html: 'Position Unavailable!' });
    }
};
let getLocation = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
    } else {
        M.toast({ html: 'Your browser does not support geolocation' });
    }
};

myLoaction.addEventListener('click', getLocation);