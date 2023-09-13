/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.27
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1IngressLoadBalancerStatus } from './v1IngressLoadBalancerStatus';

/**
* IngressStatus describe the current state of the Ingress.
*/
export class V1IngressStatus {
    'loadBalancer'?: V1IngressLoadBalancerStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "loadBalancer",
            "baseName": "loadBalancer",
            "type": "V1IngressLoadBalancerStatus"
        }    ];

    static getAttributeTypeMap() {
        return V1IngressStatus.attributeTypeMap;
    }
}

