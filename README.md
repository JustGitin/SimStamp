# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## Ideas and features that are still open or do not currently work

- Der Timer welcher die vergangene Zeit errechnet soll in der Tabelle in der untersten Spalte angezeigt werden und an dem Eintrag angebunden werden. Meine Idee wäre es diese vergangene Zeit an die newEntryID anzuhängen.
- Dieser Timer hat funktioniert seit dem hinzufügen des States für die Tabelle nicht mehr ordnungsgemäß und zeigt durations wie 0:126:33 an (State ist nur die Vermutung)
- Die Vergangene Zeit welche aus dem startStamp und dem stopStamp berechnet wird und anschließend in der Tabelle angezeigt wird eintspricht nicht der tatsächlich vergagenen Zeit(rechnet vielleicht mit dem zu beginn initialisierten Wert oder wird von einem anderen Stempel überschrieben)

## Ideas for changes
- Der Eintrag soll schon beim Starten gemacht werden, jedoch wird hier noch kein StopStamp angezeigt sondern ein "waiting for submission", welcher beim stoppen nachgetragen wird. 
- Der Timer soll in der Spalte "Vergangene Zeit" nach anklicken des Startbuttons hochzählen und beim Stoppen einen Staatischen Eintrag hinterlassen. 
- Zeiten sollten auch zwischen den Einträgen getrackt werden bzw beim stoppen soll der nächste Timer bereits beginnen zu laufen
   

Zeitenkonto das plus und minus Stunden trackt und diese ebenfalls ausgibt, sodass man angeben kannn wie viele stunden am Tag oder in der Woche man arbeiten möchte und wie viel man tatsächlich noch offen hat

Wenn ich nach der Vergangenen Zeit filtern möchte, werden mir nur die Millisekunden angezeigt bzw. die formatierung greift nicht
Nachtragen der Zeiteinträge berechnet nicht die vergangene Zeit sondern lässt beliebige Millisekundenwerte eintragen
Filter müssen eingegrenzt werden da man bei der StartUhrzeit auch das Datum auswählen kann was separat angezeigt wird
Sobald ein Eintrag gemacht wurde, soll die Tabelle zu diesem Eintrag springen
Zeiten werden nach Datum welches angegängt ist sortiert