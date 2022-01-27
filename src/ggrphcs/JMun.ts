import { JRegionMapInfo } from './Map/RegionInterfaces';
import { JRegionMap } from './Map/RegionClasses';

interface IJMunInfo {
	name: string;
	map: JRegionMapInfo;
}

export class JMun {

	private _name: string;
	private _map: JRegionMap;//?
	
	private _unis: JUni[] = [];
	constructor(ent: IJMunInfo) {
		this._name = ent.name;
		this._map = ent.map;
	}
}

interface JUniInfo {
	name: string;
	map: JRegionMapInfo;
}

export class JUni {

	private _name: string;
	private _map: JRegionMap;//?
	
	constructor(ent: JUniInfo) {
		this._name = ent.name;
		this._map = ent.map;
	}
}