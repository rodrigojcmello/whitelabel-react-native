import React, { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Button from './src/components/Button';

const App: FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button type={'accent'} text={'accent'} />
        <Button type={'default'} text={'default'} />
        <Button type={'text'} text={'text'} />
      </SafeAreaView>
    </>
  );
};

export default App;
