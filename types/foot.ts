export interface Feed {
    items:           Item[];
    feedUrl:         string;
    paginationLinks: PaginationLinks;
    title:           string;
    description:     string;
    generator:       string;
    link:            string;
    language:        string;
    lastBuildDate:   string;
}

export interface Item {
    title:                    string;
    link:                     string;
    pubDate:                  string;
    "content:encoded":        string;
    "content:encodedSnippet": string;
    comments:                 string;
    content:                  string;
    contentSnippet:           string;
    guid:                     string;
    categories:               string[];
    isoDate:                  Date;
}

export interface PaginationLinks {
    self: string;
}