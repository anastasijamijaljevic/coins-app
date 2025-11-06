import { HeroWrapper, HeroImg} from "./HeroSection.styled";
import heroImage from '../../assets/images/heroImage.png'

export const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroImg src={heroImage} alt="Hero" />
    </HeroWrapper>
  );
};