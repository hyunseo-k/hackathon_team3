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

// Chakra imports
import {
  Box,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import React from "react";
import PieCard from "views/admin/default/components/PieCard";
import TotalSpent from "views/admin/default/components/TotalSpent";


export default function UserReports() {

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Text fontSize='40px' fontWeight='bold' mb='20px'>포트폴리오</Text>

      <SimpleGrid columns={{ base: 10, md: 2, xl: 2 }} gap='20px'  mb='20px'>
        <PieCard />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 1 }} gap='20px' mb='20px'>
        <TotalSpent />
      </SimpleGrid>

    </Box>
  );
}
