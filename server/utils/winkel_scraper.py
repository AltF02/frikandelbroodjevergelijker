from bs4 import BeautifulSoup
import requests
import typing
from selenium import webdriver


class winkels:
    op = webdriver.ChromeOptions()
    op.add_argument('headless')
    driver = webdriver.Chrome(options=op)

    class ah:
        def __init__(self):
            page = requests.get('https://www.ah.nl/producten/product/wi230720/ah-frikandelbroodje')
            self.soup = BeautifulSoup(page.content, 'html.parser')

        @property
        def gram(self) -> int:
            return 125  # Deze informatie staat niet op de site

        @property
        def prijs(self) -> float:
            res = self.soup.find_all("div", class_='price-amount_root__vE9dJ product-card-hero-price_now__PlF9u')
            euros = res[0].find('span', class_='price-amount_integer__N3JDd').text
            centen = res[0].find('span', class_='price-amount_fractional__3sfJy').text
            return float(euros + '.' + centen)

    class dirk:
        def __init__(self):
            winkels.driver.get(
                'https://www.dirk.nl/boodschappen/brood-beleg-koek/afgebakken-brood-snacks/frikandelbroodje-xl-175-g/10614')
            self.soup = BeautifulSoup(winkels.driver.page_source, features='html.parser')

        @property
        def gram(self) -> int:
            grams = self.soup.find('h1', class_='product-details__info__title')
            return int(grams.text[20:-2])

        @property
        def prijs(self) -> float:
            euros = self.soup.find('span', class_='product-card__price__euros').text
            centen = self.soup.find('span', class_='product-card__price__cents').text
            return float(euros + centen)

    class jumbo:  # Jumbo blocked
        @property
        def gram(self) -> int:
            return 160

        @property
        def prijs(self) -> float:
            return 1.25

    class plus:  # Plus blockeerd web scraping, dus dit is hard coded
        @property
        def gram(self) -> int:
            return 125

        @property
        def prijs(self) -> float:
            return 1.09

    class lidl:
        def __init__(self):
            page = requests.get('https://www.lidl.nl/nl/p/ovenvers-brood/frikandelbroodje/p2717')
            self.soup = BeautifulSoup(page.content, 'html.parser')

        @property
        def gram(self) -> int:
            return 100

        @property
        def prijs(self) -> float:
            price = self.soup.find('span', class_='pricebox__price')
            return float(price.text)

    class spar:
        def __init__(self):
            page = requests.get('https://www.spar.nl/frikandelbroodje-xl-5234492/')
            self.soup = BeautifulSoup(page.content, 'html.parser')

        @property
        def gram(self) -> int:
            res = self.soup.find("h2", class_="c-offer__subtitle")
            return int(res.text[3:-4])

        @property
        def prijs(self) -> float:
            euros = self.soup.find("span", class_='c-price__euro').text
            centen = self.soup.find("span", class_='c-price__cent').text
            return float(euros + '.' + centen)
