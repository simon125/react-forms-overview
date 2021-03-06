import styled from "styled-components";

export const AppContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-center;
  justify-content: space-around;
`;

export const SubmitButton = styled.button`
  background: #f50057;
  outline: none;
  border: none;
  color: #fff;
  min-width: 440px;
  width: auto;
  height: 51px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10.1016pt;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 40px;
  transition: background 0.15s;
  &:hover {
    filter: brightness(120%);
  }
  @media (max-width: 500px) {
    min-width: 90%;
    width: 100%;
    margin: 0 auto 10px auto;
    height: 30px;
    font-size: 10px;
  }
`;
export const FormInput = styled.input.attrs(({ isInvalid }) => ({
  outline: isInvalid ? "none" : "3px solid red"
}))`
  margin-bottom: 40px;
  outline: ${props => props.outline};
  width: 440px;
  height: 42px;
  font-family: Arial, Helvetica, sans-serif;
  color: #666666;
  padding-left: 10px;
  &::-webkit-input-placeholder {
    color: #999;
    text-transform: uppercase;
  }
  @media (max-width: 500px) {
    min-width: 90%;
    width: 100%;
    margin: 0 auto 20px auto;
    height: 30px;
    font-size: 10px;
  }
`;

export const Label = styled.label`
  display: block;
  text-transform: uppercase;
  margin-bottom: 25px;
  @media (max-width: 500px) {
    margin-bottom: 10px;
    font-size: 11px;
  }
`;
export const CheckboxLabel = styled.label`
  @media (max-width: 500px) {
    font-size: 11px;
    line-height: 18px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  font-family: "Assistant", sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 40px;
  color: rgba(255, 255, 255, 255);
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 500px) {
    margin-bottom: 10px;
    font-size: 22px;
  }
`;
export const LinkButton = styled.button`
  background: transparent;
  margin-bottom: 20px;
  border: none;
  font-size: 16px;
  color: rgba(255, 152, 0, 255);
  cursor: pointer;
  outline: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 500px) {
    margin-bottom: 8px;
    font-size: 10px;
  }
`;
export const Checkbox = styled.input`
  margin-right: 5px;
  transform: scale(1.15);
`;

export const SpacingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1520px) {
    flex-direction: column;
  }
`;
export const Container = styled.div`
  display: inline-block;
  margin: 5px;
  background: #322832;
  width: min-content;
  padding: 25px;
  -webkit-box-shadow: 15px 20px 52px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 15px 20px 52px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 15px 20px 52px -4px rgba(0, 0, 0, 0.75);
  height: fit-content;
  @media (max-width: 1520px) {
    &:nth-child(1) {
      order: 3;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const SubscribeContainer = styled.div`
  display: inline-block;
  margin: 50px 5px 5px 5px;
  background: #322832;
  width: 940px;
  height: fit-content;
  padding: 25px;
  -webkit-box-shadow: 15px 20px 52px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 15px 20px 52px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 15px 20px 52px -4px rgba(0, 0, 0, 0.75);
  @media (max-width: 1520px) {
    width: min-content;
    margin: 5px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const FormInputLarge = styled(FormInput)`
  height: 59px;
`;
export const SubmitButtonLarge = styled(SubmitButton)`
  height: 59px;
`;
