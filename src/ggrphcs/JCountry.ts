import JHistoricState from './JHistoricState';
import JState from './JState';
import { JCountryMap } from './Map/RegionClasses';
import { JCountryMapInfo } from './Map/RegionInterfaces';

interface IJCountryInfo {
	name: string;
	map: JCountryMapInfo;
}

export default class JCountry {

	private _name: string;
	private _map: JCountryMap;
	private _states: JState[] = [];
	private _historicStates: JHistoricState[] = [];

	constructor(ent: IJCountryInfo) {
		this._name = ent.name;
		this._map = ent.map;
	}

	get name(): string { return this._name }
}