
import Welcome from "@/components/Welcome";
import MemberCard from "@/components/MemberCard";
import TeamMembers from "@/components/TeamMembers";

import { IBM_Plex_Sans } from "next/font/google";
const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: '400'
});
function HomePage() {
  return (
    <div className={`${ibm.className}`}>
      <Welcome />
      <TeamMembers />
    </div>

  )
}

export default HomePage