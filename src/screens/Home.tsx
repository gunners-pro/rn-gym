import { ExerciseCard } from '@components/ExerciseCard';
import { GroupMuscles } from '@components/GroupMuscles';
import { HomeHeader } from '@components/HomeHeader';
import { FlatList, Heading, HStack, Text, VStack } from 'native-base';
import { useState } from 'react';

export function Home() {
  const [groupMusclesSelected, setGroupMusclesSelected] = useState('Ombro');
  const [groups, setGroups] = useState([
    'costas',
    'bíceps',
    'tríceps',
    'ombro',
  ]);
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada Unilateral',
    'Levantamento terra',
    'Supino Máquina',
    'Rosca Scott',
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
              isActive={
                groupMusclesSelected.toUpperCase() === item.toUpperCase()
              }
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
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
