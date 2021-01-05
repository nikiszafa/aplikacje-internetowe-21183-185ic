## LAB6  Zezwolenia i uwierzytelnianie w DRF

  ![strona głóna](https://data-flair.training/blogs/wp-content/uploads/sites/2/2019/11/Working-example-of-REST-API-1.png)
  
  - Wypróbowałem Django Rest Framework z użyciem:
     - serializacji
     - viewsetów
     - routerów
     - uwierzytelniania (basic, session, token),
     - implementacji uprawnień i restrykcji
  
  Stworzyłem api umożliwiające udostępnianie urywków swojego kodu.
  Można wybrać język programowania czy tez styl.
  
  
  - Wprowadzone restrykcje i uwierzytelniania:
    - urywki kodu są zawsze powiązane z twórcą
    - tylko uwierzytelnieni użytkownicy mogą tworzyć urywki kodu.
    - tylko twórca może aktualizować i usuwać urywki
    - nie uwierzytelnione requesty mają pełny 
 
 Posiłkowałem się tutorialem ze strony drf. 
  
  ![strona głóna](/Lab6/skr/1.PNG)
  
  ![strona głóna](/Lab6/skr/2.PNG)

  ![strona głóna](/Lab6/skr/3.PNG)
