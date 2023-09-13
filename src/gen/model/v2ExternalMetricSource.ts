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
import { V2MetricIdentifier } from './v2MetricIdentifier';
import { V2MetricTarget } from './v2MetricTarget';

/**
* ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
*/
export class V2ExternalMetricSource {
    'metric': V2MetricIdentifier;
    'target': V2MetricTarget;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metric",
            "baseName": "metric",
            "type": "V2MetricIdentifier"
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "V2MetricTarget"
        }    ];

    static getAttributeTypeMap() {
        return V2ExternalMetricSource.attributeTypeMap;
    }
}

