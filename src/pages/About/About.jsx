import './About.styles.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import anaImg from "../../assets/images/anastasijaaa.jpg";
import darisImg from "../../assets/images/daris.jpg"

export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="cards-container">
        <ProfileCard
          image={anaImg}
          name="Anastasija Mijaljevic"
          location="Novi Pazar, Serbia"
          description="Anastasija is a mathematician and web developer at NIT."
          github="https://github.com/dzenan"
        />
        <ProfileCard
          image={darisImg}
          name="Daris Bihorac"
          location="Novi Pazar, Serbia"
          description="Frontend developer passionate about building modern crypto web apps."
          github="https://github.com/daris"
        />
        <ProfileCard
          image="https://via.placeholder.com/150"
          name="Ali Alic"
          location="Novi Pazar, Serbia"
          description="Backend developer focusing on API integration and data handling."
          github="https://github.com/third"
        />
      </div>
    </div>
  );
}
