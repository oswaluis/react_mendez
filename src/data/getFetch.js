const stock = [
	{id: '1', nombre: "vogue" , tipo: "remera" , precio: 1299, cantidad: 10,  talle: "S", img: "/assets/img/foto4.png"},
	{id: '2', nombre: "vogue" , tipo: "remera" , precio: 1299, cantidad: 11,  talle: "M"  , img: "/assets/img/foto4.png"},
	{id: '3', nombre: "vogue" , tipo: "remera" , precio: 1299,  cantidad: 1, talle: "L" ,img: "/assets/img/foto4.png"},
	{id: '4', nombre: "vogue" , tipo: "remera" , precio: 1299,  cantidad: 12, talle: "XL" ,img: "/assets/img/foto4.png"},
	{id: '5', nombre: "colores" , tipo: "remera" , precio: 1299, cantidad: 21,  talle: "S" ,img: "/assets/img/foto17.png"},
	{id: '6', nombre: "colores" , tipo: "remera" , precio: 1299,  cantidad: 11, talle: "M" ,img: "/assets/img/foto17.png"},
	{id: '7', nombre: "colores" , tipo: "remera" , precio: 1299, cantidad: 10,  talle: "L" ,img: "/assets/img/foto17.png"},
	{id: '8', nombre: "colores" , tipo: "remera" , precio: 1299, cantidad: 1,  talle: "XL" ,img: "/assets/img/foto17.png"},
	{id:' 9', nombre: "ACDC" , tipo: "remera" , precio: 1499,  cantidad: 1, talle: "S" ,img: "/assets/img/remeraACDC.png"},
	{id: '10', nombre: "ACDC" , tipo: "remera" , precio: 1499, cantidad: 1,  talle: "M" ,img: "/assets/img/remeraACDC.png"},
	{id:' 11', nombre: "ACDC" , tipo: "remera" , precio: 1499,  cantidad:1 , talle: "L" ,img: "/assets/img/remeraACDC.png"},
	{id: '12', nombre: "ACDC" , tipo: "remera" , precio: 1499, cantidad:1 ,  talle: "XL" ,img: "/assets/img/remeraACDC.png"},
	{id: '13', nombre: "rose" , tipo: "remera" , precio: 1099,  cantidad:1 , talle: "S" ,img: "/assets/img/remeraRose.png"},
	{id: '14', nombre: "rose" , tipo: "remera" , precio: 1099,  cantidad:1 , talle: "M" ,img: "/assets/img/remeraRose.png"},
	{id: '15', nombre: "rose" , tipo: "remera" , precio: 1099, cantidad:1 ,  talle: "L" ,img: "/assets/img/remeraRose.png"},
	{id: '16', nombre: "rose" , tipo: "remera" , precio: 1099,  cantidad:1 , talle: "XL" ,img: "/assets/img/remeraRose.png"},
	{id: '17', nombre: "body gris" , tipo: "body" , precio: 999, cantidad:1 ,  talle: "U" ,img: "/assets/img/foto10.png"},
	{id: '18', nombre: "body crema" , tipo: "body" , precio: 999,  cantidad:1 , talle: "U" ,img: "/assets/img/foto9.png"},
	{id: '19', nombre: "body naranja" , tipo: "body" , precio: 999,  cantidad:1 , talle: "U" ,img: "/assets/img/foto19.png"},
	{id: '20', nombre: "top celeste" , tipo: "top" , precio: 999,  cantidad:1 , talle: "U" ,img: "/assets/img/foto11.png"},
	{id: '21', nombre: "top celeste" , tipo: "top" , precio: 999,  cantidad:1 , talle: "U" ,img: "/assets/img/foto3.png"},
	{id:' 22', nombre: "top pasion" , tipo: "top" , precio: 999,  cantidad:1 , talle: "U" ,img: "/assets/img/foto12.png"},
	{id: '23', nombre: "top pasion" , tipo: "top" , precio: 999,  cantidad:1 , talle: "U" ,img: "/assets/img/foto13.png"},
]

export const getFetch = new Promise ((resolve, reject)=>{
    let condition = true
    if (condition){
        setTimeout(() => {
            resolve(stock)
            
        }, 3000);
    }else{
        reject('400 not found')
    }
})

export const getFetchOne = new Promise ((resolve, reject)=>{
    let condition = true
    if (condition){
        setTimeout(() => {
            resolve(stock)
            
        }, 3000);
    }else{
        reject('400 not found')
    }
})