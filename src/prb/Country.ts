import Locality, {ILocality} from './Locality';

export interface ICountry {
	id: number;
	sup: number;
	population: number;
	cities: ILocality[];
	langNative: string[];
}

export default class Country {

	private _id: number;
	private _sup: number;
	private _population: number;
	private _cities: Locality[] = [];
	private _langNative: string[];

	constructor(ic: ICountry) {
		this._id = ic.id;
		this._sup = ic.sup;
		this._population = ic.population;
		ic.cities.forEach((il: ILocality) => {
			const loc: Locality = new Locality(il, this);
			this._cities.push(loc);
		})
		this._langNative = [...ic.langNative];
	}

	get id(): number {return this._id}
	get sup(): number {return this._sup}
	get population(): number {return this._population}
	get dens(): number {return this._population/this._sup}
	get cities(): Locality[] {return this._cities}
	get localpop(): number {
		let out: number = 0;
		this._cities.forEach((l: Locality) => {
			out += l.population;
		})
		return out;
	}

	get ICountry(): ICountry {
		return {
			id: this._id,
			sup: this._sup,
			population: this._population,
			langNative: this._langNative,
			cities: this._cities.map((c: Locality) => c.ILocality)
		}
	}

}