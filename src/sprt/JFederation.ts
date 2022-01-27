import JContinent from '../ggrphcs/JContinent';
import JCountry from '../ggrphcs/JCountry';
import JLocality from '../ggrphcs/JLocality';

export default class JFederation {
	_country: JCountry;
	_institutions: Map<string, JInstitution> = new Map<string, JInstitution>();
	constructor(country: JCountry) {
		this._country = country;
	}

	addInstitution(inst: JInstitution) {
		this._institutions.set(inst.id, inst);
	}
}

export type TypeJCategory = '1' | '2'; // ver

type TypeTeamList = {[K in TypeJCategory]?: JTeam};

class JInstitution {
	_id: string = Math.floor(Math.random()*1000000).toString();
	_local: JLocality | undefined;
	_teams: TypeTeamList = {};
	constructor() {

	}

	get id(): string {return this._id}

}

class JConfederation {
	_continent: JContinent | undefined;
	_federations: Map<string, JFederation> = new Map<string, JFederation>();

	constructor() {}

	addFederation(c: JCountry) {
		if ( !!this._federations.get(c.name) ) throw new Error(`ya existe una fed en ${c.name}`)
		this._federations.set(c.name, new JFederation(c))
	}
}

class JTeam {
	constructor() {}
}