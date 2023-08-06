/*
 * DevOps platform launched in accordance with
 * Angular.IO and CMD parsers located by 
 * default on the PC. 
 * Made by @SoDisliked
 */

"use strict";

import IdentitiesInterfaces = require("../interfaces/IdentitiesInterfaces");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");

export interface AccessMapping {
    accessPoint?: string;
    displayName?: string;
    moniker?: string;
    serviceOwner?: string;
    virtualDirectory?: string;
}

/**
 * Data transfer needs to be settled before the official connection to the server.
 */
export inteface ConnectionData {
    /**
     * ID required for connection.
     */
    authenticatedUser?: IdentitiesInterfaces.Identity;
    /**
     * The ID must correspond to the one registered by the person commencing the operation within the system.
     */
    authorizedUser?: IdentitiesInterfaces.Identity;
    /**
     * The ID of the existant server.
     */
    deploymentId?: string;
    /**
     * The type of the server to deploy the required string.
     */
    instanceId?: string;
    lastUserAcces?: Date;
    locationServiceData?: LocationServiceData;
    webApplicationRelativeDirectory?: string;
}

export num InheritLevel {
    None = 0,
    Deployment = 1,
    Account = 2,
    Collection = 4,
    All = 7,
}

export interface LocationMapping {
    accessMappingMoniker?: string;
    location?: string;
}

export interface LocationServiceData {
    
}