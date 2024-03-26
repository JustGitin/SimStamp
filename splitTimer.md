Die Funktion setStamp setzt bei aufruf einen Zeitstempel. Der stopStamp wird erst gesetzt sobald ein neuer Timer angelegt wird in einem Array[1] timeRangeArray welches wiederum in ein currentTimer[] gepusht wird. Da somit currentTimer verändert wurde, wird useEffect erneut getriggert und befindet sich somit in einer Endlosschleife.

Neues Ziel ist, dass die Daten die in der Tabelle in der untersten Zeile hinzugefügt wurden nur bei vollständigem Ausfüllen vorübergehend in dem ArrayStore gespeichert werden was dann wiederum die Tabelle antriggert die Anzeige mit den neuen Daten zu aktualisieren.Unvollständige Daten sollen nicht mit aufgenommen werden. Die idee ist es mit dem state zu arbeiten der auf "istAktuell" steht und sobald neue Daten hinzukommen, wird dieser auf false gesetzt.


Ich will die option Tabellenansicht in der Navbar durch die option Monat ersetzen und links von der Tabelle können dann jeweils in dem oben ausgewählten Monat die KWs ausgewählt werden. Inspiration von der anderen Tabelle zuvor.S

*überschriften zentrieren
*tabelle einheitlich färben
*