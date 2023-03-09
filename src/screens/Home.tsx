import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FlatList, Heading, HStack, Text, useToast, VStack } from 'native-base';
import { useCallback, useEffect, useState } from 'react';

import { ExerciseCard } from '@components/ExerciseCard';
import { GroupMuscles } from '@components/GroupMuscles';
import { HomeHeader } from '@components/HomeHeader';
import { Loading } from '@components/Loading';

import { ExerciseDTO } from '@dtos/ExerciseDTO';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { api } from '@services/api';

import { AppError } from '@utils/AppError';

export function Home() {
  const [groupMusclesSelected, setGroupMusclesSelected] = useState('Ombro');
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const toast = useToast();
  const [groups, setGroups] = useState<Array<string>>([]);
  const [exercises, setExercises] = useState<ExerciseDTO[]>([]);

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise');
  }

  const fetchGroups = useCallback(async () => {
    try {
      const response = await api.get('/groups');
      setGroups(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possivel carregar os grupos musculares';
      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      });
    }
  }, [toast]);

  const fetchExercisesByGroup = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/exercises/bygroup/${groupMusclesSelected}`,
      );
      setExercises(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possivel carregar os exercícios';
      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      });
    } finally {
      setIsLoading(false);
    }
  }, [groupMusclesSelected, toast]);

  useEffect(() => {
    fetchGroups();
  }, [fetchGroups]);

  useFocusEffect(
    useCallback(() => {
      fetchExercisesByGroup();
    }, [fetchExercisesByGroup]),
  );

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
        minH={10}
      />

      {isLoading ? (
        <Loading />
      ) : (
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
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ExerciseCard onPress={handleOpenExerciseDetails} data={item} />
            )}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{ paddingBottom: 20 }}
          />
        </VStack>
      )}
    </VStack>
  );
}
