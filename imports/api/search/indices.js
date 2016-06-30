// On Client and Server
import Podcasts from '../collections/podcasts.js';
import Reviews from '../collections/reviews.js';
import Posts from '../collections/posts.js';
import { EasySearch } from 'meteor/easy:search';

export const PodcastsIndex = new EasySearch.Index({
  collection: Podcasts,
  fields: ['title', 'tags', 'host', 'episodeNumber'],
  engine: new EasySearch.MongoDB({
    sort: function () {
      return { episodeNumber: -1 };
    }
  })
});

export const ReviewsIndex = new EasySearch.Index({
	collection: Reviews,
	fields: ['artist', 'releaseName'],
	engine: new EasySearch.MongoDB({
		sort: function() {
			return { submitted: -1 };
		}
	})
});

export const PostsIndex = new EasySearch.Index({
	collection: Posts,
	fields: ['title', 'tags'],
	engine: new EasySearch.MongoDB({
		sort: function() {
			return {submitted: -1};
		}
	})
});
