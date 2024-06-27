import Parser from "rss-parser";
import type { Feed, PaginationLinks } from "~~/types/foot";

const parser = new Parser();

export async function getHihi2RSSDataAsJSON(url: string): Promise<Feed> {
    const rssFeed = await fetch(url);
    const rssData = await rssFeed.text();
  
    // Parse the RSS feed data
    const parsedRSS = await parser.parseString(rssData);
  
    // Map the parsed data to the Feed interface
    const feed: Feed = {
      items: parsedRSS.items.map((item: any) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        "content:encoded": item["content:encoded"],
        "content:encodedSnippet": item["content:encodedSnippet"],
        comments: item.comments,
        content: item.content,
        contentSnippet: item.contentSnippet,
        guid: item.guid,
        categories: item.categories,
        isoDate: item.isoDate
      })),
      feedUrl: parsedRSS?.feedUrl || "",
      paginationLinks: parsedRSS?.paginationLinks as PaginationLinks || [],
      title: parsedRSS?.title || "",
      description: parsedRSS?.description || "",
      generator: parsedRSS?.generator || "",
      link: parsedRSS?.link || "",
      language: parsedRSS.language,
      lastBuildDate: parsedRSS.lastBuildDate
    };
  
    return feed;
  }
