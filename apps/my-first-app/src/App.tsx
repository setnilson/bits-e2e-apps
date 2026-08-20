function App() {
    return (
        <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
            <section>
                <h1>Welcome to my-first-app</h1>
                <p>
                    Your Datadog App is ready. This starter has no DRUIDS
                    dependency, so it builds and uploads standalone.
                </p>
                <a
                    href="https://docs.datadoghq.com/actions/datadog_apps/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Open Datadog Apps docs
                </a>
            </section>
        </main>
    );
}

export default App;
