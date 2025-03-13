import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

async function addData() {
  try {
    await addDoc(collection(db, "users"), {
      name: "Patrick Ramos",
      age: 24
    });
    console.log("Document added!");
  } catch (error) {
    console.error("Error adding document:", error);
  }
}
