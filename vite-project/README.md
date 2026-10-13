● Planering
[x] Gör en Figma-skiss av sidan, för både mobil och desktop, innan ni kodar
[]Den färdiga sidan skall följa skissen. Ändringar under arbetets gång är okej,
men beskriv dem i README-filen
● Struktur och komponenter
[] Dela upp appen i rimliga, återanvändbara komponenter med en tydlig struktur
[] Använd props för att skicka data
[x] Spara projektdatan separat (t.ex. data/projects.ts) och rendera den med
.map() och korrekta key
[x] Minst 6 projekt visas som boxar/kort (riktiga eller fiktiva, se ovan)
● Innehåll
[x]Portfolion innehåller minst sektionerna Hem, Om mig, Projekt och Kontakt
[]En navigation som länkar till sektionerna (t.ex. #projekt)
[x]Kontakt-sektionen visar era kontaktuppgifter, t.ex. e-post, Github och LinkedIn
(kontaktformuläret är ett VG-krav)
● State och interaktivitet
○ Minst två meningsfulla användningar av useState, varav en skall filtrera
projektlistan
■ Filtret väljer en teknik-tagg i taget, plus ett val som visar alla projekt
(t.ex. "Alla")
■ Andra exempel: mobilmeny, ljust/mörkt tema, expanderbar "läs mer"
○ Den filtrerade listan skall räknas fram vid rendering, inte sparas i ett eget
state
● Styling och animation
○ En enhetlig visuell profil (färger, typografi, avstånd) med CSS Modules,
Tailwind eller välstrukturerad CSS
○ Helt responsiv från ca 360px upp till desktop-bredd
○ Minst en animation eller transition som förbättrar upplevelsen (CSS eller
Motion)
● Kvalitet och leverans
○ Inga fel eller React-varningar i konsolen
○ Driftsatt på Vercel
○ En README som innehåller:
■ Projektbeskrivning och tech stack
■ Hur man kör projektet lokalt
■ Länk till live-sidan och till Figma-skissen

Uppgiftskrav på VG-nivå
Allt som G-nivån innefattar, med följande tillägg, utfört med hög kvalitet och självständighet
● Kontaktformulär med kontrollerade inputs (controlled form)
○ Formulärets värden hanteras av ett state med ett objekt, t.ex. { name, email,
phone, subject, message }
○ Formuläret skall innehålla:
■ input för namn, e-post, telefon och ämne
■ textarea för meddelande
■ en skicka-knapp
○ Felhantering via state: alla fält är obligatoriska. Saknas ett värde visas ett
felmeddelande bredvid tillhörande fält
○ När valideringen är godkänd visas ett success-meddelande om att mejlet är
skickat (inget riktigt mejl behöver skickas)
● Genomtänkt state-design
○ State ligger i den närmaste gemensamma föräldern till de komponenter som
använder det (inte för högt upp, inte för långt ner)
○ Multi-select-filter: projektfiltret tillåter flera valda taggar samtidigt
■ De valda taggarna sparas som en array i state
■ Taggar läggs till och tas bort genom att skapa en ny array, t.ex.
[...selectedTags, tag] och selectedTags.filter(...)
■ Är inga taggar valda visas alla projekt, och det finns en knapp för att
rensa filtret
■ Ni väljer själva om ett projekt skall matcha någon eller alla valda
taggar
■ Multi-select-filtret ersätter filtret på G-nivå
● Avancerad animation, minst en av följande (eller motsvarande efter
överenskommelse):
○ Stegvisa animationer när man scrollar
○ Layout-animationer när projekten filtreras
○ Animerad öppning och stängning av element (t.ex. mobilmeny, "läs mer" eller
modal) med AnimatePresence
● Reflektion (200–400 ord i README-filen, kan även förmedlas med
diagram/illustrationer)
○ Förklara er komponentarkitektur och era beslut kring state
○ Vad ni skulle göra annorlunda
○ Ev. om ni har använt AI-verktyg, vilka AI-verktyg och till vad.