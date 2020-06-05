import React from 'react';
import logo from './logo.svg';
import './App.css';

import ForceGraph2D from 'react-force-graph-2d'

import data from './assets/data.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Below is the interactive <b>Web of Interconnectivity</b> for Edgar Lee Masters' <em>Spoon River Anthology</em>.</p>
        <a
          className="App-link"
          href="https://spoonriver.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back to main site &rarr;
        </a>
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
            const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

            ctx.fillStyle = 'rgba(7, 60, 83, .05)';
            ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

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
