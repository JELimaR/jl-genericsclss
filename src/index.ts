import fs from 'fs';
import ElementManager from './ggrphcs/ElementManager'
// import * as turf from '@turf/turf';

import {loadCountriesData} from './prb/DataManagment';
import Country from './prb/Country';
import Locality from './prb/Locality';

const lDDLC = (n: number, lug: number): number => {
	const val: number = Math.pow(10, lug);
	return Math.round(n*val)/val;
}

const myLocalString = (n: number): string => {
	return lDDLC(n,3).toLocaleString('de-DE');
}

console.log('init');

let geoDataDir: string = __dirname + '/../GeoData/';
let countriesFile: string = geoDataDir + 'countries.json';

let arr: Country[] = loadCountriesData(countriesFile)

let country = arr[9];

console.log()
console.log('id', country.id)
console.log('sup', myLocalString(country.sup))
console.log('dens', myLocalString(country.dens))
console.log('pop', myLocalString(country.population))
console.log('localpop', myLocalString(country.localpop))
//console.log(country)
/*
arr.sort((a: Country, b: Country) => b.sup - a.sup)
arr.forEach((c: Country) => {
	console.log(c.id,'sup:', lDDLC(c.sup,3));
})
console.log();

let totalpop: number = 0;
let totalsup: number = 0;
arr.sort((a: Country, b: Country) => b.population - a.population)
arr.forEach((c: Country) => {
	console.log(c.id,'pop:', c.population);
	totalpop += c.population;
	totalsup += c.sup;
})
console.log()
console.log('totalpop: ', totalpop)
console.log('totalsup: ', totalsup)
console.log('totalDens: ', totalpop/totalsup);
*/
console.log('----------------------------------------------')
const em = ElementManager.instance;
em.init();
console.log(em._world)