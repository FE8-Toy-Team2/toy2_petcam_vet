import { useContext } from "react";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import Header from "./Header";
import Content from "./Content";

const Announcement = () => {
  const announcements = useContext(AnnouncementListContext);

  return (
    <AnnouncementListContext.Provider value={announcements}>
      <main className="announcement">
        <Header />
        <Content />
      </main>
    </AnnouncementListContext.Provider>
  );
};

export default Announcement;
