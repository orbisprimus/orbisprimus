# Orbis Primus hemsida

Detta är ett gitrepo för Orbis Primus hemsida. Allt är skrivet i HTML, CSS och Javascript för att göra den så enkel så möjlig att underhålla, samt inte helt omöjlig att uppdatera för någon som inte är en van programmerare.

## Uppdatera text

För att uppdatera text på hemsidan är det bara att ändra mellan p-taggarna (alltså mellan `<p>` och `</p>`). Vill du lägga till ett stycke gör du det mellan ett nytt par p-taggar. Vill du ta bort ett helt stycke kan du ta bort allt i stycket samt p-taggarna som sitter runtomkring dem.

## Uppdatera kontaktinformation

Byt ut bilderna i `files/images/contacts` till bilder på rätt personer (behåll filnamn, de relaterar till styrelsepost). Uppdatera informationen (förmodligen bara namnen, men annan info går även att ändra om det skulle behövas) i `files/contacts.json`.

OBS att ordningen som posterna är i `contacts.json` är den ordning de visas på hemsidan, och att fältet `bild` är filnamnet på bilden i mappen `files/images/contacts` som ska användas för personen.

## Lägga till sidor

Skulle det bli aktuellt att lägga till sidor utöver de som finns skulle jag rekommendera att någon som har lite erfarenhet med HTML och javascript gör det. 

Om ni bestämmer er för att lägga till en (eller flera) sidor behöver följande göras: En HTML-fil för sidan behöver skapas. Filen behöver innehålla samma saker som de andra filerna, med undantag för det som finns mellan  `<main>` och `</main>` (sidinnehållet), samt det som eventuellt finns mellan `<style>` och `</style>`. Filen `files/script.js` behöver också uppdateras så att den nya sidan syns i navigeringsmenyn. Det som behöver läggas till är `<a href='FILNAMN'>TITEL</a>`, med sidans filnamn istället för `FILNAMN` och sidans titel som den bör se ut i navigeringsbaren istället för `TITEL`. Denna rad läggs till inuti taggarna `<nav>` och `</nav>`. De länkar som finns mellan de taggarna visas i navigeringen i samma ordning som de listas i koden, så var inte rädd att flytta runt på dem inom `nav`-taggarna.

När allt detta är färdigt kan ni lägga till sidans innehåll mellan `main`-taggarna i dess HTML-fil.
