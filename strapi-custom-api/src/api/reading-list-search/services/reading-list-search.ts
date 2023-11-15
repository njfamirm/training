async function search(keyword?: string) {
  try {
    const entries = await strapi.entityService.findMany("api::reading-list.reading-list", {});

    let filteredEntries = entries;
    if (keyword) {
      filteredEntries = entries.filter((entry) => {
        const keywords = entry.keyword.split("\n").map((keyword) => keyword.trim());
        return keywords.includes(keyword);
      });
    }

    return filteredEntries;
  } catch (err) {
    return err;
  }
}

export default {search};
