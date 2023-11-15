async function search(ctx, _) {
  try {
    const data = await strapi.service('api::reading-list-search.reading-list-search').search(ctx.request.query.keyword);
    ctx.body = data;
  } catch (err) {
    ctx.badRequest('Reading list search controller error', {moreDetails: err});
  }
}

export default {search};
