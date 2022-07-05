// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  Timestamp,
  where,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA3h2QzBMq-s1gxhePjJsiXmCLPAh3QRKs",
  authDomain: "roraimabike-a6ef3.firebaseapp.com",
  projectId: "roraimabike-a6ef3",
  storageBucket: "roraimabike-a6ef3.appspot.com",
  messagingSenderId: "51852262733",
  appId: "1:51852262733:web:db13aaf7c9e10b77768b04",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export const testDB = () => {
  console.log(appFirestore);
};

// Funcion para traer todos los productos desde firestore
export const getProductos = async () => {
  const productsCollection = collection(appFirestore, "products");
  const productsSnapshot = await getDocs(productsCollection);
  let products = productsSnapshot.docs.map((product) => {
    return { ...product.data(), id: product.id };
  });
  return products;
};

// Funcion para traer productos de una categoria desde firestore
export const getProductosByCat = async (categoryId) => {
  const productsCollection = collection(appFirestore, "products");
  const catQuery = query(
    productsCollection,
    where("category", "==", categoryId && categoryId)
  );
  const productsSnapshot = await getDocs(catQuery);

  let products = productsSnapshot.docs.map((product) => {
    return { ...product.data(), id: product.id };
  });
  return products;
};

// Funcion que trae un producto por id
export const getSingleItem = async (id) => {
  const productRef = doc(appFirestore, "products", id);
  const product = await getDoc(productRef);
  return { ...product.data(), id: product.id };
};

