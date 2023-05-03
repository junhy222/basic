import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function AppJSX() {
  const name = 'Elly';
  const list = ['milk', 'banana', 'apple'];
  return (
    <Fragment>
      <h1 className='orange'>{`Hello ${name}`}</h1>
      <h2>hi</h2>
      <ui>
        {
          list.map(item => <li>{item}</li>)
        }
      </ui>
      <p>{name}</p>
    </Fragment>
  );
}

export default AppJSX;
