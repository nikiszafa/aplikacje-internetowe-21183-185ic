# Aplikacje Internetowe

## LAB3. Różne sposoby uwierzytelniania
### Link do strony na HEROKU:
### Logowanie w zakładce "Sign Up"

https://nikodem-site.herokuapp.com/

- Użyłem django-allauth
- W panelu Sign Up utworzyłem przyciski logowania się przez Strave i Githuba
- Założyłem konto na developers.strava.com 
- Stworzyłem i skonfigurowałem OAuth Apps w stravie oraz githubie

Przemyślenia:
- Ważne jest żeby pamiętać o korzystaniu z najnowszej wersji pakietu django-allauth 0.43.0
  Ponieważ wersja 0.40.0 nie działa poprawnie z githubem.
- Jeśli chcemy udostępnić naszą stronę na PaaS, musimy pamiętać o zmianie "Development callback URL"
  i zmianie adresu strony w panelu admina
- django-allauth udostępnia wiele opcji konfiguracji między innymi:
    - ACCOUNT_LOGIN_ATTEMPTS_LIMIT = 5 Limit prób zalogowania się, powyżej 5 następuje timeout
      Pozwala przeciwdziałać atakom bruteforce
    - ACCOUNT_LOGIN_ATTEMPTS_TIMEOUT ustawiamy timeout na zalogowanie się po zbyt wielu próbach
    - ACCOUNT_EMAIL_CONFIRMATION_EXPIRE_DAYS=7 liczba dni w których konto musi zostać aktywowane emailem
    - ACCOUNT_EMAIL_REQUIRED = True Czy konto musi być potwierdzone emailem
    - 


### W zakładce Sign Up widzimy dwa dodatkowe przyciski logowania
### przez Github oraz Strave
  ![strona głóna](/scr/lab3/1.PNG)
### Autoryzacja przez Github
  ![strona głóna](/scr/lab3/2.PNG)
### Autoryzacja przez Strave
  ![strona głóna](/scr/lab3/3.PNG)
### W panelu admina widzimy dodatkową zakładkę "Social Accounts"
![strona głóna](/scr/lab3/4.PNG)
### Nowi użytkownicy zalogowani przez aplikację
![strona głóna](/scr/lab3/5.PNG)
### Skonfigurowane aplikacje
![strona głóna](/scr/lab3/6.PNG)
