import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Flex,
  FormErrorMessage,
  FormHelperText,
  Spacer,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

interface IInputProps {
  label?: string;
  type?: string | "textarea" | "number" | "text" | "password";
  rows?: number;
  placeholder?: string;
  isShowMaxLength?: boolean;
  maxLength?: number;
  value?: any;
  error?: any;
  iconLeft?: React.ReactNode;
  onChange: (e: any) => void;
}

const InputFormControl = ({
  label,
  rows,
  placeholder,
  maxLength,
  type,
  isShowMaxLength,
  iconLeft,
  value,
  onChange,
  error,
}: IInputProps) => {
  return (
    <FormControl isInvalid={error}>
      {label && <FormLabel mb={1}>{label}</FormLabel>}
      <InputGroup>
        {iconLeft && (
          // eslint-disable-next-line react/no-children-prop
          <InputLeftElement pointerEvents="none" children={iconLeft} />
        )}
        {(!type ||
          type === "text" ||
          type === "number" ||
          type === "password") && (
          <Input
            shadow="sm"
            type={type || "text"}
            placeholder={placeholder}
            maxLength={maxLength || 60}
            value={value || ""}
            onChange={onChange}
            isInvalid={error}
            autoComplete="off"
          />
        )}
        {type === "textarea" && (
          <Textarea
            rows={rows}
            placeholder={placeholder}
            maxLength={maxLength || 60}
            value={value}
            onChange={onChange}
            isInvalid={error}
            autoComplete="off"
          />
        )}
      </InputGroup>
      <Flex>
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        {isShowMaxLength && (
          <>
            <Spacer />
            <FormHelperText>
              {value.length}/{maxLength}
            </FormHelperText>
          </>
        )}
      </Flex>
    </FormControl>
  );
};

export default InputFormControl;
