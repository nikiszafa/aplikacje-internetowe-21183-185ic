 ## LAB8. Czat z użyciem Web Socket + Web Workers
 
  ![strona głóna](https://buildwithdjango.com/static/blog/progress-bars/async-task-architecture.png)

 ## WebSocket pozwala w sprawnu sposób prowadzić komunikacje w czasie rzeczywistym między klientem a serwerem. Pozwala na dwukierunkowy przepływ danych, więc wystarczy nasłuchiwać danych. 
 ## Socket.io biblioteka js do aplikacji internetowych, implementująca WebSocket. 
 ## WSGI specyfikacja która opisuje komunikację pomiędzy serwerem webowym i aplikacją Python
 ## Express framework webowy JS działający w środowisku Node.js, zawiera metody tworzenia aplikacji webowych oraz proces ich instalacji i uruchomienia
 
 ### I etap czat z wykorzystaniem socket.io
	
 ## manifest który opisuje nasz proejkt.
    ![strona głóna](/Lab12/skr/1.JPG)
 ## index.js, express inicjalizuje wartość app która będzie function handlerem który dostrarczymy do serwera http
 ## definiujemy route handler "/" który zostanie wywołany kiedy wejdziemy na stronę główną
 ## Ustawiamy server http nasłuchujący na port 3000
	![strona głóna](/Lab12/skr/2.JPG)

## Jeśli uruchomimy "node index.js" zobaczymy:
 	![strona głóna](/Lab12/skr/3.JPG)

## Jeśli wejdziemy na  http://localhost:3000/:
 	![strona głóna](/Lab12/skr/4.JPG)
	
## Integracja z Socket.io:
 	![strona głóna](/Lab12/skr/5.JPG)
	
##  Zainicjalizowano instancje socket.io przekazując obiekt http. Nasłuchuje event connection dla nadchodzących socketów i loguje je w konsoli
 	![strona głóna](/Lab12/skr/6.JPG)

##  Jeśli wejdziemy na stronę zobaczymy w konsoli:
 	![strona głóna](/Lab12/skr/7.JPG)
	
##  Jeśli użytkownik wpisze wiadomość zostanie ona przekazana serwerowi jako chat message:
 	![strona głóna](/Lab12/skr/8.JPG)
	
##  Uzyskany efekt:
 	![strona głóna](/Lab12/skr/9.JPG)

## Jeśli chcemy by wiadomość była przekazywana dla reszty użytkowników możemy użyć metody io.emit()
## Efekt końcowy:
	![strona głóna](/Lab12/skr/10.JPG)
