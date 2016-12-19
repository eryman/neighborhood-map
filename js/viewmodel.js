


    var mapView = {

        // LEAVE AS IS
        initMap: function() {
          // Creates map style

          
          //console.log("working");
          var self = this;

          var currentLoc;
          var marker;

          // Initialize the map, the list of markers, and the info window
          helper.setMap();
          helper.setMarkers();
          helper.setInfowindow();

          // Sets map on DOM
          document.getElementById('map').append('<a id="menu" class="header__menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg></a>');

          // This autocomplete is for use in the search within time entry box.
          
          //UNCOMMENT AUTOCOMPLETE AND FIGURE THIS SHIT OUT


          //var timeAutocomplete = new google.maps.places.Autocomplete(
            //  document.getElementById('search-within-time-text'));
          

          // This autocomplete is for use in the geocoder entry box.
          //var zoomAutocomplete = new google.maps.places.Autocomplete(
            //  document.getElementById('zoom-to-area-text'));
          //Bias the boundaries within the map for the zoom to area text.
          //zoomAutocomplete.bindTo('bounds', map);

        }
    }

    // Manipulates DOM for foursquare app
    ViewModel = function(){
      var textSearch;
      var reviews;
      var venuesListVisible;
      var self = this;     
      
      // Displays info from model.venuesList in UI
      self.venuesListVisible = ko.observableArray([]);
      // This observable is for use in the text search, to be called later in the searchLocations function
      self.textSearch = ko.observable('');

      //the following observables are for use in the distance search, to be called later in the searchLocationsByDistance function
      this.durations = ['10 min', '15 min', '30 min', '1 hour'];
      this.modes = ['drive', 'walk', 'bike', 'transit ride'];
      this.selectedDuration = ko.observable('');
      this.selectedMode = ko.observable('');
      this.durationValue = ko.observable();
      this.modeValue = ko.observable('');
      self.timeSearchText = ko.observable('');

      // Resets venuesList to initial value and makes it visible in the UI by setting "venuesListVisible" to the same value
      // LEAVE AS IS
      this.resetVenuesList = function(){
          var i = 0;
          //self.venuesList.removeAll();
          model.venuesList = [];
          model.locations.forEach(function(locationItem){
            //console.log(self);
            helper.addToVenuesList(locationItem, i);
            i++;
          });
          if (model.firstReset === false) {
            helper.setMarkers();
          };
          model.firstReset = false;
          self.venuesListVisible(model.venuesList);
          //console.log(self.venuesListVisible());
      }

      // LEAVE AS IS
      this.displayReviews = function(){

        var that = this;

        model.venuesList.forEach(function(venueItem){
          venueItem.reviewsExist(false)
        });

        this.reviewsExist(true);

        // Filter through markers for an ID that matches the ID of the list item and highlights that marker and creates an infowindow
        //console.log(octopus.getMarkers())

        model.markers.forEach(function(marker){
          //console.log(that.id);
          if (marker.id == that.id){
            
          console.log(marker.id);
              helper.affectMarker(marker);
              //marker.icon = highlightedIcon;
          }
        });
        //helper.animateMarkers(model.markers)
        var foursquareRequestTimeout = setTimeout(function(){
              window.alert("Unable to retrieve Foursquare resources");
              that.reviews.push({review: "No reviews to display!"})}, 8000); 
        //clears all reviews from all Location objects
        model.venuesList.forEach(function(venueItem) {
                //console.log(venueItem)
                venueItem.reviews.removeAll();
            })
        foursquareUrl = 'https://api.foursquare.com/v2/venues/' + this.VENUE_ID + '?client_id=' + model.client_id + '&client_secret=' + model.client_secret + '&v=20161129';
        $.ajax({
                  url: foursquareUrl,
                  dataType: 'json',
                  success: function(response){
                    //console.log(response);
                      var venueReviewsArray = response.response.venue.tips.groups[0].items;
                        if (venueReviewsArray.length > 0) {
                          for (var i = 0; i < venueReviewsArray.length; i++){
                              if (i == 4){
                                break;
                              }
                              that.reviews.push({review: '\"' + venueReviewsArray[i].text + '\"'});
                          }
                        } else {

                        }
                  //if successful, ignore the timeout request
                  clearTimeout(foursquareRequestTimeout)
                  }
              });
      }
      // LEAVE AS IS
      // Calls helper.googleSearchLocations
      this.searchLocations = function() {
        console.log(this.textSearch());
        helper.googleSearchLocations(this.textSearch());
        console.log(model.venuesList);
      }
      /*this.displayMarkersWithinTime = function(response) {
        console.log(response);
        //var maxDuration = document.getElementById('max-duration').value;

        if (self.selectedDuration() == '10 min') {
          self.durationValue(10);
        }
        else if (self.selectedDuration() == '15 min') {
          self.durationValue(15);
        }
        else if (self.selectedDuration() == '30 min') {
          self.durationValue(30);
        }
        else if (self.selectedDuration() == '1 hour') {
          self.durationValue(60);
        }
        console.log(self.durationValue());




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
              if (duration <= self.durationValue()) {
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
              vm.venuesListVisible(model.venuesList)
            }
          }
        }
        if (!atLeastOne) {
          window.alert('We could not find any locations within that distance!');
        }
      },*/
      this.searchWithinTime = function() {
        var self = this;
        helper.googleSearchWithinTime(this.timeSearchText());
      },
      // This function is in response to the user selecting "show route" on one
      // of the markers within the calculated distance. This will display the route
      // on the map.
      this.displayDirections = function(destinationAddress) {
        helper.googleDisplayDirections(destinationAddress);
        }
    
      //(more functions here)

      this.resetVenuesList();
    }
  

    var vm = new ViewModel;
    ko.applyBindings(vm);