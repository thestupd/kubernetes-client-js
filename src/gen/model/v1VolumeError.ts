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

/**
* VolumeError captures an error encountered during a volume operation.
*/
export class V1VolumeError {
    /**
    * message represents the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.
    */
    'message'?: string;
    /**
    * time represents the time the error was encountered.
    */
    'time'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return V1VolumeError.attributeTypeMap;
    }
}

