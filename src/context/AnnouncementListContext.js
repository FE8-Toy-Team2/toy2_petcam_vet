import { createContext } from "react";
import { collection } from "firebase/firestore";
import { dataBase } from "../firebase";

export const announcementQuery = collection(dataBase, "announcement");
export const snapshotToArray = (snapshot) =>
  snapshot.docs
    .map((doc) => {
      return { id: doc.id, ...doc.data() };
    })
    .sort((a, b) => Number(b.date) - Number(a.date));
export const AnnouncementListContext = createContext([]);
