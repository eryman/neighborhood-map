this.title = ko.observable("It's the title!");

        var self = this;


        this.venueReviewsObsArray = ko.observableArray([]);







        reviews = ko.observableArray([]);
        // Displays reviews when list item is clicked
        this.displayReviews = function() {


          var that = this;
          //console.log(octopus.getMarkers())

          //var largeInfowindow = new google.maps.InfoWindow();
          // Filter through markers for an ID that matches the ID of the list item and highlights that marker and creates an infowindow
          octopus.getMarkers().forEach(function(marker){
            if (marker.id == that.id){
              mapView.affectMarker(marker);
              //marker.icon = highlightedIcon;
            }
          });
          
          // Prepares URL for use in foursquare AJAX request
          
          // AJAX request for reviews
          
        }