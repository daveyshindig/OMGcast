import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const PartySchema = new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
  startTime: {
    type: Date,
    label: 'Start Time',
    autoform: {
      afFieldInput: {
        type: 'bootstrap-datetimepicker'
      }
    }
  },
  endTime: {
    type: Date,
    label: 'End Time',
    autoform: {
      afFieldInput: {
        type: 'bootstrap-datetimepicker'
      }
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
    label: 'Flyer Back Image (Optional)',
    optional: true
  }),
  description: {
    type: String,
    label: 'Description (Optional)',
    optional: true
  },
  submitted: {
    type: Date,
    label: 'Submitted',
    defaultValue: new Date()
  },
  userId: {
    type: String,
    label: 'User ID',
    autoValue: function () {
      if (!this.isSet)
        return this.userId;
    }
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
    defaultValue: []
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
  isApproved: {
    type: Boolean,
    label: 'Approved',
    defaultValue: true
  }
});
