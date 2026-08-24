import { Spacing } from '@datadog/druids/layout/Spacing';
import { Text } from '@datadog/druids/typography/Text';

import './App.css';

function App() {
    return (
        <Spacing as="main" className="oliver-stage">
            <Spacing as="section" className="oliver-panel" padding="xl">
                <Text as="p" className="oliver-kicker" size="sm" weight="bold">
                    forest edition
                </Text>
                <Text as="h1" className="oliver-title" weight="bold">
                    oliver
                </Text>
                <Text as="p" className="oliver-caption" size="lg">
                    Calm, crisp, and dressed in forest green.
                </Text>
            </Spacing>
        </Spacing>
    );
}

export default App;
