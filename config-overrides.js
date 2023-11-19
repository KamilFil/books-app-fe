const {override} = require("customize-cra");
const {aliasDangerous, configPaths} = require("react-app-rewire-alias/src/aliasDangerous");

module.exports = {
    webpack: override(
        aliasDangerous(configPaths('./tsconfig.paths.json'))
    )
}