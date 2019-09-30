// @flow
import React from 'react';
import {
  FlatList,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    flex: 0,
    margin: 8,
    borderRadius: 10,
    elevation: 1,
  },
  button1: {
    backgroundColor: 'lightskyblue',
  },
  button2: {
    backgroundColor: 'mediumspringgreen',
  },
  button3: {
    backgroundColor: 'blanchedalmond',
  },
  buttonDisabled: {
    opacity: 0.25,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonWrapper: {
    padding: 8,
  },
  container: {
    padding: 16,
  },
  containerFix: {
    transform: [
      {
        scaleY: -1,
      },
    ],
  },
  list: {
    flex: 1,
  },
  listType: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'plum',
    padding: 32,
    flex: 0,
  },
  listTypeText: {
    fontSize: 16,
    lineHeight: 24,
  },
  text: {
    fontSize: 48,
    lineHeight: 52,
  },
});

type Props = {};

type State = {
  enableFix: boolean,
  listType: string,
};

class App extends React.Component<Props, State> {
  state = {
    enableFix: false,
    inverted: true,
    listType: 'flat',
  };

  onPressToggleFix = () => {
    this.setState(oldState => ({
      enableFix: !oldState.enableFix,
    }));
  };

  onPressToggleInverted = () => {
    this.setState(oldState => ({
      inverted: !oldState.inverted,
      enableFix: !oldState.inverted ? oldState.enableFix : false,
    }));
  };

  onPressToggleListType = () => {
    this.setState(oldState => ({
      listType: oldState.listType === 'flat' ? 'section' : 'flat',
    }));
  };

  renderFlatListHeader = () => (
    <View style={styles.container}>
      <Text style={styles.text}>FL Header!</Text>
    </View>
  );

  renderFlatListFooter = () => (
    <View style={styles.container}>
      <Text style={styles.text}>FL Footer!</Text>
    </View>
  );

  renderFlatListEmpty = () => (
    <View
      style={[
        styles.container,
        this.state.enableFix ? styles.containerFix : null,
      ]}>
      <Text style={styles.text}>FL Empty!</Text>
    </View>
  );

  renderSectionListHeader = () => (
    <View style={styles.container}>
      <Text style={styles.text}>SL Header!</Text>
    </View>
  );

  renderSectionListFooter = () => (
    <View style={styles.container}>
      <Text style={styles.text}>SL Footer!</Text>
    </View>
  );

  renderSectionListEmpty = () => (
    <View
      style={[
        styles.container,
        this.state.enableFix ? styles.containerFix : null,
      ]}>
      <Text style={styles.text}>SL Empty!</Text>
    </View>
  );

  render() {
    let list = null;
    const {enableFix, inverted, listType} = this.state;

    if (listType === 'flat') {
      list = (
        <FlatList
          style={styles.list}
          data={[]}
          // extraData={enableFix}
          ListHeaderComponent={this.renderFlatListHeader}
          ListFooterComponent={this.renderFlatListFooter}
          ListEmptyComponent={this.renderFlatListEmpty}
          inverted={inverted}
        />
      );
    } else if (listType === 'section') {
      list = (
        <SectionList
          style={styles.list}
          sections={[]}
          // extraData={enableFix}
          ListHeaderComponent={this.renderSectionListHeader}
          ListFooterComponent={this.renderSectionListFooter}
          ListEmptyComponent={this.renderSectionListEmpty}
          inverted={inverted}
        />
      );
    }
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.listType}>
          <Text style={styles.listTypeText}>
            {listType === 'flat' ? 'FLAT' : 'SECTION'} LIST
            {inverted ? ' (INVERTED)' : ' (NORMAL)'}
            {inverted && enableFix ? ' (FIXED)' : ''}
          </Text>
        </View>
        {list}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={this.onPressToggleListType}
            style={[styles.button, styles.button1]}>
            <Text style={styles.buttonText}>
              SWITCH TO {listType === 'flat' ? 'SECTION' : 'FLAT'} LIST
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onPressToggleInverted}
            style={[styles.button, styles.button3]}>
            <Text style={styles.buttonText}>
              TURN INVERTED {inverted === true ? 'OFF' : 'ON'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onPressToggleFix}
            style={[
              styles.button,
              styles.button2,
              !inverted ? styles.buttonDisabled : null,
            ]}
            disabled={!inverted}>
            <Text style={styles.buttonText}>
              {enableFix === true ? 'DISABLE' : 'ENABLE'} FIX
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default App;
