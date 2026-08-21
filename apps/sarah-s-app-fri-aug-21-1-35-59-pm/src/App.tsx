import { Spacing } from '@datadog/druids/layout/Spacing';
import { Text } from '@datadog/druids/typography/Text';

import './App.css';

function App() {
    return (
        <Spacing as="main" className="oliver-page" padding="lg">
            <div className="oliver-stage" aria-label="Oliver in forest green">
                <div className="oliver-kicker">fresh from the canopy</div>
                <Text as="h1" className="oliver-title" overflowWrap="anywhere" weight="bold">
                    oliver
                </Text>
                <div className="oliver-rule" />
            </div>
        </Spacing>
    );
}

export default App;
