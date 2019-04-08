export class Feature {
    id: number;
	  name: string;
	  active: boolean;
	  enabled: boolean;
   
    constructor(options: {
                  id?: number,
                  name?: string,
                  active?: boolean,
                  enabled?: boolean } = {}) {
      this.id           = options.id === undefined ? null : options.id;
      this.name     = options.name || '';
      this.active    = !!options.active;
      this.enabled      = !!options.enabled;
    }
  }
  