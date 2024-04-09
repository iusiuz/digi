import { initializeApp } from 'firebase/app'
import { getStorage, ref } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'

const firebaseConfig = {
	apiKey: "AIzaSyDU4ckrZGNXKf2kAPPnA_PzCUKsCjnEjnU",
  authDomain: "iusi-97224.firebaseapp.com",
  projectId: "iusi-97224",
  storageBucket: "iusi-97224.appspot.com",
  messagingSenderId: "26611734939",
  appId: "1:26611734939:web:1f3149899f047e193c693e",
  measurementId: "G-9WVQMSX9GQ"
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

const courseStorageRefs = ref(storage, `/praktikum/course/${uuidv4()}`)

export { storage, courseStorageRefs }
