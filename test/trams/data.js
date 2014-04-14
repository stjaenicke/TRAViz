var trams = [
	"Tram 1",
	"Tram 2",
	"Tram 3",
	"Tram 4",
	"Tram 7",
	"Tram 8",
	"Tram 9",
	"Tram 10",
	"Tram 11",
	"Tram 12",
	"Tram 14",
	"Tram 15",
	"Tram 16"
];

var stations = [
	"1 Lausen Zschampertaue Krakauer_Straße Ratzelbogen Stuttgarter_Allee Schönauer/Ratzelstraße Herrmann-Meyer-Straße Kurt-Kresse-Straße Diezmannstraße Antonien-/Gießerstraße Adler Rödelstraße Stieglitzstraße Holbeinstraße Klingerweg Marschnerstraße Westplatz Gottschedstraße Goerdelerring  Hauptbahnhof  Hofmeisterstraße Friedrich-List-Platz Einertstraße H.-Liebmann-/Eisenbahnstraße Stannebeinplatz Stöckelstraße Löbauer_Straße Ossietzky-/Gorkistraße Rathaus_Schönefeld Schönefeld,_Volbedingstr. Mockauer/Volbedingstraße Friedrichshafner_Straße Döringstraße Mockau,_Post 1",
	"2 Grünau-Süd Ratzelbogen Stuttgarter_Allee Schönauer/Ratzelstraße Herrmann-Meyer-Straße Kurt-Kresse-Straße Diezmannstraße Antonien-/Gießerstraße Adler Rödelstraße Stieglitzstraße Holbeinstraße Klingerweg Marschnerstraße Westplatz Neues_Rathaus Wilhelm-Leuschner-Platz Roßplatz Härtelstraße Bayerischer_Bahnhof Johannisallee Deutsche_Nationalbibliothek Altes_Messegelände Naunhofer_Straße Völkerschlachtdenkmal Südfriedhof Prager/Russenstraße Probstheida Franzosenallee Roseggerstraße Meusdorf 2",
	"3 Knautkleeberg Fortunabadstraße Albersdorfer_Straße Seumestraße Wasserwerk_Windorf Großzschocher,_G.-Ellrodt-Str. Huttenstraße Kunzestraße Arthur-Nagel-Straße Kleinzschocher Schwartzestraße Adler Markranstädter_Straße Elster-Passage Felsenkeller Angerbrücke,_Straßenbahnhof Sportforum Waldplatz Leibnizstraße Goerdelerring  Hauptbahnhof  Hofmeisterstraße Friedrich-List-Platz Einertstraße H.-Liebmann-/Eisenbahnstraße Torgauer_Platz Volksgarten Permoser-/Torgauer_Straße Schwantesstraße Bautzner_Straße Hohentichelnstraße Arcus_Park Heiterblick,_Teslastraße Portitzer_Allee,_S-Bf._Heiterblick Heisenbergstraße Paunsdorf-Nord Hermelinstraße Paunsdorfer_Allee/Permoserstr. Paunsdorf-Center Taucha,_O.-Schmidt-Str. Taucha,_Theodor-Körner-Str. Taucha,_Freiligrathstraße Taucha,_An_der_Bürgerruhe 3",
	"4 Gohlis,_Landsberger_Straße Beyerleinstraße Landsberger/M.-Liebermann-Str. Viertelsweg S-Bf._Coppiplatz G.-Schumann-/Lindenthaler_Str. Menckestraße Stallbaumstraße Am_Mückenschlösschen Feuerbachstraße Waldplatz Leibnizstraße Goerdelerring  Hauptbahnhof  Augustusplatz Johannisplatz Gerichtsweg Reudnitz,_Koehlerstraße Breite_Straße Riebeck-/Oststraße Riebeck-/Stötteritzer_Straße S-Bf._Stötteritz Breslauer_Straße Weißestraße Rathaus_Stötteritz Kolmstraße Stötteritz,_Holzhäuser_Straße 4",
	"7 Böhlitz-Ehrenberg,_Burghausener_Str. Forstweg Ludwig-Jahn-Straße Südstraße Barnecker_Straße S-Bf._Leutzsch Philipp-Reis-Straße Pfingstweide Rathaus_Leutzsch Diakonissenhaus Wielandstraße G.-Schwarz-/Merseburger_Str. Lindenauer_Markt Angerbrücke,_Straßenbahnhof Sportforum Waldplatz Leibnizstraße Goerdelerring  Hauptbahnhof  Augustusplatz Johannisplatz Gerichtsweg Reudnitz,_Koehlerstraße Wiebelstraße Torgauer_Platz Geißlerstraße,_Bülowviertel Annenstraße Edlichstraße Annenstraße Sellerhausen Ostheimstraße Theodor-Heuss-Straße Barbarastraße Paunsdorf,_Straßenbahnhof Am_Vorwerk Ahornstraße Paunsdorf-Nord Hermelinstraße Paunsdorfer_Allee/Permoserstr. Paunsdorf-Center Sommerfeld 7",
	"8 Grünau-Nord Kiewer_Straße,_Kaufland Weimarer_Straße Kursdorfer_Weg Schönauer_Ring Schönauer_Ring Parkallee Grünauer_Allee Saarländer_Straße Radiusstraße Lindenau,_Bushof Henriettenstraße Lützner/Merseburger_Str. Lindenauer_Markt Angerbrücke,_Straßenbahnhof Sportforum Waldplatz Westplatz Neues_Rathaus Wilhelm-Leuschner-Platz Augustusplatz Wintergartenstraße,_Hbf. Hofmeisterstraße Friedrich-List-Platz Einertstraße H.-Liebmann-/Eisenbahnstraße Torgauer_Platz Geißlerstraße,_Bülowviertel Annenstraße Sellerhausen Ostheimstraße Theodor-Heuss-Straße Barbarastraße Paunsdorf,_Straßenbahnhof Am_Vorwerk Ahornstraße Paunsdorf-Nord 8",
	"9 Thekla Mockau,_Kirche Samuel-Lampel-Straße Mockau,_Post Döringstraße Friedrichshafner_Straße Mockauer/Volbedingstraße Hamburger_Straße Apelstraße Wilhelm-Liebknecht-Platz Hauptbahnhof,_Westseite Goerdelerring  Thomaskirche Neues_Rathaus Wilhelm-Leuschner-Platz Roßplatz Härtelstraße Bayerischer_Bahnhof Körnerstraße K.-Eisner-/A.-Hoffmann-Str. Steinplatz A.-Hoffmann-/R.-Lehmann-Str. HTWK Connewitz,_Kreuz Mathildenstraße Koburger_Brücke Wildpark Markkleeberg,_Forsthaus_Raschwitz Markkleeberg,_Parkstr. Markkleeberg,_S-Bf. Markkleeberg,_Ring Markkleeberg-West 9",
	"10 Wahren Annaberger_Straße Möckern,_Historischer_Strbf. Dantestraße S-Bf._Möckern Wiederitzscher_Straße G.-Schumann-/Lindenthaler_Str. G.-Schumann-/Lützowstr. Chausseehaus Wilhelm-Liebknecht-Platz Hauptbahnhof  Augustusplatz Wilhelm-Leuschner-Platz Münzgasse Hohe_Straße Südplatz K.-Liebknecht-/K.-Eisner-Str. HTWK Connewitz,_Kreuz Wiedebachplatz Meusdorfer_Straße Triftweg An_der_Märchenwiese Moritz-Hof Lößnig 10",
	"11 Schkeuditz,_Rathausplatz Altscherbitz Schkeuditz,_Paetzstraße Schkeuditz,_Gartenstadt Modelwitz Hänichen,_Bismarckturm Freirodaer_Weg Lützschena Stahmelner_Allee Stahmeln Pittlerstraße Wahren Annaberger_Straße Möckern,_Historischer_Strbf. Dantestraße S-Bf._Möckern Wiederitzscher_Straße G.-Schumann-/Lindenthaler_Str. G.-Schumann-/Lützowstr. Chausseehaus Wilhelm-Liebknecht-Platz Hauptbahnhof  Augustusplatz Wilhelm-Leuschner-Platz Münzgasse Hohe_Straße Südplatz K.-Liebknecht-/K.-Eisner-Str. HTWK Connewitz,_Kreuz Pfeffingerstraße Hildebrandstraße S-Bf._Connewitz Raschwitzer_Straße Friederikenstraße Leinestraße Dölitz,_Straßenbahnhof Markkleeberg,_Virchowstr. Markkleeberg-Ost 11",
	"12 Gohlis-Nord Gottschallstraße Virchow-/Coppistraße S-Bf._Gohlis G.-Schumann-/Lützowstr. Fritz-Seger-Straße Nordplatz Zoo Lortzingstraße Goerdelerring  Hauptbahnhof  Augustusplatz Johannisplatz Gutenbergplatz Ostplatz Witzgallstraße Technisches_Rathaus 12",
	"14 S-Bf._Plagwitz K.-Heine-/Gießerstr. K.-Heine-/Merseburger_Str. Felsenkeller Nonnenstraße Marschnerstraße Westplatz Gottschedstraße Goerdelerring  Hauptbahnhof  Augustusplatz Wilhelm-Leuschner-Platz Neues_Rathaus Westplatz Marschnerstraße Nonnenstraße Felsenkeller K.-Heine-/Merseburger_Str. K.-Heine-/Gießerstr. S-Bf. Plagwitz 14",
	"15 Miltitz Saturnstraße Jupiterstraße Plovdiver_Straße Kiewer_Straße Am_Kirschberg Schönauer_Ring Parkallee Grünauer_Allee Saarländer_Straße Radiusstraße Lindenau,_Bushof Henriettenstraße Lützner/Merseburger_Str. Lindenauer_Markt Angerbrücke,_Straßenbahnhof Sportforum Waldplatz Leibnizstraße Goerdelerring  Hauptbahnhof  Augustusplatz Johannisplatz Gutenbergplatz Ostplatz Witzgallstraße Technisches_Rathaus Altes_Messegelände Naunhofer_Straße Völkerschlachtdenkmal Südfriedhof Prager/Russenstraße Probstheida Franzosenallee Roseggerstraße Meusdorf 15",
	"16 Messegelände S-Bf._Messe Georg-Herwegh-Straße Wiederitzsch-Mitte Dachauer_Straße Klinikum_St._Georg Hornbach_Baumarkt Delitzscher/Essener_Str. Mosenthinstraße Eutritzscher_Markt Eutritzscher_Zentrum Wilhelminenstraße Chausseehaus Wilhelm-Liebknecht-Platz Hauptbahnhof  Augustusplatz Roßplatz Härtelstraße Bayerischer_Bahnhof Johannisallee Deutsche_Nationalbibliothek An_den_Tierkliniken R.-Lehmann-/Zwickauer_Straße Triftweg An_der_Märchenwiese Moritz-Hof Lößnig 16"
];

var tramColors = [
	"#59c134",
	"#cacc06",
	"#0b711f",
	"#83a0e6",
	"#387dff",
	"#fcc707",
	"#fc9007",
	"#ff7371",
	"#ed1c24",
	"#8341e6",
	"#19b5f1",
	"#244aa5",
	"#8b2524"
];
