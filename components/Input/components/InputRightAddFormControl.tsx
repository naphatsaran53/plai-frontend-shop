import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Badge,
  Flex,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface IInputProps {
  label: string;
  type?: string | "textarea" | "number" | "text";
  rows?: number;
  placeholder?: string;
  btnLabel?: string;
  maxLength?: number;
  error?: any;
  onChange: (e: any) => void;
}

const InputRightAddFormControl = ({
  label,
  rows,
  placeholder,
  maxLength,
  type,
  btnLabel,
  onChange,
  error,
}: IInputProps) => {
  const [value, setValue] = useState("");
  return (
    <FormControl isInvalid={error}>
      <FormLabel mb={1}>{label}</FormLabel>
      <InputGroup>
        <Input
          type={type}
          placeholder={placeholder}
          maxLength={maxLength || 60}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isInvalid={error}
          autoComplete="off"
        />
        <InputRightElement w="auto">
          <Button
            variant="outline"
            colorScheme="blue"
            leftIcon={<FaPlus size="12px" />}
            onClick={() => {
              onChange(value);
              setValue("");
            }}
          >
            {btnLabel}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Flex>
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </Flex>
    </FormControl>
  );
};

export default InputRightAddFormControl;
