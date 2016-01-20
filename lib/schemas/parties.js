Parties.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
  startTime: {
    type: Date,
    label: 'Start Time',
    autoform: {
      type: 'datetime-local'
    }
  },
  endTime: {
    type: Date,
    label: 'End Time',
    autoform: {
      type: 'datetime-local'
    }
  },
  location: {
    type: String,
    label: 'Location'
  },
  flyerFront: orion.attribute('image', {
    label: 'Flyer Front Image'
  }),
  flyerBack: orion.attribute('image', {
    label: 'Flyer Back Image',
    optional: true
  }),
  submitted: {
    type: Date,
    label: 'Submitted',
    defaultValue: new Date()
  },
  userId: {
    type: String,
    label: 'Submitted by'
  },
  commentCount: {
    type: Number,
    label: 'Comment Count',
    defaultValue: 0
  },
  upvoteCount: {
    type: Number,
    label: 'Upvote Count',
    defaultValue: 0
  },
  upvoters: {
    type: [String],
    label: 'Upvoters',
    optional: true
  },
  tags: {
    type: [String],
    label: 'Tags',
    optional: true
  },
  isPinned: {
    type: Boolean,
    label: 'Pinned',
    defaultValue: false
  },
  submitted: {
    type: Date,
    label: 'Submitted',
    defaultValue: Date.now()
  }
}));
