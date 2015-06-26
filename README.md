# Adapt Framework v2 Pre-Release Testing Packages
Thank you for your interest in the Adapt v2 pre-release testing program! Please read the following notes carefully.

## The test packages
We’ve prepared a couple of packages for you to use in your testing.

The easiest one to get hold of is the one that’s installed as a course on our Adapt Community site, you can find the link to it on the [Adapt Framework Pre-release Testing page](https://community.adaptlearning.org/course/view.php?id=4) and you can test it directly from there.

Should you want a copy to modify and/or install on your own LMS or web server, you can download it from this Github repository, using the ‘Download ZIP’ button on the main page or [check it out using Git](https://github.com/adaptlearning/adapt-test-package.git). You will need to extract the version you want to use (see below). We have included the source files so you can experiment with it and try out different configurations, modify the theme - everything you'd normally do when creating a course using the Adapt framework.

There are two courses in the version in Github. The version in the ‘rtl’ folder (coming soon) is for any testing of right-to-left languages such as Hebrew or Arabic; the version in the ‘standard’ folder is the same one you’ll find on the [Adapt Framework Pre-release Testing page](https://community.adaptlearning.org/course/view.php?id=4), only it includes the source as well to allow you to modify it as much as you need. This is the one most of you will want to use.

## Reporting bugs
If you think you’ve found a bug, there are a few things to consider before logging a new issue:

**Can you replicate it?** If the answer to this is no, please think carefully before logging an issue. Although we take bugs seriously, our development time is limited and we can’t afford to spend it failing to replicate bugs.

**Has the issue been reported before?** We have already built up a sizeable back-log of issues, so the issue may have been reported by someone already. Please do therefore [search the list of issues](https://adaptlearning.atlassian.net/issues/) first. If it has already been reported, any extra information you have garnered from your own tests could be invaluable in fixing it, so please add any such info to the existing ticket, should you find one.

**Is it covered?** By this we mean: is your set-up covered by the [tech spec](https://community.adaptlearning.org/pluginfile.php/24/mod_forum/attachment/3397/Adapt_Framework_v2.0.0_standards_definitions_draft.pdf)? In an ideal world, we’d commit to supporting Adapt on all browsers and operating systems. Unfortunately this isn’t feasible with the resources we have, so we have to prioritise those named on the tech spec.

## What to report
If your bug passes the above tests, the next step is to create an issue.

Try to give your issue a succinct name. Something short, but which still give the reader a good summary of the problem without needing to open the issue.

The main body of the issue needs to contain as much detail as possible about the bug you can provide. This should focus on the following:

A **description** of the bug, **steps** on how to replicate it and your **set up** (i.e. browser and operating system - [aboutmybrowser](http://aboutmybrowser.com) can be useful here). Feel free to include any other information which you think may be useful, screenshots in particular can often give more useful information than words alone!

Make a note of any JavaScript errors you see. You may need to press F12 to reveal your browser's developer tools. If you are testing using a tablet or smartphone you will need to connect it to your PC or Mac in order to get access to the developer tools.

Additionally, if you have been making configuration changes to the test package, please describe what configuration changes are necessary in order to replicate the bug. Please include the snapshots of the relevant .json or .less where necessary (or entire .json/.less files, if that makes more sense).

## Reporting an issue
We will be using [JIRA](https://adaptlearning.atlassian.net/) to log and manage all issues. You don’t need to have a JIRA account to be able to log issues.

In JIRA, click the 'Create' button at the top of the page (or press the 'c' key) - or use [this direct link](https://adaptlearning.atlassian.net/secure/CreateIssue!default.jspa).

In the **Project** field, select _Adapt Framework_.

In the **Issue type** field, select _Bug_.

In the **Summary** field, enter a succinct but informative summary (see the above section _What to report_). If your issue relates to a specific plugin, please prefix the summary with the name of that plugin, for example: "contrib-mcq: feedback not shown".

In the **Priority** field, choose an appropriate priority level. If you are not sure, please use _Normal_.

In the **Component/s** field, select _Framework_.

In the **Affects Version/s** field, select _2.0.0_

In the **Environment** field, please enter details about your browser and operating system - for example "IE9 on Windows 7" or "Safari on iPad Mini, iOS 8.3"

In the **Description** field, please enter a description of the issue along with steps to recreate it (see the above section _What to report_)

You can ignore the remaining fields.

## Fixing bugs
Do you know how to fix the issue? If so, awesome :thumbsup:! Please feel free to fork the relevant repository, create a branch (based on the develop branch!), make your changes and issue a pull request. If you give your branch the same name as the ticket you created (e.g. ABU-123) then JIRA *should* automatically detect your branch and pull request and add them to the ticket automatically. One of the team will then review your change and either suggest further changes or, if all is well, merge your change into the code. If that sounds like too much work or you just don't have time, please just go ahead and suggest a fix in the ticket and one of the team will pick it up.
