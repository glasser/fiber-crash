Meteor.startup(function () {
  console.log("start");
  var ds = 'Fri Dec 28 22:31:38 +0000 2012';
  var i = 0;
  while (i < 2000) {
    Date.create(ds);
    i += 1;
  }
  console.log("done");
});
