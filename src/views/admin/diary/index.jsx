/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {React, useState} from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Card from "components/card/Card.js";

const diaryEntries = [
  { title: "QQQ 롱, 국장 숏", date: "07.01.", type: "매수", content: "나스닥이 상승할지는 모르겠지만, 적어도 국장보다는 나을 것 같아 이런 포지션을 잡았다. " },
  { title: "코스피 곱버스 청산", date: "07.03", type: "매도", content: "코스피 곱버스를 청산했다. 매도 이유로는 금리 인하에 따른 주식 시장 상승을 우려했기 때문이다. 다만 이게 맞는 판단인지 모르겠다."},
  { title: "나스닥은 신이 아니다...", date: "08.04", type: "자유양식", content: "08.03일 나스닥이 2% 넘게 빠지며 전고점 대비 10% 이상의 하락을 보여주었다. 주요 경제 유튜브로는 이제 빚으로 굴러가던 경제가 끝났다고 하는데 나는 미국 당선 전까지는 들고 있을까..." },
];

export default function Diary() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const filteredEntries = diaryEntries.filter(
    (entry) => new Date(entry.date).getMonth() + 1 === currentMonth
  );

  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 1 ? 12 : prevMonth - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 12 ? 1 : prevMonth + 1));
  };

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <HStack justifyContent="space-between" mb="20px">
        <Button onClick={handlePreviousMonth}>이전 달</Button>
        <Text fontSize="xl" fontFamily="Locus" fontWeight={500} color={textColor}>
          {new Date(0, currentMonth - 1).toLocaleString("default", {
            month: "long",
          })}
        </Text>
        <Button onClick={handleNextMonth}>이후 달</Button>
      </HStack>
      <Grid
        mb="20px"
        gridTemplateColumns="1fr"
        gap="20px"
        display="block"
      >
        {filteredEntries.map((entry, index) => (
          <Card key={index} mb="20px">
            <VStack align="start" spacing={3}>
              <Text fontFamily="Jalnan" fontSize="35px" color={textColor}>
                {entry.title}
              </Text>
              <Text fontFamily="One" fontSize="25px" color={textColor}>
                {entry.date}
              </Text>
              <Badge colorScheme={entry.type === "매수" ? "green" : "red"}>
                {entry.type}
              </Badge>
              <Text fontFamily="Locus" fontSize="20px" color={textColor}>
                {entry.content}
              </Text>
            </VStack>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}
