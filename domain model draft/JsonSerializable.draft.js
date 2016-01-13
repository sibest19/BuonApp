export default class JsonSerializable {
	constructor(json) {
		this.fromJSON(json);
		return this;
	}
	fromJSON(json) {
		if (typeof json === 'string') {
			json = JSON.parse(json);
		}
        // controllo di stare assegnando un json dello stesso tipo della classe (se la classe ha la proprietà "type")
        if (this.hasOwnProperty("type") && !(json && json.hasOwnProperty("type") && json.type === this.type)) {
            throw "json non valido per essere assegnato a questa classe";
        }		
		for(var prop in json) {
			if (this.hasOwnProperty(prop)) {
				var val = json[prop];
				if (val && typeof val.toJSON === 'function') this[prop] = val.toJSON();
				else this[prop] = val;
			}
		}
		return this;
	}
	toJSON() { // chiamato automaticamente da JSON.stringify
		var json = {};
		for(var prop in this) {
			if (this.hasOwnProperty(prop)) {
				json[prop] = this[prop];
			}
		}
		// accetta gli argomenti opzionali di JSON.stringify
		// (es. mySerializable.toJSON(null,4) per formattarlo)
		return JSON.stringify(json, ...arguments);
	}
}
