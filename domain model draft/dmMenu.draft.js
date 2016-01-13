import { JsonSerializable } from 'JsonSerializable.draft.js';

export class Ingrediente extends JsonSerializable {
	constructor() {		
		super();
		
		this.id = null;		
		this.nome = null;
		this.descrizione = null;
		
		this.fromJSON(...arguments);
		
		this.type = "Ingrediente";
		
		return this;
	}
}

export class Ricetta extends JsonSerializable {
	constructor() {		
		super();
		
		this.id = null;
		//this.idPietanza = null; // legame 2-way Pietanza <--> Ricette?		
		this.nome = null;
		this.descrizione = null;
		this.prezzo = null;
		this.ingredienti = [];
		
		this.fromJSON(...arguments);
		
		this.type = "Ricetta";
		
		return this;
	}
}

export class Pietanza extends JsonSerializable {
	constructor() {		
		super();
		
		this.id = null;		
		this.nome = null;
		this.descrizione = null;
		this.ricette = []; // ciascuna pietanza può avere più ricette, es. Cheesburger/Cheesburger Tuscany/ecc.
		
		this.fromJSON(...arguments);
		
		this.type = "Pietanza";
		
		return this;
	}
}

export class Ordine extends JsonSerializable {
	constructor() {		
		super();
		
		this.id = null;		
		this.idCliente = null;
		this.pietanze = [];
		
		this.fromJSON(...arguments);
		
		this.type = "Ordine";
		
		return this;
	}
}

export class Cliente extends JsonSerializable {
	constructor() {		
		super();
		
		this.id = null;		
		this.nome = null;
		this.email = null;
		
		this.fromJSON(...arguments);
		
		this.type = "Cliente";
		
		return this;
	}
}
