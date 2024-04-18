import { createContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../firebase";

const querySnapshot = await getDocs(collection(dataBase, "announcement"));
const newAnnouncementListContext = querySnapshot.docs.map(doc => doc.data()).sort((a, b) => Number(b.date) - Number(a.date));
export const AnnouncementListContext = createContext(newAnnouncementListContext);
