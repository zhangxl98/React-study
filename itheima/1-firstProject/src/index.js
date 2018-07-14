const React = require('react');
const ReactDom = require('react-dom');

const odiv = <div id="mydiv" title="This is a div">
              这是一个div
              <h1>这是一个h1</h1>
            </div>

ReactDom.render(odiv,document.getElementById('app'))
