// Stores location information
var model = {
    styles: [{
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [{
            "visibility": "off"
        }, {
            "hue": "#ff0000"
        }]
    }, {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#d8d7dc"
        }, {
            "saturation": "-29"
        }, {
            "gamma": "2.24"
        }]
    }, {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }, {
            "hue": "#ff0000"
        }]
    }, {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#bc1111"
        }]
    }, {
        "featureType": "landscape.natural.terrain",
        "elementType": "labels",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#689b83"
        }, {
            "gamma": "1.64"
        }, {
            "saturation": "-12"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#60c260"
        }]
    }, {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }, {
            "hue": "#ff0000"
        }, {
            "saturation": "-5"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#e43715"
        }, {
            "saturation": "-5"
        }, {
            "gamma": "1.64"
        }]
    }, {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#e43715"
        }, {
            "gamma": "2.59"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }, {
            "hue": "#0008ff"
        }, {
            "gamma": "1.12"
        }, {
            "saturation": "14"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#f1a77e"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#a52929"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#f1897e"
        }]
    }, {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }],
    client_id: 'TSARO0UFQKSDCDYDPYZIJWQDHYALT1DTV1CWKQM5D3U1JNSM',
    client_secret: 'BVINLUWCQEAMUUN4RTKYF5IF41UKP1SZZHGVN0LFHPEKJIWC',
    venuesList: [],
    placesService: null,
    distanceMatrixService: null,
    highlightedIcon: null,
    defaultIcon: null,
    largeInfowindow: null,
    map: null,
    currentLoc: null,
    markers: [],
    firstReset: true,
    locations: [{
        title: 'Fourth World Comics',
        location: {
            lat: 40.8540,
            lng: -73.1868
        },
        VENUE_ID: '4a927780f964a520121d20e3',
        reviews: [],
        id: null,
        googlePlaceId: 'ChIJ39IbMR866IkR-B2jPLIpEoA',
        reviewsExist: false,
        keywords: ['comics', 'anime', 'movies', 'apparel', 'toys', 'cards', 'games', 'video games']
    }, {
        title: 'Golden Memories Comics',
        location: {
            lat: 40.8687,
            lng: -73.0247
        },
        VENUE_ID: null, //FIX THIS ID
        reviews: [],
        id: null,
        googlePlaceId: 'ChIJ6S1N6Q5H6IkRGh6ecL7TSdQ',
        reviewsExist: false,
        keywords: ['comics', 'anime', 'apparel', 'toys', 'cards', 'games', 'video games']
    }, {
        title: 'GameStop Centereach',
        location: {
            lat: 40.8619,
            lng: -73.0827
        },
        VENUE_ID: '4bf7f8a45efe2d7f7bcf6934',
        reviews: [],
        id: null,
        googlePlaceId: 'ChIJA8hfJH9H6IkRvg1i0YYZr80',
        reviewsExist: false,
        keywords: ['apparel', 'toys', 'cards','video games']
    }, {
        title: 'Tor Comics',
        location: {
            lat: 40.8143,
            lng: -73.0435
        },
        VENUE_ID: '4e304f3a6284021061f436e8',
        reviews: [],
        id: null,
        googlePlaceId: 'ChIJ7-Dtgn9I6IkR4Io7jSXHAe0',
        reviewsExist: false,
        keywords: ['comics', 'anime', 'cards', 'games']
    }, {
        title: 'The Revolution',
        location: {
            lat: 40.9202,
            lng: -73.1301
        },
        VENUE_ID: '505e7c37e4b004c15c15a0f0',
        reviews: [],
        id: null,
        googlePlaceId: 'ChIJN8m_vCY_6IkRdtj9EvBZQbk',
        reviewsExist: false,
        keywords: ['video games']
    }]
};

// Creates Location object

var Location = function(data) {
    this.title = data.title;
    this.location = data.location;
    this.VENUE_ID = data.VENUE_ID;
    this.reviews = data.reviews;
    this.id = data.id;
    this.reviewsExist = data.reviewsExist;
    this.googlePlaceId = data.googlePlaceId;
    this.keywords = data.keywords;
};

