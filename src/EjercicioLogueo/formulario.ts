*/
private refFormulario: string;
private datosFormulario: FormData;
private datosTranformadosObxeto:any;
constructor(referencia:string){

}
public metodoAccionFormulario(){
this.metodoRefformulario()
this.metodoDatosFormulario()
this.metodoPreparandoObxetoEnvio()
}
private metodoRefFormulario(){
}
private metodoDatosFormulario(){
}
private metodoDatosObxetoEnvio (){
    let datosFormArrayArrays = this.datosFormulario.entries();
    this.datosFormTranformadosObxecto = obxect.formEntries (datosFormArrayArrays);
}
get datosFormTranformadosObxecto(){
    return datosFormTranformadosObxecto; 
}