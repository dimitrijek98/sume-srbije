# sume-srbije
Projekat na ovom repozitorijumu predstavlja klijentski deo nase aplikacije. Ovaj deo aplikacije sluzi za ppregled podataka iz baze i njohovo oblikovanje u zeljene graficke statisticke prikaze. Postoje prikazi o posumljavanju cele republike u toku godine, seci u konkretnim oblastima u toku konkretnog meseca, kao i detaljni podaci za svaki region ponaosob.
Pri pokretanju aplikacije odmah se dobijaju podaci o protekloj godini.
Prvi statisticki prikaz je posumljavanje na celoj teritoriji rebulike u toku prosle godine, ovo je implementirano u NewForests.js fajlu.
Drugi statisticki prikaz je seca u svim regionima republike u toku konkretnog meseca prosle godine, ovo je implementirano u Deforestation.js fajlu.
Treci statisticki prikaz predstavlja podatke za konkretni region i sadrzi 3 graficka prikaza:
    -broj zasadjenih i posecenih stabala u konkretnoj regiji u toku prosle godine
    -broj zasadjenih i posecenih stabala za svako drvo iz te regije u toku prosle goidne
    -odnos povrsine na kojoj se sadilo i povrsine na kojoj se seklo u toku prosle godine.
Treci statisticki prikaz implementiran je u Regions.js fajlu.

Sve ove implementacije za komunikaciju sa backendom koriste SumeService.js fajl. Koriscenjem axios.get i axios.post metoda, vrsi se komunikacija sa backednom.


Statisitka se prikazuje za proslu godinu. Za potrebe testiranja novih unosa moguce je u api delu promeniti da se prikazuju podaci za ovu godinu. Vise o tome u README.md na sume-srbije-api.
Klijentska aplikacija se pokrece na http://localhost:3000.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
