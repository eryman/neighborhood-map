


    var mapView = {

        initMap: function() {

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
          
          //UNCOMMENT AUTOCOMPLETE AND FIGURE THIS OUT


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
      this.resetVenuesList = function(){
          var i = 0;
          model.venuesList = [];
          model.locations.forEach(function(locationItem){
            helper.addToVenuesList(locationItem, i);
            i++;
          });
          if (model.firstReset === false) {
            helper.setMarkers();
          };
          model.firstReset = false;
          self.venuesListVisible(model.venuesList);
      }

      this.displayReviews = function(){

        var that = this;

        model.venuesList.forEach(function(venueItem){
          venueItem.reviewsExist(false)
        });        
        model.venuesList.forEach(function(venueItem) {
          venueItem.reviews.removeAll();
        })

        this.reviewsExist(true);

        // Filter through markers for an ID that matches the ID of the list item and highlights that marker and creates an infowindow

        model.markers.forEach(function(marker){
          if (marker.id == that.id){
            
          console.log(marker.id);
              helper.affectMarker(marker);
          }
        });
        var foursquareRequestTimeout = setTimeout(function(){
              window.alert("Unable to retrieve Foursquare resources");
              that.reviews.push({review: "No reviews to display!"})}, 8000); 
        //clears all reviews from all Location objects

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


      // PLEASE IGNORE THIS - TO BE USED IN LATER VERSION OF APP


      /*this.searchWithinTime = function() {
        var self = this;
        helper.googleSearchWithinTime(this.timeSearchText());
      },
      // This function is in response to the user selecting "show route" on one
      // of the markers within the calculated distance. This will display the route
      // on the map.
      this.displayDirections = function(destinationAddress) {
        helper.googleDisplayDirections(destinationAddress);
        }
    */
    
      this.resetVenuesList();
    }
  

    var vm = new ViewModel;
    ko.applyBindings(vm);

    // ADD ERROR HANDLING FOR WHEN NO SEARCH RESULTS ARE FOUND

    // DELETE UNUSED CODE