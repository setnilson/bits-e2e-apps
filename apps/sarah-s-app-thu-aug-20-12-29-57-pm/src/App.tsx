import { Spacing } from '@datadog/druids/layout/Spacing';
import { Text } from '@datadog/druids/typography/Text';

import './App.css';

function App() {
    return (
        <Spacing as="main" className="kelly-page" padding="lg">
            <Text as="h1" className="kelly-title" overflowWrap="anywhere" weight="bold">
                kelly
            </Text>
        </Spacing>
    );
}

export default App;
