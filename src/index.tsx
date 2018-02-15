import * as React from 'react';
import * as ReactDom from 'react-dom';
import { App } from './app';

const element = document.createElement('div');
document.body.appendChild(element);
ReactDom.render(<App />, element);
