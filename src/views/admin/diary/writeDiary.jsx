import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IconButton, Table, Thead, Tbody, Tr, Th, Td, Box, Text, VStack, Input, Textarea, Button, Badge, HStack, Divider, IconButto, Flex } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function WriteDiary() {
  const location = useLocation();
  const { investment } = location.state;

  const [title, setTitle] = useState("");
  const [strategy, setStrategy] = useState("");
  const [rationale, setRationale] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ["대량매수", "소량매수", "대량매도", "소량매도"];

  const handleAddOption = (option) => {
    if (!selectedOptions.includes(option)) {
      const updatedOptions = [...selectedOptions, option];
      setSelectedOptions(updatedOptions);
      setStrategy(updatedOptions.join(", "));
    }
  };

  const handleRemoveOption = (option) => {
    const updatedOptions = selectedOptions.filter((opt) => opt !== option);
    setSelectedOptions(updatedOptions);
    setStrategy(updatedOptions.join(", "));
  };

  const handleSubmit = () => {
    console.log("제목:", title);
    console.log("투자 전략:", strategy);
    console.log("투자 근거:", rationale);
  };

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <VStack align="start" spacing={3} p="100px">
        <Text fontFamily="Jalnan" fontSize="20px">{investment.date}</Text>
        <Text fontFamily="Jalnan" fontSize="25px" fontWeight={500}>
          제목
        </Text>
        <Input
          fontSize="25px"
          fontFamily="One"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Text fontFamily="Jalnan" fontSize="25px">
          투자 현황
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th fontSize="20px" fontFamily="Locus">종류</Th>
              <Th fontSize="20px" fontFamily="Locus">투자 종목</Th>
              <Th fontSize="20px" fontFamily="Locus">양</Th>
              <Th fontSize="20px" fontFamily="Locus">가격</Th>
              <Th fontSize="20px" fontFamily="Locus">총 가격</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Divider />
            <Tr>
              <Td>
                <Badge variant="outline" fontSize="md" colorScheme={investment.type === "매수" ? "green" : "red"}>
                  {investment.type}
                </Badge>
              </Td>
              <Td>
                <Badge variant="outline" fontSize="md">
                  {investment.name}
                </Badge>
              </Td>
              <Td>
                <Badge variant="outline" fontSize="md">
                  {investment.volume} 주
                </Badge>
              </Td>
              <Td>
                <Badge variant="outline" fontSize="md">
                  {investment.price} ₩
                </Badge>
              </Td>
              <Td>
                <Badge variant="outline" fontSize="md">
                  {investment.totalPrice} ₩
                </Badge>
              </Td>
            </Tr>
          </Tbody>
        </Table>


        <Text fontFamily="Jalnan" fontSize="25px">
          투자 전략
        </Text>
        <Textarea
          placeholder=""
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
        />
        

        <Text fontFamily="Jalnan" fontSize="25px">
          투자 근거
        </Text>
        <Textarea
          placeholder=""
          value={rationale}
          onChange={(e) => setRationale(e.target.value)}
        />

        <HStack spacing={2} marginBottom={4}>
          {options.map((option) => (
            <Badge
              key={option}
              colorScheme="teal"
              cursor="pointer"
              onClick={() => handleAddOption(option)}
            >
              {option}
            </Badge>
          ))}
        </HStack>
        <Box position="relative">
          <Input
            placeholder=""
            value={strategy}
            onChange={(e) => setStrategy(e.target.value)}
            paddingLeft="10px" // Adjust padding to fit badges
          />
          <Flex position="absolute" top="50%" left="10px" transform="translateY(-50%)" alignItems="center">
            {selectedOptions.map((option) => (
              <Badge key={option} colorScheme="teal" marginRight={2}>
                {option}
                <IconButton
                  size="xs"
                  icon={<CloseIcon />}
                  onClick={() => handleRemoveOption(option)}
                  marginLeft={1}
                  variant="ghost"
                />
              </Badge>
            ))}
          </Flex>
        </Box>

        <Button colorScheme="blue" onClick={handleSubmit}>
          제출하기
        </Button>
      </VStack>
    </Box>
  );
}