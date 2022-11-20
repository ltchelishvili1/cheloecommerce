import { FormInputLabel, Input, Group, Span } from "./form-input.styles";

const FormInput = ({ label, symbol, ...otherProps }) => {
  return (
    <Group mobhide>
      <Input {...otherProps} />
      {label && (
        <>
          <FormInputLabel shrink={otherProps.value.length}>
            {label}
          </FormInputLabel>
          {symbol && <Span shrink={otherProps.value.length}>{symbol}</Span>}
        </>
      )}
    </Group>
  );
};

export default FormInput;
