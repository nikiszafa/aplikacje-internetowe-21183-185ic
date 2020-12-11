# WebScraping with regular expressions

from urllib.request import urlopen
import re

url = "http://olympus.realpython.org/profiles/dionysus"
page = urlopen(url)
# print(page)

html = page.read().decode("utf-8")

print(re.findall("ab*c", "ac"))

# podmienianie znakow
string = "Everything is <replaced> if it's in <tags>."
string = re.sub("<.*>", "ELEPHANTS", string)
print(string)

## scraping with regular expressions
pattern = "<title.*?>.*?</title.*?>"
match_results = re.search(pattern, html, re.IGNORECASE)
title = match_results.group()
title = re.sub("<.*?>", "", title)
print(title)
