window.Todos = Ember.Application.create();

// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://127.0.0.1:3000'
  // Change the url to json when cross domain in ember side
  // fbulkCommit: false, 
  // url: "http://remote_server_address",    
  // buildURL: function(record, suffix) {
  //   var s = this._super(record, suffix);
  //   return s + ".json";
  // }
});