// Interfaces with model to make those items useful for ViewModel and mapView

var helper = {
    // sets model.largeInfoWindow for future use
    setInfowindow: function() {
        model.largeInfowindow = new google.maps.InfoWindow();
    },
    getInfowindow: function() {
        return model.largeInfowindow;
    },
    // Sets model.map value to be used in mapView.initMap() function
    setMap: function() {
        model.map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 40.8649,
                lng: -73.1302
            },
            zoom: 13,
            styles: model.styles
        });
    },
    // Hides markers
    hideMarkers: function(markers) {
        for (var i = 0; i < markers.length; i++) {
            //markers[i].setMap(null);
            markers[i].setVisible(false);
        }
    },
    // Stops marker from bouncing
    clearMarkerAnimation: function() {
        model.markers.forEach(function(mark) {
            mark.setAnimation(null);
        });
    },
    // Makes marker bounce
    toggleBounce: function(marker) {
        this.clearMarkerAnimation();
        if (marker.getAnimation() !== 1) {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    },
    // Creates markers based on model.venuesList and sets markers on map
    setMarkers: function() {

        var bounds = new google.maps.LatLngBounds();
        var self = this;
        var i = 0;
        this.hideMarkers(model.markers);
        model.markers = [];
        model.venuesList.forEach(function(locationItem) {
            marker = new google.maps.Marker({
                position: locationItem.location,
                map: model.map,
                title: locationItem.title,
                animation: google.maps.Animation.DROP,
                icon: self.getDefaultIcon(),
                id: i
            });
            // Push the marker to our array of markers.
            model.markers.push(marker);
            // create an array of markers to use with list view click events
            // Create an onclick event to open an infowindow at each marker.
            marker.addListener('click', function() {
                self.populateInfoWindow(this, self.getInfowindow());
                self.toggleBounce(this);
                var id = this.id;
                model.venuesList.forEach(function(location){
                    if (location.id === id){
                        vm.displayReviews(location);
                    }
                })
                model.map.panTo(this.getPosition());
            });
            marker.addListener('mouseover', function() {
                this.setIcon(self.getHighlightedIcon());
            });
            marker.addListener('mouseout', function() {
                this.setIcon(self.getDefaultIcon());
            });
            // Extend the boundaries of the map for each marker
            bounds.extend(marker.position);
            i++;
        });
        model.map.fitBounds(bounds);
        google.maps.event.addDomListener(window, 'resize', function(){
            model.map.fitBounds(bounds);
        })
        //console.log(model.markers);
    },
    // Stylizes marker icon
    makeMarkerIcon: function(markerColor) {
        var marker = new google.maps.MarkerImage(
            'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
            '|40|_|%E2%80%A2',
            new google.maps.Size(21, 34),
            new google.maps.Point(0, 0),
            new google.maps.Point(10, 34),
            new google.maps.Size(21, 34));
        return marker;
    },
    getHighlightedIcon: function() {
        model.highlightedIcon = this.makeMarkerIcon('FFFF24');
        return model.highlightedIcon;
    },
    getDefaultIcon: function() {
        model.defaultIcon = this.makeMarkerIcon('0091ff');
        return model.defaultIcon;
    },
    // Create info window - to be used when marker is clicked
    populateInfoWindow: function(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent('<div>' + marker.title + '</div>');
            infowindow.open(map, marker);
            // Make sure the marker property is cleared if the infowindow is closed.
            infowindow.addListener('closeclick', function() {
                infowindow.setMarker(null);
            });
            var streetViewService = new google.maps.StreetViewService();
            var radius = 50;
            // In case the status is OK, which means the pano was found, compute the
            // position of the streetview image, then calculate the heading, then get a
            // panorama from that and set the options
            function getStreetView(data, status) {
                if (status == google.maps.StreetViewStatus.OK) {
                    var nearStreetViewLocation = data.location.latLng;
                    var heading = google.maps.geometry.spherical.computeHeading(
                        nearStreetViewLocation, marker.position);
                    infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>'
                        /* + '<div><input type=\"button\" value=\"View Route\" onclick =' +
                                            '\"vm.displayDirections(&quot;' + marker.position.lat() + ',' + marker.position.lng() + '&quot;);\"></input></div>'*/
                    );
                    var panoramaOptions = {
                        position: nearStreetViewLocation,
                        pov: {
                            heading: heading,
                            pitch: 30
                        }
                    };
                    var panorama = new google.maps.StreetViewPanorama(
                        document.getElementById('pano'), panoramaOptions);
                } else {
                    infowindow.setContent('<div>' + marker.title + '</div>' +
                        '<div>No Street View Found</div>');
                }
            }
            // Use streetview service to get the closest streetview image within
            // 50 meters of the markers position
            streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
            // Open the infowindow on the correct marker.
            infowindow.open(map, marker);
        }
    },
    // Gives each location item a unique ID (i), prepares an array of reviews taken from foursquare, sets reviewsExist to "false," instantiates the locationItem as a Location object, and finally adds that location object to the model.venuesList array. Adds each Location object to markers array
    addToVenuesList: function(locationItem, i) {
        locationItem.id = i;
        locationItem.reviews = ko.observableArray([]);
        locationItem.reviewsExist = ko.observable(false);
        i++;
        model.venuesList.push(new Location(locationItem));
    },
    // Causes marker to bounce and display infowindow when clicked
    affectMarker: function(marker) {
        var self = this;
        model.markers.forEach(function(mark) {
            mark.setIcon(self.getDefaultIcon());
            self.clearInfoWindow(self.getInfowindow());
        });
        self.toggleBounce(marker);

        self.populateInfoWindow(marker, self.getInfowindow());
    },
    // Gets rid of infowindow
    clearInfoWindow: function(infowindow) {
        infowindow.marker = null;
    },
    // Prepares a Google Maps Places Service
    initPlacesService: function() {
        model.placesService = new google.maps.places.PlacesService(model.map);
        return model.placesService;
    },
    // Prepares a Google Maps Distance Matrix Service
    initDistanceMatrixService: function() {
        model.distanceMatrixService = new google.maps.DistanceMatrixService();
        return model.distanceMatrixService;
    },
    googleFilterWithKeyword: function(){
        if (vm.selectedKeyword() == 'Comics/Graphic Novels') {
          vm.keywordValue('comics');
        }
        else if (vm.selectedKeyword() == 'Video Games') {
          vm.keywordValue('video games');
        }
        else if (vm.selectedKeyword() == 'Clothes/Apparel') {
          vm.keywordValue('apparel');
        }
        else if (vm.selectedKeyword() == 'Action Figures/Collectibles') {
          vm.keywordValue('toys');
        }
        else if (vm.selectedKeyword() == 'Anime/Manga') {
          vm.keywordValue('anime');
        }
        else if (vm.selectedKeyword() == 'Movies') {
          vm.keywordValue('movies');
        }
        else if (vm.selectedKeyword() == 'Trading Cards') {
          vm.keywordValue('cards');
        }
        else if (vm.selectedKeyword() == 'Board Games/CCGs') {
          vm.keywordValue('games');
        }
        // Clear model.venuesList to prepare it for filtered values
        model.venuesList = [];
        // Loop through model.locations looking for matching keywords
        var i = 0;
        var increment = false
        // HIDE ALL MARKERS
        this.hideMarkers(model.markers);

        model.locations.forEach(function(locationItem){
            // If the keyword matches, add it the venue to the list
            if (locationItem.keywords.includes(vm.keywordValue())){
                helper.addToVenuesList(locationItem, i);
                // MOVE THE i++ OUTSIDE OF THE IF STATEMENT
                model.markers.forEach(function(marker){
                    console.log(marker.id);
                    console.log(i);
                    if (marker.id === i){
                        console.log(marker)
                        marker.setVisible(true);
                    }
                });
            }
            i++;
            //LOOP THROUGH MARKERS, FIND THE ONE THAT MATCHES ID, SET IT TO VISIBLE

        });



        // Set value of vm.venuesListVisible to model.venuesList
        vm.venuesListVisible(model.venuesList);
        
    }
    
};
