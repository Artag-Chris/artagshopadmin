export const servicioData = [{
    ID_SERVICIO: 1,
    FECHA_INSERCION: "2020-01-01",
    FECHA_ENTREGA: "2020-02-20",
    ID_MENSAJERO:1,
    ID_ORDEN:1,
    COPAGO:0,
    ID_DIRECCION:1,
    FECHA_ESPERADA_ENTREGA: "2020-02-20",
    ESTADO: "PENDIENTE",
    ID_USUARIO: 1,
    ID_EPS: 1,
    ID_ESTABLECIMIENTO: 1,
    CICLO_FORMULA_ACTUAL: 1,
    CICLO_FORMULA_TOTAL: 1, 
},
{
    ID_SERVICIO: 2,
    FECHA_INSERCION: "2020-01-01",
    FECHA_ENTREGA: "2020-02-20",
    ID_MENSAJERO:1,
    ID_ORDEN:1,
    COPAGO:0,
    ID_DIRECCION:1,
    FECHA_ESPERADA_ENTREGA: "2020-02-20",
    ESTADO: "PENDIENTE",
    ID_USUARIO: 1,
    ID_EPS: 1,
    ID_ESTABLECIMIENTO: 1,
    CICLO_FORMULA_ACTUAL: 1,
    CICLO_FORMULA_TOTAL: 1,
},
]

export const ordenData = [{
    ID_ORDEN: 1,
    NUMERO_ORDEN: "123456789",
    FECHA_ESPERADA_ORDEN: "2020-02-20",
    AUTORIZACION: true,
    MEDICAMENTO:"Acetamenufen",
    FORMA_FARMACEUTICA:"Tableta",
    CANTIDAD:1,
    CIE_10:"CIE 10",
    DIAGNOSTICO:"Diagnostico",
    CUM:"CUM",
    PROFESIONAL:"Juan Galliard",
    ESPECIALIDAD:"General",
    FECHA_ORDEN: "2020-02-20",
    FECHA_VENCIMIENTO_ORDEN: "2020-03-20",
    TIPO_ORDEN :"ORDEN DE SERVICIO"
},{
    ID_ORDEN: 2,
    NUMERO_ORDEN: "223456789",
    FECHA_ESPERADA_ORDEN: "2020-02-20",
    AUTORIZACION: true,
    MEDICAMENTO:"Acetamenufen",
    FORMA_FARMACEUTICA:"Tableta",
    CANTIDAD:1,
    CIE_10:"CIE 10",
    DIAGNOSTICO:"Diagnostico",
    CUM:"CUM",
    PROFESIONAL:"Juan Galliard",
    ESPECIALIDAD:"General",
    FECHA_ORDEN: "2020-02-20",
    FECHA_VENCIMIENTO_ORDEN: "2020-03-20",
    TIPO_ORDEN :"ORDEN DE SERVICIO"

}
]
export const detalleOrdenData = [{
    ID_PRESCRIPCION: 1,
    NOMBRE: "Acetamenufen",
    AUTORIZACION: true,
    FORMA_FARMACEUTICA:"Tableta",
    CANTIDAD:1,
    TIPO:"PRESCRIPCION",
    ID_ORDEN:1,
},{
    ID_PRESCRIPCION: 2,
    NOMBRE: "Acetamenufen",
    AUTORIZACION: true,
    FORMA_FARMACEUTICA:"Tableta",
    CANTIDAD:1,
    TIPO:"PRESCRIPCION",
    ID_ORDEN:2,
}
]