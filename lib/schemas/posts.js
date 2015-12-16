Posts.attachSchema(new SimpleSchema({
  userId: {
    type: String,
    label: 'User ID',
    optional: false
  },
  author: {
    type: String,
    label: 'Author',
    optional: false
  },
  submitted: {
    type: Date,
    label: 'Timestamp',
    optional: false
  },
  title: {
    type: String,
    label: 'Title',
    optional: false    
  },
  body: orion.attribute('summernote', {
    type: String,
    label: 'Body',
    optional: false
  }),
  slug: {
    type: String,
    label: 'Slug'
  }
}));