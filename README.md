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


## Features that are still open or do not currently work
- Das Datum soll wie auch die Vergangene Zeit aus den Spalteneinträgen berechnet werden
- Sortierung nach vergangener Zeit


## Ideas for changes

- Zeitenkonto /überstunden und minusstunden/
- Nachtragen der Zeiteinträge berechnet nicht die vergangene Zeit sondern lässt beliebige Werte eintragen
- Filter eingegrenzen /StartUhrzeit noch mit Datum/
- Sobald ein Eintrag gemacht wurde, soll die Tabelle zu diesem Eintrag springen
- Zeiten werden nach Datum angehängtem Datum sortiert
- Bild mit Usernamen in den Dropdownbutton
- Das Datum soll anhand der Startuhrzeit von selbst ausgelesen werden

- Wenn ich zwei Zeiten Eintrage, soll die vergangene Zeit berechnet werden, wenn ich die vergangene Zeit angebe, dann berechnet er mir den anderen Stempel


