import Adder from '../Adder';
import Finder from '../Finder';
import ToggleLiked from '../ToggleLiked';
import ItemList from '../ItemList';
import Stats from '../Stats';
import { StoreProvider } from '../../utils/store';
import React from 'react'

function App() {
  return (
    <StoreProvider>
      <div className="container col col-lg-6">
        <Stats />
        <div className="d-flex">
          <Finder />
          <ToggleLiked />
        </div>
        <ItemList />
        <Adder />
      </div>
    </StoreProvider>
  );
}

export default App;
