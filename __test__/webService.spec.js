import episodes from '../__mock__/episodes.json';
import response from '../__mock__/response.json';
import { handler } from '../src/handlers/webService';

describe('web service API', () => {
  const context = {};
  let cb;
  beforeEach(() => {
    cb = jest.fn();
  })
  it('should get proper response when valid json', () => {
    const mockEvent = {
      body: JSON.stringify(episodes),
    };
    handler(mockEvent, context, cb);
    expect(cb).toBeCalledWith(null, {
      statusCode: 200,
      body: JSON.stringify(response),
    });
  });
  it('should get error response when invalid json', () => {
    const mockEvent = {};
    handler(mockEvent, context, cb);
    expect(cb).toBeCalledWith(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Could not decode request: JSON parsing failed'
      })
    })
  });
})