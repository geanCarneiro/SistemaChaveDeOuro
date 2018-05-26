function DBTercido(){
    
    this.tercidos = new Array();
    
    this.add = function( _nome, _preco, _medida ){
        let nome   = ( _nome   ) ? _nome   : '';
        let preco  = ( _preco  ) ? _preco  : 0.0;
        let medida = ( _medida ) ? _medida : unidadeMedida.metros;

        this.tercidos.push( new Tercido( nome, preco, medida ) );
    }
}