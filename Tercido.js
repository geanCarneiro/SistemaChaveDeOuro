function Tercido(_nome, _preco, _medida){
    this.nome   = _nome;
    this.preco  = _preco;
    this.medida = _medida;
    
    this.precoAsString = function(){ 
        return 'R$ ' + this.preco.toFixed(2).replace('.', ',') + ' ' + this.medida 
    }
    
}