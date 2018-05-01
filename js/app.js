// for getting the data from google chrome console.
// https://stackoverflow.com/questions/15310659/using-chrome-console-to-access-knockout-viewmodel-with-requirejs

var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/malfet/1413379559');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);

        var count = 0;
        count++;
    };
};

ko.applyBindings(new ViewModel());
