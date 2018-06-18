import React, { Component } from 'react';
import Header from '../Header/Header';
// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
    require('./HeroesPage.css'); // eslint-disable-line global-require
}
const heroeslist =  [12,11,12,1,2];

  export class HeroesPage extends Component{
      static getdefaultheroeslist () {
        return  [{ id: 11, name: 'Mr. Nice' },{ id: 12, name: 'Narco' },{ id: 13, name: 'Bombasto' },{ id: 14, name: 'Celeritas' },{ id: 15, name: 'Magneta' },{ id: 16, name: 'RubberMan' },{ id: 17, name: 'Dynama' },{ id: 18, name: 'Dr IQ' },{ id: 19, name: 'Magma' },{ id: 20, name: 'Tornado' }];
      }

      
    render() {
        const heoresarr = HeroesPage.getdefaultheroeslist();
    return(

        <div className="HeroesPage">
        <Header></Header>
        <h2>Heroes List Page </h2>
        {
            heoresarr.map(i=>{
                return <li  key={i.id}>{i.id} - {i.name}</li>;
            })
        }
        </div>
    );
    }
  }
  export default (HeroesPage);