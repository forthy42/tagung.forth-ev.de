# Programm

## Online, 6. & 7. Mai 2023


### Forth Tagung 2023
**on air** ... einige Sitzungen werden live auf [twitch](https://www.twitch.tv/4ther) gestreamed, aufgenommen und später auf [youtube](https://www.youtube.com/channel/UC_mpkwOO_1ILd66GUTNVPQg) hochgeladen um kommende Generationen zu erfreuen.

__Das [aktuelleste Programm findet sich hier](/program).__

#### Freitag, 5. Mai
- 19:00 Informelles Treffen ohne besonderes Programm

#### Samstag, 6. Mai
- Vormittag: Vorträge und Workshops
- Nachmittag: Vorträge und Workshops
- Abend: Gemeinsames Abendessen (Online-Edition
- 08:30 Zusammenkunft
- 08:50 Ordnungsruf - fertig werden (Bitte spätestens jetzt online sein)
- 09:00 Begrüßung und Ablauferklärung
SESSIONS(2023-05-06)  Offizielles Ende, Offener Chat
- 09:30 Sitzung 1 **on air**
  - Anton Ertl: `See-code` in Gforth 1.0  (30min)  
    Gforth erzeugt nicht einfach für jedes Primitive immer den selben  
    Code, sondern der erzeugte Code ergibt sich durch eine Optimierung für  
    einen Block von Primitives.  Das verkompliziert `see-code`, das den  
    Maschinencode einer Colon Definition zusammen mit den Forth-Primitives  
    anzeigt.  In Gforth 0.7 zeigt `see-code` teilweise noch die falschen  
    Primitives an.  In Gforth 1.0 wurde `see-code` überarbeitet, sodass es  
    jetzt immer die richtigen Primitives anzeigt und zusätzlich noch,  
    welche Stack-Repräsentationen verwendet werden.
  - Bernd Paysan: net2o status report – Passphrase hashing (30min)  
    net2o hat eher einen Stub als Passphrase-Hashing, und muss auch mal auf den aktuellen Stand der Technik aufgepeppt werden.
- 10:30 BioBreak
- 10:45 Sitzung 2 **on air**
  - Ulrich Hoffmann: Portierung des seedForth-Multitaskers auf noForth (45min)  
    seedForth hat einen in High-Level-Forth programmierten kooperativen Multitasker klassischen Zuschnitts. Die derzeitige seedForth-32-Bit-i386-Version benutzt indirect threaded code. noForth ist ein indirect-threaded-code-System für MSP430, RISC-V und ARM von Willem Ouwerkerk, Albert Nijhof, u.a.   
      
    Der Vortrag stellt noForth kurz vor und berichtet über die Erfahrungen der Portierung des seedForth-Multitaskers auf noForth.
- 11:30 BioBreak
- 11:30 Mittagspause **on air**
- 14:00 Sitzung 3 **on air**
  - Gerald Wodni: 1-bit-CPU Kontaktplan (PLC14500) (30min)  
    Die Inspiration zu meinem letzter Vortrag zum Kontaktplan/Ladder-Logic kam von der 1-bit-CPU "MC14500". Inzwischen habe ich ein Trainerboard dafür, und darauf soll der in Forth getippte Kontaktplan(KOP) laufen. Wir wiederholen kurz die Basics, schauen uns den Assembler an, sowie die Umsetzung von KOP auf Assembler. Wenn alles so funktioniert, wie es soll haben wir am Ende eine Garagentorsteuerung.
  - Jörg Völker: Lokale Values super simpel in Fancy-Forth (30min)  
    Auf die schnelle Implementiert: Frames auf dem Returnstack für lokale Values
- 15:00 BioBreak
- 15:15 Sitzung 4 **on air**
  - Anton Ertl:  Das magische Sechseck, Constraints, und Ausführungshäufigkeiten (20min)  
    Das magische Sechseck ist ein mathematisches Rätsel mit einer Lösung.  
    In Forth kann man eine Suche nach der Lösung direkt implementieren.  
    Constraint-basierte Techniken erlauben es, den Suchraum früher zu  
    verkleinern, aber beim magischen Sechseck ist der Overhead größer als  
    der Gewinn.  Das kann man über die Ausführungshäufigkeiten  
    der Code-Teile nachvollziehen.
  - Christopher Lozinski: Forth Transputer (5min)  
    This 5 minute lightning talk is about my proposed master's degree project, a Forth Transputer based on the MicroCore.   
    CPU's should be designed for speed of software development first, run-time speed second.   With climate change,   
    we all need to be mindful of the energy consumed by our cpus, and the cloud.
  - Jörg Völker: Mit Forth durch die Chip-Krise (30min)  
    Controller konnte und kann man sich immer noch nicht frei aussuchen - man muß eher mit dem leben was man so kriegen kann. Ein kurzer Bericht.
- 16:10   Offizielles Ende, Offener Chat
- 16:45 VD International & Druckkosten
- 18:00 Gemeinsames Abendessen/VD-International & Kosten bemurmeln
- 21:00 Drachenrat

#### Sonntag, 7. Mai
- 10:00-13:00 Mitgliederversammlung, [Offizielle Einladung (PDF)](/files/2023/FG-Mitgliederversammlung-2023-05-07.pdf)
- 15:00-18:00 Platz für weitere Workshops
  Offizielles Ende, Offener Chat

### Hardwarevorraussetzungen
Die folgende Hardware ist für die Teilnahme erforderlich:
- Ein Headset oder ein vergleichbares Setup welches Echos von Ihrem Gerät vermeidet.

Die folgende Hardware wird sehr empfohlen:
- Eine Webcam welche auf Ihr Gesicht zeigt.
- Eine Lampe welche selbiges beleuchtet.

Wenn sich eine Wand hinter Ihrem Monitor befindet, ist es eine gute Idee diese zu beleuchten um so ein weicheres Licht zu erzeugen. 

### Softwarevorraussetzungen

__Kurzum: holen Sie sich Firefox, verwenden Sie den Link aus der Registrationsemail.__

Die folgende Software ist erforderlich:
- Möglichst aktueller Firefox (bitte updaten)

Die folgende Software wird sehr empfohlen und dient als Ausfalloption:
- Möglichst aktueller Chromium basierender Browser (bitte updaten)
- Zoom Klient

Wie schon bei der EuroForth verwenden wir die webbasierende Chat-Anwendung [Mattermost](https://mattermost.com/) auf https://chat.forth-standard.org - keine Installation notwendig, gehostet von Vereinsmitgliedern mit Datenschutzempfinden ;).
Den Anmeldelink hierfür finden Sie in der Registrationsemail.
Sämtliche Kommunikation findet über diese Chat-Anwendung statt, bitte melden Sie sich im `Zusammenkunft`-Zeitfenster ein.

Für die Videokonferenzen selbst verwenden wir [BigBlueButton](https://bigbluebutton.org/) gehostet von Gerald Wodni.  
__Links zu den Konferenzräumen finden sich in `/meineTagung`, den genauen Link finden Sie in der Registrationsemail.__

Für den absoluten Notfall bitten wir Sie den [Zoom-Klienten](https://zoom.us/)
zu installieren um auf diesen ausweichen zu können  
(war die letzten Male nie notwendig, aber Vorsicht ist besser als Nachsicht).

