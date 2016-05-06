/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'SoFresh & SoGreen',
        pageHeader: {
            title: 'SoFresh & SoGreen',
            strapline: 'Farmers Markets'
        },
        sidebar: "The fruits and vegetables you buy at the farmers market are the freshest and tastiest available. Fruits are allowed to ripen fully in the field and are brought directly to you—no long-distance shipping, no gassing to simulate the ripening process, no sitting for weeks in storage. This food is as real as it gets—fresh from the farm.",
        locations: [{
            name: 'Logan Square Farmers Market',
            address: '3107 W. Logan Blvd.',
            rating: 5,
            facilities: ['LINK card accepted']
        }, {
            name: 'Pilsen Community Market',
            address: '1800 S. Halsted St.',
            rating: 4,
            facilities: ['LINK card NOT accepted']
        }, {
            name: 'Jefferson Park Farmers Market',
            address: '4820 N. Long Ave.',
            rating: 4,
            facilities: ['LINK card NOT accepted']
        }, {
            name: 'Wicker Park Farmers Market',
            address: '1425 N. Damen Ave.',
            rating: 4,
            facilities: ['LINK card accepted']
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'SoFresh & SoGreen',
        pageHeader: {
            title: 'Logan Square Farmers Market'
        },
        sidebar: {
            context: 'Since 2005, the Logan Square Farmers Market has been an open-air food market and weekly community gathering. In 2009, it extended its operation to include an indoor market during the fall and winter months.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Logan Square Farmers Market',
            address: '3107 W. Logan Blvd.',
            rating: 5,
            facilities: ['Food vendors', 'Entertainment for the family', 'LINK'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Sunday',
                opening: '10:00am',
                closing: '3:00pm',
                closed: false
            }],
            reviews: [{
              author: 'Homer Simpson',
              rating: 3,
              timestamp: '13 July 2014',
              reviewText: 'Mmm...donuts'

            }, {
              author: 'Armando Robledo',
              rating: 5,
              timestamp: '22 August 2015',
              reviewText: 'What a great place. I can\'t say enough good things about it.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'SoFresh & SoGreen Review',
        pageHeader: {
            title: 'Review the Logan Square Farmers Market'
        }
    });
};
