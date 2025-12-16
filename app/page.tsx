export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>🚀 Next.js CI/CD Demo</h1>
      <h1>🚀 Next.js CI/CD Demo v2</h1>
      <h1>🚀 Next.js CI/CD Demo v3</h1>
      <h1>🚀 Next.js CI/CD Demo v4</h1>
      <p>Auto-deployed using GitHub + Vercel</p>
      <p>Last update: {new Date().toISOString()}</p>
    </main>
  );
}
