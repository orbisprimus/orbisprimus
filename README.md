# Orbis Primus hemsida

Detta är ett gitrepo för Orbis Primus hemsida. Allt är skrivet i HTML, CSS och JavaScript för att göra den så enkel så möjlig att underhålla, samt inte helt omöjlig att uppdatera för någon som inte är en van programmerare.

## Uppdatera text

För att uppdatera text på hemsidan är det bara att ändra mellan p-taggarna (altså mellan `<p>` och `</p>`). Vill du lägga till ett stycke gör du det mellan ett nytt par p-taggar. Vill du ta bort ett helt stycke kan du ta bort allt i stycket samt p-taggarna som sitter runtomkring dem.

## Uppdatera headerbild

För att byta den stora bilden högst upp på hemsidan är det bara att byta ut bilden mot en annan bild med samma namn så bör det funka.

Det kan vara så att det blir lite konstiga dimensioner (kanske någons ansikte göms), och då kan det bli nödvändigt att gå in i koden och ändra ett värde. Tyvärr behöver man testa sig fram till vad som funkar, men det bör ändå bara vara `height: Xvh` i filen `files/main.css` precis efter `.header {` som behöver fipplas med, där `X` är ett tal som borde vara mellan 0 och 100. `vh` är en enhet som betyder den del av sidans höjd som syns, och talet framför är då mängden av den. `100vh` är hela sidans höjd, och `0vh` är inget. Någonting däremellan bör passa.

## Lägga till sidor

Skulle det bli aktuellt att lägga till sidor utöver de som finns skulle jag rekommendera att någon som har lite erfarenhet med HTML och javascript gör det. 

Om ni bestämer er för att lägga till en (eller flera) sidor behöver följande göras: En HTML-fil för sidan behöver skapas. Filen behöver innehålla samma saker som de andra filerna, med undantag för det som finns mellan  `<main>` och `</main>`, samt det som eventuellt finns mellan `<style>` och `</style>`. Filen `files/script.js` behöver också uppdateras så att den nya sidan syns i navigeringsbaren. Det som behöver läggas till är `<a href='FILENAME'>TITLE</a>`, med sidans filnamn istället för `FILENAME` och sidans titel som den bör se ut i navigeringsbaren istället för `TITLE`. Denna rad läggs till inuti taggarna `<nav>` och `</nav>`. De länkar som finns mellan de taggarna visas i navigeringen i samma ordning som de listas i koden, så var inte rädd att flytta runt på dem inom `nav`-taggarna.

När allt detta är färdigt kan ni lägga till sidans innehåll mellan `main`-taggarna i dess HTML-fil.
