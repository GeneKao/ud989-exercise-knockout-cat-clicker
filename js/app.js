// for getting the data from google chrome console.
// https://stackoverflow.com/questions/15310659/using-chrome-console-to-access-knockout-viewmodel-with-requirejs

var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/malfet/1413379559');
    this.nicknames = ko.observableArray(['Tabtab', 'T-Bone', 'Mr. T',
                                         'Tabitha Tab Tabby Catty Cat']);

    this.title = ko.computed(function() {
        var title;
        var clicks = this.clickCount();
        if (clicks < 10 ) {
            title = 'Newborn';
        } else if (clicks < 50) {
            title = 'Infant';
        } else if (clicks < 100) {
            title = 'Child';
        } else if (clicks < 200) {
            title = 'Teen';
        } else if (clicks < 500) {
            title = 'Adult';
        } else {
            title = 'Ninja';
        }
        return title;
    }, this);

};

var ViewModel = function() {

    this.currentCat = ko.observable( new Cat() );

    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);

        var count = 0;
        count++;
    };
};

ko.applyBindings(new ViewModel());
