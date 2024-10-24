export namespace main {
	
	export class LogEntry {
	    timestamp: string;
	    message: string;
	    type: string;
	
	    static createFrom(source: any = {}) {
	        return new LogEntry(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.timestamp = source["timestamp"];
	        this.message = source["message"];
	        this.type = source["type"];
	    }
	}
	export class recipient {
	    surname: string;
	    otherNames: string;
	    email: string;
	
	    static createFrom(source: any = {}) {
	        return new recipient(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.surname = source["surname"];
	        this.otherNames = source["otherNames"];
	        this.email = source["email"];
	    }
	}

}

