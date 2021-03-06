import styled from 'styled-components';

const SkillIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
  text-align: center;

  @media screen and (min-width: 1366px) {
    font-size: 18px;
  }

  & img {
    height: 60px;
    width: auto;
  }

  & span {
    opacity: 0.85;
  }
`;

export default SkillIconContainer;
