## LAB5 Web Scraping
  - Wyprópowałem web scraping z użyciem:
     - metod String (example1.py)
     - regular expressions (example2.py)
     - beautifulSoup (example3.py)
     - mechanicalSoup (example4.py)
       do obsługi formularzy na stronach
       np. logowanie do strony przez formularz
          ATAK BRUTEFORCE (▀̿Ĺ̯▀̿ ̿)
  
- Zamiast męczyć się ze scrappingem za pomocą regular expressions
  wygodniej użyć pakietu beautifulsoup. 
  Dzięki temu zaosczędzimy trochę czasu.
  W niektórych przypadkach i tak będziemy musieli skorzystać z pomocy
  .find() i regular expressions.
  
  To:
  ![strona głóna](/Lab5/skr/2.PNG)
  Zamiast tego: 
  ![strona głóna](/Lab5/skr/1.PNG)

- Wypełnianie formularza logowania na stronie
  za pomocą mechanical soup
    - Tworzymy instancje Browser i uzywamy do request UR.
      Przypisujemy zawartosc do login_html
    - login_html.select("form") zwraca listę wszystkich
      elementów <form>, następnie ustawiamy inputy 
    - browser.submit() wysyła nasz formularz.
  
  ![strona głóna](/Lab5/skr/3.PNG)
