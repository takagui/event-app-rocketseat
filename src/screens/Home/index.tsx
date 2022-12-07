import { 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert, 
} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

interface IParticipant {
  id: number;
  name: string;
}

export function Home() {
  const participants: IParticipant[] = [
    {
      id: 1,
      name: 'Taka',
    },
    {
      id: 2,
      name: 'Naka',
    },
    {
      id: 3,
      name: 'Pan',
    },
    {
      id: 5,
      name: 'Nina',
    },
    {
      id: 6,
      name: 'Saori',
    },
    {
      id: 7,
      name: 'Bento',
    },
    {
      id: 8,
      name: 'Fulano',
    },
    {
      id: 9,
      name: 'Ciclano',
    },
    {
      id: 10,
      name: 'Abcd',
    },
    {
      id: 11,
      name: 'Abcde',
    },
  ];

  function handleParticipantAdd() {
    if (participants.find(participant => participant.name.toLowerCase() === 'taka')) {
      return Alert.alert('Participante já existe', 'Já existe um participante com esse nome na lista.')
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      'Remover', 
      `Deseja remover o participante ${name}?`,
      [
        {
          text: 'Sim',
          onPress: () => Alert.alert('Deletado!'),
        },
        {
          text: 'Não',
          style: 'cancel',
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Quinta, 1 de dezembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>


      <FlatList 
        data={participants}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            key={item.id} 
            name={item.name} 
            onRemove={() => handleParticipantRemove(item.name)} 
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}