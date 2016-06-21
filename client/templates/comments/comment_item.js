Template.commentItem.helpers({
  timeDiff: function() {
    var timestamp = moment(this.submitted.toString());
    var now = moment();
    var diff = moment.duration(timestamp.diff(now), "milliseconds").humanize(true);
    return diff;
  }
});