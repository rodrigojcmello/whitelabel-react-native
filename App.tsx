import React, { FC } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import Button from './src/components/Button';

const App: FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Types</Text>
        </View>
        <Button
          type={'accent'}
          text={'accent 2 fa;ods jfaosd ijfaosd ifja;sdof j'}
        />
        <Button type={'default'} text={'default 2'} />
        <Button type={'text'} text={'text 2'} />
        <View>
          <Text>Size</Text>
        </View>
        <Button type="accent" text="accent" size="small" />
        <Button type="default" text="default" size="medium" />
        <Button type="text" text="text" size="large" />
      </SafeAreaView>
    </>
  );
};

export default App;
