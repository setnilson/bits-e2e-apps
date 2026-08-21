import { Spacing } from '@datadog/druids/layout/Spacing';
import { Text } from '@datadog/druids/typography/Text';

import './App.css';

function App() {
    return (
        <Spacing as="main" className="chau-page" padding="lg">
            <Text as="h1" className="chau-title" overflowWrap="anywhere" weight="bold">
                Chau
            </Text>
        </Spacing>
    );
}

export default App;
