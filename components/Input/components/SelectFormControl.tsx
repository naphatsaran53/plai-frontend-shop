import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";

interface ISelectProps {
  options: any[];
  optionLabel: string;
  optionValue: string;
  label: string;
  placeholder?: string;
  value?: any;
  error?: any;
  onChange: (e: any) => void;
}

const SelectFormControl = ({
  options,
  optionLabel,
  optionValue,
  label,
  placeholder,
  value,
  onChange,
  error,
}: ISelectProps) => {
  return (
    <FormControl isInvalid={error}>
      <FormLabel mb={1}>{label}</FormLabel>
      <Select placeholder={placeholder} value={value || ""} onChange={onChange}>
        {options.map((item, index) => (
          <option key={index} value={item[optionValue]}>
            {item[optionLabel]}
          </option>
        ))}
      </Select>
      <Flex>
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </Flex>
    </FormControl>
  );
};

export default SelectFormControl;
