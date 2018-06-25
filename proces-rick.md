# Proces Rick

In dit markdown bestandje zal ik mijn persoonlijke proces beschrijven.

- **[Leerdoelen](#leerdoelen)**
- **[Week 1](#week-1)**
- **[Week 2](#week-2)**
- **[Week 3](#week-3)**
- **[Week 4](#week-4)**
- **[Week 5](#week-5)**
- **[Week 6](#week-6)**

## Leerdoelen

1. Functionele animaties en transities maken
2. Beetje design skills opschroeven
3. Schone en leesbare code schrijven
4. CLI git leren

### Functionele animaties en transities maken

Ik ben niet echt een interaction designer, maar ik vind het wel tof om een beetje aan te kloten met het maken van animaties en transities. Binnen dit project wil ik mijzelf uitdagen om goede animaties en transities te maken. Daarnaast wil ik ook dat de animaties en transities ook echt functioneel zijn, en iets toevoegen aan de gebruikerservaring. Vaak zie je websites die volgestampt zijn met animaties, wat er 1. voor zorgt dat je computer traag wordt, en 2. dat de gebruikerservaring erdoor naar beneden gaat. Ik wil hier een goede balans tussen vinden.

### Beetje design skills opschroeven

De afgelopen weken heb ik, vooral bij webdesign, al gewerkt aan mijn design skills. Deze vaardigheid kan echter nog steeds een stuk beter, en hier wil ik mijzelf dus in uitdagen om ontwerpkeuzes te maken, en ook kunnen uitleggen waarom ik die keuze heb gemaakt.

### Schone en leesbare code schrijven

Qua code zelf heb ik weinig problemen, maar vaak maak ik code die er enigzins chaotisch uit kan zien. Voor mij is dit geen probleem, maar het kan wel een probleem worden wanneer er iemand anders naar gaat kijken, wat tijdens dit project hoogstwaarschijnlijk wel gaat gebeuren. Ik wil tijdens dit project dus goed kijken naar de structuur van mijn code, en er voor zorgen dat anderen mijn code ook kunnen begrijpen.

### CLI git leren

Dit leerdoel heb ik later toegevoegd aan het lijstje. Voor het project wist ik niet dat dit een leerdoel van mij zou zijn, maar tijdens het project ben ik er achter gekomen dat de CLI van git best handig kan zijn, zeker omdat github desktop onderwater meer acties uitvoert dan dat je misschien wilt. Daarnaast ziet de CLI er een stuk cooler uit dan de GUI :).

## Week 1

### Maandag 28 mei

Ik had voor de meesterproef het project van de minor gekozen. Voor webdesign had ik al een website gemaakt voor de minor, en het leek mij interessant om helemaal opnieuw te beginnen, met de kennis die ik al had.

In eerste instantie had ik het idee om alleen te werken, maar uiteindelijk hadden we besloten om met iedereen die ook dit project had gekozen een team te maken. Uitendelijk werkte ik samen met Bas, James, Jamal en Jelle. Ik had in het begin verwacht dat het project te klein was om met 5 mensen te doen, maar wij hadden voor ogen om uiteindelijk echt een product op te leveren dat af was, zodat hij direct in de lucht zou kunnen gaan.

Tijdens een gesprek met Vasilis hadden we elkaars leerdoelen besproken, en een beetje aagekeken hoe we het zouden aanpakken tijdens het project.

### Dinsdag 29 mei

Dinsdag waren we begonnen met het inventariseren van alle content die bruikbaar zou kunnen zijn voor alle gebruikers. 

![Overzicht content](https://i.imgur.com/XUw8Fwh.png)

Onder de gebruikers verstonden wij: 

- CMD studenten
- niet-CMD studenten 
- bedrijven

De content kwam vooral van de huidige website van de minor, moodle en content die wij zelf relevant vonden.

Vervolgens hadden we met een aantal docenten gesproken over zij denken over de minor.  Uiteindelijk hadden we ook een concept bedacht waar we mee verder gingen. Het idee was dat wij nu een front-end gaan maken voor de minor, en de content in een database gooien. Volgend jaar zou dan een nieuwe groep studenten door kunnen gaan met ons product, en er dan een CMS achter maken.

### Woensdag 30 mei

Woensdag zijn we verder gegaan met het inventariseren van de content, en zijn we verder gegaan met het indelen van de content in een database. Ook hebben we besproken hoe welke content is verbonden met andere content, en hoe dit terug moet komen in de website.

![Overzicht van database structuur](https://i.imgur.com/wuzUCBC/.png)

Toen we de database structuur opgezet hadden zijn we begonnen met het maken van de eerste schetsen van de website. Deze schetsen waren nogal redelijk lo-fi.

<details>
  <summary>
    Kijk naar leuke schetsen
  </summary>
  <img src="https://i.imgur.com/u7altpk.png" alt="overzicht van schetsen" />
  <img src="https://i.imgur.com/axnEoYa.png" alt="nog meer schetsen" />
</details>

We hadden een gesprek met Marijn gepland, maar die kon helaas niet doorgaan.

### Donderdag 31 mei

Donderdag gingen we verder met schetsen, en gingen we de schetsen omzetten in een wireframe met behulp van Figma. Op de planning stond dat Bas zou beginnen met het maken van de styleguide, maar aangezien Bas ziek was waren Jelle, James en ik alvast begonnen met de styleguide, aangezien we anders niet verder zouden kunnen gaan.

Ook hadden we alvast een aantal HTML elementen klaargezet voor Bas zodat hij die direct zou kunnen stijlen wanneer hij weer beter zou zijn.

Voor een pagina die als overzicht zou dienen van de vakken en projecten wilde we een tijdlijn maken. Jelle had voor een ander vak al eens een tijdlijn gemaakt, dus die zou die taak op zich nemen. Voor de rest waren de schetsen nog redelijk standaard. Daarnaast hadden we besloten om de homepagina als laatst te gaan maken. Dit hadden we besloten omdat we nog geen goed idee hadden hoe de elementen er uit komen te zien, en de homepagina is eigenlijk gewoon een samenvatting van de overige pagina's.

<details>
  <summary>
    Bekijk leuke plaatjes
  </summary>
  <img alt="screenshot van de partner pagina" src="https://i.imgur.com/E6LQomX.png" />
  <img alt="screenshot van de programma pagina" src="https://i.imgur.com/V4crdVO.png" />
  <img alt="screenshot van de studentenwerk pagina" src="https://i.imgur.com/fDIaXLu.png" />
</details>

### Vrijdag 1 juni

Vrijdag zijn we begonnen met het opzetten van het project. Ook hebben we besloten wat voor tooling we zouden gaan gebruiken. We besloten om de HTML rendering met nunjucks te doen en de stijling met SCSS. Om dit om te zetten gebruikte we gulp. Gulp zouden we ook gebruiken om bestanden te verkleinen. Jelle had dit allemaal opgezet.

Jelle, Jamal en ik zijn verder gegaan met itereren op het wireframe, terwijl James en Bas zijn begonnen aan de layout van de website. Jelle, Jamal en ik hebben een aantal aanpassingen gedaan aan het wireframe, zodat het voor iedereen duidelijk zou zijn hoe de pagina's eruit zouden komen te zien.

Als laatst hebben we een planning gemaakt voor de volgende week, en issues assigned aan elkaar.

![Planning voor week 2](https://i.imgur.com/M6VhS1i.png)

## Week 2

### Maandag 4 juni

Maandag ochtend zijn we begonnen met een standup. Tijdens de standup kwamen we er achter dat we eigenlijk wel lekker bezig waren. We waren weinig tijd kwijt aan dingen als concepting, en zijn dus vrij snel doorgegaan naar de ontwerp fase.

Na de standup zijn we begonnen met het bouwen van de componenten. De componenten die ik zou maken waren de course-card en de footer. Ook hebben we het over de kleuren gehad die we zouden gaan gebruiken. Als uitgangspunt hadden we de kleuren van de Premier League gekozen. Jamal en ik waren allebei al bekend met de huisstijl van de Premier League, die heel herkenbaar en uitgesproken is.

![Kleuren van premier league](https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/PL-20160318124649829.gif)

We kozen vooral voor de paarse variant van de Premier League huisstijl.

We wilden de kleuren niet 100% kopieëren, dus hadden we de tinten iets aangepast. Uiteindelijk waren dit de kleuren waarmee we zouden gaan werken:

![De kleuren waar we voor hadden gekozen](https://i.imgur.com/tVLD6NA.png)

### Dinsdag 5 juni

Dinsdag zijn we verder gegaan met de code. We hadden allemaal een individueel gesprek met een docent. Uit dat gesprek kwam dat het wel lekker ging. Ik kreeg wel feedback dat we misschien een plan moesten opstellen voor de test met Marijn, dus dat hebben we die middag gedaan. Jelle had al twee klein opzetjes voor de programma pagina die we wilden testen met Marijn. James had Marijn al eens een keer ontmoet voor het vak web design, maar die kon helaas niet mee. Bas kon helaas ook niet mee, dus uiteindelijk waren Jamal, Jelle en ik afgereisd naar het zuidelijk gelegen Veldhoven (!).

In de middag zijn we naar Veldhoven gegaan om de test te doen. De test zelf was niet heel relevant, omdat we nog weinig componenten hadden om te testen. Wel was het heel interessant om te zien hoe Marijn zijn laptop gebruikt met zijn handicap. Ik vond het nog vrij snel gaan, ik had verwacht dat hij heel lang deed om te navigeren. Marijn was wel moeilijk te verstaan, maar zodra we meer context hadden in het gesprek ging het beter. Marijn zelf is developer, dus die gebruikt zijn computer waarschijnlijk al een stuk sneller dan iemand die in een vergelijkbare situatie zit, maar die in een ander werkveld actief is.

Typen kan voor Marijn soms lang duren, afhankelijk van hoe ver de toetsen op het toetsenbord zit. Marijn typt met 1 vinger, dus het kan soms duren voordat hij van de ene kant naar de andere kant van het toetsenbord is. Hij gebruikte zijn trackpad opzich best goed. Het duurde wel wat langer dan bij een 'normale' gebruiker, maar hij klikte eigenlijk niet mis, wat ik ook wel verwacht had. Hij gebruikte de spatie balk om te scrollen. Ik had verwacht dat hij vaker met de tab toets zou navigeren, maar hij gaf aan dat vervelend te vinden. Wanneer hij de spatiebalk gebruikt, blijft de focus op het bovenste element. Wanneer hij dan tab indrukt, scrollt de website helemaal naar boven.

Marijn heeft ons veel inzicht gegeven in hoe iemand met een motorische handicap een computer gebruikt.

### Woensdag 6 juni

Woensdag zijn we begonnen met een standup, en hebben we besproken wat er uit de test was gekomen met Marijn. Daarna hebben we besproken wat we voor vrijdag af moesten hebben i.v.m. de test met Marie. Marie is doof en grafisch vormgeefster, dus zij zal ook vooral letten op de vormgeving. We hadden geen content met geluid, dus focuste we ons meer op componenten dan op de flow.

Bij de test met Marijn hadden we eigenlijk geen stijling, en we hadden sowieso weinig dingen af. We hebben besproken wat de prioriteiten waren. We hadden gepland een aantal flows uit te werken voor de test met Marie. Vervolgens zijn ik en Bas gaan werken aan de vak pagina. Daarnaast hebben Jamal, James en Jelle de stijling getweaked. Ik heb Bas het een en ander uitgelegd over het maken van een simpele layout in CSS, aangezien dat een van zijn leerdoelen was.

### Donderdag 7 juni

Donderdag zijn we zoals altijd weer begonnen met een standup. Aangezien we woensdag een duidelijke planning hadden gemaakt was het voor iedereen duidelijk waar hij verder mee zou gaan. Ik ben verder gegaan met de course template. 

Ook hadden we allemaal een individueel gesprek met een docent. Ik had mijn gesprek met Joost. Hij gaf mij een aantal handige tips over het maken van animaties, en ook gaf hij aan dat we misschien iets kritischer moeten kijken naar de HTML en naar het gebruik van classes of ids. 

Nadat we allemaal een gesprek hebben gehad hebben we een korte code review gedaan met zijn allen, en zijn we alle componenten langsgelopen. Mijn code had een aantal dingen die veranderd moesten worden, dus dat had ik dan ook veranderd. 

Na de codereview ben ik weer verder gegaan met de course template. Aan het eind van de middag hebben we een aantal branches bij elkaar gezet, zodat we vrijdag goed zouden kunnen testen met Marie.

<details>
  <summary>
    Nog meer leuke plaatjes om te bekijken
  </summary>
  <img alt="screenshot van het ontwerp van de course pagina" src="https://i.imgur.com/DzrIrTG.png" />
  <img alt="eerste screenshot van een van de eerste versies van de course pagina" src="https://i.imgur.com/AxlMWfB.png" />
  <img alt="tweede screenshot van een van de eerste versies van de course pagina" src="https://i.imgur.com/XdVATzi.png" />
</details>