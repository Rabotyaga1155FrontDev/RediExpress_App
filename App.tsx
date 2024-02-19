import React, {useEffect, useState} from 'react';
import SplashScreen from './app/screens/session1/SplashScreen.tsx';

import onboarding1 from './app/ui/Onboarding.tsx';
import onboarding2 from './app/screens/session1/Onboarding1.tsx';
import Navigation from './app/navigation/Navigation.tsx';

function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <Navigation />;
}

export default App;