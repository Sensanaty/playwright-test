module.exports = {
  apps: [
    {
      name: "Frontend",
      cwd: "./trengo-frontend",
      script: "pnpm",
      args: "run dev",
    },
    {
      name: "Backend",
      cwd: "./backend",
      script: "rails",
      args: "s -p 8000",
      interpreter: 'bash',
    },
  ],
};
