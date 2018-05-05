// for getting the data from google chrome console.
// https://stackoverflow.com/questions/15310659/using-chrome-console-to-access-knockout-viewmodel-with-requirejs

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

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

    var self = this;

    this.currentCat = ko.observable( new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
        nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
    }) );

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);

        var count = 0;
        count++;
    };
};

ko.applyBindings(new ViewModel());
