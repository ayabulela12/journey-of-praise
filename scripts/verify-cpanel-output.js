const fs = require("fs")
const path = require("path")

const apiDir = path.join(__dirname, "..", "out", "api", "booking")

if (!fs.existsSync(apiDir)) {
  console.error("\n[cPanel] Missing out/api/booking/ — PHP email endpoint was not exported.")
  process.exit(1)
}

const files = fs.readdirSync(apiDir).sort()
const hasConfig = files.includes("config.php")

console.log("\n[cPanel] PHP email files exported to out/api/booking/:")
for (const file of files) {
  console.log(`  - ${file}`)
}

if (!hasConfig) {
  console.error(
    "\n[cPanel] config.php is missing. Add SMTP values to .env.local and rebuild."
  )
  process.exit(1)
}

console.log(
  "\n[cPanel] Upload the contents of out/ to public_html (including out/api/booking/config.php)."
)
console.log(
  "[cPanel] The Route (app) table above only lists Next.js pages — PHP files are copied from public/ separately.\n"
)
