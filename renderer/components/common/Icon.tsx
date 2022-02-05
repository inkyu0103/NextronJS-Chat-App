import styled from "@emotion/styled";

interface IconInterface {
  iconImageUrl: string;
  handleClick: () => void;
}

export default function Icon({ iconImageUrl, handleClick }: IconInterface) {
  return (
    <IconContainer>
      <IconButton onClick={handleClick} />
    </IconContainer>
  );
}

const IconContainer = styled.section``;

const IconButton = styled.button``;
