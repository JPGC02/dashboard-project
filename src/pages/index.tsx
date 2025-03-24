import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import DashboardCard from '../components/DashboardCard';

export default function Home() {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        <DashboardCard title="Vendas" value="R$ 45.678" />
        <DashboardCard title="Usuários" value="1,234" />
        <DashboardCard title="Conversão" value="12.3%" />
      </SimpleGrid>
    </Container>
  );
}