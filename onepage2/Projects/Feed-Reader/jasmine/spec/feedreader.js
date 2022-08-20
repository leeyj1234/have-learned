$(function() {

  describe('RSS Feeds', function() {

    //Test to make sure that the allFeeds variable has been defined
    //and that it is not empty.
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    // Loop through each feed in the allFeeds object
    //and ensure it has a URL defined and that the URL is not empty.
    it('url defined and not empty', function() {
      for(let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url.length).not.toBe(0);
      };
    });

    // Loop through each feed in the allFeeds object and ensure
    // it has a name defined and that the name is not empty.
    it('name defined and not empty', function() {
      for(let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name.length).not.toBe(0);
      };
    });
  });

  describe('The menu', function() {

    //Ensure the menu element is hidden by default.
    it('menu is hidden', function() {
      const body = document.querySelector('body');
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });

    //Ensure the menu changes visibility when the menu icon is clicked.
    it('menu on/off', function() {
      const body = document.querySelector('body');
      const menu = document.querySelector('.menu-icon-link');
      menu.click();
      expect(body.classList.contains('menu-hidden')).toBe(false);
      menu.click();
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });
  });

  describe('Initial Entries', function() {
    //Ensure when the loadFeed function is called and completes its work,
    //there is at least single .entry element within the .feed container.
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('loadFeed called and worked', function() {
      const feed = $('.feed .entry').length;
      expect(feed > 0).toBe(true);
    });
  });

  describe('New Feed Selection', function() {
    //Ensure when a new feed is loaded by the loadFeed function
    //that the content actually changes.
    let firstFeed;
    let nextFeed;

    beforeEach(function(done) {
      loadFeed(0, function() {
        firstFeed = $('.header-title').html();
        loadFeed(1, function() {
          nextFeed = $('.header-title').html();
          done();
        });
      });
    });

    //Ensure when a new feed is loaded by the loadFeed function
    //that the content actually changes.
    it('content changed', function() {
    expect(nextFeed).not.toBe(firstFeed);
    });
 });
}());
