---
layout: default
title: Tips for Working with AI Jr Dev
---

# {{ page.title }}

Working effectively with an AI pair programmer like AI Jr Dev involves clear communication and providing the right context. Here are some tips:

## Provide Necessary Context

*   **Include Relevant Files:** When requesting code changes, always ensure the issue or prompt includes the full contents of all files that need to be modified or are directly related to the change. This is the most crucial piece of context.
*   **Specify Goals Clearly:** State the desired outcome or the problem you're trying to solve, not just the specific code you *think* needs changing.
*   **Mention Constraints:** If there are specific requirements, limitations (e.g., "don't use external libraries," "must be compatible with Python 3.8"), or style guides, mention them upfront.

## Effective Prompting

*   **Be Specific:** Vague requests lead to vague results. Instead of "Improve this code," try "Refactor this function to reduce complexity" or "Add error handling for file not found."
*   **Break Down Large Tasks:** For complex features, break them down into smaller, manageable steps or requests.
*   **Iterate:** Don't expect perfection on the first try. Review the AI's suggestions, provide feedback, and ask for revisions. Use prompts like "That's close, but can you also..." or "Please modify the previous suggestion to..."

## Prompts AI Jr Dev Excels At

*   **Boilerplate Code:** Generating standard code structures (e.g., classes, functions, HTML layouts).
*   **Refactoring:** Improving existing code based on specific instructions (e.g., renaming variables, extracting methods).
*   **Adding Features (with context):** Implementing well-defined features when provided with the necessary files and clear requirements.
*   **Writing Tests:** Generating unit tests for existing functions.
*   **Explaining Code:** Describing what a piece of code does.
*   **Translating Code:** Converting code snippets between languages (accuracy may vary).

## Prompts AI Jr Dev May Struggle With

*   **Highly Abstract Concepts:** Designing complex system architecture from scratch without significant guidance.
*   **Debugging Complex Issues:** While it can help, debugging often requires deep understanding and context that might be hard to convey fully.
*   **Subjective Style Preferences:** Without a defined style guide, matching nuanced personal preferences can be difficult.
*   **Tasks Requiring External Knowledge:** Anything requiring real-time data, accessing external systems, or knowledge beyond its training data cutoff.
*   **Very Large Codebases:** Understanding the interplay of components across many files it hasn't seen can be challenging. Provide relevant snippets.
