let products = [
    {
        id: "1",
        name: "transistores",
        categoria: "componentes1",
        stock: "100",
        price: "311.95",
        img: "/src/assets/images/transistores.webp",
        descripcion:"Pack 5x Transistor 2n3904 Npn 40v 200ma To92 Arduino",
        detalle:"Pack 5 unidades.El 2N3904 es un transistor con polaridad NPN que utiliza las propiedades del silicio para amplificar señales de voltaje o corriente. Este transistor es de propósito general y esta diseñado para aplicaciones lineales y de conmutación, es utilizado comúnmente como amplificador de media potencia."
    },
    {
        id: "2",
        name: "resistencias",
        categoria: "componentes1",
        stock: "100",
        price: "1090.5",
        img: "/src/assets/images/resistencias.webp",
        descripcion: "Kit 220 Resistencias 5% Valores Diversos Ideal Arduino Pack",
        detalle:
            "Son 10 unidades de cada uno de los 22 modelos abajo especificados.Pack de 220 resistencias variadas ideal para armar tus circuitos electrónicos. Probar y aprender facilmente con tu Arduino o proyecto con microcontroladores.",
    },
    {
        id: "3",
        name: "capacitores",
        categoria: "componentes1",
        stock: "100",
        price: "1416",
        img: "/src/assets/images/capacitores.webp",
        descripcion:"10 Unidades Capacitor Electrolitico 470x35 Filtro 470uf 35v",
        detalle:"IMPORTANTE: El precio publicado corresponde a 10 Unidades de Capacitor Electrolitico 470uf x 35v. Hasta agotar stock."
    },
    {
        id: "4",
        name: "circuitos integrados",
        categoria: "componentes2",
        stock: "100",
        price: "2581",
        img: "/src/assets/images/circuitos-integrados.webp",
        descripcion:"Integrado Ch340g Smd Pack X10 Unidades",
        detalle:"El chip CH340G proporciona una interfaz serial UART a través del bus USB. Se usa para poder conectar cualquier placa que tenga una UART a una computadora a través del bus USB."
    },
    {
        id: "5",
        name: "plaqueta virgen",
        categoria: "componentes2",
        stock: "100",
        price: "2400",
        img: "/src/assets/images/plaqueta-virgen.webp",
        descripcion:"Placa Virgen Fr4 Fibra De Vidrio Simple Faz Para Pcb 20x20cm",
        detalle:"Placa virgen de fibra de vidrio para fabricar circuitos impresos.Tipo: FR4 (Fibra de vidrio - epoxi) - Simple faz.Espesor Cobre: 1oz/35um.Espesor sustrato: 1,6mm.Medida: 20x20cm"
    },
];

export const getProductsByCategory = (category) => {
    return new Promise((res) => {
        const productos = products.filter(
            (product) => product.categoria === category
        );
        setTimeout(() => {
            res(productos);
        }, 1500);
    });
};

export const getProducts = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products);
        }, 2000);
    });
};

export const getProductId = (itemId) => {
    return new Promise((res) => {
        const findProductId = products.find((product) => product.id === itemId);
        setTimeout(() => {
            res(findProductId);
        }, 1500);
    });
};
