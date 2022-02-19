import _ from 'lodash';

const webService = (event, context, callback) => {
  try {
    const body = JSON.parse(event.body);
    const episodes = body.payload.filter(
      (item) => item.drm && item.episodeCount > 0,
    )
      .map((episode) => ({
        image: _.get(episode, 'image.showImage'),
        slug: episode.slug,
        title: episode.title,
      }));
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ response: episodes }),
    });
  } catch (err) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ error: 'Could not decode request: JSON parsing failed' }),
    })
  }
}

export const handler = webService;