---
layout: default
title: About
permalink: /about/
---

## About This Project

This project explores a reversed dynamic in the interaction between Large Language Models (LLMs) and software engineers. In the current generation of tooling, the AI agents are reviewing code and pairing with developers to answer questions and find bugs. The user experience leaves something to be desired, either lacking in the ability to read and understand the code that the AI agent is suggesting, or worse, hoping that you implicitly trust what changes are wrought on your codebase.

### The Junior Developer Dilemma

Current AI agents, while powerful, often operate at the level of a junior developer. They can generate code, answer questions, and perform tasks, but they lack the deep context, architectural understanding, and nuanced decision-making capabilities of experienced engineers. Relying heavily on them without critical oversight can lead to suboptimal solutions, technical debt, or subtle errors. Trusting them implicitly with complex engineering tasks is premature.

### Reversing the Relationship

This application reverses the relationship while fitting it into a common workflow. Instead of the engineer prompting a junior-level AI as a peer, or receiving AI code review, we let the AI act as a junior engineer. Given a task, it will make its best attempt at implementation. Then, using the familiar confines of the Github Pull Request, the senior engineer can ask the AI to refine its code, working towards a solid implementation.

### Goals and Vision

The goal is to investigate how this reversed interaction model can leverage the strengths of both AI (broad knowledge, pattern recognition, instruction generation) and human engineers (deep expertise, critical thinking, implementation skills). Can this lead to more efficient workflows, better knowledge transfer, or novel ways of building software? This project serves as a testbed for these ideas. At the same time, it's proven to be an effective way of writing code.

### Limitations

Editor's note: This is still fairly early in implementation, but still, AI Jr Dev, as well as this GH Pages site, has largely been developed using it as the primary tool. I have found that it's capable of understanding remarkably vague tasks and creating novel solutions. But it's still early days. 

Next, I would like to expand on its ability to understand a codebase. Currently, we're running a raw repo with no packages installed, no MCP, and no scripts being run. There's a lot we can do to expand the agent's context, at the cost of time and tokens. The added cost could be worth it if we can increase its accuracy.
