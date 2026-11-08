const { getJestProjectsAsync } = require("@nx/jest")

module.exports = async () => ({
  preset: "ts-jest",
  projects: await getJestProjectsAsync(),
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
})
