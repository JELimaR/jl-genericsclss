import Country from './Country';

export interface ILocality {
	id: number;
	countryId?: number;
	population: number;
}

export default class Locality {
	private _id: number;
	private _country: Country;
	private _population: number;

	constructor(il: ILocality, c: Country) {
		this._id = il.id;
		this._population = il.population;
		this._country = c;
	}

	get id(): number {return this._id}
	get population(): number {return this._population}
	get ILocality(): ILocality {
		return {
			id: this._id,
			countryId: this._country.id,
			population: this._population
		}
	}
}