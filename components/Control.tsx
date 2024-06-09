import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import IconWrapper from '@/components/IconWrapper';
import { Control as PoliceControl, useDownVoteControl, useUpVoteControl } from '@/api/controls';

interface ControlProps {
  control: PoliceControl;
  refetch: () => void;
}

const Control: FC<ControlProps> = ({
                                     control,
                                     refetch,
                                   }) => {

  const [numOfUpVotes, setNumOfUpVotes] = React.useState(control.upVotes);
  const [numOfDownVotes, setNumOfDownVotes] = React.useState(control.downVotes);

  const upVote = useUpVoteControl({
    onSuccess: () => {
      refetch();
      setNumOfUpVotes(numOfUpVotes + 1);
    },
  });
  const downVote = useDownVoteControl({
    onSuccess: () => {
      refetch();
      setNumOfDownVotes(numOfDownVotes + 1);
    },
  });

  return (
    <View className="flex-1 w-full">
      <View className="px-5 flex flex-col gap-y-16">
        <View>
          <Text className={'text-xl font-bold dark:text-white'}>
            {control.name}
          </Text>
          <Text className={'text-gray-500 text-base'}>{
            new Intl.DateTimeFormat('gb-Uk', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            }).format(new Date(control.createdAt))
          }</Text>
        </View>

        <Text>{control.description}</Text>

        <View className={'flex flex-row justify-between mx-5'}>
          <View>
            <IconWrapper
              onPress={() => upVote.mutate(control.id)}
              classNameContainer={'w-12 h-12 bg-navy-blue'}
            >
              <Ionicons name={'arrow-up-outline'} size={24} color={'white'} />
            </IconWrapper>
            <Text
              className={'text-black dark:text-white text-center mt-1 text-xl'}
            >
              {numOfUpVotes}
            </Text>
          </View>
          <View>
            <IconWrapper
              onPress={() => downVote.mutate(control.id)}
              classNameContainer={'w-12 h-12 bg-navy-blue'}
            >
              <Ionicons name={'arrow-down-outline'} size={24} color={'white'} />
            </IconWrapper>
            <Text
              className={'text-black dark:text-white text-center mt-1 text-xl'}
            >
              {numOfDownVotes}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Control;
