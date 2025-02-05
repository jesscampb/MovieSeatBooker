# The Hall of Frames
En webbsida där du kan boka biobiljetter för att se noga utvalda filmer som har haft stor inverkan på filmindustrin!    

Uppgiften är från början ett examinerande moment i kursen *Frontend 2* under utbildningen *Programutvecklare .NET* på Nackademin. Grundkoden för HTML och CSS fanns tillgänglig på utbildarens GitHub via uppgiftens instruktioner, då fokus låg på programmering med JavaScript.

## Funktioner
### Bokningssidan
- **Filmval**: I dropdown-menyn, som ligger överst på sidan, kan användaren se och välja bland filmer.
- **Välj säten**: När en film är vald så laddas biosalongen in med alla säten och låter användaren välja bland lediga platser. Under salongen visas information om hur många säten som är valda och det totala biljettpriset, baserat på filmval. Visuell referens över de olika sätesstatusarna finns i panelen ovanför salongen.
- **Gör en bokning**: När film och platser är valda så klickar användaren på knappen *Continue with booking* för att gå vidare till ett formulär där namn och telefonnummer fylls i. Tryck på knappen *Confirm* för att slutföra bokningen. En alert, med det inmatade telefonnumret, visas som bekräftelse på att bokningen är genomförd.
- 
### Adminsidan
- **Lägg till ny film**: Genom att fylla i det tomma formuläret som finns här kan Admin lägga till en ny film i databasen. En alert, innehållande filmens titel, visas för Admin som bekräftelse att skapandet är genomförd.
- **Uppdatera film**: Välj en film i dropdown-menyn för att ladda in dess data i formulärets fält, ändra på innehållet i önskade fält och tryck på knappen *Save*. Filmen uppdateras i databasen med den ändrade informationen. En alert, innehållande filmens titel, visas för Admin som bekräftelse att uppdateringen är genomförd.

## Instruktioner
För att få sidan att funka behöver du följa dessa enkla steg:
1. Ladda ner projektet och öppna det på datorn.
2. Starta *Vite* genom att skriva in detta kommando i terminalen: *npm run dev*
4. Starta databasen genom att skriva in detta kommando i terminalen: *npx json-server db.json*

## Teknologier
### Språk
- **HTML5**
- **CSS3**
- **TypeScript**

### Ramverk & bibliotek
- **React**: Komponenter och dynamiska gränssnitt
- **Axios**: HTTP-anrop och kommunikation med REST API:n
- **Formik**: Effektiv hantering, validering och skapande av formulär i React

### Verktyg
- **Vite**: Byggverktyg för utveckling och paketering av projektet
- **Sass**: Modulär kodning i CSS
- **ESLint**: Kodkontroll för att identifiera och förebygga fel
- **Prettier**: Kodformattering för bättre och mer läsbar kod
- **JSON Server**: Simulerad RESTful API för utveckling
- **Git/GitHub**: Versionshantering och kodlagring

## Motivering av val


Skapad av [Jessica Campbell](https://github.com/jesscampb)
