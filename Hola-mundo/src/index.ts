let mensaje: string = "mensaje"

mensaje = "chanchito feliz"

mensaje = "chao mundo"
console.log(mensaje)
console.log(typeof [])

/**
 * number
 * string
 * boolean
 * undefined
 * object
 * function
 * 
 * tipos de TS
 * any  - recomendacion tratar de no usarlo
 * unkonwn
 * never
 * arrays
 * tuplas
 * Enums
 * 
 * tipos inferidos
 * 
 */


let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extintos: boolean = true

function chanchitoFeliz(config: any){
    return config
}


let animales: string[] = ['chanchito', 'feliz', 'felipe']
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

//nums.map(x => x.)// el autocompletado usgiere tipos de datos.

let tupla: [number, string[]] = [1, animales]

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'}

const variabel1 = Talla.Grande
console.log(variabel1)

const enum Loadingstate { Idle, Loading, Success, Error}
const estado = Loadingstate.Success

type Direccion = {
    numero: number
    calle: string
    pais: string
}
type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

const objeto: Persona= { 
    id: 1,
    nombre: 'Hola Mundo',
    talla: Talla.Chica ,
    direccion: {
        numero: 1,
        calle: 'Siempre Vacio',
        pais: 'Chanchitolandia'
    }
}

const arr: Persona[] = []