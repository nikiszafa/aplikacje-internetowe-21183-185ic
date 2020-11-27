// Wybieramy nasz element Canvas i przypisyjemy do "cvs".
const cvs = document.getElementById("snake");
/* Metoda getContext zwraca kontekst pola roboczego canvas
*  2d oznacza dwuwymiarowey kontekst renderowania */
const ctx = cvs.getContext("2d");
// Zmiena timer do odliczania czasu
let timer = 500;
/*  stała  box jest pomocna do odmierzania odleglosci ponieważ
    grę będziemy tworzyć na planszy w kratke a każda kratka będzie miała
    32px wysokosci i szerokosci */
const box = 32;

// Przypisujemy do stałych grafiki.


// poszczególne współrzędne części węża będą przechowywane w tabeli snake
let snake = [];
// początkowa pozycja wężą
snake[0] = {
    x: 9 * box,
    y: 10 * box
}
// Nitro po którym wąż będzie się powiększał
// ustawiamy początkową pozycję nitro
// wykorzystuje funkcję losującą liczbę z zakresu min i max
let nitro = {
    x: getRandomInt(1, 17) * box,
    y: getRandomInt(3, 17) * box,
}

// Po zebraniu 4 przedmiotów "skracacz" wąż zmniejszy się go o jeden element
let skracacz;
let skracaczCounter = 0;
//pętla do while powoduje że skracacz nie powstanie w miejscu nitro
do {
    skracacz = {
        x: getRandomInt(1, 17) * box,
        y: getRandomInt(3, 17) * box,
    }
} while (skracacz.x == nitro.x && skracacz.y == nitro.y);

// Jeśli wąż wejdzie na bombe wybucha
// Bomby są w tabeli i jest ich 15.
// W pętli generujemy losowe miejsca bomb
let bombs = [];
for (let i = 0; i < 15; i++) {
    do {
        bombs[i] = {
            x: getRandomInt(1, 17) * box,
            y: getRandomInt(3, 17) * box,
        }
    } while (bombs[i].x == nitro.x && bombs[i].y == nitro.y && bombs[i].x == skracacz.x && bombs[i].y == skracacz.y && bombs[i].y == 10 * box && bombs[i].x == 9 * box);
}
// Zmienna score przechowuje wynik
let score = 0;
// zmienna d będzie przechowywać wartość klawisza który został wciśnięty
let d;
// Event listener spowoduje wywołanie funkcji handler kiedy wcisniemy dany przycisk
document.addEventListener("keydown", direction);
//event.keycode 37 jest to strzalka w lewo
// 38 w gore
// 39 w prawo
// 40 w dół
// Wykorzystamy to do sterwoania wężem
// Sprawdzamy za kazdym razem czy wąż nie porusza się w przeciwnym kierunku
// Ponieważ nie mozemy ruszyć się wężem w przeciwnym kierunku
// Jesli wąż porusza się w prawo nie możemy przyciskiem w lewo 'zawrocic'
function direction(event) {
    if (event.keyCode == 37 && d !== "RIGHT") {
        d = "LEFT";
    } else if (event.keyCode == 38 && d !== "DOWN") {
        d = "UP";
    } else if (event.keyCode == 39 && d !== "LEFT") {
        d = "RIGHT";
    } else if (event.keyCode == 40 && d !== "UP") {
        d = "DOWN";
    }
}

