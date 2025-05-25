---
publishDate: 2025-05-26T00:00:00Z
title: Introducing ScrapeGraphAI with DeepSeek
excerpt: Learn how to use ScrapeGraphAI with DeepSeek to automate web scraping using LLMs. This guide covers setup, real-world examples, schema-based extraction, and performance logging.
image: ~/assets/images/posts/introducing-scrapegraphai-with-deepseek/banner.webp
author: Matheus Santos
category: Article
tags:
  - AI
  - Web Scraping
---

ScrapeGraphAI is an open-source Python library designed to revolutionize scraping tools. In today’s data-intensive digital landscape, this library stands out by integrating Large Language Models (LLMs) and modular graph-based pipelines to automate the scraping of data from various sources (e.g., websites, local files etc.).

Simply specify the information you need to extract. ScrapeGraphAI handles the rest, offering a more flexible and low-maintenance solution than traditional scraping tools.

## Getting Started (Installation and Setup)

This article will cover the usage of ScrapeGraphAI with DeepSeek, so go get yourself an API key from [DeepSeek](https://api-docs.deepseek.com/) and follow the steps below to get started.

1. Install ScrapeGraphAI

   ```bash
   pip install scrapegraphai
   ```

2. Since ScrapeGraphAI uses Playwright under the hood, you will need to install it

   ```bash
   playwright install --with-deps
   ```

3. Install python-dotenv (optional but recommended)

   ```bash
   pip install python-dotenv
   ```

## SmartScraperGraph

The `SmartScraperGraph` is the main scraper graph that ScrapeGraphAI provides. It is a one-page scraper that requires a user-defined prompt and a URL (or local file) to extract information using LLM.

```python
import os
from dotenv import load_dotenv
from scrapegraphai.graphs import SmartScraperGraph

load_dotenv()

deepseek_key = os.getenv("DEEPSEEK_APIKEY")

graph_config = {
    "llm": {
        "model": "deepseek/deepseek-chat",
        "api_key": deepseek_key,
    },
    "verbose": True,
}

smart_scraper_graph = SmartScraperGraph(
    prompt="List me all books with their price and availability",
    source="https://books.toscrape.com/",
    config=graph_config,
)

result = smart_scraper_graph.run()
print(result)

# OUTPUT:
# --- Executing Fetch Node ---
# --- (Fetching HTML from: https://books.toscrape.com/) ---
# --- Executing ParseNode Node ---
# --- Executing GenerateAnswer Node ---
# {'content': [{'title': 'A Light in the Attic', 'price': '£51.77', 'availability': 'In stock'}, {'title': 'Tipping the Velvet', 'price': '£53.74', 'availability': 'In stock'}, {'title': 'Soumission', 'price': '£50.10', 'availability': 'In stock'}, {'title': 'Sharp Objects', 'price': '£47.82', 'availability': 'In stock'}, {'title': 'Sapiens: A Brief History of Humankind', 'price': '£54.23', 'availability': 'In stock'}, {'title': 'The Requiem Red', 'price': '£22.65', 'availability': 'In stock'}, {'title': 'The Dirty Little Secrets of Getting Your Dream Job', 'price': '£33.34', 'availability': 'In stock'}, {'title': 'The Coming Woman: A Novel Based on the Life of the Infamous Feminist, Victoria Woodhull', 'price': '£17.93', 'availability': 'In stock'}, {'title': 'The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics', 'price': '£22.60', 'availability': 'In stock'}, {'title': 'The Black Maria', 'price': '£52.15', 'availability': 'In stock'}, {'title': 'Starving Hearts (Triangular Trade Trilogy, #1)', 'price': '£13.99', 'availability': 'In stock'}, {'title': "Shakespeare's Sonnets", 'price': '£20.66', 'availability': 'In stock'}, {'title': 'Set Me Free', 'price': '£17.46', 'availability': 'In stock'}, {'title': "Scott Pilgrim's Precious Little Life (Scott Pilgrim #1)", 'price': '£52.29', 'availability': 'In stock'}, {'title': 'Rip it Up and Start Again', 'price': '£35.02', 'availability': 'In stock'}, {'title': 'Our Band Could Be Your Life: Scenes from the American Indie Underground, 1981-1991', 'price': '£57.25', 'availability': 'In stock'}, {'title': 'Olio', 'price': '£23.88', 'availability': 'In stock'}, {'title': 'Mesaerion: The Best Science Fiction Stories 1800-1849', 'price': '£37.59', 'availability': 'In stock'}, {'title': 'Libertarianism for Beginners', 'price': '£51.33', 'availability': 'In stock'}, {'title': "It's Only the Himalayas", 'price': '£45.17', 'availability': 'In stock'}]}
```

In this code:

- we load the DeepSeek API key from the environment;
- in `graph_config`, we set `"model": "deepseek/deepseek-chat"` and our `api_key` (ScrapeGraphAI recognizes the DeepSeek model name and uses their API);
- we enable verbose so we can see what’s happening;
- the prompt tells the graph exactly what to extract;
- calling `smart_scraper_graph.run()` launches the process: it will fetch the URL, extract text (using Playwright if needed), and send it to DeepSeek, which returns the data.

### Improving the logging

You can improve the logging by setting the `verbose` parameter to `True` in the `graph_config`. This will provide detailed logs of each step in the scraping process, which is useful for debugging and understanding how the graph operates.

```python
import os
from dotenv import load_dotenv
from scrapegraphai.graphs import SmartScraperGraph
from scrapegraphai.utils import prettify_exec_info
import json

load_dotenv()

deepseek_key = os.getenv("DEEPSEEK_APIKEY")

graph_config = {
    "llm": {
        "model": "deepseek/deepseek-chat",
        "api_key": deepseek_key,
    },
    "verbose": True,
}

smart_scraper_graph = SmartScraperGraph(
    prompt="List me all books with their price and availability",
    source="https://books.toscrape.com/",
    config=graph_config,
)

result = smart_scraper_graph.run()
print(json.dumps(result, indent=2))


graph_exec_info = smart_scraper_graph.get_execution_info()
print(prettify_exec_info(graph_exec_info))

# OUTPUT:
# --- Executing Fetch Node ---
# --- (Fetching HTML from: https://books.toscrape.com/) ---
# --- Executing ParseNode Node ---
# --- Executing GenerateAnswer Node ---
# {
#   "content": [
#     {
#       "title": "A Light in the Attic",
#       "price": "\u00a351.77",
#       "availability": "In stock"
#     },
#     {
#       "title": "Tipping the Velvet",
#       "price": "\u00a353.74",
#       "availability": "In stock"
#     },
#     {
#       "title": "Soumission",
#       "price": "\u00a350.10",
#       "availability": "In stock"
#     },
#     ...
#   ]
# }
# Node Statistics:
# ----------------------------------------------------------------------------------------------------
# Node                 Tokens     Prompt     Compl.     Requests   Cost ($)   Time (s)
# ----------------------------------------------------------------------------------------------------
# Fetch                0          0          0          0          0.0000     4.32
# ParseNode            0          0          0          0          0.0000     2.33
# GenerateAnswer       4502       3762       740        1          0.0000     31.75
# TOTAL RESULT         4502       3762       740        1          0.0000     38.41
```

In this code:

- we use `json.dumps` to format the output nicely;
- we use `get_execution_info` to get the execution info of the graph, which includes the number of tokens used, the cost, and the time taken for each node;
- we use `prettify_exec_info` to format the execution info nicely.

### Using a schema to guide the extraction

You can also use a pydantic schema to guide the extraction process. This is very useful when you want the result to be in a specific format.

```python
import os
from typing import List
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from scrapegraphai.graphs import SmartScraperGraph
from scrapegraphai.utils import prettify_exec_info
import json

load_dotenv()


class Book(BaseModel):
    title: str = Field(description="The title of the book")
    price: float = Field(description="The price of the book")
    available: bool = Field(description="The availability status of the book, True if in stock, False otherwise")


class BookList(BaseModel):
    content: List[Book]


deepseek_key = os.getenv("DEEPSEEK_APIKEY")

graph_config = {
    "llm": {
        "model": "deepseek/deepseek-chat",
        "api_key": deepseek_key,
    },
    "verbose": True,
}

smart_scraper_graph = SmartScraperGraph(
    prompt="List me all books with their price and availability",
    source="https://books.toscrape.com/",
    config=graph_config,
    schema=BookList,
)

result = smart_scraper_graph.run()
print(json.dumps(result, indent=2))


graph_exec_info = smart_scraper_graph.get_execution_info()
print(prettify_exec_info(graph_exec_info))

# OUTPUT:
# --- Executing Fetch Node ---
# --- (Fetching HTML from: https://books.toscrape.com/) ---
# --- Executing ParseNode Node ---
# --- Executing GenerateAnswer Node ---
# {
#   "content": [
#     {
#       "title": "A Light in the Attic",
#       "price": 51.77,
#       "available": true
#     },
#     {
#       "title": "Tipping the Velvet",
#       "price": 53.74,
#       "available": true
#     },
#     {
#       "title": "Soumission",
#       "price": 50.1,
#       "available": true
#     },
#     ...
#   ]
# }
# Node Statistics:
# ----------------------------------------------------------------------------------------------------
# Node                 Tokens     Prompt     Compl.     Requests   Cost ($)   Time (s)
# ----------------------------------------------------------------------------------------------------
# Fetch                0          0          0          0          0.0000     3.11
# ParseNode            0          0          0          0          0.0000     0.54
# GenerateAnswer       4686       4006       680        1          0.0000     28.73
# TOTAL RESULT         4686       4006       680        1          0.0000     32.38
```

## Other Graphs

ScrapeGraphAI provides other graphs that can be used for different purposes. For example:

- [`SearchGraph`](https://scrapegraph-ai.readthedocs.io/en/latest/scrapers/types.html#searchgraph): a graph that can be used to search for information on the web using a search engine;
- [`ScriptCreatorGraph`](https://scrapegraph-ai.readthedocs.io/en/latest/scrapers/types.html#scriptcreatorgraph-scriptcreatormultigraph): a python script generator graph that can be used to generate python scripts for web scraping with specified library (e.g., BeautifulSoup);
- [`SmartScraperMultiGraph`](https://scrapegraph-ai.readthedocs.io/en/latest/scrapers/types.html#smartscrapergraph-smartscrapermultigraph): the multi-page version of the `SmartScraperGraph` that can be used to scrape multiple sources at once;
- [`OmniScraperGraph`](https://scrapegraph-ai.readthedocs.io/en/latest/scrapers/types.html#omniscrapergraph): similar to the `SmartScraperGraph` but with vision capabilities, a LLM that can analyze images is needed;

## Conclusion

ScrapeGraphAI is a powerful and flexible web scraping library that leverages the power of LLMs to automate the scraping process. It provides a simple and intuitive interface for extracting data from various sources, making it a valuable tool for data scientists, researchers, and developers.

There are use cases where you can specify your own scraping pipeline but this is out of the scope of this article.

## References

- [ScrapeGraphAI Documentation at ReadTheDocs](https://scrapegraph-ai.readthedocs.io/en/latest/introduction/overview.html)
- [ScrapeGraphAI OSS Documentation](https://docs-oss.scrapegraphai.com/docs/intro)
- [ScrapeGraphAI GitHub Repository](https://github.com/ScrapeGraphAI/Scrapegraph-ai)
