import { JHistoricStateMap } from "./Map/RegionClasses";
import { JHistoricStateMapInfo } from "./Map/RegionInterfaces";


interface IJHistoricSateInfo {
	name: string;
	map: JHistoricStateMapInfo;
}

export default class JHistoricState {

	private _name: string;
	private _map: JHistoricStateMap;

	constructor(ent: IJHistoricSateInfo) {
		this._name = ent.name;
		this._map = ent.map;
	}
}