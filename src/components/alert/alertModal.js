import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Components
import {useLocal} from '../../hook';
import LanguageData from '../../data/langauge';

// Styles
import styles from './style';

const alertModal = props => {
  const local = useLocal();

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Text style={styles.headerTitle}>{local.language}</Text>

        {LanguageData.map((item, index) => (
          <View key={item.id}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => props.languageAction(item.value)}>
              <Text
                style={[
                  styles.title,
                  {color: props.selectedLang === item.value ? 'blue' : '#000'},
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
            {LanguageData.length - 1 === index ? null : (
              <View style={styles.line} />
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default alertModal;
