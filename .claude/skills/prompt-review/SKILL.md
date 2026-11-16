---
name: prompt-review
description: Reviews and improves a rough prompt before it is executed. Use when the user runs /prompt-review.
disable-model-invocation: true
---

The user wrote this rough prompt:

$ARGUMENTS

Do NOT execute it yet. Your job is to turn it into a clear, unambiguous prompt.

## 1. Understand
Restate in one or two sentences what you think the user wants to achieve.

## 2. Check for gaps
Check the prompt against this list and note what is missing or unclear:
- Goal: what is the end result?
- Context: which files, project or situation does it refer to?
- Scope: what should be changed, and what must NOT be touched?
- Constraints: technologies, style, limits?
- Output: what exactly should be delivered (code, file, explanation)?
- Done: how do we know the task is finished and correct?
- Ambiguity: any word or phrase that could be read two ways?

## 3. Ask
If anything is unclear, ask the user your questions, numbered, all at once.
Ask only questions that would change the result. Maximum 5.
Then STOP and wait for answers.

## 4. Draft
Write the improved prompt in a code block, with these sections:
Goal, Context, Requirements, Out of scope, Done when.

## 5. Approve
Ask: "Approve, edit, or cancel?"
- Approve → execute the improved prompt.
- Edit → apply the changes and show the new version.
- Cancel → stop.
Never execute before explicit approval.
