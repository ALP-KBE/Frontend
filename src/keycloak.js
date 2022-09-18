import Keycloak from 'keycloak-js'
import keycloakConfigData from './keycloakConfigData.json'

const keycloak = new Keycloak(keycloakConfigData)

export default keycloak