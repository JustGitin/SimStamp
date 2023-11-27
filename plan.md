Folgende Anforderungen werden an SimStamp gerichtet oder sind erwünschenswert:
-Die Homepage an sich sollte relativ übersichtlich sein und Informationen wie die Arbeitszeit der gesammten Woche, die überstunden als auch die unterschrittene Stundenanzahl in Form einer simplen Tabelle visualisiert 
-Die App sollte über ein Button verfügen welcher das Starten und das Anhalten des Zeiten-trackings ermöglichen sowie ein weiterer Button der für das      Stoppen für den Timer verantwortlich ist. Sobald die Zeit angehalten wurde, das Zeittracking für diesen Tag jedoch nicht beendet wurde, wird nach einer halben Stunde eine Nachricht an den Nutzer gesendet die ihn erinnern soll, dass er sich zurück an seine Arbeit machen sollte. 
-Es sollte zudem die Möglichkeit geben nach dem Beenden des Zeittrackings diesen zu speichern und letzendlich die Stundenanzahl in dezimal ausgeben als auch im normalen Format. Nachträgliche Notizen und Änderungen sollten auch möglich sein.
-Des weiteren sollen Benutzer auch nur teile der Zeit einem Projekt zugeordnet werden das sie nicht jedes mal erneut eingeben müssen
-Als Tag auf den diese Stunden geschrieben werden sollen, soll standardmäßig der heutige ausgewählt werden, es sollte jedoch auch die Möglichkeit gegeben werden den Tag zu wechseln.
-Zu Jedem Projekt können Notizen gemacht werden die mit dem Projekt verknüpft sind und bei der nächsten Auswahl des Projekts an einem anderen Tag ist diese einsehbar.
-Ein Benutzer sollte Projekte und die dazugehörigen Zeiten vom Vortag übernehmen können
(- Cool wäre das wenn die Zeiterfassung ab dem Start von Teams erfolgt, sofern dieses Programm von alleine ab dem hochfahren des Laptops gestartet wird -)
Wenn die Arbeitszeit die 40h Marke überschreitet bei einem Vollzeit Berufler, so soll die Stundenanzahl Rot markiert werden
Ein weiteres Feature wäre das Tracken des Timers an sich über das Handy 
Sollte man mal vergessen haben die Zeit rechzeitig zu tracken, kann man auch Manuell beim Start eines Timers die Uhrzeit eintragen. Sobald der User den Button drückt, soll die aktuelle Uhrzeit (evtl mit useRef) abgespeichert werden und nach der Nutzereingabe in Form einer Uhrzeit soll die bis dahin vergangene Zeit berechnet werden und dem Ausgewählten Tracker diese Anzahl von Stunden bzw Minuten draufaddieren.
Jeder Timer ist auf 24h begrenzt sodass beim vergessen eines Timers keine konflikte entstehen (Tage entstehen) und der User sollte bei einem Tracking über 9h Arbeitszeit eine Meldung bekommen die in lediglich erinnert.

projectData = [projectId [timePeriod:Time,[startStamp,endStamp]]];