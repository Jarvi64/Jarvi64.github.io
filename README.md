# Wordle Clone

A simple clone of the popular word-guessing game Wordle, implemented using Javascript.

![Wordle Clone Screenshot](screenshot.png)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)

## Introduction

Wordle Clone is a recreation of the classic word-guessing game Wordle. Test your vocabulary and logical thinking as you try to guess the secret word within a limited number of attempts.

## Features

- Randomly generated secret word for each game.
- Limited attempts to guess the word.
- Feedback on guessed letters (correct, incorrect, or in the wrong position).
-  **Green**: A guessed letter is in the correct position in the secret word.
- **Yellow**: A guessed letter is in the secret word, but it's not in the correct position.
- **Grey**: A guessed letter is not in the secret word.

For example, let's say the secret word is "UNITY" and you guess "THINK". The feedback might look like this:

- "T" - **Yellow** (Correct letter, but in the wrong position)
- "H" - **Grey** (Correct letter in the correct position)
- "I" - **Green** (Incorrect letter)
- "N" - **Yellow** (Incorrect letter)
- "K" - **Grey** (Incorrect letter)

