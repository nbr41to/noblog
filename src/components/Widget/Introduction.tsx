import { VFC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import my_photo from 'src/assets/images/my_photo1.png';
import { ArrowDown } from 'akar-icons';
type IntroductionProps = {
  className?: string;
};

export const Introduction: VFC<IntroductionProps> = ({ className }) => {
  return (
    <StyledIntroduction className={`${className} p-8`}>
      <h3>bio</h3>
      <div className="toCenter p-8">
        <div className="toCenter column mr-8">
          <div className="my_photo">
            <Image
              src={my_photo}
              alt="my photo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>nob / のぶ</div>
        </div>
        <div className="career toCenter column">
          <div>学校の先生🎓</div>
          <ArrowDown size={16} />
          <div>エンジニア💻</div>
          <ArrowDown size={16} />
          <div>心理学の勉強中📚</div>
        </div>
      </div>
    </StyledIntroduction>
  );
};

const StyledIntroduction = styled.div`
  ${({ theme }) => theme.box.inner};
  > h3 {
    ${({ theme }) => theme.mixins.asideTitle};
  }
  .my_photo {
    width: 90px;
    height: 90px;
    position: relative;
    img {
      border-radius: 50%;
    }
  }
  .career {
    font-size: 14px;
  }
`;
