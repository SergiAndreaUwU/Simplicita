export interface IResponse{

    cod:any;
    desc_exp:any;
    ref:any;
    tipo_exp:any;
    unidad:any;
    unidad_2:any;
    operador:any;
    correo:any;
    web:any;
    primera_pub:any;
    tipo_cont:any;
    entidad:any;
    plazo:any;
    fecha_inicio:any;
    duracion:any;
    fecha_final:any;
    categorias:any;
    anexos:any;
    avisos:any
}

// There is not much sense using interfaces when you assign data types as any,but if I had the 
// documentation, I would have changed data types as appropriate but since I don't know 
// which data type I'm receiving, I'm using any.