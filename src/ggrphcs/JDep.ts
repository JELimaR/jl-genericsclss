import { JRegionMapInfo } from './Map/RegionInterfaces';
import { JRegionMap } from './Map/RegionClasses';
import { JMun } from './JMun'

interface IJDepInfo {
	name: string;
	map: JRegionMapInfo;
}

export default class JDep {

	private _name: string;
	private _map: JRegionMap;
	
	private _muns: JMun[] = [];
	constructor(ent: IJDepInfo) {
		this._name = ent.name;
		this._map = ent.map;
	}
}