let products = [
    {
        id: "1",
        name: "transistores",
        categoria: "componentes",
        stock: "100",
        price: "311.95",
        img: "/public/assets/images/transistores.webp",
        descripcion:"Pack 5x Transistor 2n3904 Npn 40v 200ma To92 Arduino",
        detalle:"Pack 5 unidades.El 2N3904 es un transistor con polaridad NPN que utiliza las propiedades del silicio para amplificar señales de voltaje o corriente. Este transistor es de propósito general y esta diseñado para aplicaciones lineales y de conmutación, es utilizado comúnmente como amplificador de media potencia."
    },
    {
        id: "2",
        name: "resistencias",
        categoria: "componentes",
        stock: "100",
        price: "1090.5",
        img: "/public/assets/images/resistencias.webp",
        descripcion: "Kit 220 Resistencias 5% Valores Diversos Ideal Arduino Pack",
        detalle:
            "Son 10 unidades de cada uno de los 22 modelos abajo especificados.Pack de 220 resistencias variadas ideal para armar tus circuitos electrónicos. Probar y aprender facilmente con tu Arduino o proyecto con microcontroladores.",
    },
    {
        id: "3",
        name: "capacitores",
        categoria: "componentes",
        stock: "100",
        price: "1416",
        img: "/public/assets/images/capacitores.webp",
        descripcion:"10 Unidades Capacitor Electrolitico 470x35 Filtro 470uf 35v",
        detalle:"IMPORTANTE: El precio publicado corresponde a 10 Unidades de Capacitor Electrolitico 470uf x 35v. Hasta agotar stock."
    },
    {
        id: "4",
        name: "circuitos integrados",
        categoria: "componentes",
        stock: "100",
        price: "2581",
        img: "/public/assets/images/circuitos-integrados.webp",
        descripcion:"Integrado Ch340g Smd Pack X10 Unidades",
        detalle:"El chip CH340G proporciona una interfaz serial UART a través del bus USB. Se usa para poder conectar cualquier placa que tenga una UART a una computadora a través del bus USB."
    },
    {
        id: "5",
        name: "plaqueta virgen",
        categoria: "componentes",
        stock: "100",
        price: "2400",
        img: "/public/assets/images/plaqueta-virgen.webp",
        descripcion:"Placa Virgen Fr4 Fibra De Vidrio Simple Faz Para Pcb 20x20cm",
        detalle:"Placa virgen de fibra de vidrio para fabricar circuitos impresos.Tipo: FR4 (Fibra de vidrio - epoxi) - Simple faz.Espesor Cobre: 1oz/35um.Espesor sustrato: 1,6mm.Medida: 20x20cm"
    },
    {
        id: "6",
        name: "Arduino Nano",
        categoria: "arduino",
        stock: "879",
        price: "3899",
        img: "/public/assets/images/arduino-nano.webp",
        descripcion: "Atmel Nano V3.0 Atmega328 Usb Compatible Ch340",
        detalle: " { Producto: ATmega328P Nano con Micro USB - CH340 (Sin Cable USB y Sin Soldar) Placa compacta con chip ATmega328P ideal para trabajos con Protoboard. Mismas funciones que el Arduino Uno. Funciona con un cable USB Micro."
    },
    {
        id: "7",
        name: "Wemos Mini D1",
        categoria: "arduino",
        stock: "12",
        price: "1699.99",
        img: "/public/assets/images/nodemcu.webp",
        descripcion: "Wemos Mini D1 Wifi Nodemcu Esp8266 Esp12f 4mb Uart Arduino",
        detalle: "El Wemos D1 mini ESP8266 es un modulo de desarrollo similar al Arduino, especialmente orientada al Internet of Things (IoT).Basado en ESP8266. Integrado por un potente procesador de 32 bits más potente que el Arduino Due y con conectividad WiFi B/G/N Para desarrollar aplicaciones se puede utilizar tanto lenguaje de Arduino (C) con su IDE y sus librerias como tambien LUA Scripting."
    },
    {
        id: "8",
        name: "Nodemcu Esp32",
        categoria: "arduino",
        stock: "1650",
        price: "4285",
        img: "/public/assets/images/esp32.webp",
        descripcion: "Nodemcu Esp32 Wifi + Bluetooth 4.2 Iot Wroom Esp32s Arduino",
        detalle: "Esta placa de desarollo te permite hacer proyectos con la plataforma ESP32. Tiene WiFi y Bluetooth 4.2 gracias al procesador doble nucleo Tensilica Xtensa LX6. La plataforma ESP32 ofrece WiFi, Bluetooth y BLE. Tiene un CPU de dos nucleos de hasta 240Mhz que se pueden controlar independientemente. Ademas integra internamente una gran cantidad de perifericos incluyendo: sensores tactiles capacitivos, sensor de efecto Hall, amplificadores de bajo ruido, interfaz para tarjeta SD, Ethernet, SPI de alta velocidad, UART y I2S e I2C."
    },
    {
        id: "9",
        name: "Placa Desarrollo Raspberry Pi Pico Rp2040",
        categoria: "arduino",
        stock: "1695",
        price: "3839",
        img: "/public/assets/images/pico.webp",
        descripcion: "Placa Desarrollo Raspberry Pi Pico W Rp2040 Con Wifi",
        detalle: "El nuevo Raspberry Pi Pico W es una versión inalámbrica de la placa basada en RP2040, que agrega conectividad WiFi 802.11n de 2,4 GHz.La adición de conectividad inalámbrica abre el Pico W a una amplia gama nueva de proyectos, como lecturas de sensores remotos, control remoto, domótica, mini servidores web, control de pin GPIO inalámbrico y mucho, mucho más. Disponemos de pines GPIO para entradas / salidas digitales, modulación de ancho de pulso (PWM) y para protocolos de comunicación especializados como I2C, SPI, UART / Serial."
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
        }, 100);
    });
};
