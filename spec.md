# KidLearn

## Current State
The app has a complete structure with all 8 classes (LKG to Class 6) and three mediums (English, Urdu, Telugu). The syllabus data file (`src/frontend/src/data/syllabus.ts`) has all classes, subjects, chapters, and topic titles defined. However, the `makeTopic()` function generates generic placeholder content for every topic using template strings -- so the `videoContent`, `notes`, and `chatExplanation` fields all say things like "Learn about [title] with fun animations" with no actual educational substance.

The TopicContent component renders three tabs:
1. **Video tab** -- shows `topic.videoContent` as a description + decorative play button
2. **Notes tab** -- renders `topic.notes` as markdown
3. **Chat tab** -- shows `topic.chatExplanation` as a conversation with Owly the owl mascot

## Requested Changes (Diff)

### Add
- Rich, topic-specific educational content for each topic across all classes/subjects/mediums
- Real notes in markdown format with proper explanations, key points, examples, and fun facts
- Meaningful video descriptions that describe what a child would actually learn
- Engaging, subject-specific chat explanations from Owly that actually teach the topic
- For Urdu and Telugu medium topics: appropriate language-specific content in those scripts where relevant

### Modify
- The `makeTopic()` helper in `syllabus.ts` to use a smarter content generation approach -- ideally, build a topic content lookup map for the most important/representative topics with real content, and improve the fallback template to be more educational and descriptive rather than generic
- The notes content should cover: What you will learn, key concepts with real explanations, fun facts, a worked example, and a summary
- The chatExplanation should have Owly explain the actual concept step by step, not just say "great question, keep exploring"

### Remove
- Generic placeholder phrases like "Understanding the basics of [topic]", "Real-world examples help understand better", "Ask questions when confused"
- Repetitive filler text that provides no educational value

## Implementation Plan
1. Build a topic content registry: a large `TOPIC_CONTENT` map keyed by topic title (or a normalized version) with real `{ videoContent, notes, chatExplanation }` for the most common/important topics across all subjects and classes
2. Enhance the `makeTopic()` fallback so even uncovered topics get subject-aware, class-appropriate content (e.g. for Maths topics: include formulas; for Science: include experiments; for EVS: include daily-life examples)
3. Add topic-specific key concepts to the Video tab's "Key Concepts" list by storing them in the topic data
4. Ensure Urdu and Telugu medium topics have culturally relevant examples and language references
5. The notes markdown should be properly structured with headings, bullet points, bold terms, and a summary box
6. Owly's chat should walk through the concept with 3-4 turns of actual teaching dialogue, not just praise
