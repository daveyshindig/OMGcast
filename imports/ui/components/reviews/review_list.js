import './review_list.html';
import './review_item.html';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import Reviews from '../../../api/collections/reviews.js';
import { ReviewsIndex } from '../../../api/search/indices.js';
import { EasySearch } from 'meteor/easy:search';

Template.reviewList.helpers({
  reviewsIndex: () => ReviewsIndex // instanceof EasySearch.Index
});
