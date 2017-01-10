var mapView = {
    initMap: function() {
        // Initialize the map, the list of markers, and the info window
        helper.setMap();
        helper.setMarkers();
        helper.setInfowindow();
    },
    handleError: function() {
        window.alert("Map could not be loaded.");
    }
};

// Manipulates DOM for foursquare app
ViewModel = function() {
    var self = this;

    // Displays info from model.venuesList in UI - edit model.venuesList and set venuesListVisible to that value (self.venuesListVisible(model.venuesList))
    self.venuesListVisible = ko.observableArray([]);
    // This observable is for use in selecting the filter, to be called later in the FilterWithKeyword function
    self.keywords = ["Comics/Graphic Novels", "Video Games", "Clothes/Apparel", "Action Figures/Collectibles", "Anime/Manga", "Movies", "Trading Cards", "Board Games/CCGs"];
    self.selectedKeyword = ko.observable('');
    self.keywordValue = ko.observable('');
    this.isOpen = ko.observable(false);
    // Resets venuesList to initial value and makes it visible in the UI by setting "venuesListVisible" to the same value
    this.resetVenuesList = function() {
        var i = 0;
        model.venuesList = [];
        model.locations.forEach(function(locationItem) {
            helper.addToVenuesList(locationItem, i);
            i++;
        });
        if (model.firstReset === false) {
            helper.setMarkers();
        }
        model.firstReset = false;
        self.venuesListVisible(model.venuesList);
    };
    this.displayReviews = function(location) {
        var that = this;

        //clears all reviews from all Location objects
        model.venuesList.forEach(function(venueItem) {
            venueItem.reviewsExist(false);
        });
        model.venuesList.forEach(function(venueItem) {
            venueItem.reviews.removeAll();
        });

        // Set "reviewsExist" to true for this item, so that the "Reviews - Powered by Foursquare" subheader appears
        location.reviewsExist(true);

        // Filter through markers for an ID that matches the ID of the list item and highlights that marker and creates an infowindow
        model.markers.forEach(function(marker) {
            if (marker.id == location.id) {
                helper.affectMarker(marker);
                model.map.panTo(marker.getPosition());
            }
        });
        // Create a timeout request that creates a window alert and displays "No reviews to display"
        
        // Prepares URL for AJAX request
        foursquareUrl = 'https://api.foursquare.com/v2/venues/' + location.VENUE_ID + '?client_id=' + model.client_id + '&client_secret=' + model.client_secret + '&v=20161129';
        // AJAX request - calls upon Foursquare API for this location and returns an array of reviews
        $.ajax({
            url: foursquareUrl,
            dataType: 'json',
            success: function(response) {
                var venueReviewsArray = response.response.venue.tips.groups[0].items;
                if (venueReviewsArray.length > 0) {
                    for (var i = 0; i < venueReviewsArray.length; i++) {
                        if (i == 4) {
                            break;
                        }
                        location.reviews.push({
                            review: '\"' + venueReviewsArray[i].text + '\"'
                        });
                    }
                }
            },
            // If unsuccessful, do the following
            error: function(err){
                window.alert("Unable to retrieve Foursquare resources");
                location.reviews.push({
                  review: "No reviews to display!"
                });
            }
        });
    };
    
    // Calls helper.googleFilterWithKeyword
    this.filterWithKeyword = function() {
        helper.googleFilterWithKeyword();
    };

    this.navOpen = function() {
        this.isOpen(!this.isOpen());
        if (this.isOpen() === true){
            $('nav').addClass('open');
        }
    }

    this.resetVenuesList();
};


var vm = new ViewModel();
ko.applyBindings(vm);