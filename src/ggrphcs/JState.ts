import { JStateMap } from "./Map/RegionClasses";
import { JRegionMapInfo } from "./Map/RegionInterfaces";


interface IJStateInfo {
	name: string;
	map: JRegionMapInfo;
}

export default class JState {

	private _name: string;
	private _map: JStateMap;

	constructor(ent: IJStateInfo) {
		this._name = ent.name;
		this._map = ent.map;
	}
}