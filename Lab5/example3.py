#beautifulSoup

from bs4 import BeautifulSoup
from urllib.request import urlopen

url = "http://olympus.realpython.org/profiles/dionysus"
page = urlopen(url)
html = page.read().decode("utf-8")
soup = BeautifulSoup(html, "html.parser")

# Zwracamy cały tekst bez znaczników
print(soup.get_text())

# wyszukujemy tagi img
print(soup.find_all("img"))

image1, image2 = soup.find_all("img")
print(image1.name)
print(image1["src"])

print(soup.title.string)

print(soup.find_all("img", src="/static/dionysus.jpg"))
