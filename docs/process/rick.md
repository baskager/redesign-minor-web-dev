# Proces Rick

In dit markdown bestandje zal ik mijn persoonlijke proces beschrijven.

- **[Leerdoelen](#leerdoelen)**
- **[Week 1](#week-1)**
- **[Week 2](#week-2)**
- **[Week 3](#week-3)**
- **[Week 4](#week-4)**
- **[Week 5](#week-5)**
- **[Conclusie](#Conclusie)**

[Link to Pull Requests](https://github.com/baskager/redesign-minor-web-dev/pulls?q=is%3Apr+is%3Aclosed+author%3ARick712)

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

![Overzicht van database structuur](https://i.imgur.com/wuzUCBC.png)

Toen we de database structuur opgezet hadden zijn we begonnen met het maken van de eerste schetsen van de website. Deze schetsen waren nogal redelijk lo-fi.

<details>
  <summary>
    Kijk naar schetsjes
  </summary>
  <img src="https://i.imgur.com/u7altpk.png" alt="overzicht van schetsen" />
  <img src="https://i.imgur.com/axnEoYa.png" alt="nog meer schetsen" />
  <img src="https://i.imgur.com/DgD5kh6.png" alt="NOG MEER SCHETSEN" />
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

### Vrijdag 8 juni

Vrijdag ochtend was de test met Marie. Marie had veel goede tips over de vormgeving en over de duidelijkheid van bepaalde pagina's:


<details>
  <summary>
    Resultaten van test met Marie
  </summary>

  <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fd.pr%2Fi%2FYbuxe1%2B" alt="foto van Marie die aan het testen is" />

  <p><b>Program pagina</b></p>
  <ul>
    <li>Niet duidelijk dat het de sprekers zijn</li>
    <li>Programma en hiërarchie is niet duidelijk</li>
    <li>Kopjes toevoegen, introductie.</li>
    <li>Tabel is niet eigenlijk niet duidelijk.</li>
    <li>Weken opsplitsen</li>
    <li>Betere visuele afscheiding per deel</li>
    <li>Klikken op de vakken is nog niet duidelijk. Accentkleur moet</li>
    <li>Download PDF naar onder</li>
    <li>Horizontaal kijken maar niet verticaal. Link met elkaar onduidelijk</li>
    <li>Lengte van de teksten is goed</li>
  </ul>

  <p><b>Vak pagina</b></p>
  <ul>
    <li>Docenten staan boven de leerdoelen</li>
    <li>Weekly programma zien er belangrijk uit</li>
    <li>Link naar docenten duidelijk</li>
    <li>Weekopdrachten 2x, minder belangrijk maken</li>
  </ul>

  <p><b>Partner pagina</b></p>
  <ul>
    <li>Nieuw tabblad openen bij klikken op de button</li>
    <li>Is meer de goede kant op</li>
  </ul>

  <p><b>Student work pagina</b></p>
  <ul>
    <li>Misschien zijn de filters niet nodig</li>
  </ul>

  <p><b>Algemeen</b></p>
  <ul>
    <li>Missen de hiërarchie in de teksten, links zien er niet zo heel klikbaar uit</li>
  </ul>


  <p><b>Video</b></p>
  <p>Aangezien Marie doof is, vroegen wij ons af hoe ze dat normaal doet met geluid, en in het bijzonder video.</p>
  <ul>
    <li>Bij Lynda video’s waarbij tekst al gelezen is</li>
    <li>Samenvattingen</li>
    <li>Ondertiteling is al voldoende</li>
  </ul>

<p><b>Welke dingen zoek je als je naar een minor op zoek bent:</b></p>

Student work, beste beeld van wat er gemaakt wordt en het resultaat. Interessant of niet, daarna naar programma.

Programma is ook belangrijk.
Partners is voor de student zelf minder belangrijk.

<p><b>Liever alleen goed werk of ook minder goed werk</b>

Goed werk kan ook afschrikken. Wat minder goed werk ook tonen.

Wel toegankelijk voor iedereen.

<p></b>Sfeer, over ons</b></p>

Met sfeer van de minor.
Marie: niet zo zeer een aparte pagina, misschien verwarrend maar op de homepage.

</details>

De rest van de dag hebben we verder gewerkt aan het design, en hebben we een aantal van Marie haar tips verwerkt.

In de middag wilden we veranderingen aanbrengen aan de kleuren, maar aangezien het vrijdagmiddag was zijn we er niet echt aan toegekomen. Wel hebben we aanpassingen gedaan aan de tijdlijn.

<details>
  <summary>
    Een aantal screenshots van de website
  </summary>
  <img src="https://i.imgur.com/FRSeOQS.png" alt="Vak pagina" />
  <img src="https://i.imgur.com/eLbBNEa.png" alt="Vak pagina 2" />
  <img src="https://i.imgur.com/uVQ4CfI.png" alt="Programma" />
  <img src="https://i.imgur.com/Gw5Xkz0.png" alt="Programma 2" />
  <img src="https://i.imgur.com/Oqy2jVR.png" alt="Studenten werk" />
  <img src="https://i.imgur.com/vineXi5.png" alt="Partner pagina" />
  <img src="https://i.imgur.com/Cuq043P.png" alt="Partner pagina 2" />
  <img src="https://i.imgur.com/wGb7b8W.png" alt="Inschrijf pagina" />
</details>

### Week 3

#### Maandag 11 juni

Maandag ochtend hadden we weer een klasbespreking. Na de bespreking hebben we kort met Krijn gesproken over onze leerdoelen en onze progressie.

Na het gesprek hebben we weer kort gesproken over de kleuren, en ben ik verder gegaan met de vakpagina. Na de vakpagina ben ik begonnen met het halen van een van mijn leerdoelen: Animaties en transities.

Ik heb nagedacht over op wat voor plekken in ze toe zou willen voegen.

Om 13:00 hadden we een gesprek met Vasilis. Vasilis was erg tevreden over hoe de website er uit zag. De rest van de dag hebben we de feedback van Marie besproken, en waar nodig verwerkt.

#### Dinsdag 12 juni

Ook dinsdag had ik een gesprek met Vasilis, maar deze was individueel. Tijdens het gesprek had ik een aantal vragen over parallax in css, maar Vasilis kon mij helaas niet uitleggen hoe het precies werkte. Wel gaf hij een handig script wat ik zou kunnen gebruiken voor andere animaties: [Delighters.JS](https://github.com/Q42/delighters).

Het script voegt classes toe aan elementen wanneer ze binnen de viewport vallen, wat inhoudt dat je makkelijk kan animeren wanneer een element in beeld komt.

Ook heb ik een begin gemaakt aan de animatie van het aanmeld formulier, alhoewel ik me afvraag in hoeverre deze code gebruikt gaat worden. James was op dat moment bezig met het vormgeven van het formulier, dus de kans bestond dat de animatie niet meer zou gaan werken wanneer James er klaar mee zou zijn.

Eind van de middag hadden we een weekly nerd in de vorm van een Icons meeting van Vitaly Friedman. Vitaly is een een beetje een alleskunner in deze branch, en hij gaat vertellen over 'The incredible amount of knowledge he has in the field of web design'.

### Woensdag 13 juni

Woensdag heb ik mij heel erg gefocust op animeren en het verbeteren van de animaties. James kwam met een linkje naar een website waar je heel makkelijk transities en animaties kan selecteren genaamd Animista. Ik wilde deze dag een page transition maken van het programma naar de vakpagina, en dat is soort van gelukt.

Op safari werkt de transitie zelf wel, maar als je dan naar de vorige pagina gaat dan gaat het stuk. Op Chrome deed Delighters.js het niet goed, en op Firefox had ik nog niet kunnen testen. 

Ik had geprobeert om het script aan te passen zodat het wel zou gaan werken, maar dat is me op deze dag niet gelukt.

In de avond hadden we een test met Marijn. We hadden vandaag veel meer om te laten zien dan vorige keer, dus deze test zou dan ook een stuk relevanter zijn. We hadden ons voorgenomen om spacial navigation te laten werken voor de test. James heeft dit weten te fixen (lekker bezig James), en Jelle en Jamal hebben het nieuwe ontwerp van het programma gemaakt.

Daarnaast kreeg ik ruzie met Delighters.js. Het werkte niet consistent, en dat maakte mij enigszins gefrustreerd.

#### Donderdag 14 juni

Donderdag had ik in de ochtend een gesprek met Joost. Ik vertelde dat delighters.js niet heel betrouwbaar was, en hij stelde voor om naar de intersection observer te kijken. Mees had dit woensdag al opgenoemd, maar het leek mij ietwat ingewikkeld, maar dit bleek best mee te vallen. Na 1 uurtje had ik het werkende, en na nog een half uur had ik het zo gemaakt dat het precies hetzelfde werkte als delighters.js, maar dan wel betrouwbaar. Het enige is dat de intersection observer minder goed gesupport is.

Ik dacht althans dat het werkte. Op safari kreeg ik niets te zien, aangezien de intersection observer niet ondersteund wordt door Safari. Vervolgens heb ik het zo om te weten schrijven dat op safari de elementen wel te zien zijn, maar niet animeren, en wanneer het wel ondersteund wordt, dat de elementen dan wel geanimeerd worden. 

Ook had ik de animatie van het formulier die ik dinsdag had gemaakt er uit gesloopt. Het werkte niet helemaal goed, en voegde eigenlijk ook niet gek veel toe. Ook heb ik de pagina transitie eruit gegooid. Het was niet consistent genoeg. Ook wilde hij nog wel eens glitchen.

#### Donderdag avond

Donderdag avond kwam Vasilis met de opmerking dat we veel te weinig prototypes hadden om te testen met Marijn. Vasilis wilde dat wij meer gingen testen met manieren om de website te gebruiken, terwijl wij wilde focussen op een complete website die de lucht in zou kunnen aan het eind van de meesterproef.

#### Vrijdag 15 juni

Vrijdag ochtend hadden we een test met Marie. Marie vond de website veel beter dan de vorige keer. Jelle had twee varianten gemaakt voor ondertitelingen bij een video.

Na de test gingen we facetimen met Vasilis om te bespreken wat de avond ervoor via Slack ging. We hebben kort besproken wat we nu zouden gaan doen, en we hadden besloten om nu een week lang vol voor de prototypes van interactie te gaan. We hadden allemaal een bepaald element uitgekozen om te onderzoeken hoe we de interactie vooral voor Marijn een stuk beter kunnen maken.

Ik had er voor gekozen om een form element plezierig te maken voor Marijn. Ik dacht gelijk aan een autocompleter. Voor Marijn duurt het best lang om toetsen in te drukken, dus als hij snel iets kan invullen dan zou dat een hoop moeite schelen.

Als eerst focuste ik op het autocompleten van de email. Ik heb ervoor gezorgd dat, wanneer hij de eerste letter van zijn bedrijf domein invult, hij met 1 tab en een enter de rest van het domein kan selecteren (F wordt fuga.com). Dit scheelt 7 karakters, wat voor Marijn al een aantal seconden scheelt.

Toen ik die autocomplete had was ik aan het bedenken hoe ik Marijn nog meer tijd zou kunnen schelen wanneer hij iets in moet typen. Ik moest vrij snel denken aan Tio Salamanca, de Mexicaanse kartel meneer uit Breaking Bad. Hij kon niet meer praten, en gebruikte een bord met letters om aan te geven wat hij wilde zeggen. Ik heb iets bedacht wat daar op lijkt. Op vrijdag heb ik hem nog niet af weten te krijgen. De bedoeling is dat Marijn kan typen door middel van cijfercombinaties. 11 is A, 12 is B, 21 is F, en zo verder. Op deze manier kan Marijn zijn hand op dezelfde plek houden, en hoeft hij maar een kleine beweging te maken.

Ook zijn er een aantal aanpassingen geweest aan de kleuren, maar zelf ben ik daar niet echt mee bezig geweest. In plaats van roze en paars hebben we nu twee tinten paars.

<details>
  <summary>
    Een aantal screenshots van de vernieuwde website
  </summary>
  <img src="https://i.imgur.com/ag1d6LO.png" alt="screenshot van weekly nerd pagina" />
  <img src="https://i.imgur.com/ayomsdG.png" alt="screenshot van nieuwe partner pagina" />
  <img src="https://i.imgur.com/5sJhLm1.png" alt="screenshot van nieuwe footer" />
</details>

### Week 4

#### Maandag 18 juni

Maandag ben ik verder gegaan met het maken van het nummer toetsenbord, zoals ik het genoemd heb. Ik heb het niet helemaal werkend gekregen, maar ik heb er omheen weten te werken zodat het wel werkt.

Toen ik dat af had zat ik een tijdje te bedenken wat ik nog meer zou kunnen verzinnen om een form zo makkelijk mogelijk te maken voor Marijn. Ik heb echter niet heel veel meer kunnen bedenken, maar mijn nummer toetsenbord was zo experimenteel dat ik daar al genoeg inzichten uit zou kunnen halen.

Rond 1 uur kwam Vasilis, en die was erg tevreden met de prototypes die we gemaakt hadden. Ook hij vond mijn toetsenbord erg interessant.

#### Dinsdag 19 juni

Dinsdag heb ik de laatste paar dingetjes verbeterd aan het nummer toetsenbord. Daarna ben ik opzoek gegaan naar andere elementen die ik zou kunnen verbeteren voor Marijn. Ik had besloten de footer toegankelijker te gaan maken voor Marijn. De footer bestaat uit heel veel linkjes, waardoor Marijn heel lang bezig zou kunnen zijn met tabben.

![Screenshot van de footer](https://i.imgur.com/ayomsdG.png)

De footer bestaat uit een hoop linkjes, zeker het gedeelte met de lijst van vakken. Ik heb boven het lijstje met vakken een extra element toegevoegd die linkt naar het contact gedeelte. Dit element is alleen zichtbaar wanneer de focus op het element staat.

![screenshot van het element](https://i.imgur.com/zdKkl3w.png)

De rest van de dag ben ik verder gegaan aan de website zelf, en heb ik focus states toegevoegd aan elementen die nog geen focus state hadden.

#### Woensdag 20 juni

Woensdag ben ik verder gegaan met focus states toegevoegd aan verschillende pagina's. Om 13:00 hadden we een interessante presentatie van Bruce Lawson, een van de standarisator van het W3C. Hij vertelde over hoe standaarden tot stand komen, en wat er allemaal bij komt kijken.

In de middag ben ik verder gegaan met de focus states, en heb ik ook een aantal nieuwe states toegevoegd. In de avond hadden we de testen met Marijn.

We gingen op bezoek bij Marijn zijn bedrijf: Fuga. Het pand zat aan de Prinsengracht, en was vrij groot. Nadat we kort uitgelegd hadden wat we gingen doen ging Marijn testen.

<details>
  <summary>
    Klik hier voor resultaten
  </summary>

  <p><b>Test hotkeys versie 1</b></p>
  <ul>
    <li>liever geen alt om te navigeren, maar direct het cijfer</li>
  </ul>

  <p><b>Versie 2</b></p>
  <ul>
    <li>control alt icm sticky keys werkte niet zoals hij zou verwachten</li>
    <li>concept van control alt is wel goed bedacht</li>
  </ul>

  <p><b>Versie 3</b></p>
  <ul>
    <li>als hij er al met zijn muis is, dan kan hij ook gewoon klikken</li>
  </ul>

  <p><b>Test verbeterde navigatie met pijljtes</b></p>
  <ul>
    <li>andere focus en hover state is goed (beter)</li>
    <li>wel opletten dat je als je op de pijltjestoets drukt, dat je heel hard naar beneden gaat</li>
    <li>hij is wel beter dan de vorige keer</li>
  </ul>

  <p><b>Test carroussel Bas</b></p>
  <ul>
    <li>carroussel elementen onder elkaar zetten</li>
    <li>Het is wel beter, maar nog steeds niet 'pleasurable'</li>
    <li>Marijn wilt hem bedienen met spatiebalk</li>
  </ul>

  <p><b>Algemeen</b></p>
  <ul>
    <li>student work arrow is duidelijk :)</li>
    <li>detailpagina weekly nerd niet duidelijk</li>
  </ul>

  <p><b>Test weekly nerd video</b></p>
  <ul>
    <li>Het was onduidelijk waarom de subtitles van plaats veranderde</li>
    <li>Hij zou verwachten dat je met de pijltjestoetsen vooruit/achteruit zou kunnen spoelen</li>
    <li>images niet dragable maken</li>
  </ul>

  <p><b>Flow website</b></p>
  <ul>
    <li>standaard navigatie toggle aan, en je kan het uitzetten met hotkeys</li>
    <li>of hover of focus, en niet allebei tegelijk</li>
    <li>student work jaar select ding is 'perfect' (1)</li>
    <li>submenu niet beschikbaar met keys</li>
    <li>student work ook met pijltjes beschikbaar</li>
    <li>menu dragable</li>
    <li>(2) oke, misschien niet 'perfect', maar wel duidelijk</li>
  </ul>

  <p><b>Nummer toetsenbord</b></p>
  <ul>
    <li>Veld terug gaan met getallen</li>
    <li>Uitdaging: om getallen dicht bij elkaar te houden. Getallen uit je hoofd</li>
    <li>Is het fijn wanneer je het uit hoofd zou kunnen. Marijn denkt dat het beter werkt dan toetsenbord.</li>
    <li>123QW nog dichter bij elkaar</li>
    <li>Y er uit gehaald</li>
    <li>Leuk idee</li>
    <li>Bij focus blijven</li>
  </ul>
</details>

Toen ik mijn alternatieve toetsenbord liet zien moest hij lachen, maar toen hij even bezig was vond hij het eigenlijk heel handig. Hij gaf aan dat het voor hem makkelijker was dan een normaal toetsenbord, en wanneer hij de combinatie van cijfers beter zou weten, hij het als toegevoegde waarde zou zien.

#### Donderdag 21 juni

Donderdag zijn we verder gegaan met de website zelf. Vrijdag hebben we de laatste test met Marie gepland, en dan willen we een website laten zien die redelijk af is. Ik ben voornamelijk bezig geweest met interactie van elementen, en de transities en animaties die daarbij horen. Het submenu wat nog statisch was heb ik een transitie gegeven, en daarnaast heb ik nog wat elementjes verbeterd.

Ook hebben we nog een aantal elementen verbeterd.

<details>
  <summary>
    Nog meer mooie screenshots! KLIK DAN
  </summary>
  <img src="https://i.imgur.com/6D03q40.png" alt="screenshot van video element" />
  <img src="https://i.imgur.com/iEYLKqA.png" alt="screenshot van inschrijf gedeelte op homepagina" />
  <img src="https://i.imgur.com/cik9Bch.png" alt="screenshot van submenu" />
  <img src="https://i.imgur.com/LHTgSDS.png" alt="screenshot van Instagram feed" />
  <img src="https://i.imgur.com/7VakUcU.png" alt="screenshot van alternatieve navigatie" />
</details>

#### Vrijdag 22 juni

Vrijdag ben ik weer verder gegaan met waar ik donderdag gebleven ben, voor de rest heb ik hier niet veel over te vertellen. Wel hebben we goed geinventariseerd wat we nog allemaal moeten doen voor de eindoplevering. Deze taken hebben we verdeeld.

### Week 5

#### Maandag 25 juni

Maandag hadden we in de ochtend weer een bijeenkomst met Koop. We hebben het kort over de poster gehad die we moeten maken voor de presentatie. Na de bijeenkomst zijn we weer verder gegaan met de website, en de afvinken van de laatste dingen.

#### Dinsdag 26 juni

Dinsdag had ik een individueel gesprek met Koop waar ik de website liet zien. Koop was meer dan tevreden met hoe de website er op dat moment uit zag. Echter kreeg ik de database niet aan de praat, en had ik Bas nodig om hem aan te slingeren. Bas kwam alleen wat later, dus ben ik die ochtend maar begonnen met de poster.

Ik heb de poster gemaakt in de stijl van de website. Op de poster komt te staan wat de belangrijkste content is, en een beetje hoe het proces is verlopen. Ook kan je in een oogopslag makkelijk zien wat de alternatieve manieren van interactie zijn.

In de middag (toen ik de database weer werkend heb weten te krijgen) heb ik een aantal bugs opgelost.

Aan het eind van de middag hadden we een lijstje gemaakt met dingen die we echt af MOETEN zouden moeten hebben voor de beoordeling. Van dit lijstje heb ik een paar dingen opgepakt en die avond gedaan.

#### Woensdag 27 juni

De dag voor de oplevering zijn we nog volle bak aan de gang gegaan met de laatste bugs. De laatste dingen uit het prioriteiten lijstje hebben we afgemaakt, en ook de poster was nu 100% af. Ik heb de poster afgemaakt, en in de middag ben ik vooral bezig geweest met content vullen in de database.

### Conclusie

Aan het begin van de meesterproef had ik verwacht dat deze opdracht te klein was om met 5 man te doen, en man wat had ik het fout. Je kan het net zo gek maken zoals je zelf wilt, en dat hebben we gedaan. We hebben een hoop experimenten en testen gedaan, en dat heeft er voor gezorgd dat we een goede website hebben neergezet. Ik ben redelijk trots op het product, ondanks dat het nog niet helemaal af is. Wel denk ik dat wanneer er nog iemand een paar dagen naar kijkt, dat het zo live zou kunnen gaan.

Ik heb mij niet echt heel erg bezig geweest met de technischere kant van de website, omdat dat ook niet echt mijn leerdoel was. Vooral Jamal en Jelle hadden de technische kant van de website, dus die hebben dat opgepakt.

#### Leerdoelen evaluatie

Ik denk dat ik mijn leerdoelen wel gehaald heb. Ik heb meegewerkt aan het ontwerpproces. Zelf ben ik verantwoordelijk geweest voor de vak pagina template. Die heb ik ontworpen, gebouwd en gestijlt.

De schone en leeesbare code is ook wel gelukt denk ik. De code die ik heb geschreven is goed leesbaar. Ik heb relevante namen gebruikt voor variabelen en classnamen. Teamleden die verder zijn gaan werken met mijn code konden zonder problemen zien wat ik gedaan had, en hoe ze er mee verder zouden kunnen.

Ondanks dat dit niet mijn belangrijkste leerdoelen waren, heb ik ze wel gehaald.

De belangrijkste leerdoel die ik had was transities en animaties. Ik ben best trots op hetgeen wat ik gemaakt heb. Bijna alle transities en animaties die terug te vinden zijn op de websites heb ik gemaakt. Daarnaast heb ik ook een script geschreven met de intersection observer die ik zo zou kunnen hergebruiken op andere websites die ik ga maken. Daarnaast heb ik duidelijke hover en focus states gemaakt die de interactie met de gebruiker verbeteren.

Mijn laatste leerdoel die ik later heb toegevoegd, het leren van de CLI van git, heb ik wel enigzins gehaald. Voordat ik aan de meesterproef begon vond ik het een beetje eng om in de terminal te typen. Dingen zoals de server starten en gulp runnen deed ik al wel, maar committen, pushen en mergen nog niet. Bas heeft mij goed geholpen met het oefenen met de CLI. Ik heb meerdere malen gecommit, gepush en gemerged met de CLI, maar ik gebruik nog steeds af en toe de desktop versie van git. Ik ben echter niet meer bang om de CLI te gebruiken, en switch ook rustig van branch in de CLI. Ik heb dit leerdoel dus gehaald.

Naast de leerdoelen heb ik nog veel meer geleerd uiteraard. Een van de dingen die ik geleerd heb is hoe je een goede structuur kan aanbrengen in een project wanneer je met meerdere mensen aan een project werkt. Als ik in mijn eentje werkte, dan gooide ik elke push gewoon in master. Wanneer je met meerdere mensen aan een groot project werkt dan kan dit echt niet. Ik denk dat ik dit uberhaupt vaker ga toepassen, ook als ik in mijn eentje aan een project werk. Ook heb ik meer praktischere dingen geleerd, zoals de intersection observer, wat echt heel handig kan zijn wanneer je dingen wilt gaan doen wanneer elementen op het scherm tevoorschijn komen.

Als laatst heb ik echt gigantisch veel geleerd over toegankelijkheid, en hoe je er voor kan zorgen dat je website toegankelijk is. De testen met Marijn en Marie hebben mij echt enorm veel kennis en inzicht gegeven in hoe iemand met een beperking een website gebruikt. Ik denk dat niet genoeg developers hier rekening mee houden, terwijl de oplossingen die je maakt voor deze doelgroep ook heel handig zou kunnen zijn voor de overige gebruikers. Ik beschouw deze kennis echt als zeer nuttig.

#### Welk vak heb ik toegepast

##### Web Apps Fron Scratch

Ondanks dat ik niet heel veel technische taken heb opgepakt heb ik een aantal basis principes van WAFS wel toegepast.

##### CSS To The Rescue

CSSTTR is een van de vakken die ik het meest heb toegepast. Het maken van een plezierig interface was een belangrijk onderdeel van het vak, en ook van ons project. Ook kwam Marijn terug bij ons project. Ik denk dat we de website echt wel plezierig gemaakt hebben voor Marijn, of in ieder geval veel plezieriger dan de gemiddelde website. Ook voor Marie hebben we veel onderzoek gedaan naar hoe we geluid voor haar het beste kunnen omzetten in tekst, en dat is ook goed gelukt. Marie was tevreden met ons prototype van de videospeler.

##### Browser Technologies

Ondanks dat de focus niet echt bij dit vak lag, dacht ik onbewust toch over de support van bepaalde technieken die ik wilde gaan gebruiken op de website. Ook heb ik progressive enhanced met de animaties die werken op basis van de intersection observer.

##### Performance Matters

Sowieso is de website server-side gerenderd, wat een stuk beter is dan client side. Ook heb ik over performance nagedacht en onderzoek gedaan toen ik de micro library van Q42 wilde gebruiken. Toen ik er achter kwam dat de techniek die daar gebruikt vrij zwaar is, ben ik al snel na gaan denken over een andere manier om hetzelfde probleem op te lossen. Buiten dat heb ik mij niet bezig gehouden met performance.

##### Real-Time Web

Real-Time Web is het enige vak wat ik niet direct of indirect gebruikt heb tijdens de meesterproef.

##### Web Design

Het grootste deel van de tijd ben ik bezig geweest met web design. Aan het begin van de meesterproef al met het maken van schetsen en ontwerpen, en later tijdens het project met prototypen en itereren op testen. Ook het testen met Marijn en Marie was een belangrijk onderdeel van web design en van het project. Zoals ik eerder al aangaf denk ik dat de kennis die ik nu heb over het gebruik van een website voor mensen met een handicap heel bruikbaar is later. Ook het ontwerpen van de animaties en transities komen deels bij web design vandaan. Ik heb meerdere versies gemaakt van de animaties en transities, om uiteindelijk de best werkende te kiezen.

#### Conclusie van de conclusie

Ik ben erg tevreden met hoe het gegaan is de afgelopen weken. We hebben hard gebikkeld, en uiteindelijk staat er een mooie website. Ik heb mijn leerdoelen goed behaald, en heb ook anderen geholpen om hun leerdoelen te behalen. Ook heb ik veel geleerd over het werken in groepsverband, en samen werken aan een project. In het begin was het nog een beetje zoeken, maar ik denk zeker dat de samenwerking goed is verlopen.