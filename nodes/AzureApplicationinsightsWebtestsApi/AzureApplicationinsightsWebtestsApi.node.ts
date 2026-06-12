import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApplicationinsightsWebtestsApi implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Applicationinsights Webtests API',
                name: 'N8nDevAzureApplicationinsightsWebtestsApi',
                icon: { light: 'file:./azure-applicationinsights-webtests-api.png', dark: 'file:./azure-applicationinsights-webtests-api.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Application Insights client for web test alerting',
                defaults: { name: 'Azure Applicationinsights Webtests API' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApplicationinsightsWebtestsApiApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
