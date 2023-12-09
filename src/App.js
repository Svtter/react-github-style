import { BaseStyles, ThemeProvider } from '@primer/react';
import Hello from './components/Hello';

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <div>learn react</div>
        <div><Hello/></div>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
