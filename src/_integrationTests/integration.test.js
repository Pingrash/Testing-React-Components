import moxios from 'moxios';
import { testStore } from '../../Utilities';
import { fetchPosts } from '../actions';

describe('fetchPosts action', () => {
  // Install and uninstall moxios plugin from axios before and after each test.
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Store is updated correctly', () => {
    const expectedState = [
      {
        title: 'Example title 1',
        body: 'Some Text'
      },
      {
        title: 'Example title 2',
        body: 'Some Text'
      },
      {
        title: 'Example title 3',
        body: 'Some Text'
      }
    ];

    const store = testStore();

    moxios.wait(() => {
      // Create a mock request to send through moxios.
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