function draw() {
    // przy każdym "ruchu" timer zmniejsza się
    timer--;
    // Jeśli czas się skończy, koniec gry
    if (timer == 0) {
        window.alert("BOMBA!!!!!!! \n Koniec gry :( \n Twoj wynik: " + score)
        clearInterval(game);
    }

    // metoda drawImage pozwala wstawic obrazek, podajemy grafike,wspolrzedna x oraz wspolrzedna y
    ctx.drawImage(ground, 0, 0);

    // Aby umieścić węża na planszy robimy pętlę po tabeli snake
    // i rysujemy po kolei wszystkie części węża
    for (let i = 0; i < snake.length; i++) {
        // metoda fillStyle pozwala ustawić kolor wypełnienia
        // wąż będzie miał pierwszy element koloru żółtego
        ctx.fillStyle = (i == 0) ? "yellow" : "white";
        // metoda fillRect pozwala narysować prostokąt, podajemy współrzedne x i y
        // oraz szerokosc i wysokosc w naszym przypadku jest to zmienna box
        // czyli 32px wysokosc i dlugosc naszej kratki
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        // za pomocą strokeRect ustawiamy prostokąt bez wypełnienia czyli mozemy
        // stworzyc obramowanie o innym kolorze
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
    // Rysujemy Nitro oraz skracacz
    ctx.drawImage(nitroImg, nitro.x, nitro.y);
    ctx.drawImage(skracaczImg, skracacz.x, skracacz.y);
    //Rysujemy wszystkie bomby
    for (let i = 0; i < bombs.length; i++) {
        ctx.drawImage(bombaImg, bombs[i].x, bombs[i].y);
    }
    //Pozycje starego początku węża przypisujemy do zmiennych snakeX i snakeY
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Jesli pozycja początku węża i nitro będzie taka sama
    // wynik score zwiększa się
    // zmieniamy pozycje nitro
    if (snakeX == nitro.x && snakeY == nitro.y) {
        score++;
        nitro = {
            x: getRandomInt(1, 17) * box,
            y: getRandomInt(3, 17) * box,
            // Jeśli trafiliśmy na nitro nie usuwamy końca wężą i nasz wąż w tym "ruchu"
            // powiększył się
        }
    } else {
        //Jesli w danym "ruchu" pozycja początku węża nie znajdzie się w miejscu nitra
        // usuwamy koniec węża i długość pozostaje taka sama
        //metoda pop() powoduje usunięcie ostatniego elementu tabeli
        //Jes
        //Aby poruszać się wężem musimy usuwać koniec węża i dodawać nowy początek
        snake.pop();

    }

    let check = true;

    // Jesli waz zje skracacz
    if (snakeX == skracacz.x && snakeY == skracacz.y) {
        skracaczCounter++;
        do {
            skracacz = {
                x: getRandomInt(1, 17) * box,
                y: getRandomInt(3, 17) * box,
            }
            for (let i = 0; i < bombs.length; i++) {
                if (bombs[i].x == skracacz.x && bombs[i].y == skracacz.y) {
                    check = false;
                }
            }
        } while (skracacz.x == nitro.x && skracacz.y == nitro.y && check);
    }

    // Jesli waz zje bombe

    for (let i = 0; i < bombs.length; i++) {
        if (snakeX == bombs[i].x && snakeY == bombs[i].y) {
            window.alert("BOMBA!!!!!!! \n Koniec gry :( \n Twoj wynik: " + score)
            clearInterval(game);
            window.location.reload();

        }
    }
    // Nowe bomby, co 100 sekund następuje generowanie nowych bomb
    if (timer == 400 || timer == 300 || timer == 200 || timer == 100)
        for (let i = 0; i < 15; i++) {
            do {
                bombs[i] = {
                    x: getRandomInt(1, 17) * box,
                    y: getRandomInt(3, 17) * box,
                }
            } while (bombs[i].x == nitro.x && bombs[i].y == nitro.y && bombs[i].x == skracacz.x && bombs[i].y == skracacz.y);
        }

    // Jesli poruszymy sie wężem w prawo pozycja głowy zmieni się o +1 box (czyli +32px w lini poziomej x)
    // w Lewo - 1 box (-32 px w lewo w lini poziomej x)
    // w Górę - 1 box (-32 px w góre w lini pionowej y)
    // W dół + 1 vox (+32 px w dół w lini pionowej y)
    if (d == "LEFT") snakeX -= box;
    if (d == "UP") snakeY -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "DOWN") snakeY += box;

    // Jesli poruszymy sie powstaje nowy początek węża i zostaje on przypisany do zmiennej newHead
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    // Jesli pozycja początku węża będzie znajdować się na końcu planszy
    // gra kończy się
    if (snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box || collision(newHead, snake)) {
        window.alert("Koniec gry :( \n Twoj wynik: " + score)
        clearInterval(game);
        window.location.reload();
    }

    // Wykrywanie kolizji z wężem
    // Jeśli pozycja nowego początku (głowy) węża jest taka sam jak elementy wężą
    // gra kończy się.
    function collision(head, array) {
        for (let i = 0; i < array.length; i++) {
            if (head.x == array[i].x && head.y == array[i].y) {
                console.log("collision found")
                return true;
            }
        }
        return false;
    }

    //metoda unshift powoduje dodanie elementu na początek tabeli
    //Dodajemy nowy początek węża do tabeli snake
    snake.unshift(newHead);

    // Rysujemy tekst, ustawiamy kolor czcionke i rozmiar
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score, 2 * box, 1.6 * box);
    ctx.fillText(`${skracaczCounter} /3`, 6 * box, 1.6 * box);
    ctx.fillText(`czas: ${timer}`, 9 * box, 1.6 * box)

    // Jesli zbierzemy 4 przedmioty skracacz nasz wąż zmniejsza się o jeden element
    // Jesli jest o dlugosci 1 to nie skroci sie do 0
    if (skracaczCounter == 4) {
        skracaczCounter = 0;
        if (snake.length > 1) {
            snake.pop();
        }
    }
}

// metoda setInterval powoduje wywoływanie wybranej funkcji co określony czas
// czyli funkcja draw() będzie wywoływana co 200 milisekund.
let game = setInterval(draw, 200);

// Funkcja pozwalająca generować liczby losowe z zakresu min i max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}