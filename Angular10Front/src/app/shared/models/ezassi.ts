export class Ezassi{
    _id?:number;
    asignee:string;
    workflow:string;
    score:number;
    summary:string;
    user:string;
    image:string;
 
    constructor(asignee:string, workflow:string, score:number, summary:string, user:string, image:string){
        this.asignee = asignee;
        this.workflow = workflow;
        this.score = score;
        this.summary = summary;
        this.user = user;
        this.image = image;

    }
}