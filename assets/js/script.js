class Multimedia{
    constructor(url){
        let _url = url
        this._getUrl = ()=> _url
        this._setUrl = (url) => _url = url
    }

    get url() {
        return this._getUrl()
    }

    set url(url) {
         this._setUrl(url)
    }

    setInicio = () =>{
        console.log(`Este método es para realizar un cambio en la URL del video`);
    }
}

class Reproductor extends Multimedia {
    constructor(url,id){
        super(url)
        let _id = id
        this._getId = ()=> _id
        this._setId = (id) => _id = id
    }
    get id() {
        return this._getId()
    }

    set id(id) {
         this._setId(id)
    }
    
    setInicio = () =>{
        //agrega un tiempo al inicio de la URL 
    }
    
    playMultimedia = () =>{
        //llama a la iife
       return iife.funcionPublica(this.url,this.id)
    }

}

const iife = (()=>{    
    const funcionPrivada = (url,id) =>{
        //mostrar video en HTML
         $(`#${id}>iframe`).attr("src",url)
        
    }
    return{
        funcionPublica : (url,id) => {
            funcionPrivada(url,id)
        }
    }
})()

const testMulti = new Reproductor("https://www.youtube.com/watch?v=3a0I8ICR1Vg","peliculas")

testMulti.playMultimedia()