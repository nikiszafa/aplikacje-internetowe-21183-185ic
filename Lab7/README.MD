 ## LAB7. Python + Redis + Django
 
  ![strona głóna](https://buildwithdjango.com/static/blog/progress-bars/async-task-architecture.png)

 ### Przerobiłem przykłady ze strony mmazurek.dev i przykład współpracy DJANGO REDIS + CELERY ze stackabuse.com oraz https://realpython.com/asynchronous-tasks-with-django-and-celery/
 ### Uruchomiłem Redisa, połączyłem się do niego z poziomu Pythona i z redis-cli.
 ### Poznałem Listy, zbiory, zbiory posortowane, hashe, TTL pozwalający zdefiniować czas po którym klucze są automatycznie usuwane.
 ### Wzorzec publish-subscribe wymiany komunikatów. Redis Pub Sub, publishers wysyała wiadomośc, subscribers odbiera ją.
 ### Strumienie narzędzie łączące funkcje list i mechanizmu pub sub.
 ### Redis pipeling pozwala wysyłać wiele komend do redisa za jednym razem, oszczędzając czas potrzebny na przesłanie danych przez sieć
 ### Skrypty w redisie, język LUA pozwalający rozszerczyć możliwość innych aplikacji. Może współpracować z formatem JSON.
 ### Notyfikacje redisowe
 ### Walrus alternatywny sposób pracy z redisem, jest to osobna biblioteka. 
 ### Celery aynchroniczna kolejka zadań, pozwala umieszczać zadania w kolejce. Możemy też na przykład tworzyć zadania okresowe.
 

 #### Pierwsze połączenie z redis
   ![strona głóna](/Lab7/skr/1.JPG)
 #### Redis cli
   ![strona głóna](/Lab7/skr/2.JPG)
 #### Uruchomienie programu celery
   ![strona głóna](/Lab7/skr/3.JPG) 
   ![strona głóna](/Lab7/skr/4.JPG)
 #### Efekt końcowy
    ![strona głóna](/Lab7/skr/lab5.JPG)

