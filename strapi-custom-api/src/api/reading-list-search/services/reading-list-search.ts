async function search(keyword: string) {
  try {
    const entries = await strapi.entityService.findMany('api::reading-list.reading-list', {});

    const filteredEntries = entries.filter((entry) => {
      const keywords = entry.keywords
        .split(',')
        .map((keyword) => keyword.trim());
      return keywords.includes(keyword);
    });

    return filteredEntries;
  } catch (err) {
    return err;
  }
}

export default {search};
