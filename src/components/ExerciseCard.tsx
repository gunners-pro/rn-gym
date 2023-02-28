import { Heading, HStack, Icon, Image, Text, VStack } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          source={{
            uri: 'https://marcelogomespersonal.com/wp-content/uploads/2022/01/remada-curvada-com-barra-pegada-pronada-ou-pegada-supinada.jpg',
          }}
          alt="Remada Curvada"
          w={16}
          h={16}
          mr={4}
          rounded="md"
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading color="white" fontSize="lg">
            Remada Curvada
          </Heading>
          <Text color="gray.200" fontSize="sm" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}
