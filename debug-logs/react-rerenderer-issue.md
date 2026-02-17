## Problem
Component did not re-render after second product creation.

## Root Cause
Incorrect state update logic in promise chain.
setCount(c + 1) used wrong parameter.

## Fix
Used functional update:
setCount(prev => prev + 1)

## Engineering Lesson
React state updates must use previous state safely in async flows.
