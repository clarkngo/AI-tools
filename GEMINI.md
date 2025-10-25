# Gemini's Guide to Adding New AI Tools

When a user requests to add a new AI tool to the directory, I will perform the following steps:

1.  **Gather Information:** I will obtain the tool's name, URL, a brief description, and relevant tags from the user.
2.  **Generate Tutorial Content:** I will create a structured tutorial for the new tool, including the following sections:
    *   `whatIs`: A brief explanation of the tool.
    *   `useCases`: A list of common use cases.
    *   `gettingStarted`: A step-by-step guide to getting started with the tool.
    *   `tips`: A list of tips for using the tool effectively.
3.  **Update `src/data.js`:** I will add a new entry for the tool to the `tools` array in `src/data.js`, including the information gathered in the previous steps.
4.  **Update `README.md`:** I will add the new tool to the list of AI tools in the `README.md` file.
5.  **Create Tutorial Module & Emoji:** I will create a tutorial module in `src/tutorials/` exporting the structured tutorial content (`whatIs`, `useCases`, `gettingStarted`, `tips`), add an explicit `emoji` field to the corresponding `src/data.js` entry, and ensure the `ToolCard` displays the emoji on the site.

## Important Notes

*   **Ignore the `reference/` folder:** This folder contains reference materials for legacy HTML pages. Do not search, read, or update files in this folder. Focus only on the React components in `src/` and the tutorial modules in `src/tutorials/`.

## Committing Changes

When committing changes, please include a summary of the changes in the `CHANGELOG.md` file.

## AI Tool Stats

**Total Tools:** 43

**Tools by Tag:**
*   writing: 15
*   coding: 6
*   conversation: 3
*   multimodal: 1
*   google: 3
*   real-time: 1
*   social-media: 1
*   research: 7
*   notes: 2
*   presentation: 2
*   design: 8
*   ideas: 1
*   education: 12
*   productivity: 15
*   accessibility: 1
*   world-building: 1
*   maps: 1
*   history: 1
*   science: 2
*   math: 1
*   machine-learning: 2
*   development: 3
*   code-editor: 1
*   images: 6
*   art: 5
*   video: 4
*   creative: 2
*   meetings: 1
*   transcription: 2
*   openai: 1
*   game-dev: 3
*   audio: 2
*   voice-to-text: 1
*   search: 1
