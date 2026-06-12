import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApplicationinsightsWebtestsApiApi implements ICredentialType {
        name = 'N8nDevAzureApplicationinsightsWebtestsApiApi';

        displayName = 'Azure Applicationinsights Webtests API';

        icon: Icon = { light: 'file:../nodes/AzureApplicationinsightsWebtestsApi/azure-applicationinsights-webtests-api.png', dark: 'file:../nodes/AzureApplicationinsightsWebtestsApi/azure-applicationinsights-webtests-api.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Applicationinsights Webtests API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
