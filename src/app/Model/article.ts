export class Article {
    public Id :number;
    public Nom: string;
    public Texture: string;
    public Grammage: number;
    public Couleur: string;

    public constructor (data?){
        this.setValue(data);

    }
    setValue (data?){
    if (data == null) return;
    if (data.hasOwnProperty('Id')) this.Id = data.Id;
    if (data.hasOwnProperty('Nom')) this.Nom = data.Nom;
    if (data.hasOwnProperty('Texture')) this.Texture = data.Texture;
    if (data.hasOwnProperty('Grammage')) this.Grammage = data.Grammage;
    if (data.hasOwnProperty('Couleur')) this.Couleur= data.Couleur;
    }
    getId ()
    {
        return (this.Id);
    }
    setId(a:number,data){
        if (data == null) return;
        if (data.hasOwnProperty('Id')) this.Id = a;
    }
    
}
