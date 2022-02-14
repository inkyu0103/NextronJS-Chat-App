import styled from "@emotion/styled";

interface IconInterface {
  iconImageUrl: string;
  handleClick: () => void;
}

export default function Icon({ iconImageUrl, handleClick }: IconInterface) {
  return <IconButton iconImageUrl={iconImageUrl} onClick={handleClick} />;
}

const IconButton = styled.button<{ iconImageUrl: string }>`
  width: 16px;
  height: 16px;
  background: transparent;
  background-image: ${({ iconImageUrl }) => `url(${iconImageUrl})`};
  background-size: cover;
  cursor: pointer;
`;
