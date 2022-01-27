import fs from 'fs';
import * as turf from '@turf/turf';

import Country from './Country';

const lDDLC = (n: number, lug: number): number => {
	const val: number = Math.pow(10, lug);
	return Math.round(n*val)/val;
}

interface ITownDataLoaded {id: number, population: number}
interface ICountryData {
	id: number;
	sup: number;
	Latitude: number[]
	Longitude: number[]
	population: number;
	cities: ITownDataLoaded[];
	langNative: string[];	
}

export const loadCountriesData = (countriesFile: string): any[] => {
	const data: string = fs.readFileSync(countriesFile, {encoding: 'utf-8'});
	let arr: ICountryData[] = JSON.parse(data);
	/*
	arr.forEach((icd: ICountryData) => {
		// corregir array cities:
		const ccopy: ITownDataLoaded[] = [...icd.cities];
		icd.cities = [ccopy[0]];
		let ok = icd.cities[0].population > ccopy[1].population;
		let idx: number = 1;
		while (ok && idx < ccopy.length) {
			if (ccopy[idx-1].population >= ccopy[idx].population) {
				icd.cities.push(ccopy[idx]);
			} else {
				ok = false;
			}
			idx++;
		}

	})
	*/
	let out: Country[] = [];
	arr.forEach((icd: ICountryData) => {
		out.push( new Country(icd) );
	})
	/*
	const id = 53;
	const cntry = arr[id-1];

	const cantPts = cntry.Latitude.length;
	let positions: turf.Position[] = [];
	for (let i=0; i<cantPts; i++) {
		let pos: turf.Position = [
			cntry.Longitude[i],
			cntry.Latitude[i]
		];
		positions.push(pos);
	}
	positions.push(positions[0]);

	const poly = turf.polygon([positions]);

	console.log('wturf:',turf.area(poly)/1000000)
	console.log('wmatlab:', cntry.sup)
	console.log('\ndens:', lDDLC(cntry.population/cntry.sup,3))
	console.log('POP:', cntry.population)
	*/
	
	return out;
}
