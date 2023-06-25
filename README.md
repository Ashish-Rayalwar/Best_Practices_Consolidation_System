## Best Practices Consolidation System

- #### This project aims to create a system that consolidates the best practices from multiple articles on a specific topic. The system takes a list of articles as input and generates a consolidated list of best practices without any duplicates. The ordering of the best practices in the consolidated list is based on the number of articles discussing them.

## Overview

- The Best Practices Consolidation System is implemented in Node.js and utilizes the ChatGPT API for extracting best practices, identifying similarities, and providing concise explanations. The system follows the following steps:

- Gather a list of articles containing best practices on the desired topic.

- Store the articles' URLs, titles, and contents in a sensible JSON format.

- Implement the logic to extract best practices and their discussions from each article using the ChatGPT API.

- Identify whether two best practices are similar by comparing their extracted text.
- Generate concise explanations for each best practice using explanation(s) provided by the ChatGPT API.
- Consolidate the best practices from all articles into a single list without duplicates, while keeping track of the article indices that mention each practice.
- Order the consolidated list based on the number of articles discussing each best practice.
- Provide the consolidated list and the corresponding article citations as the output.

### Input parameters

```yaml

{
    title: "Article 1 Title",
    url: "https://www.article1.com",
    content: `
  Introduction to Article 1...

  Best Practice 1
  Discussion of Best Practice 1...

  Best Practice 2
  Discussion of Best Practice 2...
  `,
  },
  {
    title: "Article 2 Title",
    url: "https://www.article2.com",
    content: `
  Introduction to Article 2...

  Best Practice 21
  Discussion of Best Practice 21...

  Great Practice 1
  Discussion of Great Practice 1...
  `,
  },
  {
    title: "Article 3 Title",
    url: "https://www.article2.com",
    content: `
  Introduction to Article 3...

  Best Practice 31
  Discussion of Best Practice 31...

  Great Practice 1
  Discussion of Great Practice 3...
  `,
  },

```

### Responce

```yaml
{
  "consolidatedList":
    [
      {
        "practice": "Best Practice 3",
        "discussion": "Discussion of Best Practice 3...\n  \n  Conclusion to Article 1...",
        "citation": [0],
      },
      {
        "practice": "Best Practice 22",
        "discussion": "Discussion of Best Practice 22...",
        "citation": [1],
      },
      {
        "practice": "Best Practice 35",
        "discussion": "Discussion of Best Practice 35...",
        "citation": [2],
      },
    ],
  "citations":
    [
      { "title": "Article 1 Title", "url": "https://www.article1.com" },
      { "title": "Article 2 Title", "url": "https://www.article2.com" },
      { "title": "Article 3 Title", "url": "https://www.article2.com" },
    ],
}
```
