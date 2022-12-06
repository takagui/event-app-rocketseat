import { 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity, 
} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  function handleParticipantAdd() {
    console.log('Você clicou no botão adicionar participante');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou no botão remover participante ${name}`);
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

      <Participant name='Taka' onRemove={() => handleParticipantRemove('Taka')} />
      <Participant name='Naka' onRemove={() => handleParticipantRemove('Naka')} />
    </View>
  )
}