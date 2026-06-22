const fs = require("fs")
const path = require("path")

const rootDir = path.join(__dirname, "..")
const envPath = path.join(rootDir, ".env.local")
const outputPath = path.join(rootDir, "public", "api", "booking", "config.php")

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {}
  }

  return fs.readFileSync(filePath, "utf8").split("\n").reduce((env, line) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) {
      return env
    }

    const separatorIndex = trimmed.indexOf("=")
    if (separatorIndex === -1) {
      return env
    }

    const key = trimmed.slice(0, separatorIndex).trim()
    const value = trimmed.slice(separatorIndex + 1).trim()
    env[key] = value
    return env
  }, {})
}

function escapePhpString(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/'/g, "\\'")
}

const env = parseEnvFile(envPath)
const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "ADMIN_EMAIL"]
const missing = required.filter((key) => !env[key])

if (missing.length > 0) {
  console.error(
    `Missing ${missing.join(", ")} in .env.local. Cannot generate public/api/booking/config.php.`
  )
  process.exit(1)
}

const config = `<?php

// Generated during build from .env.local — do not commit this file.
return [
    'smtp_host' => '${escapePhpString(env.SMTP_HOST)}',
    'smtp_port' => ${Number(env.SMTP_PORT)},
    'smtp_user' => '${escapePhpString(env.SMTP_USER)}',
    'smtp_pass' => '${escapePhpString(env.SMTP_PASS)}',
    'admin_email' => '${escapePhpString(env.ADMIN_EMAIL)}',
];
`

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, config)
console.log("Generated public/api/booking/config.php for cPanel deploy.")