// Funcion para importar datos desde un array de productos
export const exportDataToFirestore = async () => {
  const productos = [
    {
      id: "1a3adbff-e8b5-497c-baca-963b61cfd12f",
      title: "Mantenimiento Básico",
      price: 30000,
      description: "Desarmado de bicicleta, limpieza y engrasado de partes.",
      category: "mantenimiento",
      pictureUrl:
        "https://res.cloudinary.com/dlrsxizob/image/upload/c_pad,h_300,w_300/v1655752572/RoraimaBike/mant-basico_sbri1h.png",
      stock: 5,
      initial: 1,
    },
    {
      id: "9432fe3a-07ca-4ab8-bfb2-493b884ec014",
      title: "Mantenimiento Full",
      price: 45000,
      description:
        "Incluye mantenimiento básico y desarme de descarriladores y partes moviles para limpieza y engrasado",
      category: "mantenimiento",
      pictureUrl:
        "https://res.cloudinary.com/dlrsxizob/image/upload/c_pad,h_300,w_300/v1655752572/RoraimaBike/mant-full_w6o8xf.jpg",
      stock: 5,
      initial: 1,
    },
    {
      id: "a0448f71-933b-4190-a4b7-b0a268dc4d45",
      title: "Kit Protekt Full",
      price: 30000,
      description:
        "Adhesivo plastico ultraresistente. Protege tu bicicleta en las zonas mas criticas de impacto. Utilizamos materiales de alta resistencia, número 1 a nivel mundial, utilizada en gráficas profesionales automotrices, motos, ATV, Etc… Es un material muy superior al antiguo 3M que ya no se ocupa y que presentó tanto problemas de levante en la industria. Este producto  no es laminado y por ende no se separa el PVC del pegamento. Contamos con protectores Mates y Brillantes, elige según el acabado de cuadro o como quieras personalizar tu bicicleta",
      category: "protecciones",
      pictureUrl:
        "https://res.cloudinary.com/dlrsxizob/image/upload/c_pad,h_300,w_300/v1655752572/RoraimaBike/protekt-full.jpg",
      stock: 5,
      initial: 1,
    },
    {
      id: "86d4c13d-39ce-49f8-a124-d12dd151aeac",
      title: "Neumático Continental GrandPrix TT 700×23",
      price: 40000,
      description:
        "Aerodinámica y baja fricción con el pavimento, es lo que hace estas llantas las ideales para pruebas contra el cronómetro, un perfil refinado y materiales ligeros y resistentes permiten que toda la potencia producida por el ciclista se convierta en velocidad.",
      category: "repuestos",
      pictureUrl:
        "https://res.cloudinary.com/dlrsxizob/image/upload/c_pad,h_300,w_300/v1655752572/RoraimaBike/contigptt_tyu73k.jpg",
      stock: 5,
      initial: 1,
    },
    {
      id: "20f77219-e119-48f2-b9e8-78dea70e0007",
      title: "Cinta Supacaz Super Sticky Kush Star Fade – Neon Green",
      price: 20000,
      description:
        "Super Sticky Kush is the bar tape of choice for 3x World Champion Peter Sagan. Fusing performance and style, Supacaz delivers the only bar tape worth dreaming about. We boldly claim that Super Sticky Kush is the best bar tape ever. StarFade will transform any bike into a head turner with a blast of color and flashy graphics",
      category: "repuestos",
      pictureUrl:
        "https://res.cloudinary.com/dlrsxizob/image/upload/c_pad,h_300,w_300/v1655753353/RoraimaBike/supacaz_kvnslc.jpg",
      stock: 5,
      initial: 1,
    },
    {
      id: "b0f0727b-5052-4ffb-b7f5-20663d656803",
      title: "Kit Protekt Full-XL",
      price: 40000,
      description:
        "Adhesivo plastico ultraresistente. Protege tu bicicleta en las zonas mas criticas de impacto. Utilizamos materiales de alta resistencia, número 1 a nivel mundial, utilizada en gráficas profesionales automotrices, motos, ATV, Etc… Es un material muy superior al antiguo 3M que ya no se ocupa y que presentó tanto problemas de levante en la industria. Este producto  no es laminado y por ende no se separa el PVC del pegamento. Contamos con protectores Mates y Brillantes, elige según el acabado de cuadro o como quieras personalizar tu bicicleta",
      category: "protecciones",
      pictureUrl:
        "https://res.cloudinary.com/dlrsxizob/image/upload/c_pad,h_300,w_300/v1655752573/RoraimaBike/protekt-full-xl.png",
      stock: 5,
      initial: 1,
    },
    {
      id: "428f3a67-4314-43b9-b96e-047c88b21e0d",
      title: "Kit Protekt Deluxe",
      price: 90000,
      description:
        "Adhesivo plastico ultraresistente. Protege tu bicicleta en las zonas mas criticas de impacto. Utilizamos materiales de alta resistencia, número 1 a nivel mundial, utilizada en gráficas profesionales automotrices, motos, ATV, Etc… Es un material muy superior al antiguo 3M que ya no se ocupa y que presentó tanto problemas de levante en la industria. Este producto  no es laminado y por ende no se separa el PVC del pegamento. Contamos con protectores Mates y Brillantes, elige según el acabado de cuadro o como quieras personalizar tu bicicleta",
      category: "protecciones",
      pictureUrl:
        "https://res.cloudinary.com/dlrsxizob/image/upload/c_pad,h_300,w_300/v1655752572/RoraimaBike/protekt-deluxe.jpg",
      stock: 5,
      initial: 1,
    },
    {
      id: "8b21f8b9-b56d-459d-9c65-eaed821e611a",
      title: "Llanta Continental DerBaron Projekt Protection",
      price: 60000,
      description:
        "La llanta de MTB Der Baron Projekt de Continental es la mejor opción para practicar Enduro en su forma más cruda. Diseñado para manejar los single tracks más duros e intensos mientras rueda excepcionalmente rápido y brinda un agarre increíble. Este neumático combina un dibujo de rodada rápida y tracción que inspira confianza en cada curva gracias al compuesto BlackChili, protección contra daños de nivel superior gracias a la carcasa ProTection y mayor estabilidad y confiabilidad a través del refuerzo de la pared lateral Apex; esta llanta está lista para cualquier escenario de sendero, cualquier obstáculo y, literalmente, cualquier estilo de conducción que pueda presentar.",
      category: "repuestos",
      pictureUrl:
        "https://res.cloudinary.com/dlrsxizob/image/upload/c_pad,h_300,w_300/v1655752572/RoraimaBike/derbaron.png",
      stock: 5,
      initial: 1,
    },
    {
      id: "cac61a2f-c6a3-4345-acbc-602b44177a38",
      title: "Cadena KMC X12 TI-N Gold para 12V",
      price: 25000,
      description:
        "Todas las cadenas de la serie X de KMC son diseñadas tomando en cuenta las especificaciones y particularidades de los sistemas Shimano, SRAM y Campagnolo, cumpliendo con todas las exigencias. El borde biselado entrega un desempeño perfecto, con cambios rápidos y precisos",
      category: "repuestos",
      pictureUrl:
        "https://res.cloudinary.com/dlrsxizob/image/upload/c_pad,h_300,w_300/v1655752572/RoraimaBike/kmcx12gold.png",
      stock: 5,
      initial: 1,
    },
  ];
  console.log(productos);

  const productsCollection = collection(appFirestore, "products");
  // eslint-disable-next-line
  productos.map((item) => {
    const { id, ...rest } = item;
    console.log(rest);
    addDoc(productsCollection, rest).then((res) => {
      console.log("Documento guardado: ");
    });
  });
};

export const createOrder = async (order) => {
  console.log(order);
  const orderCollectionRef = collection(appFirestore, "orders");

  addDoc(orderCollectionRef, { ...order, date: Timestamp.now() }).then((res) =>
    console.log("ok")
  );
};

export default appFirestore;
