<div align="center">

[![Visit Quivr](./header.png)](https://quivr.app)

# [Quivr](https://quivr.app)<a id="quivr"></a>

Open-source RAG Framework

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`quivr.apiKey.createNewKey`](#quivrapikeycreatenewkey)
  * [`quivr.apiKey.deleteKey`](#quivrapikeydeletekey)
  * [`quivr.apiKey.getList`](#quivrapikeygetlist)
  * [`quivr.brain.acceptInvitation`](#quivrbrainacceptinvitation)
  * [`quivr.brain.createNewBrain`](#quivrbraincreatenewbrain)
  * [`quivr.brain.declineInvitation`](#quivrbraindeclineinvitation)
  * [`quivr.brain.getAllForUser`](#quivrbraingetallforuser)
  * [`quivr.brain.getAllPublic`](#quivrbraingetallpublic)
  * [`quivr.brain.getById`](#quivrbraingetbyid)
  * [`quivr.brain.getDefaultBrain`](#quivrbraingetdefaultbrain)
  * [`quivr.brain.getDescription`](#quivrbraingetdescription)
  * [`quivr.brain.getQuestionContext`](#quivrbraingetquestioncontext)
  * [`quivr.brain.getUsers`](#quivrbraingetusers)
  * [`quivr.brain.removeUserSubscription`](#quivrbrainremoveusersubscription)
  * [`quivr.brain.setDefault`](#quivrbrainsetdefault)
  * [`quivr.brain.updateConfiguration`](#quivrbrainupdateconfiguration)
  * [`quivr.brain.updateSecretsValues`](#quivrbrainupdatesecretsvalues)
  * [`quivr.brain.updateSubscription`](#quivrbrainupdatesubscription)
  * [`quivr.brainSubscription.getUserInvitation`](#quivrbrainsubscriptiongetuserinvitation)
  * [`quivr.brainSubscription.inviteUsersToBrain`](#quivrbrainsubscriptioninviteuserstobrain)
  * [`quivr.chat.addQuestionAndAnswer`](#quivrchataddquestionandanswer)
  * [`quivr.chat.createHandler`](#quivrchatcreatehandler)
  * [`quivr.chat.createStreamQuestionHandler`](#quivrchatcreatestreamquestionhandler)
  * [`quivr.chat.deleteChatById`](#quivrchatdeletechatbyid)
  * [`quivr.chat.getAllChats`](#quivrchatgetallchats)
  * [`quivr.chat.getHistory`](#quivrchatgethistory)
  * [`quivr.chat.handleQuestion`](#quivrchathandlequestion)
  * [`quivr.chat.updateMessage`](#quivrchatupdatemessage)
  * [`quivr.chat.updateMetadataHandler`](#quivrchatupdatemetadatahandler)
  * [`quivr.contact.createNewContact`](#quivrcontactcreatenewcontact)
  * [`quivr.crawl.websiteDataProcessor`](#quivrcrawlwebsitedataprocessor)
  * [`quivr.health.checkStatus`](#quivrhealthcheckstatus)
  * [`quivr.health.checkStatus_0`](#quivrhealthcheckstatus_0)
  * [`quivr.health.checkStatus_1`](#quivrhealthcheckstatus_1)
  * [`quivr.health.checkStatus_2`](#quivrhealthcheckstatus_2)
  * [`quivr.knowledge.deleteSpecificBrainKnowledge`](#quivrknowledgedeletespecificbrainknowledge)
  * [`quivr.knowledge.generateSignedUrl`](#quivrknowledgegeneratesignedurl)
  * [`quivr.knowledge.getAllKnowledge`](#quivrknowledgegetallknowledge)
  * [`quivr.notification.getByChatId`](#quivrnotificationgetbychatid)
  * [`quivr.onboarding.getUserInfo`](#quivronboardinggetuserinfo)
  * [`quivr.onboarding.updateUserOnboarding`](#quivronboardingupdateuseronboarding)
  * [`quivr.prompt.createPromptById`](#quivrpromptcreatepromptbyid)
  * [`quivr.prompt.getAllPublicPrompts`](#quivrpromptgetallpublicprompts)
  * [`quivr.prompt.getById`](#quivrpromptgetbyid)
  * [`quivr.prompt.updateById`](#quivrpromptupdatebyid)
  * [`quivr.root.statusCheck`](#quivrrootstatuscheck)
  * [`quivr.subscription.brainHandler`](#quivrsubscriptionbrainhandler)
  * [`quivr.subscription.unregisterHandler`](#quivrsubscriptionunregisterhandler)
  * [`quivr.upload.filePost`](#quivruploadfilepost)
  * [`quivr.user.getIdentityRoute`](#quivrusergetidentityroute)
  * [`quivr.user.getUserInformation`](#quivrusergetuserinformation)
  * [`quivr.user.updateIdentityRoute`](#quivruserupdateidentityroute)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Quivr&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Quivr } from "quivr-typescript-sdk";

const quivr = new Quivr({
  // Defining the base path is optional and defaults to https://api.quivr.app
  // basePath: "https://api.quivr.app",
  accessToken: "ACCESS_TOKEN",
});

const createNewKeyResponse = await quivr.apiKey.createNewKey();

console.log(createNewKeyResponse);
```

## Reference<a id="reference"></a>


### `quivr.apiKey.createNewKey`<a id="quivrapikeycreatenewkey"></a>

Create new API key for the current user.

- `current_user`: The current authenticated user.
- Returns the newly created API key.

This endpoint generates a new API key for the current user. The API key is stored in the database and associated with
the user. It returns the newly created API key.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewKeyResponse = await quivr.apiKey.createNewKey();
```

#### 🔄 Return<a id="🔄-return"></a>

[ApiKey](./models/api-key.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api-key` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.apiKey.deleteKey`<a id="quivrapikeydeletekey"></a>

Delete (deactivate) an API key for the current user.

- `key_id`: The ID of the API key to delete.

This endpoint deactivates and deletes the specified API key associated with the current user. The API key is marked
as inactive in the database.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteKeyResponse = await quivr.apiKey.deleteKey({
  keyId: "keyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### keyId: `string`<a id="keyid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api-key/{key_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.apiKey.getList`<a id="quivrapikeygetlist"></a>

Get all active API keys for the current user.

- `current_user`: The current authenticated user.
- Returns a list of active API keys with their IDs and creation times.

This endpoint retrieves all the active API keys associated with the current user. It returns a list of API key objects
containing the key ID and creation time for each API key.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await quivr.apiKey.getList();
```

#### 🔄 Return<a id="🔄-return"></a>

[ApiKeyInfo](./models/api-key-info.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api-keys` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.acceptInvitation`<a id="quivrbrainacceptinvitation"></a>

Accept an invitation to a brain for a user. This function removes the
invitation from the subscription invitations and adds the user to the
brain users.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const acceptInvitationResponse = await quivr.brain.acceptInvitation({
  brainId: "brainId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}/subscription/accept` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.createNewBrain`<a id="quivrbraincreatenewbrain"></a>

Create a new brain for the user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewBrainResponse = await quivr.brain.createNewBrain({
  description: "This is a description",
  name: "Default brain",
  status: "private",
  temperature: 0,
  max_tokens: 2000,
  brain_type: "doc",
  connected_brains_ids: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

##### name: `string`<a id="name-string"></a>

##### status: `string`<a id="status-string"></a>

##### model: `string`<a id="model-string"></a>

##### temperature: `number`<a id="temperature-number"></a>

##### max_tokens: `number`<a id="max_tokens-number"></a>

##### prompt_id: `string`<a id="prompt_id-string"></a>

##### brain_type: [`BrainTypeNullable`](./models/brain-type-nullable.ts)<a id="brain_type-braintypenullablemodelsbrain-type-nullablets"></a>

##### brain_definition: [`CreateApiBrainDefinitionNullable`](./models/create-api-brain-definition-nullable.ts)<a id="brain_definition-createapibraindefinitionnullablemodelscreate-api-brain-definition-nullablets"></a>

##### brain_secrets_values: `object`<a id="brain_secrets_values-object"></a>

##### connected_brains_ids: `string`[]<a id="connected_brains_ids-string"></a>

##### integration: [`BrainIntegrationSettingsNullable`](./models/brain-integration-settings-nullable.ts)<a id="integration-brainintegrationsettingsnullablemodelsbrain-integration-settings-nullablets"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.declineInvitation`<a id="quivrbraindeclineinvitation"></a>

Decline an invitation to a brain for a user. This function removes the
invitation from the subscription invitations.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const declineInvitationResponse = await quivr.brain.declineInvitation({
  brainId: "brainId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}/subscription/decline` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.getAllForUser`<a id="quivrbraingetallforuser"></a>

Retrieve all brains for the current user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllForUserResponse = await quivr.brain.getAllForUser();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.getAllPublic`<a id="quivrbraingetallpublic"></a>

Retrieve all Quivr public brains.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllPublicResponse = await quivr.brain.getAllPublic();
```

#### 🔄 Return<a id="🔄-return"></a>

[PublicBrain](./models/public-brain.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/public` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.getById`<a id="quivrbraingetbyid"></a>

Retrieve details of a specific brain by its ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await quivr.brain.getById({
  brainId: "brainId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.getDefaultBrain`<a id="quivrbraingetdefaultbrain"></a>

Retrieve or create the default brain for the current user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDefaultBrainResponse = await quivr.brain.getDefaultBrain();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/default` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.getDescription`<a id="quivrbraingetdescription"></a>

Retrieve the integration brain description.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDescriptionResponse = await quivr.brain.getDescription();
```

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationDescriptionEntity](./models/integration-description-entity.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/integrations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.getQuestionContext`<a id="quivrbraingetquestioncontext"></a>

Retrieve the question context from a specific brain.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQuestionContextResponse = await quivr.brain.getQuestionContext({
  brainId: "brainId_example",
  question: "question_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### question: `string`<a id="question-string"></a>

##### brainId: `string`<a id="brainid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}/documents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.getUsers`<a id="quivrbraingetusers"></a>

Get all users for a brain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsersResponse = await quivr.brain.getUsers({
  brainId: "brainId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.removeUserSubscription`<a id="quivrbrainremoveusersubscription"></a>

Remove a user's subscription to a brain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeUserSubscriptionResponse = await quivr.brain.removeUserSubscription(
  {
    brainId: "brainId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}/subscription` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.setDefault`<a id="quivrbrainsetdefault"></a>

Set a brain as the default for the current user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setDefaultResponse = await quivr.brain.setDefault({
  brainId: "brainId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}/default` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.updateConfiguration`<a id="quivrbrainupdateconfiguration"></a>

Update an existing brain's configuration.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateConfigurationResponse = await quivr.brain.updateConfiguration({
  brainId: "brainId_example",
  connected_brains_ids: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

##### description: `string`<a id="description-string"></a>

##### name: `string`<a id="name-string"></a>

##### temperature: `number`<a id="temperature-number"></a>

##### model: `string`<a id="model-string"></a>

##### max_tokens: `number`<a id="max_tokens-number"></a>

##### status: `string`<a id="status-string"></a>

##### prompt_id: `string`<a id="prompt_id-string"></a>

##### brain_definition: [`ApiBrainDefinitionEntityInputNullable`](./models/api-brain-definition-entity-input-nullable.ts)<a id="brain_definition-apibraindefinitionentityinputnullablemodelsapi-brain-definition-entity-input-nullablets"></a>

##### connected_brains_ids: `string`[]<a id="connected_brains_ids-string"></a>

##### integration: [`BrainIntegrationUpdateSettingsNullable`](./models/brain-integration-update-settings-nullable.ts)<a id="integration-brainintegrationupdatesettingsnullablemodelsbrain-integration-update-settings-nullablets"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.updateSecretsValues`<a id="quivrbrainupdatesecretsvalues"></a>

Update an existing brain's secrets.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSecretsValuesResponse = await quivr.brain.updateSecretsValues({
  brainId: "brainId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}/secrets-values` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brain.updateSubscription`<a id="quivrbrainupdatesubscription"></a>

Update Brain Subscription

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSubscriptionResponse = await quivr.brain.updateSubscription({
  brainId: "brainId_example",
  email: "email_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

##### brainId: `string`<a id="brainid-string"></a>

##### rights: `string`<a id="rights-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}/subscription` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brainSubscription.getUserInvitation`<a id="quivrbrainsubscriptiongetuserinvitation"></a>

Get an invitation to a brain for a user. This function checks if the user
has been invited to the brain and returns the invitation status.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserInvitationResponse =
  await quivr.brainSubscription.getUserInvitation({
    brainId: "brainId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}/subscription` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.brainSubscription.inviteUsersToBrain`<a id="quivrbrainsubscriptioninviteuserstobrain"></a>

Invite multiple users to a brain by their emails. This function creates
or updates a brain subscription invitation for each user and sends an
invitation email to each user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const inviteUsersToBrainResponse =
  await quivr.brainSubscription.inviteUsersToBrain({
    brainId: "brain_id_example",
    requestBody: [{}],
    origin: "string_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

##### origin: `string`<a id="origin-string"></a>

##### requestBody: `object`<a id="requestbody-object"></a>
                   `object`[]

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}/subscription` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.chat.addQuestionAndAnswer`<a id="quivrchataddquestionandanswer"></a>

Add a new question and anwser to the chat.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addQuestionAndAnswerResponse = await quivr.chat.addQuestionAndAnswer({
  chatId: "chatId_example",
  question: "question_example",
  answer: "answer_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### question: `string`<a id="question-string"></a>

##### answer: `string`<a id="answer-string"></a>

##### chatId: `string`<a id="chatid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ChatNullable](./models/chat-nullable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat/{chat_id}/question/answer` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.chat.createHandler`<a id="quivrchatcreatehandler"></a>

Create a new chat with initial chat messages.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createHandlerResponse = await quivr.chat.createHandler({
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.chat.createStreamQuestionHandler`<a id="quivrchatcreatestreamquestionhandler"></a>

Create Stream Question Handler

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createStreamQuestionHandlerResponse =
  await quivr.chat.createStreamQuestionHandler({
    chatId: "chat_id_example",
    requestBody: {
      question: "question_example",
    },
    brainId: "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chatId: `string`<a id="chatid-string"></a>

##### brainId: `string`<a id="brainid-string"></a>

##### requestBody: [`ChatQuestion`](./models/chat-question.ts)<a id="requestbody-chatquestionmodelschat-questionts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat/{chat_id}/question/stream` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.chat.deleteChatById`<a id="quivrchatdeletechatbyid"></a>

Delete a specific chat by chat ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteChatByIdResponse = await quivr.chat.deleteChatById({
  chatId: "chatId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chatId: `string`<a id="chatid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat/{chat_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.chat.getAllChats`<a id="quivrchatgetallchats"></a>

Retrieve all chats for the current user.

- `current_user`: The current authenticated user.
- Returns a list of all chats for the user.

This endpoint retrieves all the chats associated with the current authenticated user. It returns a list of chat objects
containing the chat ID and chat name for each chat.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllChatsResponse = await quivr.chat.getAllChats();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.chat.getHistory`<a id="quivrchatgethistory"></a>

Get Chat History Handler

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHistoryResponse = await quivr.chat.getHistory({
  chatId: "chatId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chatId: `string`<a id="chatid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ChatItem](./models/chat-item.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat/{chat_id}/history` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.chat.handleQuestion`<a id="quivrchathandlequestion"></a>

Create Question Handler

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const handleQuestionResponse = await quivr.chat.handleQuestion({
  chatId: "chat_id_example",
  requestBody: {
    question: "question_example",
  },
  brainId: "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chatId: `string`<a id="chatid-string"></a>

##### brainId: `string`<a id="brainid-string"></a>

##### requestBody: [`ChatQuestion`](./models/chat-question.ts)<a id="requestbody-chatquestionmodelschat-questionts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat/{chat_id}/question` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.chat.updateMessage`<a id="quivrchatupdatemessage"></a>

Update Chat Message

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMessageResponse = await quivr.chat.updateMessage({
  chatId: "chatId_example",
  messageId: "messageId_example",
  thumbs: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### thumbs: `boolean`<a id="thumbs-boolean"></a>

##### chatId: `string`<a id="chatid-string"></a>

##### messageId: `string`<a id="messageid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat/{chat_id}/{message_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.chat.updateMetadataHandler`<a id="quivrchatupdatemetadatahandler"></a>

Update chat attributes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMetadataHandlerResponse = await quivr.chat.updateMetadataHandler({
  chatId: "chatId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chatId: `string`<a id="chatid-string"></a>

##### chat_name: `string`<a id="chat_name-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat/{chat_id}/metadata` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.contact.createNewContact`<a id="quivrcontactcreatenewcontact"></a>

Post Contact

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewContactResponse = await quivr.contact.createNewContact({
  customer_email: "customer_email_example",
  content: "content_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customer_email: `string`<a id="customer_email-string"></a>

##### content: `string`<a id="content-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contact` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.crawl.websiteDataProcessor`<a id="quivrcrawlwebsitedataprocessor"></a>

Crawl a website and process the crawled data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const websiteDataProcessorResponse = await quivr.crawl.websiteDataProcessor({
  brainId: "brainId_example",
  url: "url_example",
  js: false,
  depth: 1,
  max_pages: 100,
  max_time: 60,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

##### brainId: `string`<a id="brainid-string"></a>

The ID of the brain

##### js: `boolean`<a id="js-boolean"></a>

##### depth: `number`<a id="depth-number"></a>

##### max_pages: `number`<a id="max_pages-number"></a>

##### max_time: `number`<a id="max_time-number"></a>

##### chatId: `string`<a id="chatid-string"></a>

The ID of the chat

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/crawl` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.health.checkStatus`<a id="quivrhealthcheckstatus"></a>

Healthz

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkStatusResponse = await quivr.health.checkStatus();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat/healthz` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.health.checkStatus_0`<a id="quivrhealthcheckstatus_0"></a>

Healthz

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkStatus_0Response = await quivr.health.checkStatus_0();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/crawl/healthz` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.health.checkStatus_1`<a id="quivrhealthcheckstatus_1"></a>

Healthz

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkStatus_1Response = await quivr.health.checkStatus_1();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/healthz` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.health.checkStatus_2`<a id="quivrhealthcheckstatus_2"></a>

Healthz

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkStatus_2Response = await quivr.health.checkStatus_2();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload/healthz` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.knowledge.deleteSpecificBrainKnowledge`<a id="quivrknowledgedeletespecificbrainknowledge"></a>

Delete a specific knowledge from a brain.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSpecificBrainKnowledgeResponse =
  await quivr.knowledge.deleteSpecificBrainKnowledge({
    knowledgeId: "knowledgeId_example",
    brainId: "brainId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### knowledgeId: `string`<a id="knowledgeid-string"></a>

##### brainId: `string`<a id="brainid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge/{knowledge_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.knowledge.generateSignedUrl`<a id="quivrknowledgegeneratesignedurl"></a>

Generate a signed url to download the file from storage.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateSignedUrlResponse = await quivr.knowledge.generateSignedUrl({
  knowledgeId: "knowledgeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### knowledgeId: `string`<a id="knowledgeid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge/{knowledge_id}/signed_download_url` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.knowledge.getAllKnowledge`<a id="quivrknowledgegetallknowledge"></a>

Retrieve and list all the knowledge in a brain.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllKnowledgeResponse = await quivr.knowledge.getAllKnowledge({
  brainId: "brainId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

The ID of the brain

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.notification.getByChatId`<a id="quivrnotificationgetbychatid"></a>

Get notifications by chat_id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByChatIdResponse = await quivr.notification.getByChatId({
  chatId: "chatId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chatId: `string`<a id="chatid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{chat_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.onboarding.getUserInfo`<a id="quivronboardinggetuserinfo"></a>

Get user onboarding information for the current user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserInfoResponse = await quivr.onboarding.getUserInfo();
```

#### 🔄 Return<a id="🔄-return"></a>

[OnboardingStatesNullable](./models/onboarding-states-nullable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/onboarding` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.onboarding.updateUserOnboarding`<a id="quivronboardingupdateuseronboarding"></a>

Update user onboarding information for the current user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserOnboardingResponse =
  await quivr.onboarding.updateUserOnboarding({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### onboarding_a: `boolean`<a id="onboarding_a-boolean"></a>

##### onboarding_b1: `boolean`<a id="onboarding_b1-boolean"></a>

##### onboarding_b2: `boolean`<a id="onboarding_b2-boolean"></a>

##### onboarding_b3: `boolean`<a id="onboarding_b3-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OnboardingStates](./models/onboarding-states.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/onboarding` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.prompt.createPromptById`<a id="quivrpromptcreatepromptbyid"></a>

Create a prompt by its id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPromptByIdResponse = await quivr.prompt.createPromptById({
  title: "title_example",
  content: "content_example",
  status: "private",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

##### content: `string`<a id="content-string"></a>

##### status: [`PromptStatusEnum`](./models/prompt-status-enum.ts)<a id="status-promptstatusenummodelsprompt-status-enumts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PromptNullable](./models/prompt-nullable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/prompts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.prompt.getAllPublicPrompts`<a id="quivrpromptgetallpublicprompts"></a>

Retrieve all public prompt

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllPublicPromptsResponse = await quivr.prompt.getAllPublicPrompts();
```

#### 🔄 Return<a id="🔄-return"></a>

[Prompt](./models/prompt.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/prompts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.prompt.getById`<a id="quivrpromptgetbyid"></a>

Retrieve a prompt by its id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await quivr.prompt.getById({
  promptId: "promptId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### promptId: `string`<a id="promptid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PromptNullable](./models/prompt-nullable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/prompts/{prompt_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.prompt.updateById`<a id="quivrpromptupdatebyid"></a>

Update a prompt by its id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await quivr.prompt.updateById({
  promptId: "promptId_example",
  status: "private",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### promptId: `string`<a id="promptid-string"></a>

##### title: `string`<a id="title-string"></a>

##### content: `string`<a id="content-string"></a>

##### status: [`PromptStatusEnumNullable`](./models/prompt-status-enum-nullable.ts)<a id="status-promptstatusenumnullablemodelsprompt-status-enum-nullablets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PromptNullable](./models/prompt-nullable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/prompts/{prompt_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.root.statusCheck`<a id="quivrrootstatuscheck"></a>

Root endpoint to check the status of the API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const statusCheckResponse = await quivr.root.statusCheck();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.subscription.brainHandler`<a id="quivrsubscriptionbrainhandler"></a>

Subscribe to a public brain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const brainHandlerResponse = await quivr.subscription.brainHandler({
  brainId: "brainId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}/subscribe` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.subscription.unregisterHandler`<a id="quivrsubscriptionunregisterhandler"></a>

Unsubscribe from a brain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unregisterHandlerResponse = await quivr.subscription.unregisterHandler({
  brainId: "brainId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brains/{brain_id}/unsubscribe` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.upload.filePost`<a id="quivruploadfilepost"></a>

Upload File

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const filePostResponse = await quivr.upload.filePost({
  brainId: "brainId_example",
  uploadFile: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brainId: `string`<a id="brainid-string"></a>

The ID of the brain

##### uploadFile: `Uint8Array | File | buffer.File`<a id="uploadfile-uint8array--file--bufferfile"></a>

##### chatId: `string`<a id="chatid-string"></a>

The ID of the chat

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.user.getIdentityRoute`<a id="quivrusergetidentityroute"></a>

Get user identity.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getIdentityRouteResponse = await quivr.user.getIdentityRoute();
```

#### 🔄 Return<a id="🔄-return"></a>

[UserIdentity](./models/user-identity.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user/identity` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.user.getUserInformation`<a id="quivrusergetuserinformation"></a>

Get user information and statistics.

- `current_user`: The current authenticated user.
- Returns the user's email, maximum brain size, current brain size, maximum requests number, requests statistics, and the current date.

This endpoint retrieves information and statistics about the authenticated user. It includes the user's email, maximum brain size,
current brain size, maximum requests number, requests statistics, and the current date. The brain size is calculated based on the
user's uploaded vectors, and the maximum brain size is obtained from the environment variables. The requests statistics provide
information about the user's API usage.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserInformationResponse = await quivr.user.getUserInformation();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `quivr.user.updateIdentityRoute`<a id="quivruserupdateidentityroute"></a>

Update user identity.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateIdentityRouteResponse = await quivr.user.updateIdentityRoute({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

##### company: `string`<a id="company-string"></a>

##### onboarded: `boolean`<a id="onboarded-boolean"></a>

##### company_size: `string`<a id="company_size-string"></a>

##### usage_purpose: `string`<a id="usage_purpose-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserIdentity](./models/user-identity.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user/identity` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
