import JWorld from "./JWorld";


export default class ElementManager {
	// singleton
	private static _instance: ElementManager;
	private constructor() {}
	static get instance(): ElementManager {
		if (!this._instance) {
			this._instance = new ElementManager();
		}
		return this._instance;
	}
	
	_world: JWorld | undefined;
	init() {
		console.log('init ElementManager');
		this._world = new JWorld()
	}
}
