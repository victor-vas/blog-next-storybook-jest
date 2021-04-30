import request from 'graphql-request';
import config from '../config';
import { defaultLoadPostsVariables, loadPosts } from './load-posts';

jest.mock('graphql-request');

jest.mock('../graphql/queries', () => {
  return {
    GRAPHQL_QUERY: 'QUERY',
  };
});

describe('load-posts', () => {
  it('should call request with default variables', async () => {
    await loadPosts();
    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'QUERY',
      defaultLoadPostsVariables,
    );
  });

  it('should call request with custom variables', async () => {
    await loadPosts({
      authorSlug: 'AUTHOR_SLUG',
      tagSlug: 'TAG',
      categorySlug: 'CATEGORY',
      limit: 100,
      postSearch: 'SEARCH',
      postSlug: 'POST_SLUG',
      sort: 'SORT',
      start: 1,
    });

    expect(request).toHaveBeenCalledWith(config.graphqlURL, 'QUERY', {
      ...defaultLoadPostsVariables,
      authorSlug: 'AUTHOR_SLUG',
      tagSlug: 'TAG',
      categorySlug: 'CATEGORY',
      limit: 100,
      postSearch: 'SEARCH',
      postSlug: 'POST_SLUG',
      sort: 'SORT',
      start: 1,
    });
  });
});
