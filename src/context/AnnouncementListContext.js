import { createContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../firebase";

export const announcementQuery = collection(dataBase, "announcement");
export const snapshotToArray = (snapshot) => snapshot.docs.map(doc => doc.data()).sort((a, b) => Number(b.date) - Number(a.date));
const querySnapshot = await getDocs(announcementQuery);
const newAnnouncementListContext = snapshotToArray(querySnapshot);
export const AnnouncementListContext = createContext(newAnnouncementListContext);
