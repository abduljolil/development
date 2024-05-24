import TeamCard from "../../Component/TeamCard";
import TitleSection from "../../Component/TitleSection";





const OurTeam = () => {
    return (
        <div className="space-y-24">
          <TitleSection  title='Our Team' drescription='Smart Vision for Consultancy and Development was incorporated in 2011 in Somalia.'></TitleSection>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-6">
        <TeamCard img='https://i.postimg.cc/wTFH7Z4j/Ellipse-50.png' title='Ismail Aden Haibe ' description='Cheif Executive Officer'></TeamCard>
            <TeamCard img='https://i.postimg.cc/pVDJ4Gv2/Ellipse-50-1.png' title='David Ondijo (PhD) ' description='Deputy Executive Director '></TeamCard>
            <TeamCard img='https://i.postimg.cc/zX8FrCDT/Ellipse-50-2.png' title='Ahmed Hersi Osman ' description='Director of programmes'></TeamCard>
            <TeamCard img='https://i.postimg.cc/x8yGmC5k/Ellipse-50-3.png' title='Abdirahman Hassan Yusuf ' description='Senior Research Director'></TeamCard>
        </div>
        </div>
    );
};

export default OurTeam;