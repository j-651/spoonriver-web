import React from 'react';
import logo from './assets/images/logo.svg';
import './App.sass';

import ForceGraph2D from 'react-force-graph-2d';

import data from './assets/data/currentData.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo" />
        <p>
          Below is the interactive <b>Web of Interconnectivity</b> for Edgar Lee
          Masters&apos; <em>Spoon River Anthology</em>.
        </p>

        <div className="links">
          <a
            href="//spoonriver.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Back to main site &rarr;
          </a>{' '}
          &nbsp; | &nbsp;{' '}
          <a
            href="//github.com/j-651/spoonriver-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            View/Contribute on GitHub &rarr;
          </a>
        </div>

        <footer>
          <p>
            An English literature project.
            <br />
            &copy; 2020 Jay Sella, Oscar Lloyd, and Nick Casertano. All RIghts
            Reserved.
            <br />
            Made with punctiliousness in the Washington, D.C. area.
            <br />
            Website built by{' '}
            <a href="//jaysella.dev" target="_blank" rel="noopener noreferrer">
              Jay Sella
            </a>
          </p>
        </footer>
      </header>

      <main className="App-main">
        <ForceGraph2D
          graphData={data}
          nodeAutoColorBy="group"
          linkColor={() => 'rgba(7, 60, 83, 1)'}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id;
            const fontSize = 16 / globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(
              (n) => n + fontSize * 0.2
            ); // some padding

            ctx.fillStyle = 'rgba(7, 60, 83, .05)';
            ctx.fillRect(
              node.x - bckgDimensions[0] / 2,
              node.y - bckgDimensions[1] / 2,
              ...bckgDimensions
            );

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = node.color;
            ctx.fillText(label, node.x, node.y);
          }}
        />
      </main>
    </div>
  );
}

export default App;
