(function() {
  var Application;
  Application = (function() {
    function Application() {
      var url;
      this.elements = {
        tweets: $('.js-tweets')
      };
      this.twitterTimeline = new TwitterTimeline(this.elements.tweets);
      url = this.elements.tweets.attr('data-url') + "&callback=?";
      $.getJSON(url, twitterTimelineCallback);
      this.twitterTimeline.request;
    }
    return Application;
  })();
  $(function() {
    return window.app = new Application;
  });
}).call(this);
