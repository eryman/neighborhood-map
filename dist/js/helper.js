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
            markers[i].setMap(null);
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
                    console.log(marker);
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
        model.locations.forEach(function(locationItem){
            // If the keyword matches, add it the venue to the list
            if (locationItem.keywords.includes(vm.keywordValue())){
                helper.addToVenuesList(locationItem, i);
                i++;
            }
        });
        // Set value of vm.venuesListVisible to model.venuesList
        vm.venuesListVisible(model.venuesList);
        // Set filtered markers
        this.setMarkers();
    }
    /* Searches google maps for keyword(s), filters through model.locations, and displays results with markers and venuesList
    googleSearchLocations: function(query) {
            var self = this;
            console.log(query);
            if (query == '') {
                window.alert('You must enter a search query.');
            } else {
                var location = model.map.center;
                var request = {
                    location: location,
                    radius: '500',
                    query: query
                };

                var service = self.initPlacesService(model.map);
                service.textSearch(request, callback);
            }

            function callback(results, status) {
                //console.log(results);
                var noneFound = function() {
                    window.alert("No matches found!");
                    vm.resetVenuesList();
                }
                if (results.length == 0) {
                    nonefound();
                } else {
                    model.venuesList = []
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                            var j = 0;
                            model.locations.forEach(function(location) {
                                if (results[i].place_id === location.googlePlaceId) {
                                    console.log(results[i]);
                                    self.addToVenuesList(location, i);
                                };
                                j++;
                            })
                        }
                        if (model.venuesList.length === 0){
                            noneFound();
                        } else {
                            self.setMarkers();
                            vm.venuesListVisible(model.venuesList);
                        }
                    }
                }
            }
        }
        /*googleSearchWithinTime: function(query){
          var self = this;
          //helper.clearMarkerAnimation();
          // Initialize the distance matrix service.
          var distanceMatrixService = helper.initDistanceMatrixService();
          //var address = document.getElementById('search-within-time-text').value;
          console.log(query)
          // Check to make sure the place entered isn't blank.
          if (query == '') {
            window.alert('You must enter an address.');
          } else {
            //this.hideMarkers(octopus.getMarkers());
            // Use the distance matrix service to calculate the duration of the
            // routes between all our markers, and the destination address entered
            // by the user. Then put all the origins into an origin matrix.
            var origins = [];
            for (var i = 0; i < model.markers.length; i++) {
              origins[i] = model.markers[i].position;
            }


            var destination = query;

            if (vm.selectedMode() == 'drive') {
              vm.modeValue('DRIVING');
            }
            else if (vm.selectedMode() == 'walk') {
              vm.modeValue('WALKING');
            }
            else if (vm.selectedMode() == 'bike') {
              vm.modeValue('BICYCLING');
            }
            else if (vm.selectedMode() == 'transit ride') {
              vm.modeValue('TRANSIT');
            }
            console.log(vm.modeValue());

            // Now that both the origins and destination are defined, get all the
            // info for the distances between them.
            distanceMatrixService.getDistanceMatrix({
              origins: origins,
              destinations: [destination],
              travelMode: google.maps.TravelMode[vm.modeValue()],
              unitSystem: google.maps.UnitSystem.IMPERIAL,
            }, function(response, status) {
              if (status !== google.maps.DistanceMatrixStatus.OK) {
                window.alert('Error was: ' + status);
              } else {
                self.displayMarkersWithinTime(response);
              }
            });
          }
        },
        displayMarkersWithinTime: function(response) {
          var self = this;
          console.log(response);
          //var maxDuration = document.getElementById('max-duration').value;

          if (vm.selectedDuration() == '10 min') {
            vm.durationValue(10);
          }
          else if (vm.selectedDuration() == '15 min') {
            vm.durationValue(15);
          }
          else if (vm.selectedDuration() == '30 min') {
            vm.durationValue(30);
          }
          else if (vm.selectedDuration() == '1 hour') {
            vm.durationValue(60);
          }
          console.log(vm.durationValue());



          //self.clearMarkerAnimation();
          var origins = response.originAddresses;
          var destinations = response.destinationAddresses;
          // Parse through the results, and get the distance and duration of each.
          // Because there might be  multiple origins and destinations we have a nested loop
          // Then, make sure at least 1 result was found.
          var atLeastOne = false;
          for (var i = 0; i < origins.length; i++) {
            var results = response.rows[i].elements;
            for (var j = 0; j < results.length; j++) {
              var element = results[j];
              if (element.status === "OK") {
                // The distance is returned in feet, but the TEXT is in miles. If we wanted to switch
                // the function to show markers within a user-entered DISTANCE, we would need the
                // value for distance, but for now we only need the text.
                var distanceText = element.distance.text;
                // Duration value is given in seconds so we make it MINUTES. We need both the value
                // and the text.
                var duration = element.duration.value / 60;
                var durationText = element.duration.text;
                if (duration <= vm.durationValue()) {
                  //the origin [i] should = the markers[i]
                  model.markers[i].setMap(model.map);
                  atLeastOne = true;
                  // Create a mini infowindow to open immediately and contain the
                  // distance and duration


                  //CLEAR VENUESLIST
                  model.venuesList = [];
                  //ADD ITEM AT i TO VENUESLIST AS LOCATION OBJECT
                  helper.addToVenuesList(model.locations[i], i);
                  //SET VENUESLISTVISIBLE TO VALUE OF VENUESLIST
                  //model.markers.forEach(function(marker){
                  //self.affectMarker(model.markers[i]);
                    //self.toggleBounce(model.markers[i])
                  //});
                  console.log(model.venuesList);



                  var infowindow = new google.maps.InfoWindow({
                    content: durationText + ' away, ' + distanceText +
                      '<div><input type=\"button\" value=\"View Route\" onclick =' +
                      '\"vm.displayDirections(&quot;' + origins[i] + '&quot;);\"></input></div>'
                  });
                  infowindow.open(map, model.markers[i]);
                  // Put this in so that this small window closes if the user clicks
                  // the marker, when the big infowindow opens
                  model.markers[i].infowindow = infowindow;
                  google.maps.event.addListener(model.markers[i], 'click', function() {
                    this.infowindow.close();
                  });
                }
                //self.setMarkers();
                vm.venuesListVisible(model.venuesList)
              }
            }
          }
          if (!atLeastOne) {
            window.alert('We could not find any locations within that distance!');
          }
        },
        googleDisplayDirections(destinationAddress){
          helper.hideMarkers(model.markers);
          var directionsService = new google.maps.DirectionsService;
          // Get the destination address from the user entered value.
          var origin =
              document.getElementById('search-within-time-text').value;
          // Get mode again from the user entered value.
          //var mode = document.getElementById('mode').value;
          if (vm.modeValue() == ''){
            vm.modeValue('DRIVING')
          }
          directionsService.route({
            // The origin is the passed in marker's position.
            origin: origin,
            // The destination is user entered address.
            destination: destinationAddress,
            travelMode: google.maps.TravelMode[vm.modeValue()]
          }, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
              
              console.log(response);

              var directionsArray = response.routes[0].legs[0];
              console.log(directionsArray.start_address);
              directionsArray.steps.forEach(function(step){
                console.log(step.instructions);
              });
              console.log(directionsArray.end_address)
              

              var directionsDisplay = new google.maps.DirectionsRenderer({
                map: model.map,
                directions: response,
                draggable: true,
                polylineOptions: {
                  strokeColor: 'green'
                }
              });
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
  
        }*/
};




/*// Gets coordinates for search function to use as starting location
      var location = model.map.center;
      var request = {
        location: location,
        radius: '500',
        query: query//address
      };

      var startLocation;
      var service = this.initPlacesService(model.map);
      //console.log(service.textSearch(request, callback));
      
      function callback(results, status) {
        startLocation = results;

      console.log(startLocation)
        return startLocation;
      }
      // FIGURE OUT HOW TO GET START LOCATION OUT OF FUNCTION
*/