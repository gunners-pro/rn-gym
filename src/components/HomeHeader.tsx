import { Heading, Text, HStack, VStack, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import defaultUserPhotoImg from '@assets/userPhotoDefault.png';

import { useAuth } from '@hooks/useAuth';

import { UserPhoto } from './UserPhoto';

export function HomeHeader() {
  const { user } = useAuth();

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={
          user.avatar
            ? { uri: 'https://github.com/gunners-pro.png' }
            : defaultUserPhotoImg
        }
        alt="Foto do usuário"
        size={16}
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md">
          {user.name}
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
