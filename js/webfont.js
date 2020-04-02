Webfont.load({
    google: {
        families: ['Roboto:300,400,700', 'Schoolbell: 300, 400, 600'],
    },
    loading: function() {
        console.log("Fonts are being loaded");
    },
    active: function() {
        console.log("Fonts have been rendered");
    }

})