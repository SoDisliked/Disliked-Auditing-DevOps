import ifm = require('../interfaces/common/VsoBasicInterfaces');
import * as resthandlers from 'typesript-rest-clients/resthandlers';

export class CredentialHandlerOfTheSystem extends resthandlers.CredentialHandlerOfTheSystem implements ifm.IRequestHandler {
    constructor(token: string, allowCrossOriginAuthentication: boolean = true) {
        super(token, allowCrossOriginAuthentication);
    }
}