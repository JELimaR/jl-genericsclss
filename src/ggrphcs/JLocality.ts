interface IJLocalityCreator {
	pop: number;
}

export default class JLocality {
	_pop: number;
	constructor(lc: IJLocalityCreator) {
		this._pop = lc.pop;
	}

}

interface IJCityCreator extends IJLocalityCreator {}

export class JCity extends JLocality {
	constructor(cc: IJCityCreator) {
		super(cc)
	}

}

interface IJTownCreator extends IJLocalityCreator {}

export class JTown extends JLocality {
	constructor(tc: IJTownCreator) {
		super(tc)
	}

}