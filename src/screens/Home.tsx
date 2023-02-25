import { GroupMuscles } from '@components/GroupMuscles';
import { HomeHeader } from '@components/HomeHeader';
import { FlatList, Heading, HStack, Text, VStack } from 'native-base';
import { useState } from 'react';

export function Home() {
  const [groupMusclesSelected, setGroupMusclesSelected] = useState('ombro');
  const [groups, setGroups] = useState([
    'costas',
    'bíceps',
    'tríceps',
    'ombro',
  ]);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return (
            <GroupMuscles
              name={item}
              isActive={groupMusclesSelected === item}
              onPress={() => setGroupMusclesSelected(item)}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={10}
        maxH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercicios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            4
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
