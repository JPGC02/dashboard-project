import { Box, Heading, Text } from '@chakra-ui/react';

interface DashboardCardProps {
  title: string;
  value: string;
}

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <Box
      p={6}
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
    >
      <Heading size="md" mb={2}>{title}</Heading>
      <Text fontSize="2xl" fontWeight="bold">{value}</Text>
    </Box>
  );
}