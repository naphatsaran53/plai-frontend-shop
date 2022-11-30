import { useCallback } from "react";
import {
  FormControl,
  FormLabel,
  Text,
  Button,
  Box,
  Flex,
  Image,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { FaUpload, FaTrashAlt } from "react-icons/fa";

interface IInputProps {
  label: string;
  multi?: boolean;
  value?: any;
  error?: any;
  onChange: (e: any) => void;
}

const UploadImage = ({ label, multi, value, onChange, error }: IInputProps) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    onChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/png": [],
    },
  });

  return (
    <FormControl isInvalid={error}>
      <FormLabel mb={1}>{label}</FormLabel>
      {value && (
        <>
          {typeof value === "string" && (
            <Box alignContent="center">
              <Flex
                w="320px"
                align="center"
                position="relative"
                borderRadius="md"
                shadow="md"
                mr="auto"
                ml="auto"
                overflow="hidden"
              >
                <Image
                  position="relative"
                  w="full"
                  h="full"
                  objectFit="cover"
                  src={`${process.env.IMG_URL}/${value}`}
                />
                <Button
                  size="sm"
                  position="absolute"
                  top="6px"
                  right="6px"
                  p={0}
                  onClick={() => onChange(null)}
                >
                  <FaTrashAlt color="red" size="12" />
                </Button>
              </Flex>
            </Box>
          )}
          {value.length === 1 && (
            <Box alignContent="center">
              <Flex
                w="320px"
                align="center"
                position="relative"
                borderRadius="md"
                shadow="md"
                mr="auto"
                ml="auto"
                overflow="hidden"
              >
                <Image
                  position="relative"
                  w="full"
                  h="full"
                  objectFit="cover"
                  src={URL.createObjectURL(value[0])}
                />
                <Button
                  size="sm"
                  position="absolute"
                  top="6px"
                  right="6px"
                  p={0}
                  onClick={() => onChange(null)}
                >
                  <FaTrashAlt color="red" size="12" />
                </Button>
              </Flex>
            </Box>
          )}
          {/* <SimpleGrid columns={{ base: 2, md: 3 }}  spacing={6}>
            {value.map((image: File, index: number) => (
              <Box key={index}>
                <Image src={URL.createObjectURL(image)} />
              </Box>
            ))}
          </SimpleGrid> */}
        </>
      )}
      {!value && (
        <Box
          border={error ? "2px dashed #E53E3E" : "2px dashed #E2E8F0"}
          borderRadius="md"
          bgColor="whitesmoke"
          h={200}
          {...getRootProps()}
          textAlign="center"
          p={2}
        >
          <input
            {...getInputProps()}
            multiple={multi || false}
            accept="image/*"
          />
          <Button
            leftIcon={<FaUpload />}
            mt="60px"
            colorScheme="teal"
            bgColor="white"
            variant="outline"
            width="140px"
            _hover={{
              bgColor: "teal",
              color: "white",
            }}
          >
            อัปโหลดรูป
          </Button>
          <Text mt={2} fontSize="sm" color="teal">
            ไฟล์ไม่เกิน 3 MB, รองรับสกุลไฟล์ JPG, JPEG และ PNG เท่านั้น
          </Text>
        </Box>
      )}
      <Flex>
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </Flex>
    </FormControl>
  );
};

export default UploadImage;
