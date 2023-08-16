import { collection, getDocs, doc, setDoc } from "firebase/firestore"; 
import { db } from "./firebaseInit";
import { Plant } from "@/Interfaces/interfaces";
import { storage } from "./firebaseInit";
import { listAll, ref, getDownloadURL } from "firebase/storage";


export  async function queryFirestorePlants(collectionName: string){

    const querySnapshot = await getDocs(collection(db, collectionName));
    const listRef = ref(storage, 'plant-images');
    
    if( querySnapshot ){

        const items = querySnapshot.docs.map(doc => ({


            id: doc.id,
            ...doc.data(),
        })) as Plant[]

        return items

    } else {

        console.log('Fetch error with firebase')

    }

}


export async function getImageURL(item: string){
    const imageRef = ref(storage, `plant-images/${item}`);
    const url = getDownloadURL(imageRef).then(url => {
        return url
    })

    return url


}

export async function listImages(){


    // Create a reference under which you want to list
    const listRef = ref(storage, 'plant-images');
    let imageUrlArray: string[] = []

    // Find all the prefixes and items.
    listAll(listRef)
    .then((res) => {
        res.items.forEach(async (itemRef) => {
            const url = await getDownloadURL(itemRef)
            imageUrlArray.push(url)
        });
        console.log(imageUrlArray)
    }).catch((error) => {
        console.error(error)
    });
    
}

// Add a new document in collection "cities"
export async function addProduct(collectionName: string, document: any){

    await setDoc(doc(db, collectionName), document);

}