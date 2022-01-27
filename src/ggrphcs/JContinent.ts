import JCountry from "./JCountry";
import JHistoricState from "./JHistoricState";
import { JContinentMap } from "./Map/RegionClasses";
import { JContinentMapInfo } from "./Map/RegionInterfaces";

interface IJContinentInfo {
	name: string;
	map: JContinentMapInfo;
}

export default class JContinent {

	private _name: string;
	private _map: JContinentMap;

	
	private _countries: JCountry[] = [];
	private _historicStates: JHistoricState[] = [];

	constructor(ent: IJContinentInfo) {
		this._name = ent.name;
		this._map = ent.map;
	}
}