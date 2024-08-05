// Chakra imports
import {
  Box,
  SimpleGrid,
  Text,
  VStack,
  Card,
  Badge
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import PieCard from "views/admin/default/components/PieCard";
import TotalSpent from "views/admin/default/components/TotalSpent";

const investments = [
  { id: 1, date: "2024.07.01", name: "코스피선물인버스x2", volume: 100, price: 5200, totalPrice: 5200000, type: "매수" },
  { id: 2, date: "2024.07.15", name: "코스피선물인버스x2", volume: 100, price: 5200, totalPrice: 5200000,  type: "매도"  },
  { id: 3, date: "2024.08.01", name: "LG전자", volume: 100, price: 5200, totalPrice: 5200000, type: "매수" },
  { id: 4, date: "2024.08.01", name: "LG전자", volume: 100, price: 5200, totalPrice: 5200000, type: "매도" },
];

export default function UserReports() {
  const navigate = useNavigate();

  const handleItemClick = (investment) => {
    navigate("/write-diary", { state: { investment } });
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 10, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <PieCard />
        <Box height="600px" overflowY="auto">
          <SimpleGrid columns={{ base: 1, md: 2, xl: 1 }} gap='20px' cursor="pointer">
            {investments.map((investment) => (
              <Card key={investment.id} onClick={() => handleItemClick(investment)} p="20px">
                <VStack align="start" spacing={3}>
                  <Text fontFamily="Jalnan" fontSize="20px" fontWeight={500}>
                    {investment.name}
                  </Text>
                  <Text fontFamily="One" fontSize="20px">
                    {investment.date}
                  </Text>
                  <Text fontSize="md">
                    {investment.volume} 주 * {investment.price} 원 = {investment.totalPrice} 원
                  </Text>
                  <Badge colorScheme={investment.type === "매수" ? "green" : "red"}>
                    {investment.type}
                  </Badge>
                </VStack>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 1 }} gap='20px' mb='20px'>
        <TotalSpent />
      </SimpleGrid>
      
    </Box>
  );
}