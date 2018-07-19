export class Article {

    constructor(    public title: string , 
                    public link: string , 
                    public votes : number = 0
                ){ }
    
    public voteUp(){
        this.votes += 1;
    }

    public voteDown(){
        this.votes -= 1;
    }
}
