# Adapt Framework v2 Multilanguage Testing Package

This Testcourse consists of 4 Languages.
- English
- German
- French --> Content with special characters such as accented characters
- Hebrew --> RTL-Language in a course with LTR

Course content was translated using google translate. The transaltaion is not complete but should be enough to test the basic functionallity of the language switcher and the behaviour of multilanguage Adapt-Courses.

## Completion configuration:
Spoor settings:
```
"_spoor": {
    "_isEnabled": true,
    "_tracking": {
        "_requireCourseCompleted": true,
        "_requireAssessmentPassed": true,
        "_shouldSubmitScore": true,
        "_shouldStoreResponses": false,
        "_shouldRecordInteractions": true
    },
    "_reporting": {
        "_comment": "Your options here are 'completed', 'passed', 'failed', and 'incomplete'",
        "_onTrackingCriteriaMet": "completed",
        "_onAssessmentFailure": "incomplete"
    }
}
```
Attempts for Assessment is set to 3. Each Assessment for each language has it's own id. This allows Adapt to keep track during multiple Language changes.


## Content
A prebuild Version of a Multilanguage Course can be faound here -> `/standard/build`

The Frameworks src Data is located here -> `/standard/`