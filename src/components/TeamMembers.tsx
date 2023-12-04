/**
 * Renders a section displaying team members.
 * @returns The JSX element representing the team members section.
 */

import MemberCard from "./MemberCard"

export default function TeamMembers() {
  return (
    <section className="bg-[#ffffff] flex flex-col py-8 h-[calc(100vh-5rem)] items-center" id="team">
        <h1 className="font-bold text-4xl  ">TEAM MEMBERS</h1>
        <div className="container flex flex-wrap gap-10 pt-4 pb-12 w-full justify-center align-middle">
          <MemberCard memberURL="/images/José.jpg" memberName="José Chi Quintal" />
          <MemberCard memberURL="/images/Genaro.jpg" memberName="Genaro Cutz Anguas" />
          <MemberCard memberURL="/images/Daniel.jpg" memberName="Daniel Méndez Sierra" />
          <MemberCard memberURL="/images/Samuel.jpg" memberName="Samuel Rodríguez Coral" />
        </div>
      </section>
  )
}
