import * as atatus from 'atatus-spa';

import { createRoot } from 'react-dom/client';
import {MainView} from './components/main-view/main-view';

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      <div> <MainView /> </div>
    </div>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);


atatus.config('57bf944b90b24e52874f24fbec6a21de').install();
atatus.notify(new Error('Test Atatus Setup'));