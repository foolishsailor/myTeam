import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & > input,
  & > textArea {
    padding: 24px 14px;
    font-size: ${({ theme }) => theme.font.body.small.fontSize};
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    border: none;
    border-bottom: solid 1px ${({ theme }) => theme.colors.white};
    transition: all 300ms;

    &:hover,
    &:active {
      border-bottom: solid 1px ${({ theme }) => theme.colors.raptureBlue};
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    &.error {
      color: ${({ theme }) => theme.colors.lightCoral};
      border-bottom: solid 1px ${({ theme }) => theme.colors.lightCoral};

      &::placeholder {
        color: ${({ theme }) => theme.colors.lightCoral};
      }
    }
  }

  & > textArea {
    resize: none;
  }

  & > label {
    color: ${({ theme }) => theme.colors.lightCoral};
    font-size: ${({ theme }) => theme.font.text___error.fontSize};
    line-height: ${({ theme }) => theme.font.text___error.lineHeight};
    padding: 8px 14px;
  }

  & > button {
    margin-top: 24px;
    align-self: flex-start;
  }
`;

export default StyledForm;
