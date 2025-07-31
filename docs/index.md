---
sidebar_position: 0
---

# astrsk.ai Docs 
Welcome to astrsk.ai, a platform that enables immersive AI-driven roleplay experiences.
In asterisk, sessions are where you actually interact with the AI to unleash your creativity!
But before you can start a session, there are two essential building blocks that is at the center of its customizability: Cards and Flows.
The getting started guide will walk you through the essential steps to get you up and running on astrsk so that you are start your roleplay session. 🚀✨

## Setting up astrsk can be done by four simple steps:
1. Connect your LLM provider to astrsk
2. Create or import a flow
3. Create or import card(s)
4. Create or import session

## 1. Connect your LLM provider to astrsk
You need to bring your own large language model(LLM) to connect to astrsk. The LLM you connect to astrsk will be used to run flows, which in turn connects to a session to dictate how the session is conducted.
### How to connect your API:
1. In the side navigation, press the setting icon and then press [Providers] in the [App Preferences]
2. Once you are there, select a provider that you want to connect with and add your API to connect it with astrsk.
3. For a more detailed guide on connecting models, go to: [here](https://astrskai.github.io/astrsk-ai-docs/provider/connect-providers/)
4. You can also use Ollama to connect your local LLM to astrsk. For detailed information on how to do that, go to: [here](https://astrskai.github.io/astrsk-ai-docs/provider/provider-ollama)
5. Connections such as KoboldCPP and AI Horde is also available. The following are instructions to get them set up: [KoboldCPP](https://astrskai.github.io/astrsk-ai-docs/provider/provider-koboldcpp), [AI Horde](https://astrskai.github.io/astrsk-ai-docs/provider/provider-aihorde)

## 2. Create/import a flow
Flows define how the AI will process information, generate responses, and interact with the session cards selected for the session. **Each session requires one flow that has been validated and is in [ready] state.**
### How to create a flow:
1. In the side navigation, press the [+ Create] button under the flow and agents section to initiate the creation of a new flow.
2. If you want to learn more about how flows work and how to edit them, go to: [here](https://astrskai.github.io/astrsk-ai-docs/flow/)
### How to import a flow:
1. In the side navigation, press the [Import] button under the flow and agents to import a flow.
2. You will be able to import any astrsk flow(in JSON format) to the app.
3. You can also import any presets from SillyTavern to use as your flow in astrsk.

## 3. Create/import cards
There are two types of cards in asterisk; *character and plot*. *Character cards* define a character’s personality and its behavior, while *plot cards* define and shape the story of your session. **Every session needs at least one valid character card and can only have a maximum of one plot card.**
### How to create a card:
1. In the side navigation, press the [+ Create] button under the cards section to initiate the creation of a new card.
2. If you want to learn more about how flows work and how to edit them, go to the following:
- Information about character cards: [here](https://astrskai.github.io/astrsk-ai-docs/card/character-card)
- Information about plot cards: [here](https://astrskai.github.io/astrsk-ai-docs/card/plot-card)
### How to import a card: 
1. In the side navigation, press the [Import] button under the cards section to import a card.
2. V2/V3 character cards from external AI companion apps can be imported. Each import results in one character card plus one plot card in astrsk, as the relevant fields are distributed across these two different card formats.

## 4. Create/import session
### How to create a session:
Creating a session is very straight forward. In the side navigation, press the [+ Create] button under the sessions section to start the session creation process. The process is divided in to small steps so it should be pretty self-explanatory. However, if you want to detailed guide, go to: [here](https://astrskai.github.io/astrsk-ai-docs/session/create-session).
#### Things to be reminded of when creating your session:
- Every session needs at least one valid character card and can only have a maximum of one plot card.
- Each session requires one flow that has been validated and is in [ready] state.
### How to import a session:
In the side navigation, press the [Import] button under the sessions section to import a session. If you import a session, you will import all the cards and flows that were connected to the session. the newly imported cards and flows will be added to your astrsk environment in the relevant section. if you want to detailed guide, go to: [here](https://astrskai.github.io/astrsk-ai-docs/session/import-session)
